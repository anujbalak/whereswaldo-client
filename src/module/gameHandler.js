export const buildEasyGame = (names) => {
    let result = []
    names.forEach(el => {
        let object = {
            name: el.name,
            found: false
        }
        result.push(object)
    });
    return result
}