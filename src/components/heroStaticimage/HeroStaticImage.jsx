const HeroStatic = () => {
    return (
        <div className="relative">
            <img src="/cables/home-static.png" alt="" />
            <div className="absolute top-0 h-full flex-col max-w-100 p-10 left-14 bg-blue-400">
                <span className="capitalize">Lorem ipsum, dolor sit</span>
                <h1 className="text-3xl mb-5 capitalize font-bold text-w">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h1>
                <ul className="mb-10">
                    <li className="before:content-['--'] before:font-bold"> VGA Cables</li>
                    <li className="before:content-['--'] before:font-bold"> Ethernet Cables</li>
                    <li className="before:content-['--'] before:font-bold"> HMDI Cables</li>
                    <li className="before:content-['--'] before:font-bold"> Coaxial Cables</li>
                    <li className="before:content-['--'] before:font-bold"> AV Cables</li>
                    <li className="before:content-['--'] before:font-bold"> Fibre Optic Cables</li>
                </ul>
                <a href="/products/cables-and-connectors" className="bg-amber-400 text-white font-bold text-xl py-4 px-8 rounded-md shadow-md">Explore More</a>
            </div>
        </div>
    )
}

export default HeroStatic;