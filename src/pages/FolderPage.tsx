import { motion } from "motion/react";
import { 
  Heart, 
  ShieldCheck, 
  CheckCircle2, 
  Syringe, 
  Users, 
  Target, 
  Eye, 
  Award, 
  ArrowLeft,
  Phone,
  Mail,
  MapPin,
  Sparkles,
  Stethoscope
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

export default function FolderPage() {
  return (
    <div className="min-h-screen font-sans selection:bg-green-100" style={{ backgroundColor: COLORS.bg, color: COLORS.text }}>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 print:hidden">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <ArrowLeft size={20} style={{ color: COLORS.blue }} />
            <span className="font-semibold" style={{ color: COLORS.blue }}>Voltar ao Início</span>
          </Link>
          <button 
            onClick={() => window.print()}
            className="px-4 py-2 rounded-full text-white text-sm font-bold shadow-md hover:shadow-lg transition-all"
            style={{ backgroundColor: COLORS.green }}
          >
            Imprimir Folder
          </button>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-6 pt-24 pb-20 space-y-24">
        
        {/* Cover Section */}
        <section className="text-center space-y-12 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center gap-6"
          >
            {/* Logo Representation */}
            <div className="w-48 h-48 relative">
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
              <h1 className="text-6xl font-bold tracking-tight" style={{ color: COLORS.blue }}>
                Clínica <span style={{ color: COLORS.orange }}>La Vida</span>
              </h1>
              <p className="text-2xl font-medium tracking-widest uppercase" style={{ color: COLORS.green }}>
                Saúde e Bem Estar
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="max-w-2xl mx-auto"
          >
            <p className="text-xl text-gray-500 italic">
              "Promovendo prevenção, cuidado e qualidade de vida através de serviços humanizados e seguros."
            </p>
          </motion.div>
        </section>

        {/* Who We Are */}
        <section className="grid md:grid-cols-2 gap-12 items-center bg-white p-12 rounded-[3rem] shadow-xl border border-gray-50">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 text-green-700 font-bold text-sm uppercase tracking-wider">
              <Users size={16} />
              Quem Somos
            </div>
            <h2 className="text-4xl font-bold leading-tight" style={{ color: COLORS.blue }}>
              Cuidado que nasce do <span style={{ color: COLORS.orange }}>propósito</span>.
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                A Clínica La Vida nasce com o propósito de promover prevenção, cuidado e qualidade de vida através de serviços humanizados e seguros.
              </p>
              <p>
                Nosso símbolo representa vida, crescimento e proteção — valores que guiam cada atendimento realizado.
              </p>
              <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-2xl border border-blue-100">
                <ShieldCheck className="text-blue-600 flex-shrink-0" size={24} />
                <p className="text-sm font-semibold text-blue-900">
                  Devidamente autorizada pela Vigilância Sanitária, com responsabilidade técnica e protocolos rigorosos.
                </p>
              </div>
            </div>
          </div>
          <div className="rounded-[2rem] overflow-hidden aspect-square">
            <img 
              src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800" 
              alt="Clinical environment" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </section>

        {/* Vaccination Services */}
        <section className="space-y-12">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 text-orange-700 font-bold text-sm uppercase tracking-wider">
              <Syringe size={16} />
              Nossos Serviços
            </div>
            <h2 className="text-4xl font-bold" style={{ color: COLORS.blue }}>Vacinação Particular e Corporativa</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-50 space-y-6">
              <h3 className="text-xl font-bold flex items-center gap-2" style={{ color: COLORS.blue }}>
                <CheckCircle2 className="text-green-500" />
                Vacinas Disponíveis
              </h3>
              <ul className="grid grid-cols-1 gap-3">
                {[
                  "Influenza (Gripe)",
                  "COVID-19",
                  "Herpes Zoster",
                  "Hepatite B",
                  "dTpa (Difteria, Tétano e Coqueluche)",
                  "Febre Amarela",
                  "Atualização de carteira vacinal"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-600">
                    <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: COLORS.orange }}></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-50 space-y-6">
              <h3 className="text-xl font-bold flex items-center gap-2" style={{ color: COLORS.blue }}>
                <Users className="text-blue-500" />
                Onde Atendemos
              </h3>
              <ul className="grid grid-cols-1 gap-3">
                {[
                  "Empresas (vacinação in company)",
                  "Condomínios",
                  "Escolas",
                  "Eventos corporativos",
                  "Atendimento individual na clínica"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-600">
                    <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: COLORS.green }}></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="p-8 bg-blue-900 rounded-[2rem] text-white text-center">
            <p className="text-lg font-medium">
              Realizamos campanhas extramuros com estrutura adequada, controle de temperatura, rastreabilidade por lote e equipe capacitada.
            </p>
          </div>
        </section>

        {/* Corporate Wellness */}
        <section className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 rounded-[2rem] overflow-hidden aspect-video shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=800" 
              alt="Quick Massage" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="order-1 md:order-2 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-700 font-bold text-sm uppercase tracking-wider">
              <Sparkles size={16} />
              Bem-Estar Corporativo
            </div>
            <h2 className="text-4xl font-bold" style={{ color: COLORS.blue }}>Saúde Corporativa</h2>
            <p className="text-gray-600 leading-relaxed">
              Nosso objetivo é reduzir estresse, aumentar produtividade e promover cuidado integral aos colaboradores através de:
            </p>
            <ul className="space-y-4">
              {[
                "Quick Massage em eventos corporativos",
                "Massoterapia especializada",
                "Ações especiais em datas comemorativas",
                "Programas para SIPAT e campanhas internas"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 font-semibold" style={{ color: COLORS.blue }}>
                  <CheckCircle2 className="text-green-500 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Mission, Vision, Values */}
        <section className="grid md:grid-cols-3 gap-8">
          <div className="p-8 rounded-3xl bg-white shadow-lg border border-gray-50 text-center space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-orange-100 flex items-center justify-center mx-auto text-orange-600">
              <Target size={24} />
            </div>
            <h3 className="text-xl font-bold" style={{ color: COLORS.blue }}>Missão</h3>
            <p className="text-sm text-gray-500">Promover saúde preventiva de forma acessível, segura e estratégica para empresas e indivíduos.</p>
          </div>
          <div className="p-8 rounded-3xl bg-white shadow-lg border border-gray-50 text-center space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-green-100 flex items-center justify-center mx-auto text-green-600">
              <Eye size={24} />
            </div>
            <h3 className="text-xl font-bold" style={{ color: COLORS.blue }}>Visão</h3>
            <p className="text-sm text-gray-500">Ser referência regional em vacinação corporativa e ações de saúde preventiva, unindo técnica e acolhimento.</p>
          </div>
          <div className="p-8 rounded-3xl bg-white shadow-lg border border-gray-50 text-center space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center mx-auto text-blue-600">
              <Award size={24} />
            </div>
            <h3 className="text-xl font-bold" style={{ color: COLORS.blue }}>Valores</h3>
            <p className="text-sm text-gray-500">Segurança, Ética, Humanização, Organização e Compromisso com resultados.</p>
          </div>
        </section>

        {/* Differentials */}
        <section className="bg-gray-900 rounded-[3rem] p-12 text-white space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold">Diferenciais Clínica La Vida</h2>
            <p className="text-gray-400">Por que somos a escolha ideal para sua saúde e sua empresa.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Atendimento personalizado para empresas",
              "Estrutura para vacinação extramuros",
              "Planejamento estratégico de campanhas",
              "Parcerias corporativas sólidas",
              "Serviços integrados de saúde e bem-estar"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
                <CheckCircle2 className="text-green-400 flex-shrink-0" />
                <span className="font-medium">{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Footer */}
        <section className="text-center space-y-8 pt-12 border-t border-gray-100">
          <h2 className="text-3xl font-bold" style={{ color: COLORS.blue }}>Entre em contato conosco</h2>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="flex items-center gap-3">
              <Phone className="text-orange-500" />
              <span className="font-bold">(11) 97517-6244</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="text-green-500" />
              <span className="font-bold">clinicalavidavac@gmail.com</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="text-blue-500" />
              <span className="font-bold">Ipiranga, São Paulo - SP</span>
            </div>
          </div>
          <div className="pt-8">
             <Link to="/" className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-white font-bold shadow-xl transition-all hover:scale-105" style={{ backgroundColor: COLORS.blue }}>
              Visite nosso Site
            </Link>
          </div>
        </section>

      </main>

      {/* Print Styles */}
      <style>{`
        @media print {
          .print\\:hidden { display: none !important; }
          body { background-color: white !important; }
          main { padding-top: 0 !important; }
          section { break-inside: avoid; }
        }
      `}</style>
    </div>
  );
}
