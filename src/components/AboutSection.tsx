import { Heart, Award, Users } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 gradient-section">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            {/* Content */}
            <div className="space-y-6">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-clean-text mb-4">
                  Über uns
                </h2>
                <h3 className="text-2xl md:text-3xl font-semibold text-clean-green mb-6">
                  Cleanly
                </h3>
              </div>

              <p className="text-lg text-clean-text-muted leading-relaxed">
                Wir von Cleanly führen unser Unternehmen mit Leidenschaft und höchsten 
                Ansprüchen an Sauberkeit. Persönliche Betreuung, faire Preise und 
                nachhaltige Ergebnisse stehen für uns an erster Stelle.
              </p>

              <p className="text-lg text-clean-text-muted leading-relaxed">
                Als junges, wachsendes Unternehmen aus Duisburg setzen wir auf Qualität, 
                Vertrauen und eine persönliche Note bei jedem Auftrag.
              </p>

              {/* Key features */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-clean-green rounded-full flex items-center justify-center mx-auto mb-4 shadow-soft">
                    <Heart className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="font-semibold text-clean-text">Persönlich</h4>
                  <p className="text-sm text-clean-text-muted">Individuelle Betreuung</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-clean-green rounded-full flex items-center justify-center mx-auto mb-4 shadow-soft">
                    <Award className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="font-semibold text-clean-text">Qualität</h4>
                  <p className="text-sm text-clean-text-muted">Höchste Standards</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-clean-green rounded-full flex items-center justify-center mx-auto mb-4 shadow-soft">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="font-semibold text-clean-text">Vertrauen</h4>
                  <p className="text-sm text-clean-text-muted">Zuverlässige Partner</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
