export const BACKEND_URL = "http://localhost:8000";

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