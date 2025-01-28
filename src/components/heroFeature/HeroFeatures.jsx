const HeroFeatures = ({ products, category }) => {
    return (
        <>
            {/* Promotional Banners */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
                <div className="bg-gray-100 p-8 rounded-lg flex justify-between">
                    <div>
                        <h3 className="text-md font-bold mb-2 text-blue-600">Automatic Gates & Doors</h3>
                        <p className="text-xl font-bold mb-4 uppercase">Lockmaster Automatic Door Operators for Villa Dual Swing Gate</p>
                        <button className="bg-blue-400 text-white font-bold px-6 py-2 rounded-md hover:bg-blue-500 transition-colors cursor-pointer">More info</button>
                    </div>
                    <img className="w-[150px]" src="/products/Gates/LM1202/LM1202.png" alt=""/>
                </div>
                <div className="bg-gray-100 p-8 rounded-lg flex justify-between">
                    <div>
                        <h3 className="text-md font-bold mb-2 text-blue-600">Automatic Gates & Doors</h3>
                        <p className="text-xl font-bold mb-4 uppercase">Slide Gate Door Motor For Villa Farm Workshop Courtyard Factory e.t.c</p>
                        <button className="bg-blue-400 text-white font-bold px-6 py-2 rounded-md hover:bg-blue-500 transition-colors cursor-pointer">More info</button>
                    </div>
                    <img className="w-[150px]" src="/products/Gates/slide-gate/slide-gate.png" alt=""/>
                </div>
            </div>
        </>
    )
}

export default HeroFeatures