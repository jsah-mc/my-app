"use client";
import { useEffect } from "react";
import Typed from "typed.js";

export default function Home() {
  useEffect(() => {
    const options = {
      strings: ["Welcome to My Next.js App", "Enjoy Your Stay!"],
      typeSpeed: 50,
      backSpeed: 25,
      loop: true,
      showCursor: false,
    };
    const typed = new Typed("#Header", options);
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <main>
      <h1 className="text-4xl font-bold" id="Header">Welcome to My Next.js App</h1>
      <p>This is a simple Next.js application.</p>
      <span className="mdi mdi-home"></span>
    </main>
  );
}
