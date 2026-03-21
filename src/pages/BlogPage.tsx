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
  Linkedin
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
    title: "A Importância da Vacinação Corporativa para o RH",
    excerpt: "Descubra como as campanhas de vacinação podem reduzir o absenteísmo e aumentar a produtividade na sua empresa.",
    date: "20 de Março, 2024",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800"
  },
  {
    slug: "beneficios-ginastica-laboral",
    title: "5 Benefícios da Ginástica Laboral no Dia a Dia",
    excerpt: "Prevenir lesões e melhorar o clima organizacional são apenas alguns dos ganhos com a ginástica laboral.",
    date: "15 de Março, 2024",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=800"
  },
  {
    slug: "quick-massage-estresse-ocupacional",
    title: "Como a Quick Massage ajuda a Combater o Estresse",
    excerpt: "Pequenas pausas para massagem podem transformar a saúde mental e o foco dos seus colaboradores.",
    date: "10 de Março, 2024",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=800"
  }
];

export default function BlogPage() {
  return (
    <div className="min-h-screen font-sans" style={{ backgroundColor: COLORS.bg, color: COLORS.text }}>
      <SEO 
        title="Blog Clínica La Vida | Saúde e Bem-Estar Corporativo em São Paulo"
        description="Dicas de saúde, imunização e bem-estar para empresas. Artigos exclusivos da Clínica La Vida para gestores de RH e colaboradores."
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
            <a href="https://wa.me/5511975176244" className="text-sm font-semibold" style={{ color: COLORS.orange }}>Contato</a>
          </div>
        </div>
      </nav>

      <main className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-6xl font-bold mb-4" style={{ color: COLORS.blue }}>Blog La Vida</h1>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">Conteúdo especializado em saúde preventiva e qualidade de vida no ambiente corporativo.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {POSTS.map((post, i) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-[2rem] overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all"
              >
                <div className="aspect-video relative overflow-hidden">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-8 space-y-4">
                  <div className="flex items-center gap-4 text-xs text-gray-400 font-bold uppercase">
                    <span className="flex items-center gap-1"><Calendar size={14} /> {post.date}</span>
                    <span className="flex items-center gap-1"><Clock size={14} /> 5 min de leitura</span>
                  </div>
                  <h2 className="text-2xl font-bold leading-tight" style={{ color: COLORS.blue }}>{post.title}</h2>
                  <p className="text-gray-500 leading-relaxed">{post.excerpt}</p>
                  <Link to="#" className="inline-flex items-center gap-2 font-bold text-sm uppercase tracking-wider" style={{ color: COLORS.orange }}>
                    Ler artigo completo <ArrowRight size={16} />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
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
