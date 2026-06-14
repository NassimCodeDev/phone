import { PremiumNavbar } from "@/components/blocks/PremiumNavbar"
import { Hero } from "@/components/blocks/Hero"
import { TitaniumDesign } from "@/components/blocks/TitaniumDesign"
import { CameraSystem } from "@/components/blocks/CameraSystem"
import { A19Chip } from "@/components/blocks/A19Chip"
import { AppleIntelligence } from "@/components/blocks/AppleIntelligence"
import { Endurance } from "@/components/blocks/Endurance"
import { Preorder } from "@/components/blocks/Preorder"

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-black w-full overflow-hidden">
      <PremiumNavbar />
      <Hero />
      <TitaniumDesign />
      <CameraSystem />
      <A19Chip />
      <AppleIntelligence />
      <Endurance />
      <Preorder />
    </main>
  );
}
