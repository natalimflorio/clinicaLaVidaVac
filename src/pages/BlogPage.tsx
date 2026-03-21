import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { 
  Heart, 
  ArrowLeft, 
  Phone, 
  Mail, 
  Calendar,
  Clock,
  ArrowRight,
  Instagram,
  Linkedin,
  ShieldCheck,
  Zap,
  Smile
} from "lucide-react";
import SEO from "../components/SEO";

const COLORS = {
  orange: "#f15a24",
  green: "#76c043",
  blue: "#1a4a7c",
  bg: "#fdfdfb",
  text: "#2d2d2d",
  muted: "#6b7280"
};

const POSTS = [
  {
    slug: "importancia-vacinacao-corporativa",
    title: "A Importância da Vacinação Corporativa para o RH Estratégico",
    excerpt: "Descubra como as campanhas de vacinação podem reduzir o absenteísmo em até 40% e aumentar a produtividade na sua empresa através da imunização preventiva.",
    date: "20 de Março, 2024",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800",
    category: "Imunização",
    icon: ShieldCheck
  },
  {
    slug: "beneficios-ginastica-laboral",
    title: "5 Benefícios Imediatos da Ginástica Laboral no Ambiente de Trabalho",
    excerpt: "Prevenir LER/DORT e melhorar o clima organizacional são apenas alguns dos ganhos reais que a sua equipe terá com apenas 15 minutos de exercícios diários.",
    date: "15 de Março, 2024",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=800",
    category: "Bem-Estar",
    icon: Zap
  },
  {
    slug: "quick-massage-estresse-ocupacional",
    title: "Como a Quick Massage pode ser o Diferencial de Retenção de Talentos",
    excerpt: "Pequenas pausas para massagem podem transformar a saúde mental, reduzir o turnover e aumentar drasticamente o foco dos seus colaboradores no dia a dia.",
    date: "10 de Março, 2024",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=800",
    category: "Saúde Mental",
    icon: Smile
  }
];

export default function BlogPage() {
  return (
    <div className="min-h-screen font-sans" style={{ backgroundColor: COLORS.bg, color: COLORS.text }}>
      <SEO 
        title="Blog Clínica La Vida | Dicas de Saúde e Imunização Corporativa"
        description="Acompanhe as últimas tendências em saúde ocupacional, calendários de vacinação e estratégias de bem-estar para empresas em São Paulo."
        canonical="/blog"
      />

      {/* Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <ArrowLeft size={20} style={{ color: COLORS.blue }} />
            <span className="font-bold text-xl" style={{ color: COLORS.blue }}>Clínica La Vida</span>
          </Link>
          <div className="hidden md:flex gap-6">
            <Link to="/portfolio" className="text-sm font-semibold hover:opacity-70 transition-opacity">Portfólio</Link>
            <a href="https://wa.me/5511975176244" className="px-4 py-2 rounded-full text-white text-sm font-bold shadow-md" style={{ backgroundColor: COLORS.green }}>Contato Comercial</a>
          </div>
        </div>
      </nav>

      <main className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <header className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 text-orange-700 font-bold text-xs uppercase tracking-widest mb-6"
            >
              Conteúdo Especializado
            </motion.div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6" style={{ color: COLORS.blue }}>Dicas de Saúde & <br/> <span style={{ color: COLORS.orange }}>Bem-Estar Corporativo</span></h1>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
              Informação de qualidade para gestores de RH e empresas que buscam alta performance através do cuidado com as pessoas.
            </p>
          </header>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {POSTS.map((post, i) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group bg-white rounded-[2.5rem] overflow-hidden shadow-sm border border-gray-100 hover:shadow-2xl transition-all duration-500 flex flex-col"
              >
                <div className="aspect-[16/10] relative overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                  <div className="absolute top-4 left-4 px-4 py-2 rounded-full bg-white/90 backdrop-blur-sm text-xs font-bold shadow-sm flex items-center gap-2">
                    <post.icon size={14} style={{ color: COLORS.orange }} />
                    {post.category}
                  </div>
                </div>
                <div className="p-8 space-y-4 flex-grow flex flex-col">
                  <div className="flex items-center gap-4 text-xs text-gray-400 font-bold uppercase tracking-tighter">
                    <span className="flex items-center gap-1"><Calendar size={14} /> {post.date}</span>
                    <span className="flex items-center gap-1"><Clock size={14} /> 5 min de leitura</span>
                  </div>
                  <h2 className="text-2xl font-bold leading-tight group-hover:text-orange-500 transition-colors" style={{ color: COLORS.blue }}>
                    {post.title}
                  </h2>
                  <p className="text-gray-500 leading-relaxed text-sm">
                    {post.excerpt}
                  </p>
                  <div className="pt-4 mt-auto">
                    <Link to="#" className="inline-flex items-center gap-2 font-black text-xs uppercase tracking-widest transition-all group-hover:gap-4" style={{ color: COLORS.green }}>
                      Ler artigo completo <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* CTA Section */}
          <section className="mt-32 p-12 rounded-[3rem] text-white relative overflow-hidden" style={{ backgroundColor: COLORS.blue }}>
            <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl lg:text-4xl font-bold">Quer receber conteúdos exclusivos para o RH da sua empresa?</h2>
                <p className="text-blue-100 text-lg">Assine nossa newsletter e fique por dentro das melhores práticas de imunização e saúde preventiva.</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <input 
                  type="email" 
                  placeholder="Seu melhor e-mail" 
                  className="flex-grow px-6 py-4 rounded-2xl bg-white/10 border border-white/20 text-white placeholder:text-blue-200 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <button className="px-8 py-4 rounded-2xl font-bold whitespace-nowrap shadow-xl hover:scale-105 transition-transform" style={{ backgroundColor: COLORS.orange }}>
                  Quero me Inscrever
                </button>
              </div>
            </div>
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
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
        </div>
        
        <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-gray-200 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Clínica La Vida. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
