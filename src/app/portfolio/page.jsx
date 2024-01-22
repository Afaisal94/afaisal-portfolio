import Dialogs from "@/components/dialogs";
import Layout from "@/components/layout";

const portfolio = [
  {
    name: "Todo List Website",
    imageUrl: "/webTodo.jpg",
    desc: "Todolist website with authentication (Login, Register), Users can add task, update status (completed/incomplete) and delete task.",
    tech: "Frontend : Next js, Backend : Laravel, Database : MySQL",
    type: "web",
    demo: "https://todolist-chi-gilt.vercel.app",
    download: "",
  },
  {
    name: "Todo List Android App",
    imageUrl: "/appTodo.jpg",
    desc: "Todolist android app with authentication (Login, Register), Users can add task, update status (completed/incomplete) and delete task.",
    tech: "Frontend : React native, Backend : Laravel, Database : MySQL",
    type: "app",
    demo: "",
    download: "",
  },
  {
    name: "Point of Sale Desktop App",
    imageUrl: "/webPos.jpg",
    desc: "Point of Sale desktop app with authentication (Login), Admin can manage category data, product data and transaction data.",
    tech: "Frontend : React Electron js, Backend : Laravel, Database : MySQL",
    type: "app",
    demo: "",
    download: "",
  },
  {
    name: "Blog Website",
    imageUrl: "/webBlog.jpg",
    desc: "Blog website has several pages including Blog home, Blog by category, Blog search by keyword. also have authentication (Login Admin), Admin can manage category data, post data and comment data.",
    tech: "Frontend : Next js, Backend : Express js, Database : MongoDB",
    type: "web",
    demo: "https://project-blog-frontend.vercel.app",
    download: "",
  },
  {
    name: "Online Shop Website",
    imageUrl: "/webShop.jpg",
    desc: "Online shop website has several pages including Home, Shopping cart, Checkout page, and Payment using Midtrans Snap. also have authentication (Login Admin), Admin can manage category data, product data and transaction data.",
    tech: "Frontend : Next js, Backend : Express js, Database : MongoDB",
    type: "web",
    demo: "https://frontend-shop-app.vercel.app",
    download: "",
  },
  {
    name: "Portfolio Website",
    imageUrl: "/webPortfolio.jpg",
    desc: "My Portfolio Website",
    tech: "Next js, Tailwind Css",
    type: "web",
    demo: "",
    download: "",
  },
];

export default function Portfolio() {
  return (
    <Layout>
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Portfolio
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Several projects that I have made.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-2 xl:grid-cols-2"
        >
          {portfolio.map((item) => (
            <li key={item.name}>
              <img
                className="aspect-[16/9] w-full rounded-2xl object-cover"
                src={item.imageUrl}
                alt=""
              />
              <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-white text-center">
                {item.name}
              </h3>
              <div className="flex justify-center items-center mt-5">
                <Dialogs item={item} />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}
