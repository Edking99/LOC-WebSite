import Head from "next/head";
import { Container } from "./styles";
import Footer from "../../components/Footer";
import Form from "../../components/Form";
import Navbar from "../../components/Navbar";



export default function contact() {
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
    <header>
      <h1>Entre em contato connosco</h1>
      <p>Tem Alguma questão nos envie agora uma mensagem!</p>
    </header>
        <main>
          <Form />
        </main>
        <Footer />
    </Container>
  )
}
