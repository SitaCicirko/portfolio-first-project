import React from "react";

function NavBar() {
  return (
    <div className="flex flex-col h-screen justify-evenly w-full text-slate-400">
      <div>
        <div className="flex justify-center items-center ">
          <img
            class="object-center my-0 w-full h-auto"
            src="./pic.jpg"
            alt="logo"
          />
        </div>
        <h1 className="text-4xl text-center">Sita Cicirko</h1>
        <p className="text-center">portfolio</p>
      </div>
    </div>
  );
}

export default NavBar;
