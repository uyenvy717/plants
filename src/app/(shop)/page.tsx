import Image from "next/image";
import { Inter } from "next/font/google";
import CTASlogan from "@/components/ui/CTASlogan";
import { SplitScreen } from "@/components/layout/SplitScreen";
import { PlayMusic } from "@/components/PlayMusic";
import hero from "@/public/hero.png";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="w-full h-full overflow-hidden">
      <SplitScreen>
        <CTASlogan></CTASlogan>
        <Image
          src={hero}
          width={500}
          height={500}
          style={{objectFit:"cover"}}
          alt="Picture of the author"
        />
        <PlayMusic></PlayMusic>
      </SplitScreen>
    </div>
  );
}
