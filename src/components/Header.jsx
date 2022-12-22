import React from 'react'
import logo from "../assets/Header/BatabitLogo.svg"
import "../styles/Header.scss"

const Header = () => {
  return (
    <header>
      <img src={logo} alt="" />
      <div className='Header_title-container'>
        <h1>La próxima revolución en el intercambio de criptomonedas.</h1>
        <p>Batabit te ayuda a navegar entre los diferentes precios y tendencias. </p>
        <a className='Header_button' href="">Conoce nuestros planes <span>i</span></a>
      </div>
    </header>
  )
}

export default Header