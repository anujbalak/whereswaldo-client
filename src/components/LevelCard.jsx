import { Link } from "react-router";
import styled from "styled-components";

const CardComponent = styled.div`
    display: grid;
    background-color: #eef3c0;
    width: min-content;
    justify-content: center;
    align-items: center;
    padding: 1em;
    border-radius: 10px;
    border: #d3c15c solid 5px;
    gap: 1em;
    cursor: pointer;
    transition: transform 0.25s ease-in-out;
    &:hover, &:focus {
        transform: rotate(-10deg);
    }
`

const CardTitle = styled.span`
    all: unset;
    font-size: 1.8rem;
    font-weight: 700;
`

const CardImage = styled.img`
    border-radius: 10px;
`

export default function CardLevel({title, clickHandler}) {
    return (
        <Link to={`/easy/${title}`}>
        <CardComponent onClick={clickHandler} className={title}>
            <CardTitle>{title[0].toUpperCase()+title.slice(1)}</CardTitle>
            {title === 'easy' ?
                <CardImage src="/images/doraemon-small.jpg"/>
            : title === 'hard' &&
                <CardImage src="/images/doraemon-small.jpg"/>
            }
        </CardComponent>
        </Link>
    )
}