import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Users, Medal } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      icon: Users,
      title: "Ketua Umum HMTI 2025/2026",
      organization: "Himpunan Mahasiswa Teknik Informatika",
      period: "2025 - 2026",
      description:
        "Memimpin organisasi dengan 60+ anggota aktif dan mengkoordinasikan 11 program kerja strategis. Bertanggung jawab dalam perencanaan, pelaksanaan, dan evaluasi seluruh kegiatan himpunan.",
      highlights: [
        "Mengelola 60+ anggota aktif",
        "Mengkoordinasikan 11 program kerja",
        "Meningkatkan kolaborasi antar divisi",
        "Menjalin kerjasama dengan stakeholder eksternal",
      ],
    },
    {
      icon: Trophy,
      title: "Ketua Pelaksana",
      organization: "Semarak Pekan Olahraga TI 2024",
      period: "2024",
      description:
        "Memimpin kepanitiaan acara olahraga terbesar di jurusan Teknik Informatika dengan ratusan peserta. Mengelola tim, anggaran, dan koordinasi dengan berbagai pihak.",
      highlights: [
        "Mengelola kepanitiaan 50+ orang",
        "Koordinasi dengan 10+ cabang olahraga",
        "Budgeting dan sponsorship management",
        "Event berhasil dengan 200+ peserta",
      ],
    },
    {
      icon: Medal,
      title: "Juara 1 Lomba Pencak Silat",
      organization: "Kompetisi Tingkat Regional",
      period: "2023",
      description:
        "Meraih juara pertama dalam lomba pencak silat tingkat regional. Menunjukkan dedikasi, disiplin, dan kemampuan untuk berprestasi di luar bidang akademik.",
      highlights: [
        "Juara 1 tingkat regional",
        "Melatih disiplin dan fokus",
        "Manajemen waktu antara akademik dan non-akademik",
        "Mental toughness dan competitive spirit",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Experience & <span className="text-primary">Achievements</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-12"></div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card
                key={index}
                className="bg-card border-border hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 group"
              >
                <CardContent className="p-6 md:p-8">
                  <div className="flex flex-col md:flex-row gap-6">
                    {/* Icon */}
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <exp.icon className="w-8 h-8 text-primary" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 space-y-4">
                      <div>
                        <h3 className="text-2xl font-bold mb-1">{exp.title}</h3>
                        <p className="text-primary font-semibold">{exp.organization}</p>
                        <p className="text-sm text-muted-foreground">{exp.period}</p>
                      </div>

                      <p className="text-muted-foreground leading-relaxed">{exp.description}</p>

                      {/* Highlights */}
                      <div className="grid sm:grid-cols-2 gap-2">
                        {exp.highlights.map((highlight, hIndex) => (
                          <div key={hIndex} className="flex items-start gap-2">
                            <span className="text-primary mt-1">✓</span>
                            <span className="text-sm text-muted-foreground">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
