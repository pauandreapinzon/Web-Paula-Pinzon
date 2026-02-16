import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Linkedin, Mail, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "¡Mensaje enviado!",
      description: "Gracias por contactarme. Te responderé pronto.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            Conectemos
          </h2>
          <p className="text-lg text-muted-foreground">
            ¿Interesado en una conferencia, colaboración o consultoría?
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="md:col-span-2 bg-card border-border animate-fade-in">
            <CardHeader>
              <CardTitle>Envíame un Mensaje</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    placeholder="Nombre"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="bg-background"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="bg-background"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Mensaje"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={5}
                    className="bg-background resize-none"
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  Enviar Mensaje <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-6 animate-slide-in">
            <Card className="bg-card border-border hover:card-glow transition-all duration-300">
              <CardContent className="pt-6">
                <a 
                  href="https://www.linkedin.com/in/paula-pinzon-maldonado/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
                >
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Linkedin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">LinkedIn</div>
                    <div className="text-sm text-muted-foreground">Conecta conmigo</div>
                  </div>
                </a>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:card-glow transition-all duration-300">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-lg bg-secondary/10">
                    <Mail className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-sm text-muted-foreground">Contáctame directamente</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
