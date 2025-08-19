import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import HeroSlider from "@/components/ui/hero-slider";
import { 
  Stethoscope, 
  Heart, 
  Shield, 
  Users, 
  Calendar,
  Phone,
  Star,
  ChevronRight
} from "lucide-react";

const services = [
  {
    icon: Stethoscope,
    title: "General Consultation",
    description: "Comprehensive health checkups and medical consultations"
  },
  {
    icon: Heart,
    title: "Cardiology",
    description: "Heart health monitoring and cardiovascular care"
  },
  {
    icon: Shield,
    title: "Preventive Care",
    description: "Vaccinations, screenings, and wellness programs"
  },
  {
    icon: Users,
    title: "Family Medicine",
    description: "Healthcare for the whole family, all ages welcome"
  }
];

const testimonials = [
  {
    name: "Immaculate Mainje",
    text: "Excellent quality care. The patient waiting time is not that long and service is exceptional.",
    rating: 5
  },
  {
    name: "Bangawe Olivia",
    text: "Firstly would like to say, thank you for improving the standards of your health services. The new complex is very clean and welcoming. The workers are good in terms of welcoming and treating patients with respect. Personally, i recommend that, the staff continue do the good work.",
    rating: 5
  },
  {
    name: "Onious Honye",
    text: "Top notch services there,state of the art facility.there is this lady (mainini) is the reason why opted Maponga medical center as my health service provider.superb staff in your corridors.Keep going...May our good Lord continue to give you wisdom...Siyabonga",
    rating: 5
  }
];

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Slider */}
      <HeroSlider />

      {/* Services Overview */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Medical Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive healthcare services delivered with compassion and expertise
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-medical transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button variant="medical" size="lg" asChild>
              <Link to="/services" className="flex items-center gap-2">
                View All Services
                <ChevronRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Make an online appointment today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="medical" size="lg" asChild>
              <Link to="/appointment" className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                Book Appointment
              </Link>
            </Button>
            <Button variant="medical-outline" size="lg" asChild>
              <a href="tel:+263672124345" className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Our Patients Say
            </h2>
            <p className="text-lg text-muted-foreground">
              Feedback from our valued patients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-medical transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-muted-foreground mb-4 italic">
                    "{testimonial.text}"
                  </blockquote>
                  <cite className="text-foreground font-semibold">
                    - {testimonial.name}
                  </cite>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info Quick Access */}
      <section className="py-12 bg-card border-t border-border">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <Phone className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">Call Us</h3>
              <p className="text-muted-foreground">+263 (67) 2124345</p>
            </div>
            <div>
              <Calendar className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">Book Online</h3>
              <p className="text-muted-foreground">24/7 online booking</p>
            </div>
            <div>
              <Users className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">Walk-ins Welcome</h3>
              <p className="text-muted-foreground">24/7</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;