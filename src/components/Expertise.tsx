import fig from "../assets/img/fig.png"
import react from "../assets/img/frontend.jpg"
import backend from "../assets/img/backend.jpg"
import saas from "../assets/img/saas.jpg"
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import {
  BriefcaseBusiness,
  Figma,
  Atom,
  Code,
} from "lucide-react";

export function Expertise() {
  return (
    <BentoGrid className="w-full mx-auto md:auto-rows-[20rem]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={item.className}
          icon={item.icon}
        />
      ))}
    </BentoGrid>
  );
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black">
    <div className="w-full h-full">
        <img src={fig} className="bg-cover" alt="Figma" />
    </div>
  </div>
);
const FrontEnd = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black">
    <div className="w-full h-full">
        <img src={react} className="bg-cover" alt="FrontEnd" />
    </div>
  </div>
);
const BackEnd = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black">
    <div className="w-full h-full">
        <img src={backend} className="bg-cover" alt="BackEnd" />
    </div>
  </div>
);
const SaaS = () => (
  <div className="flex w-full h-full min-h-[6rem] rounded-xl dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black">
    <div className="w-full h-full">
        <img src={saas} className="bg-cover aspect-auto w-full" alt="saas" />
    </div>
  </div>
);
const items = [
  {
    title: "Figma Design",
    description: "Building UI and Design System.",
    header: <Skeleton />,
    className: "md:col-span-2",
    icon: <Figma className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Front End Development",
    description: "Turning Design Into Code.",
    header: <FrontEnd />,
    className: "md:col-span-1",
    icon: <Atom className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Back End Development",
    description: "Working with Database, API, and Business Logic.",
    header: <BackEnd />,
    className: "md:col-span-1",
    icon: <Code className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "B2B SaaS",
    description:
      "Understand the impact of effective software in business.",
    header: <SaaS />,
    className: "md:col-span-2",
    icon: <BriefcaseBusiness className="h-4 w-4 text-neutral-500" />,
  },
];
