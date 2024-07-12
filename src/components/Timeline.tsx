import { bebas } from "@/fonts";
import { Container } from "postcss";
import React, { useEffect, useState } from "react";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";

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
      <div className='pb-2'>
        <p>
          {" "}
          At HengHeng, I contribute to creating web pages for the retail
          industry and restaurants that interact with Telegram bots for payment
          and cart actions.
          <br />
          <br />
          My responsibilities include:
        </p>
        <ul className=' list-disc pl-5'>
          <li>
            Creating and maintaining responsive web interfaces using TypeScript
          </li>
          <li>
            Working on backend development to ensure functionality and
            performance.
          </li>
          <li>
            Implementing integrations with Telegram bots for payment processing
            and cart management using OpenAI API.
          </li>
          <li>
            Connecting web pages to Telegram users for tailored user
            experiences.
          </li>
        </ul>
      </div>
    ),
    skills: [
      "Next.js",
      "Typescript",
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
        deliverables.
        <br />
        <br />
        Created a captivating landing page to improve user engagement, developed
        a real-time chat component, utilized maps for location-based features,
        designed and implemented login and subscription forms for user
        authentication and data management, used cloud functions for email
        notifications, and implemented unit tests to ensure code quality and
        reliability.
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
    skills: [
      "Group Coordination",
      "Student Guidance and Support",
      "Process Improvement Suggestions",
    ],
  },
];

const TimelineCard = ({ item }: TimelineCardProps) => {
  return (
    <div className='group flex flex-col gap-y-2 min-w-full'>
      <div className='relative flex flex-row gap-x-4 items-center -ml-5'>
        <div
          id='dot'
          className=' top-10 -left-5 w-[15px] h-[15px] rounded-full bg-gradient-to-r from-indigo-700 to-indigo-800 border border-indigo-400 '
        ></div>
        <h1
          className={`${bebas.className}  -top-10 text-2xl`}
        >{`${item.initDate} - ${item.endDate}`}</h1>
      </div>

      <div className=' relative flex flex-col gap-6 p-4 shadow-lg backdrop-blur-md rounded-xl transition-all duration-700 overflow-hidden bg-gradient-to-r from-indigo-700/10 from-10% via-indigo-900/30 via-40% to-indigo-950/40 to-90% bg-grad border border-indigo-50 border-opacity-10 hover:border-opacity-25'>
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
                className='text-sm font-bold bg-indigo-950/30 rounded-2xl p-2 border border-indigo-400 border-opacity-70'
              >
                {skill}
              </li>
            );
          })}
        </ul>
        <div
          id='blur-title'
          className='absolute -left-20 -top-20 -z-10 w-[400px] h-[400px] rounded-full bg-indigo-400 blur-3xl bg-opacity-5 group-hover:bg-opacity-10 duration-700'
        ></div>
      </div>
    </div>
  );
};

const Timeline = () => {
  const [selectedTab, setSelectedTab] = useState<string>("work");
  const [isScrollable, setIsScrollable] = useState<boolean>(false);

  useEffect(() => {
    const container = document.querySelector("#items-container");

    const handleScroll = () => {
      if (container) {
        const isAtBottom =
          container.scrollHeight - container.scrollTop ===
          container.clientHeight;
        setIsScrollable(!isAtBottom);
      }
    };

    handleScroll();

    container?.addEventListener("scroll", handleScroll);

    return () => {
      container?.removeEventListener("scroll", handleScroll);
    };
  }, [selectedTab]);

  const tabOnClickHandler = (event: any) => {
    setSelectedTab(event.target.name);
  };

  return (
    <section className='relative flex flex-col md:flex-row gap-8 h-4/5 md:h-full z-10 overflow-visible'>
      <nav className=' top-1/2 -left-48 flex flex-row md:flex-col justify-center gap-4 font-bold'>
        <button
          onClick={tabOnClickHandler}
          name='edu'
          className={`${
            selectedTab === "edu"
              ? "bg-gradient-to-r from-indigo-800/40 to-indigo-900/40 bg-opacity-10"
              : "hover:drop-shadow-glow hover:shadow-2xl hover:border-opacity-25"
          }   grow md:grow-0 p-4 shadow-lg  border-white backdrop-blur-md border border-opacity-10  rounded-xl transition-all duration-200  bg-gray-700 bg-opacity-0`}
        >
          Education
        </button>
        <button
          onClick={tabOnClickHandler}
          name='work'
          className={`${
            selectedTab === "work"
              ? "bg-gradient-to-r from-indigo-800/60 to-indigo-900/60 bg-opacity-10"
              : "hover:drop-shadow-glow hover:shadow-2xl  hover:border-opacity-25"
          } grow md:grow-0 p-4 shadow-lg  border-white backdrop-blur-md border border-opacity-10  rounded-xl transition-all duration-200  bg-gray-700 bg-opacity-0`}
        >
          Work Experience
        </button>
      </nav>

      <div
        id='items-container'
        className='flex h-full w-fit overflow-y-scroll'
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

      <div
        className={`${
          isScrollable ? "inline" : "hidden"
        } absolute bottom-0 right-0 animate-bounce`}
      >
        <MdOutlineKeyboardDoubleArrowDown
          style={{ width: "30px", height: "30px" }}
        />
      </div>
    </section>
  );
};

export default Timeline;
