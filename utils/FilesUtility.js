import path from "path"
export class FilesUtility
{
    static async  clickOnDownloadFile(page,locator) {
    const [downloadedFile]=await Promise.all([
        page.waitForEvent("download"),
        locator.click()
    ])
    return downloadedFile;
}
static async  saveDownLoadedFile(page,locator) {
    const [downloadedFile]=await Promise.all([
        page.waitForEvent("download"),
        locator.click()
    ])
    let fileName=downloadedFile.suggestedFilename()
    const fullPath=path.join( process.cwd(),"downloaded",fileName)
    await downloadedFile.saveAs(fullPath)
    return{
        fileName,
        fullPath
    } 
}
static async  upLoadFile(locator,fileName) {
   await locator.setInputFiles(fileName)
}
static async  upLoadMultipleFile(locator,fileNames) {
    await locator.setInputFiles(fileNames)
}
static async  clearUpLoadFile(locator) {
    await locator.setInputFiles([])
}
}