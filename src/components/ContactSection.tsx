import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState("idle");
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
    
    const form = formRef.current;
    if (!form || !form.reportValidity()) return;

    const data = new FormData(form);
    data.append("_subject", "Neue Reinigungsanfrage über die Website");
    data.append("_captcha", "false");
    data.append("_honey", "");

    try {
      setStatus("sending");
      const res = await fetch("https://formsubmit.co/reinigung.cleanly@gmail.com", {
        method: "POST",
        body: data,
      });
      
      if (!res.ok) throw new Error("Fehler beim Senden");

      form.reset();
      setFormData({
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
      setStatus("success");
      
      toast({
        title: "Anfrage erfolgreich gesendet",
        description: "Vielen Dank! Wir melden uns innerhalb von 24 Stunden bei Ihnen.",
      });
    } catch (e) {
      console.error(e);
      setStatus("error");
      toast({
        title: "Fehler beim Senden",
        description: "Leider ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut oder kontaktieren Sie uns direkt.",
        variant: "destructive",
      });
    }
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
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-clean-text mb-2">
                      Name *
                    </label>
                    <Input
                      name="name"
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
                      name="email"
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
                      name="phone"
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
                    <input type="hidden" name="clientType" value={formData.clientType} />
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
                    <input type="hidden" name="objectType" value={formData.objectType} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-clean-text mb-2">
                      Fläche (m²) *
                    </label>
                    <Input
                      name="area"
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
                    <input type="hidden" name="frequency" value={formData.frequency} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-clean-text mb-2">
                      Standort (PLZ / Stadt) *
                    </label>
                    <Input
                      name="location"
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
                    name="specialRequests"
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
                  disabled={status === "sending"}
                >
                  {status === "sending" ? "Senden..." : "Anfrage senden"}
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
                      <p className="text-clean-text-muted">+49 171 2326771</p>
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
                  onClick={() => window.open('https://wa.me/491712326771?text=Hey!%20Ich%20h%C3%A4tte%20Interesse%20an%20ihrem%20Service!', '_blank')}
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
