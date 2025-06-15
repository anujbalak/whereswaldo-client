import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom"
import { getAllEasyChracters } from "../module/queries";
import { buildEasyGame } from "../module/gameHandler";

export default function Root() {
    const [easyCharacterNames, setEasyCharacterNames] = useState([])
    const [message, setMessage] = useState(null)
    
    useEffect(() => {
        const characters = async () => {
            const r = await getAllEasyChracters();
            const result = buildEasyGame(r)
            setEasyCharacterNames(result);
        }
        characters()
    }, [])

    console.log(easyCharacterNames)
    console.log(message)
    
    return (
        <>

            <Outlet 
                context={{easyCharacterNames, setEasyCharacterNames, setMessage}}
            />

        </>
    )
}