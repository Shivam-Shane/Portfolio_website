// pages/_app.js
import Head from 'next/head';
import "aos/dist/aos.css";
import "../src/index.css";
import "../src/App.css";
import "../src/css/About.css";
import "../src/css/Chatbot.css";
import "../src/css/Contact.css";
import "../src/css/Footer.css";
import "../src/css/Home.css";
import "../src/css/Loader.css";
import "../src/css/Navbar.css";
import "../src/css/Projects.css";
import "../src/css/Experience.css";
import "../src/css/ScrollUp.css";
import "../src/css/Skills.css";
import "../src/css/neural.css";
import "../src/css/DataScienceFlow.css";
import "../src/css/Publication.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Shivam Portfolio</title>
        <meta
          name="description"
          content="Shivam's portfolio, featuring experience, data science projects, publications, and skills."
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
