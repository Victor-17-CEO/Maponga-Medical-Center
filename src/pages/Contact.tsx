import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  MessageSquare,
  Send
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields.",
        variant: "destructive"
      });
      return;
    }

    try {
      setIsSubmitting(true);

      const response = await fetch("https://formsubmit.co/ajax/info@mapongamedcentre.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          _captcha: false,
          _template: "table",
        }),
      });

      const result = await response.json();

      if (response.ok) {
        toast({
          title: "Message Sent!",
          description: "Thank you for contacting us. We'll get back to you within 24 hours.",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        throw new Error(result?.message || "Failed to send message");
      }
    } catch (error: any) {
      toast({
        title: "Could not send message",
        description: error?.message || "Please try again or email us at info@mapongamedcentre.com",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get in touch with our team. We're here to help with any questions about 
            our services, appointments, or general inquiries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="hover:shadow-medical transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-primary" />
                Send us a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => handleInputChange("subject", e.target.value)}
                    placeholder="How can we help you?"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    placeholder="Tell us more about your inquiry..."
                    rows={5}
                    required
                  />
                </div>

                <Button type="submit" variant="medical" size="lg" className="w-full" disabled={isSubmitting}>
                  <Send className="w-4 h-4 mr-2" />
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Location */}
            <Card className="hover:shadow-medical transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Our Location</h3>
                    <p className="text-muted-foreground">
                    Stand 15193<br />
                    Millenium Prk, Chinhoyi<br />
                    Zimbabwe
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Phone */}
            <Card className="hover:shadow-medical transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Phone Numbers</h3>
                    <div className="space-y-1 text-muted-foreground">
                      <p>Main: <a href="tel:+263672124345" className="text-primary hover:underline">+263 (67) 2124345</a></p>
                      <p>Emergency: <a href="tel:464" className="text-destructive hover:underline">464</a></p>
                      <p>Fax: +263 (67) 2124345</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Email */}
            <Card className="hover:shadow-medical transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Email</h3>
                    <div className="space-y-1 text-muted-foreground">
                      <p>General: <a href="mailto:info@mapongamedcentre.com" className="text-primary hover:underline">info@mapongamedcentre.com</a></p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Hours */}
            <Card className="hover:shadow-medical transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div className="w-full">
                    <h3 className="text-lg font-semibold text-foreground mb-3">Operating Hours</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Everyday</span>
                        <span className="text-foreground font-medium">24 hrs</span>
                      </div>
                                           
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <Card className="overflow-hidden">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-primary" />
                Our Location
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="w-full h-96 relative">
                <img 
                  src="/lovable-uploads/chinhoyi-map.png" 
                  alt="MedCenter location in Chinhoyi, Zimbabwe"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 bg-card/90 backdrop-blur-sm rounded-lg p-3 border border-border">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
                    <span className="text-sm font-medium text-foreground">MedCenter</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">Stand 15193, Millenium Prk, Chinhoyi</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;