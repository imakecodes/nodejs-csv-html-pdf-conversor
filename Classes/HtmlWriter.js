const fs = require('fs');
const util = require('util');

class HtmlWriter {
    constructor() {
        this.writer = util.promisify(fs.writeFile);
    }

    async WriteHtml(filename, data) {
        try {
            await this.writer(`./output/html/${filename}`, data);

            return true;
        } catch (error) {
            return false;
        }

    }
}

module.exports = HtmlWriter;