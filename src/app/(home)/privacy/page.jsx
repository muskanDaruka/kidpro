import Link from "next/link";
import Footer from "../../../components/Footer";

const Privacy = () => {
    return (
        <>

            <section className="relative">
                <div className="relative bg-gradient-to-b from-blue-400 to-blue-100 h-[300px]">
                    <div className="h-full relative">
                        <div className="absolute inset-0 flex sm:items-start sm:justify-start items-center justify-center top-14 sm:top-40 sm:left-16">
                            <h1 className="font-bold text-[#2053CC] sm:text-5xl text-4xl  font-sans">Privacy Policy</h1>
                        </div>
                    </div>
                </div>
            </section>
            <section className="relative">
                <p className="p-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et doloreLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
            </section>
            <div className="">
                <Footer />
            </div>

        </>

    )
};
export default Privacy;