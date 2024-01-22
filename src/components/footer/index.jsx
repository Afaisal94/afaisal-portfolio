import React from "react";

export default function Footer() {
  return (
    <div>
      <footer
        className="relative mt-16 sm:mt-20"
        aria-labelledby="footer-heading"
      >
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        <div className="mx-auto max-w-7xl px-6 pb-8 lg:px-8">
          <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
            <p className="text-xs leading-5 text-gray-400">
              &copy; 2024 Ahmad Faisal Portfolio. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
