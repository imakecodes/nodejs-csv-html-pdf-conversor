class Table {
    constructor(array) {
        this.header = array[0];
        array.shift(); // remove the first element from an array (header row)
        this.rows = array;
    }

    // get transforms a method on an attribute by virtualization, but it's needed to return something
    get RowCount() {
        return this.rows.length;
    }

    get ColumnCount() {
        return this.header.length;
    }
}

module.exports = Table;