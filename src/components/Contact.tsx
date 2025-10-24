import { Mail, Github, Linkedin, MapPin, Phone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "ghoffar488@gmail.com",
      link: "mailto:ghoffar488@gmail.com",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Malang, Jawa Timur",
      link: null,
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/GhoffarFitassin",
      link: "https://github.com/GhoffarFitassin",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/ghoffar",
      link: "https://www.linkedin.com/in/ghoffar-abdul-ja-far-59828228a/",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>

          <p className="text-center text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Saya terbuka untuk peluang kerja sebagai Junior Back-End Developer atau kolaborasi 
            dalam proyek menarik. Mari kita diskusikan bagaimana saya dapat berkontribusi untuk tim Anda!
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {contactInfo.map((item, index) => (
              <Card
                key={index}
                className="bg-card border-border hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
                      {item.link ? (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-foreground hover:text-primary transition-colors font-medium truncate block"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-foreground font-medium">{item.value}</p>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <Card className="bg-card border-2 border-primary/50">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Ready to work together?</h3>
                <p className="text-muted-foreground mb-6">
                  Saya sangat tertarik untuk bergabung dengan tim yang dinamis dan inovatif
                </p>
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300"
                  asChild
                >
                  <a href="mailto:ghoffar488@gmail.com">
                    <Mail className="w-5 h-5 mr-2" />
                    Send Me an Email
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
