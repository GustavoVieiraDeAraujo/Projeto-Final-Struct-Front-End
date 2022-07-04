import styled from "styled-components";


export const Container = styled.div`
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-bottom: 5.9rem;

    h1 {
        color: #FD8D4B;
        font-size: 2.5rem;
        font-weight: 700;
    }

    .form {
        align-items: left;
        width: 75%;
    }

    .email .senha {
        margin-bottom: 10rem;
        width: 75%;
        align-items: left;

    }

    h2 {
        margin-bottom: 0;
        font-size: 32px;
        font-weight: 400;
    }

    input {
        position: relative;
        left: 2%;
        align-self: center;
        margin-bottom: 5rem;
        margin-top: 0;
        width: 95%;
        height: 3,625rem;
        font-weight: 300;
        font-size: 32px;
        padding: 1rem;
        background-color: #0A369F69;
        border: none;
        color: #F8F8FF;
    }

`