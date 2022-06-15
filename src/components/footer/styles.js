import styled from "styled-components";



export const Container = styled.footer`
    background-color: #0A369F;
    width: 100%;
    margin-top: 39px;

    .maior {
        display: flex;
    }

    img {
        margin: 0 1.5rem;
        position: relative;
        bottom: 39px;
        height: 78px;
        width: 78px;
    }

    .content {
        width: 83%;
        display: flex;
        justify-content: space-between;
    }

    .copyright {
        padding: 0 1rem 0.25rem 1rem;
        font-size: 0.6rem;
        opacity: 0.5;
        line-height: 0.5;
    }

    p {
        font-size: 0.6rem;
    }

    .links {
        height: 2rem;
        padding: 1rem 1rem 0 1rem;
        border-radius: 0 0 15px 15px;
        display: flex;
        gap: 3rem;
    }

    .link {
        color: #F8F8FF;
    }

    a {
        color: #F8F8FF;
    }

    .redes_sociais {
        margin-top: 1rem;
        display: flex;
        gap: 5rem;
        opacity: 0.8;
    }

    .botao {
        position: relative;
        bottom: 30%;
        border: 1.5rem solid #071944;
        border-top: 5px;
        background-color: #071944;
        border-radius: 0 0 15px 15px; 

    }

    Button {
        padding: 5px 3rem;
        font-size: 2rem;
        font-weight: 700;
    }

    @media screen and (max-width: 1100px) {
        .links {
            display: none;
        }

        img{
            margin-left: 0;
            margin-right: 0;

        }

        .content {
            flex-wrap: wrap;
            justify-content: space-around;
        }

        .maior {
            justify-content: space-between;
        }

        .redes_sociais {
            margin-top: 0;
            gap: 0;
            width: 100%;
            justify-content: space-around;
        }

        .botao {
            margin: 0;
            margin-top: 1rem;
        }
    }

`