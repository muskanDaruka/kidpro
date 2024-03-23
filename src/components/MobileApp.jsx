/* eslint-disable @next/next/no-img-element */

const MobileApp = () => {
    return (
        <section className="bg-white flex flex-col sm:flex-row px-8 py-10 gap-10 mt-16 sm:mt-0">
            <div className="flex-1 flex flex-col justify-center space-y-5">
                <p className="font-normal text-[#6B7094]">How it works</p>
                <h2 className="text-3xl sm:text-4xl font-bold">
                    How Can You Upscale Your Preschool with Kidspro
                </h2>
                <h5 className="w-full">
                    <p className="text-left text-lg font-normal leading-9 mt-4 max-sm:text-justify text-[#6B7094]">
                        Transform your childcare /  preschool with KidsPro, unlocking a world of efficiency, engagement, and growth. Upscale your educational journey with our advanced childcare management software.
                    </p>
                </h5>
                <button className=" flex w-[240px] h-[52px] bg-[#1747C8] rounded-full text-white text-xl ml-2 pl-5 p-3">Learn More
                    <img src="/images/home/arrow-right.png" alt="home" className="text-center p-2 ml-5" />
                </button>
            </div>
            <div className="flex-1">
                <img
                    src={"/images/home/mobile.png"}
                    alt="Image"
                    className="object-contain mx-auto"
                />
            </div>
        </section>
    );
};

export default MobileApp;