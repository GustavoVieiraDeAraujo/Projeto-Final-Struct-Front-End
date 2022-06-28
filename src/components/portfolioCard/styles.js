import styled from "styled-components";



export const Container = styled.div`
    img {
        max-width: 500px;
        margin-left: 5%;
        position: relative;
        top: 10rem;
        z-index: 2;
    }

    .project_name {
        margin-bottom: 1rem;
    }

    @media screen and (max-width: 1750px ) {
        img {
        top: 0;

        }
    }
`