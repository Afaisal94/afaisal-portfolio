import Layout from "@/components/layout";
import Link from "next/link";

const blogPosts = [
  {
    id: 1,
    title: "Build Frontend Blog using Next js",
    href: "https://lazycoding.xyz/build-frontend-blog-using-next-js/",
    imageUrl:
      "https://lazycoding.xyz/wp-content/uploads/2024/01/Blog-Frontend.png",
  },
  {
    id: 2,
    title: "Build Backend Blog using Express js & Mongodb",
    href: "https://lazycoding.xyz/build-frontend-blog-using-next-js/",
    imageUrl:
      "https://lazycoding.xyz/wp-content/uploads/2024/01/Blog-Backend.png",
  },
  {
    id: 3,
    title: "Build Todo List Website Using Laravel & Next js",
    href: "https://lazycoding.xyz/build-frontend-blog-using-next-js/",
    imageUrl:
      "https://lazycoding.xyz/wp-content/uploads/2024/01/todolist-web.png",
  },
  {
    id: 4,
    title: "Build POS Desktop App Using Laravel & React Electron js",
    href: "https://lazycoding.xyz/build-pos-desktop-app-using-laravel-react-electron-js/",
    imageUrl:
      "https://lazycoding.xyz/wp-content/uploads/2024/01/Point-of-sale-Desktop-App.png",
  },
  {
    id: 5,
    title: "Build Todo List Android App Using Laravel & React Native",
    href: "https://lazycoding.xyz/build-todo-list-android-app-using-laravel-react-native/",
    imageUrl:
      "https://lazycoding.xyz/wp-content/uploads/2024/01/Todolist-App.png",
  },
  {
    id: 6,
    title: "Build REST API Using Laravel & MySQL",
    href: "https://lazycoding.xyz/build-rest-api-using-laravel-mysql/",
    imageUrl:
      "https://lazycoding.xyz/wp-content/uploads/2023/09/Rest-Api-Laravel-1226x690.png",
  },
];

export default function Blog() {
  return (
    <Layout>
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Blog
          </h2>
          <p className="mt-2 text-lg leading-8 text-white">
            Several blog articles that I have written.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-white px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
            >
              <img
                src={post.imageUrl}
                alt=""
                className="absolute inset-0 -z-10 h-full w-full object-cover"
              />
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-white via-gray-900/40" />
              <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

              <h3 className="mt-3 text-lg font-semibold leading-6 text-grey-900 bg-slate-200">
                <a href={post.href} target="_blank">
                  <span className="absolute inset-0" />
                  {post.title}
                </a>
              </h3>
            </article>
          ))}
        </div>
        <div className="flex justify-center items-center mt-10">
          <Link
            href={"https://lazycoding.xyz"}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            More Articles
          </Link>
        </div>
      </div>
    </Layout>
  );
}
