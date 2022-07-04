const pdf = require('html-pdf');

class PdfWriter {
    static WritePDF(filename, html) {
        // This option is kinda required to skip OPENSSL linux config (works ok on windows without it , but not on linux)
        const childProcessOptions = {
            env: {
                OPENSSL_CONF: '/dev/null',
            },
        };

        pdf.create(html, { childProcessOptions }).toFile(`./output/pdf/${filename}`, (err) => {
            if (err) {
                console.log(err);
            }
        });
    }
}

module.exports = PdfWriter;