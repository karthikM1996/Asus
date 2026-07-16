import ExcelJS from "exceljs";


export class ExcelUtility 
{
    static async readDataFromExcel(filePath, sheetName, row, cell) 
    {
        const workbook = new ExcelJS.Workbook();
        await workbook.xlsx.readFile(filePath);
        const sheet = workbook.getWorksheet(sheetName);
        const data = sheet.getRow(row).getCell(cell).value;
        return data;
    }

    static async readMultipleDataFromExcel(filePath, sheetName) 
    {
        const workbook = new ExcelJS.Workbook();
        await workbook.xlsx.readFile(filePath);
        const sheet = workbook.getWorksheet(sheetName);
        const rowCount = sheet.actualRowCount;
        const cellCount = sheet.getRow(1).actualCellCount;
        let dataArr = [];
        for(let i = 1; i <= rowCount; i++) {
            let rowData = [];
            for(let j = 1; j <= cellCount; j++) {
                rowData.push(sheet.getRow(i).getCell(j).value);
            }
            dataArr.push(rowData);
        }
        return dataArr;
    }

    static async writeDataIntoExcel(filePath,sheetName,row,cell,text)
     {
        const workbook = new ExcelJS.Workbook();
        await workbook.xlsx.readFile(filePath);
        const sheet = workbook.getWorksheet(sheetName);
        sheet.getRow(row).getCell(cell).value = text;
        await workbook.xlsx.writeFile(filePath);
    }
}