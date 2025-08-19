import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Stethoscope, 
  Heart, 
  Shield, 
  Users, 
  Eye,
  Baby,
  Bone,
  Brain,
  Activity,
  Syringe,
  FileText,
  Pill
} from "lucide-react";

const services = [
  {
    icon: Stethoscope,
    title: "General Consultation",
    description: "Comprehensive health checkups, routine examinations, and medical consultations with our experienced physicians.",
    features: ["Health screenings", "Physical examinations", "Medical advice", "Referrals when needed"]
  },
  {
    icon: Heart,
    title: "Cardiology",
    description: "Specialized heart and cardiovascular care including monitoring, diagnosis, and treatment of heart conditions.",
    features: ["ECG testing", "Blood pressure monitoring", "Heart disease management", "Preventive cardiology"]
  },
  {
    icon: Shield,
    title: "Preventive Care",
    description: "Proactive healthcare services focused on preventing illness and maintaining optimal health.",
    features: ["Annual wellness exams", "Health screenings", "Lifestyle counseling", "Risk assessments"]
  },
  {
    icon: Users,
    title: "Family Medicine",
    description: "Comprehensive healthcare for patients of all ages, from infants to seniors, with personalized family care.",
    features: ["Pediatric care", "Adult medicine", "Geriatric care", "Family health planning"]
  },
  {
    icon: Syringe,
    title: "Vaccinations",
    description: "Complete immunization services for children and adults, including travel vaccines and flu shots.",
    features: ["Childhood vaccines", "Adult immunizations", "Travel vaccines", "Flu shots"]
  },
  {
    icon: Eye,
    title: "Vision Care",
    description: "Comprehensive eye examinations and vision care services to maintain your eye health.",
    features: ["Eye exams", "Vision testing", "Glaucoma screening", "Diabetic eye care"]
  },
  {
    icon: Baby,
    title: "Pediatric Care",
    description: "Specialized medical care for infants, children, and adolescents with a focus on development and wellness.",
    features: ["Well-child visits", "Growth monitoring", "Developmental assessments", "Childhood illnesses"]
  },
  {
    icon: Bone,
    title: "Orthopedic Services",
    description: "Treatment for musculoskeletal conditions, injuries, and disorders affecting bones, joints, and muscles.",
    features: ["Joint pain treatment", "Sports injuries", "Arthritis management", "Physical therapy referrals"]
  },
  {
    icon: Brain,
    title: "Mental Health",
    description: "Comprehensive mental health services including counseling, therapy, and psychiatric care.",
    features: ["Counseling services", "Depression treatment", "Anxiety management", "Stress reduction"]
  },
  {
    icon: Activity,
    title: "Diagnostic Services",
    description: "Advanced diagnostic testing and imaging services to accurately diagnose and monitor health conditions.",
    features: ["Blood tests", "X-rays", "Ultrasounds", "EKG testing"]
  },
  {
    icon: FileText,
    title: "Chronic Care Management",
    description: "Ongoing care and management for patients with chronic conditions like diabetes, hypertension, and asthma.",
    features: ["Diabetes management", "Blood pressure control", "Asthma care", "Regular monitoring"]
  },
  {
    icon: Pill,
    title: "Pharmacy Services",
    description: "On-site pharmacy services for convenient medication management and prescription fulfillment.",
    features: ["Prescription filling", "Medication counseling", "Drug interactions", "Refill reminders"]
  }
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Medical Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We provide comprehensive healthcare services with state-of-the-art facilities 
            and experienced medical professionals dedicated to your well-being.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-medical transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl text-foreground">
                    {service.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 md:p-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Need Medical Care?
          </h2>
          <p className="text-white/90 text-lg mb-6 max-w-2xl mx-auto">
            Don't wait to get the care you need. Book an appointment today or call us 
            for immediate assistance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="medical" size="lg" asChild>
              <Link to="/appointment">
                Book Appointment
              </Link>
            </Button>
            <Button variant="medical-outline" size="lg" asChild>
              <a href="tel:+263672124345">
                Call Now
              </a>
            </Button>
          </div>
        </div>

        {/* Emergency Notice */}
        <div className="mt-12 bg-destructive/10 border border-destructive/20 rounded-lg p-6 text-center">
          <h3 className="text-lg font-semibold text-destructive mb-2">
            Emergency Care
          </h3>
          <p className="text-muted-foreground">
            For medical emergencies, please call 911 or visit your nearest emergency room. 
            Our clinic provides urgent care during regular business hours.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;