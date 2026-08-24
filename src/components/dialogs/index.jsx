"use client";

import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Link from "next/link";
import {
  XMarkIcon,
  ArrowTopRightOnSquareIcon,
  ArrowDownTrayIcon,
  CodeBracketIcon,
} from "@heroicons/react/24/outline";

export default function Dialogs(props) {
  const { item } = props;
  const [open, setOpen] = useState(false);
  const cancelButtonRef = useRef(null);
  const isApp = item.type === "app";

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-slate-900/10 transition hover:bg-slate-800 hover:shadow-lg"
      >
        View Project
        <ArrowTopRightOnSquareIcon className="h-4 w-4 opacity-80" />
      </button>

      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-50"
          initialFocus={cancelButtonRef}
          onClose={setOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 sm:p-6">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative flex max-h-[90vh] w-full max-w-2xl flex-col overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-2xl">
                  {/* Header */}
                  <div className="flex items-start justify-between gap-4 border-b border-slate-100 px-6 py-5 sm:px-7">
                    <div className="min-w-0 flex-1">
                      <Dialog.Title className="pr-2 text-lg font-semibold leading-6 text-slate-900">
                        {item.name}
                      </Dialog.Title>
                      <p className="mt-1 flex items-center gap-2 text-xs font-medium text-slate-500">
                        <span
                          className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ${
                            isApp
                              ? "bg-violet-50 text-violet-700 ring-1 ring-violet-200"
                              : "bg-indigo-50 text-indigo-700 ring-1 ring-indigo-200"
                          }`}
                        >
                          {isApp ? "Mobile / Desktop App" : "Website"}
                        </span>
                        <span className="hidden sm:inline">•</span>
                        <span className="hidden truncate sm:inline">
                          {item.tech}
                        </span>
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => setOpen(false)}
                      className="rounded-full bg-slate-100 p-2 text-slate-500 transition hover:bg-slate-200 hover:text-slate-700"
                    >
                      <XMarkIcon className="h-5 w-5" />
                    </button>
                  </div>

                  {/* Scrollable content */}
                  <div className="overflow-y-auto px-6 py-6 sm:px-7">
                    {/* Image - uniform size, no crop for app */}
                    <div className="relative w-full overflow-hidden rounded-xl border border-slate-200 bg-slate-100 shadow-sm">
                      <div className="aspect-[16/10] w-full">
                        <img
                          src={item.imageUrl}
                          alt={item.name}
                          className={`h-full w-full ${
                            isApp
                              ? "object-contain bg-white p-2 sm:p-3"
                              : "object-cover object-top"
                          }`}
                        />
                      </div>
                    </div>

                    {/* Details */}
                    <div className="mt-6 space-y-4">
                      <div>
                        <h4 className="flex items-center gap-2 text-sm font-semibold text-slate-900">
                          <CodeBracketIcon className="h-4 w-4 text-slate-400" />
                          Description
                        </h4>
                        <p className="mt-2 text-sm leading-6 text-slate-600">
                          {item.desc}
                        </p>
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold text-slate-900">
                          Technologies Used
                        </h4>
                        <div className="mt-2 flex flex-wrap gap-2">
                          {item.tech.split(",").map((t) => (
                            <span
                              key={t.trim()}
                              className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700"
                            >
                              {t.trim()}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Link */}
                      <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                        <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                          {isApp ? "Download" : "Live Demo"}
                        </p>
                        <Link
                          href={isApp ? item.download : item.demo}
                          target="_blank"
                          className="mt-2 flex items-center gap-2 break-all text-sm font-medium text-indigo-600 hover:text-indigo-700 hover:underline"
                        >
                          {isApp ? item.download : item.demo}
                          <ArrowTopRightOnSquareIcon className="h-4 w-4 flex-none" />
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="flex flex-col-reverse gap-3 border-t border-slate-100 bg-slate-50 px-6 py-4 sm:flex-row sm:justify-end sm:px-7">
                    <button
                      type="button"
                      className="inline-flex w-full justify-center rounded-full border border-slate-200 bg-white px-6 py-2.5 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50 sm:w-auto"
                      onClick={() => setOpen(false)}
                      ref={cancelButtonRef}
                    >
                      Close
                    </button>
                    <Link
                      href={isApp ? item.download : item.demo}
                      target="_blank"
                      className={`inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold text-white shadow-md transition sm:w-auto ${
                        isApp
                          ? "bg-violet-600 hover:bg-violet-700 shadow-violet-600/20"
                          : "bg-slate-900 hover:bg-slate-800 shadow-slate-900/20"
                      }`}
                    >
                      {isApp ? (
                        <>
                          <ArrowDownTrayIcon className="h-4 w-4" />
                          Download App
                        </>
                      ) : (
                        <>
                          <ArrowTopRightOnSquareIcon className="h-4 w-4" />
                          Open Demo
                        </>
                      )}
                    </Link>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}
