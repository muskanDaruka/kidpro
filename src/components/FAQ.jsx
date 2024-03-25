/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from 'react';

const FAQ = ({ numberOfQuestions, useGridCols2 = true, faqData }) => {
    const [isOpenFAQ, setIsOpenFAQ] = useState(null);

    const toggleFAQ = (index) => {
        setIsOpenFAQ(isOpenFAQ === index ? null : index);
    };

    // const faqData = [
    //     { question: 'What is childcare management software, and why do childcare centers need it?', answer: 'Childcare management software is a comprehensive tool designed to streamline operations in childcare centers. It aids in managing attendance, child care billing, communication, and more, improving overall efficiency.' },
    //     { question: 'How does childcare management software help in parent communication?', answer: 'Childcare management software facilitates real-time communication between parents and caregivers. Parents can receive updates, photos, and important announcements, fostering a transparent and collaborative environment.' },
    //     { question: 'What features should I look for when choosing childcare management software?', answer: 'Look for features like attendance tracking, childcare billing and communication tools, lesson planning, and comprehensive reporting. The software should align with the specific needs of your childcare center.' },
    //     { question: 'Is childcare management software secure and compliant with regulations?', answer: 'Yes, reputable childcare management software prioritizes security and compliance. Ensure the software follows industry standards, like GDPR and HIPAA, to protect sensitive information and maintain legal compliance.' },
    //     { question: 'Can childcare management software help with staff management and payroll?', answer: 'Absolutely. The software often includes modules for staff scheduling, attendance tracking, and payroll management, streamlining administrative tasks and ensuring accurate payroll processing.' },
    //     { question: 'How user-friendly is childcare management software, and what training is provided?', answer: "The best childcare management software is designed to be user-friendly. Many providers offer training sessions, tutorials, and customer support to help users navigate and maximize the software's potential." },
    //     { question: 'Can I customize the childcare management software to fit the unique needs of my center?', answer: "Yes, customization is a key feature of childcare management software. You can often tailor the software to match your center's specific requirements, ensuring a more personalized and effective solution." },
    //     { question: 'What kind of support and updates can I expect after purchasing childcare management software?', answer: 'Reputable providers offer ongoing support, including regular updates and enhancements. Ensure your chosen software provider has a responsive customer support team and a commitment to continuous improvement.' },
    //     { question: 'How does childcare management software contribute to child development and learning?', answer: 'The software often includes features for lesson planning, tracking developmental milestones, and sharing progress with parents. This supports a holistic approach to child development and learning' },
    //     { question: 'What are the costs associated with implementing childcare management software?', answer: 'Costs can vary based on factors like the size of your childcare center and the features you need. Consider both upfront costs and ongoing subscription fees. Look for transparent pricing models and inquire about any hidden fees.' },
    // ];
    const visibleFaqData = faqData ? faqData.slice(0, numberOfQuestions) : [];
    return (

        <div className="container mx-auto mt-8 justify-center flex flex-wrap">
            <div className={`grid ${useGridCols2 ? 'grid-cols-1 sm:grid-cols-2' : ''} space-y-4`}>
                {visibleFaqData.map((faq, index) => (
                    <div key={index} className="p-4 rounded mb-4">
                        <div className="cursor-pointer" onClick={() => toggleFAQ(index)}>
                            <div className="flex items-center justify-between">
                                <h2 className="text-lg font-bold font-sans mb-1">{faq.question}</h2>
                                <span className="inline-block">{isOpenFAQ === index ? '-' : '+'}</span>
                            </div>
                        </div>
                        {isOpenFAQ === index && <p className="font-normal font-sans">{faq.answer}</p>}
                        {index !== faqData.length - 1 && <hr className="border-t" />}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQ;
