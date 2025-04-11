import React from 'react';
const HomeHero = () => {
    return (
        <>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 md:p-10 text-left'>
                <div>
                    <h1 className='text-xl md:text-4xl font-semibold text-blue-400'>
                        The reviews are pouring in. Based on 12,650 reviews.
                    </h1>
                </div>
                <div>
                    <h1 className='text-xl md:text-2xl'>
                        What’s the Next Status Water Bottle? Three of our experts named the LARQ bottle as one to watch.
                    </h1>
                </div>
                <div>
                    <h1 className='text-xl md:text-2xl'>
                        The result is that every glass of water tastes crisp and fresh.
                    </h1>
                </div>
                <div>
                    <h1 className='text-xl md:text-2xl'>
                        Easier to drink through the straw than other water filter bottles.
                    </h1>
                </div>
                <div>
                    <h1 className='text-xl md:text-2xl'>
                        You Should Ditch Your Old Water Dispenser For The High-Tech LARQ Pitcher PureVis™.
                    </h1>
                </div>
            </div>
            <div className="relative w-full h-screen flex items-center rounded-3xl">
                <img
                    src="https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/v1722067336/assets/spa/v3/shop/banner/wq-banner-background_d.png"
                    alt="Water Quality Background"
                    className="w-full  object-cover rounded-2xl h-[50%] "
                />
                     <div className="absolute left-6 md:left-20 max-w-lg text-white ">
                    <h1 className='text-2xl md:text-4xl font-bold mb-4'>
                        What's in your tap water?
                    </h1>
                    <p className='text-lg md:text-2xl mb-4 text-gray-200'>
                        Legal limits are designed to keep us safe, but contaminants still slip through the cracks.
                        Find out what's lurking in your water.
                    </p>
                    <div className="flex items-center space-x-4">
                        <button className='bg-white flex items-center px-5 py-3 rounded-full text-gray-600 font-semibold shadow-md hover:bg-gray-200 transition'>
                            Enter Zip <span className="ml-2">➡</span>
                        </button>
                        <button className='bg-white flex items-center px-5 py-3 rounded-full text-gray-600 font-semibold shadow-md hover:bg-gray-200 transition'>
                            Analyze <span className="ml-2">➡</span>
                        </button>
                    </div>
                    <p className='text-sm mt-4 text-gray-300 max-w-md'>
                        Our database pulls data from multiple sources such as <span className="font-bold">EWG</span> and <span className="font-bold">EPA</span>
                        to provide the most comprehensive view of your water quality.
                    </p>
                </div>
            </div>
        </>
    );
};

export default HomeHero;
