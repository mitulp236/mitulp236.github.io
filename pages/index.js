import Head from 'next/head'

import siteMetadata from '../data/siteMetadata.json'
import TechIcon from '../components/tech-icons'
import SocialIcon from '../components/social-icons'

const TECH_ICON_SIZE = 8

export default function Home() {
  return (
    <div>
      <Head>
        <title>Mitul Patel</title>
        <meta name="Freelance developer" content=" A best developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <div className="divide-y">
            {/* <div className="pt-6 pb-8 space-y-2 md:space-y-5">
              <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
                About
              </h1>
            </div> */}
            <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
              <div className="flex flex-col items-center pt-8 space-x-2">
                <img src={siteMetadata.image} alt="avatar" className="w-48 h-48 rounded-full transition duration-500 ease-in-out hover:transform hover:-translate-y-1 hover:scale-110" />
                <h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">
                  {siteMetadata.author}
                </h3>
                <div className="text-gray-500 dark:text-gray-400">A software geek</div>
                <div className="text-gray-500 dark:text-gray-400">who loves to build modern projects</div>
                <div className="flex pt-6 space-x-3">
                  <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} />
                  <SocialIcon kind="github" href={siteMetadata.github} />
                  <SocialIcon kind="instagram" href={siteMetadata.instagram} />
                  <SocialIcon kind="youtube" href={siteMetadata.youtube} />
                  <SocialIcon kind="linkedin" href={siteMetadata.linkedin} />
                  <SocialIcon kind="twitter" href={siteMetadata.twitter} />
                  
                </div>
              </div>
              <div className="pt-8 pb-8 prose dark:prose-dark max-w-none xl:col-span-2 text-justify">
                <p>
                  Hello there! Before talking about qualifications and professional abilities, I would like to introduce myself. I am Mitul Patel and I am from India. Taking software development as a profession not only fulfills my pocket but also my heart because it has been my passion since my early teenage.
                </p>
                <p>
                  I believe that people should do things in which they are good at or in which their heart lays. That’s why I chose freelance web development as my career because I believe I’m good at this and I am always honest and I am never afraid of doing hard work.
                </p>
                <p>
                  I did my graduation from The Ganpat University in IT Engineering and I have taken many lessons on modern web designing and web development from famous courses. My educational background allowed me to thrive in this career and my training on this has made me a master of this section.
                </p>
                {/* xl:gap-5 :gap-1 */}
                <div className="grid xl:grid-cols-10 sm:grid-cols-10 grid-cols-10  ">
                  <TechIcon kind="nodejs" href={'https://nodejs.org/en/'} tooltip="NodeJs" size={TECH_ICON_SIZE} />
                  <TechIcon kind="mongodb" href={'https://www.mongodb.com/'} tooltip="MongoDB" size={TECH_ICON_SIZE} />
                  <TechIcon kind="aws" href={'https://aws.amazon.com/'} tooltip="AWS" size={TECH_ICON_SIZE} />
                  <TechIcon kind="reactjs" href={'https://reactjs.org/'} tooltip="ReactJs" size={TECH_ICON_SIZE} />
                  <TechIcon kind="redux" href={'https://redux.js.org/'} tooltip="Redux" size={TECH_ICON_SIZE} />
                  <TechIcon kind="nextjs" href={'https://nextjs.org/'} tooltip="NextJs" size={TECH_ICON_SIZE} />
                  <TechIcon kind="gatsby" href={'https://www.gatsbyjs.com/'} tooltip="GatsbyJs" size={TECH_ICON_SIZE} />
                  <TechIcon kind="docker" href={'https://www.docker.com/'} tooltip="Docker" size={TECH_ICON_SIZE} />
                  <TechIcon kind="python" href={'https://www.python.org/'} tooltip="Python" size={TECH_ICON_SIZE} />
                  <TechIcon kind="linux" href={'#'} tooltip="Linux" size={TECH_ICON_SIZE} />
          
                </div>
                
              </div>

        
            </div>
          </div>
      
    </div>
  )
}
