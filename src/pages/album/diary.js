import React from "react";

import Layout from "../../components/layout";
import SEO from "../../components/seo";
// import bryanPianoPortrait from "../images/bryan-piano-pt.jpg";
// import wibeOfLife from "../../images/albumCover--wibe-of-life.jpg";
import diaryPandemic from "../../images/albumCover--diary-of-a-pandemic.png";

function DiaryPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Music"
      />

      <div className="sm:flex sm:space-x-4">
        <section className=" w-full sm:w-4/12 mt-8">
          <div className="bg-gray-200 pb-4">
            <img
              alt="Album art for Diary of a Pandemic"
              className="block"
              src={diaryPandemic}
            />
            <h1 className="text-4xl leading-none pt-6 pb-3 text-center uppercase font-bold">
              Diary of a Pandemic
            </h1>
            <p className="text-lg text-center uppercase mb-5">
              Out September 1st
            </p>
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
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/880885687&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
          ></iframe>
          {/* <iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/880885687&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/user-520937318" title="Bryan Cee" target="_blank" style="color: #cccccc; text-decoration: none;">Bryan Cee</a> · <a href="https://soundcloud.com/user-520937318/quarentined" title="Quarentined" target="_blank" style="color: #cccccc; text-decoration: none;">Quarentined</a></div> */}

          <h2 className="text-3xl uppercase font-bold">Album Tracks</h2>
          <ol>
            <li className="pt-4 track">
              <h3 className="text-xl mb-2 bbb font-bold">Quarantined</h3>
              <p className="font-serif">
                It wasn’t until I was quarantined to my apartment that I
                understood the true gravity of the situation. That is why I
                thought it would be fitting for this piece to be my first entry.
                Now don’t get me wrong, I am well versed in the art of
                self-isolation and reflection, but this was a different matter
                altogether. Brought out some emotions I never felt before, maybe
                even the world has never felt before…
              </p>
            </li>
            <li className="pt-4 track">
              <h3 className="text-xl mb-2 bbb font-bold">The Virus</h3>
              <p className="font-serif">
                Covid 19 isn’t the only thing that is invisible to the naked
                eye, and it sure is spreading quickly from person to person. I
                was taught that God never gave us the spirit of fear. For
                anything that can imprison you in your own body as fear does can
                not be from God. Yet here we are… but then again so is God.
              </p>
            </li>
            <li className="pt-4 track">
              <h3 className="text-xl mb-2 bbb font-bold">Social Distancing</h3>
              <p className="font-serif">
                My favorite seasons are spring and fall. And nowhere else are
                they more elegant than in the midwest. I am blessed to be
                spending most of my social distancing in nature. All of the
                nearby nature reserves became my lifeline. It is the same peace
                that you receive when you are in the presence of The Most High.
                There is something humbling when you realize that the world is
                truly beautiful and more so, we are apart of that Beauty.
              </p>
            </li>

            <li className="pt-4 track">
              <h3 className="text-xl mb-2 bbb font-bold">
                The Stages of Grief
              </h3>
              <p className="font-serif">
                Being an empath I am constantly bombarded by the energies of
                others. Slap on a pandemic and you have a recipe for all the
                stages of grief. The unknown can be a scary thought and everyone
                deals with it differently. Taking on all of these energies at
                once can be exhausting, Luckily I have an outlet for such
                things.
              </p>
            </li>
            <li className="pt-4 track">
              <h3 className="text-xl mb-2 bbb font-bold">Patience</h3>
              <p className="font-serif">
                Jazz is the American art form of expression. I thought I would
                try and speak in the vernacular of the locals. A very special
                thank you to flutist Lloyd King for his help on this project. It
                was truly a beautiful conversation.
              </p>
            </li>
            <li className="pt-4 track">
              <h3 className="text-xl mb-2 bbb font-bold">Freedom Of Mind</h3>
              <p className="font-serif">
                There were always brief moments of clarity, those “aha” moments.
                Moments of intense inspiration like a gift from the universe.
                With the world on lockdown, we still have our dreams, our ideas,
                and thoughts. We are so much more than our physical attributes,
                and we have barely scratched the surface of the soul.
              </p>
            </li>
            <li className="pt-4 track">
              <h3 className="text-xl mb-2 bbb font-bold">The Princess Fairy</h3>
              <p className="font-serif">
                There is nothing more inspiring than the imagination of a child.
                The idea is to maintain this throughout adulthood. I frequented
                the enchanted garden often. There I played leapfrog on clouds of
                pillows, became a big bad wolf, joined in the Anthem of Elsa’s
                Frozen and if I was really lucky, I would have the privilege of
                having tea with Her Majesty The Princes Fairy Zoe.
              </p>
            </li>
            <li className="pt-4 track">
              <h3 className="text-xl mb-2 bbb font-bold">Parents</h3>
              <p className="font-serif">
                Being a parent is one of the hardest and most joyful
                experiences. I am still struggling to redefine myself after I
                became one. I found myself reflecting on my own parents. They
                did the best they could. Can I do any better? I guess time will
                tell if I am awarded the Nobel prize for parenting or become the
                root cause in a therapy session. Whatever the outcome, it is an
                honor and a privilege.
              </p>
            </li>

            <li className="pt-4 track">
              <h3 className="text-xl mb-2 bbb font-bold">Trauma</h3>
              <p className="font-serif">
                I am often heartbroken by how terrible we can be to each other
                sometimes. It is so easy to judge someone or have personal
                prejudices against one another. But how well do we even know
                each other? I hope one day we can look at each other and see how
                connected we are. The similarities far outway the differences.
                Maybe we don’t like what we see in ourselves in others. Either
                way, the truth is stranger than fiction. All of the riotings,
                protesting, and looting are just symptoms of a malignant
                disease, and only love can cure it. however, we must first be
                willing to admit that we are sick.
              </p>
            </li>
            <li className="pt-4 track">
              <h3 className="text-xl mb-2 bbb font-bold">
                Passacaglia Variations
              </h3>
              <p className="font-serif">
                I have always been enamored by fugues, canons, and passacaglias.
                As a matter of fact, it is the bases of my improvisation. I
                blame my strict Catholic and British colonial upbringing for
                that one. I dedicate this piece to my first piano teacher Mr.
                Carl Johnson. He agreed to teach me only on the premises that I
                play for church. He was the first to introduce me to Mr. Handel,
                one of the earliest improvisers.
              </p>
            </li>

            <li className="pt-4 track">
              <h3 className="text-xl mb-2 bbb font-bold">Cerebellum</h3>
              <p className="font-serif">
                What is consciousness? Can we ever reach enlightenment? What
                about Christ consciousness? Are we supposed to be striving for
                such a thing? If so How is obtained? And no I’m not talking
                about psychedelics or some drug-induced psychosis. Where is
                Nirvana, or Valhalla, or Shangrila? I always believed heaven and
                hell are right here on earth and it’s by our choices that decide
                where we spend most of our time. How intentional can we be with
                those decisions? More importantly how much control do we really
                have? Does it take discipline or strong character or are we
                slaves to our impulses?
              </p>
            </li>
            <li className="pt-4 track">
              <h3 className="text-xl mb-2 bbb font-bold">Oh Yea</h3>
              <p className="font-serif">
                The name of this piece was initially called “A Day in May”. I
                know right, very Shakespearean. Well, it was indeed inspired by
                Shakespear. I always loved his plays.” shall I compare thee to a
                summers day, thou art more lovely and more temperate….” I heard
                that England had maybe one or two days in May that were
                absolutely gorgeous and the rest of the year was dreary and
                damp. I reflected on my situation here in the midwest, with its
                brutal winters contrasted by the beauty of spring. Oh yea!
                Spring is here!
              </p>
            </li>
            <li className="pt-4 pb-2 track">
              <h3 className="text-xl mb-2 bbb font-bold">
                Gabriel The Arch-Angel
              </h3>
              <p className="font-serif">
                Do you believe in angels? I do. I have met quite a few in my
                lifetime. They always seem to appear when I move to a new place
                or I am going through a really hard time, or sometimes they
                appear just to let me know I’m not as alone as I think I am. I’m
                not talking about celestial beings although I believe in them
                too. The angels I am talking about appear as human beings with
                the most beautiful souls. They come to assist and help. During
                this tumultuous time of uncertainty and fear, we need a guide, a
                protector, a friend, a guardian angel.
              </p>
            </li>
          </ol>
        </section>
      </div>
    </Layout>
  );
}

export default DiaryPage;
