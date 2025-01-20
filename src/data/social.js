import {
  RiFacebookFill,
  RiInstagramLine,
  RiLinkedinFill,
  RiTwitterXFill,
  RiWhatsappLine,
  RiYoutubeFill
} from 'react-icons/ri';

export const socialLinks = [
  {
    icon: <RiInstagramLine className="h-5 w-5" />,
    link: 'https://www.instagram.com/vedavarsity',
    label: 'instagram'
  },
  {
    icon: <RiFacebookFill className="lg:h-5 lg:w-5" />,
    link: '#',
    label: 'facebook'
  },
  {
    icon: <RiLinkedinFill className="h-5 w-5" />,
    link: 'https://www.linkedin.com/company/vedavarsity/',
    label: 'linkedin'
  },
  {
    icon: <RiTwitterXFill className="h-5 w-5" />,
    link: 'https://twitter.com/vedavarsity',
    label: 'twitter'
  },
  {
    icon: <RiWhatsappLine className="h-5 w-5" />,
    link: 'https://whatsapp.com/channel/0029Var5TSW6RGJMUXDTYb1b',
    label: 'whatsapp'
  },
  {
    icon: <RiYoutubeFill className="h-5 w-5" />,
    link: '#',
    label: 'youtube'
  }
];
