import Resume from '../assets/files/Resume-Olawale-Olafisoye2.pdf';

export default function About(): any {
    return (
        <div data-aos="zoom-in-up" id="about" className="py-12 flex flex-col lg:items-start items-center bg-alternate-bg lg:px-20 px-5 text-white font-Nunito">
            <h1 className="lg:w-fit flex lg:items-start items-center flex-col after:content-[''] after:w-1/2 after:mt-1 font-bold after:bg-orange after:block after:h-1 after:rounded-full text-2xl">
                Sobre Mim
            </h1><br /><br />
            <div className="flex lg:flex-row items-center flex-col w-full">
                <div className="lg:w-1/4 w-full h-80 bg-other object-cover bg-no-repeat bg-center"></div>
                <div className="lg:px-12 w-full mt-6 lg:w-3/4">
                    <h1 className="text-xl font-bold">
                        Olá
                    </h1><br />
                    <p>
                        Eu sou Olawale. Estou codificando há cerca de um ano. Adquiri ampla experiência trabalhando em projetos em tempo real. Trabalhei com a Brainnest como desenvolvedor front-end,
                        onde pude ganhar ampla experiência e sou muito grato pela oportunidade. <br />
                        Trabalhei como Diretor Administrativo de uma Fazenda de Avicultura (W World Company Limited).
                        Também gerenciei negócios de transporte que trabalham para o Guinness.
                    </p><br /><br />

                    <a href={Resume} download={"Resume-Olawale-Olafisoye2"} className="border border-orange px-7 py-3 hover:bg-orange duration-300 ease-in-out rounded-full">
                        Baixar Currículo
                    </a>
                </div>
            </div>
        </div>
    )
}