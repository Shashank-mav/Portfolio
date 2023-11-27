import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Cursor from "../components/Cursor";
import Header from "../components/Header";
import ProjectResume from "../components/ProjectResume";
import Socials from "../components/Socials";
import Button from "../components/Button";
import { useTheme } from "next-themes";
// Data
import { name, showResume } from "../data/portfolio.json";
import { resume } from "../data/portfolio.json";
import data from "../data/portfolio.json";

const Resume = () => {
  const router = useRouter();
  const theme = useTheme();
  const [mount, setMount] = useState(false);

  useEffect(() => {
    setMount(true);
    if (!showResume) {
      router.push("/");
    }
  }, []);
  const sampleCertificates = [
    {
      id: 1,
      date: " IES IPS, Indore",
      organization: "Udaan Hackathon 2023",
      description: "Led the winning team in the Udaan Hackathon 2023, showcasing our major project's excellence and innovative solutions.",
    },
    {
      id: 2,
      date: "Rakuten Group, Inc.",
      organization: "Rakathon 2023",
      description: "Actively contributed to Rakathon 2023, a 24-hour coding competition by Rakuten India, showcasing my prowess in Generative AI and commitment to fostering innovation.",
    },
    {
      id: 3,
      date: "IIT Bombay",
      organization: "C Training",
      description: "Actively participated in a comprehensive C programming language training program, gaining in-depth knowledge and practical implementation.",
    },
    {
      id: 4,
      date: "HackerRank",
      organization: "Java Certificate",
      description: "Earned a Java certification from HackerRank, demonstrating proficiency in the language through solving multiple problems and codes.",
    },
    {
      id: 5,
      date: "HackerRank",
      organization: "SQL Certificate",
      description: "Achieved a SQL certification from HackerRank, showcasing expertise in database management and query optimization through successful problem-solving.",
    },
  ];

  const sampleProjects = [
    {
      id: 1,
      name: "Review My SOP",
      company: "Globalizers",
      dates: "Feb 2023 - Aug 2023",

      details: [
        "Key member of the team responsible for the design and development of the web application 'Review My SOP' for Globalizers, a prominent company offering admission consulting services to international university-bound students.",
        "Implemented a sophisticated communication system that facilitated smooth interactions between students and writers, resulting in personalized and compelling Statements of Purpose (SOPs).",
        "Effectively communicated with writers to understand their requirements, ensuring seamless SOP creation.",
      ],
    },
    {
      id: 2,
      name: "JobsFit",
      company: "Your Company",
      dates: "Aug 2023 - Sept 2023",

      details: [
        "Integrated RapidAPI to ensure real-time job listings, providing users with up-to-date and accurate information.",
        "Designed an intuitive and user-friendly interface, enhancing user engagement and facilitating job discovery.",
        "Actively pursued continuous learning, acquiring essential React Native skills during the project's lifecycle.",
        "Successfully managed the entire project independently, from design to development, resulting in a well-rounded and polished React Native mobile job search application.",
      ],
    },
    {
      id: 3,
      name: "Shareingo.in",
      company: "Your Company",
      dates: "Dec 2022 - Feb 2023",

      details: [

        "Established secure peer-to-peer connections, enabling fast and efficient file transfers.",
        "Led the development of a web application that allowed users to share files directly with each other, without the need for centralized servers.",
        "Removed file size limitations, allowing users to transfer any file of any size, giving our application a competitive edge over its competitors.",
        "Enabled seamless file transfer in a single click, saving users an average of 6-7 minutes per transfer compared to traditional downloading methods. 60% faster file transfer speeds.",
      ],
    },
  ];


  return (
    <>
      {process.env.NODE_ENV === "development" && (
        <div className="fixed bottom-6 right-6">
          <Button onClick={() => router.push("/edit")} type={"primary"}>
            Edit Resume
          </Button>
        </div>
      )}
      {data.showCursor && <Cursor />}
      <div
        className={`container mx-auto mb-10 ${
          data.showCursor && "cursor-none"
        }`}
      >
        <Header isBlog />
        {mount && (
          <div className="mt-10 w-full flex flex-col items-center">
            <div
              className={`w-full ${
                mount && theme.theme === "dark" ? "bg-slate-800" : "bg-gray-50"
              } max-w-4xl p-20 mob:p-5 desktop:p-20 rounded-lg shadow-sm`}
            >
              <h1 className="text-3xl font-bold">{name}</h1>
              <h2 className="text-xl mt-5">{resume.tagline}</h2>
              <h2 className="w-4/5 text-xl mt-5 opacity-50">
                {resume.description}
              </h2>
              <div className="mt-2">
                <Socials />
              </div>
              <div className="mt-5">
                <h1 className="text-2xl font-bold">Experience</h1>

                {resume.experiences.map(
                  ({ id, dates, type, position, bullets }) => (
                    <ProjectResume
                      key={id}
                      dates={dates}
                      type={type}
                      position={position}
                      bullets={bullets}
                    ></ProjectResume>
                  )
                )}
              </div>
              <div className="mt-5">
                <h1 className="text-2xl font-bold">Education</h1>
                <div className="mt-2">
                  <h2 className="text-lg">{resume.education.universityName}</h2>
                  <h3 className="text-sm opacity-75">
                    {resume.education.universityDate}
                  </h3>
                  <p className="text-sm mt-2 opacity-50">
                    {resume.education.universityPara}
                  </p>
                </div>
              </div>


              <div className="mt-5">
              <h1 className="text-2xl font-bold">Projects</h1>
              {sampleProjects.map(({ id, name, company, dates, details }) => (
                <ProjectResume
                  key={id}
                  name={name}
                  company={company}
                  dates={dates}

                  bullets={details}
                />
              ))}
            </div>

              <div className="mt-5">
              <h1 className="text-2xl font-bold">Certificates</h1>
              {sampleCertificates.map(({ id, date, organization, description }) => (
                <div key={id} className="mt-2 mob:mt-5">
                  <h2 className="text-lg">{organization}</h2>
                  <h3 className="text-sm opacity-75">{date}</h3>
                  <p className="text-sm mt-2 opacity-50">{description}</p>
                </div>
              ))}
            </div>
              <div className="mt-5">
                <h1 className="text-2xl font-bold">Skills</h1>
                <div className="flex mob:flex-col desktop:flex-row justify-between">
                  {resume.languages && (
                    <div className="mt-2 mob:mt-5">
                      <h2 className="text-lg font-bold">Languages</h2>
                      <ul className="list-disc">
                        {resume.languages.map((language, index) => (
                          <li key={index} className="ml-5 py-2">
                            {language}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {resume.frameworks && (
                    <div className="mt-2 mob:mt-5">
                      <h2 className="text-lg font-bold">Frameworks</h2>
                      <ul className="list-disc">
                        {resume.frameworks.map((framework, index) => (
                          <li key={index} className="ml-5 py-2">
                            {framework}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {resume.others && (
                    <div className="mt-2 mob:mt-5">
                      <h2 className="text-lg font-bold">Others</h2>
                      <ul className="list-disc">
                        {resume.others.map((other, index) => (
                          <li key={index} className="ml-5 py-2">
                            {other}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Resume;
