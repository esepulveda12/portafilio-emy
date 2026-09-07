import Background from "@/components/Background";
import OrbsBackground from "@/components/OrbsBackground";
import Navbar from "@/components/Navbar";
import MobileBrand from "@/components/MobileBrand";
import MobileLangToggle from "@/components/MobileLangToggle";
import ViewStage from "@/components/ViewStage";
import MusicPlayer from "@/components/MusicPlayer";
import RadialNav from "@/components/RadialNav";
import LoadingScreen from "@/components/LoadingScreen";
import KonamiEasterEgg from "@/components/KonamiEasterEgg";
import NavHintToast from "@/components/NavHintToast";
import SoundToggle from "@/components/SoundToggle";
import SoundFX from "@/components/SoundFX";
import { ViewProvider } from "@/lib/view";

export default function Home() {
  return (
    <ViewProvider>
      <LoadingScreen />
      <Background />
      <OrbsBackground />
      <Navbar />
      <MobileBrand />
      <MobileLangToggle />
      <ViewStage />
      <MusicPlayer />
      <RadialNav />
      <NavHintToast />
      <KonamiEasterEgg />
      <SoundToggle />
      <SoundFX />
    </ViewProvider>
  );
}
