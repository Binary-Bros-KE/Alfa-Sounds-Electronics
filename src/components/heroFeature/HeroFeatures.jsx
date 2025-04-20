const HeroFeatures = () => {
    const gateOne = 'Lockmaster Automatic Door Operators for Villa Dual Swing Gate';
    const gateTwo = 'Slide Gate Door Motor For Villa Farm Workshop Courtyard Factory';

    return (
        <>
            {/* Promotional Banners */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 mb-12 px-4 md:px-0">
                {/* Item 1 */}
                <div className="bg-gray-100 p-6 sm:p-8 rounded-lg flex flex-col sm:flex-row items-center sm:items-start justify-between shadow-lg">
                    <div className="text-center sm:text-left">
                        <h3 className="text-md font-bold mb-2 text-yellow-400">Automatic Gates & Doors</h3>
                        <p className="text-lg sm:text-xl font-bold mb-4 uppercase">
                            Lockmaster Automatic Door Operators for Villa Dual Swing Gate
                        </p>
                        <div className="flex flex-wrap justify-center sm:justify-start gap-2">
                            <a 
                                href={`whatsapp://send?phone=+254720434209&text=I'm%20interested%20in%20ordering%20${encodeURIComponent(gateOne)}`}  
                                className="bg-green-400 text-white font-bold px-4 py-2 rounded-md hover:bg-green-500 transition-colors flex items-center"
                            >
                                <i className="fab fa-whatsapp"></i>&nbsp;Place Order
                            </a>
                            <a 
                                href="/products/automatic-gates-and-doors/lockmaster-automatic-door" 
                                className="bg-yellow-400 text-white font-bold px-4 py-2 rounded-md hover:bg-yellow-500 transition-colors"
                            >
                                More info
                            </a>
                        </div>
                    </div>
                    <img className="w-[120px] sm:w-[150px] mt-4 sm:mt-0" src="/products/Gates/LM1202/LM1202.png" alt="Gate Image" />
                </div>

                {/* Item 2 */}
                <div className="bg-gray-100 p-6 sm:p-8 rounded-lg flex flex-col sm:flex-row items-center sm:items-start justify-between shadow-lg">
                    <div className="text-center sm:text-left">
                        <h3 className="text-md font-bold mb-2 text-yellow-400">Automatic Gates & Doors</h3>
                        <p className="text-lg sm:text-xl font-bold mb-4 uppercase">
                            Slide Gate Door Motor For Villa Farm Workshop Courtyard Factory e.t.c
                        </p>
                        <div className="flex flex-wrap justify-center sm:justify-start gap-2">
                            <a 
                                href={`whatsapp://send?phone=+254720434209&text=I'm%20interested%20in%20ordering%20${encodeURIComponent(gateTwo)}`}  
                                className="bg-green-400 text-white font-bold px-4 py-2 rounded-md hover:bg-green-500 transition-colors flex items-center"
                            >
                                <i className="fab fa-whatsapp"></i>&nbsp;Place Order
                            </a>
                            <a 
                                href="/products/automatic-gates-and-doors/slide-gate-door-motor" 
                                className="bg-yellow-400 text-white font-bold px-4 py-2 rounded-md hover:bg-yellow-500 transition-colors"
                            >
                                More info
                            </a>
                        </div>
                    </div>
                    <img className="w-[120px] sm:w-[150px] mt-4 sm:mt-0" src="/products/Gates/slide-gate/slide-gate.png" alt="Gate Image" />
                </div>
            </div>
        </>
    )
}

export default HeroFeatures;
