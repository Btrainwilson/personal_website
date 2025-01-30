import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaBluesky } from "react-icons/fa6";
import { GrPersonalComputer } from "react-icons/gr";


interface SocialIconsProps {
  githubUrl: string;
  blueskyUrl: string;
  linkedinUrl: string;
  websiteUrl: string;
}

const SocialIcons: React.FC<SocialIconsProps> = ({ githubUrl, blueskyUrl, linkedinUrl, websiteUrl }) => {
  return (
    <div style={styles.container}>
      <a href={websiteUrl} target="_blank" rel="noopener noreferrer" style={styles.icon}>
        <GrPersonalComputer size={30} />
      </a>
      <a href={githubUrl} target="_blank" rel="noopener noreferrer" style={styles.icon}>
        <FaGithub size={30} />
      </a>
      <a href={blueskyUrl} target="_blank" rel="noopener noreferrer" style={styles.icon}>
        <FaBluesky size={30} />
      </a>
      <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" style={styles.icon}>
        <FaLinkedin size={30} />
      </a>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    gap: "10px",
    justifyContent: "center",
    marginTop: "20px",
  },
  icon: {
    textDecoration: "none",
    color: "black",
    transition: "color 0.3s",
  },
};

export default SocialIcons;
