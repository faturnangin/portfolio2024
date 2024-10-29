import { MiniCardMarquee } from "./ui/mini-card-marquee";
import react from "../assets/img/react.svg";
import tailwind from "../assets/img/tailwindcss.svg";
import figma from "../assets/img/figma.svg";
import mysql from "../assets/img/mysql.svg";
import php from "../assets/img/php.svg";

export function TechMarquee() {
  return (
      <MiniCardMarquee
        items={testimonials}
        direction="right"
        speed="slow"
      />
  );
}

const testimonials = [
  {
    title: "React",
    image: react
  },
  {
    title: "TailwindCSS",
    image: tailwind
  },
  {
    title: "Figma",
    image: figma
  },
  {
    title: "MySQL",
    image: mysql
  },
  {
    title: "PHP",
    image: php
  },
];
