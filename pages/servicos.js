import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'

import styled from '@emotion/styled'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import { Card } from '../components/Card/Card'

import { IoLogoWhatsapp } from 'react-icons/io'


import formation from "../public/images/formation.jpg"
import work from "../public/images/work.jpg"
import handshake from "../public/images/handshake.jpg"
import events from "../public/images/events.jpg"
import newspaper from "../public/images/newspaper.jpg"
import design from '../public/images/design.jpg'




function servicos() {

    const Page = styled.div`
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font-family: 'Poppins';
    `
    const Header = styled.div`
    height: 50vh;
    width: 100%;
    align-items: center;
    justify-content: center;
    
    
    h1 {
        font-weight: 400;
        font-size: 2.5rem;
        text-align: left;
        
        margin-left: 84px;
        margin-top: 90px;
    }
    
    p {
        color: #797979;
        display: flex;
        line-height: 25px;
        flex-wrap: wrap;
        height: 79px;
        width: 600px;
        font-size: 1.1rem;
        margin-left: 84px;

    }

    button {
        margin-left: 84px;
        width: 10vw;
        height: 8vh;
        align-items: center;
        justify-content: center;
        
        background: #20A6DA;
        color: #f2f2f2;
        
        border: none;
        border-radius: 5px;
        
        :hover {
          filter: brightness(0.9);
          transition: all .3s;
        }
      }

    a {
        span{
            font-size: 1rem;
            margin-left: -30px;
        }
    }

    svg {
        position: absolute;
        margin-top: -4px;
        margin-left: 10px;
    }

    div {
        margin-left: 28rem;
        align-items: center;
        justify-content: center;
    }
    `

    const Section = styled.div`
    display: flex;
    flex-wrap: wrap;

    height: max-content;
    width: 100%;
    padding: 2rem;
    
    align-items: center;
    gap: 20px;

    p {
        font-size: 14px;
    }
    
   
    `


    
  return (
    <Page>
        <Head>
        <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;700&display=swap"  /> 
      <title>Luanda Office Center</title>
      </Head>
        <Navbar />
        <Header>
            
            <h1>Serviços</h1>
            <p>
                A A LOC pretende iniciar um novo conceito de prestação de serviços necessários para o sucesso profissional
                e pessoal fundamental para o desenvolvimento de qualquer país...
             </p>
             <button>
             <Link href="https://wa.me/244953529112">
                  <a>
                     <span>Fale connosco</span>
                       <IoLogoWhatsapp size={28} />
                  </a>
                </Link>
             </button>
        </Header>
        <Section>
            <Card title="Formação" >
                <div>
                    <p>O Nosso comprimisso é dotar os colaboradores das empresas,
                        de conhecimentos práticas e atitudes necessárias ao desenvolvimento da actividade
                        profissional é um factor de diminuição de riscos e de aumento da satisfação interna
                        dos trabalhadores.
                    </p>
                    <span>
                    <Image src={formation} width="400" height="250"  alt="imagem de ilustração de formação de pessoas" />
                    </span>
                </div>
            </Card>
            <Card title="Higiene e Segurança no trabalho">
            <div>
                    <p>
                        A Higiene e Segurança no trabalho desempenham um papel decisivo no normal
                        desenrolar da actividade de uma empresa. Tendo em conta os desenvolvimentos da leslização nacional
                        e da definição de responsablidades dos diversos intervenientes, a <strong>LOC</strong> apresenta
                        um conjunto de serviços que colmata essa necessidade.
                    </p>
                    <span>
                    <Image src={work} width="400" height="250"  alt="imagem de ilustração de higiene e segurança no trabalho" />
                    </span>
                </div>
            </Card>
            <Card title="Certificações de Sistemas">
            <div>
                    <p>
                        A certificação é actualmente, para qualquer empresa, uma vantagem competitiva e, par
                        Angola, em particular, um factor de desenvolvimento, visto que faz transparecer para o mercado, a imagem
                        de uma organização que procura obter altos padrões de qualidade, criando competividade e sustentablidade nos negocios.
                    </p>
                    <span>
                    <Image src={handshake} width="400" height="250"  alt="imagem de ilustração de certificação de sistemas" />
                    </span>
                </div>
            </Card>
            <Card title="Eventos">
            <div>
                    <p>
                       Cada evento é feito sob medida, com atendimento personalizado, flexiblidade e organização.
                      <br/>Tudo isso para que cada evento aconteça exatamente de acordo com o desejo e vontade de cada cliente
                    </p>
                    <span>
                    <Image src={events} width="400" height="250"  alt="imagem de ilustração de eventos" />
                    </span>
                </div>
            </Card>
            <Card title="Relalações Publicas e Comunicação ">
            <div>
                    <p>
                       A <strong>LOC</strong> é especializada em diagnóstico, definição, implementação e monitoramento 
                       de estratégias integradas de comunicação empresarial. <br/>
                       Com visão ampliada, procuramos o alinhamento da comunicação com a estrategia geral das empresas, fortalecendo 
                       a marca e a reputação corporativa dos nossos clientes.
                    </p>
                    <span>
                    <Image src={newspaper} width="400" height="250"  alt="imagem de ilustração de relações publicas" />
                    </span>
                </div>

            </Card>
            <Card title="Design e Publicidade">
            <div>
                    <p>
                       Soluções de marketing e comunicação com vista a gerar valor acrescentando as empresas e a transmitir uma imagem 
                       de excelência e competência no mercado
                    </p>
                    <span>
                    <Image src={design} width="400" height="250"  alt="imagem de ilustração de design" />
                    </span>
                </div>

            </Card>

        </Section>
        <Footer />
    </Page>
  )
}

export default servicos