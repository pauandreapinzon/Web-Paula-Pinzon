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
              La Experta en IA Creativa que Transforma el Arte
            </h2>
            <p className="text-lg text-foreground/90 leading-relaxed">
              PhD en Historia del Arte + ISO 42001 Certificada. Aplico Inteligencia Artificial Generativa para revolucionar la industria audiovisual y creativa.
            </p>
            <div className="space-y-4">
              <div className="border-l-4 border-primary pl-4">
                <h3 className="font-semibold text-xl text-primary">Experta en IA Creativa</h3>
                <p className="text-muted-foreground">Pionera en aplicar IA Generativa a procesos artísticos y audiovisuales. Creadora del framework 'Creative Flow Architects' que redefinió cómo artistas, músicos y productores colaboran con sistemas de IA. Transformo percepciones: de temor a la tecnología, a potenciación artística.</p>
              </div>
              <div className="border-l-4 border-secondary pl-4">
                <h3 className="font-semibold text-xl text-secondary">Formación Académica y Certificaciones</h3>
                <p className="text-muted-foreground">PhD en Historia del Arte | MBA | Maestría en IA para Negocios | Especialista en Gestión de Proyectos | Certificada ISO/IEC 42001 en Sistemas de Gestión de IA. Docente universitaria en SENA, Politécnico Grancolombiano, INCCA y catedrática internacional en EADIC y EGCI (España).</p>
              </div>
              <div className="border-l-4 border-accent pl-4">
                <h3 className="font-semibold text-xl text-accent">Impacto: Consultoría + Conferencista + Educadora</h3>
                <p className="text-muted-foreground">
                  Asesoro a agencias globales como Dentsu, Market Medios y MS Crea en producción audiovisual con IA.<br />
                  Speaker en PyLadiesCon, Colombia 4.0, WomenIT, Semana de la IA (SENA).<br />
                  Líder comunitaria: Tribu IA Colombia, Women in Tech.<br />
                  Creadora de contenido educativo en YouTube sobre IA Creativa y transformación digital.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;