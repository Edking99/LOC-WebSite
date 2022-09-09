import React from "react";
import Logo from "../public/images/logo.png";
import Image from "next/image";
import styled from "@emotion/styled";
import Link from "next/link";
import Head from "next/head";

function Navbar() {
  const NavContainer = styled.div`
  :root {
    --PrimaryColor: #048ABF;
    --SecondaryColor: #049DBF#;
    --ThirdColor: #82C9D9;
    --FourthColor: #403C3B;
    --FifthColor: #F2F2F2;

    --PrimaryFont:'Mulish', sans-serif;
  }
  height: 18vh;
  width: 100%;
  padding: 6em;
  background-color: --FifthColor;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: 'Poppins' ;

  button {
        margin: 10px;
        background: #20A6DA;
        border-radius: 5px;
        padding: 10px 25px;
        border: none;
        color: #F2F2F2;
        :hover {
          filter: brightness(0.9);
          transition: all .3s;
        }
      }
    `;

  const NavLinks = styled.div`
  a {
    font-size: 18px;
    color: var(--FourthColor);
    margin: 20px;
  :hover{
    border-bottom: 3px #049DBF solid;
    transition :all .3s;
  }}
  `;

  return (
    <NavContainer>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;700&display=swap" rel="stylesheet" />
        <title>Luanda Office Center</title>
      </Head>
      <Image src={Logo} style={{position: 'fixed',}} width={160} height={80} alt="Imagem de Logo da LOC" />
      <NavLinks>
       <Link href="/"><a>Home</a></Link>
       <Link href="/servicos"><a>Serviços</a></Link>
       <Link href="/about"><a>Quem Somos</a></Link> 
      </NavLinks>
      <button>
        <Link href="/contact">Contatos</Link>
      </button>
    </NavContainer>
  );
}

export default Navbar;
