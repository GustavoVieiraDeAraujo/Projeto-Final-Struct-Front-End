import styled from "styled-components";



export const Container = styled.div`
    display: flex;
    flex-direction: column;

    .services {
        margin-bottom: 5rem;
    }

    .logo{
        width: 679px;
        height: 110px;
        align-self: center;
    }

    .services_titulo {
        margin-left: 10%;
        color: #FD8D4B;
        font-size: 2.5rem;
        font-weight: 700;
    }
    
    .partners {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 1.5rem;
    }

    .foguete_outline {
        width: 121px;
        height: 122px;
        transform: rotate(-45deg);
        margin-top: 2rem;
        align-self: center;
    }

    .parceiros_titulo {
        color: #FD8D4B;
        font-size: 2.5rem;
        font-weight: 700;
        margin-bottom: 1rem;
    }

    span {
        margin-top: 0;
        width: 80%;
        height: 3px;
        background-color: #FD8D4B;
    }

    .partners_container {
        width: 70%;
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: space-around;
    }

    @media screen and (max-width: 679px) {
        .logo {
            width: 372px;
            height: 60px;
        }
    }
`