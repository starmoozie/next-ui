export function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Kate njupuk array seng value kolome === kolom
 * @param {*} arr array of object
 * @param {*} column string
 * @returns array
 */
export function extractColumn(arr, column) {
    return arr.map((x) => x[column]);
}
