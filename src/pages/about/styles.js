import styled from "styled-components";



export const Container = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .texto {
        width: 100%;
    }

    .texto_laranja {
        position: relative;
        bottom: 1rem;
        text-align: center;
    }

    .mvv {
        width: 93%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        align-items: baseline;
    }

    .membros {
        width: 80%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: 2rem;
    }

    .membros_titulo {
        color: #FD8D4B;
        font-size: 2.5rem;
        align-self: center;
    }

    .membros_linha {
        width: 100%;
        height: 3px;
        background-color: #FD8D4B;
        margin-bottom: 3rem;
    }

    .container_membros {
        align-self: center;
        width: 70%;
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: space-around;

    }

    @media screen and (max-width: 500px) {
        .container_membros {
            width: 100%;

        }
    }
`