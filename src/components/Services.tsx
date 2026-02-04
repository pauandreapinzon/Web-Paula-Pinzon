import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles, Video, GraduationCap, Lightbulb } from "lucide-react";

const services = [
  {
    icon: Sparkles,
    title: "Conferencias Keynote y Speaker Internacional",
    description: "Más que una charla técnica, ofrezco una narrativa que une Arte, Humanismo y Negocios. Como conferencista en escenarios cumbre (Colombia 4.0, MinTIC, WomenIT), desmitifico la IA para audiencias ejecutivas y creativas. Mis keynotes abordan desde la Ética y el Futuro del Trabajo hasta la Innovación Disruptiva, garantizando un alto engagement y claridad estratégica.",
    color: "text-primary"
  },
  {
    icon: Video,
    title: "Producción Audiovisual y Dirección de Arte con IA",
    description: "Optimización radical de flujos creativos. Fusiono mi background artístico con herramientas de vanguardia (Comfyui, Replicate, N8N) para agencias como MSCrea y Market Medios. Reducimos tiempos de producción y costos operativos, creando contenido visual y sonoro de alta fidelidad que redefine la publicidad moderna.",
    color: "text-secondary"
  },
  {
    icon: GraduationCap,
    title: "Consultoría en Gobernanza y Auditoría ISO 42001",
    description: "Lidero la implementación de marcos de gobernanza ética y técnica. Como experta certificada en ISO/IEC 42001, acompaño a organizaciones en el diseño de sistemas de gestión de IA seguros y auditables. Asesoro a empresas del sector BPO y Servicios en la adopción normativa, mitigación de riesgos y estrategias de cumplimiento corporativo.",
    color: "text-accent"
  },
  {
    icon: Lightbulb,
    title: "Formación Corporativa y Upskilling (Reskilling)",
    description: "Programas de capacitación a medida para cerrar brechas digitales. He diseñado y ejecutado estrategias de formación para el SENA y gremios como BPRO, entrenando equipos en herramientas de IA Generativa y Automatización. Transformo la cultura organizacional mediante talleres prácticos que elevan la productividad y la competencia digital.",
    color: "text-primary"
  }
];

const Services = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            Soluciones de Inteligencia Artificial: Estrategia, Ética y Creatividad
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Conecto la alta gerencia con la tecnología: Conferencias de impacto, consultoría en gobernanza ISO 42001 y transformación creativa para empresas líderes.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="bg-card border-border hover:card-glow transition-all duration-300 hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-lg bg-muted ${service.color}`}>
                    <service.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
