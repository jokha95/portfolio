import { FC } from "react";

interface SkillsProps {}

const Skills: FC<SkillsProps> = ({}) => {
  return (
    <div className="lg:min-h-[70vh] px-[5vw] py-[80px] flex flex-col items-center justify-center z-[4]">
      <h1
        data-scroll
        data-scroll-direction="horizontal"
        data-scroll-speed="-1"
        className="text-center text-3xl lg:text-4xl"
      >
        My skills & Knowledge
      </h1>
      <p
        data-scroll
        data-scroll-direction="horizontal"
        data-scroll-speed="1"
        className="description text-lg text-center my-[30px]"
      >
        Technologies and languages that I use to make my product everyday
      </p>

      <div className="grid justify-center grid-cols-4 md:grid-cols-4 gap-y-[10px] md:gap-y-[20px]">
        <a
          href="https://www.w3schools.com/html/"
          target="_blank"
          rel="noopener noreferrer"
          className="item flex flex-col items-center justify-around group"
        >
          <img
            className="w-[60px] h-[60px] transition duration-300 group-hover:scale-110"
            src="/html-flat.png"
            alt=""
          />
          <p className="text-center">HTML</p>
        </a>

        <a
          href="https://www.w3schools.com/css/default.asp"
          target="_blank"
          rel="noopener noreferrer"
          className="item flex flex-col items-center justify-around group"
        >
          <img
            className="w-[60px] h-[60px] transition duration-300 group-hover:scale-110"
            src="/css.png"
            alt=""
          />
          <p className="text-center">CSS</p>
        </a>
        <a
          href="https://www.w3schools.com/js/default.asp"
          target="_blank"
          rel="noopener noreferrer"
          className="item flex flex-col items-center justify-around group"
        >
          <img
            className="w-[60px] h-[60px] transition duration-300 group-hover:scale-110"
            src="/js.png"
            alt=""
          />
          <p className="text-center">JavaScript</p>
        </a>
        <a
          href="https://www.typescriptlang.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="item flex flex-col items-center justify-around group"
        >
          <img
            className="w-[60px] h-[60px] transition duration-300 group-hover:scale-110"
            src="/ts.png"
            alt=""
          />
          <p className="text-center">TypeScript</p>
        </a>

        <a
          href="https://nodejs.org/en/"
          target="_blank"
          rel="noopener noreferrer"
          className="item flex flex-col items-center justify-around group"
        >
          <img
            className="w-[60px] h-[60px] transition duration-300 group-hover:scale-110"
            src="/node.png"
            alt=""
          />
          <p className="text-center">Nodejs</p>
        </a>
        <a
          href="https://reactjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="item flex flex-col items-center justify-around group"
        >
          <img
            className="w-[60px] h-[60px] transition duration-300 group-hover:scale-110"
            src="/react.png"
            alt=""
          />
          <p className="text-center">React</p>
        </a>
        <a
          href="https://nextjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="item flex flex-col items-center justify-around group"
        >
          <img
            className="w-[60px] h-[60px] transition duration-300 group-hover:scale-110"
            src="/next.png"
            alt=""
          />
          <p className="text-center">Nextjs</p>
        </a>
        <a
          href="https://codesandbox.io/dashboard/home?workspace=860a43ec-317d-4ba2-89b7-b508df03001a"
          target="_blank"
          rel="noopener noreferrer"
          className="item flex flex-col items-center justify-around group"
        >
          <img
            className="w-[60px] h-[60px] transition duration-300 group-hover:scale-110"
            src="/codepen.png"
            alt=""
          />
          <p className="text-center">Codesandbox</p>
        </a>
      </div>
    </div>
  );
};

export default Skills;
