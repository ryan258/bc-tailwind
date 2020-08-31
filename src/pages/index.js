import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
// import catAndHumanIllustration from "../images/cat-and-human-illustration.svg";
// import bryanPianoPortrait from "../images/bryan-piano-pt.jpg";

function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[`Bryan Cee`, `music`, `composer`, `Reggae`, `Classical`]}
        title="Home"
      />
      <div className="home splash diary">
        <Link to="/album/diary" className="enter-button"></Link>
      </div>
      <div className="text-center tip">
        <div className="enter">Click Image to Proceed.</div>
      </div>
      {/* <div className="sm:flex pt-8">
        <section className="text-center w-full sm:w-7/12">
          <img
            alt="Bryan enjoying the piano."
            className="block"
            src={bryanPianoPortrait}
          />
        </section>
        <section className="bg-gray-200 p-4 w-full sm:w-5/12 mt-8">
          <h1 className="font-bold text-xl mb-4">Bryan Cee...</h1>
          <p className="text-sm mb-4">
            Brian Cooper also affectionately known as “Bryan Cee” is an
            International singer, songwriter, musician, composer and educator
            who has performed both locally and abroad. Some of his works have
            been featured by the Bahamas Ministry of Tourism as well as the
            Bahamas Ministry of Education. As a performer, Brian has performed
            many festivals such as the Caribbean carnival where he was featured
            in The Bahamas, Atlanta, and Minnesota. Brian has also made a name
            for himself in the midwest where he performed extensively in Iowa,
            Wisconsin, and Minnesota. Some venues included The Global market
            festival, Secret Circus, Winter Carnival, and St. Paul’s Riverfront
            prototype festival. By 2016 he completed his first album called
            &ldquo;The Wibe Of life&rdquo; which included his first single
            &ldquo;Long Lost Brother&rdquo; which was released with a music
            video in late 2012.
          </p>
          <p className="text-sm mb-4">
            By being exposed to classical music from a very young age, he grew
            fond of the piano and began his studies eventually receiving his
            Bachelor’s degree in music studies from St. Johns University,
            majoring in Piano, Organ, and Tuba. Brian also has done many
            classical concerts for both organ and piano featuring works from
            Bach, Beethoven, Schumann, Einaudi, and Buxtehude along with many
            original compositions. Raised catholic, Brian began his musical
            journey in the church where he held the position of organist and
            musical director of his local parish for over 10 years. As an
            educator and artist-teacher for more than 15 years, Brian has taught
            k-12 to the college level. Some of his duties were vocal coach,
            private piano instructor, choir/ band director as well as starting a
            youth orchestra. After attaining a master’s in piano performance at
            McNally Smith College of music, Brian expanded his talents to
            Chicago’s theater scene as a pit musician as well as working
            directly with CPS schools as a musical director and accompanist
            under the Professional Dance Theater Youth Acadamy Company
            (P.D.T.Y.A).
          </p>
        </section>
      </div> */}
    </Layout>
  );
}

export default IndexPage;
