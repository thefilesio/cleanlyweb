import { MessageCircle, User, Eye, Sparkles } from "lucide-react";

const ProcessSection = () => {
  const steps = [
    {
      icon: MessageCircle,
      title: "Anfrage senden",
      description: "Kontaktieren Sie uns über das Formular oder WhatsApp"
    },
    {
      icon: User,
      title: "Persönliche Beratung",
      description: "Wir besprechen Ihre Anforderungen und erstellen ein individuelles Angebot"
    },
    {
      icon: Eye,
      title: "Vor-Ort-Besichtigung",
      description: "Kostenlose Begutachtung für ein maßgeschneidertes Konzept"
    },
    {
      icon: Sparkles,
      title: "Reinigung nach Wunsch",
      description: "Professionelle Durchführung nach Ihren Vorstellungen"
    }
  ];

  return (
    <section className="py-20 gradient-section">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-clean-text mb-4">
              Wie es funktioniert
            </h2>
            <p className="text-xl text-clean-text-muted max-w-2xl mx-auto">
              Einfacher Ablauf für Ihre perfekte Reinigung
            </p>
          </div>

          {/* Steps */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div 
                  key={step.title}
                  className="relative text-center animate-slide-up"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Step number */}
                  <div className="absolute -top-4 -left-4 w-8 h-8 bg-clean-green text-white rounded-full flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </div>

                  {/* Icon */}
                  <div className="w-20 h-20 bg-clean-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-card">
                    <Icon className="h-10 w-10 text-clean-green" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-clean-text mb-3">
                    {step.title}
                  </h3>
                  <p className="text-clean-text-muted leading-relaxed">
                    {step.description}
                  </p>

                  {/* Connector line (hidden on last item) */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-10 right-0 w-full h-0.5 bg-clean-green opacity-30 transform translate-x-1/2"></div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;