import { useState } from "react"

export default function Header(): any {
    const [navOptions]: readonly any[] = useState([
        {
            id: 1,
            title: 'Lar',
            navLink: '#intro',
        },
        {
            id: 2,
            title: 'Experiência',
            navLink: '#services',
        },
        {
            id: 3,
            title: 'Sobre',
            navLink: '#about',
        },
        {
            id: 4,
            title: 'Habilidades',
            navLink: '#skills',
        },
        // {
        //     id: 5,
        //     title: 'Blog',
        //     navLink: '#blog',
        // },
        {
            id: 6,
            title: 'Contato',
            navLink: '#contact',
        },
    ])

    return (
        <div data-aos="fade-left" id="home" className="bg-main-bg w-full z-50 sticky top-0 left-0 flex items-center justify-between py-8 lg:px-14 px-2 text-white font-Lato">
            <h1 className="text-3xl w-fit">
                Olawale <span className="text-orange">Rasaki</span>&nbsp;Olafisoye
            </h1>

            <ul className="lg:flex hidden">
                {
                    navOptions.map((navOption: any) => (
                        <li className="mx-6">
                            <a href={navOption.navLink} className="hover:text-orange text-lg ease-in-out cursor-pointer duration-300">
                                {navOption.title}
                            </a>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}