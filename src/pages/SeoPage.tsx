
const SeoPage = () => {
    return (
        <>
            {/* SEO Hero Section */}
            <section className="bg-[#fff0f4] pt-32 pb-20 relative overflow-hidden">
                <div className="max-w-[1000px] mx-auto px-4 text-center relative z-10">
                    <h1 className="text-5xl md:text-6xl font-black font-heading text-black mb-6">
                        Best SEO Agency
                    </h1>
                    <p className="text-gray-700 font-medium text-[15px] md:text-base leading-relaxed mb-10 max-w-4xl mx-auto">
                        Our Best-in-Class SEO Agency In India Offers Revenue-driven Search Engine Optimization Services To Our Clients.
                        We Formulate Cutting-Edge SEO Strategies And Tactics That Have Handed 85% To 250% Growth
                        In Organic Revenue For Businesses Within Diverse Industries Worldwide.
                    </p>
                    <button className="bg-[#00adef] hover:bg-[#0090c0] text-white font-bold py-3 px-10 rounded-md transition-all shadow-md hover:shadow-lg uppercase tracking-wide text-sm mb-16 inline-block">
                        LET'S TALK
                    </button>

                    {/* Rating Badges */}
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

            {/* Partner Badges Strip */}
            <section className="bg-white border-b border-gray-100 py-8">
                <div className="max-w-[1440px] mx-auto px-4 md:px-8 text-center">
                    <h2 className="text-xl md:text-2xl font-black font-heading text-black mb-6">
                        India's Top SEO Agency for Global Brands
                    </h2>

                    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-300">
                        {/* Google Partner Placeholder */}
                        <div className="flex items-center gap-2 font-bold text-gray-800 text-lg">
                            <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs">G</div>
                            Google Partner
                        </div>
                        {/* Bing Ads Placeholder */}
                        <div className="flex items-center gap-2 font-bold text-gray-800 text-lg">
                            <div className="w-8 h-8 rounded-full bg-cyan-100 text-cyan-600 flex items-center justify-center text-xs">B</div>
                            Bing Ads Professional
                        </div>
                        {/* Hubspot Placeholder */}
                        <div className="flex items-center gap-2 font-bold text-gray-800 text-lg">
                            <div className="w-8 h-8 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center text-xs">H</div>
                            HubSpot Certified
                        </div>
                        {/* Shopify Placeholder */}
                        <div className="flex items-center gap-2 font-bold text-gray-800 text-lg">
                            <div className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xs">S</div>
                            Shopify Partner
                        </div>
                    </div>
                </div>
            </section>

            {/* SEO Features Grid */}
            <section className="bg-white py-16">
                <div className="max-w-[1440px] mx-auto px-4 md:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                        {/* Card 1 */}
                        <div className="bg-red-50 p-8 rounded-xl hover:-translate-y-1 transition-transform duration-300">
                            <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-red-500 mb-6 shadow-sm text-2xl">
                                🎯
                            </div>
                            <h3 className="font-bold text-lg mb-3">Competitive Analysis</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                We evaluate your competitors' strategies, identifying their strengths and weaknesses to carve out a unique positioning for your brand.
                            </p>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-yellow-50 p-8 rounded-xl hover:-translate-y-1 transition-transform duration-300">
                            <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-yellow-500 mb-6 shadow-sm text-2xl">
                                🔍
                            </div>
                            <h3 className="font-bold text-lg mb-3">Targeted Keyword Research</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Beyond mere search volume, we pinpoint high-intent keywords that align with your audience's exact search behavior.
                            </p>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-blue-50 p-8 rounded-xl hover:-translate-y-1 transition-transform duration-300">
                            <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-blue-500 mb-6 shadow-sm text-2xl">
                                ⚙️
                            </div>
                            <h3 className="font-bold text-lg mb-3">On-Page Optimization</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                We meticulously enhance your website's elements—from meta tags to internal linking—ensuring optimal relevance and user experience.
                            </p>
                        </div>

                        {/* Card 4 */}
                        <div className="bg-purple-50 p-8 rounded-xl hover:-translate-y-1 transition-transform duration-300">
                            <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-purple-500 mb-6 shadow-sm text-2xl">
                                📍
                            </div>
                            <h3 className="font-bold text-lg mb-3">Local SEO</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Dominate your geographical market. We optimize your local listings and regional keywords to capture nearby, high-converting traffic.
                            </p>
                        </div>

                        {/* Card 5 */}
                        <div className="bg-pink-50 p-8 rounded-xl hover:-translate-y-1 transition-transform duration-300">
                            <div className="w-12 h-12 rounded-lg bg-orange-50 flex items-center justify-center shrink-0">
                                🛠️
                            </div>
                            <h3 className="font-bold text-lg mb-3">Technical SEO Optimization</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Ensure search engines can crawl and index your site flawlessly. We address site speed, mobile responsiveness, and architecture.
                            </p>
                        </div>

                        {/* Card 6 */}
                        <div className="bg-cyan-50 p-8 rounded-xl hover:-translate-y-1 transition-transform duration-300">
                            <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-cyan-500 mb-6 shadow-sm text-2xl">
                                🔗
                            </div>
                            <h3 className="font-bold text-lg mb-3">Off-Page Link Building</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Build authority through high-quality, relevant backlinks. Our ethical outreach strategies signal trust and relevance to search engines.
                            </p>
                        </div>

                        {/* Card 7 */}
                        <div className="bg-orange-50 p-8 rounded-xl hover:-translate-y-1 transition-transform duration-300">
                            <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-orange-500 mb-6 shadow-sm text-2xl">
                                🛍️
                            </div>
                            <h3 className="font-bold text-lg mb-3">E-Commerce SEO Services</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Drive sales by optimizing product pages, categorical structures, and user journeys specifically tailored for online retail.
                            </p>
                        </div>

                        {/* Card 8 */}
                        <div className="bg-green-50 p-8 rounded-xl hover:-translate-y-1 transition-transform duration-300">
                            <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-green-500 mb-6 shadow-sm text-2xl">
                                📱
                            </div>
                            <h3 className="font-bold text-lg mb-3">App Store Optimization</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Maximize your app's visibility and downloads through targeted keyword inclusion, compelling descriptions, and optimized assets.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            {/* Performance Stats Strip */}
            <section className="bg-[#1a132b] py-16">
                <div className="max-w-[1440px] mx-auto px-4 md:px-8">
                    <div className="flex flex-wrap justify-center gap-4 md:gap-6">

                        {/* Stat 1 */}
                        <div className="bg-white rounded-md py-6 px-8 text-center min-w-[180px] shadow-lg flex flex-col items-center justify-center">
                            <div className="text-purple-600 mb-2">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                            </div>
                            <h4 className="font-black text-2xl text-black">8k+</h4>
                            <p className="text-xs text-gray-500 font-bold uppercase mt-1">Satisfied<br />Customers</p>
                        </div>

                        {/* Stat 2 */}
                        <div className="bg-white rounded-md py-6 px-8 text-center min-w-[180px] shadow-lg flex flex-col items-center justify-center">
                            <div className="text-purple-600 mb-2">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M2 12h20" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
                            </div>
                            <h4 className="font-black text-2xl text-black">160+</h4>
                            <p className="text-xs text-gray-500 font-bold uppercase mt-1">Countries<br />Served</p>
                        </div>

                        {/* Stat 3 */}
                        <div className="bg-white rounded-md py-6 px-8 text-center min-w-[180px] shadow-lg flex flex-col items-center justify-center">
                            <div className="text-purple-600 mb-2">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
                            </div>
                            <h4 className="font-black text-2xl text-black">40%</h4>
                            <p className="text-xs text-gray-500 font-bold uppercase mt-1">Employee Tenure<br />&gt; 5 years</p>
                        </div>

                        {/* Stat 4 */}
                        <div className="bg-white rounded-md py-6 px-8 text-center min-w-[180px] shadow-lg flex flex-col items-center justify-center">
                            <div className="text-purple-600 mb-2">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4Z" /><path d="M22 2 11 13" /></svg>
                            </div>
                            <h4 className="font-black text-2xl text-black">24x7</h4>
                            <p className="text-xs text-gray-500 font-bold uppercase mt-1">Customer<br />Support</p>
                        </div>

                        {/* Stat 5 */}
                        <div className="bg-white rounded-md py-6 px-8 text-center min-w-[180px] shadow-lg flex flex-col items-center justify-center">
                            <div className="text-purple-600 mb-2">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                            </div>
                            <h4 className="font-black text-2xl text-black">10+</h4>
                            <p className="text-xs text-gray-500 font-bold uppercase mt-1">Years in<br />business</p>
                        </div>

                    </div>
                </div>
            </section>

            {/* Detailed Content Section */}
            <section className="bg-gray-50 py-20">
                <div className="max-w-[1000px] mx-auto px-4 md:px-8">

                    <h2 className="text-2xl md:text-3xl font-black font-heading text-black mb-6">
                        How Are our Services
                    </h2>
                    <p className="text-gray-700 leading-relaxed mb-8">
                        Mediawings offers comprehensive SEO solutions tailormade to your specific needs, ensuring optimal visibility across search engines. Our holistic approach covers every facet from technical foundation to content strategy, driving sustainable long-term results.
                    </p>

                    <h3 className="text-xl font-bold text-black mb-4">Boost organic traffic</h3>
                    <p className="text-gray-700 leading-relaxed mb-8">
                        Our strategic implementation amplifies your website through increased organic reach, translating to more quality traffic, engagements, and lead opportunities. By targeting the right keywords, we ensure you capture users actively searching for your solutions.
                    </p>

                    <h3 className="text-xl font-bold text-black mb-4">Increase leads & sales</h3>
                    <p className="text-gray-700 leading-relaxed mb-8">
                        Traffic without conversion is vanity. Our tailored SEO techniques align perfectly with user intent to convert visitors into loyal customers. We optimize conversion funnels alongside search visibility to directly impact your bottom line.
                    </p>

                    <h3 className="text-xl font-bold text-black mb-4">Lower Customer Acquisition Costs</h3>
                    <p className="text-gray-700 leading-relaxed mb-10">
                        Unlike paid advertising where visibility stops the moment you stop paying, organic positions provide lasting value. Once your site ranks high on Google, the cost per acquisition decreases significantly, yielding a higher ROI over time.
                    </p>

                    <h2 className="text-2xl md:text-3xl font-black font-heading text-black mb-6">
                        Why Choose Mediawings SEO?
                    </h2>
                    <ul className="space-y-4 text-gray-700 list-none ml-2">
                        <li className="flex items-start gap-3">
                            <span className="text-brand-cyan mt-1">✓</span>
                            <span>Targeted SEO strategies aligned with your precise business vision and industry dynamics.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-brand-cyan mt-1">✓</span>
                            <span>Comprehensive services from deep Technical SEO audits to high-authority Link Building.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-brand-cyan mt-1">✓</span>
                            <span>Data-driven approach guaranteeing measurable ROI and sustainable long-term growth.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-brand-cyan mt-1">✓</span>
                            <span>Strict adherence to White Hat SEO techniques following Google Webmaster Guidelines.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-brand-cyan mt-1">✓</span>
                            <span>Transparent monthly reporting and a dedicated account manager for clear communication.</span>
                        </li>
                    </ul>

                </div>
            </section>

            {/* SEO FAQ Section */}
            <section className="bg-white py-20">
                <div className="max-w-[1000px] mx-auto px-4 md:px-8">
                    <h2 className="text-3xl md:text-4xl font-black font-heading text-center text-black mb-12">
                        Frequently Asked Questions
                    </h2>

                    <div className="space-y-4">
                        {[
                            {
                                q: "Why is SEO important for growing my website?",
                                a: "SEO is crucial for business growth because it directly affects a website's visibility and organic traffic. As the digital landscape becomes increasingly competitive, appearing on the first page of search results ensures that potential customers find your business before your competitors."
                            },
                            { q: "How long does it take to see SEO results?", a: "Typically, noticeable SEO results take between 3 to 6 months. However, this depends on factors like website history, competition, and the specific strategies implemented." },
                            { q: "Can I do SEO myself or do I need to hire an agency?", a: "While basic SEO can be learned, comprehensive and competitive SEO requires deep technical knowledge, constant monitoring of algorithm updates, and dedicated resources that an agency provides." },
                            { q: "How do you measure the success of an SEO campaign?", a: "Success is measured through KPIs like organic traffic growth, keyword ranking improvements, conversion rates from organic channels, and overall return on investment (ROI)." },
                            { q: "Is SEO a one-time process?", a: "No, SEO is an ongoing process. Search engines constantly update their algorithms, and competitors are always optimizing. Continuous SEO ensures you maintain and improve your rankings." },
                            { q: "How much does SEO cost?", a: "SEO costs vary widely based on the scope of the project, competitiveness of your industry, and the specific goals. We offer custom packages tailored to your budget and objectives." },
                            { q: "How does Mobile SEO differ from Desktop SEO?", a: "Mobile SEO focuses heavily on page speed, responsive design, and local search intent, as mobile users often have different immediate needs compared to desktop users." },
                            { q: "What is the difference between Google Search Ads and SEO?", a: "Search Ads (PPC) provide immediate visibility for a cost-per-click, while SEO focuses on earning organic, non-paid visibility which takes longer but provides sustainable, long-term traffic." },
                            { q: "Does social media impact SEO?", a: "While social media signals aren't direct ranking factors, strong social presence drives traffic, increases brand awareness, and can lead to natural backlinks which positively impact SEO." },
                            { q: "How do you approach local SEO for businesses with multiple locations?", a: "We create distinct, optimized location pages, manage individual Google Business Profiles, and build local citations specific to each area to ensure hyper-local visibility." },
                            { q: "What is negative SEO and how do you protect my site against it?", a: "Negative SEO refers to malicious attempts to sabotage a competitor's rankings. We protect you by continuously monitoring your backlink profile and disavowing toxic links." }
                        ].map((faq, index) => (
                            <div key={index} className="border-b border-gray-200 pb-4">
                                <button className="w-full flex justify-between items-center text-left py-2 focus:outline-none group">
                                    <span className={`font-semibold text-[15px] ${index === 0 ? 'text-brand-cyan' : 'text-gray-900 group-hover:text-brand-cyan'} transition-colors`}>
                                        {faq.q}
                                    </span>
                                    <span className="text-gray-400 text-xl font-light ml-4 shrink-0">
                                        {index === 0 ? '−' : '+'}
                                    </span>
                                </button>
                                {index === 0 && ( /* Expanded view for the first item to match screenshot */
                                    <div className="pt-2 pb-4 text-gray-600 text-sm leading-relaxed pr-8">
                                        {faq.a}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            {/* Bottom Lead Form */}
            <section className="bg-brand-lavender py-20 relative">
                <div className="max-w-[700px] mx-auto px-4 md:px-8 bg-white p-8 md:p-12 rounded-xl shadow-xl">
                    <h2 className="text-3xl font-bold font-heading text-center text-gray-900 mb-2">Lets Get Project Started</h2>
                    <p className="text-center text-gray-500 mb-8 text-sm">Grow your business today</p>

                    <form className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <input type="text" placeholder="Name*" className="w-full border border-gray-200 rounded-md p-3 text-sm focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan outline-none" required />
                            </div>
                            <div>
                                <input type="email" placeholder="Email address*" className="w-full border border-gray-200 rounded-md p-3 text-sm focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan outline-none" required />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="flex border border-gray-200 rounded-md overflow-hidden focus-within:border-brand-cyan focus-within:ring-1 focus-within:ring-brand-cyan">
                                <select className="bg-gray-50 border-r border-gray-200 px-3 text-sm outline-none w-24">
                                    <option value="+91">🇮🇳 +91</option>
                                    <option value="+1">🇺🇸 +1</option>
                                    <option value="+44">🇬🇧 +44</option>
                                </select>
                                <input type="tel" placeholder="Phone number*" className="w-full p-3 text-sm outline-none" required />
                            </div>
                            <div>
                                <input type="text" placeholder="Company name" className="w-full border border-gray-200 rounded-md p-3 text-sm focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan outline-none" />
                            </div>
                        </div>

                        <div className="flex border border-gray-200 rounded-md overflow-hidden focus-within:border-brand-cyan focus-within:ring-1 focus-within:ring-brand-cyan">
                            <span className="bg-gray-50 border-r border-gray-200 px-4 py-3 text-sm flex items-center font-bold">$</span>
                            <select className="w-full p-3 text-sm outline-none bg-white text-gray-500" required defaultValue="">
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
                                className="w-full border border-gray-200 rounded-md p-4 text-sm focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan outline-none h-24 resize-none"
                            ></textarea>
                        </div>

                        <div className="text-center pt-4">
                            <button type="submit" className="bg-[#00adef] hover:bg-[#0090c0] text-white font-bold py-3 px-12 rounded-md transition-all shadow-md hover:shadow-lg uppercase tracking-wide text-sm">
                                Send
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        </>
    );
};

export default SeoPage;
