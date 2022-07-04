import styled from "styled-components";
import setinha from "../../../assets/setinha.png"

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

    .name .age .office_id .photo {
        margin-bottom: 10rem;
        width: 75%;
        align-items: left;

    }

    .photo {
        margin-bottom: 2rem;
    }

    h2 {
        margin-bottom: 0;
        font-size: 32px;
        font-weight: 400;
    }

    input, select {
        position: relative;
        left: 2%;
        align-self: center;
        margin-bottom: 3rem;
        margin-top: 0;
        width: 95%;
        height: 3,625rem;
        font-weight: 300;
        font-size: 2rem;
        padding: 1rem;
        background-color: #0A369F69;
        border: none;
        color: #F8F8FF;
    }

    select {
        width: 80%;
        left: 10%;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        background-image: url(${setinha});
        background-repeat: no-repeat;
        background-position: 95% 50%;
        cursor: pointer;

    }

    .photo_input {
        display: none;
    }

    .photo_label {
        position: relative;

        color: #FFFFFF66;
        display: block;
        left: 30%;
        width: 40%;
        background-color: #0A369F69;
        height: 3,625rem;
        font-weight: 300;
        font-size: 2rem;
        padding: 1rem;
        text-align: center;
        background-image: url(${setinha});
        background-repeat: no-repeat;
        background-position: 95% 50%;
        cursor: pointer;
    }

    /* Chrome, Safari, Edge, Opera */
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    }

    /* Firefox */
    input[type=number] {
    -moz-appearance: textfield;
    }
`