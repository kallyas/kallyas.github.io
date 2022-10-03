import Head from "next/head";
import Image from "next/image";
import FooterNav from "../components/FooterNav";
import Navbar from "../components/Navbar";
import Hero from "../components/Sections/Hero";

export default function Home() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <FooterNav />
    </div>
  );
}
