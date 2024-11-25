import Image from "next/image";
import NewArraival from "@/components/NewArraival"

import Banner from "@/components/Banner";
import BigDeal from "@/components/BigDeal";
import CollectionSlider from "@/components/CollectionSlider";
import SummerBigDeal from "@/components/SummerBigDeal";




export default function Home() {
  return (
    <div className="font-manrope">
      
      <main>
        <Banner></Banner>
        <NewArraival></NewArraival>
        <BigDeal></BigDeal>
        <CollectionSlider></CollectionSlider>
        <SummerBigDeal></SummerBigDeal>
      </main>
      
    </div>
  );
}
