import { bebas } from "@/fonts";
import React, { MouseEventHandler, useState } from "react";
const glowSetting =
  "bg-transparent border border-white border-opacity- rounded-2xl drop-shadow-glow";

interface TimeLineItem {
  id: number;
  initDate: string;
  endDate: string;
  title: string;
  company: string;
  body: React.ReactNode;
  skills: string[];
}

interface TimelineCardProps {
  item: TimeLineItem;
}

const educationData: TimeLineItem[] = [
  {
    id: 2,
    initDate: "May 2024",
    endDate: "Present",
    title: "Introduction to Computer Science",
    company: "HarvardX",
    body: (
      <p>
        A broad and robust understanding of computer science and programming.
        Learn how to think algorithmically and solve programming problems
        efficiently. Concepts covered include abstraction, algorithms, data
        structures, encapsulation, resource management, security, software
        engineering, and web development.
      </p>
    ),
    skills: [
      "Algorithmic Thinking",
      "Abstraction",
      "Algorithms",
      "Data Structures",
      "Encapsulation",
      "Resource Management",
      "Security",
    ],
  },
  {
    id: 1,
    initDate: "Nov 2022",
    endDate: "Jun 2023",
    title: "Full Stack Developer Bootcamp",
    company: "SoyHenry",
    body: (
      <>
        <p>
          "Learned the fundamentals of web development with HTML, CSS, and
          JavaScript. Built back-end servers and managed databases using Node.js
          and Express.js. Created interactive Single Page Applications (SPAs)
          with React, focusing on optimizing performance and user experience
          through SEO and UX/UI best practices. +700 hours of hands-on
          theoretical-practical training.",
        </p>
      </>
    ),
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Node.js",
      "Express.js",
      "Postgres",
      "React",
      "Testing",
      "Redux",
    ],
  },
];

const workExperienceData: TimeLineItem[] = [
  {
    id: 3,
    initDate: "Jul 2024",
    endDate: "Present",
    title: "Full Stack Developer Jr.",
    company: "HengHeng Co.",
    body: (
      <div>
        <p></p>
        <ul>
          At HengHeng, I contribute to creating web pages for the retail
          industry and restaurants that interact with Telegram bots for payment
          and cart actions. My responsibilities include:
          <li>
            Creating and maintaining responsive web interfaces using TypeScript
          </li>
          <li>
            Working on backend development to ensure functionality and
            performance
          </li>
          <li>
            Implementing integrations with Telegram bots for payment processing
            and cart management
          </li>
          <li>
            Connecting web pages to Telegram users for tailored user experiences
          </li>
        </ul>
      </div>
    ),
    skills: [
      "Next.js",
      "Tailwind",
      "Redux",
      "Python",
      "Django",
      "OpenAI API",
      "Telegram bots",
    ],
  },
  {
    id: 2,
    initDate: "Sep 2023",
    endDate: "Jun 2024",
    title: "Software Engineer Jr.",
    company: "Ntice Co.",
    body: (
      <p>
        Worked on front-end, back-end, and database tasks, collaborating closely
        with a senior developer to ensure timely completion and high-quality
        deliverables. Created a captivating landing page to improve user
        engagement, developed a real-time chat component, utilized maps for
        location-based features, designed and implemented login and subscription
        forms for user authentication and data management, used cloud functions
        for email notifications, and implemented unit tests to ensure code
        quality and reliability.
      </p>
    ),
    skills: [
      "React",
      "Express",
      "Postgresql",
      "NodeJs",
      "Sass",
      "Mobx",
      "Twilio Conversations",
      "Mapbox GL",
      "Rest API",
      "Docker",
      "Figma",
      "AWS Lambda",
      "SendGrid",
    ],
  },
  {
    id: 1,
    initDate: "Jul 2023",
    endDate: "Dec 2023",
    title: "Teaching Assistant",
    company: "Henry Full Stack Bootcamp",
    body: (
      <p>
        Empower new students, guiding them in mastering dynamic front-end and
        back- end technologies.
      </p>
    ),
    skills: [],
  },
];

const TimelineCard = ({ item }: TimelineCardProps) => {
  return (
    <div className='flex flex-col gap-y-2'>
      <div className='relative flex flex-row gap-x-4 items-center -ml-5'>
        <div
          id='dot'
          className=' top-10 -left-5 w-[15px] h-[15px] rounded-full bg-indigo-700 bg-opacity-90 border border-indigo-500 border-opacity-80'
        ></div>
        <h1
          className={`${bebas.className}  -top-10 text-2xl`}
        >{`${item.initDate} - ${item.endDate}`}</h1>
      </div>

      <div className='group w-5/6 relative flex flex-col gap-6 p-4 shadow-lg bg-gray-700 bg-opacity-10 hover:bg-opacity-30 border-white backdrop-blur-md border border-opacity-10 rounded-xl transition-all duration-700 overflow-hidden'>
        <h2 className=' font-bold text-lg'>
          {item.title} <br />{" "}
          <span className='text-sm'> at {item.company}</span>
        </h2>

        <div className=''>{item.body}</div>

        <ul className='flex flex-row flex-wrap gap-4'>
          {item.skills.map((skill: string) => {
            return (
              <li
                key={"skillItem_" + skill + item.id}
                className='text-sm font-bold text-indigo-100 bg-indigo-600 rounded-2xl p-2 bg-opacity-70 border border-indigo-500 border-opacity-30'
              >
                {skill}
              </li>
            );
          })}
        </ul>
        <div className='absolute -left-10 -top-10 -z-10 w-[300px] h-[300px] rounded-full bg-indigo-700 blur-3xl bg-opacity-30 mix-blend-multiply'></div>
      </div>
    </div>
  );
};

const Timeline = () => {
  const [selectedTab, setSelectedTab] = useState<string>("");

  const tabOnClick = (event: any) => {
    setSelectedTab(event.target.name);
  };

  return (
    <section className='flex flex-col gap-8 h-full'>
      <nav className='flex flex-row w-full justify-evenly font-bold'>
        <button
          onClick={tabOnClick}
          name='edu'
          className='hover:drop-shadow-glow hover:shadow-2xl p-4 shadow-lg bg-opacity-20 border-white backdrop-blur-md border border-opacity-10 hover:border-opacity-20 rounded-xl transition-all duration-200'
        >
          Education
        </button>
        <button
          onClick={tabOnClick}
          name='work'
          className='hover:drop-shadow-glow hover:shadow-2xl p-4 shadow-lg bg-opacity-20 border-white backdrop-blur-md border border-opacity-10 hover:border-opacity-20 rounded-xl transition-all duration-200'
        >
          Work Experience
        </button>
      </nav>

      <div
        className='h-full w-full overflow-y-auto'
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        <div className='flex flex-col gap-6 ml-7 '>
          {selectedTab === "edu"
            ? educationData.map((element) => {
                return (
                  <TimelineCard
                    key={"educationItem_" + element.id}
                    item={element}
                  />
                );
              })
            : workExperienceData.map((element) => {
                return (
                  <TimelineCard key={"workItem_" + element.id} item={element} />
                );
              })}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
