import Layout from "@/components/layout";
import {
  CodeBracketIcon,
  EnvelopeIcon,
  LinkIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";


export default function Contact() {
  return (
    <Layout>
      <div className="isolate px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Contact
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-100">
            I am currently open for a fulltime Full Stack Developer role. If you
            want to discuss about that feel free to contact me.
          </p>
        </div>
        <div className="mx-auto mt-20 max-w-lg space-y-16">
          <div className="flex gap-x-6">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-600">
              <EnvelopeIcon className="h-6 w-6 text-white" aria-hidden="true" />
            </div>
            <div>
              <h3 className="text-base font-semibold leading-7 text-gray-100">
                Email
              </h3>
              <p className="mt-4">
                <Link
                  href={"mailto:a.faisal1994@gmail.com"}
                  className="text-sm font-semibold leading-6 text-gray-100"
                >
                  a.faisal1994@gmail.com
                </Link>
              </p>
            </div>
          </div>
          <div className="flex gap-x-6">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-600">
              <CodeBracketIcon
                className="h-6 w-6 text-white"
                aria-hidden="true"
              />
            </div>
            <div>
              <h3 className="text-base font-semibold leading-7 text-gray-100">
                Github
              </h3>
              <p className="mt-4">
                <Link
                  href={"https://github.com/Afaisal94"}
                  className="text-sm font-semibold leading-6 text-gray-100"
                >
                  https://github.com/Afaisal94
                </Link>
              </p>
            </div>
          </div>
          <div className="flex gap-x-6">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-600">
              <LinkIcon className="h-6 w-6 text-white" aria-hidden="true" />
            </div>
            <div>
              <h3 className="text-base font-semibold leading-7 text-gray-100">
                Linkedin
              </h3>
              <p className="mt-4">
                <Link
                  href={"https://www.linkedin.com/in/afaisal94"}
                  className="text-sm font-semibold leading-6 text-gray-100"
                >
                  https://www.linkedin.com/in/afaisal94
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
