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
            display: flex;
            flex-direction: column;
            text-decoration: none;
            font-color: inherit;
            align-items: center;
            justify-content: center;
        }

        h2 {
            color: #F8F8FF;
            align-self: center;

        }
        
        h1 {
            position: absolute;
            top: 4.5rem;
            font-weight: 700;
            font-size: 2.5rem;
            color: #FD8D4B;
        }

        .parcerias {
            margin-top: 4rem;
            display: flex;
            flex-wrap: wrap;
            width: 70%;
            justify-content: space-around;
        }
`