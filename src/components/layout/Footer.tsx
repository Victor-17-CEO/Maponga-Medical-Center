import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img
                src="/lovable-uploads/53c4e483-e606-4075-b80e-e2db1f28a958.png"
                alt="MedCenter logo"
                className="h-8 w-8 rounded-sm object-contain"
              />
              <span className="text-xl font-bold text-foreground">MedCenter</span>
            </div>
            <p className="text-muted-foreground text-sm">
            Your trusted healthcare partner dedicated to deliver exceprional care, close to home
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/services" className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                Our Services
              </Link>
              <Link to="/about" className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                About Us
              </Link>
              <Link to="/appointment" className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                Book Appointment
              </Link>
              <Link to="/faq" className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                FAQ
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-primary" />
                <a href="tel:+263672124345" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  +263 (67) 2124345
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-primary" />
                <a href="mailto:info@medcenter.com" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  info@mapongamedcenter.com
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-primary mt-0.5" />
                <span className="text-muted-foreground text-sm">
                Stand 15193<br />
                Millenium Prk, Chinhoyi
                </span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Hours</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <Clock className="w-4 h-4 text-primary" />
                <div className="text-sm">
                  <div className="text-foreground font-medium">24 Hrs</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © {currentYear} MedCenter. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;