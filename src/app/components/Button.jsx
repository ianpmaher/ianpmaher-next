"use client";

import styled from "styled-components"

const ButtonA = styled.button`
    font-size: 1rem;
    min-width: 3rem;
    min-height: 2rem;
    max-width: 5rem;
    font-family: "Roboto Flex", sans-serif;
    padding: 0.25rem;
    margin: 0.25rem auto;
    color: #000;
    border: 3px solid #fff;
    outline: 3px solid #fff;
    border-radius: 20px;
    background-color: #FFD040;
    cursor: pointer;
    transition: all 0.35s ease-out;
    &:hover {
        opacity: 1;
        outline: 0.25rem solid #fff;
        transform: scale(1.1);
    }
    &:active {
        background-color: rgb(105, 255, 255);
    }
    @media (max-width: 768px) {
        font-size: 0.9rem;
    }
`
const Button = ({children}) => {
    return (
        <>
            <ButtonA>
                {children}
            </ButtonA>
        </>
    )
}

export default Button