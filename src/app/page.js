import Image from "next/image";
import NewArraival from "@/components/NewArraival"
import NavBar from "@/components/NavBar";
import Banner from "@/components/Banner";
import BigDeal from "@/components/BigDeal";
import CollectionSlider from "@/components/CollectionSlider";
import SummerBigDeal from "@/components/SummerBigDeal";
import Footer from "@/components/Footer"



export default function Home() {
  return (
    <div className="font-manrope">
      <NavBar></NavBar>
      <main>
        <Banner></Banner>
        <NewArraival></NewArraival>
        <BigDeal></BigDeal>
        <CollectionSlider></CollectionSlider>
        <SummerBigDeal></SummerBigDeal>
      </main>
      <Footer></Footer>
    </div>
  );
}
