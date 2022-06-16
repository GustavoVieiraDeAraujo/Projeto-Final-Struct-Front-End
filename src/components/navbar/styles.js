import styled from 'styled-components'



export const Container = styled.nav`
    position: sticky;
    top: 0;
    z-index: 10;

    .barra_superior {
        color: #0A369F;
        background-color: #0A369F;
        height: 23px;
        width: 100%;
        z-index: 1;
    }


    .conteudo {
        left: 0;
        width: 100%;
        display: flex;
        justify-content: space-between;
        z-index: 2;
    }

    img {
        margin: 0;
        width: width: 69px;
        height: 53.27px;
        background-color: #0A369F;
        border-bottom: 13px solid #0A369F;
        border-right: 13px solid #0A369F;
        border-radius: 0 0 19px 0;
    }

    .Links {
        background-color: #071944;
        height: 2rem;
        padding: 1rem 1rem 0 1rem;
        border-radius: 0 0 15px 15px;
        display: flex;
        gap: 3rem;
    }

    .link_about, .link_home, .link_portfolio{
        color: #F8F8FF;
        font-size: 1rem;
    }

    .botao {
        position: relative;
        right: 10%;
        height: 2rem;
        border-radius: 0 0 15px 15px;
        background-color: #0A369F;
        padding: 0.75rem;
        padding-top: 0;
    }
    
    .botao_menu{
        display: none;
        color: #F8F8FF;
        background-color: #FD8D4B;
        border: none;
        padding: 5px;
        border-radius: 12px;
        cursor: pointer;
        z-index: 9;
    }

    .menu_mobile {
        display: none
    }


@media screen and (max-width: 630px) {
    .Links {
        display: none;
    }


    Button {
        display: none;
    }

    .botao_menu {
        position: relative;
        bottom: 5px;
        display: flex;
        flex-direction: column;
    }

    hr {
        margin: 3px;
        width: 1.5rem;
        height: 4px;
        background-color: #071944;
        border: none;
    }

    .menu_mobile {
        background-color: #0A369F;
        margin-top: 0;
        position: absolute;
        left: 60%;
        top: 0;
        padding: 4rem 1.5rem 1rem 2rem;
        width: 0;
        transitions: width 2s ease;
        display: flex;
        flex-direction: column;
        align-items: right;
        border-radius: 0 0 1rem 1rem;
        borde: none;
        overflow: hidden;
        animation-name: example;
        animation-duration: 0.2s;
    }

    .link_mobile {
        color: #F8F8FF;
        font-size: 1rem;
        margin: 0.5rem 0.5rem 0.5rem 0;
        padding: 3px;
        padding-left: 1rem;
        width: 105%;
        border-radius: 7px 0 0 7px;
        border-right: none;
        background-color: #071944; 
        background-opacity: 0.5;
    }

    @keyframes example {
        from {left: 100%}
        to {left: 60%}
    }
}
`