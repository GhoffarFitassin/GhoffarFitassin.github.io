import { Award, Users, Code } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Back-End Focus",
      description: "Spesialisasi dalam Laravel dan pengembangan sistem skalabel",
    },
    {
      icon: Users,
      title: "Kepemimpinan",
      description: "Ketua Umum HMTI, mengelola 60+ anggota dan 11 program kerja",
    },
    {
      icon: Award,
      title: "Achievement",
      description: "Juara 1 Lomba Pencak Silat & berbagai pencapaian akademik",
    },
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            About <span className="text-primary">Me</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-12"></div>

          <div className="space-y-6 text-lg text-muted-foreground mb-12">
            <p className="leading-relaxed">
              Saya adalah mahasiswa Teknik Informatika di <span className="text-foreground font-semibold">Politeknik Negeri Malang</span> yang 
              sedang mencari peluang sebagai <span className="text-primary font-semibold">Junior Back-End Developer</span>. 
              Dengan fokus utama pada pengembangan menggunakan Laravel, saya memiliki passion dalam membangun 
              sistem yang efisien, skalabel, dan maintainable.
            </p>

            <p className="leading-relaxed">
              Selain kemampuan teknis, saya juga memiliki pengalaman kepemimpinan yang kuat sebagai{" "}
              <span className="text-foreground font-semibold">Ketua Umum HMTI 2025/2026</span>, di mana saya mengelola 
              lebih dari 60 anggota dan mengkoordinasikan 11 program kerja. Pengalaman ini mengasah kemampuan saya 
              dalam manajemen tim, komunikasi, dan problem-solving yang sangat berguna dalam kolaborasi tim 
              pengembangan software.
            </p>

            <p className="leading-relaxed">
              Saya percaya bahwa seorang developer yang baik bukan hanya menguasai coding, tetapi juga memahami 
              aspek bisnis dan mampu bekerja sama dalam tim. Dengan pemahaman dasar UI/UX menggunakan Figma, 
              saya dapat berkomunikasi lebih efektif dengan tim frontend dan desainer.
            </p>
          </div>

          {/* Highlights */}
          <div className="grid md:grid-cols-3 gap-6">
            {highlights.map((item, index) => (
              <Card
                key={index}
                className="bg-card border-border hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
