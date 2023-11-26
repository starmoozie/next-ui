"use client";

import React from "react";
import {
    Table as TableData,
    TableHeader,
    TableColumn,
    TableBody,
    TableRow,
    TableCell
} from "@nextui-org/react";
import { users, statusOptions } from "./data";
import TopContent from "./TopContent";
import BottomContent from "./BottomContent";
import RenderCell from "./RenderCell";

const INITIAL_VISIBLE_COLUMNS = ["name", "role", "status", "actions"];

export default function Table({ columns }) {
    // Default filter value
    const [filterValue, setFilterValue] = React.useState("");
    // Selected key checkbox
    const [selectedKeys, setSelectedKeys] = React.useState(new Set([]));
    // Visibled columns
    const [visibleColumns, setVisibleColumns] = React.useState(new Set(INITIAL_VISIBLE_COLUMNS));
    // Filter status
    const [statusFilter, setStatusFilter] = React.useState("all");
    // Rows page
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    // Sort description
    const [sortDescriptor, setSortDescriptor] = React.useState({
        column: "age",
        direction: "ascending",
    });
    // Page
    const [page, setPage] = React.useState(1);

    // Check if search has value
    const hasSearchFilter = Boolean(filterValue);

    // Header columns
    const headerColumns = React.useMemo(() => {
        if (visibleColumns === "all") return columns;

        return columns.filter((column) =>
            Array.from(visibleColumns).includes(column.uid)
        );
    }, [visibleColumns]);

    // Filtered data
    const filteredItems = React.useMemo(() => {
        let filteredUsers = [...users];

        if (hasSearchFilter) {
            filteredUsers = filteredUsers.filter((user) =>
                user.name.toLowerCase().includes(filterValue.toLowerCase())
            );
        }

        if (statusFilter !== "all" && Array.from(statusFilter).length !== statusOptions.length) {
            filteredUsers = filteredUsers.filter((user) =>
                Array.from(statusFilter).includes(user.status)
            );
        }

        return filteredUsers;
    }, [users, filterValue, statusFilter]);

    // Count page
    const pages = Math.ceil(filteredItems.length / rowsPerPage);

    // Items per page
    const items = React.useMemo(() => {
        const start = (page - 1) * rowsPerPage;
        const end = start + rowsPerPage;

        return filteredItems.slice(start, end);
    }, [page, filteredItems, rowsPerPage]);

    // Sorted data
    const sortedItems = React.useMemo(() => {
        return [...items].sort((a, b) => {
            const first = a[sortDescriptor.column];
            const second = b[sortDescriptor.column];
            const cmp = first < second ? -1 : first > second ? 1 : 0;

            return sortDescriptor.direction === "descending" ? -cmp : cmp;
        });
    }, [sortDescriptor, items]);

    // Rendered cell value
    const renderCell = React.useCallback((user, columnKey) => <RenderCell
        columnKey={columnKey}
        user={user}
        cellValue={user[columnKey]}
    />, []);

    // Handle row per page
    const onRowsPerPageChange = React.useCallback((e) => {
        setRowsPerPage(Number(e.target.value));
        setPage(1);
    }, []);

    // Handle search
    const onSearchChange = React.useCallback((value) => {
        if (value) {
            setFilterValue(value);
            setPage(1);
        } else {
            setFilterValue("");
        }
    }, []);

    // Render Top Content
    const topContent = React.useMemo(() => <TopContent
        onSearchChange={onSearchChange}
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}
        onRowsPerPageChange={onRowsPerPageChange}
        filterValue={filterValue}
        visibleColumns={visibleColumns}
        setVisibleColumns={setVisibleColumns}
        setPage={setPage}
        setFilterValue={setFilterValue}
    />,
    [
        filterValue,
        statusFilter,
        visibleColumns,
        onRowsPerPageChange,
        users.length,
        onSearchChange,
        hasSearchFilter
    ]);

    // Render bottom content
    const bottomContent = React.useMemo(() => <BottomContent
        selectedKeys={selectedKeys}
        filteredItems={filteredItems}
        page={page}
        pages={pages}
        setPage={setPage}
    />, [selectedKeys, items.length, page, pages, hasSearchFilter]);

    return (
        <TableData
            aria-label="Example table with custom cells, pagination and sorting"
            isHeaderSticky
            bottomContent={bottomContent}
            bottomContentPlacement="outside"
            classNames={{ wrapper: "max-h-[552px]" }}
            selectedKeys={selectedKeys}
            selectionMode="multiple"
            sortDescriptor={sortDescriptor}
            topContent={topContent}
            topContentPlacement="outside"
            onSelectionChange={setSelectedKeys}
            onSortChange={setSortDescriptor}
        >
            <TableHeader columns={headerColumns}>
                {
                    (column) => <TableColumn
                        key={column.uid}
                        align={column.uid === "actions" ? "center" : "start"}
                        allowsSorting={column.sortable}
                    >
                        {column.name}
                    </TableColumn>
                }
            </TableHeader>
            <TableBody emptyContent={"No users found"} items={sortedItems}>
                {
                    (item) => <TableRow key={item.id}>
                        {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
                    </TableRow>
                }
            </TableBody>
        </TableData>
    );
}
