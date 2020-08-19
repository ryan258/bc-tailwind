import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
// import bryanPianoPortrait from "../images/bryan-piano-pt.jpg";
import wibeOfLife from "../images/albumCover--wibe-of-life.jpg";
import diaryPandemic from "../images/albumCover--diary-of-a-pandemic.png";

function MusicPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Music"
      />

      <div className="sm:flex sm:space-x-4">
        {/* <section className="bg-gray-200 pb-4 w-full sm:w-4/12 mt-8">
          <img
            alt="Bryan enjoying the piano."
            className="block"
            src={wibeOfLife}
          />
          <h2 className="text-2xl text-center uppercase">The Wibe of Life</h2>
          <p className="text-lg text-center uppercase mb-4">Out Now</p>
          <p className="text-sm text-bold text-center uppercase">
            <a
              href="#"
              className="bg-gray-800 text-white px-4 py-2 inline-block"
            >
              Listen
            </a>
          </p>
        </section> */}
        <div className="sm:w-1/12"></div>
        <section className="bg-gray-200 pb-4 w-full sm:w-5/12 mt-8">
          <Link to="/album/diary">
            <img
              alt="Album art for Diary of a Pandemic"
              className="block"
              src={diaryPandemic}
            />
          </Link>
          <h2 className="text-2xl pt-4 text-center uppercase">
            Diary of a Pandemic
          </h2>
          <p className="text-lg text-center uppercase mb-4">
            Out September 1st
          </p>
          <p className="text-sm text-bold text-center uppercase">
            <Link
              to="/album/diary"
              className="bg-gray-800 text-white px-4 py-2 inline-block"
            >
              Listen
            </Link>
            {/* <a
              href="https://verve.lnk.to/ChronologyOfADream"
              target="_blank"
              rel="noreferrer"
              className="bg-gray-800 text-white px-4 py-2 inline-block"
            >
              Listen
            </a> */}
          </p>
        </section>
        <section className="bg-gray-200 pb-4 w-full sm:w-5/12 mt-8">
          <Link to="/album/wibe">
            <img
              alt="Bryan enjoying the piano."
              className="block"
              src={wibeOfLife}
            />
          </Link>
          <h2 className="text-2xl pt-4 text-center uppercase">
            The Wibe of Life
          </h2>
          <p className="text-lg text-center uppercase mb-4">Out Now</p>
          <p className="text-sm text-bold text-center uppercase">
            <Link
              to="/album/wibe"
              className="bg-gray-800 text-white px-4 py-2 inline-block"
            >
              Listen
            </Link>
          </p>
        </section>
      </div>
    </Layout>
  );
}

export default MusicPage;
