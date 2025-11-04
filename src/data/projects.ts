import { Project } from '../types';

// === WORKS PROJECTS ===
import Project1 from '../images/Works/Project1.png';
import Project2 from '../images/Works/Project2.png';
import Project3 from '../images/Works/Project3.png';
import Project4 from '../images/Works/Project4.png';
import Project5 from '../images/Works/Project5.png';
import Project6 from '../images/Works/Project6.png';
import Project7 from '../images/Works/Project7.png';
import Project8 from '../images/Works/Project8.png';
import Project9 from '../images/Works/Project9.png';

// === PAST WORKS PROJECTS ===
import Past1 from '../images/pastworks/pastwork1.png';
import Past2 from '../images/pastworks/pastwork2.png';
import Past3 from '../images/pastworks/pastwork3.png';
import Past4 from '../images/pastworks/pastwork4.png';
import Past5 from '../images/pastworks/pastwork5.png';
import Past6 from '../images/pastworks/pastwork6.png';

// === PLAYGROUND PROJECTS ===
import Playground1 from '../images/Playgrounds/Playground1.png';
import Playground2 from '../images/Playgrounds/Playground2.png';
import Playground3 from '../images/Playgrounds/Playground3.png';
import Playground4 from '../images/Playgrounds/Playground4.png';
import Playground5 from '../images/Playgrounds/Playground5.png';
import Playground6 from '../images/Playgrounds/Playground6.png';
import Playground7 from '../images/Playgrounds/Playground7.png';
import Playground8 from '../images/Playgrounds/Playground8.png';


// ------------------ WORKS ------------------
export const worksProjects: Project[] = [
  { id: 1, title: '17 West', category: 'digital_art', image: Project1, link: '/crystalvision' },
  { id: 2, title: 'Aura Music App', category: 'ui/ux', image: Project2, link: '/crystalvision' },
  { id: 3, title: 'Neon Dystopia', category: 'digital_art', image: Project3, link: '/crystalvision' },
  { id: 4, title: 'Terra Coffee', category: 'branding', image: Project4, link: '/crystalvision' },
  { id: 5, title: 'Geometric Harmony', category: 'abstract', image: Project5, link: '/crystalvision' },
  { id: 6, title: 'Android Soul', category: 'digital_art', image: Project6, link: '/crystalvision' },
  { id: 7, title: 'Zen Garden', category: 'digital_art', image: Project7, link: '/crystalvision' },
  { id: 8, title: 'Pixel Perk Cafe', category: 'branding', image: Project8, link: '/crystalvision' },
  { id: 9, title: 'Etherea Skincare', category: 'branding', image: Project9, link: '/crystalvision' },
];


// ------------------ PAST WORKS ------------------
export const pastWorksProjects: Project[] = [
  { id: 1, title: 'Whispering Woods', description: 'See Details', category: 'digital_art', image: Past1, link: '/crystalvision' },
  { id: 2, title: 'Neon Dystopia', description: 'See Details', category: 'digital_art', image: Past2, link: '/crystalvision' },
  { id: 3, title: 'Geometric Harmony', description: 'See Details', category: 'digital_art', image: Past3, link: '/crystalvision' },
  { id: 4, title: 'Android Soul', description: 'See Details', category: 'digital_art', image: Past4, link: '/crystalvision' },
  { id: 5, title: 'Zen Garden', description: 'See Details', category: 'digital_art', image: Past5, link: '/crystalvision' },
  { id: 6, title: 'Pixel Perk Cafe', description: 'See Details', category: 'digital_art', image: Past6, link: '/crystalvision' },
];


// ------------------ PLAYGROUND ------------------
export const playgroundProjects: Project[] = [
  { id: 1, title: 'ERROR_404.exe', subtitle: 'When reality.exe stops working', category: 'experimental', image: Playground1, link: '/crystalvision' },
  { id: 2, title: 'NEON DREAMS', subtitle: 'Typography Chaos', category: 'unconventional', image: Playground2, link: '/crystalvision' },
  { id: 3, title: 'Impossible Geometries', subtitle: 'Physics left the chat', category: 'weird', image: Playground3, link: '/crystalvision' },
  { id: 4, title: 'Broken.Reality', subtitle: 'System.malfunction.beautiful', category: 'experimental', image: Playground4, link: '/crystalvision' },
  { id: 5, title: 'Data Dreams', subtitle: 'What AI sees when it sleeps', category: 'unconventional', image: Playground5, link: '/crystalvision' },
  { id: 6, title: 'WILD & FREE', subtitle: 'Rebellious Letters', category: 'weird', image: Playground6, link: '/crystalvision' },
  { id: 7, title: 'Dreamscape Architecture', subtitle: 'Building in the impossible', category: 'experimental', image: Playground7, link: '/crystalvision' },
  { id: 8, title: 'Liquid Thoughts', subtitle: 'Consciousness in motion', category: 'unconventional', image: Playground8, link: '/crystalvision' },
];
