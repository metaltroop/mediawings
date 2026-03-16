
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollFormModal from './components/ScrollFormModal';
import { ModalProvider } from './contexts/ModalContext';
import Home from './pages/Home';
import SeoPage from './pages/SeoPage';
import SmmPage from './pages/SmmPage';
import InfluencerPage from './pages/InfluencerPage';
import OrmPage from './pages/OrmPage';
import PpcPage from './pages/PpcPage';
import DisplayAdsPage from './pages/DisplayAdsPage';
import SocialAdsPage from './pages/SocialAdsPage';
import ShoppingAdsPage from './pages/ShoppingAdsPage';
import CroPage from './pages/CroPage';
import RevenueGenerationPage from './pages/RevenueGenerationPage';
import LeadGenerationPage from './pages/LeadGenerationPage';
import ConsultancyPage from './pages/ConsultancyPage';
import LandingPagesPage from './pages/LandingPagesPage';
import RealEstatePage from './pages/RealEstatePage';
import WebDevelopmentPage from './pages/WebDevelopmentPage';
import DigitalPrPage from './pages/DigitalPrPage';
import SoftwareDevelopmentPage from './pages/SoftwareDevelopmentPage';
import EcommercePage from './pages/EcommercePage';
import WordPressPage from './pages/WordPressPage';
import MobileAppsPage from './pages/MobileAppsPage';
import ProductDevelopmentPage from './pages/ProductDevelopmentPage';
import CloudInfrastructurePage from './pages/CloudInfrastructurePage';
import CloudMigrationPage from './pages/CloudMigrationPage';
import BrandDesignPage from './pages/BrandDesignPage';
import CommunicationDesignPage from './pages/CommunicationDesignPage';
import BrandStrategyPage from './pages/BrandStrategyPage';
import UiDesignPage from './pages/UiDesignPage';
import UserExperiencePage from './pages/UserExperiencePage';
import ProductDesignPage from './pages/ProductDesignPage';
import ContentStrategyPage from './pages/ContentStrategyPage';
import CommunicationsPage from './pages/CommunicationsPage';
import DedicatedResourcesPage from './pages/DedicatedResourcesPage';
import CmsDevelopmentPage from './pages/CmsDevelopmentPage';
import MicrosoftEmailPage from './pages/MicrosoftEmailPage';
import EcommerceHostingPage from './pages/EcommerceHostingPage';
import GoogleWorkspacePage from './pages/GoogleWorkspacePage';
import BusinessMailPage from './pages/BusinessMailPage';
import WebHostingPage from './pages/WebHostingPage';
import AwsHostingPage from './pages/AwsHostingPage';
import AzureHostingPage from './pages/AzureHostingPage';
import CloudSupportPage from './pages/CloudSupportPage';

// Case Studies
import RealEstateCasePage from './pages/RealEstateCasePage';
import PharmaCasePage from './pages/PharmaCasePage';
import ManufacturingCasePage from './pages/ManufacturingCasePage';
import ServiceProvidersCasePage from './pages/ServiceProvidersCasePage';
import GovernmentCasePage from './pages/GovernmentCasePage';
import EducationCasePage from './pages/EducationCasePage';
import EcommerceCasePage from './pages/EcommerceCasePage';

// Pricing Pages
import SeoPricingPage from './pages/pricing/SeoPricingPage';
import SmmPricingPage from './pages/pricing/SmmPricingPage';
import PpcPricingPage from './pages/pricing/PpcPricingPage';
import WebDevPricingPage from './pages/pricing/WebDevPricingPage';
import DesignPricingPage from './pages/pricing/DesignPricingPage';
import ContentPricingPage from './pages/pricing/ContentPricingPage';
import DedicatedStaffPricingPage from './pages/pricing/DedicatedStaffPricingPage';
import AppEcomPricingPage from './pages/pricing/AppEcomPricingPage';

// Insights Pages
import BlogPage from './pages/insights/BlogPage';
import NewsPage from './pages/insights/NewsPage';
import TestimonialsPage from './pages/insights/TestimonialsPage';

// About Pages
import AboutPage from './pages/about/AboutPage';
import DirectorsMessagePage from './pages/about/DirectorsMessagePage';
import LifePage from './pages/about/LifePage';
import CsrEventsPage from './pages/about/CsrEventsPage';
import ExecutiveTeamPage from './pages/about/ExecutiveTeamPage';
import CompanyProfilePage from './pages/about/CompanyProfilePage';

function App() {
    return (
        <ModalProvider>
            <Router>
                <div className="min-h-screen flex flex-col items-stretch overflow-x-hidden font-sans">
                    <Header />
                    <main className="grow">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/seo" element={<SeoPage />} />
                            <Route path="/social-media-management" element={<SmmPage />} />
                            <Route path="/influencer-marketing" element={<InfluencerPage />} />
                            <Route path="/online-reputation-management" element={<OrmPage />} />
                            <Route path="/paid-search-ads" element={<PpcPage />} />
                            <Route path="/display-advertising" element={<DisplayAdsPage />} />
                            <Route path="/social-media-ads" element={<SocialAdsPage />} />
                            <Route path="/shopping-ads" element={<ShoppingAdsPage />} />
                            <Route path="/conversion-rate-optimization" element={<CroPage />} />
                            <Route path="/revenue-generation" element={<RevenueGenerationPage />} />
                            <Route path="/lead-generation" element={<LeadGenerationPage />} />
                            <Route path="/consultancy-services" element={<ConsultancyPage />} />
                            <Route path="/landing-pages" element={<LandingPagesPage />} />
                            <Route path="/real-estate-marketing" element={<RealEstatePage />} />
                            <Route path="/web-development" element={<WebDevelopmentPage />} />
                            <Route path="/digital-pr" element={<DigitalPrPage />} />
                            <Route path="/software-development" element={<SoftwareDevelopmentPage />} />
                            <Route path="/ecommerce-development" element={<EcommercePage />} />
                            <Route path="/wordpress-development" element={<WordPressPage />} />
                            <Route path="/mobile-apps" element={<MobileAppsPage />} />
                            <Route path="/product-development" element={<ProductDevelopmentPage />} />
                            <Route path="/cloud-infrastructure" element={<CloudInfrastructurePage />} />
                            <Route path="/cloud-migration" element={<CloudMigrationPage />} />
                            <Route path="/brand-design" element={<BrandDesignPage />} />
                            <Route path="/communication-design" element={<CommunicationDesignPage />} />
                            <Route path="/brand-strategy" element={<BrandStrategyPage />} />
                            <Route path="/ui-design" element={<UiDesignPage />} />
                            <Route path="/user-experience" element={<UserExperiencePage />} />
                            <Route path="/product-design" element={<ProductDesignPage />} />
                            <Route path="/content-strategy" element={<ContentStrategyPage />} />
                            <Route path="/communications" element={<CommunicationsPage />} />
                            <Route path="/dedicated-resources" element={<DedicatedResourcesPage />} />
                            <Route path="/cms-development" element={<CmsDevelopmentPage />} />
                            <Route path="/microsoft-emails" element={<MicrosoftEmailPage />} />
                            <Route path="/ecommerce-hosting" element={<EcommerceHostingPage />} />
                            <Route path="/google-workspace" element={<GoogleWorkspacePage />} />
                            <Route path="/business-mail" element={<BusinessMailPage />} />
                            <Route path="/hosting" element={<WebHostingPage />} />
                            <Route path="/aws-hosting" element={<AwsHostingPage />} />
                            <Route path="/azure-hosting" element={<AzureHostingPage />} />
                            <Route path="/cloud-support" element={<CloudSupportPage />} />

                            {/* Case Studies */}
                            <Route path="/success-stories/real-estate" element={<RealEstateCasePage />} />
                            <Route path="/success-stories/pharma-healthcare" element={<PharmaCasePage />} />
                            <Route path="/success-stories/manufacturing" element={<ManufacturingCasePage />} />
                            <Route path="/success-stories/service-providers" element={<ServiceProvidersCasePage />} />
                            <Route path="/success-stories/governments" element={<GovernmentCasePage />} />
                            <Route path="/success-stories/education" element={<EducationCasePage />} />
                            <Route path="/success-stories/ecommerce" element={<EcommerceCasePage />} />

                            {/* Pricing */}
                            <Route path="/pricing/seo-packages" element={<SeoPricingPage />} />
                            <Route path="/pricing/social-media-packages" element={<SmmPricingPage />} />
                            <Route path="/pricing/google-ppc-packages" element={<PpcPricingPage />} />
                            <Route path="/pricing/web-development" element={<WebDevPricingPage />} />
                            <Route path="/pricing/design-packages" element={<DesignPricingPage />} />
                            <Route path="/pricing/content-writing" element={<ContentPricingPage />} />
                            <Route path="/pricing/dedicated-staff" element={<DedicatedStaffPricingPage />} />
                            <Route path="/pricing/ecommerce-mobile-apps" element={<AppEcomPricingPage />} />

                            {/* Insights */}
                            <Route path="/insights/blog" element={<BlogPage />} />
                            <Route path="/insights/news" element={<NewsPage />} />
                            <Route path="/insights/testimonials" element={<TestimonialsPage />} />

                            {/* About Section */}
                            <Route path="/about" element={<AboutPage />} />
                            <Route path="/about/directors-message" element={<DirectorsMessagePage />} />
                            <Route path="/about/life-at-mediawings" element={<LifePage />} />
                            <Route path="/about/careers" element={<LifePage />} />
                            <Route path="/about/csr-activities" element={<CsrEventsPage />} />
                            <Route path="/about/events" element={<CsrEventsPage />} />
                            <Route path="/about/executive-team" element={<ExecutiveTeamPage />} />
                            <Route path="/about/company-profile" element={<CompanyProfilePage />} />
                        </Routes>
                    </main>
                    <Footer />
                    <ScrollFormModal />
                </div>
            </Router>
        </ModalProvider>
    );
}

export default App;
