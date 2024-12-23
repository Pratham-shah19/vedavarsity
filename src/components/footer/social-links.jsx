import Link from 'next/link'
import { Twitter, Linkedin, Facebook, Instagram, Youtube } from 'lucide-react'

const socialLinks = [
  { href: 'https://twitter.com', icon: Twitter, label: 'Twitter' },
  { href: 'https://linkedin.com', icon: Linkedin, label: 'LinkedIn' },
  { href: 'https://facebook.com', icon: Facebook, label: 'Facebook' },
  { href: 'https://instagram.com', icon: Instagram, label: 'Instagram' },
  { href: 'https://youtube.com', icon: Youtube, label: 'YouTube' },
]

export function SocialLinks() {
  return (
    (<div className="flex items-center gap-4">
      {socialLinks.map((link) => {
        const Icon = link.icon
        return (
          (<Link
            key={link.label}
            href={link.href}
            className="text-gray-600 hover:text-[#0066cc] transition-colors group"
            target="_blank"
            rel="noopener noreferrer">
            <span className="sr-only">{link.label}</span>
            <Icon className="h-5 w-5 group-hover:fill-[#0066cc]" />
          </Link>)
        );
      })}
    </div>)
  );
}

