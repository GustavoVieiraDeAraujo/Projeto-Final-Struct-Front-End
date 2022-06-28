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


    h2 {
        margin-bottom: 0;
        font-size: 32px;
        font-weight: 400;
    }

    input, textarea {
        position: relative;
        left: 2%;
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

    .sobre_input {
        height: 25rem;
        resize: none;
    }
    
    .service_div{
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
    }

    .service_label {
        box-sizing: border-box;
        display: flex;
        border-radius: 33px;
        width: 200px;
        height: 231px;
        cursor: pointer;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        justify-content: center;
        padding-top: 0;

        transition: border 0.1s ease-in-out;
    }

    .service_image {
        min-width: 95px;
        max-width: 164px;
        max-height: 125px;
        height: auto;
        align-self: center;
        position: relative;
        top: -1.5rem;
    }

    .service_input {
        width: 0;
        height: 0;
        margin: 0;
        opacity: 0;
        position: absolute;
    }

    .service_span{
        width:100%;
        display:grid;
        grid-auto-flow: row;
        justify-content: center;
        justify-items: center;
        ${'' /* flex-direction: column;  */}
        ${'' /* align-content: center; */}
        margin: 0;
        padding: 0;

    }

    .service_p {
        margin: 1rem;
        padding: 0;
        font-weight: 400;
        font-size: 20px;

    }

`