import { useSelector } from "react-redux/es/hooks/useSelector";
import { useState } from "react";

import GithubGrey from '@/assets/Github-grey.svg';
import GithubBlack from '@/assets/Github-black.svg';
import AngelistGrey from '@/assets/Angelist-grey.svg';
import AngelistBlack from '@/assets/Angelist-black.svg';
import LinkedInGrey from '@/assets/LinkedIn-grey.svg';
import LinkedInBlack from '@/assets/LinkedIn-black.svg';
import MediumGrey from '@/assets/Medium-grey.svg';
import MediumBlack from '@/assets/Medium-black.svg';
import TwitterXGrey from '@/assets/Twitter-X-white.svg';
import TwitterXBlack from '@/assets/Twitter-X-black.svg';

import DeathNoteImage from '@/assets/Death-note-L.jpg';

const Portfolio = ()=> {
  const { message } = useSelector((store) => store.greetings);

  const [githubSrc, setGithubSrc] = useState(GithubGrey);
  const [linkedInSrc, setLinkedInSrc] = useState(LinkedInGrey);
  const [angelistSrc, setAngelistSrc] = useState(AngelistGrey);
  const [xSrc, setXSrc] = useState(TwitterXGrey);
  const [mediumSrc, setMediumSrc] = useState(MediumGrey);

    return(
      <div>
        <div className="w-full bg-black2 pt-[165px] px-6">
          <h1 className="font-crete text-5xl text-orange2 ">
            {message} <br/>
            I'm Gabriel
          </h1>
          <h2 className="font-roboto text-xl text-white2 mt-2">I'm a Software Developer</h2>
          <h3 className="font-poppins text-base text-white mt-2 leading-6">I can help you building a feature, product or website, with my programming skills and my problem solving abilities.</h3>
          <div className="flex pt-4 pb-[165px]">
            <img
              className="w-7 p-[5px] object-contain"
              src={githubSrc}
              alt="Github Logo"
              onMouseEnter={() => setGithubSrc(GithubBlack)}
              onMouseLeave={() => setGithubSrc(GithubGrey)}
            />
            <img
              className="w-7 p-1 object-contain"
              src={linkedInSrc}
              alt="LinkedIn Logo"
              onMouseEnter={() => setLinkedInSrc(LinkedInBlack)}
              onMouseLeave={() => setLinkedInSrc(LinkedInGrey)}
            />
            <img
              className="w-7 p-1 object-contain"
              src={angelistSrc}
              alt="Angelist Logo"
              onMouseEnter={() => setAngelistSrc(AngelistBlack)}
              onMouseLeave={() => setAngelistSrc(AngelistGrey)}
            />
            <img
              className="w-7 object-contain"
              src={xSrc}
              alt="X Logo"
              onMouseEnter={() => setXSrc(TwitterXBlack)}
              onMouseLeave={() => setXSrc(TwitterXGrey)}
            />
            <img
              className="w-7 p-1 object-contain"
              src={mediumSrc}
              alt="Medium Logo"
              onMouseEnter={() => setMediumSrc(MediumBlack)}
              onMouseLeave={() => setMediumSrc(MediumGrey)}
            />
          </div>
          
        </div>
        <div className="w-[85%] mx-auto mt-[120px] mb-6">
          <h2 className="text-center font-crete text-4xl">
            My recent works
          </h2>
          <div className="mx-auto w-[85%] border-t border-black-400 mt-4 mb-8"></div>
          <div className="">
            <img src={DeathNoteImage} alt="projectImg"></img>
            <h2 className="text-3xl font-crete">Title</h2>
            <p className="text-base leading-6 font-inter">Description of the project that I have to make it long enough to explain all the features the project has</p>
            <ul className="flex flex-wrap justify-start gap-2 my-3">
              <li className="border px-2 py-1 inline-block font-inter">Tech 1</li>
              <li className="border px-2 py-1 inline-block font-inter">Tech 2</li>
              <li className="border px-2 py-1 inline-block font-inter">Tech 3</li>
              <li className="border px-2 py-1 inline-block font-inter">Tech 1</li>
              <li className="border px-2 py-1 inline-block font-inter">Tech 2</li>
              <li className="border px-2 py-1 inline-block font-inter">Tech 3</li>
            </ul>
            <button className="text-white bg-orange2 font-inter font-bold p-3">See project</button>
          </div>
        </div>
        <div className="relative flex flex-col w-[85%] mx-auto h-[386px] bg-[url('@/assets/Death-note-Kira-Misa.jpg')] bg-no-repeat bg-center bg-cover">
          <div className="absolute inset-0 h-[338px] bg-gradient-to-t from-black to-transparent opacity-50 hover:opacity-0 transition-opacity duration-200"></div>
          <h2 className="w-[90%] mx-auto text-3xl font-crete text-white mt-[72px]">Title</h2>
          <p className="w-[90%] mx-auto text-base font-inter text-white leading-6 bg-transparent hover:bg-black opacity-70 transition-opacity duration-200 transition-colors duration-200">Description of the project that I have to make it long enough to explain all the features the project has</p>
          <ul className="mt-auto mb-4 w-[90%] mx-auto flex flex-wrap justify-start gap-2">
            <li className="bg-black opacity-50 px-2 py-1 inline-block font-inter text-white hover:opacity-100 transition-opacity duration-200">Tech 1</li>
            <li className="bg-black opacity-50 px-2 py-1 inline-block font-inter text-white hover:opacity-100 transition-opacity duration-200">Tech 2</li>
            <li className="bg-black opacity-50 px-2 py-1 inline-block font-inter text-white hover:opacity-100 transition-opacity duration-200">Tech 3</li>
            <li className="bg-black opacity-50 px-2 py-1 inline-block font-inter text-white hover:opacity-100 transition-opacity duration-200">Tech 1</li>
            <li className="bg-black opacity-50 px-2 py-1 inline-block font-inter text-white hover:opacity-100 transition-opacity duration-200">Tech 2</li>
            <li className="bg-black opacity-50 px-2 py-1 inline-block font-inter text-white hover:opacity-100 transition-opacity duration-200">Tech 3</li>
          </ul>
          <button className="text-white bg-orange2 font-inter font-bold p-3">See project</button>
        </div>
      </div>
    );
  }
  
  export default Portfolio;