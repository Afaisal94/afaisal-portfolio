import React from "react";

export default function Footer() {
  return (
    <footer
      className="relative mt-16 border-t border-slate-200 bg-slate-50/50 sm:mt-20"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm leading-5 text-slate-500">
            &copy; 2026 Ahmad Faisal Portfolio. All rights reserved.
          </p>
          <p className="text-sm text-slate-400">
            Built with Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
