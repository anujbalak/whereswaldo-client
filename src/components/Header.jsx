import { Link } from 'react-router'
import styled from 'styled-components'

const HeaderComponent = styled.header`
    border-bottom: solid #971f41;
    width: 100%;
    align-self: first baseline;
    padding: 1em;
    background-color: #e84e78;
`

const TitleContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

const Title = styled.h1`
    color: #eef3c0;
`

export default function Header() {
    return (
        <>
            <HeaderComponent>
                <TitleContainer>
                    <Link to="/">
                        <Title>whereswally</Title>
                    </Link>
                </TitleContainer>
            </HeaderComponent>
        </>
    )
}