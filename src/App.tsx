import { Header } from './components/Header'; 
import { Hero } from './components/Hero';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header 
        logo={{
          src: "/images/product-logo.svg",
          alt: "Product"
        }}
        navItems={[
          { text: "Features", href: "#" },
          { text: "Pricing", href: "#" },
          { text: "Customers", href: "#" },
          { text: "Resources", href: "#" }
        ]}
      />
      <Hero 
        title="Work at the speed of thought"
        subtitle="Tools, tutorials, design and innovation experts, all in one place! The most intuitive way to imagine your next user experience."
        buttonText="Get started"
        onButtonClick={() => console.log('Get started clicked')}
      />
      <Footer 
        contactInfo={{
          email: "info@product.com",
          address: "Made with ❤️ by Figmaland all right reserved"
        }}
        links={[
          {
            title: "Resource",
            items: ["About Us", "Blog", "Contact", "FAQ"]
          },
          {
            title: "Legal Stuff",
            items: ["Disclaimer", "Financing", "Privacy Policy", "Terms of Service"]
          }
        ]}
      />
    </div>
  );
}

export default App;