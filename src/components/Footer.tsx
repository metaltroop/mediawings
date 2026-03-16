import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-[#111] text-gray-400 py-16 text-sm font-sans">
            <div className="max-w-[1440px] mx-auto px-4 md:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-12 border-b border-gray-800 pb-12">

                    <div className="col-span-2 lg:col-span-1">
                        <h4 className="text-white font-bold mb-6 font-heading tracking-wider">Solutions & Services</h4>
                        <ul className="space-y-3">
                            <li><a href="#" className="hover:text-brand-cyan transition-colors">Digital Marketing</a></li>
                            <li><a href="#" className="hover:text-brand-cyan transition-colors">Web Development</a></li>
                            <li><a href="#" className="hover:text-brand-cyan transition-colors">App Development</a></li>
                            <li><Link to="/seo" className="hover:text-brand-cyan transition-colors">SEO Services</Link></li>
                            <li><Link to="/social-media-management" className="hover:text-brand-cyan transition-colors">Social Media</Link></li>
                        </ul>
                    </div>

                    <div className="col-span-2 lg:col-span-1">
                        <h4 className="text-white font-bold mb-6 font-heading tracking-wider">Organic Marketing</h4>
                        <ul className="space-y-3">
                            <li><Link to="/seo" className="hover:text-brand-cyan transition-colors">Search Engine Optimization</Link></li>
                            <li><Link to="/social-media-management" className="hover:text-brand-cyan transition-colors">Social Media Management</Link></li>
                            <li><Link to="/influencer-marketing" className="hover:text-brand-cyan transition-colors">Influencer Marketing</Link></li>
                            <li><Link to="/online-reputation-management" className="hover:text-brand-cyan transition-colors">Online Reputation</Link></li>
                            <li><a href="#" className="hover:text-brand-cyan transition-colors">Content Marketing</a></li>
                        </ul>
                    </div>

                    <div className="col-span-2 lg:col-span-1">
                        <h4 className="text-white font-bold mb-6 font-heading tracking-wider">Paid Ads</h4>
                        <ul className="space-y-3">
                            <li><Link to="/paid-search-ads" className="hover:text-brand-cyan transition-colors">Search Ads</Link></li>
                            <li><Link to="/display-advertising" className="hover:text-brand-cyan transition-colors">Display Advertising</Link></li>
                            <li><Link to="/social-media-ads" className="hover:text-brand-cyan transition-colors">Facebook & Insta Marketing</Link></li>
                            <li><Link to="/shopping-ads" className="hover:text-brand-cyan transition-colors">Shopping Ads</Link></li>
                            <li><a href="#" className="hover:text-brand-cyan transition-colors">Amazon Marketing</a></li>
                        </ul>
                    </div>

                    <div className="col-span-2 lg:col-span-1">
                        <h4 className="text-white font-bold mb-6 font-heading tracking-wider">Company</h4>
                        <ul className="space-y-3">
                            <li><Link to="/about" className="hover:text-brand-cyan transition-colors">Our Story</Link></li>
                            <li><Link to="/pricing/dedicated-staff" className="hover:text-brand-cyan transition-colors">Hire Talent</Link></li>
                            <li><Link to="/success-stories/real-estate" className="hover:text-brand-cyan transition-colors">Case Studies</Link></li>
                            <li><Link to="/insights/blog" className="hover:text-brand-cyan transition-colors">Blog & News</Link></li>
                            <li><Link to="/insights/testimonials" className="hover:text-brand-cyan transition-colors">Client Tales</Link></li>
                        </ul>
                    </div>

                    <div className="col-span-2 lg:col-span-2">
                        <h4 className="text-white font-bold mb-6 font-heading tracking-wider">Mediawings Performance First</h4>
                        <p className="mb-6 leading-relaxed">
                            A top-rated digital marketing and technology agency helping ambitious brands scale their revenue through performance marketing, development, and data-driven design.
                        </p>
                        <p className="mb-2"><strong>Contact:</strong> hello@mediawings.net</p>
                        <p><strong>Phone:</strong> +1 (737) 710 1095</p>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center text-xs">
                    <p>&copy; {new Date().getFullYear()} Mediawings. All rights reserved.</p>
                    <div className="flex gap-4 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
