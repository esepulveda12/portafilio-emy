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
import ProjectDetail from "@/components/ProjectDetail";
import { ViewProvider } from "@/lib/view";
import { ProjectDetailProvider } from "@/lib/project-detail";

export default function Home() {
  return (
    <ViewProvider>
      <ProjectDetailProvider>
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
        {/* Fuera del contenedor animado de ViewStage a propósito: ese motion.div
            mantiene un transform activo (scale/blur) que crearía un containing
            block y rompería el position:fixed de este overlay. */}
        <ProjectDetail />
      </ProjectDetailProvider>
    </ViewProvider>
  );
}
