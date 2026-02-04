import { Users, Globe, Award } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "+50",
    label: "Conferencias y Keynotes Impartidas"
  },
  {
    icon: Globe,
    value: "80%",
    label: "Optimización en Flujos Creativos"
  },
  {
    icon: Award,
    value: "Top Voice",
    label: "Tribu IA Colombia"
  }
];

const Stats = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-muted to-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center space-y-4 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex justify-center">
                <div className="p-4 rounded-full bg-primary/10">
                  <stat.icon className="h-8 w-8 text-primary" />
                </div>
              </div>
              {stat.value && (
                <div className="text-4xl md:text-5xl font-bold text-gradient glow-effect">
                  {stat.value}
                </div>
              )}
              <div className="text-lg text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 flex justify-center gap-8 flex-wrap opacity-60">
          <div className="text-center">
            <div className="text-sm text-muted-foreground mb-2">En colaboración con</div>
            <div className="text-lg font-semibold">Mintic</div>
          </div>
          <div className="text-center">
            <div className="text-sm text-muted-foreground mb-2">Miembro de</div>
            <div className="text-lg font-semibold">Tribu IA Colombia</div>
          </div>
          <div className="text-center">
            <div className="text-sm text-muted-foreground mb-2">Líder en</div>
            <div className="text-lg font-semibold">Women in Tech</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
