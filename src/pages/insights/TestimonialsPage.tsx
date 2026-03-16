import { Star, Quote, ChevronRight } from 'lucide-react';
import { useModal } from '../../contexts/ModalContext';

const TestimonialsPage = () => {
    const { openModal } = useModal();

    const testimonials = [
        {
            quote: "MediaWings didn't just rebuild our website; they rebuilt our entire digital growth engine. Our ROAS increased by 3.5x within the first four months of collaboration.",
            author: "Sarah Jenkins",
            role: "VPC Marketing",
            company: "LuxReal Properties",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
            category: "Real Estate"
        },
        {
            quote: "The technical expertise of their dedicated resources is unmatched. It felt like they were a part of our core team, working over hours to ensure our launch was flawless.",
            author: "David Chen",
            role: "Founding Engineer",
            company: "NextGen SaaS",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200",
            category: "Technology"
        },
        {
            quote: "Their data-driven approach to SEO helped us dominate high-competition keywords that we previously thought were out of reach. Truly a partner in every sense.",
            author: "Michael Roberts",
            role: "Marketing Director",
            company: "Global Health Solutions",
            image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=200",
            category: "Pharma"
        },
        {
            quote: "Scaling a D2C brand requires precision creative and aggressive testing. MediaWings provided both, helping us hit our yearly revenue goals 3 months early.",
            author: "Emma Wilson",
            role: "CEO",
            company: "Aura Essentials",
            image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200",
            category: "Ecommerce"
        },
        {
            quote: "The transparency and reporting we get from the PPC team at MediaWings is revolutionary. We finally know exactly where every dollar of our ad spend is going.",
            author: "James Miller",
            role: "Founder",
            company: "Service Pro Connect",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
            category: "Service Providers"
        }
    ];

    const stats = [
        { label: "Client Retention", value: "98%" },
        { label: "Successful Projects", value: "500+" },
        { label: "Total ROAS Generated", value: "$120M+" },
        { label: "Global Team Members", value: "150+" }
    ];

    return (
        <div className="bg-white min-h-screen">
            {/* Hero Section */}
            <section className="pt-32 pb-20 bg-brand-cyan relative overflow-hidden">
                <div className="max-w-[1440px] mx-auto px-4 md:px-8 relative z-10 text-center uppercase">
                    <h1 className="text-5xl md:text-9xl font-black text-white mb-6 tracking-tighter leading-none italic">
                        Real Stories. <br />Real <span className="text-gray-900">Growth.</span>
                    </h1>
                    <p className="max-w-2xl mx-auto text-white text-xl font-bold opacity-80 leading-relaxed mb-12">
                        Don't take our word for it. Hear from the visionaries and leaders we've partnered with to redefine industry standards.
                    </p>
                    <div className="flex justify-center gap-2">
                        {[1,2,3,4,5].map(i => <Star key={i} className="w-8 h-8 fill-white text-white" />)}
                    </div>
                </div>
                
                {/* Visual noise background */}
                <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                     <svg className="w-full h-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                        <defs><pattern id="dots-testimonials" width="10" height="10" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1" fill="white" /></pattern></defs>
                        <rect width="100%" height="100%" fill="url(#dots-testimonials)" />
                     </svg>
                </div>
            </section>

            {/* Stats section */}
            <section className="py-20 bg-gray-900 text-white">
                <div className="max-w-[1440px] mx-auto px-4 md:px-8">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
                        {stats.map((stat, idx) => (
                            <div key={idx}>
                                <div className="text-4xl md:text-6xl font-black text-brand-cyan mb-2 tracking-tighter">{stat.value}</div>
                                <div className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Grid */}
            <section className="py-24">
                <div className="max-w-[1440px] mx-auto px-4 md:px-8">
                    <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
                        {testimonials.map((item, idx) => (
                            <div key={idx} className="break-inside-avoid bg-[#fcfcfc] border border-gray-100 p-10 rounded-[3rem] hover:shadow-2xl transition-all duration-500 group">
                                <Quote className="w-12 h-12 text-brand-cyan/20 mb-8 group-hover:text-brand-cyan transition-colors" />
                                <p className="text-gray-900 text-xl font-bold leading-relaxed mb-10 italic">
                                    "{item.quote}"
                                </p>
                                <div className="flex items-center gap-5 border-t border-gray-100 pt-8">
                                    <div className="w-14 h-14 rounded-2xl overflow-hidden bg-gray-200 shrink-0">
                                        <img src={item.image} alt={item.author} className="w-full h-full object-cover" />
                                    </div>
                                    <div>
                                        <h4 className="text-black font-black uppercase text-sm tracking-tighter leading-none mb-1">{item.author}</h4>
                                        <p className="text-gray-400 text-[10px] font-black uppercase tracking-widest">{item.role} @ {item.company}</p>
                                    </div>
                                </div>
                                <div className="mt-6">
                                    <span className="text-[9px] font-black uppercase tracking-widest text-brand-cyan/60 px-3 py-1 bg-brand-cyan/5 rounded-full">{item.category}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-32 overflow-hidden">
                <div className="max-w-[1440px] mx-auto px-4 md:px-8">
                    <div className="bg-gray-50 rounded-[5rem] p-12 md:p-24 flex flex-col lg:flex-row items-center gap-16 relative">
                        <div className="grow relative z-10 text-center lg:text-left">
                            <h2 className="text-4xl md:text-6xl font-black mb-10 uppercase tracking-tighter leading-none italic">
                                Ready to be our <br />next <span className="text-brand-cyan">Success Story?</span>
                            </h2>
                            <p className="text-lg text-gray-500 font-medium mb-12 max-w-xl">Join the ranks of high-performance brands scaling their digital presence with precision engineering and strategic marketing.</p>
                            <button 
                                onClick={openModal}
                                className="bg-gray-900 text-white px-10 py-5 rounded-full font-black uppercase tracking-widest text-xs hover:bg-black transition-all shadow-xl group flex items-center gap-3 mx-auto lg:mx-0"
                            >
                                Start Your Journey <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                        <div className="w-full lg:w-[450px] shrink-0 rotate-3 group">
                             <div className="aspect-square bg-white rounded-[4rem] shadow-2xl p-10 relative overflow-hidden transition-transform duration-700 group-hover:-rotate-3">
                                 <div className="absolute top-0 right-0 w-32 h-32 bg-brand-cyan/20 blur-3xl rounded-full" />
                                 <div className="flex items-center gap-4 mb-10">
                                     <div className="w-3 h-3 rounded-full bg-red-400" />
                                     <div className="w-3 h-3 rounded-full bg-yellow-400" />
                                     <div className="w-3 h-3 rounded-full bg-green-400" />
                                 </div>
                                 <div className="space-y-6">
                                     <div className="h-4 bg-gray-100 rounded-full w-3/4" />
                                     <div className="h-4 bg-gray-100 rounded-full w-full" />
                                     <div className="h-4 bg-gray-100 rounded-full w-5/6" />
                                     <div className="pt-10 flex items-center justify-between">
                                          <div className="h-12 w-32 bg-brand-cyan/10 rounded-2xl" />
                                          <div className="h-12 w-12 bg-gray-900 rounded-2xl" />
                                     </div>
                                 </div>
                             </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default TestimonialsPage;
