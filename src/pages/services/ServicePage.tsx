import { useParams, Link } from "react-router-dom";
import { motion } from "motion/react";
import { 
  Heart, 
  ArrowLeft, 
  Phone, 
  Mail, 
  CheckCircle2, 
  Syringe, 
  Activity, 
  Sparkles,
  ShieldCheck,
  Instagram,
  Linkedin
} from "lucide-react";
import SEO from "../../components/SEO";

const COLORS = {
  orange: "#f15a24",
  green: "#76c043",
  blue: "#1a4a7c",
  bg: "#fdfdfb",
  text: "#2d2d2d",
  muted: "#6b7280"
};

const SERVICE_DATA: Record<string, any> = {
  "vacinacao-corporativa": {
    title: "Vacinação Corporativa em São Paulo | Clínica La Vida",
    description: "Campanhas de vacinação in-company para empresas em São Paulo. Imunização contra gripe, hepatite e mais. Proteja sua equipe com a Clínica La Vida.",
    h1: "Vacinação Corporativa: Saúde e Prevenção para sua Empresa",
    content: "A Clínica La Vida é especialista em organizar campanhas de vacinação extramuros, levando toda a estrutura necessária para dentro da sua empresa. Reduza o absenteísmo e demonstre cuidado com seus colaboradores.",
    benefits: [
      "Redução de faltas por doenças sazonais",
      "Conveniência para os colaboradores (sem deslocamento)",
      "Gestão completa de lotes e certificados",
      "Equipe técnica altamente qualificada",
      "Protocolos rigorosos de segurança e temperatura"
    ],
    icon: Syringe,
    image: "https://images.unsplash.com/photo-1618961734760-466979ce35b0?auto=format&fit=crop&q=80&w=1200"
  },
  "ginastica-laboral": {
    title: "Ginástica Laboral em São Paulo | Bem-Estar Corporativo",
    description: "Programas de ginástica laboral personalizados para empresas. Previna LER/DORT e melhore a produtividade da sua equipe com a Clínica La Vida.",
    h1: "Ginástica Laboral: Produtividade e Prevenção de Lesões",
    content: "Nossos programas de ginástica laboral são desenhados por fisioterapeutas para atender às necessidades específicas de cada setor da sua empresa, focando na prevenção de doenças ocupacionais e melhora do clima organizacional.",
    benefits: [
      "Prevenção de LER e DORT",
      "Melhora da postura e circulação",
      "Aumento da interação entre equipes",
      "Redução do estresse laboral",
      "Sessões rápidas e dinâmicas (10-15 minutos)"
    ],
    icon: Activity,
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=1200"
  },
  "quick-massage": {
    title: "Quick Massage para Empresas | Relaxamento e Foco",
    description: "Quick Massage corporativa em São Paulo. Sessões de relaxamento imediato para aliviar tensões e aumentar o foco dos colaboradores.",
    h1: "Quick Massage: Alívio de Tensão e Bem-Estar no Escritório",
    content: "Proporcione momentos de pausa produtiva com sessões de Quick Massage. Uma solução prática e de alto impacto percebido para valorizar seus talentos e renovar a energia da equipe.",
    benefits: [
      "Alívio imediato de tensões musculares",
      "Redução dos níveis de estresse e ansiedade",
      "Aumento do foco e clareza mental",
      "Baixo custo de implementação",
      "Alta adesão dos colaboradores"
    ],
    icon: Sparkles,
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=1200"
  }
};

export default function ServicePage() {
  const { slug } = useParams();
  const service = slug ? SERVICE_DATA[slug] : null;

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Serviço não encontrado</h1>
          <Link to="/" className="text-blue-600 hover:underline">Voltar para o início</Link>
        </div>
      </div>
    );
  }

  const ServiceIcon = service.icon;

  return (
    <div className="min-h-screen font-sans" style={{ backgroundColor: COLORS.bg, color: COLORS.text }}>
      <SEO 
        title={service.title}
        description={service.description}
        canonical={`/servicos/${slug}`}
      />

      {/* Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <ArrowLeft size={20} style={{ color: COLORS.blue }} />
            <span className="font-bold text-xl" style={{ color: COLORS.blue }}>Clínica La Vida</span>
          </Link>
          <a href="https://wa.me/5511975176244" className="hidden md:flex items-center gap-2 px-6 py-2 rounded-full text-white font-bold" style={{ backgroundColor: COLORS.orange }}>
            Falar com Consultor
          </a>
        </div>
      </nav>

      <main className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100">
                <ShieldCheck size={18} className="text-blue-600" />
                <span className="text-sm font-bold text-blue-800 uppercase tracking-wider">Soluções Especializadas</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight" style={{ color: COLORS.blue }}>
                {service.h1}
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                {service.content}
              </p>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold" style={{ color: COLORS.blue }}>Principais Benefícios:</h3>
                <div className="grid gap-3">
                  {service.benefits.map((benefit: string, i: number) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="text-green-500" size={20} />
                      <span className="text-gray-700 font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a
                  href={`https://wa.me/5511975176244?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20${service.h1}`}
                  className="px-8 py-4 rounded-2xl text-white font-bold text-lg shadow-xl text-center"
                  style={{ backgroundColor: COLORS.orange }}
                >
                  Solicitar Orçamento
                </a>
                <Link
                  to="/portfolio"
                  className="px-8 py-4 rounded-2xl font-bold text-lg border-2 text-center"
                  style={{ borderColor: COLORS.blue, color: COLORS.blue }}
                >
                  Ver Portfólio
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative rounded-[2rem] overflow-hidden shadow-2xl aspect-square lg:aspect-video"
            >
              <img 
                src={service.image} 
                alt={service.h1}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-6 left-6 p-4 rounded-2xl bg-white/90 backdrop-blur shadow-lg">
                <ServiceIcon size={48} style={{ color: COLORS.orange }} />
              </div>
            </motion.div>
          </div>

          {/* Additional SEO Section */}
          <section className="bg-white rounded-[3rem] p-12 border border-gray-100 shadow-sm mb-20">
            <h2 className="text-3xl font-bold mb-8 text-center" style={{ color: COLORS.blue }}>Excelência em Saúde Preventiva em São Paulo</h2>
            <div className="prose prose-lg max-w-none text-gray-600">
              <p>
                A <strong>Clínica La Vida</strong> (também conhecida como <strong>LaVidaVac</strong>) é referência no mercado de saúde corporativa de São Paulo. Nosso compromisso com a imunização e o bem-estar vai além da simples aplicação de vacinas ou sessões de massagem; oferecemos uma consultoria completa para o RH da sua empresa.
              </p>
              <p>
                Entendemos que cada empresa possui uma cultura e necessidades diferentes. Por isso, nossas soluções em {service.h1.toLowerCase()} são totalmente adaptáveis. Seja para uma pequena equipe ou para grandes indústrias, garantimos o mesmo padrão de excelência e segurança técnica exigido pelos órgãos reguladores.
              </p>
            </div>
          </section>
        </div>
      </main>

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
              <a href="https://instagram.com/vacinaslavida" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center hover:text-orange-500 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://www.linkedin.com/company/clinica-la-vida-vacinas-sa%C3%BAde-e-bem-estar/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center hover:text-orange-500 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="mailto:contato@lavidavac.com.br" className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center hover:text-orange-500 transition-colors">
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
                <span>São Paulo, SP</span>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="font-bold text-blue-900 uppercase tracking-widest text-sm">Outros Serviços</h4>
            <div className="flex flex-col gap-3 text-gray-600">
              {Object.keys(SERVICE_DATA).filter(s => s !== slug).map(s => (
                <Link key={s} to={`/servicos/${s}`} className="hover:text-orange-500 transition-colors">
                  {SERVICE_DATA[s].h1}
                </Link>
              ))}
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
