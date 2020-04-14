import React from "react";
import logo from "../../logo.svg";

function Page1() {
  return <div className="bg-gray-900 text-gray-100 h-screen flex flex-col items-center justify-center">
    <img src={logo} className="App-logo w-1/5" alt="logo" />
    <h1>Page 1</h1>
  </div>;
}

export default Page1;
