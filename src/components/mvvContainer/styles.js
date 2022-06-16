import styled from "styled-components";



export const Container = styled.div`
    width: 25%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .titulo {
        display: flex;
        align-items: baseline;
        margin-bottom: 0;
        font-weight: 700;
    }

    h1 {
        font-size: 3rem;
        color: #54BBFE;
    }

    span {
        font-size: 2rem;
    }

    .linha {
        margin-bottom: 2rem;
        width: 100%;
        height: 3px;
        background-color: #54BBFE;
    }

    @media screen and (max-width: 700px) {
        width: 100%;
    }
`