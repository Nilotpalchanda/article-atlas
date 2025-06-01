import { Facebook, Instagram, Linkedin } from 'lucide-react';
import { ABOUT_SCREEN_METADATA } from './metadata';
import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = { ...ABOUT_SCREEN_METADATA };

const SOCIAL_LINKS = [
  {
    href: 'https://www.linkedin.com/',
    label: 'LinkedIn',
    icon: <Linkedin className="h-7 w-7" />,
    className: 'text-blue-700 hover:text-blue-900',
  },
  {
    href: 'https://www.facebook.com/',
    label: 'Facebook',
    icon: <Facebook className="h-7 w-7" />,
    className: 'text-blue-600 hover:text-blue-800',
  },
  {
    href: 'https://www.instagram.com/',
    label: 'Instagram',
    icon: <Instagram className="h-7 w-7" />,
    className: 'text-pink-500 hover:text-pink-700',
  },
];

const PARAGRAPHS = [
  'Welcome to ArticleAtlas! We are passionate about sharing knowledge, stories, and inspiration with our readers.',
  'Our team is dedicated to providing high-quality content on technology, lifestyle, and personal growth. We believe in the power of community and learning together.',
  'Thank you for being a part of our journey. Stay tuned for more exciting articles and updates!',
  'Founded in 2024, our mission is to empower individuals to grow and connect through meaningful content. We strive to create a welcoming space for everyone to learn, share, and be inspired.',
  'Our diverse team brings together expertise from various fields, ensuring a rich and engaging experience for our readers. We value your feedback and look forward to building a vibrant community together.',
];

const AboutPage = () => (
  <div className="flex items-center justify-center">
    <div className="w-full max-w-2xl rounded-xl bg-white bg-opacity-80 p-6 shadow-sm transition-shadow hover:shadow-md">
      <div className="flex flex-col items-center">
        <Image
          src="/og-image.png"
          alt="Team"
          height={128}
          width={128}
          loading="lazy"
          className="mb-6 h-32 w-32 rounded-full border-4 border-pink-400 object-cover shadow-lg"
        />
        <h1 className="mb-6 bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-center text-4xl font-extrabold text-transparent">
          About Us
        </h1>
      </div>
      {PARAGRAPHS.map((text, idx) => (
        <p key={idx} className="mb-4 text-lg text-gray-700">
          {text}
        </p>
      ))}
      <div className="mt-8 flex flex-col items-center space-y-4">
        <div className="flex space-x-4">
          {SOCIAL_LINKS.map(({ href, label, icon, className }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className={`text-2xl ${className}`}
            >
              {icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default AboutPage;
