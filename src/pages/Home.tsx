
import Hero from '../components/Hero';
import Services from '../components/Services';
import Stats from '../components/Stats';
import CaseStudies from '../components/CaseStudies';
import Testimonials from '../components/Testimonials';
import Blogs from '../components/Blogs';
import FAQ from '../components/FAQ';
import ContactForm from '../components/ContactForm';

const Home = () => {
    return (
        <>
            <Hero />
            <Services />
            <Stats />
            <CaseStudies />
            <Testimonials />
            <Blogs />
            <FAQ />
            <ContactForm />
        </>
    );
};

export default Home;
