import { Check, Quote, Sparkles, FileText } from 'lucide-react';
import { useModal } from '../../contexts/ModalContext';

const ContentPricingPage = () => {
    const { openModal } = useModal();

    const packages = [
        {
            name: "SEO Copywriting",
            price: "120",
            unit: "per 1000 words",
            desc: "Search-optimized copy that ranks and converts.",
            features: [
                "Keyword Research Included",
                "Meta Description Writing",
                "2 Revision Rounds",
                "Plagiarism Report",
                "Formatting for Web",
                "LSI Keyword Integration"
            ],
            icon: <Sparkles className="text-brand-cyan" />
        },
        {
            name: "Thought Leadership",
            price: "350",
            unit: "per Pillar Grade Post",
            desc: "Expert-level content for authority building.",
            features: [
                "In-depth Industry Research",
                "Interviews & Primary Sources",
                "Executive Brand Voice",
                "Social Media Snippets",
                "Email Newsletter Version",
                "Unlimited Revisions"
            ],
            icon: <Quote className="text-brand-red" />
        },
        {
            name: "Website Overhaul",
            price: "1,200",
            unit: "per 5 Page Site",
            desc: "Full strategic copy for your core website pages.",
            features: [
                "Conversion-led Messaging",
                "Competitive Analysis",
                "Unique Selling Prop (USP)",
                "CTA Optimization",
                "Tone of Voice Guide",
                "Team Collaboration Call"
            ],
            icon: <FileText className="text-indigo-600" />
        }
    ];

    return (
        <div className="bg-white">
            <section className="pt-32 pb-16 bg-gray-50/80">
                <div className="max-w-[1440px] mx-auto px-4 md:px-8 text-center">
                    <h1 className="text-4xl md:text-6xl font-black font-heading text-gray-900 mb-6 uppercase tracking-tighter">
                        Content <span className="text-brand-cyan">That Sells</span>
                    </h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed font-bold">
                        Words are the currency of the digital web. We craft compelling narratives that bridge the gap between your brand and your audience.
                    </p>
                </div>
            </section>

            {/* Pricing Cards */}
            <section className="py-24 max-w-[1440px] mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {packages.map((pkg, idx) => (
                        <div key={idx} className="group p-10 rounded-[3rem] border border-gray-100 bg-white hover:bg-gray-900 transition-all duration-500 shadow-sm hover:shadow-2xl">
                            <div className="w-16 h-16 rounded-2xl bg-gray-50 group-hover:bg-white/10 flex items-center justify-center mb-8 transition-colors">
                                {pkg.icon}
                            </div>
                            <h3 className="text-2xl font-black mb-1 group-hover:text-white uppercase transition-colors">{pkg.name}</h3>
                            <p className="text-gray-400 text-sm mb-8 font-medium">{pkg.desc}</p>
                            
                            <div className="flex items-baseline gap-1 mb-10">
                                <span className="text-4xl font-black text-gray-900 group-hover:text-brand-cyan transition-colors">${pkg.price}</span>
                                <span className="text-gray-400 text-xs font-bold uppercase tracking-widest">{pkg.unit}</span>
                            </div>

                            <div className="space-y-4 mb-12">
                                {pkg.features.map((f, i) => (
                                    <div key={i} className="flex items-center gap-3 text-[13px] font-bold text-gray-600 group-hover:text-gray-400">
                                        <Check className="text-brand-cyan w-4 h-4 shrink-0" strokeWidth={3} /> {f}
                                    </div>
                                ))}
                            </div>

                            <button onClick={openModal} className="w-full py-4 rounded-2xl bg-brand-cyan text-white font-black uppercase tracking-widest text-xs hover:scale-105 transition-all">Order Content</button>
                        </div>
                    ))}
                </div>
            </section>

            {/* Content Stats/Trust */}
            <section className="py-24 bg-brand-cyan text-white">
                <div className="max-w-[1440px] mx-auto px-4 md:px-8 text-center lg:text-left flex flex-col lg:flex-row items-center gap-16">
                    <div className="grow">
                        <h2 className="text-3xl md:text-5xl font-black mb-8 uppercase leading-tight italic">Words Aren't Just Filler.</h2>
                        <p className="text-xl font-bold opacity-80 mb-10 max-w-xl">Great content identifies a problem, builds trust, and offers the single best solution. Your brand deserves nothing less.</p>
                        <div className="grid grid-cols-2 gap-10">
                            <div>
                                <div className="text-5xl font-black mb-2 tracking-tighter">1.2M+</div>
                                <div className="text-xs font-black uppercase tracking-widest opacity-60">Words Written per year</div>
                            </div>
                            <div>
                                <div className="text-5xl font-black mb-2 tracking-tighter">85%</div>
                                <div className="text-xs font-black uppercase tracking-widest opacity-60">Avg. Increase in CTR</div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-[500px] shrink-0">
                        <div className="bg-white p-12 rounded-[3.5rem] shadow-2xl relative">
                            <Quote className="absolute top-10 right-12 text-brand-cyan/20 w-16 h-16" />
                            <p className="text-gray-900 font-black text-lg mb-8 leading-relaxed italic">"The content team at MediaWings transformed our vague ideas into a brand voice that resonates. Our conversion rate jumped significantly after the web copy refresh."</p>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-gray-200 rounded-full" />
                                <div>
                                    <h6 className="text-gray-900 font-bold uppercase text-sm">Marketing Director</h6>
                                    <span className="text-gray-400 text-xs font-bold tracking-widest uppercase">Global FinTech</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContentPricingPage;
