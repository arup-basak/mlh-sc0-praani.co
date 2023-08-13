import { Dela_Gothic_One } from "next/font/google";
const font = Dela_Gothic_One({ subsets: ["latin"], weight: ["400"] });

export default function About() {
  const teamMembers = [
    {
      name: "Nikhil Mishra",
      imageSrc:
        "https://media.licdn.com/dms/image/D4D03AQF4VRL6noJfjQ/profile-displayphoto-shrink_400_400/0/1688460645499?e=1697673600&v=beta&t=dNCeMZN8JGBztAD3WWBCyd5E6m6avJFn4ZaEhIR5SUM",
      linkedInUrl: "https://www.linkedin.com/in/nikhil-mishra-8a6710244",
      twitterUrl: "https://twitter.com/nikkttws",
      githubUrl: "https://github.com/mnik7044",
    },
    {
      name: "Ekam Bitt",
      imageSrc:
        "https://media.licdn.com/dms/image/D5603AQG2qct-MYhlKA/profile-displayphoto-shrink_400_400/0/1685016960194?e=1697673600&v=beta&t=xOC95VjYowKhJbyDitkDFMqUTFHbYs5RKU270UbOxgs",
      linkedInUrl: "https://www.linkedin.com/in/ekam-bitt/",
      twitterUrl: "https://twitter.com/BittEkam",
      githubUrl: "https://github.com/Ekam-Bitt",
    },
    {
      name: "Soumi Guria",
      imageSrc:
        "https://media.licdn.com/dms/image/D4D03AQHLeH54uu3kww/profile-displayphoto-shrink_400_400/0/1668397157119?e=1697673600&v=beta&t=ssMU5MwwMJJHF-1-4GC7XFUeZzHDyCSeEqdMP8Lhx4A",
      linkedInUrl: "https://www.linkedin.com/in/soumi-guria-8882b224a/",
      twitterUrl: "https://twitter.com/guria_soumi",
      githubUrl: "https://github.com/soumiguria",
    },
    {
      name: "Rajdip Sinha",
      imageSrc:
        "https://media.licdn.com/dms/image/D4D03AQFnYroF-Qn2GA/profile-displayphoto-shrink_400_400/0/1681272880364?e=1697673600&v=beta&t=tEdUXLg36O2xfQ9qzBRfZwwYJ3A9OIg26s7taMyWQUs",
      linkedInUrl: "https://www.linkedin.com/in/rajdip-sinha-23789a220/",
      twitterUrl: "https://twitter.com/rajdips834",
      githubUrl: "https://github.com/rajdips834",
    },
    {
      name: "Arup Basak",
      imageSrc:
        "https://media.licdn.com/dms/image/D4D03AQEx_mhDFT-OXQ/profile-displayphoto-shrink_400_400/0/1664726834012?e=1697673600&v=beta&t=q8nTCFYePialBhjlmBn02gyAM0Fe-tM7AtrVOWJJDdg",
      linkedInUrl: "https://www.linkedin.com/in/basak-arup/",
      twitterUrl: "https://twitter.com/ArupBasak_",
      githubUrl: "https://github.com/arup-basak",
    },
  ];

  return (
    <div className=" bg-[#f07167]">
      <div className="text-center p-9">
        -----------------Meet the dream team-----------------
      </div>
      <div className="flex items-center justify-center h-10vh">
        <div className={`${font.className} p-4 pb-8 text-center text-7xl`}>
          Our Awesome Squad
        </div>
      </div>
      <div className="flex items-center justify-center max-w-screen-md mx-auto">
        Welcome to the world where creativity meets talent, and coffee becomes
        innovation. Meet our quirky, innovative, and unique team of five that
        turns ideas into awe-inspiring masterpieces.
      </div>

      <div>
        <div className="flex flex-wrap justify-between pb-4 mx-10 mt-6">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="w-[216px] flex flex-col items-center justify-center"
            >
              <div className=" w-[212px] h-[212px] shrink-0 rounded-full bg-black">
                <img
                  src={member.imageSrc}
                  alt=""
                  className="w-[212px] h-[212px] shrink-0 rounded-full"
                />
              </div>
              <p className="text-black py-[19px] text-2xl font-normal leading-normal font-family: Itim">
                {member.name}
              </p>
              <div className="w-[111px] h-[20px] flex items-center justify-between shrink-0">
                <a
                  href={member.linkedInUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/3128/3128219.png"
                    alt="LinkedIn"
                    className="h-[20px]"
                  />
                </a>
                <a
                  href={member.twitterUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/733/733635.png"
                    alt="Twitter"
                    className="h-[20px]"
                  />
                </a>
                <a
                  href={member.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/733/733609.png"
                    alt="Github"
                    className="h-[19px]"
                  />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}