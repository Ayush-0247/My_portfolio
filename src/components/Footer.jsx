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
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto, veniam magnam? Qui illo dolor nulla inventore itaque aliquam, voluptatum esse eius aliquid, minus deleniti. Quae perferendis nostrum amet perspiciatis nemo!
          </p>
        </div>

        {/* right: link columns */}
        <div className="flex gap-16 md:gap-24">
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-4">
              About
            </h2>
            <ul className="flex flex-col gap-2.5 text-sm text-gray-700">
              <li className="hover:text-black cursor-pointer transition-colors">About</li>
              <li className="hover:text-black cursor-pointer transition-colors">Careers</li>
              <li className="hover:text-black cursor-pointer transition-colors">Blog</li>
              <li className="hover:text-black cursor-pointer transition-colors">Contact</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-4">
              Connect with me
            </h2>
            <ul className="flex flex-col gap-2.5 text-sm text-gray-700">
              <li className="hover:text-black cursor-pointer transition-colors">GitHub</li>
              <li className="hover:text-black cursor-pointer transition-colors">LinkedIn</li>
              <li className="hover:text-black cursor-pointer transition-colors">Twitter</li>
              <li className="hover:text-black cursor-pointer transition-colors">Email</li>
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