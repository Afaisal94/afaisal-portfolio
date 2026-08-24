import Layout from "@/components/layout";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

const benefits = [
  "Backend : Laravel, Express js, Flask, FastAPI & Go",
  "Frontend : React js & Next js",
  "Mobile App : React Native",
  "Database : MySQL, PostgreSQL, Redis, MongoDB",
];

export default function Home() {
  return (
    <Layout>
      <div className="relative isolate bg-white">
        {/* Soft light background */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-50 via-white to-white" />
        <div
          className="absolute inset-x-0 top-0 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
          aria-hidden="true"
        >
          <div
            className="aspect-[1318/752] w-[82.375rem] flex-none bg-gradient-to-r from-indigo-100 via-sky-100 to-violet-100 opacity-70"
            style={{
              clipPath:
                "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
            }}
          />
        </div>

        <div className="mx-auto max-w-7xl px-6 py-10 sm:py-16 lg:px-8">
          <div className="mx-auto flex max-w-2xl flex-col gap-10 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/60 sm:p-10 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:gap-12 xl:gap-x-16 xl:px-12">
            {/* Image */}
            <div className="relative mx-auto w-full max-w-sm flex-none lg:mx-0">
              <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-tr from-indigo-500 via-sky-500 to-violet-500 opacity-10 blur-2xl" />
              <Image
                className="relative h-96 w-full flex-none rounded-2xl object-cover shadow-lg ring-1 ring-slate-200 lg:aspect-square lg:h-auto"
                src="/photoProfile.png"
                width={800}
                height={800}
                alt="Ahmad Faisal profile"
                priority
              />
              <div className="absolute -bottom-4 -right-2 hidden items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-lg sm:flex">
                <span className="flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-2.5 w-2.5 animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
                </span>
                <span className="text-sm font-semibold text-slate-700">
                  Available for work
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="w-full flex-auto">
              <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-3.5 py-1.5 text-xs font-semibold tracking-wide text-indigo-700">
                <span className="h-2 w-2 rounded-full bg-indigo-600" />
                Full Stack Developer • 5+ Years Experience
              </div>

              <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                Ahmad{" "}
                <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
                  Faisal
                </span>
              </h1>

              <p className="mt-6 text-[17px] leading-8 text-slate-600">
                I&apos;m a Full Stack Developer with 5+ years of experience
                designing, building, and maintaining scalable web applications
                and backend systems. My expertise includes developing RESTful
                APIs, integrating third-party services, optimizing databases,
                and delivering reliable software solutions using Laravel,
                React.js, Next.js, Go, and Python.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/portfolio"
                  className="inline-flex items-center justify-center rounded-full bg-slate-900 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/20 transition hover:bg-slate-800 hover:shadow-xl"
                >
                  View Portfolio
                  <span aria-hidden="true" className="ml-2">
                    →
                  </span>
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-7 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50 hover:border-slate-300"
                >
                  Contact Me
                </Link>
              </div>

              <h4 className="mt-10 text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                Tech Stack & Skills
              </h4>
              <ul
                role="list"
                className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2"
              >
                {benefits.map((benefit) => (
                  <li
                    key={benefit}
                    className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium leading-6 text-slate-700 transition hover:bg-white hover:shadow-sm"
                  >
                    <span className="flex h-8 w-8 flex-none items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm">
                      <CheckCircleIcon
                        className="h-4 w-4 text-indigo-600"
                        aria-hidden="true"
                      />
                    </span>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          
        </div>
      </div>
    </Layout>
  );
}
