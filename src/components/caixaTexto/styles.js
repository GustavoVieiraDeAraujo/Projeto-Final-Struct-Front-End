import styled from "styled-components";


export const Container = styled.div`
    ${'' /* width: 80%; */}
    background-color: #0A369F;
    padding: 0    5%;
    padding-bottom: 0;
    ${'' /* padding-bottom: 1.5rem; */}
    display: flex;
    flex-direction: column;
    justify-content: center;


    h1 {
        position: relative;
        margin-bottom: 5px;
        top: -15%;
    }

    p {
        font-size: 1.25rem;
        align-self: center;
        margin-top: 0;
    }
`