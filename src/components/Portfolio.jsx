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

const Portfolio = ()=> {
  const { message } = useSelector((store) => store.greetings);

  const [githubSrc, setGithubSrc] = useState(GithubGrey);
  const [linkedInSrc, setLinkedInSrc] = useState(LinkedInGrey);
  const [angelistSrc, setAngelistSrc] = useState(AngelistGrey);
  const [xSrc, setXSrc] = useState(TwitterXGrey);
  const [mediumSrc, setMediumSrc] = useState(MediumGrey);

    return(
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
    );
  }
  
  export default Portfolio;