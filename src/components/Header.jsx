import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Header extends Component {
  render() {
    return (
        <header>
            <nav>
                <div><Link to="/">Главная</Link></div>
                <div><Link to="/about">О нас</Link></div>
                <div><Link to="/login">Войти</Link></div>
            </nav>
        </header>
    )
  }
}
