import { 
  Building, 
  Stethoscope, 
  Glasses, 
  ArrowUp, 
  Home, 
  Camera 
} from "lucide-react";

const ServicesSection = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
      });
    }
  };

  const services = [
    {
      icon: Building,
      title: "Büroreinigung",
      description: "Professionelle Reinigung von Büroräumen und Arbeitsplätzen"
    },
    {
      icon: Stethoscope,
      title: "Praxisreinigung",
      description: "Hygienische Reinigung für Arztpraxen und medizinische Einrichtungen"
    },
    {
      icon: Glasses,
      title: "Fensterreinigung",
      description: "Streifenfreie Fensterreinigung für kristallklare Sicht"
    },
    {
      icon: ArrowUp,
      title: "Treppenhausreinigung",
      description: "Regelmäßige Reinigung von Treppenhäusern und Gemeinschaftsbereichen"
    },
    {
      icon: Home,
      title: "Haushaltsreinigung",
      description: "Umfassende Reinigung für Ihr Zuhause - gründlich und zuverlässig"
    },
    {
      icon: Camera,
      title: "Studioreinigung",
      description: "Spezielle Reinigung für Studios und kreative Arbeitsräume"
    }
  ];

  return (
    <section className="py-20 bg-clean-white">
      <div className="container mx-auto px-6 sm:px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-clean-text mb-4">
              Unsere Leistungen
            </h2>
            <p className="text-xl text-clean-text-muted max-w-2xl mx-auto">
              Professionelle Reinigungsdienste für alle Bereiche - 
              angepasst an Ihre individuellen Bedürfnisse
            </p>
          </div>

          {/* Services grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div 
                  key={service.title}
                  className="bg-clean-white rounded-2xl p-8 shadow-card hover-lift animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-16 h-16 bg-clean-green rounded-full flex items-center justify-center mb-6 shadow-soft">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-clean-text mb-3">
                    {service.title}
                  </h3>
                  
                  <p className="text-clean-text-muted leading-relaxed">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <p className="text-lg text-clean-text-muted mb-6">
              Benötigen Sie eine andere Art der Reinigung?
            </p>
            <button 
              onClick={scrollToContact}
              className="text-clean-green font-semibold hover:text-clean-green-hover transition-smooth cursor-pointer"
            >
              Lassen Sie uns darüber sprechen →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
