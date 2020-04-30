const express = require('express');
const cors = require('cors');
const formidable = require('formidable')
const generateRaceReport = require('./excel')
const app = express();

app.use(express.json())
app.use(cors({
    origin: 'chrome-extension://lfkjihgbkeceahekbkgponamcbfnimkg'
}));


app.get('/api', (req, res) => {
    res.send('Chrome extension api')
})

app.post('/api/report', (req, res) => {
    const form = formidable({multiples: true})

    form.parse(req, (err, fields, files) => {
        let workbook = generateRaceReport(fields);
        workbook.write('RaceReport', res)
    })
})

let port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})