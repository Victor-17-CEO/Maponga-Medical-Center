import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Heart, 
  Users, 
  Award, 
  Clock,
  Shield,
  Star,
  Target,
  CheckCircle
} from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Compassionate Care",
    description: "We treat every patient with empathy, respect, and understanding, ensuring they feel valued and supported throughout their healthcare journey."
  },
  {
    icon: Shield,
    title: "Quality & Safety",
    description: "We maintain the highest standards of medical care and safety protocols to ensure the best possible outcomes for our patients."
  },
  {
    icon: Users,
    title: "Patient-Centered",
    description: "Every decision we make is focused on what's best for our patients, their families, and their overall health and well-being."
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We continuously strive for excellence in all aspects of our service, from medical care to patient experience."
  }
];

const stats = [
  { number: "5+", label: "Years of Service" },
  { number: "1000+", label: "Patients Served" },
  { number: "5+", label: "Healthcare Professionals" },
  { number: "24/7", label: "Emergency Support" }
];

const achievements = [
  "ISO 9001:2015 Quality Management System Certification",
  "Excellence in Patient Care Award 2023",
  "Best Medical Facility in Chinhoyi Region",
  "Accredited by Zimbabwe Medical Council",
  "24/7 Emergency Care Certification",
  "Community Health Outreach Recognition"
];

const About = () => {
  return (
    <div className="min-h-screen bg-background py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About  MedCenter
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Dedicated to providing exceptional healthcare services with compassion, 
            innovation, and a commitment to improving the health and well-being of our community.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <Card className="hover:shadow-medical transition-all duration-300">
            <CardContent className="p-8">
              <div className="text-center">
                <Heart className="w-16 h-16 text-primary mx-auto mb-6" />
                <h2 className="text-2xl font-bold text-foreground mb-4">Our Mission</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To provide accessible, high-quality healthcare services that improve the health 
                  and well-being of our community through compassionate care, medical excellence, 
                  and innovative solutions.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-medical transition-all duration-300">
            <CardContent className="p-8">
              <div className="text-center">
                <Star className="w-16 h-16 text-primary mx-auto mb-6" />
                <h2 className="text-2xl font-bold text-foreground mb-4">Our Vision</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To be the leading healthcare provider in our region, recognized for excellence 
                  in patient care, medical innovation, and community health improvement.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 md:p-12 mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-8">
            Our Impact
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-white/90">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="hover:shadow-medical transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <value.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Our Commitment to Excellence
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              At MedCenter, we believe that quality healthcare is a fundamental right. 
              Our team of dedicated healthcare professionals works tirelessly to ensure 
              that every patient receives the highest standard of care in a comfortable 
              and supportive environment.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              We continuously invest in advanced medical technology, ongoing staff 
              training, and facility improvements to provide our patients with the 
              most effective and innovative treatments available.
            </p>
            <Button variant="medical" size="lg" asChild>
              <Link to="/appointment">
                Schedule Your Visit
              </Link>
            </Button>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Achievements & Certifications
            </h3>
            <div className="space-y-3">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">
                    {achievement}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-card rounded-2xl p-8 md:p-12 border border-border">
          <Clock className="w-16 h-16 text-primary mx-auto mb-6" />
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Ready to Experience Quality Care?
          </h2>
          <p className="text-muted-foreground text-lg mb-6 max-w-2xl mx-auto">
            Join thousands of satisfied patients who trust MedCenter for their healthcare needs. 
            Book your appointment today and discover the difference compassionate care makes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="medical" size="lg" asChild>
              <Link to="/appointment">
                Book Appointment
              </Link>
            </Button>
            <Button variant="medical-outline" size="lg" asChild>
              <Link to="/contact">
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;