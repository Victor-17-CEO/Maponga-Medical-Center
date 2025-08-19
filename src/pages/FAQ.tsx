import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  HelpCircle, 
  Calendar, 
  Clock, 
  CreditCard, 
  Shield,
  Phone,
  MessageCircle
} from "lucide-react";

const faqCategories = [
  {
    title: "Appointments & Scheduling",
    icon: Calendar,
    questions: [
      {
        question: "How do I book an appointment?",
        answer: "You can book an appointment online through our website, call us at (67) 2124345, or visit our clinic in person. Our online booking system is available 24/7 for your convenience."
      },
      {
        question: "How far in advance can I schedule an appointment?",
        answer: "You can schedule appointments up to a month in advance. For urgent care needs, we often have same-day or next-day appointments available."
      },
      {
        question: "Can I reschedule or cancel my appointment?",
        answer: "Yes, you can reschedule or cancel your appointment up to 24 hours before your scheduled time. Please call us or use our online portal to make changes."
      },
      {
        question: "What should I bring to my appointment?",
        answer: "Please bring medical aid card, if any, a record/list of current medications, and any relevant medical records from other healthcare providers."
      }
    ]
  },
  {
    title: "Insurance & Billing",
    icon: CreditCard,
    questions: [
      {
        question: "What insurance plans do you accept?",
        answer: "We accept most major insurance plans including Psmas, Cimas, Bonvie, FMH, FBC, Alliance, and others. Please call to verify if your specific plan is accepted."
      },
      {
        question: "Do you offer payment methods?",
        answer: "Yes, we offer flexible payment methods for patients without insurance or for services not covered by insurance. Contact our billing department to discuss options."
      },
      
      {
        question: "What if my insurance doesn't cover a service?",
        answer: "We'll inform you beforehand if a service isn't covered. You can choose to pay out-of-pocket or discuss alternative treatment options with your provider."
      }
    ]
  },
  {
    title: "Clinic Policies",
    icon: Shield,
    questions: [
      {
        question: "What are your clinic hours?",
        answer: "We're open 24/7 even on holidays."
      },
      {
        question: "Do you see walk-in patients?",
        answer: "Yes, we accept walk-in patients during regular business hours. However, appointments are recommended to minimize wait times."
      },
      {
        question: "What is your policy for late arrivals?",
        answer: "Please arrive 15 minutes early for check-in. If you're more than 15 minutes late, you may need to reschedule depending on the schedule availability."
      },
      {
        question: "Do you provide emergency care?",
        answer: "For life-threatening emergencies, please call 464. We provide urgent care during business hours for non-emergency medical issues that require immediate attention."
      }
    ]
  },
  {
    title: "Services & Treatments",
    icon: HelpCircle,
    questions: [
      {
        question: "What services do you offer?",
        answer: "We offer comprehensive healthcare services including general consultations, preventive care, chronic disease management, vaccinations, diagnostic services, and specialized care in cardiology, orthopedics, and more."
      },
      {
        question: "Do you provide telemedicine services?",
        answer: "Yes, we offer telemedicine consultations for appropriate conditions. This allows you to consult with our providers from the comfort of your home."
      },
      {
        question: "Can you refer me to specialists?",
        answer: "Absolutely. If specialized care is needed, we can provide referrals to trusted specialists in our network and help coordinate your care."
      },
      {
        question: "Do you offer wellness and preventive care programs?",
        answer: "Yes, we offer comprehensive wellness programs including annual physicals, health screenings, vaccination programs, and lifestyle counseling to help you maintain optimal health."
      }
    ]
  }
];

const FAQ = () => {
  return (
    <div className="min-h-screen bg-background py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about our services, appointments, 
            billing, and clinic policies.
          </p>
        </div>

        {/* FAQ Categories */}
        <div className="space-y-8">
          {faqCategories.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="hover:shadow-medical transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
                    <category.icon className="w-5 h-5 text-white" />
                  </div>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {category.questions.map((faq, questionIndex) => (
                    <AccordionItem key={questionIndex} value={`item-${categoryIndex}-${questionIndex}`}>
                      <AccordionTrigger className="text-left hover:text-primary">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-16">
          <Card className="bg-gradient-to-r from-primary to-secondary">
            <CardContent className="p-8 text-center">
              <MessageCircle className="w-16 h-16 text-white mx-auto mb-6" />
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Still Have Questions?
              </h2>
              <p className="text-white/90 text-lg mb-6 max-w-2xl mx-auto">
                Can't find the answer you're looking for? Our friendly staff is here to help. 
                Get in touch with us and we'll get back to you as soon as possible.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="medical-outline" size="lg" asChild>
                  <a href="tel:+263672124345" className="flex items-center gap-2">
                    <Phone className="w-5 h-5" />
                    Call Now
                  </a>
                </Button>
                <Button variant="medical" size="lg" asChild>
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Links */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="text-center hover:shadow-medical transition-all duration-300">
            <CardContent className="p-6">
              <Calendar className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">Book Appointment</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Schedule your visit online
              </p>
              <Button variant="medical-outline" size="sm" asChild>
                <Link to="/appointment">Book Now</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-medical transition-all duration-300">
            <CardContent className="p-6">
              <HelpCircle className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">Our Services</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Learn about our medical services
              </p>
              <Button variant="medical-outline" size="sm" asChild>
                <Link to="/services">View Services</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-medical transition-all duration-300">
            <CardContent className="p-6">
              <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">Hours & Location</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Find us and our operating hours
              </p>
              <Button variant="medical-outline" size="sm" asChild>
                <Link to="/contact">Get Directions</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default FAQ;