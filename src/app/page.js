import Image from "next/image";
import NewArraival from "@/components/NewArraival"

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col items-center row-start-2 gap-8 sm:items-start">
        <NewArraival></NewArraival>
      </main>
    </div>
  );
}
