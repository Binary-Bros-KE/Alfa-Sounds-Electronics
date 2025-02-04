const HeroStatic = () => {
    return (
        <div className="max-sm:h-[500px] max-sm:flex max-sm:flex-col-reverse mb- max-sm:my-10 bg-[#AEB6BC]">
            <div className="relative eakha-container min-h-[420px]">
            <img src="/cables/home-static.png" alt="" />
            <div className="absolute top-0 h-full flex-col max-w-100 p-10 left-8 bg-blue-400 max-sm:static max-md:h-auto">
                <span className="capitalize">Reliable Connectivity for Every Setup</span>
                <h1 className="text-2xl mb-5 capitalize font-bold text-w">High-Quality Cables & Connectors for Seamless Performance.</h1>
                <ul className="mb-10">
                    <li className="before:content-['--'] before:font-bold"> VGA Cables</li>
                    <li className="before:content-['--'] before:font-bold"> Ethernet Cables</li>
                    <li className="before:content-['--'] before:font-bold"> HMDI Cables</li>
                    <li className="before:content-['--'] before:font-bold"> Coaxial Cables</li>
                    <li className="before:content-['--'] before:font-bold"> AV Cables</li>
                    <li className="before:content-['--'] before:font-bold"> Fibre Optic Cables</li>
                </ul>
                <a href="/products/cables-and-connectors" className="bg-white text-black font-bold text-xl py-3 px-8 rounded-md hover:shadow-lg">Explore More</a>
            </div>
            </div>
        </div>
    )
}

export default HeroStatic;