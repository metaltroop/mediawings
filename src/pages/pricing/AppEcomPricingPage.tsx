import { ShoppingCart, Smartphone, Cpu, Check } from 'lucide-react';
import { useModal } from '../../contexts/ModalContext';

const AppEcomPricingPage = () => {
    const { openModal } = useModal();

    const solutions = [
        {
            title: "E-commerce Store",
            icon: <ShoppingCart className="text-brand-cyan" />,
            price: "2,500",
            desc: "Custom Shopify or WooCommerce development for retail high growth.",
            features: [
                "Custom UX Theme Design",
                "Product & Collection Setup",
                "Payment Gateway Integration",
                "Abandoned Cart Systems",
                "Inventory Management",
                "Mobile Responsive Store",
                "Email Marketing Automations",
                "Performance Optimization"
            ]
        },
        {
            title: "Mobile App (iOS/Android)",
            icon: <Smartphone className="text-pink-500" />,
            price: "8,000",
            desc: "Cross-platform mobile applications built with React Native or Flutter.",
            features: [
                "Full UI/UX Prototype",
                "Push Notifications",
                "User Authentication",
                "In-App Purchases",
                "Social Login Integration",
                "Cloud Database (Firebase/AWS)",
                "Store Submission (App/Play)",
                "Admin Control Panel"
            ]
        },
        {
            title: "Custom Software",
            icon: <Cpu className="text-indigo-600" />,
            price: "15,000",
            desc: "Bespoke SaaS platforms and complex internal business tools.",
            features: [
                "Strategic Product Discovery",
                "Scalable System Architecture",
                "Advanced API Integrations",
                "Role-based Access Control",
                "Data Analytics Dashboard",
                "Security Hardening",
                "Continuous Deployment",
                "Full Source Code Ownership"
            ]
        }
    ];

    return (
        <div className="bg-white">
            <section className="pt-32 pb-16 bg-blue-50/30">
                <div className="max-w-[1440px] mx-auto px-4 md:px-8 text-center text-gray-900">
                    <h1 className="text-4xl md:text-7xl font-black font-heading mb-6 uppercase tracking-tighter">
                        Build For <span className="text-brand-cyan italic">Scale</span>
                    </h1>
                    <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed font-bold">
                        From high-converting stores to complex mobile ecosystems, we engineer digital products that dominate markets.
                    </p>
                </div>
            </section>

            <section className="py-24 max-w-[1440px] mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {solutions.map((item, idx) => (
                        <div key={idx} className="group p-10 rounded-[4rem] border border-gray-100 bg-white hover:border-brand-cyan/50 transition-all duration-500 shadow-sm hover:shadow-2xl">
                            <div className="w-20 h-20 rounded-3xl bg-gray-50 flex items-center justify-center mb-10 transition-transform group-hover:scale-110">
                                {item.icon}
                            </div>
                            <h3 className="text-3xl font-black mb-3 uppercase tracking-tight">{item.title}</h3>
                            <p className="text-gray-400 text-sm mb-10 leading-relaxed font-medium">{item.desc}</p>
                            
                            <div className="flex items-baseline gap-1 mb-10">
                                <span className="text-xs font-black text-gray-400 uppercase tracking-widest block mb-1">Starts at</span>
                                <span className="text-5xl font-black text-gray-900">${item.price}</span>
                            </div>

                            <div className="space-y-4 mb-14">
                                {item.features.map((f, i) => (
                                    <div key={i} className="flex items-center gap-3 text-xs font-black text-gray-700 uppercase tracking-tight">
                                        <Check className="text-brand-cyan w-4 h-4 shrink-0" strokeWidth={5} /> {f}
                                    </div>
                                ))}
                            </div>

                            <button onClick={openModal} className="w-full py-5 rounded-2xl bg-gray-900 text-white font-black uppercase tracking-widest text-xs group-hover:bg-brand-cyan transition-all">Build The Future</button>
                        </div>
                    ))}
                </div>
            </section>

            {/* Tech Stack Banner */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-[1440px] mx-auto px-4 md:px-8">
                    <div className="text-center mb-16">
                        <h2 className="font-black uppercase tracking-widest text-gray-400 text-xs mb-4">Our Technology Arsenal</h2>
                        <div className="flex flex-wrap justify-center gap-12 opacity-40 hover:opacity-100 transition-opacity">
                            {/* Tech logos placeholders */}
                            {["React","Node.js","Shopify","AWS","Swift","Kotlin","Laravel"].map((tech, i) => (
                                <span key={i} className="font-black uppercase tracking-tighter text-gray-900">{tech}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AppEcomPricingPage;
