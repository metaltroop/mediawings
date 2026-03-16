import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import popupGif from '../assets/popupanimation.gif';
import { useModal } from '../contexts/ModalContext';

const ScrollFormModal = () => {
    const { isModalOpen, openModal, closeModal } = useModal();
    const [hasTriggered, setHasTriggered] = useState(false);

    useEffect(() => {
        let timeoutId: ReturnType<typeof setTimeout>;

        const handleScroll = () => {
            const scrollY = window.scrollY || document.documentElement.scrollTop;
            // Trigger when user scrolls down past 200px
            if (scrollY > 200 && !hasTriggered) {
                openModal();
                setHasTriggered(true);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Fallback: auto-trigger after 3 seconds if not scrolled
        if (!hasTriggered) {
            timeoutId = setTimeout(() => {
                openModal();
                setHasTriggered(true);
            }, 3000);
        }

        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (timeoutId) clearTimeout(timeoutId);
        };
    }, [hasTriggered]);

    if (!isModalOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 animate-in fade-in duration-300">

            <div className="bg-white rounded-xl shadow-2xl w-full max-w-4xl flex overflow-hidden max-h-[90vh] relative animate-in zoom-in-95 duration-500">

                {/* Close Button */}
                <button
                    onClick={closeModal}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-800 transition-colors z-10"
                >
                    <X size={24} />
                </button>

                {/* Form Container (Left Side) */}
                <div className="w-full lg:w-[60%] p-8 md:p-12 overflow-y-auto">
                    <h2 className="text-3xl font-bold font-heading text-gray-900 mb-8">Lets Get Project Started</h2>

                    <form className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <input type="text" placeholder="Name*" className="w-full border border-gray-200 rounded-md p-3 text-sm focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan outline-none" required />
                            </div>
                            <div>
                                <input type="email" placeholder="Email address*" className="w-full border border-gray-200 rounded-md p-3 text-sm focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan outline-none" required />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="flex border border-gray-200 rounded-md overflow-hidden focus-within:border-brand-cyan focus-within:ring-1 focus-within:ring-brand-cyan">
                                {/* Simplified Country Code Selector */}
                                <select className="bg-gray-50 border-r border-gray-200 px-3 text-sm outline-none w-24">
                                    <option value="+91">🇮🇳 +91</option>
                                    <option value="+1">🇺🇸 +1</option>
                                    <option value="+44">🇬🇧 +44</option>
                                </select>
                                <input type="tel" placeholder="Phone number*" className="w-full p-3 text-sm outline-none" required />
                            </div>
                            <div>
                                <input type="text" placeholder="Company name" className="w-full border border-gray-200 rounded-md p-3 text-sm focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan outline-none" />
                            </div>
                        </div>

                        <div className="flex border border-gray-200 rounded-md overflow-hidden focus-within:border-brand-cyan focus-within:ring-1 focus-within:ring-brand-cyan">
                            <span className="bg-gray-50 border-r border-gray-200 px-4 py-3 text-sm flex items-center font-bold">$</span>
                            <select className="w-full p-3 text-sm outline-none bg-white text-gray-500" required defaultValue="">
                                <option value="" disabled>Budget range*</option>
                                <option value="under5k">Under $5,000</option>
                                <option value="5k_10k">$5,000 - $10,000</option>
                                <option value="10k_50k">$10,000 - $50,000</option>
                                <option value="over50k">Over $50,000</option>
                            </select>
                        </div>

                        <div>
                            <p className="font-semibold text-gray-900 text-sm mb-4">Select Services*</p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-3 gap-x-2">
                                {[
                                    'Web development', 'Ecommerce', 'Custom Software',
                                    'Mob Apps', 'Digital Marketing', 'SEO',
                                    'Social Media', 'Paid Ads', 'Lead Gen',
                                    'Influencer Marketing', 'Creative & Branding', 'Business Email',
                                    'Cloud Mail & Hosting', 'Hire Resources'
                                ].map((service) => (
                                    <label key={service} className="flex items-center gap-2 cursor-pointer group">
                                        <input type="checkbox" className="w-4 h-4 text-brand-cyan rounded border-gray-300 focus:ring-brand-cyan focus:ring-opacity-25 transition-colors cursor-pointer" />
                                        <span className="text-xs text-gray-600 group-hover:text-gray-900 transition-colors">{service}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        <div>
                            <textarea
                                placeholder="Briefly describe your needs, i.e. brief your tentative start date, references, budgets, etc."
                                className="w-full border border-gray-200 rounded-md p-4 text-sm focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan outline-none h-32 resize-none"
                            ></textarea>
                        </div>

                        <button type="submit" className="w-full bg-brand-cyan hover:bg-brand-cyan-dark text-white font-bold py-4 rounded-md transition-colors text-lg">
                            Send
                        </button>
                    </form>
                </div>

                {/* Graphic Container (Right Side) - Hidden on Mobile */}
                <div className="hidden lg:flex w-[40%] bg-brand-lavender items-center justify-center p-8">
                    <img src={popupGif} alt="Popup Animation" className="w-full max-w-sm rounded-lg object-contain" />
                </div>

            </div>
        </div>
    );
};

export default ScrollFormModal;
