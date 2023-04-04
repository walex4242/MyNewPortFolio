import { useState } from "react";
import { CgWebsite } from 'react-icons/cg';
import { SiAntdesign } from "react-icons/si";

export default function Services(): any {
    const [services]: readonly any[] = useState([
        {
            id: 1,
            icon: <CgWebsite />,
            title: "Web Development",
            writeUp: "",
        },
        {
            id: 2,
            icon: <SiAntdesign />,
            title: "Web Design",
            writeUp: "",
        },

    ])

    return (
        <div id="services" className="bg-transparent lg:px-20 py-12 px-2">
            <div className="flex lg:flex-row flex-col items-center lg:justify-start justify-center">
                <div data-aos="zoom-in-right" className="text-white lg:w-2/5 font-Nunito text-center lg:text-left">
                    <p className="text-sm text-orange">
                        EXPERIÊNCIA
                    </p>
                    <h1 className="text-2xl w-full flex flex-col lg:items-start items-center py-1 after:content-[''] after:bg-orange after:my-2 after:h-1 after:rounded-full after:w-16 after:block font-bold">
                        Meus serviços
                    </h1>
                </div>
                <div data-aos="zoom-in-right" className="lg:w-3/5 text-white font-Nunito">
                    <p>
                        Eu sou Olawale. Estou codificando há cerca de um ano. Adquiri ampla experiência trabalhando em projetos em tempo real. Trabalhei com a Brainnest como desenvolvedor front-end,
                        onde pude ganhar ampla experiência e sou muito grato pela oportunidade. <br />
                    </p>
                </div>
            </div> <br /><br /><br />
            <div className="flex justify-center items-center flex-wrap">
                {
                    services.map((service: any) => (
                        <div data-aos="zoom-in-up" className="lg:w-80 w-full text-white font-Nunito px-3 py-5 rounded-sm bg-orange mx-6 my-4">
                            <i className="text-3xl">
                                {service.icon}
                            </i>
                            <h1 className="text-xl mt-4 font-bold">
                                {service.title}
                            </h1>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}