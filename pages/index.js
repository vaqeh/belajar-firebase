import Image from "next/image";
import { Inter } from "next/font/google";
import firebase from "./firebase";
console.log("f", firebase);

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <div>hai</div>
    </main>
  );
}
