import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import PropTypes from 'prop-types';

import { setPopup } from "../redux/popup/popupSlice";

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

import githubwhite from '@/assets/githubwhite.svg';
import seelive from '@/assets/seelive.svg';

import xmenu from '@/assets/x-button.svg'
import xmenuhover from '@/assets/x-button2.svg'

import Rec1 from '@/assets/Rectangle55.svg';
import Rec2 from '@/assets/Rectangle56.svg';
import Rec3 from '@/assets/Rectangle57.svg';

import DeathNoteImage from '@/assets/Death-note-L.jpg';
// import kiramisa from '@/assets/Death-note-Kira-Misa.jpg';

const Portfolio = ()=> {
  const dispatch = useDispatch();
  const popupstate = useSelector((store) => store.popup);

  const [githubSrc, setGithubSrc] = useState(GithubGrey);
  const [linkedInSrc, setLinkedInSrc] = useState(LinkedInGrey);
  const [angelistSrc, setAngelistSrc] = useState(AngelistGrey);
  const [xSrc, setXSrc] = useState(TwitterXGrey);
  const [mediumSrc, setMediumSrc] = useState(MediumGrey);

  const [githubSrc2, setGithubSrc2] = useState(GithubBlack);
  const [linkedInSrc2, setLinkedInSrc2] = useState(LinkedInBlack);
  const [angelistSrc2, setAngelistSrc2] = useState(AngelistBlack);
  const [xSrc2, setXSrc2] = useState(TwitterXBlack);
  const [mediumSrc2, setMediumSrc2] = useState(MediumBlack);

  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    user_message: '',
  });

  const [xMenu, setXMenu] = useState(xmenu);

  const [errorMessage, setErrorMessage] = useState('');
  const [submited, setSubmited] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    formData.user_name = formData.user_name.trim();
    formData.user_email = formData.user_email.trim();
    formData.user_message = formData.user_message.trim();
    if (Object.values(formData).some((value) => value === '')) {
      setErrorMessage('Fields cannot be blank or full of spaces');
      return;
    }

    setErrorMessage('');
    try {
      const response = await fetch('https://formspree.io/f/xzbqjzwo', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Form submission failed');
      }

      console.log('Form submitted:', formData);
      setSubmited(true);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const ProjectCont = ({ title, description, imgurl, techs }) => {
    return (
      <>
        <div className="absolute inset-0 h-[338px] bg-gradient-to-t from-black to-transparent opacity-50 hover:opacity-0 transition-opacity duration-200"></div>
        <h2 className="w-[90%] mx-auto text-3xl font-crete text-white mt-[72px]">{title}</h2>
        <p className="w-[90%] mx-auto text-base font-inter text-white leading-6 bg-transparent hover:bg-black opacity-70 transition-opacity duration-200 transition-colors duration-200">{description}</p>
        <ul className="mt-auto mb-4 w-[90%] mx-auto flex flex-wrap justify-start gap-2">
          {techs.map((tech, index) => (
            <li key={index} className="bg-black opacity-50 px-2 py-1 inline-block font-inter text-white hover:opacity-100 transition-opacity duration-200">
              {tech}
            </li>
          ))}
        </ul>
        <button className="text-white bg-orange2 font-inter font-bold p-3" onClick={() => dispatch(setPopup({ 
          title: title,
          description: description,
          imgurl: imgurl,
          techs: techs
        }))}>See project</button>
      </>
    );
  };

  ProjectCont.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    techs: PropTypes.arrayOf(PropTypes.string).isRequired,
  };

  const AboutSection = ({ figure, category, atributes}) => {
    return (
      <div className="flex flex-col items-center">
        <div className="flex justify-center pr-[8%] my-2">
          <img src={figure} alt="O0" className="object-contain w-5 mx-3"></img>
          <h2 className="font-bold text-white font-roboto text-3xl">{category}</h2>
        </div>
        {atributes.map((atribute, index) => (
          <h3 key={index} className="font-inter text-[22px] text-white my-1 leading-9">{atribute}</h3>
        ))}
      </div>
    );
  };

  AboutSection.propTypes = {
    figure: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    atributes: PropTypes.arrayOf(PropTypes.string).isRequired,
  };

  return(
    <div>
      { popupstate.isopen &&
        (
          <div className='z-50 top-0 right-0 fixed w-full bg-transparent backdrop-blur'>
            <div className="bg-white my-12 mx-4 h-3/4">
              <div className="px-4 py-2">
                <div className="flex flex-col">
                  <div className="flex justify-between mb-8 md:mb-2">
                    <h2 className="font-roboto font-bold text-3xl">{popupstate.title}</h2>
                    <img
                      className="w-11 p-3 object-contain"
                      src={xMenu}
                      alt="Github Logo"
                      onMouseEnter={() => setXMenu(xmenu) }
                      onMouseLeave={() => setXMenu(xmenuhover) }
                      onClick={()=> dispatch(setPopup())}
                    ></img>
                  </div>
                  
                  <ul className="mb-4 w-full mx-auto flex flex-wrap justify-start gap-2">
                  {popupstate.techs.map((tech, index) => (
                    <li key={index} className="bg-white px-2 py-1 inline-block font-inter text-black border-2 border-[#979493]">
                      {tech}
                    </li>
                  ))}
                  </ul>
                  <div className="flex flex-col md:flex-row">
                    <img src={popupstate.imgurl} alt="coverimg" className="max-w-[400px] object-cover md:w-2/3 md:max-w-[800px] mb-3 md:mr-4"></img>
                    <div className="">
                      <p>{popupstate.description}</p>
                      <div className="flex justify-between flex-wrap">
                        <button className="flex pl-4 text-white bg-orange2 font-inter font-bold py-3 mb-4 mt-4 w-[130px]">
                          See live
                          <img src={seelive} alt="liveicon" className="ml-2"></img>
                        </button>
                        <button className="flex pl-4 text-white bg-orange2 font-inter font-bold p-3 mb-4 mt-4 w-[155px]">
                          See source
                          <img src={githubwhite} alt="liveicon" className="ml-4 my-auto"></img>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      }
      <div id="top-section" 
        className="flex flex-col md:flex-row min-h-[700px] w-full pt-[165px] px-[8%] 
        bg-black bg-no-repeat bg-[url(@/assets/OrangeFalcon.png)] 
        bg-[right_9%_top_470px] bg-[length:200px_200px]
        sm:bg-[length:300px_300px] sm:bg-[right_1%_top_370px]
        md:bg-[length:400px_400px] md:bg-[right_1%_top_270px]
        lg:bg-[length:700px_700px] lg:bg-[right_-6%_top_40px]
        xl:bg-[length:800px_800px] xl:bg-[right_6%_top_40px]"
        >
        <div className="flex flex-col">
        <h1 className="font-crete text-5xl text-orange2 ">
          Hi there~ <br/>
          I&apos;m Gabriel
        </h1>
        <h2 className="font-roboto text-xl text-white2 mt-2">I&apos;m a Software Developer</h2>
        <h3 className="font-poppins text-base text-white mt-2 leading-6 max-w-[320px] md:pb-[505px]">I can help you building a feature, product or website, with my programming skills and my problem solving abilities.</h3>
        </div>
        <div className="flex pt-4 pb-[165px] order-last md:order-first md:flex-col md:ml-[-6%] md:mr-[4%] md:mt-4">
          <a
            className="flex"
            href="https://github.com/EmiLoKiJu"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="w-7 p-[5px] object-contain md:my-2"
              src={githubSrc}
              alt="Github Logo"
              onMouseEnter={() => setGithubSrc(GithubBlack)}
              onMouseLeave={() => setGithubSrc(GithubGrey)}
            />
          </a>
          <a
            className="flex"
            href="https://www.linkedin.com/in/grozas/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="w-7 p-1 object-contain md:my-2"
              src={linkedInSrc}
              alt="LinkedIn Logo"
              onMouseEnter={() => setLinkedInSrc(LinkedInBlack)}
              onMouseLeave={() => setLinkedInSrc(LinkedInGrey)}
            />
          </a>
          <a
            className="flex"
            href="https://wellfound.com/u/gabriel-rozas"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="w-7 p-1 object-contain md:my-2"
              src={angelistSrc}
              alt="Angelist Logo"
              onMouseEnter={() => setAngelistSrc(AngelistBlack)}
              onMouseLeave={() => setAngelistSrc(AngelistGrey)}
            />
          </a>
          <a
            className="flex"
            href="https://twitter.com/GabrielRozas12"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="w-7 object-contain md:my-2"
              src={xSrc}
              alt="X Logo"
              onMouseEnter={() => setXSrc(TwitterXBlack)}
              onMouseLeave={() => setXSrc(TwitterXGrey)}
            />
          </a>
          <a
            className="flex"
            href="https://medium.com/@gabrielrozas1996"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="w-7 p-1 object-contain md:my-2"
              src={mediumSrc}
              alt="Medium Logo"
              onMouseEnter={() => setMediumSrc(MediumBlack)}
              onMouseLeave={() => setMediumSrc(MediumGrey)}
            />
          </a>
        </div>
      </div>
      <div id="projects-section" className="w-[85%] mx-auto pt-[80px] mb-6">
        <div className="flex flex-col md:flex-row md:w-full md:justify-between">
          <h2 className="text-center font-crete text-4xl">
            My recent works
          </h2>
          <div className="border-t-2 border-black-400 md:flex-1 md:ml-6 md:my-auto"></div>
        </div>
        
        <div className="flex flex-col md:flex-row mt-12">
          <img className="max-w-[680px] object-cover md:w-2/3" src={DeathNoteImage} alt="projectImg"></img>
          <div className="flex flex-col mx-6">
            <h2 className="text-3xl font-crete">Title of the main project</h2>
            <p className="text-base leading-6 font-inter">Description of the project that I have to make it long enough to explain all the features the project has</p>
            <ul className="flex flex-wrap justify-start gap-2 my-3">
              <li className="border px-2 py-1 inline-block font-inter">Tech 1</li>
              <li className="border px-2 py-1 inline-block font-inter">Tech 2</li>
              <li className="border px-2 py-1 inline-block font-inter">Tech 3</li>
              <li className="border px-2 py-1 inline-block font-inter">Tech 1</li>
              <li className="border px-2 py-1 inline-block font-inter">Tech 2</li>
              <li className="border px-2 py-1 inline-block font-inter">Tech 3</li>
            </ul>
            <button className="text-white bg-orange2 font-inter font-bold p-3" onClick={() => dispatch(setPopup({ 
              title: 'title of the main project',
              description: 'Description of the project that I have to make it long enough to explain all the features the project has',
              imgurl: DeathNoteImage,
              techs: ['tech1', 'tech2']
            }))}>See project</button>
          </div>
          
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-[85%] mx-auto">
        <div className="relative flex flex-col h-[386px] bg-[url('@/assets/Death-note-Kira-Misa.jpg')] bg-no-repeat bg-center bg-cover">
          <ProjectCont 
            title={'titulo1'} 
            description={'description1 is very long and I will have to make it long so the first element shows a lot of content description1 is very long and I will have to make it long so the first element shows a lot of content '} 
            imgurl={'./src/assets/Death-note-Kira-Misa.jpg'}
            techs={['tech1', 'tech2']} 
          />
        </div>
        <div className="relative flex flex-col h-[386px] bg-[url('@/assets/Death-note-L.jpg')] bg-no-repeat bg-center bg-cover">
          <ProjectCont 
            title={'titulo3 y que paza'} 
            description={'description1 is very long'}
            imgurl={'./src/assets/Death-note-Kira-Misa.jpg'}
            techs={['tech1', 'tech2', 'tech3', 'tech4']} 
          />
        </div>
        <div className="relative flex flex-col h-[386px] bg-[url('@/assets/Death-note-L.jpg')] bg-no-repeat bg-center bg-cover">
          <ProjectCont 
            title={'titulo4'} 
            description={'description1 is very long and is for testinf diferent texts'}
            imgurl={'./src/assets/Death-note-Kira-Misa.jpg'}
            techs={['tech1', 'tech2', 'tech3', 'tech4', 'tech3', 'tech4']} 
          />
        </div>
        <div className="relative flex flex-col h-[386px] bg-[url('@/assets/Death-note-L.jpg')] bg-no-repeat bg-center bg-cover">
          <ProjectCont 
            title={'titulo2 en el numero 4'} 
            description={'description1 is very long'}
            imgurl={'./src/assets/Death-note-Kira-Misa.jpg'}
            techs={['tech1', 'tech2', 'tech3', 'tech4']} 
          />
        </div>
        <div className="relative flex flex-col h-[386px] bg-[url('@/assets/Death-note-L.jpg')] bg-no-repeat bg-center bg-cover">
          <ProjectCont 
            title={'titulo1'} 
            description={'description1 is very long'}
            imgurl={'./src/assets/Death-note-Kira-Misa.jpg'}
            techs={['tech1', 'tech2', 'tech3', 'tech4']} 
          />
        </div>
        <div className="relative flex flex-col h-[386px] bg-[url('@/assets/Death-note-L.jpg')] bg-no-repeat bg-center bg-cover">
          <ProjectCont 
            title={'titulo1'} 
            description={'description1 is very long'}
            imgurl={'./src/assets/Death-note-Kira-Misa.jpg'}
            techs={['tech1', 'tech2', 'tech3', 'tech4']} 
          />
        </div>
      </div>
      
      <div id="about-me-section" className="
        flex flex-col w-full bg-black2 mt-[120px] pt-[120px] px-[8%] h-[720px] 
        bg-no-repeat bg-[url(@/assets/OrangeFalcon.png)] 
        bg-[right_-10px_top_470px] bg-[length:200px_200px]
        sm:bg-[length:300px_300px] sm:bg-[right_1%_top_370px]
        md:bg-[length:400px_400px] md:bg-[right_1%_top_270px]
        lg:bg-[length:700px_700px] lg:bg-[right_-6%_top_0px]">
        <h1 className="font-crete text-5xl text-orange2 ">
          About me
        </h1>
        <p className="text-base leading-6 font-inter text-white my-6 max-w-[300px]">This is the about me description. It should say something interesting about me to make recruiters more interested. I need to make sure it is not so descriptive but with the escencial atributes of myself.</p>
        <button className="text-white bg-orange2 font-inter font-bold p-3 mb-[260px] mt-auto w-[180px]">Get my resume</button>
        <div className="border-t border-white-400 mb-16"></div>
      </div>
      <div className="flex flex-col w-full bg-black2 pt-[60px] px-[8%] h-[920px] lg:h-[520px]">
        <div className="flex flex-col justify-center items-center lg:flex-row lg:justify-around lg:mt-12">
          <AboutSection figure={Rec1} category={'Languages'} atributes={['Javascript', 'HTML', 'Tailwind CSS', 'Ruby']} />
          <AboutSection figure={Rec2} category={'Frameworks'} atributes={['React.js', 'Ruby on Rails', 'RSpec', 'Capybara']} />
          <AboutSection figure={Rec3} category={'Skills'} atributes={['Database management', 'Version control', 'API design', 'Web development']} />
        </div>
      </div>
      <div className="px-[8%] pt-16 md:pt-24">
        <div className="flex flex-col md:flex-row">
          <h2 className="max-w-[600px] text-center font-inter text-3xl font-bold"> I&apos;m always interested in hearing about new projects. If you&apos;d like to talk about new project oportunities, please feel free to reach out so we can connect</h2>
          {submited ? 
          (
            <div className="roboto text-2xl text-center my-8">Thank you for your time!</div>
          ) 
          : 
          (
            <div className="w-full px-[8%] mt-16 md:mt-0 md:px-8">
              <form id="contact-me-section" onSubmit={handleSubmit} className="flex flex-col" method="post">
                <input
                  className="pl-4 mt-16 font-inter md:mt-0"
                  type="text"
                  id="name"
                  name="user_name"
                  placeholder="Full name"
                  value={formData.user_name}
                  onChange={handleChange}
                />
                <div className="border-t border-black-400 mt-4 mb-8"></div>
                <input
                  className="pl-4 font-inter"
                  id="mail"
                  name="user_email"
                  placeholder="Email address"
                  value={formData.user_email}
                  onChange={handleChange}
                />
                <small></small>
                <div className="border-t border-black-400 mt-4 mb-8"></div>
                <textarea
                  className="pl-4 font-inter"
                  id="msg"
                  name="user_message"
                  placeholder="Write me something..."
                  value={formData.user_message}
                  onChange={handleChange}
                ></textarea>
                {errorMessage && <p className="text-red-500 font-inter pl-4">{errorMessage}</p>}
                <button className="mx-auto text-white bg-orange2 font-inter font-bold p-3 mb-[70px] mt-8 w-[160px] md:mx-0" type="submit">
                  Get in touch
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
      <div className="mx-auto flex justify-center pt-4 pb-[115px]">
        <a
          className="flex"
          href="https://github.com/EmiLoKiJu"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="w-7 p-[5px] object-contain m-2"
            src={githubSrc2}
            alt="Github Logo"
            onMouseEnter={() => setGithubSrc2(GithubGrey)}
            onMouseLeave={() => setGithubSrc2(GithubBlack)}
          />
        </a>
        <a
          className="flex"
          href="https://www.linkedin.com/in/grozas/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="w-7 p-1 object-contain m-2"
            src={linkedInSrc2}
            alt="LinkedIn Logo"
            onMouseEnter={() => setLinkedInSrc2(LinkedInGrey)}
            onMouseLeave={() => setLinkedInSrc2(LinkedInBlack)}
          />
        </a>
        <a
          className="flex"
          href="https://wellfound.com/u/gabriel-rozas"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="w-7 p-1 object-contain m-2"
            src={angelistSrc2}
            alt="Angelist Logo"
            onMouseEnter={() => setAngelistSrc2(AngelistGrey)}
            onMouseLeave={() => setAngelistSrc2(AngelistBlack)}
          />
        </a>
        <a
          className="flex"
          href="https://twitter.com/GabrielRozas12"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="w-7 object-contain m-2"
            src={xSrc2}
            alt="X Logo"
            onMouseEnter={() => setXSrc2(TwitterXGrey)}
            onMouseLeave={() => setXSrc2(TwitterXBlack)}
          />
        </a>
        <a
          className="flex"
          href="https://medium.com/@gabrielrozas1996"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="w-7 p-1 object-contain m-2"
            src={mediumSrc2}
            alt="Medium Logo"
            onMouseEnter={() => setMediumSrc2(MediumGrey)}
            onMouseLeave={() => setMediumSrc2(MediumBlack)}
          />
        </a>
      </div>
    </div>
  );
}

export default Portfolio;