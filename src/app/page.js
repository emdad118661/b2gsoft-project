import Image from "next/image";
import NewArraival from "@/components/NewArraival"
import NavBar from "@/components/NavBar";
import Banner from "@/components/Banner";
import BigDeal from "@/components/BigDeal";


export default function Home() {
  return (
    <div className="font-manrope">
      <NavBar></NavBar>
      <main>
        <Banner></Banner>
        <NewArraival></NewArraival>
        <BigDeal></BigDeal>
      </main>
    </div>
  );
}
