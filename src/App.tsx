import { Header } from './components/Header/Header';
import { Hero } from './components/Hero/Hero';
import { Footer } from './components/Footer/Footer';
import { ProductFeatures } from './components/ProductFeatures/ProductFeatures';
import { Management } from './components/Management/Management';
import { CustomerSupport } from './components/CustomerSupport/CustomerSupport';
import { Process } from './components/Process/Process';
import { ContentStrategies } from './components/ContentStrategies/ContentStrategies';
import { PriceTable } from './components/PriceTable/PriceTable';
import { Testimonials } from './components/Testimonials/Testimonials';
import { CallToAction } from './components/CallToAction/CallToAction';

const socialLinks = [
  { icon: "/icons/instagram.svg", href: "#", name: "Instagram" },
  { icon: "/icons/facebook.svg", href: "#", name: "Facebook" },
  { icon: "/icons/twitter.svg", href: "#", name: "Twitter" }
];

function App() {
  return (
    <div className="App">
      <Header 
        logo={{
          src: "/images/product-logo.svg",
          alt: "Product"
        }}
        navItems={[
          { text: "Product", href: "#" },
          { text: "Pricing", href: "#" },
          { text: "Customers", href: "#" },
          { text: "Resources", href: "#" }
        ]}
      />
      <Hero 
        title="Work at the speed of thought"
        subtitle="Tools, tutorials, design and innovation experts, all in one place! The most intuitive way to imagine your next user experience."
      />
      <ProductFeatures 
        features={[
          {
            icon: "/icons/click.svg",
            colorClass: "green",
            title: "First click tests",
            description: "While most people enjoy casino gambling,"
          },
          {
            icon: "/icons/design.svg",
            colorClass: "blue",
            title: "Design surveys",
            description: "Sports betting, lottery and bingo playing for the fun"
          },
          {
            icon: "/icons/heart.svg",
            colorClass: "purple",
            title: "Preference tests",
            description: "The Myspace page defines the individual."
          },
          {
            icon: "/icons/timer.svg",
            colorClass: "red",
            title: "Five second tests",
            description: "Personal choices and the overall personality of the person."
          }
        ]}
      />
      <Management 
        title="Management"
        description="The Myspace page defines the individual, his or her characteristics, traits, personal choices and the overall personality of the person."
        features={[
          "Accessory makers",
          "Alterationists",
          "If you are looking for a new way to promote your business that won't cost you more money,"
        ]}
      />
      <CustomerSupport 
        subtitle="Easier decision making for"
        title="Customer Support"
        description="The Myspace page defines the individual, his or her characteristics, traits, personal choices and the overall personality of the person."
        features={[
          {
            icon: "/icons/yellow-check.svg",
            text: "Never worry about overpaying for your energy again."
          },
          {
            icon: "/icons/red-check.svg",
            text: "We will only switch you to energy companies that we trust and will treat you right"
          },
          {
            icon: "/icons/blue-check.svg",
            text: "We track the markets daily and know where the savings are."
          }
        ]}
      />
      <Process 
        title="Quick & Easy Process"
        subtitle="Do you require some help for your project: Conception workshop, prototyping, marketing strategy, landing page, Ux/UI?"
        steps={[
          {
            avatar: "/images/avatars/avatar-1.jpg",
            text: "I can take care of your pitch"
          },
          {
            avatar: "/images/avatars/avatar-2.jpg",
            text: "I can prototype your app"
          },
          {
            avatar: "/images/avatars/avatar-3.jpg",
            text: "I can take care of your pitch"
          },
          {
            avatar: "/images/avatars/avatar-4.jpg",
            text: "I can help marketing strategy"
          }
        ]}
      />
      <ContentStrategies 
        title="Contents Strategies"
        subtitle="We focus on ergonomics and meeting you where you work. It's only a keystroke away."
        articles={[
          {
            image: "/images/articles/increasing-prosperity.jpg",
            author: "Wahid Ari",
            date: "03 March 2019",
            title: "Increasing Prosperity With Positive Thinking"
          },
          {
            image: "/images/articles/motivation.jpg",
            author: "Wahid Ari",
            date: "03 March 2019",
            title: "Motivation Is The First Step To Success"
          },
          {
            image: "/images/articles/success-steps.jpg",
            author: "Wahid Ari",
            date: "03 March 2019",
            title: "Success Steps For Your Personal Or Business"
          }
        ]}
      />
      <PriceTable 
        title="Price Table"
        subtitle="We offer competitive price"
        plans={[
          {
            name: "Free",
            description: "Brief price description",
            price: 0,
            features: [
              { text: "Only 2 Operators" },
              { text: "Notifications" },
              { text: "Landing Pages" }
            ]
          },
          {
            name: "Standard",
            description: "Brief price description",
            price: 5,
            features: [
              { text: "5+ Operators" },
              { text: "Notifications" },
              { text: "Landing Pages" }
            ],
            isPopular: true
          },
          {
            name: "Premium",
            description: "Brief price description",
            price: 10,
            features: [
              { text: "10+ Operators" },
              { text: "Notifications" },
              { text: "Landing Pages" }
            ]
          }
        ]}
      />
      <Testimonials 
        title="What Clients Say"
        subtitle="Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics"
        testimonials={[
          {
            rating: 4,
            text: "Product helps you see how many more days you need to work to reach your financial goal.",
            author: {
              name: "Wahid Ari",
              role: "Designer",
              avatar: "/images/avatars/wahid.jpg"
            }
          },
          // ... інші відгуки
        ]}
      />
      
      <CallToAction 
        title="Join 100 Compannies who boost their business with Product"
        buttonText="Get This"
        image="/images/statistics.svg"
      />
      <Footer 
        logo={{
          src: "/images/product-logo.svg",
          alt: "Product"
        }}
        socialLinks={socialLinks}
        sections={[
          {
            title: "Resource",
            links: ["About Us", "Blog", "Contact", "FAQ"]
          },
          {
            title: "Legal Stuff",
            links: ["Disclaimer", "Financing", "Privacy Policy"]
          }
        ]}
      />
    </div>
  );
}

export default App;