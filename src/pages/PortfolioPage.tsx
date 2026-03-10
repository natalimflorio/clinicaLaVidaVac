import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Heart, 
  Leaf, 
  Activity, 
  Brain, 
  CheckCircle2, 
  Phone, 
  MapPin, 
  Instagram, 
  Mail,
  Syringe,
  Users,
  Sparkles,
  ShieldCheck,
  ArrowRight,
  ChevronDown,
  ChevronUp
} from "lucide-react";
import { Link } from "react-router-dom";

const COLORS = {
  orange: "#f15a24",
  green: "#76c043",
  blue: "#1a4a7c",
  bg: "#fdfdfb",
  text: "#2d2d2d",
  muted: "#6b7280"
};

const corporateServices = [
  {
    title: "Campanhas de Vacinação",
    description: "Imunização estratégica: Proteção de alto impacto para reduzir o absenteísmo e garantir a saúde do seu time.",
    icon: Syringe,
    image: "https://images.unsplash.com/photo-1618961734760-466979ce35b0?auto=format&fit=crop&q=80&w=800",
    details: [
      "Vacina da Gripe (Influenza Quadrivalente)",
      "Hepatite A e B",
      "Tríplice Viral (Sarampo, Caxumba e Rubéola)",
      "Dupla Adulto (Difteria e Tétano)",
      "Febre Amarela",
      "Meningocócica ACWY e B",
      "Gestão completa de lotes e rastreabilidade",
      "Emissão de certificados digitais"
    ]
  },
  {
    title: "Quick Massage",
    description: "Pausa produtiva: Sessões de relaxamento que renovam o foco e combatem o estresse ocupacional.",
    icon: Sparkles,
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=800",
    details: [
      "Atendimento em cadeira ergonômica",
      "Sessões de 15 a 20 minutos",
      "Alívio imediato de tensões musculares",
      "Aumento da produtividade e foco",
      "Profissionais especializados e uniformizados"
    ]
  },
  {
    title: "Ginástica Laboral",
    description: "Movimento e prevenção: Séries de exercícios dinâmicos para evitar lesões e melhorar o clima organizacional.",
    icon: Activity,
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=800",
    details: [
      "Exercícios preparatórios e compensatórios",
      "Prevenção de LER/DORT",
      "Melhora da postura e circulação",
      "Dinâmicas de grupo integrativas",
      "Acompanhamento por fisioterapeutas"
    ]
  },
  {
    title: "SIPAT e Eventos",
    description: "Conscientização ativa: Palestras e ações dinâmicas que transformam a cultura de saúde da empresa.",
    icon: ShieldCheck,
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=800",
    details: [
      "Palestras interativas e workshops",
      "Campanhas sazonais (Outubro Rosa, Novembro Azul)",
      "Ações de conscientização sobre saúde mental",
      "Suporte completo para a CIPA",
      "Materiais educativos personalizados"
    ]
  }
];

const values = [
  "Atendimento Humanizado",
  "Foco no Bem-Estar Integral",
  "Equipe Multidisciplinar",
  "Ambiente Acolhedor"
];

export default function PortfolioPage() {
  const [expandedService, setExpandedService] = useState<string | null>(null);

  const toggleService = (title: string) => {
    setExpandedService(expandedService === title ? null : title);
  };

  return (
    <div className="min-h-screen font-sans selection:bg-orange-100" style={{ backgroundColor: COLORS.bg, color: COLORS.text }}>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="font-bold text-xl" style={{ color: COLORS.blue }}>
            Clínica La Vida
          </Link>
          <div className="flex items-center gap-6">
            <Link to="/folder" className="text-sm font-semibold hover:opacity-70 transition-opacity" style={{ color: COLORS.blue }}>
              Ver Apresentação (Folder)
            </Link>
            <Link to="/" className="text-sm font-semibold hover:opacity-70 transition-opacity" style={{ color: COLORS.green }}>
              Voltar para Início
            </Link>
          </div>
        </div>
      </nav>

      {/* Header / Logo Section */}
      <header className="pt-32 pb-16 px-6 max-w-6xl mx-auto text-center space-y-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center gap-4"
        >
          {/* Logo Representation */}
          <div className="w-24 h-24 relative">
             <svg viewBox="0 0 240 240" className="w-full h-full">
              <g transform="translate(120, 120)">
                {[...Array(7)].map((_, i) => (
                  <path
                    key={i}
                    d="M0,-15 C12,-15 22,-35 22,-60 C22,-85 12,-105 0,-105 C-12,-105 -22,-85 -22,-60 C-22,-35 -12,-15 0,-15"
                    fill={COLORS.green}
                    transform={`rotate(${(i - 3) * 26}) translate(0, -5)`}
                  />
                ))}
                <circle cx="0" cy="-10" r="26" fill={COLORS.orange} />
                <path
                  d="M-90,30 C-45,10 45,10 90,30 C60,60 30,100 0,130 C-30,100 -60,60 -90,30 Z"
                  fill={COLORS.orange}
                />
              </g>
            </svg>
          </div>
          <div className="space-y-2">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-none" style={{ color: COLORS.blue }}>
              CLÍNICA LA VIDA
            </h1>
            <p className="text-xl md:text-2xl font-medium tracking-widest uppercase" style={{ color: COLORS.green }}>
              Vacinação e bem-estar para empresas
            </p>
          </div>
        </motion.div>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-lg text-gray-500 max-w-3xl mx-auto"
        >
          Cuidando da saúde dos colaboradores e promovendo qualidade de vida no ambiente de trabalho.
        </motion.p>
      </header>

      {/* Corporate Solutions Section */}
      <section className="px-6 py-12 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold tracking-tight mb-4" style={{ color: COLORS.text }}>
            Soluções <span style={{ color: COLORS.orange }}>Corporativas</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Levamos a excelência da La Vida para dentro da sua empresa, promovendo saúde e produtividade.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {corporateServices.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-3xl bg-white shadow-xl border border-gray-100"
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-xl" style={{ backgroundColor: COLORS.orange + '15' }}>
                    <item.icon size={24} style={{ color: COLORS.orange }} />
                  </div>
                  <h3 className="text-2xl font-bold" style={{ color: COLORS.text }}>{item.title}</h3>
                </div>
                <p className="text-gray-500 mb-6 leading-relaxed">
                  {item.description}
                </p>
                
                <AnimatePresence>
                  {expandedService === item.title && item.details && (
                    <motion.ul 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="mb-8 space-y-3 overflow-hidden"
                    >
                      {item.details.map((detail, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                          <div className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: COLORS.green }}></div>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>

                <button 
                  onClick={() => toggleService(item.title)}
                  className="flex items-center gap-2 font-semibold transition-colors hover:opacity-80" 
                  style={{ color: COLORS.green }}
                >
                  {expandedService === item.title ? (
                    <>Ver menos <ChevronUp size={18} /></>
                  ) : (
                    <>Saiba mais <ChevronDown size={18} /></>
                  )}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Values / Why Us */}
      <section className="px-6 py-24 max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="rounded-3xl overflow-hidden shadow-2xl aspect-[4/5] relative"
          >
            <img 
              src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800" 
              alt="Yoga and wellness" 
              className="object-cover w-full h-full"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <p className="text-sm font-bold uppercase tracking-widest opacity-80">Nosso Compromisso</p>
              <p className="text-2xl font-serif italic">Sua saúde em primeiro lugar.</p>
            </div>
          </motion.div>

          <div className="space-y-8">
            <h3 className="text-3xl font-bold tracking-tight" style={{ color: COLORS.text }}>
              Por que escolher a <span style={{ color: COLORS.blue }}>Clínica La Vida</span>?
            </h3>
            <ul className="space-y-4">
              {[
                "Mais de 3 anos de experiência",
                "Mais de 150 parcerias corporativas",
                "Atendimento Humanizado",
                "Equipe Multidisciplinar Especializada"
              ].map((value, i) => (
                <motion.li 
                  key={value}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-3 text-lg"
                >
                  <CheckCircle2 size={24} style={{ color: COLORS.green }} />
                  <span>{value}</span>
                </motion.li>
              ))}
            </ul>
            <motion.a
              href="https://wa.me/5511975176244?text=Olá,%20gostaria%20de%20agendar%20uma%20consulta/vacinação%20corporativa."
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 rounded-2xl text-white font-bold text-lg shadow-lg transition-shadow hover:shadow-xl flex items-center justify-center gap-3"
              style={{ backgroundColor: COLORS.orange }}
            >
              <Phone size={20} />
              Agende sua consulta
            </motion.a>
          </div>
        </div>
      </section>

      {/* Build your package Section */}
      <section className="px-6 py-24 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold">Monte o seu pacote!</h2>
          <p className="text-xl text-blue-100">
            Oferecemos um portfólio amplo com mais de 35 opções personalizadas para atender às necessidades específicas da sua empresa.
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

      {/* Clients Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-bold" style={{ color: COLORS.blue }}>Nossos Clientes</h2>
            <p className="text-lg text-gray-500 max-w-3xl mx-auto">
              Empresas de diversos setores já confiaram nos serviços da Clínica La Vida para promover saúde, prevenção e bem-estar entre seus colaboradores.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            {[
              "TechCorp Solutions",
              "Global Logistics PR",
              "Indústria Metalúrgica Sul",
              "Varejo Express",
              "Construtora Horizonte",
              "Educação & Futuro"
            ].map((name, i) => (
              <div key={i} className="px-6 py-3 rounded-xl border border-gray-200 font-bold text-xl text-gray-400">
                {name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer className="px-6 py-16 border-t border-gray-100" style={{ backgroundColor: "#fff" }}>
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <h4 className="font-bold uppercase tracking-widest text-sm" style={{ color: COLORS.green }}>Contato</h4>
            <div className="space-y-3 text-gray-600">
              <a href="tel:+5511975176244" className="flex items-center gap-3 hover:text-orange-500 transition-colors">
                <Phone size={18} />
                <span>(11) 97517-6244</span>
              </a>
              <a href="mailto:clinicalavidavac@gmail.com" className="flex items-center gap-3 hover:text-orange-500 transition-colors">
                <Mail size={18} />
                <span>clinicalavidavac@gmail.com</span>
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold uppercase tracking-widest text-sm" style={{ color: COLORS.green }}>Endereço</h4>
            <div className="flex items-start gap-3 text-gray-600">
              <MapPin size={18} className="mt-1 flex-shrink-0" />
              <span>Curitiba - PR</span>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold uppercase tracking-widest text-sm" style={{ color: COLORS.green }}>Siga-nos</h4>
            <div className="flex gap-4">
              <a href="https://instagram.com/vacinaslavida" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full flex items-center justify-center border border-gray-200 hover:border-orange-500 hover:text-orange-500 transition-all">
                <Instagram size={20} />
              </a>
              <span className="text-sm text-gray-500 self-center">@vacinaslavida</span>
            </div>
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto mt-16 pt-8 border-t border-gray-50 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Clínica La Vida - Vacinação e Bem Estar. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
