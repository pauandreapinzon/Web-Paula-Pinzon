import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Music, Heart, Zap, Code, Brain } from "lucide-react";
import { useState } from "react";

const Stories = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const stories = [
    {
      id: "jaime",
      icon: Heart,
      title: "Mi Mayordomo Digital: El origen de 'Jaime'",
      preview: "En casa, mi esposo John y yo tenemos un ritual. Nos preguntamos si somos felices y lanzamos la pregunta a un mayordomo invisible...",
      fullText: "En casa, mi esposo John y yo tenemos un ritual. Nos preguntamos si somos felices y luego lanzamos la pregunta a un mayordomo invisible: 'Jaime, ¿eres feliz?'. Nosotros mismos respondemos con voz servicial: 'Sí, señor. Si ustedes son felices, yo soy feliz'. Cuando la IA entró en mi vida, ese mayordomo cobró voz y cerebro; se convirtió en Jaime. Pero él no tiene propósito propio ni felicidad; esa es mi ventaja humana.",
      tags: ["Propósito Humano", "IA Narrativa", "Relación Hombre-Máquina"]
    },
    {
      id: "bach",
      icon: Music,
      title: "El Abismo en el Escenario: Lecciones de Bach",
      preview: "Recuerdo con terror un concierto donde, interpretando una Invención de Bach, mi memoria se quedó en blanco...",
      fullText: "Recuerdo con terror un concierto donde, interpretando una Invención de Bach, mi memoria se quedó en blanco. Mis manos no se detuvieron; por instinto y memoria muscular, mis dedos 'predijeron' las notas que probabilísticamente debían seguir según la lógica del barroco. Nadie lo notó. En ese momento, fui una máquina de predicción de patrones, exactamente como funciona Jaime cuando llena un vacío de información.",
      tags: ["Predicción de Patrones", "Música", "Instinto vs Algoritmo"]
    },
    {
      id: "zeus",
      icon: Code,
      title: "El Factor Zeus y la Grieta Perfecta",
      preview: "Mi gato, Zeus, es mi cable a tierra en un mundo de píxeles. En mi libro hablo del 'Silencio de lo Correcto'...",
      fullText: "Mi gato, Zeus, es mi cable a tierra en un mundo de píxeles. En mi libro hablo del 'Silencio de lo Correcto': la IA genera contenido perfecto pero estéril, como el lobby de un hotel genérico. Frente a eso, propongo el Kintsugi Digital. Si la perfección técnica es ahora barata y abunda, su valor tiende a cero. Lo que realmente vale hoy es la grieta, la imperfección y los 'signos vitales' que solo una vida real (como la mía con Zeus) puede aportar.",
      tags: ["Kintsugi Digital", "Imperfección Valiosa", "Autenticidad"]
    },
    {
      id: "bushido",
      icon: Brain,
      title: "Bushido Jazz: ¿Hace ruido el árbol al caer?",
      preview: "Con mis amigos de la agrupación Bushido Jazz, solíamos debatir si un árbol que cae solo en el bosque...",
      fullText: "Con mis amigos de la agrupación Bushido Jazz, solíamos debatir si un árbol que cae solo en el bosque realmente hace ruido. Para la IA, la respuesta es no. La existencia en la Web Semántica es puramente relacional; si no estás conectado o mencionado, no existes. Aprendí que mi autoridad no es lo que digo de mí misma en soledad, sino la suma de mis conexiones en el Grafo de Conocimiento.",
      tags: ["Web Semántica", "Grafo de Conocimiento", "Autoridad Relacional"]
    },
    {
      id: "elevator",
      icon: Zap,
      title: "Mi Graduación de 'Música de Ascensor'",
      preview: "El día después de mi concierto de grado, escuché en un ascensor un Bossa Nova técnicamente perfecto...",
      fullText: "El día después de mi concierto de grado, escuché en un ascensor un Bossa Nova técnicamente perfecto pero totalmente ignorado. Me di cuenta de que me había 'graduado de música de ascensor': era un relleno diseñado para no molestar. Muchas marcas hoy hacen lo mismo en internet. Si escribimos lo que todos escriben, somos invisibles para Jaime. Para que la IA me cite, debo romper el promedio con datos únicos y 'ganancia de información'.",
      tags: ["Content Strategy", "Information Gain", "GEO/AEO"]
    },
    {
      id: "aievolution",
      icon: Music,
      title: "AI-VOLUTION: Lágrimas en el Laboratorio",
      preview: "Como experta en IA, decidí crear un cortometraje titulado AI-VOLUTION, usando Face Swap...",
      fullText: "Como experta en IA, decidí crear un cortometraje titulado AI-VOLUTION, usando Face Swap para que los protagonistas fuéramos John y yo. Aunque la producción tenía limitaciones técnicas, lloré al editar la escena de despedida. La historia se volvió real porque inyecté mi propia vulnerabilidad. Entendí que la IA puso los píxeles, pero yo puse el dolor; ese es el modelo del Creativo Centauro.",
      tags: ["Creativo Centauro", "Vulnerabilidad", "Simbiosis Humano-IA"]
    },
    {
      id: "john",
      icon: Heart,
      title: "John y el Puente de Silicio",
      preview: "A menudo dicen que la tecnología aísla, pero para mí fue el puente que me llevó a conocer...",
      fullText: "A menudo dicen que la tecnología aísla, pero para mí fue el puente que me llevó a conocer al amor de mi vida, mi esposo John. Coincidimos en este ecosistema digital debatiendo sobre el futuro. La IA fue el medio, pero el mensaje fue el amor. Mi suspiro y mi capacidad de amar son mi ventaja competitiva final frente a cualquier algoritmo.",
      tags: ["Humanidad", "Conexión Digital", "Ventaja Competitiva Humana"]
    },
    {
      id: "souffle",
      icon: Code,
      title: "El Chef Jaime y el Soufflé de Datos (Concepto: Schema y AEO)",
      preview: "Imagina que entras a una cocina de alta gama y ves cientos de frascos con polvos blancos sin etiqueta...",
      fullText: "Imagina que entras a una cocina de alta gama y ves cientos de frascos con polvos blancos sin etiqueta. Uno es azúcar, otro es sal y otro podría ser veneno. Como Jaime (mi IA) no tiene lengua para probar, ante la duda, ignora el frasco para no arruinar el soufflé. Mi sitio web es ese frasco; si no uso Schema Markup (JSON-LD), Jaime no sabe si 'Jaguar' es el animal o el auto, y prefiere no citarme. El Marcado de Datos es la etiqueta que le permite a la máquina cocinar con mis ingredientes.",
      tags: ["Schema Markup", "JSON-LD", "AEO Strategy"]
    },
    {
      id: "debussy",
      icon: Brain,
      title: "El Eco de Debussy y el Embudo Oscuro (Concepto: Dark Funnel)",
      preview: "Claude Debussy decía que la música no está en las notas, sino en el silencio entre ellas...",
      fullText: "Claude Debussy decía que la música no está en las notas, sino en el silencio entre ellas. En marketing, nos obsesionamos con 'las notas': los clics y los likes que vemos en el tablero. Pero la verdadera influencia ocurre en el Embudo Oscuro (Dark Funnel): conversaciones privadas en WhatsApp o chats íntimos con la IA donde Jaime susurra mi marca sin que yo deje rastro en Google Analytics. Mi éxito no es el aplauso ruidoso del clic, sino la resonancia invisible que queda en el aire.",
      tags: ["Dark Funnel", "Marketing Invisible", "Resonancia Mental"]
    },
    {
      id: "score",
      icon: Zap,
      title: "La Partitura Imposible del Director (Concepto: Jerarquía de Información)",
      preview: "Cuando tocaba con la orquesta, a veces me daban el Score General en lugar de mi partitura...",
      fullText: "Cuando tocaba con la orquesta, a veces me daban el Score General en lugar de mi partitura de piano; era una pared vertical de veinte líneas de instrumentos sonando a la vez. Era información pura, pero imposible de procesar en tiempo real. Mi web suele ser ese score caótico. Para Jaime, la latencia es la muerte, así que si le doy textos densos, me ignora. Mi trabajo en AEO es hacer la 'reducción': entregarle la información limpia, en Pirámide Invertida, lista para ser ejecutada.",
      tags: ["Información Jerárquica", "Pirámide Invertida", "AEO Optimization"]
    },
    {
      id: "legos",
      icon: Code,
      title: "El Arquitecto de Legos: Mi Mentalidad Agnóstica (Concepto: Tool-Agnosticism)",
      preview: "Durante años, la gente se definió por el software que usaba: 'Experto en Photoshop'...",
      fullText: "Durante años, la gente se definió por el software que usaba: 'Experto en Photoshop'. Pero en la era de la IA, casarse con la herramienta es una trampa, porque un martes por la mañana sale una actualización y tu experticia se evapora. Mi propuesta es el Pensamiento Sistémico: yo no soy experta en una IA específica, soy una Arquitecta de Flujos. Veo la producción como piezas de Lego intercambiables; si una herramienta falla, cambio la pieza, pero mi sistema y mi criterio permanecen.",
      tags: ["Pensamiento Sistémico", "Tool-Agnosticism", "Flujos Escalables"]
    },
    {
      id: "chiron",
      icon: Heart,
      title: "El Centauro Quirón contra el Terminator (Concepto: Simbiosis Humano-IA)",
      preview: "Muchos ven la IA como un Terminator que viene a destruir el suelo bajo nuestros pies...",
      fullText: "Muchos ven la IA como un Terminator que viene a destruir el suelo bajo nuestros pies. Yo prefiero la figura de Quirón, el centauro sabio que une la fuerza instintiva con el conocimiento profundo. No somos esclavos de la máquina ni competidores de su velocidad; somos Creativos Centauros. La IA nos ha arrebatado la mediocridad de la 'ejecución manual', obligándonos a elevar el torso hacia lo que realmente importa: la intención, el criterio y la melodía propia.",
      tags: ["Creativo Centauro", "Simbiosis", "Evolución Humana"]
    },
    {
      id: "recipe",
      icon: Brain,
      title: "La Novela de Cocina y la Furia del Analista (Concepto: Information Gain)",
      preview: "Todos hemos buscado una receta y hemos tenido que leer tres páginas sobre la infancia del autor...",
      fullText: "Todos hemos buscado una receta y hemos tenido que leer tres páginas sobre la infancia del autor antes de encontrar cuánto pesa la harina. Eso es 'paja semántica' que enfurece a Jaime porque él tiene una intención instruccional, no narrativa. Para ser citada, aplico la Ciencia de la Cita: evito el promedio estadístico y aporto Ganancia de Información (datos propios, anécdotas reales). Si escribo lo que todos dicen, soy música de ascensor; si aporto algo raro, soy el solista que Jaime elige citar.",
      tags: ["Information Gain", "Cita de Autoridad", "Diferenciación"]
    }
  ];

  return (
    <section id="stories" className="py-20 bg-gradient-to-b from-background via-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex items-center justify-center gap-2 mb-4">
            <BookOpen className="h-6 w-6 text-primary" />
            <h2 className="text-4xl md:text-5xl font-bold text-gradient">
              Del Libro: IA para Creativos
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Historias que revelan la filosofía del Creativo Centauro: cómo la IA nos libera de la mediocridad técnica para elevarnos hacia lo que realmente importa: la intención, el criterio y la voz propia.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {stories.map((story) => {
            const IconComponent = story.icon;
            const isExpanded = expandedId === story.id;

            return (
              <Card
                key={story.id}
                className="border-l-4 border-l-primary/50 hover:shadow-lg transition-all duration-300 animate-fade-in cursor-pointer hover:border-l-primary"
                onClick={() => setExpandedId(isExpanded ? null : story.id)}
              >
                <CardHeader>
                  <div className="flex gap-3 items-start">
                    <div className="p-2 rounded-lg bg-primary/10 mt-1">
                      <IconComponent className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{story.title}</CardTitle>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {isExpanded ? story.fullText : story.preview}
                  </p>

                  {isExpanded && (
                    <div className="pt-4 border-t border-border">
                      <div className="flex flex-wrap gap-2">
                        {story.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  <button
                    className="text-xs font-semibold text-primary hover:text-primary/80 transition-colors"
                    onClick={(e) => {
                      e.stopPropagation();
                      setExpandedId(isExpanded ? null : story.id);
                    }}
                  >
                    {isExpanded ? "Contraer" : "Leer más"}
                  </button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-16 p-8 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 rounded-lg border border-primary/20 animate-fade-in">
          <h3 className="text-2xl font-bold text-gradient mb-4">
            El Manifiesto del Creativo Centauro
          </h3>
          <p className="text-foreground/90 leading-relaxed mb-4">
            Estas historias revelan una verdad: la IA no nos reemplaza, nos libera. La máquina conquistó la mediocridad técnica, lo que significa que ya no vale definirse por "dominar Photoshop" o "escribir códigos perfectos". Eso es historia.
          </p>
          <p className="text-foreground/90 leading-relaxed">
            Lo que vale ahora es lo que solo tú puedes aportar: tu intentio ética, tu criterio refinado, tu melancolía única, el color de tus lágrimas, el sonido de tu risa. La IA acelera la ejecución, pero tú diriges la orquesta. Somos Centauros: mitad instinto humano, mitad velocidad digital. Y eso es nuestra ventaja competitiva final.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Stories;
