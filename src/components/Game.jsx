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
    padding: 1em;
    border-radius: 10px;
    border: #d3c15c solid 5px;
    gap: 1em;
    cursor: pointer;
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
    height: 100%;
    
`
const XAxisLine = styled.span`
    flex: 100%;
    display: inline-flex;
`

const YAxisLine = styled.span`
    //border: 1px solid black;
    display: inline-block;
    flex: 1%;
    height: 100%;
`

const BoardComponent = styled.div`
    display: grid;
    flex-wrap: wrap;
    position: sticky;
    width: 100%;
    bottom: 800px;
    z-index: 2;
    height: 100%;
    grid-template-rows: repeat(100, minmax(4px, 6px));
`
const ImageContainer = styled.div`
    display: flex;
    width: fit-content;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`

export default function Game() {
    const [showNames, setShowNames] = useState(false);
    const optionsRef = createRef(null)

    useEffect(() => {
        if (showNames && optionsRef.current) {
            optionsRef.current.style.display = 'grid'
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
        let x  = e.clientX;
        let y = e.clientY;
        if (optionsRef.current) {
            optionsRef.current.style.display = 'none'
            optionsRef.current.style.left = `${x}px`
            optionsRef.current.style.top = `${y}px`
            setTimeout(() => {
                optionsRef.current.style.display = 'grid'
            })
        }
    }


    return (
        <GameBodyContainer >
                <Title>Shinchan world</Title>
                <ImageContainer >
                    <Image src="/images/shinchan.webp" alt="" />
                    <Board onClick={handleClick} />
                </ImageContainer>
                
                <NameOptions ref={optionsRef}/>
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
    
`
const Character = styled.div`
    
`

const CharacterName = styled.span`
    
`
const CharacterImage = styled.img`
    
`
function Characters() {
    return (
        <CharactersContainer>
            <Character>
                <CharacterName>
                    NAME 1
                </CharacterName>
                <CharacterImage />
            </Character>
        </CharactersContainer>
    )   
}