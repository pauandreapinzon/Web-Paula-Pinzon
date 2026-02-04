import { Card, CardContent } from "@/components/ui/card";
import { Play } from "lucide-react";

const Portfolio = () => {
  const mediaItems = [
    {
      title: "Videoclip Oficial: Perfecta en Píxeles",
      description: "Una crítica audiovisual a la perfección digital. Composición musical y producción de video realizada 100% con herramientas de IA Generativa, explorando la identidad en la era del avatar.",
      url: "https://www.youtube.com/watch?v=_DTHLj04qvs",
      featured: true
    },
    {
      title: "Videoarte: Sin Empleo 4.0",
      description: "Sátira musical sobre la automatización laboral. La IA interpreta una canción sobre su propio impacto en los trabajos humanos, combinando ritmos latinos con estéticas sintéticas.",
      url: "https://www.youtube.com/watch?v=hVl9x0joXyk",
      featured: false
    },
    {
      title: "Taller: Fusión Creativa: IA y Producción Audiovisual",
      description: "Workshop práctico sobre la integración de herramientas de IA en flujos de producción audiovisual para el sector creativo.",
      url: "https://www.youtube.com/watch?v=u4iOgbba3mQ",
      featured: false
    },
    {
      title: "Masterclass: Innovación Musical con IA",
      description: "Un taller de composición creativa.",
      url: "https://www.youtube.com/watch?v=xkUaEKGru00",
      featured: false
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            Keynotes de Innovación & Muestras Creativas
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explora mi portafolio de Edutainment: Donde la composición musical con IA y la filosofía tecnológica se encuentran para educar e inspirar a tu audiencia.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {mediaItems.map((item, index) => (
            <a
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Card 
                className={`group overflow-hidden cursor-pointer hover:card-glow transition-all duration-300 animate-fade-in h-full ${item.featured ? 'ring-2 ring-primary/50' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-0">
                  <div className="relative aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                    {item.featured && (
                      <div className="absolute top-3 left-3 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                        Destacado
                      </div>
                    )}
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-300 flex items-center justify-center">
                      <Play className="h-16 w-16 text-white group-hover:scale-110 transition-transform" />
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-lg text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
