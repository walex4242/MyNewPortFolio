import { useState } from 'react';
import { FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';


export default function Intro(): any {
    const [socials]: readonly any[] = useState([
        {
            id: 1,
            socialName: "Github",
            icon: <FaGithub />,
            socialLink: "https://github.com/walex4242",
        },
        {
            id: 2,
            socialName: "Whatsapp",
            icon: <FaWhatsapp />,
            socialLink: "https://wa.me/5551982856945",
        },

        {
            id: 3,
            socialName: "LinkedIn",
            icon: <FaLinkedin />,
            socialLink: "https://www.linkedin.com/in/olawale-olafisoye-463913236/",
        },


    ])

    return (
        <div data-aos="fade-up" id='intro' className="bg-alternate-bg py-16 flex items-center flex-wrap lg:flex-row flex-col">
            <div className="lg:w-3/5 lg:px-6 px-1 ">
                <div className="flex">
                    {
                        socials.map((social: any) => (
                            <a href={social.socialLink} className="text-white cursor-pointer hover:text-orange ease-in-out duration-300 lg:text-xl text-base lg:p-3 lg:mx-4 mx-2 p-2 border border-orange rounded-full">
                                {social.icon}
                            </a>
                        ))
                    }
                </div>
                <h1 className="lg:mx-4 mx-2 py-6 text-white font-Nunito lg:text-6xl text-3xl font-bold">
                    Eu sou Olawale Rasaki Olafisoye
                </h1>
                <p className="text-white lg:mx-4 mx-2 py-2 font-Nunito">
                    Desenvolvedor Frontend |  React JS | React Native | TailwindCSS
                </p>
                <button className="border border-orange rounded-full px-6 bg-transparent hover:bg-orange ease-in-out duration-300 py-3 my-3 text-white font-Lato lg:mx-4 mx-2">
                    Compre-me um café
                </button>
            </div>
            <div className="lg:w-2/5 w-full  bg-about object-cover h-80 bg-center bg-no-repeat"></div>
        </div>
    )
}
