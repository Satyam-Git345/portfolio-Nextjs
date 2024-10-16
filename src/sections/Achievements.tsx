import UniversityIcon from "@/assets/icons/university.svg";
import companyLogo from "@/assets/images/companylogo.jpeg";
import Image from "next/image";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import { Fragment } from "react";
const experience = [
  {
    title: "Bachelors Of Technology in Computer Science",
    subtitle:
      "B.Tech CSE @ Sagar Institute of Science and Technology  Bhopal Madhya Pradesh",
    duration: "Aug 2018 - July 2022 ",
    description:
      "Graduated in 2022 with an overall CGPA of 7.76 out of 10. Gained a strong foundation in core computer science subjects, including Data Structures, Algorithms, Operating Systems, Database Management Systems, and Object-Oriented Programming. ",
    icon: UniversityIcon,
  },
  {
    title: "Intern",
    subtitle: "Micro Technologies",
    duration: "Mar 2021 - Aug 2021",
    description:
      "Worked as a project intern and got hands on experience in various technologies that involves full stack development which included React.js for the front-end and Node.js for the backend. ",
    icon: companyLogo,
  },
  {
    title: "Software Engineer",
    subtitle: "Micro Technologies (Full Time)",
    duration: "Sept 2021 - Jan 2023",
    description:
      "Develop  user interfaces using React.js, adhering to best practices for state management.             •Successfully optimized the application’s performance, reducing load times and increasing overall efficiency, leading to positive feedback from users and stakeholders.",
    icon: companyLogo,
  },
  {
    title: "Software Engineer",
    subtitle: "NetProphets CyberWorks PVT. LTD. (Full Time) ",
    duration: "Jan 2023 - Present",
    description:
      "•Implement user interfaces and features based on design specifications and wireframes, adhering to best practices for mobile app development. •Integrate with backend services and API’S to fetch and update data, using asynchronous programming techniques and Restful API calls.",
    icon: companyLogo,
  },
];

export const AchievementsSection = () => {
  return (
    <section className="py-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="Education & Experience"
          title="What I Have Accomplished Till Now."
          description="This includes all the work experience I have till date including my education."
        />
        <div className="mt-12 lg:mt-24 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4 -my-4">
          <div className="flex flex-none gap-8 pr-8 animate-move-left [animation-duration:20s] hover:[animation-play-state:paused]">
            {[...new Array(2)].fill(0).map((_, idx) => (
              <Fragment key={idx}>
                {experience.map((exp, idx) => (
                  <Card
                    key={exp.title}
                    className="max-w-xs md:p-8 p-6 md:max-w-md hover:-rotate-3 transition duration-300"
                  >
                    <div className="flex gap-4 items-center">
                      {idx === 0 && (
                        <UniversityIcon className="max-h-full max-w-8 z-50" />
                      )}
                      {idx > 0 && (
                        <Image
                          src={exp.icon}
                          alt={exp.title}
                          className="max-h-full max-w-8"
                        />
                      )}

                      <div className="flex flex-col">
                        <div className="flex-none text-xs mb-2 font-extrabold tracking-widest bg-gradient-to-r from-emerald-500 to-sky-300 text-transparent bg-clip-text">
                          {exp.duration}
                        </div>
                        <div className="font-semibold">{exp.title}</div>
                        <div className="text-sm text-white/40 mt-2">
                          {exp.subtitle}
                        </div>
                      </div>
                    </div>
                    <p className="mt-4 md:mt-6 text-sm md:text-base">
                      {exp.description}
                    </p>
                  </Card>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
