import React from 'react';
import Image from 'next/image';
import { Abril_Fatface } from "next/font/google";
import arup_basak_img from 'public/arup_basak.jpeg'
import ekam_bitt_img from 'public/ekam_bitt.jpeg'
import nikhil_misra_img from 'public/nikhil_misra.jpeg'
import rajdip_sinha_img from 'public/rajdip_sinha.jpeg'
import soumi_guria_img from 'public/soumi_guria.jpeg'

const font = Abril_Fatface({ subsets: ["latin"], weight: ["400"] })

const About = () => {
  const teamMembers = [
    {
      name: "Nikhil Mishra",
      imageSrc: nikhil_misra_img,
      linkedInUrl: "https://www.linkedin.com/in/nikhil-mishra-8a6710244",
      twitterUrl: "https://twitter.com/nikkttws",
      githubUrl: "https://github.com/mnik7044",
    },
    {
      name: "Ekam Bitt",
      imageSrc: ekam_bitt_img,
      linkedInUrl: "https://www.linkedin.com/in/ekam-bitt/",
      twitterUrl: "https://twitter.com/BittEkam",
      githubUrl: "https://github.com/Ekam-Bitt",
    },
    {
      name: "Soumi Guria",
      imageSrc: soumi_guria_img,
      linkedInUrl: "https://www.linkedin.com/in/soumi-guria-8882b224a/",
      twitterUrl: "https://twitter.com/guria_soumi",
      githubUrl: "https://github.com/soumiguria",
    },
    {
      name: "Rajdip Sinha",
      imageSrc: rajdip_sinha_img,
      linkedInUrl: "https://www.linkedin.com/in/rajdip-sinha-23789a220/",
      twitterUrl: "https://twitter.com/rajdips834",
      githubUrl: "https://github.com/rajdips834",
    },
    {
      name: "Arup Basak",
      imageSrc: arup_basak_img, 
      linkedInUrl: "https://www.linkedin.com/in/basak-arup/",
      twitterUrl: "https://twitter.com/ArupBasak_",
      githubUrl: "https://github.com/arup-basak",
    },
  ];

  return (
    <div className="bg-[#f07167] py-10">
      <div className="text-center p-9">
        -----------------Meet the dream team-----------------
      </div>
      <div className="flex items-center justify-center h-10vh">
        <div className={`${font.className} p-4 pb-8 text-center text-7xl`}>
          Our Awesome Squad
        </div>
      </div>
      <div className="flex items-center justify-center max-w-screen-md mx-auto">
        Welcome to the world where creativity meets talent, and coffee becomes innovation. Meet our quirky, innovative, and unique team of five that turns ideas into awe-inspiring masterpieces.
      </div>
      <div>
        <div className="flex flex-wrap justify-between pb-4 mx-10 mt-6">
          {teamMembers.map((member, index) => (
            <div key={index} className="w-[216px] flex flex-col items-center justify-center">
              <div className="w-[212px] h-[212px] shrink-0 rounded-full bg-black">
                <Image
                  src={member.imageSrc}
                  alt=""
                  className="w-[212px] h-[212px] shrink-0 rounded-full"
                />
              </div>
              <p className="text-black py-[19px] text-2xl font-normal leading-normal font-family: Itim">
                {member.name}
              </p>
              <div className="w-[111px] h-[20px] flex items-center justify-between shrink-0">
                <a href={member.linkedInUrl} target="_blank" rel="noopener noreferrer">
                  {/* LinkedIn icon */}
                </a>
                <a href={member.twitterUrl} target="_blank" rel="noopener noreferrer">
                  {/* Twitter icon */}
                </a>
                <a href={member.githubUrl} target="_blank" rel="noopener noreferrer">
                  {/* Github icon */}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
