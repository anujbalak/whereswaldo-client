import styled from 'styled-components'
import Header from '../components/Header'
import CardLevel from '../components/LevelCard'
import Game from '../components/Game'

const HomeComponent = styled.div`
    display: flex;
    min-width: 100vw;
    min-height: 100vh;
    flex-direction: column;
    gap: 2em;
`
const HomeBody = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
`


export default function EasyGame() {
    return (
        <HomeComponent>
            <Header />
            <HomeBody>
                <Game />
            </HomeBody>
        </HomeComponent>
    )
}