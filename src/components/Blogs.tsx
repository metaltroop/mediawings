
import { ArrowRight } from 'lucide-react';

const Blogs = () => {
    return (
        <section id="insights" className="py-24 bg-white border-y border-gray-100">
            <div className="max-w-[1440px] mx-auto px-4 md:px-8">
                <h2 className="text-3xl md:text-5xl font-bold font-heading mb-16 text-brand-cyan">Our Blogs</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Blog 1 */}
                    <div className="group cursor-pointer">
                        <div className="aspect-video bg-gray-100 rounded-2xl mb-6 overflow-hidden relative">
                            <div className="absolute top-4 left-4 bg-white px-3 py-1 text-xs font-bold rounded-md">SEO</div>
                            {/* Image Placeholder */}
                            <div className="w-full h-full flex items-center justify-center text-gray-400 bg-gray-200 group-hover:scale-105 transition-transform duration-500">
                                Image Placeholder
                            </div>
                        </div>
                        <h3 className="text-xl font-bold mb-3 group-hover:text-brand-cyan transition-colors line-clamp-2">
                            Why is Digital Marketing in the Financial Sector so Important?
                        </h3>
                        <p className="text-gray-600 mb-4 line-clamp-3 text-sm">
                            Discover how financial institutions are leveraging advanced digital marketing strategies to acquire customers and build trust in a competitive landscape.
                        </p>
                        <button className="flex items-center gap-2 text-brand-cyan font-bold hover:text-brand-cyan-dark transition-colors text-sm">
                            READ MORE <ArrowRight size={16} />
                        </button>
                    </div>

                    {/* Blog 2 */}
                    <div className="group cursor-pointer">
                        <div className="aspect-video bg-gray-100 rounded-2xl mb-6 overflow-hidden relative">
                            <div className="absolute top-4 left-4 bg-white px-3 py-1 text-xs font-bold rounded-md">PPC</div>
                            {/* Image Placeholder */}
                            <div className="w-full h-full flex items-center justify-center text-gray-400 bg-gray-200 group-hover:scale-105 transition-transform duration-500">
                                Image Placeholder
                            </div>
                        </div>
                        <h3 className="text-xl font-bold mb-3 group-hover:text-brand-cyan transition-colors line-clamp-2">
                            How is digital marketing driving growth for apparel brands?
                        </h3>
                        <p className="text-gray-600 mb-4 line-clamp-3 text-sm">
                            Explore the tactics top apparel brands use to maximize their return on ad spend and dominate visual search platforms like Instagram and Pinterest.
                        </p>
                        <button className="flex items-center gap-2 text-brand-cyan font-bold hover:text-brand-cyan-dark transition-colors text-sm">
                            READ MORE <ArrowRight size={16} />
                        </button>
                    </div>

                    {/* Blog 3 */}
                    <div className="group cursor-pointer">
                        <div className="aspect-video bg-gray-100 rounded-2xl mb-6 overflow-hidden relative">
                            <div className="absolute top-4 left-4 bg-white px-3 py-1 text-xs font-bold rounded-md">Strategy</div>
                            {/* Image Placeholder */}
                            <div className="w-full h-full flex items-center justify-center text-gray-400 bg-gray-200 group-hover:scale-105 transition-transform duration-500">
                                Image Placeholder
                            </div>
                        </div>
                        <h3 className="text-xl font-bold mb-3 group-hover:text-brand-cyan transition-colors line-clamp-2">
                            Real Estate Revenue Growth Using Digital Marketing
                        </h3>
                        <p className="text-gray-600 mb-4 line-clamp-3 text-sm">
                            A comprehensive guide to generating high-quality real estate leads and closing multi-million dollar deals through targeted online campaigns.
                        </p>
                        <button className="flex items-center gap-2 text-brand-cyan font-bold hover:text-brand-cyan-dark transition-colors text-sm">
                            READ MORE <ArrowRight size={16} />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Blogs;
