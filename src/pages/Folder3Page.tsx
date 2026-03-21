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
  Target,
  Eye,
  Instagram,
  Linkedin
} from "lucide-react";
import { Link } from "react-router-dom";
import clinicLogo from "../../assets/clinic-logo.jpg";
import recepImg from "../../assets/recep.jpg";
import folderMockup from "../images/projeto-folder.png";

const COLORS = {
  orange: "#f15a24",
  green: "#76c043",
  blue: "#1a4a7c",
  bg: "#ffffff",
  text: "#2d2d2d",
  muted: "#6b7280"
};

// Helper for the "cropped" images from the mockup for total fidelity
const CroppedImage = ({ position, size, className = "" }: { position: string, size: string, className?: string }) => (
  <div 
    className={`bg-no-repeat ${className}`}
    style={{ 
      backgroundImage: `url(${folderMockup})`,
      backgroundPosition: position,
      backgroundSize: size,
    }}
  />
);

export default function Folder3Page() {
  return (
    <div className="min-h-screen font-sans selection:bg-green-100 bg-gray-100 print:bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 print:hidden">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <ArrowLeft size={20} style={{ color: COLORS.blue }} />
            <span className="font-semibold" style={{ color: COLORS.blue }}>Voltar ao Início</span>
          </Link>
          <div className="flex gap-4">
             <span className="text-xs text-gray-400 self-center hidden md:block">Versão de Alta Fidelidade (Impressão)</span>
             <button 
                onClick={() => window.print()}
                className="px-4 py-2 rounded-full text-white text-sm font-bold shadow-md hover:shadow-lg transition-all"
                style={{ backgroundColor: COLORS.green }}
              >
                Imprimir Folder
              </button>
          </div>
        </div>
      </nav>

      <main className="max-w-[1200px] mx-auto pt-24 pb-20 px-4 print:pt-0 print:px-0">
        
        {/* FLAT TRI-FOLD (Ready for print) */}
        <div className="bg-white shadow-2xl print:shadow-none flex flex-row overflow-hidden border border-gray-200 print:border-none w-full aspect-[297/210]">
          
          {/* LEFT PANEL */}
          <section className="w-1/3 p-8 border-r border-gray-100 flex flex-col space-y-6 relative overflow-hidden">
            <div className="space-y-4">
               {/* Logo Area */}
               <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <img src={clinicLogo} alt="Logo" className="w-16 h-16 object-cover rounded-sm" />
                    <div className="leading-none">
                       <h1 className="text-xl font-black tracking-tighter" style={{ color: COLORS.blue }}>Vacinas La Vida</h1>
                       <p className="text-[10px] font-bold uppercase tracking-widest" style={{ color: COLORS.green }}>Saúde e bem-estar</p>
                    </div>
                  </div>
                  {/* Plant Image from mockup - Top Right of Panel 1 */}
                  <CroppedImage 
                    position="28% 28%" 
                    size="600% 600%" 
                    className="w-24 h-24 rounded-bl-3xl shadow-sm border-l-4 border-b-4 border-white"
                  />
               </div>

               {/* Sobre a Clínica */}
               <div className="space-y-2">
                  <h2 className="text-lg font-bold border-l-4 border-orange-500 pl-2" style={{ color: COLORS.blue }}>Sobre a Clínica</h2>
                  <p className="text-[11px] leading-tight text-gray-600">
                    A Clínica La Vida é especializada em imunização e ações corporativas de saúde, oferecendo serviços voltados a prevenção, qualidade de vida e bem-estar no ambiente de trabalho.
                  </p>
               </div>

               {/* Two Photos below text */}
               <div className="grid grid-cols-2 gap-2">
                  <div className="h-20 rounded-lg overflow-hidden border border-gray-100">
                    <img src={recepImg} alt="Vacinação" className="w-full h-full object-cover" />
                  </div>
                  <div className="h-20 rounded-lg overflow-hidden border border-gray-100">
                    {/* Massage image from mockup */}
                    <CroppedImage position="30% 60%" size="400% 400%" className="w-full h-full" />
                  </div>
               </div>

               {/* Benefícios */}
               <div className="space-y-3 pt-2">
                  <h3 className="text-sm font-black uppercase tracking-tight flex items-center gap-2" style={{ color: COLORS.blue }}>
                    <Activity size={14} className="text-green-500" />
                    Benefícios para a empresa
                  </h3>
                  <ul className="space-y-1.5">
                    {[
                      "promoção de saúde dos colaboradores",
                      "redução de afastamentos",
                      "melhora do clima organizacional",
                      "valorização de equipe",
                      "incentivo à prevenção"
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-[10px] font-bold text-gray-700">
                        <div className="w-3 h-3 rounded bg-orange-100 flex items-center justify-center text-orange-600">
                          <CheckCircle2 size={10} />
                        </div>
                        {item}
                      </li>
                    ))}
                  </ul>
               </div>
            </div>
          </section>

          {/* MIDDLE PANEL */}
          <section className="w-1/3 p-8 border-r border-gray-100 flex flex-col space-y-6 bg-white relative">
            {/* Top Icons */}
            <div className="flex justify-center gap-4 text-green-500">
               <Stethoscope size={24} className="text-green-500" />
               <Heart size={24} className="text-blue-500" />
               <Building size={24} className="text-orange-500" />
            </div>

            {/* Program Title */}
            <div className="text-center space-y-1">
               <h2 className="text-xl font-extrabold leading-tight" style={{ color: COLORS.blue }}>
                 Programa de Saúde e <br /> Bem-Estar Corporativo
               </h2>
               <p className="text-[10px] font-bold text-gray-500">
                 Soluções de saúde preventiva e qualidade de vida para colaboradores.
               </p>
            </div>

            {/* Programa Anual */}
            <div className="space-y-2">
               <h3 className="text-sm font-bold text-center" style={{ color: COLORS.blue }}>Programa Anual de Saúde Corporativa</h3>
               <p className="text-[9px] text-center text-gray-400 italic leading-tight">
                 A Clínica La Vida estrutura ações estratégicas ao longo do ano para promover saúde e bem-estar dentro das empresas.
               </p>

               {/* Timeline Visualization - Simplified from mockup */}
               <div className="relative mt-6 pb-2">
                  <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-green-500 -translate-y-1/2"></div>
                  <div className="flex justify-between relative z-10">
                     {[
                       { m: "Marco", c: "bg-green-500" },
                       { m: "Abril", c: "bg-blue-500" },
                       { m: "Maio", c: "bg-orange-500" },
                       { m: "Agosto", c: "bg-green-600" },
                       { m: "Setem.", c: "bg-blue-600" },
                       { m: "Outub.", c: "bg-orange-600" }
                     ].map((step, idx) => (
                       <div key={idx} className="flex flex-col items-center gap-1">
                         <div className={`w-6 h-6 rounded-full ${step.c} border-2 border-white flex items-center justify-center text-white shadow-sm`}>
                            <div className="w-1 h-1 bg-white rounded-full"></div>
                         </div>
                         <span className="text-[8px] font-black text-blue-900">{step.m}</span>
                       </div>
                     ))}
                  </div>
               </div>
               
               {/* Timeline labels from mockup */}
               <div className="grid grid-cols-3 gap-2 pt-2">
                  <div className="text-[8px] leading-tight text-gray-500 text-center">Ações de Saúde & Qualidade de Vida</div>
                  <div className="text-[8px] leading-tight text-gray-500 text-center">Outubro Rosa</div>
                  <div className="text-[8px] leading-tight text-gray-500 text-center">Novembro Azul</div>
               </div>
            </div>

            {/* Diferenciais */}
            <div className="space-y-4 pt-2">
               <h2 className="text-sm font-black uppercase border-b border-orange-500 pb-1" style={{ color: COLORS.blue }}>
                 Diferenciais de Clínica La Vida
               </h2>
               <div className="grid grid-cols-1 gap-2">
                  {[
                    { t: "clínica especializada em imunização", i: <ShieldCheck size={12}/> },
                    { t: "atendimento corporativo", i: <Users size={12}/> },
                    { t: "equipe qualificada", i: <Award size={12}/> },
                    { t: "estrutura para dentro das empresas", i: <Building size={12}/> },
                    { t: "programas personalizados", i: <Sparkles size={12}/> }
                  ].map((diff, i) => (
                    <div key={i} className="flex items-center gap-2">
                       <div className="text-green-500">{diff.i}</div>
                       <span className="text-[10px] font-bold text-gray-700">{diff.t}</span>
                    </div>
                  ))}
               </div>
            </div>
          </section>

          {/* RIGHT PANEL */}
          <section className="w-1/3 p-8 flex flex-col space-y-4 bg-white">
            {/* Serviços Corporativos */}
            <div className="space-y-3">
              <h2 className="text-xl font-extrabold" style={{ color: COLORS.blue }}>Serviços Corporativos</h2>
              <ul className="space-y-2">
                {[
                  { t: "Vacinação corporativa", i: <Syringe size={14} /> },
                  { t: "Quick massage em empresas", i: <Clock size={14} /> },
                  { t: "Massoterapia especializada", i: <Heart size={14} /> },
                  { t: "Ações de saúde em datas comemorativas", i: <Calendar size={14} /> },
                  { t: "Programas para SIPAT", i: <Briefcase size={14} /> },
                  { t: "Campanhas internas de prevenção", i: <Activity size={14} /> }
                ].map((serv, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-700">
                    <div className="text-green-500">{serv.i}</div>
                    <span className="text-[11px] font-bold">{serv.t}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Illustration Area */}
            <div className="h-24 bg-gray-50 rounded-lg flex items-center justify-center overflow-hidden border border-gray-100">
               {/* Illustration from mockup */}
               <CroppedImage position="83% 40%" size="400% 400%" className="w-full h-full" />
            </div>

            {/* Massage Photo from mockup */}
            <div className="h-24 rounded-lg overflow-hidden border border-gray-100">
               <CroppedImage position="83% 60%" size="400% 400%" className="w-full h-full" />
            </div>

            {/* Bottom Section */}
            <div className="mt-auto space-y-4">
               {/* Contact Block (Green) */}
               <div className="bg-green-600 p-4 rounded-xl text-white space-y-2 shadow-lg">
                  <div className="flex items-start justify-between">
                     <div className="space-y-1">
                        <h3 className="text-xs font-black uppercase">Chamada final</h3>
                        <p className="text-[8px] leading-tight opacity-90">Extruturamos programas de saúde corporativos personalizados para empresas.</p>
                     </div>
                     <img src={clinicLogo} alt="Logo" className="w-8 h-8 rounded-full bg-white p-0.5" />
                  </div>
                  
                  <div className="space-y-1 pt-1 border-t border-white/20">
                     <p className="text-[9px] font-black">www.lavidavac.com.br</p>
                     <p className="text-[9px] font-black">Tel: (11) 97517-6244</p>
                     <p className="text-[9px] font-black">@vacinaslavida</p>
                     <p className="text-[9px] font-black">E-mail: contato@lavidavac.com.br</p>
                     <div className="flex items-center gap-1 text-[7px] font-black uppercase opacity-80 pt-1">
                        <Linkedin size={8} /> LinkedIn
                     </div>
                  </div>
               </div>

               {/* Footer */}
               <div className="text-center">
                  <h4 className="text-[10px] font-black text-green-600 leading-none">Vacinaslavida</h4>
                  <p className="text-[8px] text-gray-400">Saúde e bem estar</p>
               </div>
            </div>
          </section>

        </div>

        {/* Instructions for the user */}
        <div className="mt-12 bg-blue-50 p-6 rounded-2xl border border-blue-100 print:hidden">
          <h3 className="text-blue-900 font-bold mb-2 flex items-center gap-2">
            <Sparkles size={18} />
            Dica para Impressão
          </h3>
          <p className="text-sm text-blue-800 leading-relaxed">
            Este layout foi otimizado para fidelidade total ao mockup original. 
            Para gerar a imagem <strong>projeto-folder2.png</strong>:
          </p>
          <ol className="list-decimal ml-5 mt-2 text-sm text-blue-800 space-y-1">
            <li>Pressione <strong>Ctrl + P</strong> (ou clique no botão acima).</li>
            <li>Selecione "Salvar como PDF" ou use um capturador de tela na área branca.</li>
            <li>A proporção está travada em A4 Paisagem (297mm x 210mm).</li>
          </ol>
        </div>

      </main>

      {/* Print Styles */}
      <style>{`
        @media print {
          @page {
            size: A4 landscape;
            margin: 0;
          }
          .print\\:hidden { display: none !important; }
          body { background-color: white !important; margin: 0; padding: 0; }
          main { padding: 0 !important; max-width: none !important; width: 100vw; height: 100vh; }
          .shadow-2xl { box-shadow: none !important; }
          .aspect-\\[297\\/210\\] { width: 100vw; height: 100vh; }
        }
      `}</style>
    </div>
  );
}
