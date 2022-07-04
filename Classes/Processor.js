class Processor {
    static Process(data) {
        let dataArray = data.split('\r\n');
        let rows = [];

        dataArray.forEach(row => {
            const rowArray = row.split(',');
            rows.push(rowArray);
        });

        return rows;
    }
}

module.exports = Processor;