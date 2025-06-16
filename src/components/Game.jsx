import styled from "styled-components";
import { createRef, useEffect, useRef, useState } from "react";
import { NameOptions } from "./NameOptions";
import { postEasyGameValues } from "../module/queries";
import { useOutletContext } from "react-router";
import { handleChoice } from "../module/gameHandler";
import Timer from "./Timer";
import FinishGame from "./GameWin";

export const GameBodyContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #eef3c0;
    width: fit-content;
    justify-content: center;
    align-items: center;
    padding: 2em;
    border-radius: 10px;
    border: #d3c15c solid 5px;
    gap: 3em;
    flex-wrap: wrap;
    margin: 1em;
    height: 100%;
`
const Title = styled.span`
    font-size: 1.8rem;
    font-weight: 700;
    display: grid;
`

const Image = styled.img`
    border-radius: 10px;
    background-position: center;
    width: 100%;
    z-index: 2;
    height: 600px;
`
const XAxisLine = styled.span`
    flex: 100%;
    display: grid;
    grid-template-rows: repeat(100, 6px);
`

const YAxisLine = styled.span`
    //border: 1px solid black;
    display: inline-block;
`

const BoardComponent = styled.div`
    display: grid;
    flex-wrap: wrap;
    position: sticky;
    width: 100%;
    bottom: 600px;
    z-index: 2;
    height: 100%;
    grid-template-columns: repeat(100, 1%);
`
const ImageContainer = styled.div`
    display: flex;
    width: fit-content;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    cursor: pointer;
    width: 100%;
    height: 600px;
`

export default function Game() {
    const [showNames, setShowNames] = useState(false);
    const optionsRef = createRef(null);
    const [clickedName, setClickedName] = useState(null);
    const [cords, setCords] = useState(null);
    const { setEasyCharacterNames, easyCharacterNames, setMessage, setRefresh} = useOutletContext();
    const [isStart, setStart] = useState(false)
    const [isFinish, setFinish] = useState(false);
    const timerRef = useRef(null)

    useEffect(() => {
        setRefresh(true)
    }, [setRefresh])

    useEffect(() => {
        if (showNames && optionsRef.current) {
            optionsRef.current.style.display = 'flex'
        } else if (!showNames && optionsRef.current) {
            optionsRef.current.style.display = 'none'
        }
    }, [showNames, optionsRef])

    useEffect(() => {
        window.addEventListener('click', (e) => {
            if (!e.target.getAttribute('datatype')) {
                setShowNames(false)
            } 
        })
    })
    const handleClick = (e) => {
        setShowNames(true)
        let x  = e.pageX;
        let y = e.pageY;
        let cordX = Number(e.target.getAttribute('data-x'))
        let cordY = Number(e.target.getAttribute('data-y'))
        if (cordX && cordY) {
            setCords({x: cordX, y: cordY})
        }

        if (optionsRef.current) {
            optionsRef.current.style.left = `${x - 40}px`
            optionsRef.current.style.top = `${y- 50}px`
        }
    }


    useEffect(() => {
        if (cords && clickedName) {
            const sendCords = async () => {
                const result = await postEasyGameValues(clickedName, cords.x, cords.y)
                handleChoice(result, easyCharacterNames, setEasyCharacterNames, setMessage);
            }
            sendCords()
            setCords(null);
            setClickedName(null)
        }

    }, [cords, clickedName])

    useEffect(() => {
        if (easyCharacterNames.length > 0) {
            if (easyCharacterNames.every(name => name.found === true)) {
                setFinish(true)
                
            }
        }
    }, [easyCharacterNames, setMessage])

    useEffect(() => {
        if (isFinish) {
            setMessage('You Won')
        }
    }, [isFinish, setMessage])    

    return (
        <GameBodyContainer >
                <Title>Shinchan world 
                    <Timer setStart={setStart} setFinish={setFinish} finish={isFinish} ref={timerRef}/>

                </Title> 
                {isStart &&
                <>
                    <ImageContainer >
                        <Image src="/images/shinchan.webp" alt="" data-picture={true}/>
                        <Board onClick={handleClick} />
                    </ImageContainer>
                    <Characters />
                    <NameOptions ref={optionsRef} setName={setClickedName}/>
                </>
                }      
                {isFinish &&
                    <FinishGame timerRef={timerRef}/>
                }  
        </GameBodyContainer>
    )
}

function Board({onClick}) {
    let i = 100;

    let xCords = []
    let yCords = []
    while (i > 0) {
        xCords.push(i)
        yCords.push(i)
        i--;
    }


    return (
        <>
            <BoardComponent onClick={onClick}>
                {xCords.map(xCord =>
                    <XAxisLine key={xCord}>
                        {
                            yCords.map(yCord => 
                                <YAxisLine key={yCord} data-y = {yCord} data-x = {xCord} datatype="cord">
                                </YAxisLine>
                            )
                        }
                    </XAxisLine>
                )}
            </BoardComponent>
        </>
    )
}


const CharactersContainer = styled.div`
    display: flex;
    gap: 1em;
    width: 100%;
    justify-content: space-evenly;
    background-color: #eebe88;
    border: #836645 solid 5px;
    border-radius: 10px;
    padding: 1em 0;
    flex-wrap: wrap;
    margin-top: 1em;
`
const Character = styled.div`
    display: flex;
    gap: 1em;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: ${props => props.$found ? "#7bf1b6" : "#e66c87"};
    padding: 1em;
    border-radius: 10px;
    white-space: initial;
    width: fit-content;
    max-width: 200px;
`

const CharacterName = styled.span`
    font-size: 1.3rem;
`
const CharacterImage = styled.img`
    border-radius: 10px;
    width: 100px;
    height: 100px;
`
function Characters() {
    const {easyCharacterNames} = useOutletContext();
    
    return (
        <CharactersContainer>
            {easyCharacterNames.length > 0 &&
                <>
                    <CharacterCard 
                        name="Interesting Character"
                        found={easyCharacterNames[0].found}
                        img="/easy/easy-1.jpg"
                    />
                    <CharacterCard 
                        name="Goggle Man"
                        found={easyCharacterNames[1].found}
                        img="/easy/easy-3.jpg"
                    />
                    <CharacterCard 
                        name="Silent Girl (maybe?)"
                        found={easyCharacterNames[2].found}
                        img="/easy/easy-2.jpg"
                    />
                    <CharacterCard 
                        name="Nice moustache (never watched Shinchan :)"
                        found={easyCharacterNames[3].found}
                        img="/easy/easy-4.jpg"
                    />
                </>
            }
        </CharactersContainer>
    )   
}

const CharacterCard = ({name, found, img}) => {
    return (
        <>
            {found ?
                <Character $found>
                    <CharacterName>
                        {name}
                    </CharacterName>
                    <CharacterImage src={img} alt=""/>
                </Character>
            :
                <Character>
                    <CharacterName>
                        {name}
                    </CharacterName>
                    <CharacterImage src={img} alt=""/>
                </Character>
            }
        </>
    )
}

