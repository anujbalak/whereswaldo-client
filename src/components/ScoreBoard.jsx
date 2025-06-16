import styled from "styled-components";
import { GameBodyContainer } from "./Game";
import { useOutletContext } from "react-router";

const ScoreboardContainer = styled(GameBodyContainer)`
    height: fit-content;
    width: 90%;
    max-width: 1000px;
    gap: 1em;
`
const ScoreCard = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    font-size: 1.5rem;
`

const Rank = styled.span`
    
`
const Span = styled.span`
    
`

export default function Scoreboard() {
    const {players} = useOutletContext()
    return (
        <>{players &&
            <ScoreboardContainer>
                <ScoreCard >
                    <Rank>
                        Rank
                    </Rank>
                    <Span>
                        Name
                    </Span>
                    <Span>
                        Time
                    </Span>
                </ScoreCard>
                {players.map(player => {
                    return (
                        <ScoreCard key={player.id}>
                            <Rank >
                                {player.rank}
                            </Rank>
                            <Span>
                                {player.name}
                            </Span>
                            <Span>
                                {player.time}
                            </Span>
                        </ScoreCard>
                    )
                })

                }
            </ScoreboardContainer>
        }
        </>
    )
}
