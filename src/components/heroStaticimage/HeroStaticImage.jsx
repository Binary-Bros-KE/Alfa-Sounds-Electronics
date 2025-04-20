const HeroStatic = () => {
    return (
        <div className="max-sm:h-[500px] max-sm:flex max-sm:flex-col-reverse mb- max-sm:my-10 bg-[#AEB6BC] bg-[url(/cables/home-static.jpg)] bg-cover">
            <div className="relative eakha-container min-h-[420px]">
            <img src="/cables/home-static.jpg" className="hidden max-md:block" />
            <div className="absolute top-0 h-full flex-col max-w-100 max-md:max-w-full p-10 left-8 bg-green-400 max-sm:static max-md:h-auto">
                <span className="capitalize text-white font-bold">Home Appliances & Electronic Accessories</span>
                <h1 className="text-2xl mb-5 capitalize font-bold text-w">Power Tools, Electric Motors & Alarm Systems</h1>
                <ul className="mb-10">
                    <li className="before:content-['--'] before:font-bold"> CCTV Cameras</li>
                    <li className="before:content-['--'] before:font-bold"> DVRs, DSTV, Zuku</li>
                    <li className="before:content-['--'] before:font-bold"> Generators</li>
                    <li className="before:content-['--'] before:font-bold"> Astel Cables</li>
                    <li className="before:content-['--'] before:font-bold"> Speaker Cables</li>
                    <li className="before:content-['--'] before:font-bold"> Assorted Electronic Accessories</li>
                </ul>
                <a href="/products" className="bg-yellow-400 text-white font-bold text-xl py-3 px-8 rounded-md hover:shadow-lg">Explore More</a>
            </div>
            </div>
        </div>
    )
}

export default HeroStatic;