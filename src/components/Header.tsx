import { useState } from 'react';
import { Menu, X, Phone, Mail, MessageCircle, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useModal } from '../contexts/ModalContext';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [openMenus, setOpenMenus] = useState<Record<string, boolean>>({});
    const { openModal } = useModal();

    const toggleMenu = (menuId: string) => {
        setOpenMenus(prev => ({ ...prev, [menuId]: !prev[menuId] }));
    };

    const handleLinkClick = () => {
        setIsOpen(false);
        setOpenMenus({}); // Close all accordions
        window.scrollTo(0, 0); // Scroll to top on navigation
    };

    return (
        <header className="w-full sticky top-0 z-50 shadow-sm bg-white">
            {/* Top Black Bar */}
            <div className="bg-black text-white py-2 px-4 md:px-8 text-xs font-medium flex justify-between items-center">
                <div className="hidden md:block">Beware of Job Scam</div>
                <div className="flex gap-4 sm:gap-6 items-center flex-wrap justify-center w-full md:w-auto">
                    <a href="#" className="flex items-center gap-1.5 hover:text-brand-cyan-light transition-colors">
                        <MessageCircle size={14} className="text-green-500" /> +1 (737) 710 1095
                    </a>
                    <a href="#" className="flex items-center gap-1.5 hover:text-brand-cyan-light transition-colors">
                        <Phone size={14} className="text-brand-cyan" /> +91 95943 15559
                    </a>
                    <a href="#" className="flex items-center gap-1.5 hover:text-brand-cyan-light transition-colors">
                        {/* Using a square icon representation for EU flag temporarily */}
                        <div className="w-4 h-3 bg-blue-800 rounded-sm flex items-center justify-center text-[6px]">EU</div> +355 69 409 5559
                    </a>
                    <a href="mailto:hello@mediawings.net" className="flex items-center gap-1.5 hover:text-brand-cyan-light transition-colors">
                        <Mail size={14} className="text-gray-300" /> hello@mediawings.net
                    </a>
                </div>
            </div>

            {/* Main Navigation Bar */}
            <div className="max-w-[1440px] mx-auto px-4 md:px-8 py-4 flex justify-between items-center bg-white">
                {/* Logo */}
                <Link to="/" className="flex flex-col">
                    <span className="text-3xl font-heading font-bold text-brand-cyan uppercase tracking-wide leading-none">
                        Mediawings
                    </span>
                    <span className="text-[10px] text-gray-400 font-semibold tracking-[0.2em] relative -top-0.5 ml-0.5">
                        PERFORMANCE FIRST
                    </span>
                </Link>

                {/* Desktop Menu */}
                <nav className="hidden lg:flex items-center gap-5 xl:gap-7 text-[15px] font-semibold text-gray-600">

                    {/* Solutions & Services Mega Menu */}
                    <div className="group cursor-pointer py-6">
                        <span className="hover:text-brand-cyan transition-colors">Solutions & Services</span>
                        <div className="absolute top-full left-0 w-full bg-white shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] border-t-2 border-brand-cyan opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                            <div className="max-w-[1440px] mx-auto px-4 md:px-8 py-10 grid grid-cols-5 gap-6">
                                <div>
                                    <h4 className="text-black font-black mb-4 uppercase text-sm">ORGANIC MARKETING</h4>
                                    <ul className="space-y-3 font-medium text-gray-600 text-[13px]">
                                        <li className="hover:text-brand-cyan"><Link to="/seo">Search Engine Optimization</Link></li>
                                        <li className="hover:text-brand-cyan"><Link to="/social-media-management">Social Media Management</Link></li>
                                        <li className="hover:text-brand-cyan"><Link to="/influencer-marketing">Influencer Marketing</Link></li>
                                        <li className="hover:text-brand-cyan"><Link to="/online-reputation-management">Online Reputation Marketing</Link></li>
                                        <li className="hover:text-brand-cyan"><Link to="/digital-pr">Digital PR</Link></li>
                                        <li className="hover:text-brand-cyan"><Link to="/content-strategy">Content Marketing</Link></li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="text-black font-black mb-4 uppercase text-sm">PAID ADS</h4>
                                    <ul className="space-y-3 font-medium text-gray-600 text-[13px]">
                                        <li className="hover:text-brand-cyan"><Link to="/paid-search-ads">Search Ads</Link></li>
                                        <li className="hover:text-brand-cyan"><Link to="/display-advertising">Display Advertising</Link></li>
                                        <li className="hover:text-brand-cyan"><Link to="/social-media-ads">Facebook & Insta Marketing</Link></li>
                                        <li className="hover:text-brand-cyan"><Link to="/shopping-ads">Shopping Ads</Link></li>
                                        <li className="hover:text-brand-cyan"><Link to="/lead-generation">Lead Generation</Link></li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="text-black font-black mb-4 uppercase text-sm">PERFORMANCE</h4>
                                    <ul className="space-y-3 font-medium text-gray-600 text-[13px]">
                                        <li className="hover:text-brand-cyan"><Link to="/conversion-rate-optimization">CRO Services</Link></li>
                                        <li className="hover:text-brand-cyan"><Link to="/revenue-generation">Revenue Generation</Link></li>
                                        <li className="hover:text-brand-cyan"><Link to="/consultancy-services">Consultancy Services</Link></li>
                                        <li className="hover:text-brand-cyan"><Link to="/landing-pages">Landing Pages</Link></li>
                                        <li className="hover:text-brand-cyan"><Link to="/real-estate-marketing">Real Estate Marketing</Link></li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="text-black font-black mb-4 uppercase text-sm">TECHNOLOGY</h4>
                                    <ul className="space-y-3 font-medium text-gray-600 text-[13px]">
                                        <li className="hover:text-brand-cyan"><Link to="/web-development">Web Development</Link></li>
                                        <li className="hover:text-brand-cyan"><Link to="/software-development">Custom Software</Link></li>
                                        <li className="hover:text-brand-cyan"><Link to="/ecommerce-development">Ecommerce Solutions</Link></li>
                                        <li className="hover:text-brand-cyan"><Link to="/wordpress-development">WordPress Development</Link></li>
                                        <li className="hover:text-brand-cyan"><Link to="/mobile-apps">Mobile Apps</Link></li>
                                        <li className="hover:text-brand-cyan"><Link to="/dedicated-resources">Dedicated Resources</Link></li>
                                        <li className="hover:text-brand-cyan"><Link to="/cms-development">CMS Development</Link></li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="text-black font-black mb-4 uppercase text-sm">CLOUD & EMAILS</h4>
                                    <ul className="space-y-3 font-medium text-gray-600 text-[13px]">
                                        <li className="hover:text-brand-cyan"><Link to="/google-workspace">Google Workspace</Link></li>
                                        <li className="hover:text-brand-cyan"><Link to="/microsoft-emails">Microsoft Emails</Link></li>
                                        <li className="hover:text-brand-cyan"><Link to="/business-mail">Business Mail</Link></li>
                                        <li className="hover:text-brand-cyan"><Link to="/hosting">Web Hosting</Link></li>
                                        <li className="hover:text-brand-cyan"><Link to="/ecommerce-hosting">eCommerce Hosting</Link></li>
                                        <li className="hover:text-brand-cyan"><Link to="/aws-hosting">AWS Hosting</Link></li>
                                        <li className="hover:text-brand-cyan"><Link to="/azure-hosting">Azure Hosting</Link></li>
                                        <li className="hover:text-brand-cyan"><Link to="/cloud-support">Cloud Support</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Case Studies */}
                    <div className="group cursor-pointer py-6">
                        <span className="hover:text-brand-cyan transition-colors">Case Studies</span>
                        <div className="absolute top-full left-0 w-full bg-white shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] border-t-2 border-brand-cyan opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                            <div className="max-w-[1440px] mx-auto px-4 md:px-8 py-10 flex gap-12">
                                <div className="w-1/3 flex items-center justify-center">
                                    {/* World Map Placeholder */}
                                    <div className="w-full aspect-video bg-gray-100 rounded-lg flex items-center justify-center text-gray-400 text-xs text-center p-4">World Map<br />Graphic</div>
                                </div>
                                <div className="w-2/3">
                                    <h3 className="text-2xl font-black mb-8 text-black uppercase">SUCCESS STORIES</h3>
                                    <div className="grid grid-cols-2 gap-8 relative">
                                        <div className="absolute left-[50%] top-0 bottom-0 w-px bg-gray-200"></div>
                                        <ul className="space-y-4 font-medium text-gray-700 text-[14px]">
                                            <li className="hover:text-brand-cyan"><Link to="/success-stories/real-estate">Real Estate</Link></li>
                                            <li className="hover:text-brand-cyan"><Link to="/success-stories/pharma-healthcare">Pharma & Healthcare</Link></li>
                                            <li className="hover:text-brand-cyan"><Link to="/success-stories/manufacturing">Manufacturing</Link></li>
                                            <li className="hover:text-brand-cyan"><Link to="/success-stories/service-providers">Service Providers</Link></li>
                                        </ul>
                                        <ul className="space-y-4 font-medium text-gray-700 text-[14px]">
                                            <li className="hover:text-brand-cyan"><Link to="/success-stories/governments">Governments</Link></li>
                                            <li className="hover:text-brand-cyan"><Link to="/success-stories/education">Education & eLearning</Link></li>
                                            <li className="hover:text-brand-cyan"><Link to="/success-stories/ecommerce">Ecommerce</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <a href="#clients" className="hover:text-brand-cyan transition-colors py-6">Clients</a>

                    {/* Our Work Mega Menu */}
                    <div className="group cursor-pointer py-6">
                        <span className="hover:text-brand-cyan transition-colors">Our Work</span>
                        <div className="absolute top-full left-0 w-full bg-white shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] border-t-2 border-brand-cyan opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                            <div className="max-w-[1440px] mx-auto px-4 md:px-8 py-10 flex gap-8">
                                <div className="grow grid grid-cols-3 gap-6">
                                    <div>
                                        <h4 className="text-black font-black mb-5 uppercase text-[15px]">DIGITAL MARKETING</h4>
                                        <ul className="space-y-3 font-medium text-gray-600 text-[13px]">
                                            <li className="hover:text-brand-cyan"><Link to="/paid-search-ads">Performance Marketing</Link></li>
                                            <li className="hover:text-brand-cyan"><Link to="/paid-search-ads">Paid Ads</Link></li>
                                            <li className="hover:text-brand-cyan"><Link to="/seo">Search Engine Optimization</Link></li>
                                            <li className="hover:text-brand-cyan"><Link to="/lead-generation">Lead Generation</Link></li>
                                            <li className="hover:text-brand-cyan"><Link to="/influencer-marketing">Influencer Marketing</Link></li>
                                        
                                            <li className="hover:text-brand-cyan"><Link to="/social-media-management">Social Media Marketing</Link></li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="text-black font-black mb-5 uppercase text-[15px]">TECHNOLOGY</h4>
                                        <ul className="space-y-3 font-medium text-gray-600 text-[13px]">
                                            <li className="hover:text-brand-cyan"><Link to="/web-development">Web Design & Development</Link></li>
                                            <li className="hover:text-brand-cyan"><Link to="/landing-pages">Landing Pages</Link></li>
                                            <li className="hover:text-brand-cyan"><Link to="/ecommerce-development">eCommerce</Link></li>
                                            <li className="hover:text-brand-cyan"><Link to="/dedicated-resources">Dedicated Resources</Link></li>
                                            <li className="hover:text-brand-cyan"><Link to="/cms-development">CMS Development</Link></li>
                                            <li className="hover:text-brand-cyan"><Link to="/hosting">Web Hosting</Link></li>
                                            <li className="hover:text-brand-cyan"><Link to="/aws-hosting">AWS Hosting</Link></li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="text-black font-black mb-5 uppercase text-[15px]">DESIGN & COMMUNICATION</h4>
                                        <ul className="space-y-3 font-medium text-gray-600 text-[13px]">
                                            <li className="hover:text-brand-cyan"><Link to="/brand-design">Brand Design</Link></li>
                                            <li className="hover:text-brand-cyan"><Link to="/content-strategy">Content Strategy</Link></li>
                                            <li className="hover:text-brand-cyan"><Link to="/communications">Communications</Link></li>
                                            <li className="hover:text-brand-cyan"><Link to="/communication-design">Communication Design</Link></li>
                                            <li className="hover:text-brand-cyan"><Link to="/user-experience">UX Design</Link></li>
                                            <li className="hover:text-brand-cyan"><Link to="/product-design">Product Design</Link></li>
                                            <li className="hover:text-brand-cyan"><Link to="/content-strategy">Content Strategy</Link></li>
                                            <li className="hover:text-brand-cyan"><a href="#">Creative Services</a></li>
                                            <li className="hover:text-brand-cyan"><Link to="/communication-design">Communication Design</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="w-[350px] shrink-0">
                                    <div className="bg-[#f8f9fa] rounded-lg p-8 h-full flex flex-col items-start border border-gray-100 shadow-sm">
                                        <div className="w-full h-32 bg-gray-200 rounded-md mb-6 flex items-center justify-center text-xs text-gray-400">Promo Image</div>
                                        <h5 className="font-black text-[15px] leading-snug mb-6 uppercase">WE SERVE TOP COMPANIES AND THE FASTEST-GROWING STARTUPS. MEDIAWINGS BOOSTS CONVERSION RATES.</h5>
                                        <a href="#" className="mt-auto text-brand-cyan font-bold text-sm uppercase flex items-center gap-1 hover:text-brand-cyan-dark">BOOK FREE CONSULTATION &gt;</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Pricing Mega Menu */}
                    <div className="group cursor-pointer py-6">
                        <span className="hover:text-brand-cyan transition-colors">Pricing</span>
                        <div className="absolute top-full left-0 w-full bg-white shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] border-t-2 border-brand-cyan opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                            <div className="max-w-[1440px] mx-auto px-4 md:px-8 py-10 flex gap-8">
                                <div className="grow grid grid-cols-3 gap-6">
                                    <div>
                                        <h4 className="text-black font-black mb-5 uppercase text-[15px]">DIGITAL MARKETING</h4>
                                        <ul className="space-y-3 font-medium text-gray-600 text-[13px]">
                                            <li className="hover:text-brand-cyan"><Link to="/pricing/seo-packages">SEO Packages</Link></li>
                                            <li className="hover:text-brand-cyan"><Link to="/pricing/social-media-packages">Social Media Packages</Link></li>
                                            <li className="hover:text-brand-cyan"><Link to="/pricing/google-ppc-packages">Google PPC Packages</Link></li>
                                            <li className="hover:text-brand-cyan"><Link to="/pricing/google-ppc-packages">Shopping Ads Packages</Link></li>
                                            <li className="hover:text-brand-cyan"><Link to="/pricing/design-packages">Digital Branding Packages</Link></li>
                                            <li className="hover:text-brand-cyan"><Link to="/pricing/seo-packages">Digital Marketing Packages</Link></li>
                                        </ul>
                                    </div>
                                    <div className="flex flex-col gap-8">
                                        <div>
                                            <h4 className="text-black font-black mb-5 uppercase text-[15px]">TECHNOLOGY</h4>
                                            <ul className="space-y-3 font-medium text-gray-600 text-[13px]">
                                                <li className="hover:text-brand-cyan"><Link to="/pricing/web-development">Website and Development</Link></li>
                                                <li className="hover:text-brand-cyan"><Link to="/pricing/ecommerce-mobile-apps">E-commerce Websites</Link></li>
                                                <li className="hover:text-brand-cyan"><Link to="/pricing/web-development">Landing Conversion Pages</Link></li>
                                                <li className="hover:text-brand-cyan"><Link to="/pricing/ecommerce-mobile-apps">Software Developments</Link></li>
                                                <li className="hover:text-brand-cyan"><Link to="/pricing/ecommerce-mobile-apps">Mob Apps</Link></li>
                                                <li className="hover:text-brand-cyan"><Link to="/pricing/content-writing">Content Writing Pricing</Link></li>
                                                <li className="hover:text-brand-cyan"><Link to="/pricing/dedicated-staff">Hire Resources</Link></li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="text-black font-black mb-5 uppercase text-[15px]">DEDICATED STAFF</h4>
                                            <ul className="space-y-3 font-medium text-gray-600 text-[13px]">
                                                <li className="hover:text-brand-cyan"><Link to="/pricing/dedicated-staff">Paid Ads Specialist</Link></li>
                                                <li className="hover:text-brand-cyan"><Link to="/pricing/dedicated-staff">SEO Specialist</Link></li>
                                                <li className="hover:text-brand-cyan"><Link to="/pricing/dedicated-staff">PHP Developers</Link></li>
                                                <li className="hover:text-brand-cyan"><Link to="/pricing/dedicated-staff">Laravel Developers</Link></li>
                                                <li className="hover:text-brand-cyan"><Link to="/pricing/dedicated-staff">WordPress Developer</Link></li>
                                                <li className="hover:text-brand-cyan"><Link to="/pricing/dedicated-staff">UI Designers</Link></li>
                                                <li className="hover:text-brand-cyan"><Link to="/pricing/dedicated-staff">Cloud Computing Specialist</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-8">
                                        <div>
                                            <h4 className="text-black font-black mb-5 uppercase text-[15px]">DESIGN & COMMUNICATIONS</h4>
                                            <ul className="space-y-3 font-medium text-gray-600 text-[13px]">
                                                <li className="hover:text-brand-cyan"><Link to="/pricing/design-packages">Logo Design</Link></li>
                                                <li className="hover:text-brand-cyan"><Link to="/pricing/design-packages">Creative Design Packages</Link></li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="text-black font-black mb-5 uppercase text-[15px]">CLOUD SOLUTIONS</h4>
                                            <ul className="space-y-3 font-medium text-gray-600 text-[13px]">
                                                <li className="hover:text-brand-cyan"><Link to="/google-workspace">Google Workspace</Link></li>
                                                <li className="hover:text-brand-cyan"><Link to="/business-mail">Business Emails</Link></li>
                                                <li className="hover:text-brand-cyan"><Link to="/hosting">SSL Services</Link></li>
                                                <li className="hover:text-brand-cyan"><Link to="/hosting">WordPress Hosting</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-[350px] shrink-0 mt-8">
                                    <div className="bg-[#f8f9fa] rounded-lg p-8 h-full flex flex-col items-start border border-gray-100 shadow-sm">
                                        <div className="w-full h-32 bg-gray-200 rounded-md mb-6 flex items-center justify-center text-xs text-gray-400">Promo Image</div>
                                        <h5 className="font-black text-[15px] leading-snug mb-6 uppercase">PERFORMANCE ISSUE? CREATE YOUR CUSTOM PLAN WITH MEDIAWINGS.</h5>
                                        <a href="#" className="mt-auto text-brand-cyan font-bold text-sm uppercase flex items-center gap-1 hover:text-brand-cyan-dark">BOOK FREE CONSULTATION &gt;</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Insights Mega Menu */}
                    <div className="group cursor-pointer py-6">
                        <span className="hover:text-brand-cyan transition-colors">Insights</span>
                        <div className="absolute top-full left-0 w-full bg-white shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] border-t-2 border-brand-cyan opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                            <div className="max-w-[900px] mx-auto px-4 py-12">
                                <h3 className="text-center font-black text-2xl mb-12 text-black uppercase">INSIGHTS</h3>
                                <div className="grid grid-cols-3 relative text-center">
                                    <div className="absolute left-1/3 top-0 bottom-0 w-px bg-gray-200"></div>
                                    <div className="absolute left-2/3 top-0 bottom-0 w-px bg-gray-200"></div>

                                    <Link to="/insights/blog" className="flex flex-col items-center gap-5 hover:text-brand-cyan group/item">
                                        <div className="w-24 h-24 flex items-center justify-center text-brand-cyan group-hover/item:scale-110 transition-transform">
                                            <svg width="72" height="72" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9" /><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" /></svg>
                                        </div>
                                        <span className="font-semibold text-gray-700 group-hover/item:text-brand-cyan text-lg">Blog</span>
                                    </Link>
                                    <Link to="/insights/news" className="flex flex-col items-center gap-5 hover:text-brand-cyan group/item">
                                        <div className="w-24 h-24 flex items-center justify-center text-brand-cyan group-hover/item:scale-110 transition-transform">
                                            <svg width="72" height="72" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8l-4 4v14a2 2 0 0 0 2 2z" /><path d="m14 2-8 8" /><path d="M14 8h6" /><path d="M10 22v-8h8" /></svg>
                                        </div>
                                        <span className="font-semibold text-gray-700 group-hover/item:text-brand-cyan text-lg">News</span>
                                    </Link>
                                    <Link to="/insights/testimonials" className="flex flex-col items-center gap-5 hover:text-brand-cyan group/item">
                                        <div className="w-24 h-24 flex items-center justify-center text-brand-cyan group-hover/item:scale-110 transition-transform">
                                            <svg width="72" height="72" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.5C2 7 4 5 6.5 5H18c2.2 0 4 1.8 4 4v8Z" /><polyline points="15,9 18,9 18,11" /><path d="M6.5 5C9 5 11 7 11 9.5V17a2 2 0 0 1-2 2v0" /></svg>
                                        </div>
                                        <span className="font-semibold text-gray-700 group-hover/item:text-brand-cyan text-lg">Testimonials</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* About Mega Menu */}
                    <div className="group cursor-pointer py-6">
                        <span className="hover:text-brand-cyan transition-colors">About</span>
                        <div className="absolute top-full left-0 w-full bg-white shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] border-t-2 border-brand-cyan opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                            <div className="max-w-[1440px] mx-auto px-4 md:px-8 py-10 flex gap-12">
                                <div className="w-1/3 flex flex-col items-center justify-center">
                                    {/* World Map Placeholder */}
                                    <div className="w-full aspect-video bg-gray-100 rounded-lg flex items-center justify-center text-gray-400 text-xs text-center p-4 mb-6">World Map<br />Graphic</div>
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:text-brand-cyan cursor-pointer transition-colors hover:border-brand-cyan">T</div>
                                        <div className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:text-brand-cyan cursor-pointer transition-colors hover:border-brand-cyan">I</div>
                                        <div className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:text-brand-cyan cursor-pointer transition-colors hover:border-brand-cyan">L</div>
                                        <div className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:text-brand-cyan cursor-pointer transition-colors hover:border-brand-cyan">Y</div>
                                    </div>
                                </div>
                                <div className="w-2/3">
                                    <h3 className="text-2xl font-black mb-8 text-black uppercase">ABOUT US</h3>
                                    <div className="grid grid-cols-2 gap-8 relative">
                                        <div className="absolute left-[50%] top-0 bottom-0 w-px bg-gray-200"></div>
                                        <ul className="space-y-4 font-medium text-gray-700 text-[14px]">
                                            <li className="hover:text-brand-cyan"><Link to="/about" onClick={handleLinkClick}>About Mediawings</Link></li>
                                            <li className="hover:text-brand-cyan"><Link to="/about/directors-message" onClick={handleLinkClick}>Director's Message</Link></li>
                                            <li className="hover:text-brand-cyan"><Link to="/about/life-at-mediawings" onClick={handleLinkClick}>Life at Mediawings</Link></li>
                                            <li className="hover:text-brand-cyan"><Link to="/about/csr-activities" onClick={handleLinkClick}>CSR Activities</Link></li>
                                        </ul>
                                        <ul className="space-y-4 font-medium text-gray-700 text-[14px]">
                                            <li className="hover:text-brand-cyan"><Link to="/about/events" onClick={handleLinkClick}>Events</Link></li>
                                            <li className="hover:text-brand-cyan"><Link to="/about/company-profile" onClick={handleLinkClick}>Company Profile</Link></li>
                                            <li className="hover:text-brand-cyan"><Link to="/about/executive-team" onClick={handleLinkClick}>Executive Team</Link></li>
                                            <li className="hover:text-brand-cyan"><Link to="/about/careers" onClick={handleLinkClick}>Careers</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <a href="#contact" className="hover:text-brand-cyan transition-colors py-6">Contact</a>

                    {/* Desktop CTA */}
                    <button
                        onClick={openModal}
                        className="bg-brand-cyan hover:bg-[#0090ad] text-white font-bold py-2.5 px-6 rounded-md transition-all shadow-md hover:shadow-lg ml-2"
                    >
                        Request Quote
                    </button>
                </nav>

                {/* Mobile Menu Toggle */}
                <button
                    className="lg:hidden text-gray-800 p-2"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Navigation Accordion */}
            {isOpen && (
                <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-200 shadow-2xl max-h-[calc(100vh-65px)] overflow-y-auto w-full pb-8">

                    {/* Careers Top Link (From Screenshot) */}
                    <div className="bg-[#f2f8fc] border-b border-gray-200">
                        <a href="#careers" onClick={handleLinkClick} className="block text-center py-3 text-[#00adef] text-sm font-semibold hover:underline">Careers</a>
                    </div>

                    <nav className="flex flex-col font-medium text-gray-700">

                        {/* SOLUTIONS & SERVICES */}
                        <div className="border-b border-gray-200">
                            <button
                                className="w-full flex justify-between items-center px-5 py-4 font-bold text-[13px] uppercase tracking-wide text-gray-800 focus:outline-none"
                                onClick={() => toggleMenu('services')}
                            >
                                SOLUTIONS & SERVICES
                                <ChevronDown size={16} className={`transition-transform duration-300 ${openMenus['services'] ? 'rotate-180' : ''}`} />
                            </button>
                            {openMenus['services'] && (
                                <div className="bg-[#fafbfc] border-b border-gray-100">

                                    {/* Organic Marketing */}
                                    <div>
                                        <button
                                            className="w-full flex justify-between items-center px-6 py-3.5 font-semibold text-[13px] text-gray-700 focus:outline-none"
                                            onClick={() => toggleMenu('services-organic')}
                                        >
                                            Organic Marketing
                                            <ChevronDown size={14} className={`transition-transform duration-300 ${openMenus['services-organic'] ? 'rotate-180' : ''}`} />
                                        </button>
                                        {openMenus['services-organic'] && (
                                            <ul className="py-2.5 bg-[#f4f7f9] px-8 text-[12.5px] space-y-4 text-gray-500 font-medium">
                                                <li><Link to="/seo" onClick={handleLinkClick} className="block hover:text-[#00adef]">Search engine optimization</Link></li>
                                                <li><Link to="/social-media-management" onClick={handleLinkClick} className="block hover:text-[#00adef]">Social Media Management</Link></li>
                                                <li><Link to="/influencer-marketing" onClick={handleLinkClick} className="block hover:text-[#00adef]">Influencer Marketing</Link></li>
                                                <li><Link to="/digital-pr" onClick={handleLinkClick} className="block hover:text-[#00adef]">Digital PR</Link></li>
                                                <li><Link to="/online-reputation-management" onClick={handleLinkClick} className="block hover:text-[#00adef]">Online Reputation Marketing</Link></li>
                                                <li><a href="#" onClick={handleLinkClick} className="block hover:text-[#00adef]">Content Marketing</a></li>
                                            </ul>
                                        )}
                                    </div>

                                    {/* Web & Apps */}
                                    <div className="border-b border-gray-100">
                                        <button
                                            className="w-full flex justify-between items-center px-6 py-3.5 font-semibold text-[13px] text-gray-700 focus:outline-none"
                                            onClick={() => toggleMenu('services-web')}
                                        >
                                            Web & Apps
                                            <ChevronDown size={14} className={`transition-transform duration-300 ${openMenus['services-web'] ? 'rotate-180' : ''}`} />
                                        </button>
                                        {openMenus['services-web'] && (
                                            <ul className="py-2.5 bg-[#f4f7f9] px-8 text-[12.5px] space-y-4 text-gray-500 font-medium">
                                                <li><Link to="/web-development" onClick={handleLinkClick} className="block hover:text-[#00adef]">Website Design & Development</Link></li>
                                                <li><Link to="/software-development" onClick={handleLinkClick} className="block hover:text-[#00adef]">Custom Software</Link></li>
                                                <li><Link to="/ecommerce-development" onClick={handleLinkClick} className="block hover:text-[#00adef]">Ecommerce</Link></li>
                                                <li><Link to="/mobile-apps" onClick={handleLinkClick} className="block hover:text-[#00adef]">Mobile Apps</Link></li>
                                                <li><Link to="/wordpress-development" onClick={handleLinkClick} className="block hover:text-[#00adef]">WordPress</Link></li>
                                            </ul>
                                        )}
                                    </div>

                                    {/* Performance Marketing */}
                                    <div className="border-b border-gray-100">
                                        <button
                                            className="w-full flex justify-between items-center px-6 py-3.5 font-semibold text-[13px] text-gray-700 focus:outline-none"
                                            onClick={() => toggleMenu('services-perf')}
                                        >
                                            Performance Marketing
                                            <ChevronDown size={14} className={`transition-transform duration-300 ${openMenus['services-perf'] ? 'rotate-180' : ''}`} />
                                        </button>
                                        {openMenus['services-perf'] && (
                                            <ul className="py-2.5 bg-[#f4f7f9] px-8 text-[12.5px] space-y-4 text-gray-500 font-medium">
                                                <li><Link to="/paid-search-ads" onClick={handleLinkClick} className="block hover:text-[#00adef]">Search Ads</Link></li>
                                                <li><Link to="/display-advertising" onClick={handleLinkClick} className="block hover:text-[#00adef]">Display Advertising</Link></li>
                                                <li><Link to="/social-media-ads" onClick={handleLinkClick} className="block hover:text-[#00adef]">Social Media Ads</Link></li>
                                                <li><Link to="/shopping-ads" onClick={handleLinkClick} className="block hover:text-[#00adef]">Shopping Ads</Link></li>
                                                <li><Link to="/conversion-rate-optimization" onClick={handleLinkClick} className="block hover:text-[#00adef]">Conversion Rate Optimization</Link></li>
                                                <li><Link to="/revenue-generation" onClick={handleLinkClick} className="block hover:text-[#00adef]">Revenue Generation</Link></li>
                                                <li><Link to="/lead-generation" onClick={handleLinkClick} className="block hover:text-[#00adef]">Lead Generation</Link></li>
                                                <li><Link to="/consultancy-services" onClick={handleLinkClick} className="block hover:text-[#00adef]">Consultancy Services</Link></li>
                                                <li><Link to="/landing-pages" onClick={handleLinkClick} className="block hover:text-[#00adef]">Landing Pages</Link></li>
                                                <li><Link to="/real-estate-marketing" onClick={handleLinkClick} className="block hover:text-[#00adef]">Real Estate Marketing</Link></li>
                                            </ul>
                                        )}
                                    </div>

                                    {/* Creative */}
                                    <div className="border-b border-gray-100">
                                        <button
                                            className="w-full flex justify-between items-center px-6 py-3.5 font-semibold text-[13px] text-gray-700 focus:outline-none"
                                            onClick={() => toggleMenu('services-creative')}
                                        >
                                            Creative
                                            <ChevronDown size={14} className={`transition-transform duration-300 ${openMenus['services-creative'] ? 'rotate-180' : ''}`} />
                                        </button>
                                        {openMenus['services-creative'] && (
                                            <ul className="py-2.5 bg-[#f4f7f9] px-8 text-[12.5px] space-y-4 text-gray-500 font-medium">
                                                <li><a href="#" onClick={handleLinkClick} className="block hover:text-[#00adef]">Graphic Design</a></li>
                                                <li><a href="#" onClick={handleLinkClick} className="block hover:text-[#00adef]">Brand Strategy</a></li>
                                            </ul>
                                        )}
                                    </div>

                                    {/* Cloud */}
                                    <div className="border-b border-gray-100">
                                        <button
                                            className="w-full flex justify-between items-center px-6 py-3.5 font-semibold text-[13px] text-gray-700 focus:outline-none"
                                            onClick={() => toggleMenu('services-cloud')}
                                        >
                                            Cloud
                                            <ChevronDown size={14} className={`transition-transform duration-300 ${openMenus['services-cloud'] ? 'rotate-180' : ''}`} />
                                        </button>
                                        {openMenus['services-cloud'] && (
                                            <ul className="py-2.5 bg-[#f4f7f9] px-8 text-[12.5px] space-y-4 text-gray-500 font-medium">
                                                <li><Link to="/cloud-infrastructure" onClick={handleLinkClick} className="block hover:text-[#00adef]">Cloud Infrastructure</Link></li>
                                                <li><Link to="/cloud-migration" onClick={handleLinkClick} className="block hover:text-[#00adef]">Cloud Migration</Link></li>
                                            </ul>
                                        )}
                                    </div>

                                    {/* Insight & Analysis */}
                                    <div>
                                        <button
                                            className="w-full flex justify-between items-center px-6 py-3.5 font-semibold text-[13px] text-gray-700 focus:outline-none"
                                            onClick={() => toggleMenu('services-insight')}
                                        >
                                            Insight & Analysis
                                            <ChevronDown size={14} className={`transition-transform duration-300 ${openMenus['services-insight'] ? 'rotate-180' : ''}`} />
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* CASE STUDIES */}
                        <div className="border-b border-gray-200">
                            <button
                                className="w-full flex justify-between items-center px-5 py-4 font-bold text-[13px] uppercase tracking-wide text-gray-800 focus:outline-none"
                                onClick={() => toggleMenu('casestudies')}
                            >
                                CASE STUDIES
                                <ChevronDown size={16} className={`transition-transform duration-300 ${openMenus['casestudies'] ? 'rotate-180' : ''}`} />
                            </button>
                            {openMenus['casestudies'] && (
                                <ul className="py-4 bg-[#fafbfc] px-6 text-[13px] space-y-4 text-gray-600 font-medium border-t border-gray-100">
                                    <li><a href="#" onClick={handleLinkClick} className="block hover:text-[#00adef]">Real Estate</a></li>
                                    <li><a href="#" onClick={handleLinkClick} className="block hover:text-[#00adef]">Pharma & Healthcare</a></li>
                                    <li><a href="#" onClick={handleLinkClick} className="block hover:text-[#00adef]">Manufacturing</a></li>
                                    <li><a href="#" onClick={handleLinkClick} className="block hover:text-[#00adef]">Service Providers</a></li>
                                </ul>
                            )}
                        </div>

                        {/* CLIENTS {Just a link} */}
                        <a href="#clients" onClick={handleLinkClick} className="block px-5 py-4 font-bold text-[13px] uppercase tracking-wide text-gray-800 border-b border-gray-200 hover:text-brand-cyan">
                            CLIENTS
                        </a>

                        {/* OUR WORK */}
                        <div className="border-b border-gray-200">
                            <button
                                className="w-full flex justify-between items-center px-5 py-4 font-bold text-[13px] uppercase tracking-wide text-gray-800 focus:outline-none"
                                onClick={() => toggleMenu('ourwork')}
                            >
                                OUR WORK
                                <ChevronDown size={16} className={`transition-transform duration-300 ${openMenus['ourwork'] ? 'rotate-180' : ''}`} />
                            </button>
                            {openMenus['ourwork'] && (
                                <ul className="py-4 bg-[#fafbfc] px-6 text-[13px] space-y-4 text-gray-600 font-medium border-t border-gray-100">
                                    <li><Link to="/seo" onClick={handleLinkClick} className="block hover:text-[#00adef]">Search Engine Optimization</Link></li>
                                    <li><Link to="/paid-search-ads" onClick={handleLinkClick} className="block hover:text-[#00adef]">Performance Marketing</Link></li>
                                    <li><a href="#" onClick={handleLinkClick} className="block hover:text-[#00adef]">Web Design</a></li>
                                </ul>
                            )}
                        </div>

                        {/* PRICING */}
                        <div className="border-b border-gray-200">
                            <button
                                className="w-full flex justify-between items-center px-5 py-4 font-bold text-[13px] uppercase tracking-wide text-gray-800 focus:outline-none"
                                onClick={() => toggleMenu('pricing')}
                            >
                                PRICING
                                <ChevronDown size={16} className={`transition-transform duration-300 ${openMenus['pricing'] ? 'rotate-180' : ''}`} />
                            </button>
                            {openMenus['pricing'] && (
                                <ul className="py-4 bg-[#fafbfc] px-6 text-[13px] space-y-4 text-gray-600 font-medium border-t border-gray-100">
                                    <li><a href="#" onClick={handleLinkClick} className="block hover:text-[#00adef]">SEO Packages</a></li>
                                    <li><a href="#" onClick={handleLinkClick} className="block hover:text-[#00adef]">Social Media Packages</a></li>
                                    <li><a href="#" onClick={handleLinkClick} className="block hover:text-[#00adef]">Google PPC Packages</a></li>
                                </ul>
                            )}
                        </div>

                        {/* ABOUT */}
                        <div className="border-b border-gray-200">
                            <button
                                className="w-full flex justify-between items-center px-5 py-4 font-bold text-[13px] uppercase tracking-wide text-gray-800 focus:outline-none"
                                onClick={() => toggleMenu('about')}
                            >
                                ABOUT
                                <ChevronDown size={16} className={`transition-transform duration-300 ${openMenus['about'] ? 'rotate-180' : ''}`} />
                            </button>
                            {openMenus['about'] && (
                                <ul className="py-4 bg-[#fafbfc] px-6 text-[13px] space-y-4 text-gray-600 font-medium border-t border-gray-100">
                                    <li><Link to="/about" onClick={handleLinkClick} className="block hover:text-[#00adef]">About Mediawings</Link></li>
                                    <li><Link to="/about/directors-message" onClick={handleLinkClick} className="block hover:text-[#00adef]">Director's Message</Link></li>
                                    <li><Link to="/about/life-at-mediawings" onClick={handleLinkClick} className="block hover:text-[#00adef]">Life at Mediawings</Link></li>
                                    <li><Link to="/about/csr-activities" onClick={handleLinkClick} className="block hover:text-[#00adef]">CSR Activities</Link></li>
                                    <li><Link to="/about/events" onClick={handleLinkClick} className="block hover:text-[#00adef]">Events</Link></li>
                                    <li><Link to="/about/company-profile" onClick={handleLinkClick} className="block hover:text-[#00adef]">Company Profile</Link></li>
                                    <li><Link to="/about/executive-team" onClick={handleLinkClick} className="block hover:text-[#00adef]">Executive Team</Link></li>
                                    <li><Link to="/about/careers" onClick={handleLinkClick} className="block hover:text-[#00adef]">Careers</Link></li>
                                </ul>
                            )}
                        </div>

                        {/* Contact Form CTA inside menu */}
                        <div className="px-5 mt-8 mb-8">
                            <button
                                onClick={() => {
                                    handleLinkClick();
                                    openModal();
                                }}
                                className="w-full bg-[#00adef] hover:bg-[#0090c0] text-white font-bold py-3.5 px-6 rounded shadow-md text-sm uppercase tracking-wide"
                            >
                                Get a Quote
                            </button>
                        </div>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;
