import styled from 'styled-components'
import Header from '../components/Header'
import CardLevel from '../components/LevelCard'
import Scoreboard from '../components/ScoreBoard'

const HomeComponent = styled.div`
    display: grid;
    min-width: 100vw;
    min-height: 100vh;
    grid-template-rows: auto;
`
const HomeBody = styled.section`
    display: grid;
    justify-content: center;
`

const LevelBody = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
`

export default function Home() {
    return (
        <HomeComponent>
            <Header />
            <HomeBody>
                <LevelBody>
                    <CardLevel title="easy"/>
                </LevelBody>
                <Scoreboard />
            </HomeBody>
        </HomeComponent>
    )
}