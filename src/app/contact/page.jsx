import Layout from "@/components/layout";
import {
  CodeBracketIcon,
  EnvelopeIcon,
  LinkIcon,
  ArrowTopRightOnSquareIcon,
  ChatBubbleLeftRightIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

const contacts = [
  {
    name: "Email",
    description: "Fastest response — send an email anytime",
    href: "mailto:a.faisal1994@gmail.com",
    label: "a.faisal1994@gmail.com",
    icon: EnvelopeIcon,
    accent: "bg-slate-900",
  },
  {
    name: "Github",
    description: "View source code & open source contributions",
    href: "https://github.com/Afaisal94",
    label: "github.com/Afaisal94",
    icon: CodeBracketIcon,
    accent: "bg-indigo-600",
  },
  {
    name: "LinkedIn",
    description: "Connect for professional opportunities",
    href: "https://www.linkedin.com/in/afaisal94",
    label: "linkedin.com/in/afaisal94",
    icon: LinkIcon,
    accent: "bg-sky-600",
  },
];

export default function Contact() {
  return (
    <Layout>
      <div className="relative isolate bg-white">
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

        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-4 py-1.5 text-xs font-semibold tracking-wide text-indigo-700">
              <ChatBubbleLeftRightIcon className="h-4 w-4" />
              Get in Touch
            </div>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Let&apos;s{" "}
              <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
                Connect
              </span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              I am currently open to a{" "}
              <span className="font-semibold text-slate-900">
                full-time Full Stack Developer
              </span>{" "}
              role. If you&apos;d like to discuss opportunities, projects, or
              collaboration — feel free to reach out.
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {contacts.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  item.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="group relative flex flex-col rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/60 hover:border-slate-300"
              >
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-xl ${item.accent} shadow-md`}
                >
                  <item.icon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <h3 className="mt-5 text-base font-semibold leading-7 text-slate-900">
                  {item.name}
                </h3>
                <p className="mt-1 text-sm leading-6 text-slate-500">
                  {item.description}
                </p>
                <div className="mt-5 flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3.5 py-2 text-sm font-medium text-slate-700 transition group-hover:bg-slate-900 group-hover:text-white group-hover:border-slate-900">
                  <span className="truncate">{item.label}</span>
                  <ArrowTopRightOnSquareIcon className="h-4 w-4 flex-none opacity-60 group-hover:opacity-100" />
                </div>
              </Link>
            ))}
          </div>

          <div className="mx-auto mt-10 max-w-5xl">
            <div className="flex flex-col items-center justify-between gap-6 rounded-[1.75rem] border border-slate-200 bg-gradient-to-br from-slate-900 to-slate-800 px-8 py-8 shadow-xl sm:flex-row sm:px-10">
              <div className="text-center sm:text-left">
                <h3 className="text-lg font-semibold text-white">
                  Prefer direct email?
                </h3>
                <p className="mt-1 text-sm leading-6 text-slate-300">
                  I usually reply within 24 hours on business days.
                </p>
              </div>
              <Link
                href="mailto:a.faisal1994@gmail.com"
                className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3 text-sm font-semibold text-slate-900 shadow-lg transition hover:bg-slate-100"
              >
                <EnvelopeIcon className="mr-2 h-5 w-5 text-slate-700" />
                Send Email
              </Link>
            </div>
            <p className="mt-6 text-center text-xs font-medium uppercase tracking-widest text-slate-400">
              Open to remote • Jakarta, Indonesia • Available for freelance & full-time
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
