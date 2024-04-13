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
            <section className="relative sm:p-16 p-6">
                <h2 className="font-bold font-sans text-xl">Effective Date: April 13, 2024</h2>
                <p className="font-sans pt-2">Kidpro Solutions ("Kidpro," "we," "us," or "our") respects the privacy of our users, particularly Childcare center owners ("you" or "your"). This Privacy Policy describes the types of information we collect, how we use it, and the choices you have about your information.</p>
                <h2 className="font-bold font-sans text-xl pt-2">Information We Collect</h2>

                <h3 className="font-sans pt-2">We collect several types of information to provide and improve our services:</h3>
                <ul className="list-disc pt-2 pl-10">
                    <li className="font-sans"><span style={{ fontWeight: 'bold' }}>Information You Provide:</span>This includes information you submit when requesting a demo, signing up for a free trial, or subscribing to our services. This may include your name, email address, phone number, childcare center name, address, and other business-related information.</li>
                </ul>

                <h2 className="font-bold font-sans text-xl pt-2">How We Use Your Information</h2>
                <h3 className="font-sans pt-2">We use your information to:</h3>
                <ul className="list-disc pt-2 pl-10">
                    <li className="font-sans">Provide, operate, and maintain our services.</li>
                    <li className="font-sans">Send you important information about Kidpro, including updates, promotional offers, and other relevant information.</li>
                    <li className="font-sans">Respond to your inquiries and requests.</li>
                    <li className="font-sans">Improve our services and develop new features.</li>
                    <li className="font-sans">Comply with legal and regulatory requirements.</li>
                </ul>
                <h2 className="font-bold font-sans text-xl pt-2">Sharing Your Information</h2>
                <p className="font-sans pt-2">We will not sell or share your information with third parties without your consent. We may share your information with service providers who help us operate our business, such as data storage providers or email marketing platforms. These service providers are contractually obligated to keep your information confidential and secure.</p>
                <p className="font-sans">We may also disclose your information if required by law, such as in response to a court order or subpoena.</p>
                <h2 className="font-bold font-sans text-xl pt-2">Your Choices</h2>

                <h3 className="font-sans pt-2 font-bold">You have choices regarding your information:</h3>
                <ul className="list-disc pt-2 pl-10">
                    <li className="font-sans"><span style={{ fontWeight: 'bold' }}>Access and Correction:</span>You can request access to your personal information and request that we correct any inaccuracies.</li>
                    <li className="font-sans"><span style={{ fontWeight: 'bold' }}>Opt-Out of Communications:</span>You can unsubscribe from our marketing communications by clicking the "unsubscribe" link at the bottom of any email we send you.</li>
                </ul>

                <h2 className="font-bold font-sans text-xl pt-2">Data Security</h2>
                <p className="font-sans pt-2">We take reasonable steps to protect your information from unauthorized access, disclosure, alteration, or destruction. However, no internet transmission or electronic storage is completely secure.</p>
                <h2 className="font-bold font-sans text-xl pt-2">Children's Privacy</h2>
                <p className="font-sans pt-2">Our services are not directed to children under the age of 13. We do not knowingly collect personal information from children under 13.</p>
                <h2 className="font-bold font-sans text-xl pt-2">California Consumer Privacy Act (CCPA) (if applicable)</h2>
                <p className="font-sans pt-2">If you are a California resident, you have certain rights under the California Consumer Privacy Act (CCPA). You can learn more about these rights and how to exercise them by visiting our CCPA Notice page</p>
                <h2 className="font-bold font-sans text-xl pt-2">Changes to this Privacy Policy</h2>
                <p className="font-sans pt-2">We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on our website. You are advised to review this Privacy Policy periodically for any changes.</p>
                <h2 className="font-bold font-sans text-xl pt-2">Contact Us</h2>
                <p className="font-sans pt-2">If you have any questions about this Privacy Policy, please contact us at or by mail at:
                    Kidpro Solutions
                </p>
            </section>
            <div className="">
                <Footer />
            </div>

        </>

    )
};
export default Privacy;