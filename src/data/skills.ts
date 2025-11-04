// src/data/skills.ts

import { Skill } from "../types";

// ---- ICON IMPORTS ----
import photoshopIcon from "../icons/photoshop.svg";
import illustratorIcon from "../icons/illustrator.svg";
import figmaIcon from "../icons/figma.svg";
import xdIcon from "../icons/xd.svg";
import procreateIcon from "../icons/procreate.svg";
import aftereffectsIcon from "../icons/aftereffects.svg";
import premiereproIcon from "../icons/premierepro.svg";
import lightroomIcon from "../icons/lightroom.svg";

// ---- SKILLS DATA ----
export const skills: Skill[] = [
  { name: "Photoshop", icon: photoshopIcon, category: "Design" },
  { name: "Illustrator", icon: illustratorIcon, category: "Illustration" },
  { name: "Figma", icon: figmaIcon, category: "UI/UX" },
  { name: "XD", icon: xdIcon, category: "UI/UX" },
  { name: "Procreate", icon: procreateIcon, category: "Illustration" },
  { name: "After Effects", icon: aftereffectsIcon, category: "Video" },
  { name: "Premiere Pro", icon: premiereproIcon, category: "Video" },
  { name: "Lightroom", icon: lightroomIcon, category: "Design" },
];

// ✅ Optional default export (for simpler imports)
export default skills;
