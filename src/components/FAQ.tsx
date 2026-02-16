import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    name: "¿Tus conferencias son técnicas, inspiracionales o estratégicas?",
    acceptedAnswer: {
      text: "Mi enfoque es híbrido y adaptable. Como auditora ISO 42001, tengo el rigor técnico para hablar con CLOs y CTOs; pero como artista y humanista, tengo la narrativa para inspirar a equipos creativos y de ventas. No elijo entre 'técnica' o 'inspiración', uno ambas para que la audiencia salga con herramientas prácticas y la motivación para usarlas."
    }
  },
  {
    name: "¿Cómo garantizas que la charla no sea 'más de lo mismo' sobre IA?",
    acceptedAnswer: {
      text: "Huyo de los lugares comunes. Mientras la mayoría habla de 'prompts mágicos', yo hablo de Gobernanza, Estrategia y Creatividad Aumentada. Mis conferencias incluyen casos de uso reales (como la reducción del 80% en costos de producción audiovisual) y demostraciones en vivo que muestran el 'cómo', no solo el 'qué'."
    }
  },
  {
    name: "¿La conferencia se adapta a mi industria (BPO, Educación, Marketing)?",
    acceptedAnswer: {
      text: "Absolutamente. No creo en las charlas 'enlatadas'. Antes del evento, realizo una sesión de alineación estratégica para entender los dolores de tu sector. He diseñado capacitaciones específicas para gremios como BPRO (Servicio al cliente) y SENA (Educación), asegurando que cada ejemplo resuene con la realidad de tu audiencia."
    }
  },
  {
    name: "Mi equipo tiene miedo de que la IA los reemplace. ¿Cómo abordas esto?",
    acceptedAnswer: {
      text: "Este es uno de mis temas centrales. Mi enfoque es Humanista-Tecnológico: no hablo de reemplazo, sino de potenciación. A través de mi experiencia artística y filosófica, muestro cómo la tecnología libera al humano de lo operativo para elevarlo a lo creativo y estratégico. Transformamos el miedo en curiosidad productiva."
    }
  },
  {
    name: "¿Hablas sobre ética y riesgos legales de la IA?",
    acceptedAnswer: {
      text: "Sí, y es un diferenciador clave. Al estar certificada en la norma internacional ISO/IEC 42001, abordo la IA desde la responsabilidad. Enseño a los líderes a innovar sin comprometer la seguridad de datos ni la reputación corporativa, un tema crítico para 2026."
    }
  },
  {
    name: "¿Qué formatos ofreces además de la Keynote tradicional?",
    acceptedAnswer: {
      text: "Ofrezco tres formatos:\n\n• Keynote Magistral: Inspiración y visión estratégica (45-60 min).\n• Workshops Inmersivos: Taller práctico de 'hacer' (Prompting, Creación Audiovisual, Estrategia).\n• Paneles y Moderación: Liderazgo de conversaciones de alto nivel, como en Colombia 4.0."
    }
  },
  {
    name: "¿Qué necesito técnicamente para tus demostraciones en vivo?",
    acceptedAnswer: {
      text: "Simplifico la logística al máximo. Para mis demostraciones de Arte Generativo o IA en tiempo real, llevo mi propio hardware optimizado. Solo requiero una conexión a internet estable y salida de audio/video estándar. Yo me encargo de que la magia técnica funcione sin estrés para tu equipo audiovisual."
    }
  },
  {
    name: "¿Realizas conferencias en inglés o para audiencias internacionales?",
    acceptedAnswer: {
      text: "Sí. Cuento con experiencia internacional capacitando a estudiantes de más de 15 países (vía EADIC/EGCI). Puedo impartir sesiones en español e inglés, adaptando las referencias culturales para conectar con audiencias globales."
    }
  },
  {
    name: "¿Entregas algún material post-evento?",
    acceptedAnswer: {
      text: "El aprendizaje no termina al bajar del escenario. Dependiendo del contrato, puedo entregar Guías de Implementación, acceso a bibliotecas de Prompts exclusivas o una hoja de ruta (Roadmap) resumida para que los asistentes tengan un plan de acción inmediato el lunes siguiente."
    }
  },
  {
    name: "¿Por qué Paula Pinzón y no otro experto en tecnología?",
    acceptedAnswer: {
      text: "Porque la IA ya no es solo código; es cultura. Soy una de las pocas voces en Latinoamérica que une la certificación técnica de alto nivel (ISO) con la sensibilidad de una pianista y artista. Contratarme no es solo traer tecnología a tu evento, es traer una nueva forma de pensar el futuro: ética, humana y rentable."
    }
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            Preguntas Frecuentes
          </h2>
          <p className="text-lg text-muted-foreground">
            Todo lo que necesitas saber antes de contratarme
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-card border border-border rounded-lg px-6 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <AccordionTrigger className="text-left hover:no-underline hover:text-primary transition-colors">
                {faq.name}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground whitespace-pre-line">
                {faq.acceptedAnswer.text}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
