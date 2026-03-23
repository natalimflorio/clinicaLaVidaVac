import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "motion/react";
import { 
  ArrowLeft, 
  Calendar,
  Clock,
  Instagram,
  Linkedin,
  Mail,
  Heart,
  Phone,
  MapPin,
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

const ARTICLES = {
  "importancia-vacinacao-corporativa": {
    title: "A Importância da Vacinação Corporativa para o RH Estratégico",
    excerpt: "Descubra como as campanhas de vacinação podem reduzir o absenteísmo em até 40% e aumentar a produtividade na sua empresa através da imunização preventiva.",
    date: "20 de Março, 2024",
    readTime: "5 min de leitura",
    category: "Imunização",
    icon: ShieldCheck,
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1200",
    content: `
      <h2>O Papel do RH na Saúde Preventiva</h2>
      <p>O papel do Recursos Humanos moderno vai muito além da administração de benefícios. Um RH estratégico enxerga a saúde dos colaboradores como um investimento direto na produtividade e no clima organizacional. A vacinação corporativa surge como uma das ferramentas mais eficientes de saúde preventiva empresarial.</p>
      
      <p><img src="https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?auto=format&fit=crop&q=80&w=800" alt="Profissionais de saúde" class="w-full rounded-2xl my-8 shadow-lg"/></p>

      <h2>Retorno sobre o Investimento (ROI) em Saúde</h2>
      <p>Estudos demonstram que surtos de gripe ou outras doenças contagiosas podem reduzir significativamente a entrega de times inteiros durante os períodos sazonais de pico. Implementar uma campanha de vacinação in company pode diminuir as faltas por causas médicas (absenteísmo) em até 40%. Para cada real investido na prevenção, a economia refletida no plano de saúde e nas horas trabalhadas compensa de forma substancial.</p>
      
      <h2>Vantagens para a Equipe e para a Empresa</h2>
      <ul>
        <li><strong>Redução de Faltas:</strong> A prevenção coletiva barra a propagação de viroses no escritório.</li>
        <li><strong>Melhora no Clima:</strong> Colaboradores valorizam empresas que cuidam ativamente de seu bem-estar.</li>
        <li><strong>Praticidade:</strong> A aplicação na própria empresa significa que a equipe não precisa perder horas em filas de postos ou clínicas externas.</li>
      </ul>

      <h2>A Clínica La Vida como sua Parceira Estratégica</h2>
      <p>Nós cuidamos de toda a logística e aplicação com protocolos rigorosos de higiene e segurança, permitindo que a sua liderança foque na gestão de pessoas com a tranquilidade de quem conta com especialistas em imunização.</p>
    `
  },
  "beneficios-ginastica-laboral": {
    title: "5 Benefícios Imediatos da Ginástica Laboral no Ambiente de Trabalho",
    excerpt: "Prevenir LER/DORT e melhorar o clima organizacional são apenas alguns dos ganhos reais que a sua equipe terá com apenas 15 minutos de exercícios diários.",
    date: "15 de Março, 2024",
    readTime: "4 min de leitura",
    category: "Bem-Estar",
    icon: Zap,
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=1200",
    content: `
      <h2>O Que É a Ginástica Laboral?</h2>
      <p>Trata-se de uma prática rápida e focada de exercícios físicos realizados dentro do horário e ambiente de trabalho. Seu objetivo principal é compensar o esforço das funções rotineiras, aliviando tensões musculares, corrigindo a postura e promovendo uma pausa ativa focada em bem-estar.</p>

      <h2>1. Prevenção de LER e DORT</h2>
      <p>O benefício mais conhecido da ginástica laboral é sem dúvidas a prevenção de Lesão por Esforço Repetitivo (LER) e dos Distúrbios Osteomusculares Relacionados ao Trabalho (DORT). Ao alongar e fortalecer a musculatura utilizada nas atividades diárias, reduz-se consideravelmente o risco dessas condições.</p>

      <p><img src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80&w=800" alt="Alongamento no escritório" class="w-full rounded-2xl my-8 shadow-lg"/></p>

      <h2>2. Redução do Estresse e Melhora do Clima Organizacional</h2>
      <p>O momento da ginástica proporciona uma "quebra" produtiva. Esses 15 minutos ajudam a aliviar a carga mental, reduzindo a ansiedade e fomentando a socialização saudável entre diferentes setores e pessoas.</p>

      <h2>3. Aumento da Produtividade e Foco</h2>
      <p>Um corpo mais relaxado e livre de dores funciona melhor. Aquela letargia comum no meio da tarde é amenizada com o aumento da circulação sanguínea que a pausa proporciona, refletindo em mais energia e disposição mental para os desafios da rotina.</p>

      <h2>4. Diminuição do Absenteísmo</h2>
      <p>Assim como na vacinação corporativa, um funcionário saudável falta menos. Doenças ocupacionais afastam muitos profissionais qualificados por períodos longos, o que impacta os resultados de toda a empresa.</p>

      <h2>5. Conscientização Corporal</h2>
      <p>Ao se acostumar com a prática, o colaborador passa a perceber melhor a própria postura na cadeira, o ajuste do monitor e de seus equipamentos, levando a cultura da ergonomia também para seu home office e vida particular.</p>
    `
  },
  "quick-massage-estresse-ocupacional": {
    title: "Como a Quick Massage pode ser o Diferencial de Retenção de Talentos",
    excerpt: "Pequenas pausas para massagem podem transformar a saúde mental, reduzir o turnover e aumentar drasticamente o foco dos seus colaboradores no dia a dia.",
    date: "10 de Março, 2024",
    readTime: "6 min de leitura",
    category: "Saúde Mental",
    icon: Smile,
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=1200",
    content: `
      <h2>A Síndrome do Esgotamento Profissional (Burnout)</h2>
      <p>A cultura corporativa contemporânea, embora engajadora, frequentemente eleva os níveis de pressão, resultando em estresse crônico. No longo prazo, isso culmina no <em>Burnout</em>, afetando severamente a saúde mental do profissional e os indicadores de performance da empresa.</p>
      
      <p><img src="https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&q=80&w=800" alt="Sessão de massagem e relaxamento" class="w-full rounded-2xl my-8 shadow-lg"/></p>

      <h2>O Que é a Quick Massage?</h2>
      <p>Aplicada em uma cadeira ergonômica especialmente projetada, a Quick Massage (Massagem Rápida) é uma intervenção de cerca de 15 minutos muito eficaz no alívio de tensões nos ombros, costas, braços e pescoço. Ela utiliza técnicas inspiradas no Shiatsu e não requer que o colaborador troque de roupa ou utilize óleos corporais.</p>

      <h2>O Impacto Direto na Retenção de Talentos</h2>
      <p>No mercado competitivo de hoje, salários não são mais o único atrativo diferencial. Profissionais de alta performance buscam ambientes que lhes proporcionem equilíbrio e que respeitem o limite de sua exaustão. Implementar sessões semanais de Quick Massage demonstra um claro respeito da liderança pela integridade física e emocional do colaborador.</p>

      <h2>Resultados Imediatos</h2>
      <ul>
        <li><strong>Foco renovado:</strong> Após a massagem, o alívio na circulação cerebral traz clareza de ideias.</li>
        <li><strong>Endorfina natural:</strong> A massagem induz a produção de hormônios do bem-estar, neutralizando o cortisol (hormônio do estresse).</li>
        <li><strong>Dores minimizadas:</strong> Combate os contratempos de sentar de frente para o computador durante longas horas.</li>
      </ul>

      <h2>Programa de Saúde In Company</h2>
      <p>Consolidar um calendário de saúde com a Clínica La Vida significa integrar vacinação, exercícios e Quick Massage em uma jornada única, criando uma armadura institucional contra o turnover e garantindo que os corações e mentes do seu time estejam operando no seu mais alto potencial.</p>
    `
  }
};

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  
  if (!slug || !ARTICLES[slug as keyof typeof ARTICLES]) {
    return <Navigate to="/blog" replace />;
  }

  const article = ARTICLES[slug as keyof typeof ARTICLES];

  return (
    <div className="min-h-screen font-sans" style={{ backgroundColor: COLORS.bg, color: COLORS.text }}>
      <SEO 
        title={`${article.title} | Blog Clínica La Vida`}
        description={article.excerpt}
        canonical={`/blog/${slug}`}
      />

      {/* Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link to="/blog" className="flex items-center gap-2 hover:opacity-70 transition-opacity">
            <ArrowLeft size={20} style={{ color: COLORS.blue }} />
            <span className="font-bold text-sm hidden sm:block" style={{ color: COLORS.blue }}>Voltar para o Blog</span>
          </Link>
          <div className="flex gap-4 items-center">
            <a href="https://wa.me/5511975176244" className="px-4 py-2 rounded-full text-white text-sm font-bold shadow-md" style={{ backgroundColor: COLORS.green }}>Falar com Especialista</a>
          </div>
        </div>
      </nav>

      <main className="pt-32 pb-20">
        <article className="max-w-4xl mx-auto px-6">
          <header className="mb-12 text-center">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 text-orange-700 font-bold text-xs uppercase tracking-widest mb-6"
            >
              <article.icon size={14} style={{ color: COLORS.orange }} />
              {article.category}
            </motion.div>
            
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight" style={{ color: COLORS.blue }}>
              {article.title}
            </h1>
            
            <div className="flex items-center justify-center gap-6 text-sm text-gray-500 font-medium">
              <span className="flex items-center gap-2"><Calendar size={16} /> {article.date}</span>
              <span className="flex items-center gap-2"><Clock size={16} /> {article.readTime}</span>
            </div>
          </header>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-16 rounded-3xl overflow-hidden shadow-2xl"
          >
            <img 
              src={article.image} 
              alt={article.title} 
              className="w-full h-auto aspect-video object-cover" 
            />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-lg text-gray-600 leading-relaxed max-w-none [&>h2]:text-3xl [&>h2]:font-bold [&>h2]:text-[#1a4a7c] [&>h2]:mt-12 [&>h2]:mb-6 [&>p]:mb-6 [&>ul]:list-disc [&>ul]:pl-6 [&>ul>li]:mb-2 [&>p>img]:rounded-3xl [&>p>img]:my-10 [&>p>img]:shadow-xl"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          <div className="mt-16 pt-8 border-t border-gray-200">
            <div className="bg-blue-50 p-8 rounded-3xl flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-xl font-bold text-blue-900 mb-2">Gostou deste artigo?</h3>
                <p className="text-gray-600">Compartilhe com a sua equipe de RH e comece a planejar a saúde corporativa da sua empresa.</p>
              </div>
              <a 
                href="https://wa.me/5511975176244?text=Olá! Estava lendo o blog da Clínica La Vida e gostaria de saber mais sobre os serviços corporativos." 
                target="_blank" 
                rel="noreferrer"
                className="px-6 py-3 rounded-xl font-bold text-white shadow-lg shadow-green-500/30 whitespace-nowrap hover:-translate-y-1 transition-transform"
                style={{ backgroundColor: COLORS.green }}
              >
                Solicitar Proposta
              </a>
            </div>
          </div>
        </article>
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 pt-24 pb-12 mt-12">
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
