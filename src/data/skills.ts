<<<<<<< HEAD
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
=======
import { Skill } from '../types';

export const skills: Skill[] = [
  { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
  { name: 'Illustrator', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg' },
  { name: 'Photoshop', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg' },
  { name: 'After Effects', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aftereffects/aftereffects-original.svg' },
  { name: 'Blender', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/blender/blender-original.svg' },
  { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { name: 'Color Theory', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg' },
];
>>>>>>> a4084e00452dc66727786b7f875a41ff8bbfc7e0
