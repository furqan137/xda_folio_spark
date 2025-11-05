import { Project } from "../types";

// === WORKS PROJECTS ===
import Project1 from "../images/Works/Project1.png";
import Project2 from "../images/Works/Project2.png";
import Project3 from "../images/Works/Project3.png";
import Project4 from "../images/Works/Project4.png";
import Project5 from "../images/Works/Project5.png";
import Project6 from "../images/Works/Project6.png";
import Project7 from "../images/Works/Project7.png";
import Project8 from "../images/Works/Project8.png";
import Project9 from "../images/Works/Project9.png";

// === PAST WORKS PROJECTS ===
import Past1 from "../images/pastworks/pastwork1.png";
import Past2 from "../images/pastworks/pastwork2.png";
import Past3 from "../images/pastworks/pastwork3.png";
import Past4 from "../images/pastworks/pastwork4.png";
import Past5 from "../images/pastworks/pastwork5.png";
import Past6 from "../images/pastworks/pastwork6.png";

// === PLAYGROUND PROJECTS ===
import Playground1 from "../images/Playgrounds/Playground1.png";
import Playground2 from "../images/Playgrounds/Playground2.png";
import Playground3 from "../images/Playgrounds/Playground3.png";
import Playground4 from "../images/Playgrounds/Playground4.png";
import Playground5 from "../images/Playgrounds/Playground5.png";
import Playground6 from "../images/Playgrounds/Playground6.png";
import Playground7 from "../images/Playgrounds/Playground7.png";
import Playground8 from "../images/Playgrounds/Playground8.png";

// ------------------ WORKS ------------------
export const worksProjects: Project[] = [
  { id: 1, title: "17 West", category: "digital_art", image: Project1, link: "/project/1", description: "Modern real estate concept branding.", client: "17 West Group", services: "Brand Identity, Web UI/UX", duration: "3 Weeks", year: "2024", tabs: [{ label: "Overview", heading: "Brand Design", description: "Created a modern digital identity for a premium real estate company.", images: [{ src: Project1, title: "Logo Concept", desc: "Elegant design showcasing urban sophistication." }] }] },
  { id: 2, title: "Aura Music App", category: "ui_ux", image: Project2, link: "/project/2", description: "Music app interface design focusing on user flow.", client: "Aura Audio", services: "App UI/UX Design", duration: "2 Weeks", year: "2024", tabs: [{ label: "UI Design", heading: "Vibrant Dark Mode", description: "Designed a sleek dark interface for smooth navigation.", images: [{ src: Project2, title: "Main Interface", desc: "Neon-accented layout for music enthusiasts." }] }] },
  { id: 3, title: "Neon Dystopia", category: "digital_art", image: Project3, link: "/project/3", description: "Cyberpunk-inspired artwork with glowing effects.", client: "Self Project", services: "Digital Illustration", duration: "1 Week", year: "2024", tabs: [{ label: "Concept", heading: "Cyberpunk Vision", description: "A personal artwork exploring futuristic neon themes.", images: [{ src: Project3, title: "Artwork", desc: "Illustration in vibrant purples and blues." }] }] },
  { id: 4, title: "Terra Coffee", category: "branding", image: Project4, link: "/project/4", description: "Branding project for an eco-friendly coffee brand.", client: "Terra Co.", services: "Logo Design, Branding", duration: "2 Weeks", year: "2024", tabs: [{ label: "Identity", heading: "Eco Brand", description: "Minimal and sustainable aesthetic for organic coffee.", images: [{ src: Project4, title: "Logo Mockup", desc: "Earth-toned branding assets." }] }] },
  { id: 5, title: "Geometric Harmony", category: "abstract", image: Project5, link: "/project/5", description: "Abstract art balancing symmetry and color contrast.", client: "Freelance", services: "Digital Art", duration: "1 Week", year: "2023", tabs: [{ label: "Artwork", heading: "Shapes in Balance", description: "Explores geometric form balance and symmetry.", images: [{ src: Project5, title: "Main Artwork", desc: "Visual balance of color gradients." }] }] },
  { id: 6, title: "Android Soul", category: "digital_art", image: Project6, link: "/project/6", description: "Futuristic digital artwork exploring machine emotions.", client: "Private Commission", services: "Concept Art", duration: "4 Days", year: "2023", tabs: [{ label: "Inspiration", heading: "AI Consciousness", description: "Artwork expressing the soul within machines.", images: [{ src: Project6, title: "Digital Portrait", desc: "Surreal neon tones and emotionless gaze." }] }] },
  { id: 7, title: "Zen Garden", category: "digital_art", image: Project7, link: "/project/7", description: "Calming visuals inspired by nature and Japanese art.", client: "Wellness Brand", services: "Digital Art, Concept Visualization", duration: "1 Week", year: "2023", tabs: [{ label: "Design", heading: "Serenity in Motion", description: "A soothing visual palette representing calmness.", images: [{ src: Project7, title: "Nature Scene", desc: "Pastel gradients and natural forms." }] }] },
  { id: 8, title: "Pixel Perk Cafe", category: "branding", image: Project8, link: "/project/8", description: "Cafe logo and branding with pixel-art theme.", client: "Pixel Perk", services: "Logo Design, Brand Identity", duration: "2 Weeks", year: "2023", tabs: [{ label: "Logo", heading: "Retro Cafe Vibe", description: "Playful pixel-art inspired design system.", images: [{ src: Project8, title: "Logo Preview", desc: "Pixel-based typography with coffee motif." }] }] },
  { id: 9, title: "Etherea Skincare", category: "branding", image: Project9, link: "/project/9", description: "Minimalist skincare branding project.", client: "Etherea", services: "Packaging Design, Brand Aesthetic", duration: "3 Weeks", year: "2024", tabs: [{ label: "Branding", heading: "Clean & Soft Look", description: "Subtle tones and elegant packaging visuals.", images: [{ src: Project9, title: "Product Mockups", desc: "Minimalist cream container and logo design." }] }] },
];

// ------------------ PAST WORKS ------------------
export const pastWorksProjects: Project[] = [
  { id: 1, title: "Whispering Woods", description: "View Project", category: "digital_art", image: Past1, link: "/crystalvision" },
  { id: 2, title: "Neon Dystopia", description: "View Project", category: "digital_art", image: Past2, link: "/crystalvision" },
  { id: 3, title: "Geometric Harmony", description: "View Project", category: "digital_art", image: Past3, link: "/crystalvision" },
  { id: 4, title: "Android Soul", description: "View Project", category: "digital_art", image: Past4, link: "/crystalvision" },
  { id: 5, title: "Zen Garden", description: "View Project", category: "digital_art", image: Past5, link: "/crystalvision" },
  { id: 6, title: "Pixel Perk Cafe", description: "View Project", category: "digital_art", image: Past6, link: "/crystalvision" },
];

// ------------------ PLAYGROUND ------------------
export const playgroundProjects: Project[] = [
  { id: 1, title: "ERROR_404.exe", subtitle: "When reality.exe stops working", category: "experimental", image: Playground1, link: "/crystalvision" },
  { id: 2, title: "NEON DREAMS", subtitle: "Typography Chaos", category: "unconventional", image: Playground2, link: "/crystalvision" },
  { id: 3, title: "Impossible Geometries", subtitle: "Physics left the chat", category: "weird", image: Playground3, link: "/crystalvision" },
  { id: 4, title: "Broken.Reality", subtitle: "System.malfunction.beautiful", category: "experimental", image: Playground4, link: "/crystalvision" },
  { id: 5, title: "Data Dreams", subtitle: "What AI sees when it sleeps", category: "unconventional", image: Playground5, link: "/crystalvision" },
  { id: 6, title: "WILD & FREE", subtitle: "Rebellious Letters", category: "weird", image: Playground6, link: "/crystalvision" },
  { id: 7, title: "Dreamscape Architecture", subtitle: "Building in the impossible", category: "experimental", image: Playground7, link: "/crystalvision" },
  { id: 8, title: "Liquid Thoughts", subtitle: "Consciousness in motion", category: "unconventional", image: Playground8, link: "/crystalvision" },
];
