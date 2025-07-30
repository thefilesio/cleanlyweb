import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    clientType: '',
    objectType: '',
    area: '',
    frequency: '',
    specialRequests: '',
    location: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create email content
    const emailContent = `
Neue Anfrage von ${formData.name}

Kontaktdaten:
- Name: ${formData.name}
- E-Mail: ${formData.email}
- Telefon: ${formData.phone}
- Standort: ${formData.location}

Projektdetails:
- Kundentyp: ${formData.clientType}
- Objektart: ${formData.objectType}
- Fläche: ${formData.area} m²
- Reinigungsfrequenz: ${formData.frequency}
- Besondere Wünsche: ${formData.specialRequests || 'Keine'}
    `;

    // Create mailto link
    const mailtoLink = `mailto:reinigung.cleanly@gmail.com?subject=Neue Reinigungsanfrage von ${formData.name}&body=${encodeURIComponent(emailContent)}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    toast({
      title: "Anfrage wird gesendet",
      description: "Ihr E-Mail-Programm wird geöffnet. Wir melden uns innerhalb von 24 Stunden bei Ihnen.",
    });
  };

  const handleInputChange = (name: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section id="contact" className="py-20 bg-clean-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-clean-text mb-4">
              Jetzt Anfrage senden
            </h2>
            <p className="text-xl text-clean-text-muted max-w-2xl mx-auto">
              Lassen Sie uns über Ihr Reinigungsprojekt sprechen. 
              Wir erstellen Ihnen gerne ein individuelles Angebot.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-clean-white rounded-2xl p-8 shadow-card">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-clean-text mb-2">
                      Name *
                    </label>
                    <Input
                      required
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-clean-text mb-2">
                      E-Mail *
                    </label>
                    <Input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="w-full"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-clean-text mb-2">
                      Telefonnummer
                    </label>
                    <Input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-clean-text mb-2">
                      Privat oder Gewerbe? *
                    </label>
                    <Select value={formData.clientType} onValueChange={(value) => handleInputChange('clientType', value)}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Auswählen" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="privat">Privat</SelectItem>
                        <SelectItem value="gewerbe">Gewerbe</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-clean-text mb-2">
                      Objektart *
                    </label>
                    <Select value={formData.objectType} onValueChange={(value) => handleInputChange('objectType', value)}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Auswählen" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="büro">Büro</SelectItem>
                        <SelectItem value="praxis">Praxis</SelectItem>
                        <SelectItem value="wohnung">Wohnung</SelectItem>
                        <SelectItem value="studio">Studio</SelectItem>
                        <SelectItem value="treppenhaus">Treppenhaus</SelectItem>
                        <SelectItem value="sonstiges">Sonstiges</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-clean-text mb-2">
                      Fläche (m²) *
                    </label>
                    <Input
                      type="number"
                      required
                      value={formData.area}
                      onChange={(e) => handleInputChange('area', e.target.value)}
                      className="w-full"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-clean-text mb-2">
                      Reinigungsfrequenz *
                    </label>
                    <Select value={formData.frequency} onValueChange={(value) => handleInputChange('frequency', value)}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Auswählen" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="einmalig">Einmalig</SelectItem>
                        <SelectItem value="wöchentlich">Wöchentlich</SelectItem>
                        <SelectItem value="2x wöchentlich">2x wöchentlich</SelectItem>
                        <SelectItem value="monatlich">Monatlich</SelectItem>
                        <SelectItem value="nach Vereinbarung">Nach Vereinbarung</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-clean-text mb-2">
                      Standort (PLZ / Stadt) *
                    </label>
                    <Input
                      required
                      value={formData.location}
                      onChange={(e) => handleInputChange('location', e.target.value)}
                      className="w-full"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-clean-text mb-2">
                    Besondere Wünsche
                  </label>
                  <Textarea
                    value={formData.specialRequests}
                    onChange={(e) => handleInputChange('specialRequests', e.target.value)}
                    className="w-full"
                    rows={4}
                    placeholder="Beschreiben Sie hier besondere Anforderungen oder Wünsche..."
                  />
                </div>

                <Button 
                  type="submit" 
                  variant="cleanly" 
                  size="lg" 
                  className="w-full"
                >
                  Anfrage senden
                </Button>

                <p className="text-sm text-clean-text-muted text-center">
                  <Clock className="inline h-4 w-4 mr-1" />
                  Wir melden uns in der Regel innerhalb von 24 Stunden.
                </p>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-clean-white rounded-2xl p-8 shadow-card">
                <h3 className="text-2xl font-bold text-clean-text mb-6">
                  Kontaktinformationen
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 text-clean-green mr-3" />
                    <div>
                      <p className="font-medium text-clean-text">Adresse</p>
                      <p className="text-clean-text-muted">Schwarzenberger Straße 131, 47226 Duisburg</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-clean-green mr-3" />
                    <div>
                      <p className="font-medium text-clean-text">E-Mail</p>
                      <p className="text-clean-text-muted">reinigung.cleanly@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-clean-green mr-3" />
                    <div>
                      <p className="font-medium text-clean-text">Telefon</p>
                      <p className="text-clean-text-muted">+49 3177 2326771</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-clean-green to-clean-green-hover rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">
                  Schnelle Kontaktaufnahme
                </h3>
                <p className="mb-6">
                  Schreiben Sie uns direkt über WhatsApp für eine schnelle Antwort!
                </p>
                <Button 
                  variant="whatsapp" 
                  size="lg" 
                  className="w-full"
                  onClick={() => window.open('https://wa.me/4931772326771?text=Hey!%20Ich%20h%C3%A4tte%20Interesse%20an%20ihrem%20Service!', '_blank')}
                >
                  WhatsApp öffnen
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;