
import HeroSection from '@/components/landing/hero'
import Image from 'next/image'
import { Oxygen_Mono } from "next/font/google";

const oxygen = Oxygen_Mono({
    weight: "400",
    subsets: ["latin"],
  });

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-start justify-between -mt-5">
      <HeroSection/>
    </main>
  )
}
