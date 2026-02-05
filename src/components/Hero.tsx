import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import bannerImage from "@/assets/banner-paula.jpg";
const Hero = () => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0" style={{
      backgroundImage: `linear-gradient(to bottom, rgba(17, 24, 39, 0.7), rgba(17, 24, 39, 0.9)), url(${bannerImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }} />
      
      <div className="container mx-auto px-4 z-10 text-center animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient glow-effect">
          Paula Pinzon Conferencista experta en IA Generativa
        </h1>
        <p className="text-xl md:text-2xl mb-4 text-foreground/90">
          Conectando el Arte, la Cultura y la Inteligencia Artificial
        </p>
        <p className="text-lg md:text-xl mb-8 text-muted-foreground max-w-3xl mx-auto">PhD y educadora en IA Generativa | GEO-AEO | IA para creativos</p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold" onClick={() => window.open('https://www.linkedin.com/in/paula-pinzon-maldonado/', '_blank')}>
            Agendar Conferencia <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10" onClick={() => document.getElementById('about')?.scrollIntoView({
          behavior: 'smooth'
        })}>
            Conoce Más
          </Button>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2"></div>
        </div>
      </div>
    </section>;
};
export default Hero;