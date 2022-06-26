import styled from "styled-components";


export const Container = styled.div`

    width: 279px;
    height: 295px;
    margin: 1.5rem 0;

    ul {
        list-style: none;
        display: flex;
        width: 98%;
        justify-content: space-between;
        margin: 0;
        padding: 0 1%;
        background-color: #FD8D4B;
        align-items: baseline;
    }

    p {
        width: 80%;
        background-color: #1D7CFA;
        position: relative;
        bottom: 15%;
        left: 18%;
        padding: 0.25rem 0;
        padding-left: 2%;
        color: #F8F8FF;
    }

    .idade{
    color: #F8F8FF;

    }

    .nome {
        font-size: 1.25rem;
        color: #071944;
    }

    img {
        width: 100%;
        height: 100%;
    }
` 