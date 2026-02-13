import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <footer className="bg-blue-200 fixed bottom-0 w-screen">
        <nav className="relative flex items-center justify-between sm:h-10 md:justify-center py-6 px-4 mt-2">
          <div className="hidden md:flex md:space-x-10 ">
            <p className="font-medium text-gray-600 transition duration-150 ease-in-out">
              Максим даже за пачку доширака не сдалал бы
            </p>
          </div>
        </nav>
      </footer>
    );
  }
}
