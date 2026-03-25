'use client';

interface SmoothAnchorProps {
  href: string;
  className?: string;
  children: React.ReactNode;
}

export default function SmoothAnchor({ href, className, children }: SmoothAnchorProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const id = href.startsWith('#') ? href.slice(1) : href;
    const target = document.getElementById(id);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <a href={href} onClick={handleClick} className={className}>
      {children}
    </a>
  );
}
