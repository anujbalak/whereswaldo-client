import styled from "styled-components"

const OptionsContainer = styled.div`
    position: absolute;
    top: 0;
    background-color: #ee7c9e;
    display: grid;
    padding: 1em;
    gap: 1em;
    border-radius: 10px;
    z-index: 3;
    animation: slide ease-in 0.3s;
    animation-fill-mode: both;
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

const Option = styled.span`
    
`

export function NameOptions({ref}) {
    return (
        <OptionsContainer ref={ref}>
            <Option>
                Name 1
            </Option>
            <Option>
                Name 2
            </Option>
            <Option>
                Name 3
            </Option>
            <Option>
                Name 4
            </Option>
        </OptionsContainer>    
    )
}