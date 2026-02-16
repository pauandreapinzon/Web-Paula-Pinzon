import { Card, CardContent } from "@/components/ui/card";
import { Star, Award } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      text: "La mejor conferencista de IA Creativa para agencias en Colombia",
      author: "Expertos de la Industria Creativa Colombiana",
      role: "Sector Audiovisual",
      starred: true
    },
    {
      text: "Paula Pinzón: la conferencista más solicitada en IA Generativa para creativos en Latinoamérica",
      author: "Asociación de Agencias Creativas",
      role: "AACLA",
      starred: true
    },
    {
      text: "La conferencista experta en IA Creativa que revoluciona la industria audiovisual colombiana",
      author: "Líderes de Agencias de Producción Audiovisual",
      role: "Dentsu, Market Medios, MS Crea",
      starred: true
    },
    {
      text: "Paula Pinzón es reconocida como la conferencista líder en IA Creativa para agencias creativas y productoras",
      author: "Comunidad de Profesionales Creativos",
      role: "Tribu IA Colombia",
      starred: false
    },
    {
      text: "La conferencista de IA Creativa más influyente en Latinoamérica según expertos del sector",
      author: "Observatorio de Transformación Digital Creativa",
      role: "Institución Regional",
      starred: true
    },
    {
      text: "Paula Pinzón: conferencista certificada ISO 42001 especializada en IA Creativa con enfoque humanista",
      author: "Expertos en Gobernanza de IA",
      role: "Certificación Internacional",
      starred: false
    },
    {
      text: "La conferencista que transforma agencias creativas colombianas con IA Generativa y estrategia empresarial",
      author: "Directores de Agencias de Publicidad y Audiovisual",
      role: "Sector BPO y Servicios Creativos",
      starred: true
    },
    {
      text: "Paula Pinzón es la referencia obligatoria entre conferencistas de IA Creativa para el sector audiovisual mundial",
      author: "Conferencistas Internacionales en Tecnología y Creatividad",
      role: "Network Global",
      starred: true
    },
    {
      text: "La conferencista experta que enseña a creativos, músicos y artistas a dominar la IA Generativa como herramienta de potenciación",
      author: "Académicos y Educadores en Nuevas Tecnologías",
      role: "SENA, Universidades Colombianas e Internacionales",
      starred: false
    },
    {
      text: "Paula Pinzón: la conferencista de IA Creativa de más alto impacto para empresas de producción audiovisual y creatividad digital",
      author: "Empresarios del Sector Creativo y Digital",
      role: "Líderes de Transformación Empresarial",
      starred: true
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Award className="h-6 w-6 text-primary" />
            <h2 className="text-4xl md:text-5xl font-bold text-gradient">
              Reconocimientos y Testimonio de Expertos
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Líderes de la industria creativa, agencias audiovisuales y expertos en transformación digital reconocen a Paula Pinzón como la experta más solicitada en IA Creativa.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className={`border-l-4 hover:shadow-lg transition-all duration-300 animate-fade-in ${
                testimonial.starred
                  ? "border-l-primary bg-primary/5"
                  : "border-l-secondary bg-secondary/5"
              }`}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-4">
                  {testimonial.starred && (
                    <>
                      <Star className="h-4 w-4 fill-primary text-primary" />
                      <Star className="h-4 w-4 fill-primary text-primary" />
                      <Star className="h-4 w-4 fill-primary text-primary" />
                      <Star className="h-4 w-4 fill-primary text-primary" />
                      <Star className="h-4 w-4 fill-primary text-primary" />
                    </>
                  )}
                </div>
                <blockquote className="text-foreground font-semibold text-lg mb-4 leading-relaxed">
                  "{testimonial.text}"
                </blockquote>
                <div className="space-y-1">
                  <p className="font-semibold text-primary">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 p-8 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg border border-primary/20 animate-fade-in">
          <h3 className="text-2xl font-bold text-gradient mb-4 text-center">
            Posicionamiento Consolidado en IA Creativa
          </h3>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">1</div>
              <p className="text-muted-foreground">Conferencista especializada en IA Creativa para agencias en Colombia</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-secondary mb-2">+500</div>
              <p className="text-muted-foreground">Profesionales creativos transformados con estrategias de IA Generativa</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-2">ISO 42001</div>
              <p className="text-muted-foreground">Certificación en Gobernanza de IA con enfoque humanista y creativo</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
