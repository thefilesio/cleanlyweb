import { Mail, Phone, MapPin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-clean-text text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Company Info */}
            <div>
              <h3 className="text-2xl font-bold mb-4">Cleanly</h3>
              <p className="text-gray-300 mb-6">
                Ihr zuverlässiger Partner für professionelle Reinigungsdienste 
                in Duisburg und Umgebung.
              </p>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="w-10 h-10 bg-clean-green rounded-full flex items-center justify-center hover:bg-clean-green-hover transition-smooth"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Kontakt</h4>
              <div className="space-y-3">
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 text-clean-green mr-3" />
                  <span className="text-gray-300 text-sm">
                    Schwarzenberger Straße 131, 47226 Duisburg
                  </span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-4 w-4 text-clean-green mr-3" />
                  <a 
                    href="mailto:reinigung.cleanly@gmail.com" 
                    className="text-gray-300 text-sm hover:text-clean-green transition-smooth"
                  >
                    reinigung.cleanly@gmail.com
                  </a>
                </div>
                <div className="flex items-center">
                  <Phone className="h-4 w-4 text-clean-green mr-3" />
                  <a 
                    href="tel:+491712326771" 
                    className="text-gray-300 text-sm hover:text-clean-green transition-smooth"
                  >
                    +49 171 2326771
                  </a>
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Leistungen</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>Büroreinigung</li>
                <li>Praxisreinigung</li>
                <li>Fensterreinigung</li>
                <li>Treppenhausreinigung</li>
                <li>Haushaltsreinigung</li>
                <li>Studioreinigung</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Cleanly. Alle Rechte vorbehalten.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;