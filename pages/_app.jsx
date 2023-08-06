import Layout from "@/sources/layout";
import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  const metaData = {
    viewport:
      "width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no",
    title: "Sk Mohammed Mudassir | Portfolio",
    description:
      "I'm Mudassir & I'm a skilled Fullstack Web Developer with experience in JavaScript and expertise in frameworks/library like HTML, CSS, js, React.js, Bootstrap, Node.js and MongoDB. I'm a quick learner and collaborate closely with clients to create efficientm scalable, and user-friendly solutions that solve real-world problems. Let;s work together to bring your ideas to life!",
    icon: "/favicon.svg",
    author: "Shaik Mohammed Mudassir",
    tags: "Mudassir, frontend developer, developer portfolio, next.js, react.js, tailwind css, framer-motion, framer motion, node.js, mongodb, three.js, react-three",
  };
  return (
    <>
      <Head>
        <meta name="viewport" content={metaData.viewport} />
        <title>{metaData.title}</title>
        <link rel="icon" href={metaData.icon} />
        <meta name="description" content={metaData.description} />
        <meta name="keywords" content={metaData.keywords} />
        <meta name="author" content={metaData.author} />
      </Head>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
