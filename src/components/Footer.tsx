import { Download } from "lucide-react";
export const Footer = () => (
    <footer className="bg-gradient-to-r from-black via-blue-900 to-blue-400 py-4 px-3 text-center text-sm text-white ">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>&copy; {new Date().getFullYear()} Pradum Singh . All Rights Reserved.</p>
        
        <div className="flex gap-4">
          <a
            href="/Pradum_Singh_Resume.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 border border-blue-500 hover:bg-blue-500 hover:text-white rounded-xl px-4 py-1.5 transition text-xs"
          >
            <Download size={14} /> Resume
          </a>
          <a
            href="https://www.linkedin.com/in/pradum-singh-121a061b6/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 border border-blue-500 hover:bg-blue-500 hover:text-white rounded-xl px-4 py-1.5 transition text-xs"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/pradumsingh"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 border border-blue-500 hover:bg-blue-500 hover:text-white rounded-xl px-4 py-1.5 transition text-xs"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );