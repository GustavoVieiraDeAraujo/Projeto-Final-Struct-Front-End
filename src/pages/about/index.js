import CaixaTexto from "../../components/caixaTexto"
import MemberCard from "../../components/memberCard"
import MVVContainer from "../../components/mvvContainer"
import MVVValores from "../../components/mvvValores"
import { Container } from "./styles"
import { api } from "../../services/api"
import { useState,useEffect } from "react"
const About = () => {
    const [members, setMembers] = useState([]) 

    useEffect(() => {
        api.get("/members/index")
        .then(response => setMembers(response.data))
    }, [])

    return(
        <Container>
        <h1>A {"{Struct}"}</h1>
        <div className="texto">
            <CaixaTexto texto={<>
                <><br/> Somos a {"{Struct}"}, empresa junior de Engenharia de Computação da UnB! Mas o que é uma empresa junior?<br/>
                <br/>
    Uma Empresa Junior (EJ) é uma empresa criada, gerida e mantida por alunos universitários, com o objetivo de ter um ambiente que provê uma vivência empresarial aos estudantes.<br/>
    <br/>
    No mercado desde 2014, a {"{Struct}"} busca proporcionar soluções com as tecnologias mais atualizadas no mercado, prezando sempre pela qualidade e satisfação do cliente.<br/>
    <br/>
    Representamos o campo da Engenharia de Computação, um curso novo que une conhecimentos importantes das diferentes areas da computação. Um dos campos que inova, muda e cria o nosso futuro.<br/></>
            </>} direcao="e" tam_max_texto="100%"/>
            
            <div className="texto_laranja">
                <CaixaTexto texto={<span style={{fontSize : "1.5rem", color: "#071944", fontWeight: 300}}>
                Caminhe conosco para esse futuro, vamos construir esse futuro.</span>}
                 cor="#FD8D4B" direcao="e" tamanho={70} tam_max_texto="100%"/>
            </div>
        </div>

        <div className="mvv">
                <MVVContainer titulo={"Missão"} texto={<p style={{ fontSize : "1.25rem"}} >Formar estudantes mais profissionais e mais capacitados por meio da vivência empresarial.</p>}/>
                <MVVContainer titulo={"Visão"} texto={<p style={{ fontSize : "1.25rem"}} >Proporcionar os melhores produtos e experiência ao cliente. Fortalecer a representatividade da EC no ambiente acadêmico e no mercado.</p>}/>
                <MVVContainer titulo={"Valores"} texto={
                    <MVVValores/> }/>
        </div>

        <div className="membros">
            <h1 className="membros_titulo">Membros</h1>
            <div className="membros_linha"></div>
        
            <div className="container_membros">
                    {members.map((item) => {
                        return(
                            <MemberCard member={item} />
                        )
                    })}

            </div>
        </div>

        </Container>
    )
}

export default About