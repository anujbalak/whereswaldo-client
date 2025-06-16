export const BACKEND_URL = "https://whereswaldo-backend.onrender.com";

export const getAllEasyChracters = async () => {
    try {
       let characters = null;
       const url = `${BACKEND_URL}/game/easy/characters`
       await fetch(url)
        .then(response => response.json())
        .then(response => characters = response)
        .catch(e => console.log(e))
        return characters;
    } catch (error) {
        console.error(error)
    }
}


export const getAllPlayers = async () => {
    try {
       let players = null;
       const url = `${BACKEND_URL}/players`
       await fetch(url)
        .then(response => response.json())
        .then(response => players = response)
        .catch(e => console.log(e))
        return players;
    } catch (error) {
        console.error(error)
    }
}

export const postEasyGameValues = async (name, x, y) => {
    try {
        let result = null;
        const url = `${BACKEND_URL}/game/easy`
        await fetch(url, {
            method:"post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({name, x, y})
        })
            .then(response => response.json())
            .then(response => result = response)
            .catch(e => console.log(e))
        
            return result
    } catch (error) {
        console.error(error);
    }
}

export const startGame = async () => {
    try {
       let time = null;
       const url = `${BACKEND_URL}/start`
       await fetch(url)
        .then(response => response.json())
        .then(response => time = response)
        .catch(e => console.log(e))
        return time;
    } catch (error) {
        console.error(error)
    }
}

export const addPlayer = async (name, time) => {
    try {
        let result = null;
        const url = `${BACKEND_URL}/players`
        await fetch(url, {
            method:"post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({name, time})
        })
            .then(response => response.json())
            .then(response => result = response)
            .catch(e => console.log(e))
        
            return result
    } catch (error) {
        console.error(error);
    }
}