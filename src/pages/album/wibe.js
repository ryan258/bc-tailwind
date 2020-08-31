import React from "react";

import Layout from "../../components/layout";
import SEO from "../../components/seo";
// import bryanPianoPortrait from "../images/bryan-piano-pt.jpg";
import wibeOfLife from "../../images/albumCover--wibe-of-life.jpg";
// import diaryPandemic from "../../images/albumCover--diary-of-a-pandemic.png";

function WibePage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Music"
      />

      <div className="sm:flex sm:space-x-4">
        <section className=" w-full sm:w-4/12 mt-8">
          <div className="bg-gray-200 pb-4">
            <img alt="The Wibe of Life" className="block" src={wibeOfLife} />
            <h1 className="text-4xl leading-none pt-6 pb-3 text-center uppercase font-bold">
              The Wibe of Life
            </h1>
            {/* <p className="text-lg text-center uppercase mb-5">Available On:</p> */}
          </div>
          {/* <p className="text-sm text-bold text-center uppercase">
            <a
              href="https://verve.lnk.to/ChronologyOfADream"
              target="_blank"
              rel="noreferrer"
              className="bg-gray-800 text-white px-4 py-2 inline-block"
            >
              Listen
            </a>
          </p> */}
        </section>
        <section className="bg-gray-200 p-4 w-full sm:w-8/12 mt-8">
          <iframe
            width="100%"
            height="166"
            scrolling="no"
            // frameborder="no"
            rel="noreferrer"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/880879606&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
          ></iframe>

          <h2 className="text-3xl uppercase font-bold">Album Tracks</h2>
          <ol>
            <li className="pt-4 track">
              <h3 className="text-xl mb-2 bbb font-bold">Long Lost Brother</h3>
              <p className="font-serif"></p>
            </li>
            <li className="pt-4 track">
              <h3 className="text-xl mb-2 bbb font-bold">
                When You Love Somebody
              </h3>
              <p className="font-serif"></p>
            </li>
            <li className="pt-4 track">
              <h3 className="text-xl mb-2 bbb font-bold">See Your Face</h3>
              <p className="font-serif"></p>
            </li>

            <li className="pt-4 track">
              <h3 className="text-xl mb-2 bbb font-bold">Dance With You</h3>
              <p className="font-serif"></p>
            </li>
            <li className="pt-4 track">
              <h3 className="text-xl mb-2 bbb font-bold">In The Moment</h3>
              <p className="font-serif"></p>
            </li>
            <li className="pt-4 track">
              <h3 className="text-xl mb-2 bbb font-bold">Mr. Officer</h3>
              <p className="font-serif"></p>
            </li>
            <li className="pt-4 track">
              <h3 className="text-xl mb-2 bbb font-bold">Take My Life</h3>
              <p className="font-serif"></p>
            </li>
          </ol>
        </section>
      </div>
    </Layout>
  );
}

export default WibePage;
