import styled from "styled-components";



export const Container = styled.section`
        align-items: center;
        align-self: center;
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: space-around;
        text-decoration: none;

        .link {
            text-decoration: none;
            font-color: inherit;
        }
        
        h1 {
            position: absolute;
            top: 4.5rem;
            font-weight: 700;
            font-size: 2.5rem;
            color: #FD8D4B;
        }

        .membros {
            margin-top: 4rem;
            display: flex;
            flex-wrap: wrap;
            width: 70%;
            justify-content: space-around;
        }
`