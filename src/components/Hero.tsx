import { PrimaryButton } from "./PrimaryButton";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { Send, FileUser } from "lucide-react"
export function Hero() {
  const words = `Transforming your ideas into engaging digital experience`;
  return (
    <>
    <div className="h-fit -mt-[70px] w-full dark:bg-deepblue bg-white dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex flex-col gap-4 items-center justify-center py-6">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-deepblue bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      {/* <p className="mt-[70px] text-4xl sm:text-7xl text-center font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
        Transforming your ideas into engaging digital experience
        </p> */}
      <TextGenerateEffect className="mt-[70px] relative z-20 py-8" words={words} />
      <h5 className="text-center md:text-start text-lg md:text-xl lg:text-2xl font-medium text-black dark:text-grayscale12 animate-bounce">Hi, i’m Fatur Nangin 👋🏻</h5>
      <h5 className="text-center md:text-start text-base md:text-xl lg:text-2xl font-medium text-neutral-800 dark:text-grayscale2">I craft & develop attractive website with modern technologies</h5>
      <div className="flex items-center gap-4">
        <PrimaryButton link="mailto:workwithnangin@gmail.com" label="Contact" icon={Send}/>
        <PrimaryButton link="/doc/Resume.pdf" label="Résumé" icon={FileUser}/>
      </div>
    </div>
    </>
  );
}
