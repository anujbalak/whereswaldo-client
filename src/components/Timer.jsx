import { useEffect, useState } from 'react'
import Countdown from 'react-countdown'
import styled from 'styled-components'
import { startGame } from '../module/queries.js'
import { Link, useNavigate, useOutletContext } from 'react-router'

const TimerComponent = styled.span`
    font-size: 2.5rem;
    color: #b43c5d;
    font-weight: 700;
`

export default function Timer({setStart, ref}) {
    const [timer, setTimer] = useState(null)

    useEffect(() => {
        const getTime = async () => {
            const t = await startGame();
            setTimer(Date.now() + t.time * 1000)
        }
        getTime()
    }, [])

    const onRef = (node) => {
        ref.current = node;
    }

    const renderer = ({ minutes, seconds, completed }) => {
        if (completed) {
          return <Completionist />;
        } else {
          return <TimerComponent ref={onRef}>{minutes}:{seconds}</TimerComponent>;
        }
    };

    return (
        <>  
            {timer &&
                <Countdown 
                    date={timer} 
                    renderer={renderer} 
                    onStart={() => setStart(true)}
                    controlled={false}
                >
                        
                </Countdown>
            }
        </>
    )
}

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
`
const Text = styled.span`
    font-size: 1.3rem;
`
const RestartButton = styled.button`
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

const ButtonContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1em;
`
const Completionist = () => {
    const navigate = useNavigate();
    const { setRefresh, setMessage } = useOutletContext()

    useEffect(() => {
        setMessage('Time up')
    }, [])

    const handleRestart = () => {
        navigate(0)
        setRefresh(true)
    }
    const handleClose = () => {
        navigate('/', {replace: false})
        setRefresh(true)
    }
    return (
        <Overlay>
            <Dialog open>
                <Text>Time Up!</Text>
                <Text>Wanna give another shot</Text>
                <ButtonContainer>
                    <RestartButton onClick={handleRestart}>Restart</RestartButton>
                    <RestartButton onClick={handleClose}>Close</RestartButton>
                </ButtonContainer>
            </Dialog>
        </Overlay>
    )
}