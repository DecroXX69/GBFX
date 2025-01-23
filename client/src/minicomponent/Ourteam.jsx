import React from 'react';
import { Twitter, Linkedin, Globe } from 'lucide-react';
import styles from './Ourteam.module.css';
import team1 from '../assets/team1.jpg';
import team2 from '../assets/team2.jpg';
import team3 from '../assets/team3.jpg';
import team4 from '../assets/team4.jpg';
import team5 from '../assets/team5.jpg';
import team6 from '../assets/team6.jpg';

const OurTeam = () => {
  const teamMembers = [
    {
      name: 'Olivia Quinn',
      role: 'Forex Trader',
      image: team1,
      socialLinks: {
        twitter: 'https://twitter.com',
        linkedin: 'https://linkedin.com',
        website: 'https://google.com',
      },
    },
    {
      name: 'Nathan Hayes',
      role: 'Consultant',
      image: team2,
      socialLinks: {
        twitter: 'https://twitter.com',
        linkedin: 'https://linkedin.com',
        website: 'https://google.com',
      },
    },
    {
      name: 'Ava Jensen',
      role: 'Trading Assistant',
      image: team3,
      socialLinks: {
        twitter: 'https://twitter.com',
        linkedin: 'https://linkedin.com',
        website: 'https://google.com',
      },
    },
    {
      name: 'Sophia Knight',
      role: 'President of Trade',
      image: team4,
      socialLinks: {
        twitter: 'https://twitter.com',
        linkedin: 'https://linkedin.com',
        website: 'https://google.com',
      },
    },
    {
      name: 'Ethan Brooks',
      role: 'Marketing Coordinator',
      image: team5,
      socialLinks: {
        twitter: 'https://twitter.com',
        linkedin: 'https://linkedin.com',
        website: 'https://google.com',
      },
    },
    {
      name: 'Aronic Kehan',
      role: 'Business Assistant',
      image: team6,
      socialLinks: {
        twitter: 'https://twitter.com',
        linkedin: 'https://linkedin.com',
        website: 'https://google.com',
      },
    },
  ];

  return (
    <div className={styles.ourTeam}>
      <h2 className={styles.title}>Our Talented Team Members</h2>
      <div className={styles.container}>
        <div className={styles.rowContainer}>
          {teamMembers.slice(0, 3).map((member, index) => (
            <TeamMemberCard key={index} member={member} />
          ))}
        </div>
        <div className={styles.rowContainer}>
          {teamMembers.slice(3).map((member, index) => (
            <TeamMemberCard key={index + 3} member={member} />
          ))}
        </div>
      </div>
    </div>
  );
};

const TeamMemberCard = ({ member }) => (
  <div className={styles.member}>
    <img 
      src={member.image} 
      alt={member.name} 
      className={styles.image}
    />
    <h3 className={styles.name}>{member.name}</h3>
    <p className={styles.role}>{member.role}</p>
    <div className={styles.socialLinks}>
      <a 
        href={member.socialLinks.twitter} 
        target="_blank" 
        rel="noopener noreferrer" 
        className={styles.socialLink}
      >
        <Twitter size={24} className={styles.socialIcon} />
      </a>
      <a 
        href={member.socialLinks.linkedin} 
        target="_blank" 
        rel="noopener noreferrer" 
        className={styles.socialLink}
      >
        <Linkedin size={24} className={styles.socialIcon} />
      </a>
      <a 
        href={member.socialLinks.website} 
        target="_blank" 
        rel="noopener noreferrer" 
        className={styles.socialLink}
      >
        <Globe size={24} className={styles.socialIcon} />
      </a>
    </div>
  </div>
);

export default OurTeam;