import { Mail, Twitter, Github, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="fixed bottom-4 right-4 flex gap-4 text-sm text-zinc-500">
      <a href="mailto:pablojohn.martinez@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-300 transition-colors duration-300">
        <Mail size={20} />
      </a>
      <a href="https://x.com/pablojohnm" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-300 transition-colors duration-300">
        <Twitter size={20} />
      </a>
      <a href="https://github.com/pablojohn" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-300 transition-colors duration-300">
        <Github size={20} />
      </a>
      <a href="https://www.linkedin.com/in/pablojohn-martinez-b94139100" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-300 transition-colors duration-300">
        <Linkedin size={20} />
      </a>
    </footer>
  );
}