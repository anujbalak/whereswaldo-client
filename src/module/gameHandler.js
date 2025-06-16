/* eslint-disable no-unused-vars */
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

export const buildPlayers = (players) => {
    let result = []
    for(let i = 0; i < players.length; i++) {
        let player = {
            name: players[i].name,
            time: players[i].time,
            id: players[i].id,
            rank: i + 1,
        }
        result.push(player)
    }
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

const getClickedLocation = (x, y) => {
    const element = document.querySelector(`span[data-x="${x}"][data-y="${y}"]`)

    console.log(element)
}
