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

export const handleChoice = (result, names, setNames, setMessage) => {
    try {
        if (result.success) {
            setMessage(result.message)
            const updatedNames = names.map((element, index) => {
                if (element.name === result.character.name) {
                    return {name: element.name, found: true}
                } else {
                    return element
                };
            });
            setNames(updatedNames);
        } else {
            setMessage(result.message)
        }
    } catch (error) {
        console.log(error)
    }
}