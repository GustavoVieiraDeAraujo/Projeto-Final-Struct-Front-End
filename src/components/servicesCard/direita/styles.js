import styled from "styled-components";



export const Container = styled.div`

    display: flex;
    margin-top: 116px;

    img {
        position: absolute;
        right: 15%;
        height: 150px;
        width: auto;
        transform: translate(0, -50px);
    }

    @media screen and (max-width: 1200px) {
        img {
            right: 5%;
            transform: translate(0, -75%);

        }
    }
`