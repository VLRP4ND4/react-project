import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <header className="bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100"> 
        <nav className="relative flex items-center justify-between sm:h-10 md:justify-center py-6 px-4 mt-2">
          <div className="hidden md:flex md:space-x-10 ">
            <div className="font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out">
              <Link to="/">Главная</Link>
            </div>
            <div className="font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out"> 
              <Link to="/about">О нас</Link>
            </div>
            <div className="font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out">
              <Link to="/login">Войти</Link>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}
