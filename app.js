const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

const Reader = require('./Classes/Reader');
const Processor = require('./Classes/Processor');
const Table = require('./Classes/Table');
const HtmlParser = require('./Classes/HtmlParser');
const HtmlWriter = require('./Classes/HtmlWriter');
const PdfWriter = require('./Classes/PdfWriter');

let reader = new Reader();
let htmlWriter = new HtmlWriter();

// Insert a command line question to inform the .csv file path (to perform the html and pdf convertion)
readline.question('Insert the .csv file path: ', path => {
    readline.close();

    main(path);
});

async function main(filepath) {
    if (!filepath || !filepath.includes('.csv')) {
        return console.log('No valid csv file path passed!');
    }

    // const data = await reader.Read('./inputs/users.csv');
    const data = await reader.Read(filepath);
    const processedData = Processor.Process(data);

    const users = new Table(processedData);
    const html = await HtmlParser.Parse(users);

    // create html file on htmlResults folder
    htmlWriter.WriteHtml(Date.now() + '.html', html);

    // create pdf file on pdfResults folder
    PdfWriter.WritePDF(Date.now() + '.pdf', html);
}