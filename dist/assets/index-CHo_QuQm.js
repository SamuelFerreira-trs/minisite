(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function o(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerPolicy&&(i.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?i.credentials="include":t.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(t){if(t.ep)return;t.ep=!0;const i=o(t);fetch(t.href,i)}})();const E="modulepreload",w=function(e){return"/"+e},y={},S=function(a,o,s){let t=Promise.resolve();if(o&&o.length>0){document.getElementsByTagName("link");const n=document.querySelector("meta[property=csp-nonce]"),l=(n==null?void 0:n.nonce)||(n==null?void 0:n.getAttribute("nonce"));t=Promise.allSettled(o.map(d=>{if(d=w(d),d in y)return;y[d]=!0;const u=d.endsWith(".css"),m=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${d}"]${m}`))return;const p=document.createElement("link");if(p.rel=u?"stylesheet":E,u||(p.as="script"),p.crossOrigin="",p.href=d,l&&p.setAttribute("nonce",l),document.head.appendChild(p),u)return new Promise((c,f)=>{p.addEventListener("load",c),p.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${d}`)))})}))}function i(n){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=n,window.dispatchEvent(l),!l.defaultPrevented)throw n}return t.then(n=>{for(const l of n||[])l.status==="rejected"&&i(l.reason);return a().catch(i)})},r={nome:"Clínica Vitória Rocha",slogan:"Estética & Beleza",logo:"/logo.png",whatsapp:"5585985121230",iconeWhatsapp:"/whatsapp.svg",cidade:"Fortaleza, CE",cores:{fundoPrincipal:"#faf8f5",fundoSecundario:"#f0efe9",fundoTerciario:"#1c1c1c",textoPrimario:"#0c0c0c",textoSecundario:"#525252ff",botaoPrimario:"#3f9150ff",botaoSecundario:"#525252ff"},fontes:{titulos:"Albert Sans",corpo:"Inter"},estilo:"soft",secoes:["hero","sobre","servicos","galeria","depoimentos","localizacao","contato"],hero:{eyebrow:"Estética avançada em Fortaleza",titulo:`Realce sua beleza
com quem entende`,subtitulo:"Tratamentos personalizados com técnicas modernas e produtos premium.",cta:"Agendar consulta gratuita",stats:[{num:"8+",label:"Anos de experiência"},{num:"1.2k",label:"Clientes atendidas"},{num:"4.9★",label:"Google"},{num:"100%",label:"Satisfação"}]},sobre:{titulo:`Especialistas em realçar
sua beleza natural`,texto:"Fundada em 2016, a Clínica Vitória Rocha nasceu da paixão por transformar vidas através da estética. Nossa equipe é formada por profissionais certificadas e em constante atualização, garantindo os tratamentos mais modernos do mercado.",iconeDiferencial:"star",diferenciais:[{titulo:"Profissionais certificadas",desc:"Equipe com formação e cursos internacionais"},{titulo:"Produtos premium",desc:"Marcas selecionadas com resultados comprovados"},{titulo:"Ambiente aconchegante",desc:"Espaço projetado para seu conforto e relaxamento"},{titulo:"Resultados reais",desc:"Protocolos personalizados para cada cliente"}]},servicos:[{nome:"Limpeza de pele profunda",desc:"Tratamento completo para pele radiante e purificada, com análise cutânea personalizada.",preco:"A partir de R$ 180"},{nome:"Radiofrequência facial",desc:"Firmeza e rejuvenescimento com tecnologia de ponta. Resultados visíveis desde a 1ª sessão.",preco:"A partir de R$ 250"},{nome:"Design de sobrancelhas",desc:"Mapeamento facial e técnicas exclusivas para o design perfeito para o seu rosto.",preco:"A partir de R$ 90"},{nome:"Massagem relaxante",desc:"1 hora de relaxamento profundo com óleos essenciais e técnicas terapêuticas.",preco:"A partir de R$ 150"},{nome:"Peeling químico",desc:"Renovação celular controlada para manchas, acne e textura irregular.",preco:"A partir de R$ 200"},{nome:"Drenagem linfática",desc:"Técnica manual certificada para redução de inchaço e bem-estar geral.",preco:"A partir de R$ 130"}],galeria:{imagens:["https://images.unsplash.com/photo-1610706208742-1f2e1a6d7e2f?w=800","https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800","https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800","https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=800","https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800"],iconeAnterior:"chevron-left",iconeProximo:"chevron-right"},depoimentos:{itens:[{texto:"Melhor clínica que já fui! A Vitória é super atenciosa e os resultados da radiofrequência foram incríveis. Me sinto 10 anos mais jovem.",autor:"Mariana S.",cargo:"Cliente há 3 anos"},{texto:"Fui para uma limpeza de pele e saí apaixonada. Ambiente maravilhoso, profissionais excelentes. Com certeza voltarei!",autor:"Fernanda L.",cargo:"Cliente há 1 ano"},{texto:"O design de sobrancelhas mudou minha vida. Nunca pensei que esse detalhe fizesse tanta diferença no rosto. Recomendo demais!",autor:"Camila R.",cargo:"Cliente há 2 anos"}],iconeEstrela:"star"},localizacao:{iconeEndereco:"map-pin",endereco:"Rua das Flores, 142 — Meireles",cidade:"Fortaleza, CE — 60165-080",iconeTelefone:"phone",telefone:"(85) 9 8512-1230",iconeEmail:"mail",email:"contato@clinicavitoriarocha.com.br",maps_query:"Clínica+Vitória+Rocha+Fortaleza",horarios:[{dia:"Segunda a Sexta",hora:"08h às 19h"},{dia:"Sábado",hora:"08h às 14h"},{dia:"Domingo",hora:"Fechado"}]},contato:{titulo:"Pronta para se cuidar?",subtitulo:"Entre em contato pelo WhatsApp e agende sua consulta gratuita. Respondemos em minutos.",iconeWhatsapp:"message-circle"}};function h(e,a=""){const o=`https://wa.me/${e}`;return a?`${o}?text=${encodeURIComponent(a)}`:o}function _(e){return e.replace(/\n/g,"<br>")}function A(){return new Date().getFullYear()}function P(e){const a=h(e.whatsapp,`Olá! Gostaria de agendar uma consulta na ${e.nome}.`),o=e.logo?`<img src="${e.logo}" alt="${e.nome}" class="nav-logo-img">`:e.nome;return`
    <nav class="site-nav" role="navigation" aria-label="Menu principal">
      <a href="#hero" class="nav-logo" aria-label="${e.nome}">${o}</a>
      <a href="${a}" class="nav-cta" target="_blank" rel="noopener" aria-label="Chamar no WhatsApp">
        <img src="${e.iconeWhatsapp}" alt="WhatsApp" class="nav-cta-icon">
        Enviar mensagem 
      </a>
    </nav>
  `}function k(e,a,o){const s=h(a,"Olá! Gostaria de agendar uma consulta gratuita."),t=e.stats.map(i=>`
    <div class="stat">
      <span class="stat__num">${i.num}</span>
      <span class="stat__label">${i.label}</span>
    </div>
  `).join("");return`
    <section id="hero" class="section" style="padding-top: calc(var(--nav-height) + 40px);">
      <div class="reveal">
        <div class="hero-cover">
          <img
            src="public/hero.png"
            alt="${o}"
            loading="eager"
          />
        </div>
        <p class="eyebrow">${e.eyebrow}</p>
        <h1 class="section-title" style="margin-top: 12px;">${_(e.titulo)}</h1>
        <p style="font-family: var(--f-body); font-size: 15px; color: var(--c-text-sub); line-height: 1.5; margin-top: 12px;">${e.subtitulo}</p>
        <div style="display: flex; flex-direction: column; gap: 8px; margin-top: 24px;">
          <a href="${s}" class="btn-primary" target="_blank" rel="noopener">${e.cta}</a>
          <a href="#servicos" class="btn-ghost">Ver serviços</a>
        </div>
        <div class="stats-grid" style="margin-top: 40px;">
          ${t}
        </div>
      </div>
    </section>
  `}function C(e,a){const o=e.diferenciais.map((s,t)=>`
    <div class="card-diferencial reveal" style="transition-delay: ${t*80}ms;">
      <div class="card-diferencial__icon"><i data-lucide="${a}"></i></div>
      <div>
        <p class="card-diferencial__titulo">${s.titulo}</p>
        <p class="card-diferencial__desc">${s.desc}</p>
      </div>
    </div>
  `).join("");return`
    <section id="sobre" class="section">
      <div class="section-header reveal">
        <p class="eyebrow">Sobre nós</p>
        <h2 class="section-title">${_(e.titulo)}</h2>
        <p style="font-family: var(--f-body); font-size: var(--fs-body); color: var(--c-text-sub); line-height: var(--lh-body);">${e.texto}</p>
      </div>
      <div class="diferenciais-grid">
        ${o}
      </div>
    </section>
  `}function L(e){return`
    <section id="servicos" class="section section--surface">
      <div class="section-header reveal">
        <p class="eyebrow">O que oferecemos</p>
        <h2 class="section-title">Serviços que transformam</h2>
      </div>
      <div class="servicos-grid">
        ${e.map((o,s)=>`
    <div class="card-servico reveal" style="transition-delay: ${s*60}ms;">
      <p class="card-servico__num">${String(s+1).padStart(2,"0")}</p>
      <div>
        <div>
          <p class="card-servico__nome">${o.nome}</p>
          <p class="card-servico__desc">${o.desc}</p>
        </div>
        <div class="card-servico__divider" style="margin: 16px 0;"></div>
        <p class="card-servico__preco">${o.preco}</p>
      </div>
    </div>
  `).join("")}
      </div>
    </section>
  `}function R(e,a,o){return`
    <section id="galeria" class="section section--surface3">
      <div class="section-header reveal">
        <p class="eyebrow">Nosso espaço</p>
        <h2 class="section-title">Um ambiente pensado para você</h2>
      </div>
      <div class="galeria-slider reveal" id="galeria-slider">
        <div class="galeria-track" id="galeria-track">
          ${e.imagens.map((t,i)=>`
    <div class="galeria-slide">
      <img src="${t}" alt="Foto do espaço ${i+1}" loading="lazy" />
    </div>
  `).join("")}
        </div>
      </div>
      <div class="galeria-nav">
        <button class="galeria-btn" id="galeria-prev" aria-label="Foto anterior">
          <i data-lucide="${a}"></i>
        </button>
        <button class="galeria-btn" id="galeria-next" aria-label="Próxima foto">
          <i data-lucide="${o}"></i>
        </button>
      </div>
    </section>
  `}function q(e,a){const o=Array(5).fill(`
    <i data-lucide="${a}"></i>
  `).join("");return`
    <section id="depoimentos" class="section section--dark">
      <div class="section-header reveal">
        <p class="eyebrow eyebrow--light">Avaliações</p>
        <h2 class="section-title section-title--light">O que nossos clientes dizem</h2>
      </div>
      <div class="depoimentos-grid">
        ${e.itens.map((t,i)=>`
    <div class="card-depoimento reveal" style="transition-delay: ${i*100}ms;">
      <div>
        <div class="card-depoimento__stars">${o}</div>
        <p class="card-depoimento__texto" style="margin-top: 16px;">"${t.texto}"</p>
      </div>
      <p class="card-depoimento__autor">${t.autor}</p>
    </div>
  `).join("")}
      </div>
    </section>
  `}function F(e,a,o,s){const t=e.horarios.map(n=>`
    <div class="horario-row">
      <span>${n.dia}</span>
      <span>${n.hora}</span>
    </div>
  `).join(""),i=`https://maps.google.com/?q=${e.maps_query}`;return`
    <section id="localizacao" class="section">
      <div class="section-header reveal">
        <p class="eyebrow">Onde estamos</p>
        <h2 class="section-title">Venha nos visitar</h2>
      </div>
      <div class="localizacao-info reveal">
        <div class="localizacao-item">
          <div class="localizacao-item__icon"><i data-lucide="${a}"></i></div>
          <div>
            <p class="localizacao-item__label">Endereço</p>
            <p class="localizacao-item__value">
              <a href="${i}" target="_blank" rel="noopener">
                ${e.endereco}<br>${e.cidade}
              </a>
            </p>
          </div>
        </div>
        <div class="localizacao-item">
          <div class="localizacao-item__icon"><i data-lucide="${o}"></i></div>
          <div>
            <p class="localizacao-item__label">Telefone e Whatsapp</p>
            <p class="localizacao-item__value">
              <a href="tel:${e.telefone.replace(/\D/g,"")}">${e.telefone}</a>
            </p>
          </div>
        </div>
        <div class="localizacao-item">
          <div class="localizacao-item__icon"><i data-lucide="${s}"></i></div>
          <div>
            <p class="localizacao-item__label">E-mail</p>
            <p class="localizacao-item__value">
              <a href="mailto:${e.email}">${e.email}</a>
            </p>
          </div>
        </div>
      </div>
      <div class="localizacao-divider" style="margin: 32px 0;"></div>
      <div class="reveal">
        <p class="horarios-titulo">Horário de funcionamento</p>
        <div class="horarios-list">
          ${t}
        </div>
      </div>
    </section>
  `}function I(e,a,o,s){const t=h(a,`Olá! Gostaria de agendar uma consulta na ${o}.`);return`
    <section id="contato" class="section section--surface2">
      <div class="section-header reveal">
        <p class="eyebrow">Fale Conosco</p>
        <h2 class="section-title">${e.titulo}</h2>
        <p style="font-family: var(--f-body); font-size: var(--fs-body); color: var(--c-text-sub); line-height: var(--lh-body);">${e.subtitulo}</p>
      </div>
      <div class="reveal">
        <a href="${t}" class="btn-wpp" target="_blank" rel="noopener">
          <i data-lucide="${s}"></i>
          Chamar no WhatsApp
        </a>
      </div>
    </section>
  `}function T(e){const a={hero:"Início",sobre:"Sobre",servicos:"Serviços",galeria:"Galeria",depoimentos:"Avaliações",localizacao:"Localização",contato:"Contato"},o=e.secoes.map(s=>`<a href="#${s}">${a[s]??s}</a>`).join("");return`
    <footer class="site-footer">
      <div class="footer-inner">
        <p class="footer-logo">${e.nome}</p>
        <nav class="footer-links" aria-label="Links do rodapé">
          ${o}
        </nav>
        <p class="footer-copy">© ${A()} ${e.nome} · ${e.cidade} · Todos os direitos reservados</p>
      </div>
    </footer>
  `}function O(e,a){return`
    <div class="wpp-float">
      <a href="${h(e,"Olá! Gostaria de mais informações.")}" target="_blank" rel="noopener" aria-label="Falar no WhatsApp">
        <i data-lucide="${a}"></i>
      </a>
    </div>
  `}function j(){const{fundoPrincipal:e,fundoSecundario:a,fundoTerciario:o,textoPrimario:s,textoSecundario:t,botaoPrimario:i,botaoSecundario:n}=r.cores,{titulos:l,corpo:d}=r.fontes,u=[...new Set([l,d])],m=document.createElement("link");m.rel="stylesheet",m.href=`https://fonts.googleapis.com/css2?${u.map(f=>`family=${f.replace(/ /g,"+")}:wght@400;500;600;700&`).join("")}display=swap`,document.head.appendChild(m);const p=document.documentElement,c=(f,z)=>p.style.setProperty(f,z);c("--c-bg",e),c("--c-surface",a),c("--c-surface2",g(a,.05)),c("--c-border",v(e,s,.15)),c("--c-surface3",o),c("--c-accent",i),c("--c-accent2",g(i,.15)),c("--c-accent-secondary",n),c("--c-accent-bg",v(e,i,.05)),c("--c-accent-muted",v(i,e,.35)),c("--c-text",s),c("--c-text-sub",v(s,e,.12)),c("--c-muted",v(s,e,.45)),c("--c-muted2",v(s,e,.6)),c("--c-text-secondary",t),c("--c-white",e),c("--c-dark",o),c("--c-dark2",g(o,.12)),c("--c-dark-border",v(o,e,.45)),c("--f-display",`'${l}', serif`),c("--f-body",`'${d}', sans-serif`)}function v(e,a,o){const[s,t,i]=$(e),[n,l,d]=$(a),u=Math.round(s+(n-s)*o),m=Math.round(t+(l-t)*o),p=Math.round(i+(d-i)*o);return x(u,m,p)}function g(e,a){const[o,s,t]=$(e);return x(Math.round(o*(1-a)),Math.round(s*(1-a)),Math.round(t*(1-a)))}function $(e){const a=e.replace("#","");return[parseInt(a.slice(0,2),16),parseInt(a.slice(2,4),16),parseInt(a.slice(4,6),16)]}function x(e,a,o){return"#"+[e,a,o].map(s=>s.toString(16).padStart(2,"0")).join("")}const b={hero:()=>k(r.hero,r.whatsapp,r.nome),sobre:()=>C(r.sobre,r.sobre.iconeDiferencial),servicos:()=>L(r.servicos),galeria:()=>R(r.galeria,r.galeria.iconeAnterior,r.galeria.iconeProximo),depoimentos:()=>q(r.depoimentos,r.depoimentos.iconeEstrela),localizacao:()=>F(r.localizacao,r.localizacao.iconeEndereco,r.localizacao.iconeTelefone,r.localizacao.iconeEmail),contato:()=>I(r.contato,r.whatsapp,r.nome,r.contato.iconeWhatsapp)};function M(){j(),document.documentElement.setAttribute("data-estilo",r.estilo),document.title=`${r.nome} — ${r.slogan}`;const e=document.getElementById("nav");e&&(e.innerHTML=P(r));const a=document.getElementById("main");a&&(a.innerHTML=r.secoes.map(t=>{var i;return((i=b[t])==null?void 0:i.call(b))??""}).join(""));const o=document.getElementById("footer");o&&(o.innerHTML=T(r));const s=document.getElementById("wpp-float");s&&(s.innerHTML=O(r.whatsapp,r.iconeWhatsapp)),W(),B(),S(async()=>{const{createIcons:t,icons:i}=await import("./lucide-XN5DSB_Z.js");return{createIcons:t,icons:i}},[]).then(({createIcons:t,icons:i})=>{t({icons:i})})}function W(){const e=new IntersectionObserver(a=>a.forEach(o=>{o.isIntersecting&&(o.target.classList.add("visible"),e.unobserve(o.target))}),{threshold:.1});document.querySelectorAll(".reveal").forEach(a=>e.observe(a))}function B(){const e=document.getElementById("galeria-track"),a=document.getElementById("galeria-prev"),o=document.getElementById("galeria-next");if(!e||!a||!o)return;let s=0;const t=e.querySelectorAll(".galeria-slide"),i=t.length;function n(l){s=(l%i+i)%i;const d=t[0].offsetWidth+14;e.style.transform=`translateX(-${s*d}px)`}a.addEventListener("click",()=>n(s-1)),o.addEventListener("click",()=>n(s+1)),window.addEventListener("resize",()=>n(s),{passive:!0})}M();
