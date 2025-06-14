import styled from "styled-components"

const Container = styled.div`
    animation: slide ease-in 0.3s;
    animation-fill-mode: both;
    background-color: #ee7c9e;
    display: grid;
    padding: 1em;
    gap: 1em;
    border-radius: 10px;
    grid-template-rows: auto;
    justify-content: center;
    @keyframes slide {
        0% {
            transform: translateX(0);
            transform: scaleX(0);
            transform-origin: right;
        }
        100% {
            transform: translate(-100%);
            transform: scaleX(1);
            transform-origin: right;
        }
    }
`

const OptionsContainer = styled.div`
    position: absolute;
    z-index: 3;
    width: fit-content;
    width: 200px;
`

const Option = styled.span`
    width: 80px;
    cursor: pointer;
    transition: transoform 0.2s ease-in-out;
    &:hover, &:focus {
        transform: scale(1.1);
        text-decoration: underline;
        text-decoration-thickness: 3px;
    }
`

export function NameOptions({ref, setName}) {
    return (
        <OptionsContainer ref={ref}>
            <CursorClick />
            <Container>
                <Option onClick={() => setName('name_1')}>
                   Interesting Character
                </Option>
                <Option onClick={() => setName('name_2')}>
                    Silent Girl
                </Option>
                <Option onClick={() => setName('name_3')}>
                    Goggle Man
                </Option>
                <Option onClick={() => setName('name_4')}>
                    Moustache man
                </Option>
            </Container>
        </OptionsContainer>    
    )
}

const CursorClick = () => {
    return (
        <svg version="1.1" id="circle" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="1000px"
            viewBox="0 0 100 100" xmlSpace="preserve" style={{alignSelf: 'flex-start'}}>
            <circle fill="#ee7c9e" cx="50" cy="50" r="3" transform="rotate(-90 ) translate(-100 0)" >
                <animate attributeName="r" values="10;0" dur="0.5s" repeatCount="indefinite"></animate>
            </circle>
        </svg>
    )
}