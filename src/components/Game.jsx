import styled from "styled-components";
import Header from "./Header";
import { createRef, useEffect, useRef, useState } from "react";
import { NameOptions } from "./NameOptions";

const GameBodyContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #eef3c0;
    width: fit-content;
    justify-content: center;
    align-items: center;
    padding: 2em;
    border-radius: 10px;
    border: #d3c15c solid 5px;
    gap: 1em;
    flex-wrap: wrap;
    margin: 1em;
    height: 100%;
`
const Title = styled.span`
    font-size: 1.8rem;
    font-weight: 700;
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
    bottom: 800px;
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
`

export default function Game() {
    const [showNames, setShowNames] = useState(false);
    const optionsRef = createRef(null);
    const [clickedName, setClickedName] = useState(null);
    const [cords, setCords] = useState(null);

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
        let cordX = (e.target.getAttribute('data-x'))
        let cordY = (e.target.getAttribute('data-y'))
        console.log(cordX, cordY)
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
            setCords(null);
            setClickedName(null)
        }

    }, [cords, clickedName])

    return (
        <GameBodyContainer >
                <Title>Shinchan world</Title>
                <ImageContainer >
                    <Image src="/images/shinchan.webp" alt="" data-picture={true}/>
                    <Board onClick={handleClick} />
                </ImageContainer>
                <Characters />
                <NameOptions ref={optionsRef} setName={setClickedName}/>
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
`
const Character = styled.div`
    display: grid;
    gap: 1em;
    grid-template-rows: auto;
    background-color: #e66c87;
    padding: 1em;
    border-radius: 10px;
`

const CharacterName = styled.span`
    font-size: 1.3rem;
`
const CharacterImage = styled.img`
    border-radius: 10px;
`
function Characters() {
    return (
        <CharactersContainer>
            <Character>
                <CharacterName>
                    Name 1
                </CharacterName>
                <CharacterImage src="/images/mock.jpg" alt=""/>
            </Character>
            <Character>
                <CharacterName>
                    Name 2
                </CharacterName>
                <CharacterImage src="/images/mock.jpg" alt=""/>
            </Character>
            <Character>
                <CharacterName>
                    Name 3
                </CharacterName>
                <CharacterImage src="/images/mock.jpg" alt=""/>
            </Character>
            <Character>
                <CharacterName>
                    Name 4
                </CharacterName>
                <CharacterImage src="/images/mock.jpg" alt=""/>
            </Character>
        </CharactersContainer>
    )   
}
