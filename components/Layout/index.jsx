import React from 'react';
import Navbar from './Navbar';
import Table from '@/components/Table';

const Layout = ({ columns }) => {
    return (
        <>
            <Navbar />
            <div className="px-12 pt-12 flex gap-4 flex-col pb-16 flex-grow">
                <Table columns={columns} />
            </div>
        </>
    );
};

export default Layout;