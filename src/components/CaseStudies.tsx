
import { ArrowRight } from 'lucide-react';

const CaseStudies = () => {
    return (
        <section className="py-24 bg-brand-lavender">
            <div className="max-w-[1440px] mx-auto px-4 md:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6 text-brand-cyan">
                        Mediawings Success Stories
                    </h2>
                    <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                        Our data-driven digital marketing strategies have transformed businesses across industries. Read how Mediawings delivers measurable growth and performance.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Case Study 1 */}
                    <div className="bg-white rounded-3xl p-10 shadow-lg hover:shadow-xl transition-shadow flex flex-col items-center text-center">
                        <div className="h-16 flex items-center justify-center mb-8">
                            {/* Logo Placeholder */}
                            <div className="text-2xl font-bold text-red-500 font-serif">GlobalTech</div>
                        </div>
                        <h3 className="text-2xl font-black mb-4">Traffic Grew by 350%</h3>
                        <p className="text-gray-600 mb-8 max-w-md mx-auto">
                            How we scaled a B2B SaaS platform's organic visibility with a comprehensive technical SEO and content rollout.
                        </p>
                        <button className="mt-auto flex items-center gap-2 text-brand-cyan font-bold hover:text-brand-cyan-dark transition-colors">
                            VIEW CASE STUDY <ArrowRight size={18} />
                        </button>
                    </div>

                    {/* Case Study 2 */}
                    <div className="bg-white rounded-3xl p-10 shadow-lg hover:shadow-xl transition-shadow flex flex-col items-center text-center">
                        <div className="h-16 flex items-center justify-center mb-8">
                            {/* Logo Placeholder */}
                            <div className="text-2xl font-bold text-blue-600 font-sans tracking-wide">HealthPlus</div>
                        </div>
                        <h3 className="text-2xl font-black mb-4">Cost Per Lead Dropped 65%</h3>
                        <p className="text-gray-600 mb-8 max-w-md mx-auto">
                            Our performance marketing overhaul significantly reduced acquisition costs while increasing lead quality for this healthcare provider.
                        </p>
                        <button className="mt-auto flex items-center gap-2 text-brand-cyan font-bold hover:text-brand-cyan-dark transition-colors">
                            VIEW CASE STUDY <ArrowRight size={18} />
                        </button>
                    </div>
                </div>

                <div className="text-center mt-12">
                    <div className="inline-flex gap-2">
                        <button className="w-3 h-3 rounded-full bg-brand-cyan"></button>
                        <button className="w-3 h-3 rounded-full bg-gray-300"></button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CaseStudies;
