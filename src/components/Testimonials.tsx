

const Testimonials = () => {
    return (
        <section id="case-studies" className="py-24 bg-white">
            <div className="max-w-[1440px] mx-auto px-4 md:px-8 text-center">
                <h2 className="text-3xl md:text-5xl font-bold font-heading mb-16 text-brand-cyan">Mediawings Success Stories</h2>
                <p className="text-gray-600 max-w-4xl mx-auto mb-16">
                    Our data-driven strategies have transformed businesses across industries. Read how Mediawings delivers measurable growth and performance.
                </p>

                {/* Minimal Testimonial Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">

                    <div className="p-8 border border-gray-100 rounded-xl shadow-sm hover:shadow-lg transition-shadow bg-white">
                        <div className="flex gap-1 text-yellow-400 mb-4">★★★★★</div>
                        <p className="text-gray-700 mb-6 italic">"The team at Mediawings completely overhauled our paid strategy. Our ROAS increased by 400% within the first quarter."</p>
                        <div>
                            <p className="font-bold text-gray-900">Sarah Jenkins</p>
                            <p className="text-sm text-gray-500">CMO, TechFlow</p>
                        </div>
                    </div>

                    <div className="p-8 border border-gray-100 rounded-xl shadow-sm hover:shadow-lg transition-shadow bg-white relative -top-4"> {/* Slight stagger */}
                        <div className="flex gap-1 text-yellow-400 mb-4">★★★★★</div>
                        <p className="text-gray-700 mb-6 italic">"Exceptional development and SEO work. We rank #1 for our primary keywords and the new site converts like crazy."</p>
                        <div>
                            <p className="font-bold text-gray-900">David Chen</p>
                            <p className="text-sm text-gray-500">Founder, LocalEats</p>
                        </div>
                    </div>

                    <div className="p-8 border border-gray-100 rounded-xl shadow-sm hover:shadow-lg transition-shadow bg-white">
                        <div className="flex gap-1 text-yellow-400 mb-4">★★★★★</div>
                        <p className="text-gray-700 mb-6 italic">"A true growth partner. Mediawings acts as an extension of our internal marketing team. Highly recommended."</p>
                        <div>
                            <p className="font-bold text-gray-900">Elena Rodriguez</p>
                            <p className="text-sm text-gray-500">Director of Marketing, Stellar</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Testimonials;
