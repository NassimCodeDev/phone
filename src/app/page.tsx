import { PremiumNavbar } from "@/components/blocks/PremiumNavbar"
import { Hero } from "@/components/blocks/Hero"
import { TitaniumDesign } from "@/components/blocks/TitaniumDesign"
import { CameraSystem } from "@/components/blocks/CameraSystem"
import { N19Chip } from "@/components/blocks/N19Chip"
import { NovaIntelligence } from "@/components/blocks/NovaIntelligence"
import { Endurance } from "@/components/blocks/Endurance"
import { Preorder } from "@/components/blocks/Preorder"

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-black w-full overflow-hidden">
      <PremiumNavbar />
      <Hero />
      <TitaniumDesign />
      <CameraSystem />
      <N19Chip />
      <NovaIntelligence />
      <Endurance />
      <Preorder />
    </main>
  );
}
