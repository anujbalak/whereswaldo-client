import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom"
import { getAllEasyChracters } from "../module/queries";
import { buildEasyGame } from "../module/gameHandler";

export default function Root() {
    const [easyCharacterNames, setEasyCharacterName] = useState([])
    
    useEffect(() => {
        const characters = async () => {
            const r = await getAllEasyChracters();
            const result = buildEasyGame(r)
            setEasyCharacterName(result);
        }
        characters()
    }, [])

    console.log(easyCharacterNames)
    
    return (
        <>

            <Outlet 
                context={{easyCharacterNames, setEasyCharacterName}}
            />

        </>
    )
}