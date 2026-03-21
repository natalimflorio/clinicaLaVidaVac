import { motion } from "motion/react";
import { 
  Heart, 
  ShieldCheck, 
  CheckCircle2, 
  Syringe, 
  Users, 
  ArrowLeft,
  Phone,
  Mail,
  MapPin,
  Sparkles,
  Stethoscope,
  Briefcase,
  Calendar,
  Activity,
  Award,
  Clock,
  Building,
  Linkedin,
  Instagram
} from "lucide-react";
import { Link } from "react-router-dom";
import clinicLogo from "../../assets/clinic-logo.jpg";
import recepImg from "../../assets/recep.jpg";

const COLORS = {
  orange: "#f15a24",
  green: "#76c043",
  blue: "#1a4a7c",
  bg: "#f3f4f6", // Light grey background like in the image
  white: "#ffffff",
  text: "#2d2d2d",
  muted: "#6b7280"
};

export default function Folder2Page() {
  return (
    <div className="min-h-screen font-sans selection:bg-green-100" style={{ backgroundColor: COLORS.bg, color: COLORS.text }}>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 print:hidden">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
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

      <main className="max-w-7xl mx-auto px-4 pt-24 pb-20">
        
        {/* Tri-fold Container */}
        <div className="grid lg:grid-cols-3 gap-0 bg-white shadow-2xl rounded-sm overflow-hidden border border-gray-200 min-h-[800px]">
          
          {/* LEFT PANEL */}
          <section className="p-8 border-r border-gray-100 flex flex-col space-y-8 bg-white">
            {/* Header / Logo */}
            <div className="flex flex-col items-center text-center space-y-2">
               <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-green-500 p-1">
                  <img src={clinicLogo} alt="Logo" className="w-full h-full object-cover rounded-full" />
               </div>
               <div className="text-center">
                  <h1 className="text-2xl font-black tracking-tighter" style={{ color: COLORS.blue }}>
                    Vacinas La Vida
                  </h1>
                  <p className="text-xs font-bold uppercase tracking-widest" style={{ color: COLORS.green }}>
                    Saúde e bem-estar
                  </p>
               </div>
            </div>

            {/* Content: Sobre a Clínica */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold flex items-center gap-2" style={{ color: COLORS.blue }}>
                Sobre a Clínica
              </h2>
              <p className="text-sm leading-relaxed text-gray-600">
                A Clínica La Vida é especializada em imunização e ações corporativas de saúde, oferecendo serviços voltados a prevenção, qualidade de vida e bem-estar no ambiente de trabalho.
              </p>
            </div>

            {/* Images Placeholder */}
            <div className="grid grid-cols-1 gap-4">
              <div className="h-32 rounded-lg overflow-hidden bg-gray-100 relative group">
                <img src={recepImg} alt="Vacinação" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-transparent transition-colors"></div>
              </div>
              <div className="h-32 rounded-lg overflow-hidden bg-gray-100 relative group">
                <img src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=400" alt="Massagem" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-green-900/10 group-hover:bg-transparent transition-colors"></div>
              </div>
            </div>

            {/* Benefícios para a empresa */}
            <div className="space-y-4 bg-gray-50 p-6 rounded-2xl">
              <h2 className="text-lg font-bold flex items-center gap-2" style={{ color: COLORS.blue }}>
                <Activity size={18} className="text-orange-500" />
                Benefícios para a empresa
              </h2>
              <ul className="space-y-3">
                {[
                  "Promoção de saúde dos colaboradores",
                  "Redução de afastamentos",
                  "Melhoria do clima organizacional",
                  "Valorização de equipe",
                  "Incentivo à prevenção"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                    <CheckCircle2 size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* MIDDLE PANEL */}
          <section className="p-8 border-r border-gray-100 flex flex-col space-y-8 bg-white">
            {/* Top Icons */}
            <div className="flex justify-center gap-6 text-green-500">
              <Stethoscope size={32} />
              <Heart size={32} className="text-blue-500" />
              <Building size={32} className="text-orange-500" />
            </div>

            {/* Programa de Saúde e Bem-Estar */}
            <div className="text-center space-y-2">
              <h2 className="text-2xl font-extrabold leading-tight" style={{ color: COLORS.blue }}>
                Programa de Saúde e <br /> Bem-Estar Corporativo
              </h2>
              <p className="text-sm font-medium text-gray-500">
                Soluções de saúde preventiva e qualidade de vida para colaboradores.
              </p>
            </div>

            {/* Programa Anual */}
            <div className="space-y-4 pt-4">
              <h3 className="text-lg font-bold text-center" style={{ color: COLORS.blue }}>
                Programa Anual de Saúde Corporativa
              </h3>
              <p className="text-xs text-center text-gray-500 leading-relaxed italic">
                A Clínica La Vida estrutura ações estratégicas ao longo do ano para promover saúde e bem-estar dentro das empresas.
              </p>
              
              {/* Timeline Visualization */}
              <div className="relative mt-8 py-4">
                 <div className="absolute top-1/2 left-0 right-0 h-1 bg-green-100 -translate-y-1/2 rounded-full"></div>
                 <div className="grid grid-cols-6 gap-2 relative z-10">
                    {[
                      { m: "Março", i: <Calendar size={14}/> },
                      { m: "Abril", i: <Syringe size={14}/> },
                      { m: "Maio", i: <Heart size={14}/> },
                      { m: "Agosto", i: <Activity size={14}/> },
                      { m: "Setem.", i: <Users size={14}/> },
                      { m: "Outub.", i: <Award size={14}/> }
                    ].map((step, idx) => (
                      <div key={idx} className="flex flex-col items-center gap-1">
                        <div className="w-8 h-8 rounded-full bg-white border-2 border-green-500 flex items-center justify-center text-green-600 shadow-sm">
                          {step.i}
                        </div>
                        <span className="text-[10px] font-bold text-blue-900 uppercase tracking-tighter">{step.m}</span>
                      </div>
                    ))}
                 </div>
              </div>
            </div>

            {/* Diferenciais */}
            <div className="space-y-6 pt-8">
              <h2 className="text-xl font-bold border-b-2 border-orange-500 pb-2 inline-block" style={{ color: COLORS.blue }}>
                Diferenciais de Clínica La Vida
              </h2>
              <div className="grid grid-cols-1 gap-4">
                 {[
                   { t: "Clínica especializada em imunização", i: <ShieldCheck /> },
                   { t: "Atendimento corporativo", i: <Briefcase /> },
                   { t: "Equipe qualificada", i: <Users /> },
                   { t: "Estrutura para dentro das empresas", i: <Building /> },
                   { t: "Programas personalizados", i: <Sparkles /> }
                 ].map((diff, i) => (
                   <div key={i} className="flex items-center gap-3 p-3 bg-blue-50/50 rounded-xl hover:bg-blue-50 transition-colors">
                      <div className="text-blue-600">{diff.i}</div>
                      <span className="text-sm font-semibold text-gray-700">{diff.t}</span>
                   </div>
                 ))}
              </div>
            </div>
          </section>

          {/* RIGHT PANEL */}
          <section className="p-8 flex flex-col space-y-8 bg-white relative overflow-hidden">
            {/* Decoration */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-green-50 rounded-full blur-3xl opacity-50"></div>

            {/* Serviços Corporativos */}
            <div className="space-y-6">
              <h2 className="text-2xl font-extrabold" style={{ color: COLORS.blue }}>
                Serviços Corporativos
              </h2>
              <ul className="space-y-4">
                {[
                  { t: "Vacinação corporativa", i: <Syringe size={18} /> },
                  { t: "Quick massage em empresas", i: <Clock size={18} /> },
                  { t: "Massoterapia especializada", i: <Heart size={18} /> },
                  { t: "Ações de saúde em datas comemorativas", i: <Calendar size={18} /> },
                  { t: "Programas para SIPAT", i: <Briefcase size={18} /> },
                  { t: "Campanhas internas de prevenção", i: <Activity size={18} /> }
                ].map((serv, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700 group cursor-default">
                    <div className="w-8 h-8 rounded-lg bg-orange-50 flex items-center justify-center text-orange-600 group-hover:bg-orange-500 group-hover:text-white transition-all shadow-sm">
                      {serv.i}
                    </div>
                    <span className="text-sm font-bold">{serv.t}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Illustration Placeholder */}
            <div className="rounded-2xl overflow-hidden shadow-inner bg-gray-50 p-2 flex justify-center">
               <img src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=400" alt="Equipe" className="rounded-xl object-cover h-40 w-full" />
            </div>

            {/* Contact Card */}
            <div className="mt-auto bg-green-600 rounded-2xl p-6 text-white space-y-4 shadow-xl">
               <div className="space-y-1">
                  <h3 className="font-black text-lg">Chamada final</h3>
                  <p className="text-xs text-green-50 leading-tight">
                    Estruture seus programas de saúde corporativos personalizados para sua empresa com a nossa equipe.
                  </p>
               </div>
               <div className="space-y-3 pt-2">
                  <div className="flex items-center gap-2 text-sm font-bold">
                    <Phone size={16} /> (11) 97517-6244
                  </div>
                  <div className="flex items-center gap-2 text-sm font-bold">
                    <Mail size={16} /> contato@lavidavac.com.br
                  </div>
                  <div className="flex items-center gap-2 text-sm font-bold">
                    <MapPin size={16} /> São Paulo - SP
                  </div>
               </div>
               <div className="pt-2 flex flex-col gap-2">
                  <div className="text-[10px] font-bold uppercase tracking-widest bg-white/20 p-2 rounded text-center">
                    @vacinaslavida
                  </div>
                  <a href="https://www.linkedin.com/company/clinica-la-vida-vacinas-sa%C3%BAde-e-bem-estar/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-1 text-[8px] font-bold uppercase tracking-widest bg-white/10 p-1 rounded hover:bg-white/20 transition-colors">
                    <Linkedin size={10} /> LinkedIn
                  </a>
               </div>
            </div>

            {/* Bottom Footer Text */}
            <div className="text-[9px] text-gray-400 text-center pt-4">
              Clínica La Vida - Gestão de Saúde Corporativa<br />
              Todos os direitos reservados - {new Date().getFullYear()}
            </div>
          </section>

        </div>

      </main>

      {/* Print Styles */}
      <style>{`
        @media print {
          .print\\:hidden { display: none !important; }
          body { background-color: white !important; }
          main { padding: 0 !important; max-width: none !important; }
          .grid { display: grid !important; grid-template-columns: repeat(3, 1fr) !important; gap: 0 !important; }
          section { border: 1px solid #eee !important; min-height: 100vh !important; }
          .shadow-2xl { shadow: none !important; }
        }
      `}</style>
    </div>
  );
}
