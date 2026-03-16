import { useState } from 'react';
import { Link } from 'react-router-dom';
import company1 from '../assets/companies/Group-12678.png';
import company2 from '../assets/companies/Group-12679.png';
import company3 from '../assets/companies/Group-12684.png';
import company4 from '../assets/companies/adani.png';
import company5 from '../assets/companies/mahindra.png';
import company6 from '../assets/companies/shipooji.png';

const SERVICES_TABS = [
    'Digital Marketing',
    'Technology',
    'Cloud Solutions',
    'Creative & Communication'
];

const SERVICES_CONTENT = {
    'Digital Marketing': [
        { title: 'Web Design & Development', desc: 'With our top digital marketing agency, you can get a performing website created that converts at a competitive price. Our websites are user-friendly, engage customers, reduce bounce rates, and provide the best user experience.', link: '#', bgColor: 'bg-[#fff0f4]', icon: '💻' },
        { title: 'SEO Services', desc: 'Get Google\'s #1 ranking with Mediawings\'s SEO solutions. With our SEO agency in India, we ensure top rankings for different businesses. Increase keyword ranking using our SEO optimization strategies, technical SEO, local SEO, and on- and off-page techniques.', link: '/seo', bgColor: 'bg-[#fffbeb]', icon: '🔍' },
        { title: 'Social Media Marketing', desc: 'Connect, engage, and grow your brand\'s presence on social media with our social media strategies. Social media helps attract potential buyers, create reach, and engage existing customers.', link: '/social-media-management', bgColor: 'bg-[#f0fbff]', icon: '📱' },
        { title: 'Performance Marketing', desc: 'To ensure higher ROI (returns on your investments), we use different strategies that are based on real-time research. This ensures higher returns on your investment. Hence, hire us to identify and target the right audience, maximize ROI, and unleash your brand\'s potential.', link: '/revenue-generation', bgColor: 'bg-[#f3f0ff]', icon: '📈' },
        { title: 'Lead Generation', desc: 'Fuel your growth with our tailored strategies. Convert your audience into valuable leads for sustainable success. Accelerate your business growth with our lead generation services and digital marketing.', link: '/lead-generation', bgColor: 'bg-[#f3f0ff]', icon: '🧲' },
        { title: 'Paid Advertising', desc: 'Reach the right audience at the right time for remarkable business growth. We use media buying strategies to place sponsored ads to get a better return on your spending. Your business goal is...', link: '/paid-search-ads', bgColor: 'bg-[#f0fbff]', icon: '💰' },
        { title: 'Display Advertising', desc: 'Captivate your audience with high-impact visual ads across the web. From YouTube to news sites, we ensure your brand stays top-of-mind with beautiful, targeted display campaigns.', link: '/display-advertising', bgColor: 'bg-[#e0f7fa]', icon: '🖥️' },
        { title: 'Shopping Advertising', desc: 'Maximize your online sales with high-impact shopping campaigns. We optimize your product feeds and targeting to put your brand directly in front of buyers.', link: '/shopping-ads', bgColor: 'bg-[#fffbeb]', icon: '🛍️' },
        { title: 'Social Media Advertising', desc: 'Scale your brand with high-performance Meta campaigns. We combine data-driven targeting with engaging creative to drive massive ROI on Facebook and Instagram.', link: '/social-media-ads', bgColor: 'bg-[#f3f0ff]', icon: '📱' },
        { title: 'Influencer Marketing', desc: 'Partner with top content creators to build trust, authority, and massive scale. Mediawings has partnered with the top influencers across the globe to boost your brand awareness and ROI.', link: '/influencer-marketing', bgColor: 'bg-[#f3f0ff]', icon: '🎭' },
        { title: 'Online Reputation Management', desc: 'Capitalize on basic online reputation management from iDigitalise and keep your reputation clean from the search. The iDigitalise team monitors and keeps your reputation positive.', link: '/online-reputation-management', bgColor: 'bg-[#fff0f4]', icon: '🛡️' },
        { title: 'Digital PR', desc: 'Improve your brand\'s reputation & trust over the internet for unparalleled visibility that no one thought of. Our digital PR professionals ensure that brands are in direct contact with their target audience...', link: '/digital-pr', bgColor: 'bg-[#fffbeb]', icon: '📢' },
        { title: 'Landing Pages', desc: 'Stop wasting your ad spend on pages that don\'t convert. We design custom, high-performance landing pages that turn clicks into customers and maximize your ROI.', link: '/landing-pages', bgColor: 'bg-[#fdf2f8]', icon: '📄' },
        { title: 'Real Estate Marketing', desc: 'Transforming property leads into project bookings. We combine data-driven targeting with immersive storytelling to scale your real estate business with 10X ROI.', link: '/real-estate-marketing', bgColor: 'bg-[#f0f9ff]', icon: '🏢' },
        { title: 'CMO Consulting', desc: 'Conversion problem? Hire the best CRO specialist for better Tailored marketing strategies and research and insight analysis to help increase performance, design the right marketing plans, forecast...', link: '/consultancy-services', bgColor: 'bg-[#fff7ed]', icon: '👔' },
    ],
    'Technology': [
        { title: 'React Node Solutions', desc: 'Looking to build modern, high-performance web applications? Our expert Node.js, React, and Next.js developers deliver scalable, interactive, and SEO-friendly solutions, integrating APIs, real-time features, and custom functionalities to boost your business growth and user engagement.', link: '/web-development', bgColor: 'bg-[#fff0f4]', icon: '⚛️' },
        { title: 'Dedicated Resources', desc: 'Looking to scale your team with expert talent? Hire our dedicated developers, digitally marketed and fully focused on your projects, delivering high-quality code, seamless collaboration, and flexible solutions to accelerate development and drive business growth.', link: '/dedicated-resources', bgColor: 'bg-[#fffbeb]', icon: '👥' },
        { title: 'Software Development', desc: 'Our proficient software developers aim to create safe, easy-to-maintain, and scalable software for clients to use for personal or professional reasons. Our experts use various tools to ensure that the system remains functional and powerful.', link: '/software-development', bgColor: 'bg-[#f0fbff]', icon: '💻' },
        { title: 'eCommerce Solutions', desc: 'E-commerce plays a crucial role in increasing sales, attracting potential buyers, and also adding to the revenue stream. So, for sales boosts, join Mediawings, the best digital marketing firm, for the exponential growth of your e-commerce business.', link: '/ecommerce-development', bgColor: 'bg-[#f3f0ff]', icon: '🛒' },
        { title: 'WordPress Development', desc: 'Looking for a custom code wordpress website? Look no further, Redefine your online presence with our skilled Wordpress developers, who not only create a functional website...', link: '/wordpress-development', bgColor: 'bg-[#f3f0ff]', icon: '🌐' },
        { title: 'Mobile Apps', desc: 'Mediawings specializes in creating Mobile apps that fascinate users. We are here to help you and guide you on how we can research the best mobile app and also how to launch it effectively...', link: '/mobile-apps', bgColor: 'bg-[#f0fbff]', icon: '📱' },
        { title: 'Product Development', desc: 'Mediawings understands that each business\'s demand is unique, and so their products must be, and that\'s why our product development team creates high-performing designs that are not...', link: '/product-development', bgColor: 'bg-[#fffbeb]', icon: '📦' },
        { title: 'CMS Development', desc: 'Our digital marketing agency provides a custom coded and designed CMS development for easy publishing and later editing of the published content.', link: '/cms-development', bgColor: 'bg-[#fff7ed]', icon: '🖥️' },
    ],
    'Cloud Solutions': [
        { title: 'Cloud Infrastructure', desc: 'Mediawings specializes in creating a custom design for your cloud infrastructure as per your enterprise needs and provides high performance and high availability.', link: '/cloud-infrastructure', bgColor: 'bg-[#f0f9ff]', icon: '☁️' },
        { title: 'Cloud Migration', desc: 'Cloud migration refers to moving the digital assets of an enterprise from a physical server or local server to a cloud for better and more organized functioning and management.', link: '/cloud-migration', bgColor: 'bg-[#fdf2f8]', icon: '🚀' },
        { title: 'Microsoft Emails', desc: 'Looking for a professional and secure email solution? Microsoft Email provides reliable, cloud-based communication, advanced security, seamless integration with Microsoft 365 apps, and collaboration tools to help your team stay productive, organized, and connected anytime, anywhere.', link: '/microsoft-emails', bgColor: 'bg-[#fff0f4]', icon: '📧' },
        { title: 'Ecommerce Hosting', desc: 'Looking for fast, secure, and reliable eCommerce hosting? Our hosting solutions ensure your online store runs smoothly with high performance, 24/7 security, scalable resources, and seamless integrations, helping you deliver a superior shopping experience and grow your business.', link: '/ecommerce-hosting', bgColor: 'bg-[#fffbeb]', icon: '🛒' },
        { title: 'Google Workspace', desc: 'Now, it\'s easier to manage all the documents hassle-free, safeguard your team connection, and even work together as a team on Google Workspace, as Mediawings is India\'s leading Google Workspace partner.', link: '/google-workspace', bgColor: 'bg-[#f0fbff]', icon: '☁️' },
        { title: 'Business Mail', desc: 'Our business mail is simpler to use, works on all devices, and is easy to set up in Outlook or other email programs. This includes the secure sending and receiving of official mail and papers. Plus, our digital agency also offers super express mail for urgent and critical mail.', link: '/business-mail', bgColor: 'bg-[#f3f0ff]', icon: '📬' },
        { title: 'Hosting', desc: 'Get reliable, 100% legit, feature-rich, and top-rated hosting from Mediawings to build an attractive website for personal and professional use. With Mediawings...', link: '/hosting', bgColor: 'bg-[#f3f0ff]', icon: '💾' },
        { title: 'AWS Hosting', desc: 'Get your business online with AWS for B22, B2C, B2B2C, and all other businesses. We provide AWS...', link: '/aws-hosting', bgColor: 'bg-[#f0fbff]', icon: '🌩️' },
        { title: 'Azure Hosting', desc: 'Get Microsoft Azure cloud hosting for complete data control, insight, flexibility, scalability, recovery...', link: '/azure-hosting', bgColor: 'bg-[#fffbeb]', icon: '🌥️' },
        { title: 'Cloud Support', desc: 'The Mediawings cloud support is formulated to work with any cloud-based IT environment.', link: '/cloud-support', bgColor: 'bg-[#fff7ed]', icon: '🎧' },
    ],
    'Creative & Communication': [
        { title: 'Brand Design', desc: 'Your brand\'s visibility is important for differentiation and engagement. Our skilled professionals develop and position your brand/ business in the digital media. It includes choosing the color schemes, logos, font, etc.', link: '/brand-design', bgColor: 'bg-[#fff0f4]', icon: '🎨' },
        { title: 'Communication Design', desc: 'Empower your businesses with our communications specialists, who have the skill set to advertise your brand or product to attract or retain customers, get deals, and more.', link: '/communication-design', bgColor: 'bg-[#fffbeb]', icon: '💬' },
        { title: 'Brand Strategy', desc: 'A brand strategy is needed to provide vision to fellow workers, as it provides direction for growth and success. So, please take advantage of our brand strategy services and help your business stand out even in the crowded marketplace.', link: '/brand-strategy', bgColor: 'bg-[#f0fbff]', icon: '♟️' },
        { title: 'UI Design', desc: 'The user interface (UI) is the face of digital products and plays a major role in the client\'s interaction with them. Thus, we built a functional UI to reduce bounce rates and increase buyer engagement and conversion rates.', link: '/ui-design', bgColor: 'bg-[#f3f0ff]', icon: '📐' },
        { title: 'User Experience', desc: 'We understand the need for a positive user experience, as it helps increase a buyer\'s engagement, trust, and loyalty towards the brand. Therefore, make your products user-centric with Mediawings.', link: '/user-experience', bgColor: 'bg-[#f3f0ff]', icon: '👥' },
        { title: 'Product Design', desc: 'Let us create, design, style, and launch your product. We create products from concept to patent.', link: '/product-design', bgColor: 'bg-[#f0fbff]', icon: '✏️' },
        { title: 'Content Strategy', desc: 'A great product design is mandatory for customer satisfaction and loyalty. So, trust us to complete your product journey from concept, restyle, launch, and patent.', link: '/content-strategy', bgColor: 'bg-[#fffbeb]', icon: '📝' },
        { title: 'Communications', desc: 'Communication offers genuineness to clients and hence helps build the brand\'s trust. So, hire a communication expert now.', link: '/communications', bgColor: 'bg-[#fff7ed]', icon: '🗣️' },
    ],
};


const Services = () => {
    const [activeTab, setActiveTab] = useState('Digital Marketing');

    return (
        <section id="services" className="py-24 bg-white relative">
            <div className="max-w-[1440px] mx-auto px-4 md:px-8 text-center">
                <h2 className="text-3xl md:text-5xl font-bold font-heading mb-16 text-gray-900 leading-tight">
                    What Makes Mediawings a Leading <br className="hidden md:block" />
                    <span className="text-brand-cyan">Digital Marketing</span> Agency?
                </h2>

                {/* Company Logo Carousel */}
                <style>{`
                    @keyframes marquee {
                        0% { transform: translateX(0); }
                        100% { transform: translateX(-100%); }
                    }
                    .animate-marquee {
                        animation: marquee 30s linear infinite;
                    }
                    .group:hover .animate-marquee {
                        animation-play-state: paused;
                    }
                `}</style>
                <div
                    className="overflow-hidden w-full relative mb-24 max-w-6xl mx-auto flex items-center group py-4"
                    style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}
                >
                    <div className="animate-marquee flex space-x-12 md:space-x-20 items-center shrink-0 pr-12 md:pr-20">
                        {[company1, company2, company3, company4, company5, company6].map((logo, index) => (
                            <img key={`logo-1-${index}`} src={logo} alt={`Company ${index}`} className="h-8 md:h-12 lg:h-14 object-contain grayscale opacity-50 hover:grayscale-0 hover:opacity-100 hover:scale-105 transition-all duration-300" />
                        ))}
                    </div>
                    <div className="animate-marquee flex space-x-12 md:space-x-20 items-center shrink-0 pr-12 md:pr-20" aria-hidden="true">
                        {[company1, company2, company3, company4, company5, company6].map((logo, index) => (
                            <img key={`logo-2-${index}`} src={logo} alt={`Company ${index}`} className="h-8 md:h-12 lg:h-14 object-contain grayscale opacity-50 hover:grayscale-0 hover:opacity-100 hover:scale-105 transition-all duration-300" />
                        ))}
                    </div>
                </div>

                {/* Feature Grid */}
                <div className="bg-gray-50 rounded-3xl p-8 md:p-16 text-left">
                    <h3 className="text-2xl md:text-4xl font-bold mb-4 font-heading text-center">
                        Full-Service Digital Marketing Agency with <br />
                        <span className="text-brand-cyan">4-25X ROAS</span>
                    </h3>
                    <p className="text-gray-500 text-center max-w-3xl mx-auto mb-16 text-lg">
                        As the trusted digital growth partner, Mediawings unlocks your business potential leading to unprecedented scale and sustainable revenue generation.
                    </p>

                    {/* Tabs */}
                    <div className="flex flex-wrap justify-center gap-4 md:gap-10 border-b border-gray-200 mb-12 pb-4">
                        {SERVICES_TABS.map((tab) => (
                            <button
                                key={tab}
                                onClick={(e) => { e.preventDefault(); setActiveTab(tab); }}
                                className={`font-bold text-[14px] md:text-[16px] transition-all duration-300 whitespace-nowrap ${activeTab === tab ? 'text-brand-cyan border-b-2 border-brand-cyan pb-4 mb-[-17px]' : 'text-gray-500 hover:text-brand-cyan'}`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>

                    {/* 4x2 Grid content */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {(SERVICES_CONTENT[activeTab as keyof typeof SERVICES_CONTENT] || []).map((item, idx) => (
                            <Link key={idx} to={item.link} className={`block p-8 rounded-2xl border border-transparent hover:border-brand-cyan hover:shadow-xl transition-all duration-300 ${item.bgColor} group`}>
                                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm text-3xl group-hover:scale-110 transition-transform duration-300">
                                    {item.icon}
                                </div>
                                <h4 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h4>
                                <p className="text-gray-600 text-[14px] leading-relaxed line-clamp-5">{item.desc}</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
