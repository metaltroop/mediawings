import { Link } from 'react-router-dom';
import { useModal } from '../contexts/ModalContext';
import { ArrowRight } from 'lucide-react';

// Using existing assets for logos if available
import logoUnimont from '../assets/companies/Group-12678.png'; 
import logoArihant from '../assets/companies/Group-12679.png';

const RealEstateCasePage = () => {
    const { openModal } = useModal();

    const caseStudies = [
        {
            company: "UNIMONT",
            logo: logoUnimont,
            title: "Successfully Sold Over 125 homes",
            desc: "We've launched and managed two impressive real estate projects using our digital expertise.",
            image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1200", // Placeholder for actual building image
            link: "#"
        },
        {
            company: "ARIHANT",
            logo: logoArihant,
            title: "Sold more than 1500+ Homes",
            desc: "More than 25 real estate projects have been launched and run well with the help of our digital and performance marketing solutions.",
            image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200", // Placeholder
            link: "#"
        }
    ];

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="pt-32 pb-16 bg-white">
                <div className="max-w-[1440px] mx-auto px-4 md:px-8">
                    {/* Breadcrumb */}
                    <nav className="flex mb-8 text-sm font-medium">
                        <Link to="/" className="text-brand-red hover:text-red-700">Home</Link>
                        <span className="mx-2 text-gray-400">/</span>
                        <span className="text-gray-500">Real Estate</span>
                    </nav>

                    <div className="text-center max-w-4xl mx-auto">
                        <h1 className="text-5xl md:text-7xl font-bold text-black mb-8 leading-tight">
                            Real Estate <span className="text-black">Marketing Agency</span>
                        </h1>
                        <p className="text-gray-600 text-lg md:text-xl mb-10 leading-relaxed">
                            Hire a top-rated real estate marketing agency for your real estate project with end-to-end 
                            marketing, design, and technology needs and solid experience 
                            delivering 1 million leads and 1 billion in revenue.
                        </p>
                        <button 
                            onClick={openModal}
                            className="inline-flex items-center gap-2 border-2 border-brand-cyan text-brand-cyan hover:bg-brand-cyan hover:text-white px-8 py-3 rounded-md font-bold transition-all duration-300"
                        >
                            Inquire Now <ArrowRight size={18} />
                        </button>
                    </div>
                </div>
            </section>

            {/* Case Studies Section */}
            <section className="pb-24 max-w-[1440px] mx-auto px-4 md:px-8 space-y-12">
                {caseStudies.map((item, idx) => (
                    <div 
                        key={idx}
                        className="relative h-[450px] md:h-[550px] rounded-4xl overflow-hidden group shadow-2xl"
                    >
                        {/* Background Image */}
                        <div 
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                            style={{ backgroundImage: `url(${item.image})` }}
                        />
                        <div className="absolute inset-0 bg-black/10 transition-opacity duration-300 group-hover:bg-black/20" />

                        {/* Centered Content Box */}
                        <div className="absolute inset-0 flex items-center justify-center p-4">
                            <div className="bg-white rounded-3xl p-8 md:p-12 max-w-2xl w-full text-center shadow-2xl relative z-10">
                                <div className="flex justify-center mb-6">
                                    <img src={item.logo} alt={item.company} className="h-10 md:h-12 object-contain grayscale" />
                                </div>
                                <h3 className="text-2xl md:text-4xl font-bold text-black mb-4 leading-tight">
                                    {item.title}
                                </h3>
                                <p className="text-gray-600 text-sm md:text-base mb-8 leading-relaxed font-medium">
                                    {item.desc}
                                </p>
                                <Link 
                                    to={item.link}
                                    className="inline-flex items-center gap-2 text-brand-cyan font-bold hover:gap-3 transition-all underline decoration-brand-cyan/30 underline-offset-8"
                                >
                                    View Case Study <ArrowRight size={18} />
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </section>
        </div>
    );
};

export default RealEstateCasePage;
