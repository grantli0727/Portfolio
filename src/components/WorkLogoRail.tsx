"use client";

import Image from "next/image";
import { projects } from "@/data/content";

type WorkLogoRailProps = {
  direction?: "left" | "right";
  rotate?: string;
};

function LogoSet({ suffix }: { suffix: string }) {
  return (
    <ul className="flex shrink-0 items-center gap-10 md:gap-14 px-5 md:px-7" aria-hidden={suffix !== "a"}>
      {projects.map((project) => (
        <li key={`${project.id}-${suffix}`} className="flex items-center gap-3 shrink-0">
          <span className="relative size-9 md:size-10 overflow-hidden rounded-full ring-1 ring-white/20 bg-white/10 shrink-0">
            <Image
              src={project.image}
              alt=""
              fill
              className="object-cover object-top"
              sizes="40px"
            />
          </span>
          <span className="text-sm md:text-base font-semibold tracking-tight text-white/85 whitespace-nowrap">
            {project.name}
          </span>
          <span className="text-brand text-lg leading-none" aria-hidden>
            ·
          </span>
        </li>
      ))}
    </ul>
  );
}

export function WorkLogoRail({
  direction = "left",
  rotate = "-1.5deg",
}: WorkLogoRailProps) {
  return (
    <div
      className="relative w-[110%] -ml-[5%] py-4 md:py-5 pointer-events-none select-none"
      style={{ transform: `rotate(${rotate})` }}
      aria-hidden
    >
      <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-brand" />
      <div className="relative overflow-hidden">
        <div
          className={`flex w-max items-center ${
            direction === "left" ? "animate-logo-marquee" : "animate-logo-marquee-reverse"
          }`}
        >
          <LogoSet suffix="a" />
          <LogoSet suffix="b" />
        </div>
      </div>
    </div>
  );
}
