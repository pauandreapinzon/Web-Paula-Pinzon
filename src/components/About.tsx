import portraitImage from "@/assets/paula-portrait.jpeg";
const About = () => {
  return <section id="about" className="py-20 bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in">
            <img src={portraitImage} alt="Paula Pinzón Maldonado" className="rounded-2xl shadow-2xl card-glow w-full max-w-md mx-auto" />
          </div>
          
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient">
              Sobre Mí
            </h2>
            <p className="text-lg text-foreground/90 leading-relaxed">
              Conferencista de Inteligencia Artificial, Estratega Corporativa
            </p>
            <div className="space-y-4">
              <div className="border-l-4 border-primary pl-4">
                <h3 className="font-semibold text-xl text-primary">Formación Académica</h3>
                <p className="text-muted-foreground">PhD en Historia del Arte | MBA | Especialista en Gestión de Proyectos  |Maestria en IA para negocios</p>
              </div>
              <div className="border-l-4 border-secondary pl-4">
                <h3 className="font-semibold text-xl text-secondary">Liderazgo Comunitario</h3>
                <p className="text-muted-foreground">Líder en la comunidad latinoamericana de IA, Women in Tech y Tribu IA Colombia.  Docente y consultora en proyectos de alto impacto para SENA (Formación especializada) y el sector BPRO (Capacitación ejecutiva). Catedrática en universidades internacionales: IEP, EADIC y EGCI en España y Politencnicp, Incca y SENA en colombia, liderando módulos de IA Generativa y Automatización.</p>
              </div>
              <div className="border-l-4 border-accent pl-4">
                <h3 className="font-semibold text-xl text-accent">Impacto Global</h3>
                <p className="text-muted-foreground">
                  Speaker destacada en Colombia 4.0, MinTic y WomenIT.<br />
                  Líder comunitaria en Tribu IA Colombia y Women in Tech.<br />
                  Creadora de contenido educativo en YouTube sobre IA aplicada.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;