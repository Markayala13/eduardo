import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <img
              src="/logo/ChatGPT_Image_21_dic_2025__06_58_07_p.m.-removebg-preview.png"
              alt="Eduardo's Landscaping Logo"
              className="h-40 w-auto mb-4"
            />
            <p className="text-white/80 mb-4">
              Professional landscaping services to keep your property looking
              its best. Ready to help transform your yard.
            </p>
            <div className="flex items-center gap-2 text-accent">
              <div className="w-3 h-3 bg-accent rounded-full animate-pulse" />
              <span className="text-sm font-semibold">
                Serving Phoenix Area
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-bold mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className="text-white/80 hover:text-accent transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-white/80 hover:text-accent transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-white/80 hover:text-accent transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-white/80 hover:text-accent transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading text-lg font-bold mb-4">
              Get in Touch
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:4808695216"
                  className="flex items-center gap-3 text-white/80 hover:text-accent transition-colors group"
                >
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-white/60">Call us</p>
                    <p className="font-semibold">480-869-5216</p>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="sms:4808695216"
                  className="flex items-center gap-3 text-white/80 hover:text-accent transition-colors group"
                >
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-white/60">Text us</p>
                    <p className="font-semibold">Fast quotes</p>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/60 text-sm">
            &copy; {currentYear} Eduardo&apos;s Landscaping. All rights
            reserved.
          </p>
          <div className="text-center md:text-right">
            <p className="text-white/60 text-sm">
              Serving the community with professional care
            </p>
            <p className="text-white/40 text-xs mt-1">
              made by <a href="https://antoshkadev.com/" rel="nofollow" className="hover:text-white/60 transition-colors">Antoshkadev</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
