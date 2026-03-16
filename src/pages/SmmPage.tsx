

const SmmPage = () => {
    return (
        <>
            {/* SMM Hero Section */}
            <section className="bg-linear-to-r from-[#e6f7eb] to-[#f4faff] pt-32 pb-20 relative overflow-hidden">
                <div className="max-w-[1000px] mx-auto px-4 text-center relative z-10">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black font-heading text-black mb-6">
                        Unlock More Social Media<br />With Mediawings
                    </h1>
                    <p className="text-gray-700 font-medium text-[15px] md:text-base leading-relaxed mb-10 max-w-4xl mx-auto">
                        Your brand's blueprint for full-spectrum social media dominance. We integrate strategies, create highly engaging content, community management, and paid social campaigns. Our social media experts build organic resonance that converts followers into brand loyalists.
                    </p>
                    <button className="bg-[#00adef] hover:bg-[#0090c0] text-white font-bold py-3 px-10 rounded-md transition-all shadow-md hover:shadow-lg uppercase tracking-wide text-sm mb-16 inline-block">
                        LET'S TALK
                    </button>

                    {/* Rating Badges (Reused from SEO) */}
                    <div className="flex flex-wrap justify-center gap-4 md:gap-6 mt-8">
                        {/* Google */}
                        <div className="bg-white rounded-lg shadow-sm px-6 py-2.5 flex items-center gap-3">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google" className="h-4" />
                            <div className="flex flex-col items-start leading-tight">
                                <div className="flex gap-0.5 text-yellow-400 text-[10px]">★★★★★</div>
                                <span className="font-bold text-xs">5.0/5.0</span>
                            </div>
                        </div>

                        {/* Clutch */}
                        <div className="bg-white rounded-lg shadow-sm px-6 py-2.5 flex items-center gap-3">
                            <span className="font-black text-black text-sm">Clutch</span>
                            <div className="flex flex-col items-start leading-tight">
                                <div className="flex gap-0.5 text-yellow-400 text-[10px]">★★★★★</div>
                                <span className="font-bold text-xs">4.9/5.0</span>
                            </div>
                        </div>

                        {/* Trustpilot */}
                        <div className="bg-white rounded-lg shadow-sm px-6 py-2.5 flex items-center gap-3">
                            <span className="font-bold text-green-600 text-sm flex items-center gap-1">★ Trustpilot</span>
                            <div className="flex flex-col items-start leading-tight">
                                <div className="flex gap-0.5 text-green-500 text-[10px]">★★★★★</div>
                                <span className="font-bold text-xs">4.9/5.0</span>
                            </div>
                        </div>

                        {/* GoodFirms */}
                        <div className="bg-white rounded-lg shadow-sm px-6 py-2.5 flex items-center gap-3">
                            <span className="font-black text-blue-800 text-sm">GoodFirms</span>
                            <div className="flex flex-col items-start leading-tight">
                                <div className="flex gap-0.5 text-yellow-400 text-[10px]">★★★★★</div>
                                <span className="font-bold text-xs">5.0/5.0</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Partner / Certification Badges Strip */}
            <section className="py-8 bg-white border-b border-gray-100">
                <div className="max-w-[1200px] mx-auto px-4">
                    <h3 className="text-center font-bold text-lg mb-8 text-black">Proven Results, Scalable Growth</h3>
                    <p className="text-center text-gray-500 text-sm mb-8 -mt-4">Join over 10,000+ globally recognized brands who trust our SMM services.</p>
                    <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                        {/* Placeholder Logos */}
                        <div className="h-8 md:h-10 text-xl font-bold font-serif italic text-gray-800">Forbes</div>
                        <div className="h-8 md:h-10 text-xl font-bold text-gray-800">Entrepreneur</div>
                        <div className="h-8 md:h-10 text-xl font-bold tracking-tighter text-gray-800">TechCrunch</div>
                        <div className="h-8 md:h-10 text-xl font-black uppercase text-gray-800">Inc.</div>
                        <div className="h-8 md:h-10 px-3 py-1 bg-gray-800 text-white font-bold text-lg">WIRED</div>
                    </div>
                </div>
            </section>

            {/* SMM Features Grid */}
            <section className="py-20 bg-white">
                <div className="max-w-[1200px] mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {/* Card 1 - Pink */}
                        <div className="bg-[#fff0f4] p-8 rounded-xl transition-transform hover:-translate-y-1 duration-300">
                            <div className="w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center mb-6">
                                <span className="text-pink-500 text-2xl font-black">@</span>
                            </div>
                            <h3 className="font-bold text-lg mb-3">Profile Setup</h3>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                We establish and optimize your brand profiles across all relevant social platforms to ensure maximum visibility and a professional appearance from day one.
                            </p>
                        </div>

                        {/* Card 2 - Yellow */}
                        <div className="bg-[#fffbeb] p-8 rounded-xl transition-transform hover:-translate-y-1 duration-300">
                            <div className="w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center mb-6">
                                <span className="text-yellow-500 text-xl">📝</span>
                            </div>
                            <h3 className="font-bold text-lg mb-3">Content Strategy</h3>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                Our team develops comprehensive content calendars featuring high-quality graphics, videos, and compelling copy tailored to your audience.
                            </p>
                        </div>

                        {/* Card 3 - Blue */}
                        <div className="bg-[#f0fbff] p-8 rounded-xl transition-transform hover:-translate-y-1 duration-300">
                            <div className="w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center mb-6">
                                <span className="text-blue-500 text-xl">🤝</span>
                            </div>
                            <h3 className="font-bold text-lg mb-3">Community Mgmt</h3>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                We actively engage with your followers, responding to comments and messages to build a loyal and interactive online community.
                            </p>
                        </div>

                        {/* Card 4 - Purple */}
                        <div className="bg-[#f3f0ff] p-8 rounded-xl transition-transform hover:-translate-y-1 duration-300">
                            <div className="w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center mb-6">
                                <span className="text-purple-500 text-xl">📈</span>
                            </div>
                            <h3 className="font-bold text-lg mb-3">Paid Campaign Ads</h3>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                Maximize your ROI with targeted paid social media campaigns designed to generate leads, drive traffic, and boost conversions.
                            </p>
                        </div>

                        {/* Card 5 - Purple (Lighter) */}
                        <div className="bg-[#f5f3ff] p-8 rounded-xl transition-transform hover:-translate-y-1 duration-300">
                            <div className="w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center mb-6">
                                <span className="text-purple-600 text-xl">📊</span>
                            </div>
                            <h3 className="font-bold text-lg mb-3">Insights & Analytics</h3>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                Make data-driven decisions with our comprehensive performance tracking and customized reporting on all social channels.
                            </p>
                        </div>

                        {/* Card 6 - Green (Mint) */}
                        <div className="bg-[#f0fdf4] p-8 rounded-xl transition-transform hover:-translate-y-1 duration-300">
                            <div className="w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center mb-6">
                                <span className="text-green-500 text-xl">✨</span>
                            </div>
                            <h3 className="font-bold text-lg mb-3">Brand Styling</h3>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                Maintain a cohesive and striking visual identity across all platforms to instantly capture attention and build brand recognition.
                            </p>
                        </div>

                        {/* Card 7 - Orange */}
                        <div className="bg-[#fff7ed] p-8 rounded-xl transition-transform hover:-translate-y-1 duration-300">
                            <div className="w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center mb-6">
                                <span className="text-orange-500 text-xl">🎯</span>
                            </div>
                            <h3 className="font-bold text-lg mb-3">Targeted Outreach</h3>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                Connect specifically with your ideal customer demographics through advanced targeting and tailored messaging strategies.
                            </p>
                        </div>

                        {/* Card 8 - Pink/Red */}
                        <div className="bg-[#fff1f2] p-8 rounded-xl transition-transform hover:-translate-y-1 duration-300">
                            <div className="w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center mb-6">
                                <span className="text-red-500 text-xl">🚀</span>
                            </div>
                            <h3 className="font-bold text-lg mb-3">Growth Tactics</h3>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                Implement proven viral marketing and algorithmic growth strategies to rapidly scale your audience and overall reach.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Performance Stats Strip */}
            <section className="bg-[#1a132b] py-16 text-center">
                <div className="max-w-[1200px] mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                        {/* Stat 1 */}
                        <div className="bg-white rounded-xl p-8 flex flex-col items-center justify-center col-span-2 md:col-span-1">
                            <div className="w-12 h-12 rounded-full border-2 border-brand-cyan flex items-center justify-center mb-4">
                                <span className="text-brand-cyan font-bold">👤</span>
                            </div>
                            <h4 className="text-sm font-bold text-gray-800 uppercase tracking-widest mb-2">12k+</h4>
                            <p className="text-[11px] text-gray-500 uppercase font-semibold">Satisfied Customers</p>
                        </div>

                        {/* Stat 2 */}
                        <div className="bg-white rounded-xl p-8 flex flex-col items-center justify-center">
                            <div className="w-12 h-12 rounded-full border-2 border-brand-cyan flex items-center justify-center mb-4">
                                <span className="text-brand-cyan font-bold">🌍</span>
                            </div>
                            <h4 className="text-sm font-bold text-gray-800 uppercase tracking-widest mb-2">180+</h4>
                            <p className="text-[11px] text-gray-500 uppercase font-semibold">Countries Served</p>
                        </div>

                        {/* Stat 3 */}
                        <div className="bg-white rounded-xl p-8 flex flex-col items-center justify-center">
                            <div className="w-12 h-12 rounded-full border-2 border-brand-cyan flex items-center justify-center mb-4">
                                <span className="text-brand-cyan font-bold">💼</span>
                            </div>
                            <h4 className="text-sm font-bold text-gray-800 uppercase tracking-widest mb-2">50%</h4>
                            <p className="text-[11px] text-gray-500 uppercase font-semibold">Employee Tenure</p>
                        </div>

                        {/* Stat 4 */}
                        <div className="bg-white rounded-xl p-8 flex flex-col items-center justify-center">
                            <div className="w-12 h-12 rounded-full border-2 border-brand-cyan flex items-center justify-center mb-4">
                                <span className="text-brand-cyan font-bold">🎧</span>
                            </div>
                            <h4 className="text-sm font-bold text-gray-800 uppercase tracking-widest mb-2">24x7</h4>
                            <p className="text-[11px] text-gray-500 uppercase font-semibold">Customer Support</p>
                        </div>

                        {/* Stat 5 */}
                        <div className="bg-white rounded-xl p-8 flex flex-col items-center justify-center">
                            <div className="w-12 h-12 rounded-full border-2 border-brand-cyan flex items-center justify-center mb-4">
                                <span className="text-brand-cyan font-bold">⭐</span>
                            </div>
                            <h4 className="text-sm font-bold text-gray-800 uppercase tracking-widest mb-2">12+</h4>
                            <p className="text-[11px] text-gray-500 uppercase font-semibold">Years In Business</p>
                        </div>
                    </div>
                </div>
            </section>
            {/* SMM FAQ Section */}
            <section className="py-20 bg-gray-50 border-t border-gray-100">
                <div className="max-w-[800px] mx-auto px-4">
                    <h2 className="text-center text-3xl font-black mb-12 text-black uppercase">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        {/* FAQ 1 */}
                        <div className="border border-gray-200 bg-white rounded-lg overflow-hidden">
                            <button
                                className="w-full text-left px-6 py-4 font-bold text-gray-900 flex justify-between items-center focus:outline-none"
                                onClick={(e) => {
                                    const content = e.currentTarget.nextElementSibling as HTMLElement;
                                    const icon = e.currentTarget.querySelector('span');
                                    if (content.style.maxHeight) {
                                        content.style.maxHeight = '';
                                        if (icon) icon.textContent = '+';
                                    } else {
                                        content.style.maxHeight = content.scrollHeight + 'px';
                                        if (icon) icon.textContent = '-';
                                    }
                                }}
                            >
                                Which social media platforms should my business be on?
                                <span className="text-brand-cyan text-xl leading-none font-normal transition-transform duration-300">-</span>
                            </button>
                            <div className="max-h-96 overflow-hidden transition-all duration-300 ease-in-out">
                                <div className="px-6 pb-4 text-gray-600 text-sm leading-relaxed border-t border-gray-50 pt-2">
                                    It depends entirely on your target audience and industry. B2B companies often thrive on LinkedIn and Twitter, while visually-driven B2C brands do best on Instagram, Pinterest, or TikTok. We determine the optimal mix during our initial strategy phase based on where your customers actually spend their time.
                                </div>
                            </div>
                        </div>

                        {/* FAQ 2 */}
                        <div className="border border-gray-200 bg-white rounded-lg overflow-hidden">
                            <button
                                className="w-full text-left px-6 py-4 font-bold text-gray-900 flex justify-between items-center focus:outline-none"
                                onClick={(e) => {
                                    const content = e.currentTarget.nextElementSibling as HTMLElement;
                                    const icon = e.currentTarget.querySelector('span');
                                    if (content.style.maxHeight) {
                                        content.style.maxHeight = '';
                                        if (icon) icon.textContent = '+';
                                    } else {
                                        content.style.maxHeight = content.scrollHeight + 'px';
                                        if (icon) icon.textContent = '-';
                                    }
                                }}
                            >
                                How often will you post on my accounts?
                                <span className="text-gray-400 text-xl leading-none font-normal transition-transform duration-300">+</span>
                            </button>
                            <div className="max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                                <div className="px-6 pb-4 text-gray-600 text-sm leading-relaxed border-t border-gray-50 pt-2">
                                    Posting frequency is customized to the platform and your specific goals. Generally, we recommend 3-5 high-quality posts per week on Instagram/Facebook, and more frequent, agile posting on platforms like X (Twitter). Quality and consistency always trump sheer volume.
                                </div>
                            </div>
                        </div>

                        {/* FAQ 3 */}
                        <div className="border border-gray-200 bg-white rounded-lg overflow-hidden">
                            <button
                                className="w-full text-left px-6 py-4 font-bold text-gray-900 flex justify-between items-center focus:outline-none"
                                onClick={(e) => {
                                    const content = e.currentTarget.nextElementSibling as HTMLElement;
                                    const icon = e.currentTarget.querySelector('span');
                                    if (content.style.maxHeight) {
                                        content.style.maxHeight = '';
                                        if (icon) icon.textContent = '+';
                                    } else {
                                        content.style.maxHeight = content.scrollHeight + 'px';
                                        if (icon) icon.textContent = '-';
                                    }
                                }}
                            >
                                Do I have to provide the content (images/videos)?
                                <span className="text-gray-400 text-xl leading-none font-normal transition-transform duration-300">+</span>
                            </button>
                            <div className="max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                                <div className="px-6 pb-4 text-gray-600 text-sm leading-relaxed border-t border-gray-50 pt-2">
                                    Not necessarily. We have an in-house creative team capable of designing bespoke graphics, editing videos, and writing all copy. However, we love collaborating! If you have in-house assets, product photos, or team videos, we will happily integrate them into the premium content calendar.
                                </div>
                            </div>
                        </div>

                        {/* FAQ 4 */}
                        <div className="border border-gray-200 bg-white rounded-lg overflow-hidden">
                            <button
                                className="w-full text-left px-6 py-4 font-bold text-gray-900 flex justify-between items-center focus:outline-none"
                                onClick={(e) => {
                                    const content = e.currentTarget.nextElementSibling as HTMLElement;
                                    const icon = e.currentTarget.querySelector('span');
                                    if (content.style.maxHeight) {
                                        content.style.maxHeight = '';
                                        if (icon) icon.textContent = '+';
                                    } else {
                                        content.style.maxHeight = content.scrollHeight + 'px';
                                        if (icon) icon.textContent = '-';
                                    }
                                }}
                            >
                                Do you handle responses to comments and direct messages?
                                <span className="text-gray-400 text-xl leading-none font-normal transition-transform duration-300">+</span>
                            </button>
                            <div className="max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                                <div className="px-6 pb-4 text-gray-600 text-sm leading-relaxed border-t border-gray-50 pt-2">
                                    Yes. Community management is a core part of our service. We monitor your channels to engage with commenters, handle basic customer service inquiries based on guidelines we establish with you, and escalate complex issues to your team immediately.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Bottom Lead Form */}
            <section className="bg-brand-lavender py-20 border-t border-purple-100">
                <div className="max-w-[700px] mx-auto px-4">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl md:text-4xl font-black text-black mb-4">Let's Get Project Started</h2>
                        <p className="text-gray-600 text-sm">We're ready to amplify your social presence. Fill out the form below and our SMM strategists will be in touch shortly.</p>
                    </div>

                    <form className="bg-white p-8 rounded-xl shadow-lg border border-purple-50">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                            <div>
                                <label className="block text-xs font-bold text-gray-700 mb-1.5 uppercase">Name *</label>
                                <input type="text" className="w-full bg-[#f8f9fa] border border-gray-200 rounded-md px-4 py-3 text-sm focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan" placeholder="John Doe" required />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-gray-700 mb-1.5 uppercase">Email address *</label>
                                <input type="email" className="w-full bg-[#f8f9fa] border border-gray-200 rounded-md px-4 py-3 text-sm focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan" placeholder="john@example.com" required />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                            <div>
                                <label className="block text-xs font-bold text-gray-700 mb-1.5 uppercase">Phone Number *</label>
                                <input type="tel" className="w-full bg-[#f8f9fa] border border-gray-200 rounded-md px-4 py-3 text-sm focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan" placeholder="+1 (555) 000-0000" required />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-gray-700 mb-1.5 uppercase">Company Name</label>
                                <input type="text" className="w-full bg-[#f8f9fa] border border-gray-200 rounded-md px-4 py-3 text-sm focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan" placeholder="Your Company" />
                            </div>
                        </div>

                        <div className="mb-6">
                            <label className="block text-xs font-bold text-gray-700 mb-3 uppercase">I Need Services For *</label>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
                                    <input type="checkbox" className="w-4 h-4 text-brand-cyan focus:ring-brand-cyan border-gray-300 rounded" />
                                    <span>Organic SMM</span>
                                </label>
                                <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
                                    <input type="checkbox" className="w-4 h-4 text-brand-cyan focus:ring-brand-cyan border-gray-300 rounded" />
                                    <span>Paid Social Ads</span>
                                </label>
                                <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
                                    <input type="checkbox" className="w-4 h-4 text-brand-cyan focus:ring-brand-cyan border-gray-300 rounded" />
                                    <span>Content Creation</span>
                                </label>
                                <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
                                    <input type="checkbox" className="w-4 h-4 text-brand-cyan focus:ring-brand-cyan border-gray-300 rounded" />
                                    <span>Influencer Mktg</span>
                                </label>
                            </div>
                        </div>

                        <div className="mb-8">
                            <label className="block text-xs font-bold text-gray-700 mb-1.5 uppercase">Message *</label>
                            <textarea className="w-full bg-[#f8f9fa] border border-gray-200 rounded-md px-4 py-3 text-sm focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan min-h-[100px]" placeholder="Tell us about your social media goals..." required></textarea>
                        </div>

                        <button type="button" className="w-full bg-brand-cyan hover:bg-[#0090ad] text-white font-bold py-4 rounded-md transition-colors shadow-md text-sm uppercase tracking-wide">
                            Request Proposal
                        </button>
                    </form>
                </div>
            </section>

        </>
    );
};

export default SmmPage;
