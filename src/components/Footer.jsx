function GithubIcon({ size = 40 }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.12.82-.26.82-.58 0-.28-.01-1.04-.02-2.04-3.34.73-4.04-1.61-4.04-1.61-.55-1.38-1.34-1.75-1.34-1.75-1.1-.75.08-.74.08-.74 1.22.09 1.86 1.25 1.86 1.25 1.08 1.85 2.84 1.32 3.53 1.01.11-.79.42-1.32.76-1.62-2.67-.3-5.47-1.34-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.6-2.8 5.63-5.48 5.93.43.37.81 1.1.81 2.22 0 1.6-.01 2.89-.01 3.28 0 .32.22.7.83.58C20.56 21.8 24 17.3 24 12 24 5.37 18.63 0 12 0z" />
    </svg>
  );
}
function LinkedinIcon({ size = 40 }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.95v5.66H9.37V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.26 2.37 4.26 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0z" />
    </svg>
  );
}
import { Globe } from "lucide-react";
function Footer() {
  return (
    <footer className="bg-white mt-2 px-6 md:px-16 py-16 border-t border-gray-100">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:justify-between gap-12 md:gap-8">
        {/* left: message */}
        <div className="flex-1 max-w-md">
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">
            Thanks, Bye!
          </h1>
          <p className="text-sm text-gray-500 leading-relaxed mt-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Architecto, veniam magnam? Qui illo dolor nulla inventore itaque
            aliquam, voluptatum esse eius aliquid, minus deleniti. Quae
            perferendis nostrum amet perspiciatis nemo!
          </p>
        </div>

        {/* right: link columns */}
        <div className="flex gap-16 md:gap-24">
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-4">
              About
            </h2>
            <ul className="flex flex-col gap-2.5 text-sm text-gray-700">
              <li className="hover:text-black cursor-pointer transition-colors">
                About
              </li>
              <li className="hover:text-black cursor-pointer transition-colors">
                Careers
              </li>
              <li className="hover:text-black cursor-pointer transition-colors">
                Blog
              </li>
              <li className="hover:text-black cursor-pointer transition-colors">
                Contact
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-4">
              Connect with me
            </h2>
            <ul className="flex flex-col gap-2.5 text-sm text-gray-700">
              <a
                href="https://github.com/Ayush-0247"
                target="_blank"
                rel="noopener noreferrer"
              >
                <li className="hover:text-black cursor-pointer transition-colors flex items-center gap-2">
                  <GithubIcon size={21} />
                  GitHub
                </li>
              </a>
              <a
                href="https://www.linkedin.com/in/ayushraj2407/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <li className="hover:text-black cursor-pointer transition-colors flex items-center gap-2">
                  <LinkedinIcon size={21} />
                  LinkedIn
                </li>
              </a>
              <a
                href="https://www.ciphervestcapital.in/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <li className="hover:text-black cursor-pointer transition-colors flex items-center gap-2">
                  <Globe size={21} />
                  Ciphervest Capital
                </li>
              </a>
            </ul>
          </div>
        </div>
      </div>

      {/* bottom bar */}
      <div className="max-w-6xl mx-auto mt-16 pt-6 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-400">
        <p>© {new Date().getFullYear()} All rights reserved.</p>
        <p>Built with care.</p>
      </div>
    </footer>
  );
}

export default Footer;
