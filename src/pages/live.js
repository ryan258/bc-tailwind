import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
// import bryanPianoPortrait from "../images/bryan-piano-pt.jpg";

function LivePage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Live"
      />
      <section className="pt-8 md:pt-16">
        {/* <div className="sm:flex text-center"> */}
        <div className="text-center">
          <p className="uppercase ">There are no upcoming tour dates.</p>
        </div>
      </section>
    </Layout>
  );
}

export default LivePage;
