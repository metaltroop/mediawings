

const ContactForm = () => {
    return (
        <section className="py-24 bg-brand-lavender relative">
            <div className="max-w-[800px] mx-auto px-4 md:px-8 bg-white rounded-3xl shadow-xl p-8 md:p-12 -mt-40 relative z-20 top-20">

                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold font-heading text-brand-cyan mb-4">Lets Get Project Started</h2>
                    <p className="text-gray-500">Fill out the form below and our team will get back to you within 24 hours.</p>
                </div>

                <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <input type="text" placeholder="Name*" className="w-full border border-gray-200 rounded-md p-3 text-sm focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan outline-none bg-gray-50" required />
                        </div>
                        <div>
                            <input type="email" placeholder="Email address*" className="w-full border border-gray-200 rounded-md p-3 text-sm focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan outline-none bg-gray-50" required />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="flex border border-gray-200 rounded-md overflow-hidden focus-within:border-brand-cyan focus-within:ring-1 focus-within:ring-brand-cyan bg-gray-50">
                            <select className="bg-transparent border-r border-gray-200 px-3 text-sm outline-none w-24">
                                <option value="+91">🇮🇳 +91</option>
                                <option value="+1">🇺🇸 +1</option>
                                <option value="+44">🇬🇧 +44</option>
                            </select>
                            <input type="tel" placeholder="Phone number*" className="w-full p-3 text-sm outline-none bg-transparent" required />
                        </div>
                        <div>
                            <input type="text" placeholder="Company name" className="w-full border border-gray-200 rounded-md p-3 text-sm focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan outline-none bg-gray-50" />
                        </div>
                    </div>

                    <div className="flex border border-gray-200 rounded-md overflow-hidden focus-within:border-brand-cyan focus-within:ring-1 focus-within:ring-brand-cyan bg-gray-50">
                        <span className="border-r border-gray-200 px-4 py-3 text-sm flex items-center font-bold text-gray-500">$</span>
                        <select className="w-full p-3 text-sm outline-none bg-transparent text-gray-500" required defaultValue="">
                            <option value="" disabled>Budget range*</option>
                            <option value="under5k">Under $5,000</option>
                            <option value="5k_10k">$5,000 - $10,000</option>
                            <option value="10k_50k">$10,000 - $50,000</option>
                            <option value="over50k">Over $50,000</option>
                        </select>
                    </div>

                    <div>
                        <p className="font-semibold text-gray-900 text-sm mb-4">Select Services*</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-3 gap-x-2">
                            {[
                                'Web development', 'Ecommerce', 'Custom Software',
                                'Mob Apps', 'Digital Marketing', 'SEO',
                                'Social Media', 'Paid Ads', 'Lead Gen',
                                'Influencer Marketing', 'Creative & Branding', 'Business Email',
                                'Cloud Mail & Hosting', 'Hire Resources'
                            ].map((service) => (
                                <label key={service} className="flex items-center gap-2 cursor-pointer group">
                                    <input type="checkbox" className="w-4 h-4 text-brand-cyan rounded border-gray-300 focus:ring-brand-cyan focus:ring-opacity-25 transition-colors cursor-pointer" />
                                    <span className="text-xs text-gray-600 group-hover:text-gray-900 transition-colors">{service}</span>
                                </label>
                            ))}
                        </div>
                    </div>

                    <div>
                        <textarea
                            placeholder="Briefly describe your needs, i.e. brief your tentative start date, references, budgets, etc."
                            className="w-full border border-gray-200 rounded-md p-4 text-sm focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan outline-none h-32 resize-none bg-gray-50"
                        ></textarea>
                    </div>

                    <button type="submit" className="w-full bg-brand-cyan hover:bg-brand-cyan-dark text-white font-bold py-4 rounded-md transition-colors text-lg shadow-md hover:shadow-lg">
                        Send Message
                    </button>
                </form>
            </div>

            {/* Spacer block so footer isn't overlapped by the negative margin form */}
            <div className="h-40"></div>
        </section>
    );
};

export default ContactForm;
