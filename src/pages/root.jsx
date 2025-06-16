import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom"
import { getAllEasyChracters, getAllPlayers } from "../module/queries";
import { buildEasyGame, buildPlayers } from "../module/gameHandler";
import { Hourglass } from 'ldrs/react'
import 'ldrs/react/Hourglass.css'
import styled from "styled-components";
import Notification from "../components/Notification";
import {toast} from 'react-toastify'

const LoadingDialog = styled.dialog`
    background-color: transparent;
    border: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1em;
    width: 100%;
    height: 100%;
    background-color: rgba(238, 236, 225, 80%);
`

const LoadingText = styled.span`
    color: #20201f;
    font-size: 2rem;
    font-weight: 600;
`

export default function Root() {
    const [easyCharacterNames, setEasyCharacterNames] = useState([])
    const [players, setPlayers] = useState([])
    const [message, setMessage] = useState(null)
    const [refresh, setRefresh] = useState(true);
    
    useEffect(() => {
        if (refresh) {
            const characters = async () => {
                const r = await getAllEasyChracters();
                const result = buildEasyGame(r)
                setEasyCharacterNames(result);
            }

            const players = async () => {
                const result = await getAllPlayers();
                const r = buildPlayers(result.players)
                setPlayers(r);
            }
            players()
            characters()
        }
        setRefresh(false)
    }, [refresh])

    useEffect(() => {
        if (message) {
            toast(message)
        }
        setMessage(null)
    }, [message])
    
    return (
        <>
            <Notification />
            {refresh &&
                <LoadingDialog>
                    <Hourglass
                        size="40"
                        bgOpacity="0.1"
                        speed="1.75"
                        color="black" 
                    />
                    <LoadingText>Loading...</LoadingText>
                </LoadingDialog>
            }
            <Outlet 
                context={{easyCharacterNames, setEasyCharacterNames, setMessage, setRefresh, players}}
            />

        </>
    )
}