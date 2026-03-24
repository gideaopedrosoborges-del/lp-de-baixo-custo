import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ChevronRight, ShieldCheck, Globe, Zap, Target } from 'lucide-react';
import { FlickeringGrid } from "@/components/ui/flickering-grid";

export default function Manifesto() {
  const [isIdle, setIsIdle] = useState(false);

  useEffect(() => {
    let showTimer: ReturnType<typeof setTimeout>;

    const handleActivity = () => {
      // Esconde IMEDIATAMENTE quando a pessoa rolar a página
      setIsIdle(false);

      // Mostra o botão após 0.5 segundos (500ms) com a página parada
      clearTimeout(showTimer);
      showTimer = setTimeout(() => {
        setIsIdle(true);
      }, 500);
    };

    // Usa touchmove no lugar de touchstart para não esconder quando a pessoa tentar clicar no botão pelo celular
    window.addEventListener('scroll', handleActivity);
    window.addEventListener('touchmove', handleActivity);

    // Inicia o timer inicial
    handleActivity();

    return () => {
      window.removeEventListener('scroll', handleActivity);
      window.removeEventListener('touchmove', handleActivity);
      clearTimeout(showTimer);
    };
  }, []);

  return (
    <main className="min-h-screen bg-black text-white selection:bg-[#2bffa0] selection:text-black font-sans overflow-x-hidden relative">
      {/* Fundo Cibernético Interativo */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-40">
        <FlickeringGrid
          className="w-full h-full"
          squareSize={4}
          gridGap={6}
          color="#2bffa0"
          maxOpacity={0.25}
          flickerChance={0.15}
        />
      </div>

      {/* Header */}
      <header className="fixed top-0 w-full z-40 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <Link 
            to="/" 
            className="flex items-center gap-2 text-sm font-medium text-zinc-400 hover:text-white transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Voltar para a Máquina
          </Link>
          
          <div className="flex items-center">
            <img src="/NOVOFLOWBRANCO.png" alt="Novo Flow" width="150" height="38" className="object-contain" />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-40 pb-10 px-6">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-[#2bffa0]/30 bg-[#2bffa0]/10 text-[#2bffa0] text-xs font-bold tracking-widest uppercase">
            Nosso Manifesto
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-tight mb-8">
            O Fim da Era das <br className="hidden md:block" />
            <span className="inline-block bg-gradient-to-r from-white to-[#2bffa0] text-transparent bg-clip-text">
              Agências de Vaidade.
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-zinc-400 font-light max-w-2xl mx-auto leading-relaxed">
            Nós não vendemos tráfego. Construímos ativos de previsibilidade e lucro para o seu negócio.
          </p>
        </div>
      </section>

      {/* Methodology Section - Implantacao que Gera Tracao */}
      <section className="py-20 px-6 relative z-10 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
        <div className="max-w-3xl mx-auto space-y-12 text-center">
          <h2 className="text-4xl md:text-5xl font-black uppercase leading-none tracking-tighter bg-gradient-to-r from-white via-green-200 to-[#2bffa0] bg-clip-text text-transparent pb-2">
            A Implantação que <span className="text-[#2bffa0]">Gera Tração.</span>
          </h2>

          <div className="grid grid-cols-1 gap-4 text-left pt-8">
            <div className="flex gap-4 p-6 bg-zinc-900/30 backdrop-blur-sm border-l-2 border-[#2bffa0] hover:border-l-4 transition-all group">
              <ShieldCheck className="text-[#2bffa0] shrink-0 w-6 h-6" />
              <div>
                <h4 className="font-black uppercase text-sm tracking-widest text-white">Semana 1: Estrutura de Autoridade</h4>
                <p className="text-sm text-zinc-500 mt-1 font-light">Inteligência Local & Configuração de Base.</p>
              </div>
            </div>
            <div className="flex gap-4 p-6 bg-zinc-900/30 backdrop-blur-sm border-l-2 border-[#2bffa0] hover:border-l-4 transition-all group">
              <Globe className="text-[#2bffa0] shrink-0 w-6 h-6" />
              <div>
                <h4 className="font-black uppercase text-sm tracking-widest text-white">Semana 2: Reputação e Presença</h4>
                <p className="text-sm text-zinc-500 mt-1 font-light">Prova Social & Otimização da Casa Digital.</p>
              </div>
            </div>
            <div className="flex gap-4 p-6 bg-zinc-900/30 backdrop-blur-sm border-l-2 border-[#2bffa0] hover:border-l-4 transition-all group">
              <Zap className="text-[#2bffa0] shrink-0 w-6 h-6" />
              <div>
                <h4 className="font-black uppercase text-sm tracking-widest text-white">Semana 3: Engajamento e Tração</h4>
                <p className="text-sm text-zinc-500 mt-1 font-light">Manutenção Ativa & Construção de Desejo.</p>
              </div>
            </div>
            <div className="flex gap-4 p-6 bg-zinc-900/30 backdrop-blur-sm border-l-2 border-[#2bffa0] hover:border-l-4 transition-all group">
              <Target className="text-[#2bffa0] shrink-0 w-6 h-6" />
              <div>
                <h4 className="font-black uppercase text-sm tracking-widest text-white">Semana 4: Performance Final</h4>
                <p className="text-sm text-zinc-500 mt-1 font-light">Máxima Conversão & Análise de Resultados.</p>
              </div>
            </div>
            
            <div className="mt-8 p-6 bg-[#2bffa0]/5 border border-[#2bffa0]/20 rounded-none">
              <p className="text-sm text-[#2bffa0] font-black uppercase tracking-[0.2em] text-center">
                Após 30 dias: 3 meses de Manutenção + Tráfego com foco em ROI.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Manifesto Body */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto space-y-24">
          
          {/* A Dor */}
          <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h2 className="inline-block bg-gradient-to-r from-white to-[#2bffa0] text-transparent bg-clip-text text-3xl font-bold tracking-tight">
              A Ilusão do Volume
            </h2>
            <div className="space-y-6 text-lg text-zinc-400 leading-relaxed font-light">
              <p>
                O mercado digital foi corrompido por promessas vazias e métricas de vaidade. Agências tradicionais comemoram curtidas, impressões e um volume inflado de leads desqualificados, enquanto os boletos da sua operação continuam chegando.
              </p>
              <p>
                Eles operam em modelos focados em volume sem margem. Entregam relatórios bonitos que não refletem no caixa da empresa. A verdade nua e crua é que <strong className="bg-[#2bffa0] text-black px-1.5 py-0.5 font-bold rounded-sm">curtidas não pagam boletos</strong> e leads frios apenas sobrecarregam seu time comercial. Se você quer sair desse ciclo destrutivo, <a href="https://form.respondi.app/lDg0Bifo" target="_blank" rel="noreferrer" className="bg-[#2bffa0] text-black px-1.5 py-0.5 font-bold rounded-sm hover:opacity-90 transition-opacity">aplique para um diagnóstico estratégico</a> agora mesmo.
              </p>
            </div>
          </div>

          {/* A Visão */}
          <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <h2 className="inline-block bg-gradient-to-r from-[#2bffa0] to-white text-transparent bg-clip-text text-3xl font-bold tracking-tight">
              Engenharia Precisa
            </h2>
            <div className="space-y-6 text-lg text-zinc-400 leading-relaxed font-light">
              <p>
                Vender produtos ou serviços exige uma abordagem completamente diferente. Não se trata de pescar de rede, mas de usar um rifle de precisão. Exige engenharia, inteligência de dados e um entendimento profundo da jornada de compra do seu cliente ideal.
              </p>
              <p>
                Nossa visão é clara: foco obsessivo em ROI verdadeiro, lucro líquido e previsibilidade de escala. Cada campanha, cada automação e cada linha de copy é projetada com um único objetivo: <strong className="bg-[#2bffa0] text-black px-1.5 py-0.5 font-bold rounded-sm">gerar receita sustentável</strong>. <a href="https://form.respondi.app/lDg0Bifo" target="_blank" rel="noreferrer" className="bg-[#2bffa0] text-black px-1.5 py-0.5 font-bold rounded-sm hover:opacity-90 transition-opacity">Instale essa máquina de vendas</a> na sua empresa.
              </p>
            </div>
          </div>

          {/* O Compromisso */}
          <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <h2 className="inline-block bg-gradient-to-r from-white to-[#2bffa0] text-transparent bg-clip-text text-3xl font-bold tracking-tight">
              O Compromisso Novo Flow
            </h2>
            <div className="space-y-6 text-lg text-zinc-400 leading-relaxed font-light">
              <p>
                Nosso trabalho não termina quando o lead cai no CRM. Ele termina no faturamento. Nós assumimos a responsabilidade pela qualidade do ecossistema que construímos.
              </p>
              <p>
                É por isso que estruturamos a nossa operação de forma clara, pragmática e focada em resultados reais: <strong>1 mês dedicado a arrumar a casa</strong> com implantação completa de Inteligência Local e Google Meu Negócio, seguido por <strong>3 meses de tração agressiva e tráfego focado em ROI absoluto</strong>. Não acreditamos em milagres; acreditamos em engenharia de vendas e otimização contínua. <a href="https://form.respondi.app/lDg0Bifo" target="_blank" rel="noreferrer" className="bg-[#2bffa0] text-black px-1.5 py-0.5 font-bold rounded-sm hover:opacity-90 transition-opacity">Inicie a transformação do seu ecossistema.</a>
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Conclusion & CTA */}
      <section className="py-32 px-6 border-t border-white/10 bg-gradient-to-b from-black to-zinc-950">
        <div className="max-w-4xl mx-auto text-center space-y-12 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <h2 className="bg-gradient-to-r from-[#2bffa0] to-white text-transparent bg-clip-text text-4xl md:text-5xl font-black tracking-tighter">
            O Seu Último Destino.
          </h2>
          <p className="text-xl md:text-2xl text-zinc-400 font-light max-w-2xl mx-auto leading-relaxed">
            Se você possui um negócio com capacidade de entrega e quer escala previsível, a <span className="bg-[#2bffa0] text-black px-1.5 py-0.5 font-bold rounded-sm">Novo Flow</span> é a parceria definitiva que você estava procurando.
          </p>
          
          <div className="pt-8">
            <a 
              href="https://form.respondi.app/lDg0Bifo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-5 bg-[#2bffa0] hover:bg-[#2bffa0]/90 text-black rounded-none font-black tracking-widest transition-all transform hover:scale-105 hover:shadow-[0_0_40px_-10px_rgba(43,255,160,0.5)] group"
            >
              INICIAR DIAGNÓSTICO ESTRATÉGICO
              <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
            <p className="mt-6 text-sm text-zinc-500 font-medium tracking-wide uppercase">
              Aplicação confidencial • Vagas limitadas por ciclo
            </p>
          </div>
        </div>
      </section>

      {/* Gatilho de Inatividade - Floating CTA */}
      <div 
        className={`fixed bottom-10 left-1/2 -translate-x-1/2 z-50 transition-all duration-700 ease-in-out ${
          isIdle 
            ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto' 
            : 'opacity-0 translate-y-10 scale-95 pointer-events-none'
        }`}
      >
        <a 
          href="https://form.respondi.app/lDg0Bifo"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 px-8 py-4 bg-[#2bffa0] text-black font-black uppercase tracking-widest text-sm shadow-[0_0_50px_rgba(43,255,160,0.3)] rounded-full hover:scale-105 transition-transform"
        >
          Iniciar Diagnóstico
          <ChevronRight size={18} />
        </a>
      </div>

      {/* Global Styles for Animations */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
        }
      `}} />
    </main>
  );
}