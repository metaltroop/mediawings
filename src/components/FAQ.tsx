import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQItem = ({ question, answer, isOpen, onClick }: { question: string, answer: string, isOpen: boolean, onClick: () => void }) => {
    return (
        <div className="border-b border-gray-200 py-4">
            <button
                className="w-full flex justify-between items-center text-left py-2 hover:text-brand-cyan transition-colors"
                onClick={onClick}
            >
                <span className="font-bold text-gray-800 text-lg">{question}</span>
                <span className="text-brand-cyan">
                    {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </span>
            </button>
            <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}
            >
                <p className="text-gray-600 leading-relaxed text-sm pb-4">{answer}</p>
            </div>
        </div>
    );
};

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqs = [
        {
            question: "What is Digital Marketing?",
            answer: "Digital marketing is the promotion of brands to connect with potential customers using the internet and other forms of digital communication. This includes not only email, social media, and web-based advertising, but also text and multimedia messages as a marketing channel."
        },
        {
            question: "Why does my business need a digital marketing agency?",
            answer: "A digital marketing agency provides expertise, scalable resources, and advanced tools that might be too expensive or time-consuming to build in-house. We help you reach a larger audience, improve your ROI, and stay ahead of the latest industry trends."
        },
        {
            question: "How long does it take to see results?",
            answer: "The timeline for results varies depending on the strategy. Paid advertising (PPC) can generate immediate traffic and leads, while organic strategies like SEO and content marketing typically take 3 to 6 months to show significant, sustainable growth."
        },
        {
            question: "What is the difference between SEO and SEM?",
            answer: "SEO (Search Engine Optimization) focuses on optimizing your website to rank higher in organic search results naturally. SEM (Search Engine Marketing), or paid search, involves purchasing ads (like Google Ads) to appear at the top of search results instantly."
        },
        {
            question: "How do you measure the success of a campaign?",
            answer: "We establish clear KPIs (Key Performance Indicators) tailored to your business goals. Common metrics include website traffic, conversion rates, cost per acquisition (CPA), return on ad spend (ROAS), and overall revenue growth. We provide comprehensive monthly reports to track these metrics."
        }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="max-w-[800px] mx-auto px-4 md:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6 text-brand-cyan">Frequently Asked Questions</h2>
                    <p className="text-gray-500 text-sm tracking-widest uppercase font-semibold">Everything You Need To Know</p>
                </div>

                <div className="space-y-2">
                    {faqs.map((faq, index) => (
                        <FAQItem
                            key={index}
                            question={faq.question}
                            answer={faq.answer}
                            isOpen={openIndex === index}
                            onClick={() => setOpenIndex(index === openIndex ? null : index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
