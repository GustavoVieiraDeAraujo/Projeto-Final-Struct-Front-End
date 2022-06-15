import styled from "styled-components";



export const Container = styled.div`

    display: flex;
    margin-top: 138px;


    img {
        position: absolute;
        left: 5%;
        height: 150px;
        width: auto;
        transform: translate(0, -50px);
    }

    @media screen and (max-width: 1150px) {
        img {
            right: 5%;
            transform: translate(0, -90%);

        }
    }
`