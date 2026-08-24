import Dialogs from "@/components/dialogs";
import Layout from "@/components/layout";

const portfolio = [
  {
    name: "Product AI Chatbot (LLM RAG)",
    imageUrl: "/webChatbot.png",
    desc: "AI-powered chatbot for product information and customer support.",
    tech: "Frontend : Next js, Backend : Go, Database : PostgreSQL & PG Vector",
    type: "web",
    demo: "https://product-ai-chatbot.hellofaisal.my.id/catalog",
    download: "",
  },
  {
    name: "Tracking App",
    imageUrl: "/appTracking.jpg",
    desc: "Tracking app with authentication (Login, Register), Users can track their location in real time and see the history of their location.",
    tech: "Frontend : React native, Backend : Go with Socket, Database : Redis & MySQL",
    type: "app",
    demo: "",
    download:
      "https://drive.google.com/file/d/1oogHGA7Cn26qBuYLSrMhgicn-TI3yvRH/view?usp=sharing",
  },
  {
    name: "YouTube Downloader Desktop App",
    imageUrl: "/appYt.png",
    desc: "YouTube downloader desktop app. Users can download YouTube videos in MP4 format and audio in MP3 format.",
    tech: "Python & Tkinter",
    type: "app",
    demo: "",
    download:
      "https://drive.google.com/file/d/1jB_Iq0YYYPttX_hbOXOBvzYG3zsVF2Mm/view?usp=sharing",
  },
  {
    name: "E-Learning Portal Website",
    imageUrl: "/webIlearn.png",
    desc: "E-Learning portal website integrated with Wizlearn LMS",
    tech: "CodeIgniter & MySQL Database",
    type: "web",
    demo: "https://ilearnindonesia.co.id",
    download: "",
  },
  {
    name: "University Website - STKIP Pamane Talino",
    imageUrl: "/webStkip.png",
    desc: "Official university website for STKIP Pamane Talino",
    tech: "WordPress CMS & MySQL Database",
    type: "web",
    demo: "https://stkippamanetalino.ac.id",
    download: "",
  },
  {
    name: "Portfolio Website",
    imageUrl: "/webPorto.png",
    desc: "Portfolio Website",
    tech: "Next js & Tailwind Css",
    type: "web",
    demo: "https://hellofaisal.my.id",
    download: "",
  },
];

export default function Portfolio() {
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

        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
          <div className="mx-auto max-w-2xl text-center lg:mx-0 lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-4 py-1.5 text-xs font-semibold tracking-wide text-indigo-700">
              <span className="h-2 w-2 rounded-full bg-indigo-600" />
              Portfolio
            </div>
            <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Portfolio
            </h2>
          </div>

          <ul
            role="list"
            className="mx-auto mt-12 grid max-w-2xl grid-cols-1 gap-8 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
          >
            {portfolio.map((item) => (
              <li
                key={item.name}
                className="group flex flex-col overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/60"
              >
                {/* Uniform image container - web: cover, app: contain */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className={`h-full w-full transition duration-500 group-hover:scale-[1.03] ${
                      item.type === "app"
                        ? "object-contain bg-white p-3"
                        : "object-cover object-top"
                    }`}
                    loading="lazy"
                  />
                  <span
                    className={`absolute left-3 top-3 rounded-full px-3 py-1 text-xs font-semibold shadow backdrop-blur ${
                      item.type === "web"
                        ? "bg-indigo-600 text-white"
                        : "bg-white/90 text-slate-700"
                    }`}
                  >
                    {item.type === "web" ? "Website" : "App"}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="line-clamp-2 text-center text-base font-semibold leading-6 text-slate-900">
                    {item.name}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-center text-sm leading-6 text-slate-500">
                    {item.desc}
                  </p>
                  <p className="mt-3 line-clamp-1 text-center text-xs font-medium text-slate-400">
                    {item.tech}
                  </p>
                  <div className="mt-5 flex justify-center">
                    <Dialogs item={item} />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Layout>
  );
}
