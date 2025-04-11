import React from 'react';
const WaterQuality = () => {
    const images = [
        {
            src: "https://tse3.mm.bing.net/th?id=OIP.G0gPNYgXo-BZVvIgrZE38QHaEK&pid=Api&P=0&h=180",
            alt: "Contaminated tap water"
        },
        {
            src: "https://wallpapers.com/images/hd/hd-water-splash-nw4nsy42hpgexcrz.jpg",
            alt: "Water splash"
        },
        {
            src: "https://www.swfwmd.state.fl.us/sites/default/files/styles/gallery_normal/public/H20-Zone-Graphics%20[WaterQuality%20-%20Water%20Monitoring].png?itok=BsIt0hXC",
            alt: "Water monitoring chart"
        },
        {
            src: "https://tse1.mm.bing.net/th?id=OIP.XADF7amzQRt33rYl51Y3XwHaEK&pid=Api&P=0&h=180",
            alt: "Water testing lab"
        }
    ];
    return (
        <section className='my-24 px-4'>
            <div className='flex flex-col justify-center items-center text-center space-y-4 mb-10'>
                <h1 className='text-2xl md:text-3xl font-semibold'>What’s in your water?</h1>
                <p className='text-gray-600 max-w-2xl'>
                    Discover the most common contaminants in your tap water and learn how they compare to critical health standards.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 p-4 md:p-10 shadow-md ">
                {images.map((img, index) => (
                    <article key={index} className="overflow-hidden rounded-xl shadow">
                        <img
                            src={img.src}
                            alt={img.alt}
                            className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                        />
                    </article>
                ))}
            </div>
        </section>
    );
};
export default WaterQuality;
