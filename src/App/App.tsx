import React from "react";
import Carousel from "../CarouselPoll";
import logo from "../logo.svg";

export function App() {
  return (
    <div className="bg-gray-800">
      <header className="flex items-center text-teal-200 h-12 fixed w-full bg-slate-800">
        header
      </header>
      <main>
        <Carousel />
      </main>
    </div>
  );
}
