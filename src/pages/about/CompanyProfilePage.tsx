import { Download, CheckCircle, Globe, ShieldCheck, Zap } from 'lucide-react';

const CompanyProfilePage = () => {
    return (
        <div className="bg-white min-h-screen">
            {/* Hero Section */}
            <section className="pt-32 pb-20 bg-gray-50 uppercase relative overflow-hidden">
                <div className="max-w-[1440px] mx-auto px-4 md:px-8 relative z-10 flex flex-col md:flex-row justify-between items-end gap-12">
                    <div className="max-w-4xl">
                        <span className="text-brand-cyan font-black tracking-widest text-xs mb-6 block">CORPORATE OVERVIEW</span>
                        <h1 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter italic leading-none uppercase">
                            Company <br /><span className="text-brand-cyan underline decoration-black/10 underline-offset-8">Profile.</span>
                        </h1>
                    </div>
                    <button className="bg-gray-900 text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-black transition-all shadow-xl flex items-center gap-3 mb-4">
                        Download PDF <Download className="w-4 h-4" />
                    </button>
                </div>
            </section>

            {/* Profile Content */}
            <section className="py-24 max-w-[1440px] mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                    <div className="lg:col-span-2">
                        <h2 className="text-3xl font-black mb-8 uppercase tracking-tight italic border-b-4 border-brand-cyan w-fit pb-2">Business Excellence</h2>
                        <div className="prose prose-lg text-gray-600 font-medium space-y-8 leading-relaxed">
                            <p>Founded in 2011, MediaWings has evolved from a boutique marketing firm into a global powerhouse of digital solutions. Our core strength lies in our ability to merge high-level creative thinking with deep technical expertise.</p>
                            <p>With head offices in Mumbai and strategic hubs across Dubai, Singapore, and New York, we provide 24/7 support to over 500+ global brands ranging from Fortune 500 enterprises to high-growth startups.</p>
                        </div>

                        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div className="p-10 bg-gray-50 rounded-[3rem] border border-gray-100">
                                <h3 className="text-xl font-black mb-6 uppercase">Service Domains</h3>
                                <ul className="space-y-4">
                                    {[
                                        "360° Digital Marketing",
                                        "Enterprise Web Development",
                                        "Mobile Ecosystems (iOS/Android)",
                                        "Cloud Infrastructure & Migration",
                                        "Brand Strategy & Communication"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 font-bold text-sm text-gray-700">
                                            <CheckCircle className="text-brand-cyan w-4 h-4" /> {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="p-10 bg-brand-cyan/5 rounded-[3rem] border border-brand-cyan/20">
                                <h3 className="text-xl font-black mb-6 uppercase text-brand-cyan">Why MediaWings?</h3>
                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <Zap className="text-brand-cyan w-6 h-6 shrink-0" />
                                        <div>
                                            <h4 className="font-black text-xs uppercase mb-1">ROAS Focused</h4>
                                            <p className="text-xs text-gray-500">Every campaign is optimized for return on ad spend.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <ShieldCheck className="text-brand-cyan w-6 h-6 shrink-0" />
                                        <div>
                                            <h4 className="font-black text-xs uppercase mb-1">ISO Certified</h4>
                                            <p className="text-xs text-gray-500">Highest standards of data security and quality management.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-8">
                        <div className="p-12 bg-gray-900 rounded-[3rem] text-white">
                            <h3 className="text-2xl font-black mb-8 uppercase italic border-b border-white/10 pb-4">Corporate Info</h3>
                            <div className="space-y-6">
                                <div>
                                    <p className="text-brand-cyan font-black text-[10px] uppercase tracking-widest mb-1">Year Founded</p>
                                    <p className="font-bold text-lg">2011</p>
                                </div>
                                <div>
                                    <p className="text-brand-cyan font-black text-[10px] uppercase tracking-widest mb-1">Headquarters</p>
                                    <p className="font-bold text-lg">Mumbai, India</p>
                                </div>
                                <div>
                                    <p className="text-brand-cyan font-black text-[10px] uppercase tracking-widest mb-1">Global Presence</p>
                                    <p className="font-bold text-lg">USA, UK, UAE, SE Asia</p>
                                </div>
                                <div>
                                    <p className="text-brand-cyan font-black text-[10px] uppercase tracking-widest mb-1">Certifications</p>
                                    <p className="font-bold text-lg">Google Partner, AWS Certified, ISO 9001:2015</p>
                                </div>
                            </div>
                        </div>
                        <div className="aspect-square bg-brand-cyan rounded-[3rem] flex items-center justify-center text-center p-12">
                             <Globe className="text-white w-24 h-24 opacity-20 absolute" />
                             <p className="text-white text-3xl font-black italic uppercase tracking-tighter leading-tight relative">Driving Innovation <br />Across Continents.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CompanyProfilePage;
