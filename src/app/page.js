import Hero from "@/components/hero/Hero";
import Welcome from "@/components/welcome/Welcome";
import Image from "next/image";
import styles from "./page.module.css";
export default function Home() {
  return (
    <>
      <Hero />
      <Welcome />
    </>
  );
}
