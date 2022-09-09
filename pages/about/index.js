import Head from "next/head"
import Image from "next/image"

import { Container, Page, Card, Header } from "./styles"
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'


import Invesparso from '../../public/images/Invesparso.png'

export default function about() {
  return (
    
    <Container>
      <Head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;700&display=swap" rel="stylesheet" /> 
      <title>Luanda Office Center</title>
      </Head>
        <Navbar />
    <Page>
      <main>
        <Header>
          <h1>Quem Somos</h1>
          <p>Sediada em Luanda pela empresa de direito Angolano Invesparso, a Luanda Office Center é uma empresa orientada para
            para o mercado empresarial angolano,  que cria e implementa soluções que visão potenciar as vendas e a notariedade de imagem das empresas
          </p>
        </Header>
          <Card>
          <h2>Empresa Mãe</h2>
          <div>
            <span>
        
              <p>
                A Invesparso é uma empresa criada para atender as necessidades de legalização de imóveis,
                aliados ao conhecimento e profissionalismo para gestão das informações e serviços, proporcionando
                aos clientes, facilidade, agilidade, comodidade e segurança nos procedimentos adequados á regularização de seu imóvel
              </p>
        
            </span>
            <span>
              <Image src={Invesparso} width="250" height="100" alt="Imagem da Invesparso" />
            </span>
          </div>
          </Card>
      </main>
    </Page> 
        <Footer />
     </Container>
  )
}
