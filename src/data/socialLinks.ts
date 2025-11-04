import { SocialLink } from '../types';

// Import icons locally
import DribbbleIcon from '../icons/dribbble.svg';
import BehanceIcon from '../icons/behance.svg';
import InstagramIcon from '../icons/instagram.svg';
import MailIcon from '../icons/mail.svg';

export const socialLinks: SocialLink[] = [
    {
        icon: DribbbleIcon,
        href: 'https://dribbble.com',
        label: 'Dribbble'
    },
    {
        icon: BehanceIcon,
        href: 'https://behance.net',
        label: 'Behance'
    },
    {
        icon: InstagramIcon,
        href: 'https://instagram.com',
        label: 'Instagram'
    },
    {
        icon: MailIcon,
        href: 'mailto:hello@elaravance.com',
        label: 'Mail'
    },
];
