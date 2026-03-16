import { Link } from 'react-router-dom';
import { useModal } from '../contexts/ModalContext';
import { ArrowRight } from 'lucide-react';

const PharmaCasePage = () => {
    const { openModal } = useModal();

    const caseStudies = [
        {
            company: "PHARMA GLOBAL",
            title: "Scaling Patient Reach for Specialized Care",
            desc: "Helping healthcare providers and pharmaceutical brands reach patients globally through empathetic, data-driven digital strategies.",
            image: "https://images.unsplash.com/photo-1576091160550-217359f4ecf8?auto=format&fit=crop&q=80&w=1200",
            link: "#"
        }
    ];

    return (
        <div className="bg-white">
            <section className="pt-32 pb-16 bg-white">
                <div className="max-w-[1440px] mx-auto px-4 md:px-8 text-center md:text-left">
                    <nav className="flex mb-8 text-sm font-medium justify-center md:justify-start">
                        <Link to="/" className="text-brand-red hover:text-red-700">Home</Link>
                        <span className="mx-2 text-gray-400">/</span>
                        <span className="text-gray-500">Pharma & Healthcare</span>
                    </nav>

                    <div className="max-w-4xl">
                        <h1 className="text-5xl md:text-8xl font-black text-black mb-8 leading-tight uppercase tracking-tighter">
                            Pharma & <span className="text-black italic">Healthcare</span>
                        </h1>
                        <p className="text-gray-600 text-lg md:text-xl mb-10 leading-relaxed max-w-2xl">
                            We bridge the gap between healthcare innovation and patient trust with specialized digital growth strategies.
                        </p>
                        <button 
                            onClick={openModal}
                            className="inline-flex items-center gap-2 border-2 border-brand-cyan text-brand-cyan hover:bg-brand-cyan hover:text-white px-8 py-3 rounded-md font-bold transition-all duration-300 uppercase tracking-widest text-sm"
                        >
                            Start Your Journey <ArrowRight size={18} />
                        </button>
                    </div>
                </div>
            </section>

            <section className="pb-24 max-w-[1440px] mx-auto px-4 md:px-8">
                 <div className="grid grid-cols-1 gap-12">
                    {caseStudies.map((item, idx) => (
                        <div 
                            key={idx}
                            className="relative h-[450px] md:h-[550px] rounded-[2.5rem] overflow-hidden group shadow-2xl"
                        >
                            <div 
                                className="absolute inset-0 bg-cover bg-center"
                                style={{ backgroundImage: `url(${item.image})` }}
                            />
                            <div className="absolute inset-0 bg-black/10" />

                            <div className="absolute inset-0 flex items-center justify-center p-4">
                                <div className="bg-white rounded-4xl p-8 md:p-14 max-w-2xl w-full text-center shadow-2xl relative z-10">
                                    <h3 className="text-2xl md:text-5xl font-black text-black mb-6 leading-tight uppercase">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-500 text-sm md:text-lg mb-10 leading-relaxed font-medium">
                                        {item.desc}
                                    </p>
                                    <Link 
                                        to={item.link}
                                        className="inline-flex items-center gap-2 text-brand-cyan font-black hover:gap-3 transition-all underline decoration-brand-cyan/20 underline-offset-8 uppercase tracking-widest text-sm"
                                    >
                                        View Case Study <ArrowRight size={18} />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                 </div>
            </section>
        </div>
    );
};

export default PharmaCasePage;
