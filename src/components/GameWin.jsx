import styled from "styled-components"
import { useNavigate, Link, useOutletContext } from "react-router"
import { useEffect, useMemo, useRef, useState } from "react"
import { addPlayer } from "../module/queries"


const Dialog = styled.dialog`
    position: absolute;
    top: 50%;
    left: 50%;
    right: auto;
    bottom: auto;
    margin-right: -50%;
    transform: translate(-50%, -50%);
    background-color: #a9d3a0;
    z-index: 4;
    border-radius: 1em;
    border: none;
    display: grid;
    gap: 1em;
    color: #261d3d;
    width: 90%;
    max-width: 360px;
    padding: 2em 1em;
`
const Text = styled.span`
    font-size: 1.3rem;
`
const Button = styled.button`
    background-color: #9f95f5;
    padding: 10px 1em;
    font-size: 1.5rem;
`

const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100%;
    z-index: 4;
    background-color: rgba(138, 141, 110, 80%)
`

const Form = styled.form`
    font-size: 1.3rem;
    display: grid;
    gap: 1em;
`

const Input = styled.input`
    all: unset;
    font-size: 1.3rem;
    border-bottom: dotted black 4px;
`
const Label = styled.label`
    
`

export default function FinishGame({timerRef}) {
    const navigate = useNavigate();
    const [name, setName] = useState('The anonymous giant')
    const {setRefresh, setMessage} = useOutletContext();
    const scoreRef = useRef();

    useEffect(() => {
        if (timerRef.current) {
            scoreRef.current = timerRef.current.innerText;
        }
    }, [])

    const handleSave = async (e) => {
        e.preventDefault();
        if (scoreRef.current) {
            const time = scoreRef.current;
            const result = await addPlayer(name, time)
            setMessage(result.message)
        }
        navigate('/', {replace: true})
        setRefresh(true);
    }

    const handleClose = () => {
       navigate('/', {replace: true})
       setRefresh(true)
    }

    return (
        <Overlay>
            <Dialog open>
                <Text>You Won</Text>
                <Text>Submit Score</Text>
                <Form onSubmit={handleSave}>
                    <Label htmlFor="name">Enter a name:</Label>
                    <Input value={name} onChange={(e) => setName(e.target.value)}/>
                   <Button type="submit">Save</Button>
                </Form>
                <Button onClick={handleClose}>Close</Button>
            </Dialog>
        </Overlay>
    )
}