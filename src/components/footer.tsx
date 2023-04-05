import React from "react"
import { Link } from "react-router-dom";
export default function Footer():any{
    return (
        <div className="py-4 px-2 bg-main-bg flex justify-between text-white text-sm font-Lato">
            <p>
                Olawale &nbsp;<span className="text-orange">Rasaki</span>&nbsp;  Olafisoye
            </p>

            <footer className="sticky bottom-5 ">
                <div className="flex items-center justify-center ">
                    <a href="#intro">
                        <div className="max-w-fit hover:after:content-['↑'] hover:after:absolute after:translate-x-10 hover:after:translate-x-14 after:-translate-y-10 hover:after:-translate-y-10 hover:after:font-bold hover:after:text-3xl hover:after:text-[#FFE55C]/90 hover:after:transition-all hover:after:duration-300 hover:after:ease-in-out hover:after:opacity-100 after:opacity-0 hover:after:-mx-5 hover:after:px-5">
                            <img
                                className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer  "
                                src="https://e1.pngegg.com/pngimages/950/589/png-clipart-circular-icon-set-word-w-logo-thumbnail.png"
                                alt="logo"
                            />
                        </div>
                    </a>
                </div>
            </footer>
            <p>
                Copyright &copy; 2023
            </p>
        </div>
    )
}