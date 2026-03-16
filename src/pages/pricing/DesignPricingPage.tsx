import { Palette, PenTool, Check } from 'lucide-react';
import { useModal } from '../../contexts/ModalContext';

const DesignPricingPage = () => {
    const { openModal } = useModal();

    const logoPlans = [
        {
            name: "Basic Identity",
            price: "299",
            features: [
                "2 Unique Logo Concepts",
                "High-res PNG/JPG",
                "2 Revision Rounds",
                "Color Palette Selection",
                "Social Media Icons",
                "48 Hour Delivery"
            ]
        },
        {
            name: "Premium Brand",
            price: "899",
            popular: true,
            features: [
                "5 Unique Concepts",
                "Full Vector Source Files",
                "Unlimited Revisions",
                "Brand Style Guide",
                "Stationery Design Set",
                "Secondary Logo Variations"
            ]
        }
    ];

    const creativePackages = [
        {
            name: "Monthly Social Kit",
            price: "450",
            desc: "Consistent visuals for your social channels.",
            features: [
                "15 Custom Graphics",
                "Consistent Brand Style",
                "Ad Creative Design",
                "Banner/Hero Graphics",
                "Story Template Kit"
            ]
        },
        {
            name: "Full Brand Retainer",
            price: "1,500",
            desc: "Your dedicated design department.",
            features: [
                "Unlimited Graph Requests",
                "Priority Turnaround",
                "Packaging Design",
                "Presentation Desks",
                "UI Upgrades Included"
            ]
        }
    ];

    return (
        <div className="bg-white">
            <section className="pt-32 pb-16 bg-brand-cyan/5">
                <div className="max-w-[1440px] mx-auto px-4 md:px-8 text-center">
                    <h1 className="text-4xl md:text-6xl font-black font-heading text-gray-900 mb-6 uppercase tracking-tighter">
                        Design <span className="text-brand-cyan">Investment</span>
                    </h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed font-bold">
                        Visual excellence is not an option—it's a requirement. We craft stunning brand identities and high-performing marketing creatives.
                    </p>
                </div>
            </section>

            {/* Logo Section */}
            <section className="py-24 max-w-[1440px] mx-auto px-4 md:px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <div className="max-w-xl">
                        <h2 className="text-3xl font-black mb-4 uppercase tracking-tight flex items-center gap-3">
                            <PenTool className="text-brand-cyan" /> Logo & Identity
                        </h2>
                        <p className="text-gray-500 font-medium">Build a foundation that lasts. Our logo process involves deep research into your industry and brand values.</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {logoPlans.map((plan, idx) => (
                        <div key={idx} className={`p-10 rounded-3xl border-2 flex flex-col ${plan.popular ? 'border-brand-cyan ring-4 ring-brand-cyan/5' : 'border-gray-100'}`}>
                            <h3 className="text-2xl font-black mb-2 uppercase">{plan.name}</h3>
                            <div className="text-4xl font-black text-gray-900 mb-8">${plan.price}</div>
                            <div className="space-y-4 mb-10 grow">
                                {plan.features.map((f, i) => (
                                    <div key={i} className="flex items-center gap-3 text-sm font-bold text-gray-600">
                                        <Check className="text-brand-cyan w-4 h-4 shrink-0" strokeWidth={3} /> {f}
                                    </div>
                                ))}
                            </div>
                            <button onClick={openModal} className={`w-full py-4 rounded-xl font-bold uppercase tracking-widest text-xs transition-all ${plan.popular ? 'bg-brand-cyan text-white shadow-lg' : 'bg-gray-900 text-white hover:bg-black'}`}>Select Plan</button>
                        </div>
                    ))}
                </div>
            </section>

            {/* Creative Retainer Section */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-[1440px] mx-auto px-4 md:px-8">
                    <h2 className="text-3xl font-black mb-16 uppercase text-center tracking-tight flex items-center justify-center gap-3">
                        <Palette className="text-brand-cyan" /> Monthly Creative Packages
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {creativePackages.map((pkg, idx) => (
                            <div key={idx} className="bg-white p-12 rounded-[2.5rem] shadow-sm border border-gray-100 hover:shadow-xl transition-all group">
                                <div className="flex justify-between items-start mb-8">
                                    <div>
                                        <h4 className="text-2xl font-black mb-1 text-gray-900 uppercase">{pkg.name}</h4>
                                        <p className="text-gray-400 text-sm font-medium">{pkg.desc}</p>
                                    </div>
                                    <div className="text-3xl font-black text-brand-cyan">${pkg.price}<span className="text-xs text-gray-400">/mo</span></div>
                                </div>
                                <div className="grid grid-cols-1 gap-4 mb-10">
                                    {pkg.features.map((f, i) => (
                                        <div key={i} className="flex items-center gap-3 text-sm font-bold text-gray-600">
                                            <div className="w-1.5 h-1.5 bg-brand-cyan rounded-full" /> {f}
                                        </div>
                                    ))}
                                </div>
                                <button onClick={openModal} className="w-full py-4 rounded-xl bg-gray-50 border-2 border-transparent hover:border-brand-cyan transition-all font-black uppercase tracking-widest text-xs">Book Retainer</button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Visuals Matter */}
            <section className="py-24 overflow-hidden">
                <div className="max-w-[1440px] mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div>
                        <h2 className="text-4xl font-black mb-8 uppercase leading-none">Why Quality Design is <span className="text-brand-cyan italic underline underline-offset-8">Non-Negotiable</span></h2>
                        <div className="space-y-8">
                            {[
                                { title: "Instant Authority", desc: "First-class design signals that you are a serious leader in your space." },
                                { title: "Psychological Trust", desc: "Consistency in branding creates a sense of reliability and safety for users." },
                                { title: "Higher Conversion", desc: "Beautifully organized information guides users to take action faster." }
                            ].map((item, idx) => (
                                <div key={idx}>
                                    <h5 className="font-black uppercase text-xl mb-2 flex items-center gap-3">
                                        <div className="w-8 h-px bg-brand-cyan" /> {item.title}
                                    </h5>
                                    <p className="text-gray-500 font-medium pl-11">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="relative">
                        <div className="aspect-video bg-gray-100 rounded-[3rem] overflow-hidden rotate-2 scale-95 shadow-2xl relative z-10">
                            <div className="absolute inset-0 flex items-center justify-center font-black text-gray-200 text-8xl uppercase">Design</div>
                        </div>
                        <div className="absolute inset-0 bg-brand-cyan rounded-[3rem] -rotate-3 scale-95 opacity-20" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default DesignPricingPage;
