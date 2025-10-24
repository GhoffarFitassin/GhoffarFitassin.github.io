import { Card, CardContent } from "@/components/ui/card";
import { Code2, Database, Wrench, MessageSquare } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Bahasa Pemrograman",
      icon: Code2,
      skills: ["PHP", "SQL", "Python", "Java"],
      color: "text-blue-400",
    },
    {
      title: "Framework & Tools",
      icon: Database,
      skills: ["Laravel", "Git", "MySQL", "SQL Server"],
      color: "text-green-400",
    },
    {
      title: "Development Tools",
      icon: Wrench,
      skills: ["Figma (Dasar)", "Google Colab", "VS Code", "Postman"],
      color: "text-purple-400",
    },
    {
      title: "Soft Skills",
      icon: MessageSquare,
      skills: ["Public Speaking", "Manajemen Waktu", "Manajemen Tim", "Problem Solving"],
      color: "text-orange-400",
    },
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Skills & <span className="text-primary">Expertise</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-12"></div>

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <Card
                key={index}
                className="bg-card border-border hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 group"
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <category.icon className={`w-6 h-6 ${category.color}`} />
                    </div>
                    <h3 className="text-2xl font-bold">{category.title}</h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-4 py-2 bg-secondary text-foreground rounded-full text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors duration-300 cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Technical Proficiency */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-center mb-8">Proficiency Level</h3>
            <div className="space-y-4 max-w-2xl mx-auto">
              {[
                { name: "Laravel", level: 85 },
                { name: "PHP", level: 80 },
                { name: "MySQL", level: 75 },
                { name: "Git", level: 70 },
                { name: "Python", level: 65 },
              ].map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between text-sm font-medium">
                    <span>{item.name}</span>
                    <span className="text-primary">{item.level}%</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2.5 overflow-hidden">
                    <div
                      className="bg-primary h-full rounded-full transition-all duration-1000 ease-out"
                      style={{
                        width: `${item.level}%`,
                        animation: `slide-in 1s ease-out ${index * 0.1}s forwards`,
                        transform: "translateX(-100%)",
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
