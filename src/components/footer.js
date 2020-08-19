import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import {
  RiFacebookCircleLine,
  RiInstagramLine,
  RiSoundcloudLine,
  RiYoutubeLine,
} from "react-icons/ri";

function Footer() {
  const { site } = useStaticQuery(graphql`
    query SiteSocialQuery {
      site {
        siteMetadata {
          facebook
          instagram
          soundcloud
          youtube
        }
      }
    }
  `);

  return (
    <footer className="bg-gray-700 p-10">
      <ul className="flex justify-center text-white text-3xl">
        <li className="p-6 hover:text-yellow-400">
          <a href={site.siteMetadata.facebook} target="_blank" rel="noreferrer">
            <RiFacebookCircleLine />
          </a>
        </li>
        <li className="p-6 hover:text-yellow-400">
          <a
            href={site.siteMetadata.instagram}
            target="_blank"
            rel="noreferrer"
          >
            <RiInstagramLine />
          </a>
        </li>
        <li className="p-6 hover:text-yellow-400">
          <a
            href={site.siteMetadata.soundcloud}
            target="_blank"
            rel="noreferrer"
          >
            <RiSoundcloudLine />
          </a>
        </li>
        <li className="p-6 hover:text-yellow-400">
          <a href={site.siteMetadata.youtube} target="_blank" rel="noreferrer">
            <RiYoutubeLine />
          </a>
        </li>
      </ul>
    </footer>
  );
}
export default Footer;
