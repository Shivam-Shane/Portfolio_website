import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/css/tooplate-style.css'
import '../src/css/navbar.css';
import '../src/index.css'
import '../src/App.css'
import '../src/css/about.css';
import '../src/css/chatbot.css';
import '../src/css/contact.css';
import '../src/css/education.css';
import '../src/css/experience.css';
import '../src/css/projects.css';
import '../src/css/publication.css';
import '../src/css/skills.css';
import '../src/css/unicons.css'
import dynamic from 'next/dynamic';
// Dynamic import to ensure client-side only
const LocationTracker = dynamic(() => import('../src/components/LocationTracker'), { ssr: false });

function MyApp({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        @font-face {
          font-family: 'Unicons';
          src: url('/font/unicons.ttf') format('truetype'); // Adjust file name/extension
          font-weight: normal;
          font-style: normal;
        }
        body {
          font-family: 'Unicons', sans-serif; // Apply globally
        }
      `}</style>
      <LocationTracker />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;