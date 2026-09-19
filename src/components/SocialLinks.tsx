import { Github, Linkedin, Mail, Link as LinkIcon, type LucideIcon } from 'lucide-react';
import { socialEntries, socialHref } from '@/lib/data';

const ICONS: Record<string, LucideIcon> = {
  github: Github,
  linkedin: Linkedin,
  email: Mail,
};

export default function SocialLinks({ className = '' }: { className?: string }) {
  return (
    <ul className={`flex items-center gap-3 ${className}`}>
      {socialEntries.map(([key, value]) => {
        const Icon = ICONS[key] ?? LinkIcon;
        return (
          <li key={key}>
            <a
              href={socialHref(key, value)}
              target={key === 'email' ? undefined : '_blank'}
              rel={key === 'email' ? undefined : 'noopener noreferrer'}
              className="icon-btn h-10 w-10"
              aria-label={key}
              title={value}
            >
              <Icon className="h-[18px] w-[18px]" />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
