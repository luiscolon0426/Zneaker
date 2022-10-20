export const htmlScreening = function htmlScreening(fileContent) {
    let entities = [
        "&lt;",
        "&gt;",
        "&amp;",
        "&quot;",
        "&apos;"
    ]

    let results = [
        "<",
        ">",
        "&",
        "\"",
        "'"
    ]

    let newFileContent
    let symbol
    entities.forEach((entity, index) => {
        symbol = entity.replace(/['"]+/g, '');
        let re = new RegExp(symbol, "g")
        if (re.test(fileContent)) {
            if (!newFileContent) {
                newFileContent = fileContent.replace(re, results[index])
            } else {
                newFileContent = newFileContent.replace(re, results[index])
            }
        }
    })
    if (newFileContent) {
        return newFileContent
    } else {
        return fileContent
    }
}