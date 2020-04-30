const excel = require('excel4node');

let generateRaceReport = (data) => {
    const numberOfFields = 3
    let workBook = new excel.Workbook();
    let worksheet = workBook.addWorksheet('Sheet 1');

    let style = workBook.createStyle({
        font: {
            color: '#000000',
            size: 12
        },
        alignment: {
            horizontal: 'center'
        }
    })

    for(let i = 0; i < data.grade.length; i ++) {
        worksheet.cell(i + 1, 1)
            .string(data.grade[i])
            .style(style)
    }

    for(let i = 0; i < data.name.length; i ++) {
        worksheet.cell(i + 1, 2)
            .string(data.name[i])
            .style(style)
    }

    for(let i = 0; i < data.time.length; i ++) {
        worksheet.cell(i + 1, 3)
            .string(data.time[i])
            .style(style)
    }

    for(let i = 1; i <= 3; i++) {
        worksheet.column(i).setWidth(40)
    }

    return workBook;
}

module.exports = generateRaceReport;