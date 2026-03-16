import { Link } from 'react-router-dom';
import { Search, Calendar, User, ArrowRight } from 'lucide-react';

const BlogPage = () => {
    const categories = ["All", "Digital Marketing", "Technology", "Design", "Business Growth", "Case Studies"];
    
    const posts = [
        {
            title: "How Al is Revolutionizing Modern Digital Marketing",
            excerpt: "Explore the transformative power of artificial intelligence in automating campaigns and personalizing user experiences.",
            category: "Technology",
            date: "March 10, 2026",
            author: "Admin",
            image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800"
        },
        {
            title: "10 SEO Trends to Dominate Search in 2026",
            excerpt: "Stay ahead of the competition with these essential search engine optimization strategies for the coming year.",
            category: "Digital Marketing",
            date: "March 05, 2026",
            author: "Marketing Lead",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
        },
        {
            title: "Why Minimalist Design is Winning Customer Trust",
            excerpt: "Discover how clean, simplified user interfaces are driving higher conversion rates and brand loyalty.",
            category: "Design",
            date: "February 28, 2026",
            author: "Design Head",
            image: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=800"
        },
        {
            title: "Scaling Your SaaS: From MVP to Global Leader",
            excerpt: "Key insights into infrastructure, marketing, and team scaling for rapidly growing software businesses.",
            category: "Business Growth",
            date: "February 20, 2026",
            author: "CEO",
            image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800"
        },
        {
            title: "The Future of Mobile App Development with Flutter",
            excerpt: "Why cross-platform development is becoming the standard for enterprise-grade mobile solutions.",
            category: "Technology",
            date: "February 15, 2026",
            author: "Tech Lead",
            image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800"
        },
        {
            title: "Content Strategy: Beyond Just Writing Articles",
            excerpt: "Learn how to build a multi-channel content ecosystem that actually drives revenue.",
            category: "Digital Marketing",
            date: "February 10, 2026",
            author: "Content Lead",
            image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=800"
        }
    ];

    return (
        <div className="bg-white min-h-screen">
            {/* Header section */}
            <section className="pt-32 pb-16 bg-gray-50 uppercase">
                <div className="max-w-[1440px] mx-auto px-4 md:px-8">
                    <div className="max-w-3xl">
                        <h1 className="text-5xl md:text-8xl font-black text-black mb-6 tracking-tighter italic">
                            The <span className="text-brand-cyan">Blog</span>
                        </h1>
                        <p className="text-gray-500 text-lg md:text-xl font-medium max-w-2xl leading-relaxed">
                            Deep dives into marketing, technology, and design. Stay ahead with MediaWings insights.
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-20">
                <div className="max-w-[1440px] mx-auto px-4 md:px-8">
                    {/* Search & Categories */}
                    <div className="flex flex-col lg:flex-row justify-between items-center mb-16 gap-8 pb-8 border-b border-gray-100">
                        <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                            {categories.map((cat, idx) => (
                                <button 
                                    key={idx} 
                                    className={`px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest transition-all ${idx === 0 ? 'bg-brand-cyan text-white' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'}`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                        <div className="relative w-full lg:w-96">
                            <input 
                                type="text" 
                                placeholder="Search articles..." 
                                className="w-full bg-gray-50 border-none rounded-2xl py-4 pl-12 pr-6 text-sm font-bold focus:ring-2 focus:ring-brand-cyan transition-all"
                            />
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                        </div>
                    </div>

                    {/* Blog Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {posts.map((post, idx) => (
                            <Link key={idx} to="#" className="group">
                                <article className="flex flex-col h-full bg-white rounded-4xl overflow-hidden transition-all duration-500 hover:shadow-2xl border border-transparent hover:border-gray-100">
                                    <div className="relative aspect-16/10 overflow-hidden">
                                        <img 
                                            src={post.image} 
                                            alt={post.title} 
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                                        />
                                        <div className="absolute top-6 left-6">
                                            <span className="bg-white/90 backdrop-blur-sm text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full text-brand-cyan shadow-sm">
                                                {post.category}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="p-10 flex flex-col grow">
                                        <div className="flex items-center gap-6 text-[10px] font-black text-gray-400 uppercase tracking-widest mb-6">
                                            <span className="flex items-center gap-2"><Calendar className="w-3.5 h-3.5" /> {post.date}</span>
                                            <span className="flex items-center gap-2"><User className="w-3.5 h-3.5" /> {post.author}</span>
                                        </div>
                                        <h3 className="text-2xl font-black text-black mb-4 group-hover:text-brand-cyan transition-colors leading-tight">
                                            {post.title}
                                        </h3>
                                        <p className="text-gray-500 text-sm leading-relaxed mb-8 font-medium line-clamp-3">
                                            {post.excerpt}
                                        </p>
                                        <div className="mt-auto flex items-center gap-2 text-brand-cyan font-black uppercase tracking-widest text-[10px] group-hover:gap-4 transition-all pb-4">
                                            Read Article <ArrowRight className="w-4 h-4" />
                                        </div>
                                    </div>
                                </article>
                            </Link>
                        ))}
                    </div>

                    {/* Pagination */}
                    <div className="mt-24 flex justify-center gap-4">
                        <button className="w-12 h-12 rounded-2xl bg-gray-100 flex items-center justify-center font-black text-black hover:bg-brand-cyan hover:text-white transition-all">1</button>
                        <button className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center font-black text-gray-400 hover:bg-brand-cyan hover:text-white transition-all">2</button>
                        <button className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center font-black text-gray-400 hover:bg-brand-cyan hover:text-white transition-all">3</button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BlogPage;
