import { useState, useEffect } from "react";
import { GoogleGenAI } from "@google/genai";
import { motion } from "motion/react";
import { 
  Heart, 
  ShieldCheck, 
  Clock, 
  Users, 
  Phone, 
  MapPin, 
  Instagram, 
  Mail,
  ArrowRight,
  CheckCircle2,
  Syringe,
  Activity,
  Stethoscope,
  Play,
  Loader2,
  Video
} from "lucide-react";
import { Link } from "react-router-dom";

declare global {
  interface Window {
    aistudio: {
      hasSelectedApiKey: () => Promise<boolean>;
      openSelectKey: () => Promise<void>;
    };
  }
}

const COLORS = {
  orange: "#f15a24",
  green: "#76c043",
  blue: "#1a4a7c",
  bg: "#fdfdfb",
  text: "#2d2d2d",
  muted: "#6b7280"
};

export default function LandingPage() {
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [hasKey, setHasKey] = useState(false);
  const [status, setStatus] = useState("");

  useEffect(() => {
    checkKey();
  }, []);

  const checkKey = async () => {
    const selected = await window.aistudio.hasSelectedApiKey();
    setHasKey(selected);
  };

  const handleOpenKey = async () => {
    await window.aistudio.openSelectKey();
    setHasKey(true);
  };

  const generateVideo = async () => {
    setIsGenerating(true);
    setStatus("Iniciando geração do vídeo institucional...");
    
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      let operation = await ai.models.generateVideos({
        model: 'veo-3.1-fast-generate-preview',
        prompt: 'A professional corporate presentation video for "Clínica La Vida". The video starts with the logo (an orange stylized person figure with 7 green leaves fanning out above the head) and the text "Clínica La Vida - Saúde e Bem Estar". Transitions to clean, modern clinical environments. Scenes of a nurse administering a vaccine with care, a professional performing a quick massage on a relaxed employee in an office, and a group of workers doing light stretching (occupational gymnastics). The video ends with the contact information: Rua Costa Aguiar, 1969 - Ipiranga. High quality, bright lighting, professional cinematography.',
        config: {
          numberOfVideos: 1,
          resolution: '1080p',
          aspectRatio: '16:9'
        }
      });

      while (!operation.done) {
        setStatus("O processo de criação de vídeo pode levar alguns minutos. Estamos preparando as cenas da Clínica La Vida...");
        await new Promise(resolve => setTimeout(resolve, 10000));
        operation = await ai.operations.getVideosOperation({ operation: operation });
      }

      const downloadLink = operation.response?.generatedVideos?.[0]?.video?.uri;
      if (downloadLink) {
        const response = await fetch(downloadLink, {
          method: 'GET',
          headers: {
            'x-goog-api-key': process.env.API_KEY || '',
          },
        });
        const blob = await response.blob();
        setVideoUrl(URL.createObjectURL(blob));
      }
    } catch (error) {
      console.error("Video generation failed:", error);
      setStatus("Ocorreu um erro. Verifique sua chave de API e tente novamente.");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="min-h-screen font-sans selection:bg-blue-100" style={{ backgroundColor: COLORS.bg, color: COLORS.text }}>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: COLORS.orange }}>
              <Heart className="text-white" size={24} />
            </div>
            <span className="text-2xl font-bold tracking-tight" style={{ color: COLORS.blue }}>
              Clínica <span style={{ color: COLORS.orange }}>La Vida</span>
            </span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#servicos" className="text-sm font-semibold hover:opacity-70 transition-opacity">Serviços</a>
            <a href="#video" className="text-sm font-semibold hover:opacity-70 transition-opacity">Vídeo Institucional</a>
            <Link to="/folder" className="text-sm font-semibold hover:opacity-70 transition-opacity">Apresentação (Folder)</Link>
            <Link to="/portfolio" className="text-sm font-semibold px-4 py-2 rounded-full text-white transition-all hover:shadow-lg" style={{ backgroundColor: COLORS.green }}>
              Portfólio Corporativo
            </Link>
          </div>

          <a 
            href="https://wa.me/5511975176244" 
            target="_blank" 
            rel="noopener noreferrer"
            className="md:hidden p-2 rounded-full"
            style={{ color: COLORS.green }}
          >
            <Phone size={24} />
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 relative z-10"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100">
              <ShieldCheck size={18} className="text-blue-600" />
              <span className="text-sm font-bold text-blue-800 uppercase tracking-wider">Centro de Imunização Especializado</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight" style={{ color: COLORS.blue }}>
              Transformamos empresas em ambientes <span style={{ color: COLORS.orange }}>saudáveis</span> e produtivos.
            </h1>
            
            <p className="text-xl text-gray-600 max-w-xl leading-relaxed">
              Especialistas em bem-estar corporativo. Oferecemos soluções personalizadas como Campanhas de Vacinação e Quick Massage para elevar a qualidade de vida da sua equipe.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                href="https://wa.me/5511975176244?text=Olá,%20gostaria%20de%20agendar%20uma%20vacina."
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-2xl text-white font-bold text-lg shadow-xl flex items-center justify-center gap-3 transition-all"
                style={{ backgroundColor: COLORS.orange }}
              >
                <Syringe size={20} />
                Agendar Vacina
              </motion.a>
              
              <Link to="/portfolio">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full px-8 py-4 rounded-2xl font-bold text-lg border-2 flex items-center justify-center gap-3 transition-all"
                  style={{ borderColor: COLORS.blue, color: COLORS.blue }}
                >
                  Soluções para Empresas
                  <ArrowRight size={20} />
                </motion.button>
              </Link>
            </div>

            <div className="flex items-center gap-6 pt-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-12 h-12 rounded-full border-4 border-white overflow-hidden">
                    <img src={`https://picsum.photos/seed/user${i}/100/100`} alt="User" referrerPolicy="no-referrer" />
                  </div>
                ))}
              </div>
              <div>
                <p className="text-sm font-bold" style={{ color: COLORS.blue }}>+5.000 vidas cuidadas</p>
                <div className="flex gap-0.5 text-yellow-400">
                  {"★★★★★".split("").map((s, i) => <span key={i}>{s}</span>)}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="relative z-10 rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white">
              <img 
                src="https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&q=80&w=1000" 
                alt="Medical Care" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            
            {/* Floating Cards */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-6 -right-6 z-20 bg-white p-4 rounded-2xl shadow-xl border border-gray-50 flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                <CheckCircle2 size={24} />
              </div>
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase">Segurança</p>
                <p className="font-bold text-blue-900">Vacinas Certificadas</p>
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, delay: 1 }}
              className="absolute -bottom-6 -left-6 z-20 bg-white p-4 rounded-2xl shadow-xl border border-gray-50 flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center text-orange-600">
                <Clock size={24} />
              </div>
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase">Agilidade</p>
                <p className="font-bold text-blue-900">Sem Filas</p>
              </div>
            </motion.div>

            {/* Background Decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-50 rounded-full -z-10 blur-3xl opacity-50"></div>
          </motion.div>
        </div>
      </section>

      {/* Video Presentation Section */}
      <section id="video" className="py-24 bg-blue-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4" style={{ color: COLORS.blue }}>Vídeo Institucional</h2>
            <p className="text-lg text-gray-600">Conheça a Clínica La Vida em detalhes e veja como cuidamos do seu bem-estar.</p>
          </div>

          <div className="relative aspect-video rounded-[2rem] overflow-hidden bg-white shadow-2xl border-8 border-white group">
            {videoUrl ? (
              <video src={videoUrl} controls className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center p-12 text-center">
                {!hasKey ? (
                  <div className="space-y-6">
                    <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center mx-auto text-blue-600">
                      <Video size={40} />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold" style={{ color: COLORS.blue }}>Gerar Vídeo com IA</h3>
                      <p className="text-gray-500 max-w-md">Para gerar o vídeo de apresentação, você precisa selecionar uma chave de API paga do Google Cloud.</p>
                      <p className="text-xs text-gray-400 italic">Consulte as taxas em <a href="https://ai.google.dev/gemini-api/docs/billing" target="_blank" className="underline">ai.google.dev/gemini-api/docs/billing</a></p>
                    </div>
                    <button
                      onClick={handleOpenKey}
                      className="px-8 py-3 rounded-xl text-white font-bold flex items-center gap-2 mx-auto transition-transform hover:scale-105"
                      style={{ backgroundColor: COLORS.blue }}
                    >
                      Selecionar Chave de API
                    </button>
                  </div>
                ) : isGenerating ? (
                  <div className="space-y-6">
                    <Loader2 className="w-16 h-16 animate-spin mx-auto" style={{ color: COLORS.orange }} />
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold" style={{ color: COLORS.blue }}>Criando seu Vídeo...</h3>
                      <p className="text-gray-500 animate-pulse">{status}</p>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-6">
                    <div className="w-20 h-20 rounded-full bg-orange-100 flex items-center justify-center mx-auto text-orange-600">
                      <Play size={40} className="ml-1" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold" style={{ color: COLORS.blue }}>Pronto para Gerar</h3>
                      <p className="text-gray-500">Clique no botão abaixo para iniciar a criação do vídeo de apresentação da Clínica La Vida.</p>
                    </div>
                    <button
                      onClick={generateVideo}
                      className="px-10 py-4 rounded-2xl text-white font-bold text-lg shadow-xl flex items-center gap-3 mx-auto transition-all hover:shadow-2xl"
                      style={{ backgroundColor: COLORS.orange }}
                    >
                      Gerar Vídeo Institucional
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-4" style={{ color: COLORS.blue }}>Nossos Serviços</h2>
            <p className="text-lg text-gray-500">Oferecemos uma gama completa de serviços para garantir a saúde preventiva de toda a sua família.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Vacinação Estratégica",
                desc: "Imunização de alto impacto para sua família ou empresa, com foco na redução de riscos e proteção total.",
                icon: Syringe,
                color: COLORS.blue
              },
              {
                title: "Ginástica Laboral",
                desc: "Sessões dinâmicas de exercícios preventivos para melhorar a postura e o bem-estar no dia a dia.",
                icon: Activity,
                color: COLORS.orange
              },
              {
                title: "Bem-estar Corporativo",
                desc: "Soluções completas como Quick Massage e SIPAT para elevar a produtividade da sua equipe.",
                icon: Users,
                color: COLORS.green
              }
            ].map((service, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all bg-white"
              >
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6" style={{ backgroundColor: service.color + '10' }}>
                  <service.icon size={32} style={{ color: service.color }} />
                </div>
                <h3 className="text-2xl font-bold mb-4" style={{ color: COLORS.blue }}>{service.title}</h3>
                <p className="text-gray-500 leading-relaxed mb-6">{service.desc}</p>
                <Link to={service.title === "Bem-estar Corporativo" || service.title === "Ginástica Laboral" ? "/portfolio" : "#"} className="flex items-center gap-2 font-bold text-sm uppercase tracking-wider" style={{ color: service.color }}>
                  Saber Mais <ArrowRight size={16} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section - Inspired by "Saúde ao alcance de todos" */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold leading-tight" style={{ color: COLORS.blue }}>
                Saúde e bem-estar ao alcance da sua empresa
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Promovemos soluções acessíveis e personalizadas para tornar o dia a dia corporativo mais leve e motivador. Nossa abordagem integra saúde física e mental para resultados reais em produtividade.
              </p>
              <div className="space-y-4">
                {[
                  "Soluções 100% personalizadas para o seu RH",
                  "Equipe multidisciplinar altamente qualificada",
                  "Gestão completa de campanhas de saúde",
                  "Foco em resultados e engajamento"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="text-green-500" size={20} />
                    <span className="font-medium text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-2xl text-white font-bold shadow-lg"
                style={{ backgroundColor: COLORS.green }}
              >
                Monte seu Pacote Personalizado
              </motion.button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-8">
                <div className="aspect-square rounded-3xl overflow-hidden shadow-lg">
                  <img src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=400" alt="Health" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-lg">
                  <img src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=400" alt="Vaccine" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
              </div>
              <div className="space-y-4">
                <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-lg">
                  <img src="https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&q=80&w=400" alt="Massage" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div className="aspect-square rounded-3xl overflow-hidden shadow-lg">
                  <img src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=400" alt="Meeting" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4" style={{ color: COLORS.blue }}>O que dizem nossos clientes</h2>
            <p className="text-lg text-gray-500">Experiências reais de quem transformou sua empresa conosco.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                text: "A variedade de serviços personalizados garante a melhor experiência para nossos colaboradores. Atendimento ágil e impecável!",
                author: "Gerente de RH",
                company: "Multinacional de Tecnologia"
              },
              {
                text: "As campanhas de vacinação in-company foram um sucesso. Organização impecável e equipe muito atenciosa.",
                author: "Diretor Administrativo",
                company: "Indústria Farmacêutica"
              },
              {
                text: "A Quick Massage trouxe um novo ânimo para nossa equipe. Momentos de relaxamento que fazem toda a diferença na produtividade.",
                author: "Coordenadora de Bem-estar",
                company: "Agência de Publicidade"
              }
            ].map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-3xl bg-gray-50 border border-gray-100 relative"
              >
                <div className="text-orange-400 mb-4 text-4xl font-serif">“</div>
                <p className="text-gray-600 italic mb-6 leading-relaxed">{testimonial.text}</p>
                <div>
                  <p className="font-bold text-blue-900">{testimonial.author}</p>
                  <p className="text-sm text-gray-400">{testimonial.company}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20" style={{ backgroundColor: COLORS.blue }}>
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { label: "Anos de Experiência", value: "10+" },
            { label: "Vacinas Aplicadas", value: "50k+" },
            { label: "Empresas Parceiras", value: "200+" },
            { label: "Clientes Satisfeitos", value: "99%" }
          ].map((stat, i) => (
            <div key={i} className="text-white">
              <p className="text-4xl font-bold mb-2">{stat.value}</p>
              <p className="text-blue-200 text-sm uppercase tracking-widest">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Build your package Section */}
      <section className="px-6 py-24 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold">Monte o seu pacote de bem-estar!</h2>
          <p className="text-xl text-blue-100">
            Personalizamos cada detalhe para atender às necessidades da sua empresa ou condomínio.
          </p>
          <motion.a
            href="https://wa.me/5511975176244?text=Olá,%20gostaria%20de%20montar%20um%20pacote%20personalizado%20para%20minha%20empresa."
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl bg-orange-500 font-bold text-xl shadow-2xl hover:bg-orange-600 transition-colors"
          >
            Resgate seu pacote agora!
            <ArrowRight size={24} />
          </motion.a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2 space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: COLORS.orange }}>
                <Heart className="text-white" size={24} />
              </div>
              <span className="text-2xl font-bold tracking-tight" style={{ color: COLORS.blue }}>
                Clínica <span style={{ color: COLORS.orange }}>La Vida</span>
              </span>
            </div>
            <p className="text-gray-500 max-w-sm">
              Referência em imunização e saúde preventiva em São Paulo. Cuidando da sua vida com excelência e humanização.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center hover:text-orange-500 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center hover:text-orange-500 transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="font-bold text-blue-900 uppercase tracking-widest text-sm">Contato</h4>
            <div className="space-y-4 text-gray-600">
              <a href="tel:+5511975176244" className="flex items-center gap-3 hover:text-orange-500 transition-colors">
                <Phone size={18} />
                <span>(11) 97517-6244</span>
              </a>
              <div className="flex items-start gap-3">
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <span>Rua Costa Aguiar, 1969 - Ipiranga, SP</span>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="font-bold text-blue-900 uppercase tracking-widest text-sm">Links Rápidos</h4>
            <div className="flex flex-col gap-3 text-gray-600">
              <Link to="/portfolio" className="hover:text-orange-500 transition-colors">Portfólio Corporativo</Link>
              <Link to="/folder" className="hover:text-orange-500 transition-colors">Apresentação Digital (Folder)</Link>
              <a href="#servicos" className="hover:text-orange-500 transition-colors">Nossos Serviços</a>
              <a href="https://wa.me/5511975176244" className="hover:text-orange-500 transition-colors">Agendar Consulta</a>
            </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-gray-200 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Clínica La Vida. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
