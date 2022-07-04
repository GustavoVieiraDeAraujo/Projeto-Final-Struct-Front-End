import styled from "styled-components";


export const Container = styled.section`
    display: flex;
    flex-direction: column;

    .image {
        width: 80%;
        height: auto;
        margin: 1rem 10%;
    }

    h1 {
        color: #FD8D4B;
        font-size: 2.5rem;
        font-weight: 700;
        margin-left: 10%;
        margin-bottom: 0;
    }

    .linha {
        position: relative;
        left: 10%;
        margin-top: 0;
        width: 80%;
        height: 3px;
        background-color: #FD8D4B;
    }

    .membros_titulo {
        margin-top: 1rem;
        position: relative;
        left: 20%; 
        width: 80%;
        padding-top: 0;
        background-color: #0A369F;
    }

    .membros_titulo h1{
        position: relative;
        left: 30%;
        margin: 3px;
    }

    .membros {
        align-self: center;
        width: 70%;
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: space-around;

    }
`