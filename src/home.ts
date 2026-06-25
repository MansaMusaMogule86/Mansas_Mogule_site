import { layout } from './layout'

const iconSvg = (accent: string, path: string): string => `
  <svg class="division-svg" viewBox="0 0 64 64" fill="none" aria-hidden="true">
    <rect x="9" y="9" width="46" height="46" rx="14" fill="rgba(255,255,255,.08)" stroke="${accent}" stroke-opacity=".52"/>
    <rect x="15" y="15" width="34" height="34" rx="10" fill="rgba(255,255,255,.06)" stroke="rgba(255,255,255,.14)"/>
    <path d="${path}" stroke="${accent}" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="${path}" stroke="#F3D98B" stroke-width="1.1" stroke-linecap="round" stroke-linejoin="round" opacity=".72"/>
  </svg>`

const crownSvg = `
  <svg class="monument-crown" viewBox="0 0 180 150" fill="none" aria-hidden="true">
    <defs>
      <linearGradient id="home-crown-gold" x1="20" y1="10" x2="155" y2="135" gradientUnits="userSpaceOnUse">
        <stop stop-color="#fff4bd"/>
        <stop offset=".28" stop-color="#e4bd4f"/>
        <stop offset=".62" stop-color="#b47a16"/>
        <stop offset="1" stop-color="#f4d77b"/>
      </linearGradient>
      <linearGradient id="home-crown-shadow" x1="70" y1="20" x2="105" y2="150" gradientUnits="userSpaceOnUse">
        <stop stop-color="#ffffff" stop-opacity=".65"/>
        <stop offset=".48" stop-color="#d4af37" stop-opacity=".16"/>
        <stop offset="1" stop-color="#060713" stop-opacity=".44"/>
      </linearGradient>
      <filter id="home-crown-glow" x="-35%" y="-35%" width="170%" height="170%">
        <feGaussianBlur stdDeviation="7" result="blur"/>
        <feColorMatrix in="blur" type="matrix" values="1 0 0 0 0.92 0 1 0 0 0.68 0 0 1 0 0.12 0 0 0 .72 0"/>
        <feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge>
      </filter>
    </defs>
    <path d="M24 119L39 50L66 83L90 25L114 83L141 50L156 119H24Z" fill="url(#home-crown-gold)" filter="url(#home-crown-glow)"/>
    <path d="M24 119L39 50L66 83L90 25L114 83L141 50L156 119H24Z" fill="url(#home-crown-shadow)" opacity=".65"/>
    <rect x="22" y="116" width="136" height="22" rx="8" fill="url(#home-crown-gold)"/>
    <rect x="34" y="123" width="112" height="5" rx="2.5" fill="rgba(5,7,18,.32)"/>
    <circle cx="90" cy="20" r="8" fill="#b69cff"/>
    <path d="M90 11L95 22L90 28L85 22L90 11Z" fill="#7c3aed"/>
  </svg>`

const MOGULS = [
  {
    id: 'moguls-ai',
    title: 'Moguls AI',
    short: 'Autonomous agents, AI workflows, and machine-speed operations.',
    status: 'ACTIVE',
    systemId: 'MM-AI-01',
    role: 'Intelligence automation command',
    purpose: 'Transforms manual execution into adaptive AI systems.',
    capabilities: ['AI Agents', 'Automation', 'Predictive Ops'],
    color: '#7C8CFF',
    path: '/divisions/moguls-ai',
    pos: 'node-ai',
    icon: iconSvg('#7C8CFF', 'M22 40V25l10-6 10 6v15l-10 6-10-6ZM32 19v-7M22 29h-7M49 29h-7M26 35h12')
  },
  {
    id: 'moguls-intelligence',
    title: 'Moguls Intelligence',
    short: 'Decision cockpit, strategic memory, and portfolio command logic.',
    status: 'FLAGSHIP',
    systemId: 'MM-OS-00',
    role: 'Empire operating brain',
    purpose: 'Coordinates every division through one strategic intelligence layer.',
    capabilities: ['Mission Control', 'Company Twin', 'Simulation Engine'],
    color: '#A78BFA',
    path: '/moguls-intelligence-os',
    pos: 'node-intel',
    icon: iconSvg('#A78BFA', 'M20 36c7-14 17-14 24 0M25 24h14M32 16v32M19 46h26M24 30l-6-4M40 30l6-4')
  },
  {
    id: 'moguls-studio',
    title: 'Moguls Studio',
    short: 'Brand systems, product interfaces, and premium presentation architecture.',
    status: 'ACTIVE',
    systemId: 'MM-ST-02',
    role: 'Brand architecture division',
    purpose: 'Turns ventures into visual systems with market authority.',
    capabilities: ['Identity Systems', 'UI Direction', 'Deck Architecture'],
    color: '#D4AF37',
    path: '/divisions/moguls-studio',
    pos: 'node-studio',
    icon: iconSvg('#D4AF37', 'M18 43l9-23 8 18 4-9 7 14M21 45h26M27 20l6-5 6 5')
  },
  {
    id: 'moguls-growth',
    title: 'Moguls Growth',
    short: 'Acquisition systems, partnerships, and performance acceleration.',
    status: 'STRATEGIC',
    systemId: 'MM-GR-03',
    role: 'Market expansion division',
    purpose: 'Builds repeatable growth loops for products and ventures.',
    capabilities: ['Lead Systems', 'Partner Maps', 'Growth Analytics'],
    color: '#2DD4BF',
    path: '/divisions/moguls-growth',
    pos: 'node-growth',
    icon: iconSvg('#2DD4BF', 'M18 43l12-12 8 8 10-18M38 21h10v10M19 49h30')
  },
  {
    id: 'moguls-academy',
    title: 'Moguls Academy',
    short: 'Operator education, training tracks, and elite capability transfer.',
    status: 'IN TRAINING',
    systemId: 'MM-AC-04',
    role: 'Knowledge systems division',
    purpose: 'Turns methods into repeatable education for future operators.',
    capabilities: ['Workshops', 'Cohorts', 'Operator Playbooks'],
    color: '#F59E0B',
    path: '/divisions/moguls-academy',
    pos: 'node-academy',
    icon: iconSvg('#F59E0B', 'M17 28l15-8 15 8-15 8-15-8ZM23 33v9c5 5 13 5 18 0v-9M47 29v11')
  },
  {
    id: 'moguls-labs',
    title: 'Moguls Labs',
    short: 'R&D, prototypes, venture experiments, and new platform incubation.',
    status: 'R&D',
    systemId: 'MM-LB-05',
    role: 'Experimental platform division',
    purpose: 'Builds the test range for products that can become companies.',
    capabilities: ['Prototypes', 'SaaS Concepts', 'IP Exploration'],
    color: '#F472B6',
    path: '/divisions/moguls-labs',
    pos: 'node-labs',
    icon: iconSvg('#F472B6', 'M25 16h14M29 16v12L19 45c-2 4 1 7 5 7h16c4 0 7-3 5-7L35 28V16M25 41h14')
  }
]

const hudPanels = [
  ['Mission', 'Build, acquire, and scale intelligent platforms with long-horizon discipline.'],
  ['Core Pillars', 'Capital intelligence / AI systems / venture architecture / operator education.'],
  ['System Status', 'Public gateway online. Divisions staged for selective launch requests.'],
  ['Portfolio Metrics', 'Six Moguls. One command layer. Status-first reporting only.'],
  ['Strategic Overview', 'A luxury technology empire designed for AI, ventures, partnerships, and platforms.'],
  ['Global Footprint', 'Dubai-rooted, internet-native, partnership-ready, and built for cross-market expansion.']
]

function renderNode(node: typeof MOGULS[number], index: number): string {
  return `
    <a class="mogul-platform ${node.pos} fm-reveal" href="${node.path}" style="--accent:${node.color};--delay:${index * 80}ms" data-h="1">
      <span class="gold-connector"></span>
      <span class="violet-node-glow"></span>
      <div class="platform-top">
        <div class="node-icon">${node.icon}</div>
        <span class="node-status">${node.status}</span>
      </div>
      <div class="node-title">${node.title}</div>
      <p>${node.short}</p>
    </a>`
}

function renderHud([title, text]: string[], index: number): string {
  return `
    <div class="hud-panel fm-reveal" style="--delay:${index * 90}ms">
      <div class="hud-kicker">${title}</div>
      <p>${text}</p>
    </div>`
}

function renderDossier(node: typeof MOGULS[number], index: number): string {
  return `
    <article class="dossier-card fm-reveal" style="--accent:${node.color};--delay:${index * 80}ms">
      <div class="dossier-topline">
        <span>${node.systemId}</span>
        <strong>${node.status}</strong>
      </div>
      <div class="dossier-icon">${node.icon}</div>
      <h3>${node.title}</h3>
      <p class="dossier-purpose">${node.purpose}</p>
      <div class="dossier-meta">
        <span>Purpose</span>
        <p>${node.short}</p>
      </div>
      <div class="dossier-meta">
        <span>Execution Role</span>
        <p>${node.role}</p>
      </div>
      <div class="capability-list">
        ${node.capabilities.map((capability) => `<span>${capability}</span>`).join('')}
      </div>
      <a href="${node.path}" class="dossier-cta" data-h="1">
        Enter Division
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M7 17L17 7M9 7h8v8" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </a>
    </article>`
}

export function homePage(): string {
  return layout('Mansas Moguls', `
<style>
  .home-empire{
    --navy:#030713;
    --navy2:#071228;
    --glass:rgba(7,14,34,.72);
    --marble:#f5f1e7;
    --gold:#d4af37;
    --gold2:#fff0a8;
    --violet:#8b5cf6;
    --text:#f8fafc;
    --muted:#98a4bd;
    background:#030713;
    color:var(--text);
    overflow:hidden;
  }
  .home-empire a{color:inherit}
  .empire-hero{
    min-height:100vh;
    padding:96px 0 28px;
    position:relative;
    background:
      radial-gradient(circle at 50% 28%,rgba(139,92,246,.34),transparent 30%),
      radial-gradient(circle at 52% 63%,rgba(212,175,55,.15),transparent 34%),
      linear-gradient(180deg,#030713 0%,#071228 58%,#13213a 66%,#c9c3b7 78%,#f5f1e7 100%);
  }
  .empire-hero::before{
    content:'';
    position:absolute;
    inset:0;
    pointer-events:none;
    background-image:
      linear-gradient(rgba(212,175,55,.08) 1px,transparent 1px),
      linear-gradient(90deg,rgba(212,175,55,.06) 1px,transparent 1px);
    background-size:56px 56px;
    mask-image:linear-gradient(to bottom,#000 0%,transparent 78%);
    animation:grid-drift 32s linear infinite;
  }
  .empire-hero::after{
    content:'';
    position:absolute;
    left:50%;
    bottom:16%;
    width:min(980px,92vw);
    height:240px;
    transform:translateX(-50%) perspective(900px) rotateX(64deg);
    background:
      linear-gradient(90deg,transparent,rgba(212,175,55,.55),transparent),
      repeating-linear-gradient(90deg,rgba(139,92,246,.18) 0 2px,transparent 2px 66px);
    border:1px solid rgba(212,175,55,.24);
    border-radius:26px;
    filter:drop-shadow(0 0 38px rgba(139,92,246,.28));
    opacity:.52;
  }
  .hero-shell{
    width:min(1500px,calc(100% - 44px));
    min-height:calc(100vh - 124px);
    margin:0 auto;
    display:grid;
    grid-template-columns:minmax(210px,.72fr) minmax(560px,1.7fr) minmax(210px,.72fr);
    gap:18px;
    align-items:center;
    position:relative;
    z-index:2;
  }
  .side-hud{
    display:grid;
    gap:14px;
    align-content:center;
  }
  .hud-panel{
    min-height:116px;
    padding:17px 18px;
    border:1px solid rgba(212,175,55,.24);
    border-radius:8px;
    background:
      linear-gradient(135deg,rgba(255,255,255,.08),rgba(255,255,255,.015)),
      rgba(5,12,30,.68);
    box-shadow:inset 0 1px 0 rgba(255,255,255,.12),0 18px 44px rgba(0,0,0,.26);
    backdrop-filter:blur(22px);
    position:relative;
    overflow:hidden;
  }
  .hud-panel::before,.dossier-card::before{
    content:'';
    position:absolute;
    inset:10px;
    border:1px solid rgba(212,175,55,.12);
    border-radius:5px;
    pointer-events:none;
  }
  .hud-panel::after{
    content:'';
    position:absolute;
    right:-40px;
    top:-40px;
    width:120px;
    height:120px;
    background:radial-gradient(circle,rgba(139,92,246,.32),transparent 68%);
  }
  .hud-kicker{
    font-family:'JetBrains Mono',monospace;
    color:var(--gold2);
    font-size:9px;
    letter-spacing:.2em;
    text-transform:uppercase;
    margin-bottom:10px;
  }
  .hud-panel p{
    color:#cbd5e1;
    font-size:12px;
    line-height:1.65;
    margin:0;
    position:relative;
    z-index:1;
  }
  .command-stage{
    min-height:680px;
    position:relative;
  }
  .energy-map{
    position:absolute;
    inset:0;
    width:100%;
    height:100%;
    pointer-events:none;
    filter:drop-shadow(0 0 10px rgba(139,92,246,.76));
  }
  .energy-map path{
    stroke-dasharray:12 18;
    animation:energy-dash 4.8s linear infinite,line-draw 1.8s ease both;
  }
  .empire-monument{
    position:absolute;
    left:50%;
    top:50%;
    width:min(610px,60vw);
    aspect-ratio:1;
    transform:translate(-50%,-50%);
    display:grid;
    place-items:center;
    isolation:isolate;
  }
  .marble-platform{
    position:absolute;
    left:50%;
    bottom:8%;
    width:82%;
    height:30%;
    transform:translateX(-50%) perspective(900px) rotateX(62deg) rotateZ(-1deg);
    border-radius:28px;
    background:
      linear-gradient(135deg,rgba(255,255,255,.9),rgba(225,218,202,.84)),
      radial-gradient(circle at 20% 20%,rgba(255,255,255,.8),transparent 28%);
    border:2px solid rgba(212,175,55,.36);
    box-shadow:0 42px 95px rgba(0,0,0,.42),inset 0 2px 0 rgba(255,255,255,.78),0 0 54px rgba(212,175,55,.17);
  }
  .marble-platform::before{
    content:'';
    position:absolute;
    inset:16px;
    border:1px solid rgba(7,18,40,.14);
    border-radius:20px;
    background:
      linear-gradient(90deg,transparent,rgba(139,92,246,.32),transparent),
      repeating-linear-gradient(90deg,rgba(7,18,40,.12) 0 1px,transparent 1px 38px);
  }
  .glass-deck{
    position:absolute;
    left:50%;
    bottom:22%;
    width:70%;
    height:22%;
    transform:translateX(-50%) perspective(900px) rotateX(58deg);
    border-radius:22px;
    background:linear-gradient(180deg,rgba(12,22,54,.84),rgba(5,8,22,.58));
    border:1px solid rgba(212,175,55,.32);
    box-shadow:0 0 70px rgba(139,92,246,.32),inset 0 1px 0 rgba(255,255,255,.18);
  }
  .gold-ring{
    position:absolute;
    width:72%;
    aspect-ratio:1;
    border-radius:50%;
    border:2px solid rgba(212,175,55,.45);
    box-shadow:0 0 22px rgba(212,175,55,.28),inset 0 0 18px rgba(212,175,55,.13);
    transform:rotateX(68deg);
  }
  .gold-ring.primary{animation:ring-spin 18s linear infinite}
  .gold-ring.secondary{width:57%;border-style:dashed;border-color:rgba(255,240,168,.34);animation:ring-spin-reverse 24s linear infinite}
  .gold-ring.tertiary{width:42%;border-color:rgba(139,92,246,.42);animation:ring-spin 32s linear infinite}
  .crown-core{
    width:50%;
    min-width:260px;
    display:grid;
    place-items:center;
    transform:translateY(-26px);
    animation:crown-float 5.5s ease-in-out infinite;
  }
  .monument-crown{
    width:100%;
    filter:drop-shadow(0 24px 34px rgba(0,0,0,.4)) drop-shadow(0 0 28px rgba(212,175,55,.55));
  }
  .brand-plaque{
    position:absolute;
    left:50%;
    bottom:11%;
    width:min(540px,82%);
    transform:translateX(-50%);
    padding:22px 28px 20px;
    text-align:center;
    border-radius:10px;
    border:1px solid rgba(255,240,168,.54);
    background:linear-gradient(135deg,#fff0a8 0%,#d4af37 36%,#8a5a12 72%,#f5d77b 100%);
    box-shadow:0 26px 60px rgba(0,0,0,.42),inset 0 2px 0 rgba(255,255,255,.35),0 0 46px rgba(212,175,55,.32);
    color:#060713;
  }
  .brand-plaque h1{
    margin:0;
    font-family:'Space Grotesk',sans-serif;
    font-size:clamp(38px,4.8vw,76px);
    line-height:.88;
    font-weight:900;
    letter-spacing:0;
    text-transform:uppercase;
  }
  .brand-plaque p{
    margin:12px 0 0;
    font-family:'JetBrains Mono',monospace;
    font-size:10px;
    letter-spacing:.24em;
    text-transform:uppercase;
    color:#1a1205;
  }
  .mogul-platform{
    position:absolute;
    width:190px;
    min-height:168px;
    padding:13px;
    border-radius:10px;
    border:1px solid color-mix(in srgb,var(--accent) 54%,transparent);
    background:linear-gradient(160deg,rgba(8,16,39,.84),rgba(255,255,255,.06));
    box-shadow:0 22px 54px rgba(0,0,0,.34),0 0 30px color-mix(in srgb,var(--accent) 25%,transparent),inset 0 1px 0 rgba(255,255,255,.16);
    text-decoration:none;
    backdrop-filter:blur(18px);
    transform:translateZ(0);
    transition:transform .3s ease,border-color .3s ease,box-shadow .3s ease;
  }
  .mogul-platform:hover{
    transform:translateY(-10px) scale(1.025);
    border-color:color-mix(in srgb,var(--accent) 76%,white 20%);
    box-shadow:0 30px 70px rgba(0,0,0,.42),0 0 44px color-mix(in srgb,var(--accent) 38%,transparent);
  }
  .node-ai{left:4%;top:9%}
  .node-intel{right:4%;top:9%}
  .node-studio{right:-1%;top:42%}
  .node-growth{right:0;bottom:6%}
  .node-academy{left:0;bottom:6%}
  .node-labs{left:-1%;top:42%}
  .gold-connector{
    position:absolute;
    left:14px;
    right:14px;
    bottom:10px;
    height:2px;
    background:linear-gradient(90deg,transparent,var(--gold2),var(--gold),transparent);
    box-shadow:0 0 12px rgba(212,175,55,.5);
  }
  .violet-node-glow{
    position:absolute;
    inset:-16px;
    border-radius:inherit;
    background:radial-gradient(circle,color-mix(in srgb,var(--accent) 22%,transparent),transparent 66%);
    opacity:.74;
    z-index:-1;
    animation:violet-pulse 3.6s ease-in-out infinite;
  }
  .platform-top{
    display:flex;
    align-items:flex-start;
    justify-content:space-between;
    gap:10px;
    margin-bottom:10px;
  }
  .node-icon,.dossier-icon{
    width:58px;
    height:58px;
    display:grid;
    place-items:center;
  }
  .division-svg{width:58px;height:58px;filter:drop-shadow(0 12px 18px rgba(0,0,0,.28))}
  .node-status{
    font-family:'JetBrains Mono',monospace;
    font-size:8px;
    letter-spacing:.14em;
    color:#050816;
    background:linear-gradient(135deg,var(--gold2),var(--gold));
    padding:5px 7px;
    border-radius:4px;
    white-space:nowrap;
  }
  .node-title{
    font-family:'Space Grotesk',sans-serif;
    color:#fff;
    font-size:16px;
    font-weight:800;
    letter-spacing:0;
    margin-bottom:7px;
  }
  .mogul-platform p{
    color:#aeb8cf;
    font-size:11.5px;
    line-height:1.55;
    margin:0 0 12px;
  }
  .hero-intro{
    position:absolute;
    left:50%;
    top:18px;
    transform:translateX(-50%);
    width:min(660px,72vw);
    text-align:center;
    z-index:4;
  }
  .hero-intro .label{
    color:#fff0a8;
    margin-bottom:10px;
  }
  .hero-intro p{
    margin:0 auto;
    color:#cad5ea;
    font-size:14px;
    line-height:1.7;
    max-width:620px;
  }
  .scroll-cue{
    position:absolute;
    left:50%;
    bottom:17px;
    transform:translateX(-50%);
    z-index:4;
    font-family:'JetBrains Mono',monospace;
    font-size:9px;
    letter-spacing:.2em;
    color:#2a2542;
    text-transform:uppercase;
  }
  .empire-section{
    position:relative;
    padding:76px 0;
    background:#050916;
  }
  .empire-section.marble{
    background:
      radial-gradient(circle at 15% 10%,rgba(139,92,246,.18),transparent 32%),
      linear-gradient(180deg,#f5f1e7 0%,#ffffff 48%,#eef2ff 100%);
    color:#0f172a;
  }
  .section-head{
    display:flex;
    align-items:end;
    justify-content:space-between;
    gap:28px;
    margin-bottom:30px;
  }
  .section-head h2{
    font-family:'Space Grotesk',sans-serif;
    font-size:clamp(32px,4vw,58px);
    line-height:1;
    margin:0;
    letter-spacing:0;
  }
  .section-head p{
    max-width:520px;
    margin:0;
    color:#6b7280;
    line-height:1.75;
    font-size:14px;
  }
  .system-grid{
    display:grid;
    grid-template-columns:1.05fr .95fr 1fr;
    gap:18px;
  }
  .system-panel{
    min-height:310px;
    padding:24px;
    border-radius:8px;
    background:linear-gradient(160deg,rgba(7,14,34,.9),rgba(13,24,56,.72));
    border:1px solid rgba(212,175,55,.24);
    box-shadow:0 24px 70px rgba(0,0,0,.24),inset 0 1px 0 rgba(255,255,255,.11);
    overflow:hidden;
    position:relative;
  }
  .system-panel::after{
    content:'';
    position:absolute;
    inset:auto -40px -40px auto;
    width:180px;
    height:180px;
    background:radial-gradient(circle,rgba(139,92,246,.3),transparent 68%);
  }
  .system-panel h3{
    font-family:'Space Grotesk',sans-serif;
    margin:0 0 16px;
    color:#fff;
    font-size:22px;
  }
  .system-panel p,.system-panel li{
    color:#aeb8cf;
    font-size:13px;
    line-height:1.75;
  }
  .system-panel ul{
    list-style:none;
    display:grid;
    gap:12px;
    margin:20px 0 0;
    padding:0;
  }
  .system-panel li{
    padding:10px 12px;
    border-left:2px solid var(--gold);
    background:rgba(255,255,255,.04);
  }
  .tactical-map{
    position:relative;
    min-height:310px;
    border-radius:8px;
    border:1px solid rgba(139,92,246,.26);
    background:
      radial-gradient(circle at 50% 45%,rgba(139,92,246,.28),transparent 34%),
      linear-gradient(rgba(255,255,255,.04) 1px,transparent 1px),
      linear-gradient(90deg,rgba(255,255,255,.04) 1px,transparent 1px),
      #061023;
    background-size:auto,34px 34px,34px 34px,auto;
    overflow:hidden;
  }
  .tactical-map span{
    position:absolute;
    font-family:'JetBrains Mono',monospace;
    font-size:9px;
    letter-spacing:.14em;
    color:#dbeafe;
    padding:7px 9px;
    border:1px solid rgba(212,175,55,.25);
    background:rgba(5,12,30,.68);
    border-radius:4px;
  }
  .tactical-map .tag-a{left:10%;top:18%}
  .tactical-map .tag-b{right:8%;top:30%}
  .tactical-map .tag-c{left:18%;bottom:16%}
  .tactical-map .tag-d{right:16%;bottom:12%}
  .dossier-grid{
    display:grid;
    grid-template-columns:repeat(3,minmax(0,1fr));
    gap:18px;
  }
  .dossier-card{
    padding:22px;
    min-height:420px;
    display:flex;
    flex-direction:column;
    position:relative;
    overflow:hidden;
    border-radius:8px;
    border:1px solid color-mix(in srgb,var(--accent) 36%,rgba(212,175,55,.2));
    background:
      linear-gradient(145deg,rgba(255,255,255,.88),rgba(245,241,231,.72)),
      radial-gradient(circle at 100% 0%,color-mix(in srgb,var(--accent) 18%,transparent),transparent 34%);
    box-shadow:0 24px 62px rgba(15,23,42,.13),inset 0 1px 0 rgba(255,255,255,.72);
  }
  .dossier-card::after{
    content:'CLASSIFIED OPERATOR DOSSIER';
    position:absolute;
    right:-42px;
    top:32px;
    transform:rotate(38deg);
    font-family:'JetBrains Mono',monospace;
    font-size:8px;
    letter-spacing:.16em;
    color:color-mix(in srgb,var(--accent) 72%,#0f172a 20%);
    border-top:1px solid color-mix(in srgb,var(--accent) 42%,transparent);
    border-bottom:1px solid color-mix(in srgb,var(--accent) 42%,transparent);
    padding:4px 42px;
    opacity:.58;
  }
  .dossier-topline{
    display:flex;
    justify-content:space-between;
    gap:14px;
    font-family:'JetBrains Mono',monospace;
    font-size:9px;
    letter-spacing:.16em;
    color:#64748b;
    text-transform:uppercase;
    margin-bottom:18px;
    position:relative;
    z-index:1;
  }
  .dossier-topline strong{
    color:#101827;
    background:linear-gradient(135deg,var(--gold2),var(--gold));
    padding:4px 8px;
    border-radius:4px;
  }
  .dossier-card h3{
    font-family:'Space Grotesk',sans-serif;
    color:#0f172a;
    font-size:24px;
    margin:4px 0 8px;
    position:relative;
    z-index:1;
  }
  .dossier-purpose{
    color:color-mix(in srgb,var(--accent) 72%,#0f172a 22%);
    font-size:13px;
    line-height:1.65;
    margin:0 0 18px;
    font-weight:700;
  }
  .dossier-meta{
    border-top:1px solid rgba(15,23,42,.08);
    padding-top:12px;
    margin-top:10px;
  }
  .dossier-meta span{
    display:block;
    font-family:'JetBrains Mono',monospace;
    color:#94a3b8;
    font-size:8px;
    letter-spacing:.16em;
    text-transform:uppercase;
    margin-bottom:5px;
  }
  .dossier-meta p{
    color:#475569;
    font-size:12.5px;
    line-height:1.6;
    margin:0;
  }
  .capability-list{
    display:flex;
    flex-wrap:wrap;
    gap:7px;
    margin-top:18px;
  }
  .capability-list span{
    font-family:'JetBrains Mono',monospace;
    font-size:8.5px;
    letter-spacing:.08em;
    color:#0f172a;
    padding:6px 8px;
    background:color-mix(in srgb,var(--accent) 11%,white);
    border:1px solid color-mix(in srgb,var(--accent) 26%,transparent);
    border-radius:4px;
  }
  .dossier-cta{
    display:flex;
    align-items:center;
    justify-content:space-between;
    margin-top:auto;
    padding-top:18px;
    color:#0f172a;
    font-family:'Space Grotesk',sans-serif;
    font-size:12px;
    font-weight:800;
    text-transform:uppercase;
    letter-spacing:.12em;
    text-decoration:none;
  }
  .dossier-cta svg{width:18px;height:18px;color:var(--accent)}
  .venture-strip{
    display:grid;
    grid-template-columns:repeat(4,minmax(0,1fr));
    gap:14px;
  }
  .venture-card{
    min-height:170px;
    padding:18px;
    border-radius:8px;
    background:rgba(255,255,255,.06);
    border:1px solid rgba(212,175,55,.2);
    box-shadow:inset 0 1px 0 rgba(255,255,255,.08);
  }
  .venture-card span{
    font-family:'JetBrains Mono',monospace;
    font-size:9px;
    letter-spacing:.16em;
    color:#d4af37;
    text-transform:uppercase;
  }
  .venture-card h3{
    color:#fff;
    font-family:'Space Grotesk',sans-serif;
    font-size:18px;
    margin:18px 0 8px;
  }
  .venture-card p{
    margin:0;
    color:#aeb8cf;
    font-size:12.5px;
    line-height:1.62;
  }
  .fm-reveal{opacity:0;transform:translateY(22px);animation:css-reveal .7s ease forwards;animation-delay:var(--delay,0ms)}
  html[data-motion="framer"] .fm-reveal{opacity:0;transform:translateY(22px);animation:none}
  @keyframes crown-float{0%,100%{transform:translateY(-26px)}50%{transform:translateY(-48px)}}
  @keyframes ring-spin{to{transform:rotateX(68deg) rotateZ(360deg)}}
  @keyframes ring-spin-reverse{to{transform:rotateX(68deg) rotateZ(-360deg)}}
  @keyframes violet-pulse{0%,100%{opacity:.48}50%{opacity:.9}}
  @keyframes energy-dash{to{stroke-dashoffset:-240}}
  @keyframes line-draw{from{stroke-dashoffset:420}to{stroke-dashoffset:0}}
  @keyframes grid-drift{to{background-position:56px 56px}}
  @keyframes css-reveal{to{opacity:1;transform:translateY(0)}}
  @media(max-width:1180px){
    .hero-shell{grid-template-columns:1fr;width:min(1060px,calc(100% - 34px))}
    .side-hud{grid-template-columns:repeat(3,minmax(0,1fr));order:2}
    .command-stage{min-height:760px}
    .dossier-grid{grid-template-columns:repeat(2,minmax(0,1fr))}
    .system-grid,.venture-strip{grid-template-columns:repeat(2,minmax(0,1fr))}
  }
  @media(max-width:820px){
    .empire-hero{padding-top:96px}
    .hero-intro{position:relative;left:auto;top:auto;transform:none;width:auto;margin:0 auto 18px;padding:0 22px}
    .hero-shell{display:block}
    .side-hud{display:none}
    .command-stage{min-height:auto;padding:0 0 22px}
    .energy-map{display:none}
    .empire-monument{position:relative;left:auto;top:auto;transform:none;width:min(620px,100%);margin:0 auto 20px}
    .mogul-platform{position:relative;left:auto;right:auto;top:auto;bottom:auto;width:100%;min-height:0}
    .command-stage{display:grid;gap:12px}
    .brand-plaque{width:88%;padding:20px}
    .crown-core{min-width:210px}
    .dossier-grid,.system-grid,.venture-strip{grid-template-columns:1fr}
    .section-head{display:block}
    .section-head p{margin-top:14px}
  }
</style>

<div class="home-empire">
  <section class="empire-hero" id="home">
    <div class="hero-shell">
      <div class="side-hud">
        ${hudPanels.slice(0, 3).map(renderHud).join('')}
      </div>

      <div class="command-stage">
        <div class="hero-intro fm-reveal">
          <div class="label">Luxury Empire Operating System</div>
          <p>The public entrance to a futuristic technology empire building AI systems, ventures, partnerships, and intelligent platforms.</p>
        </div>

        <svg class="energy-map" viewBox="0 0 1000 720" preserveAspectRatio="none" aria-hidden="true">
          <defs>
            <linearGradient id="home-energy" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="rgba(139,92,246,0)"/>
              <stop offset="46%" stop-color="#A78BFA"/>
              <stop offset="52%" stop-color="#FFF0A8"/>
              <stop offset="100%" stop-color="rgba(139,92,246,0)"/>
            </linearGradient>
          </defs>
          <path d="M500 360 C330 210 210 130 92 116" stroke="url(#home-energy)" stroke-width="2.4" fill="none"/>
          <path d="M500 360 C672 210 796 130 908 116" stroke="url(#home-energy)" stroke-width="2.4" fill="none"/>
          <path d="M500 360 C744 330 856 340 982 390" stroke="url(#home-energy)" stroke-width="2.4" fill="none"/>
          <path d="M500 360 C690 520 764 610 860 650" stroke="url(#home-energy)" stroke-width="2.4" fill="none"/>
          <path d="M500 360 C310 520 238 610 140 650" stroke="url(#home-energy)" stroke-width="2.4" fill="none"/>
          <path d="M500 360 C256 330 144 340 18 390" stroke="url(#home-energy)" stroke-width="2.4" fill="none"/>
        </svg>

        <div class="empire-monument">
          <div class="marble-platform"></div>
          <div class="glass-deck"></div>
          <div class="gold-ring primary"></div>
          <div class="gold-ring secondary"></div>
          <div class="gold-ring tertiary"></div>
          <div class="crown-core fm-crown">${crownSvg}</div>
          <div class="brand-plaque">
            <h1>Mansas<br>Moguls</h1>
            <p>Moguls Intelligence OS</p>
          </div>
        </div>

        ${MOGULS.map(renderNode).join('')}
      </div>

      <div class="side-hud">
        ${hudPanels.slice(3).map((panel, i) => renderHud(panel, i + 3)).join('')}
      </div>
    </div>
    <div class="scroll-cue">Scroll / Enter The System</div>
  </section>

  <section class="empire-section" id="system">
    <div class="container">
      <div class="section-head fm-reveal">
        <div>
          <div class="label">The System</div>
          <h2>Empire Architecture</h2>
        </div>
        <p>A layered command structure where intelligence, design, growth, education, and R&D feed one premium operating brain.</p>
      </div>
      <div class="system-grid">
        <div class="system-panel fm-reveal">
          <h3>Command Center</h3>
          <p>Moguls Intelligence OS is the central decision layer. It reads signals, organizes strategy, and turns operating context into action.</p>
          <ul>
            <li>Mission control for priorities and launch requests</li>
            <li>Strategic overview across divisions and ventures</li>
            <li>Decision memory for repeatable execution</li>
          </ul>
        </div>
        <div class="tactical-map parallax-map fm-reveal">
          <span class="tag-a">AI SYSTEMS</span>
          <span class="tag-b">VENTURE OPS</span>
          <span class="tag-c">PARTNERSHIPS</span>
          <span class="tag-d">R&D PIPELINE</span>
        </div>
        <div class="system-panel fm-reveal">
          <h3>Layered Platforms</h3>
          <p>Each Mogul acts like a specialized command platform connected by gold rails and violet intelligence lines.</p>
          <ul>
            <li>Gold chrome authority and premium market presence</li>
            <li>Navy glass HUD systems for tactical detail</li>
            <li>White marble foundations for institutional weight</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <section class="empire-section marble" id="moguls">
    <div class="container">
      <div class="section-head fm-reveal">
        <div>
          <div class="label">Meet The Moguls</div>
          <h2>Classified Operator Dossiers</h2>
        </div>
        <p>Six divisions, each presented as an operator file with purpose, capabilities, system status, and execution role.</p>
      </div>
      <div class="dossier-grid">
        ${MOGULS.map(renderDossier).join('')}
      </div>
    </div>
  </section>

  <section class="empire-section" id="ventures">
    <div class="container">
      <div class="section-head fm-reveal">
        <div>
          <div class="label">Ventures</div>
          <h2>Platform Command Grid</h2>
        </div>
        <p>No vanity metrics. The public layer shows what matters: operating posture, platform type, and strategic readiness.</p>
      </div>
      <div class="venture-strip">
        ${[
          ['ACTIVE', 'AI Systems', 'Custom intelligence tools and workflow automation for operators.'],
          ['BUILDING', 'Partnership Layer', 'Strategic collaborations and venture relationships under review.'],
          ['STRATEGIC', 'Brand Infrastructure', 'Premium identity, interface, and deck systems for launches.'],
          ['R&D', 'Future Platforms', 'Experimental products, IP concepts, and prototype incubation.']
        ].map(([status, title, text]) => `
          <div class="venture-card fm-reveal">
            <span>${status}</span>
            <h3>${title}</h3>
            <p>${text}</p>
          </div>`).join('')}
      </div>
    </div>
  </section>
</div>

<script type="module">
  (async function(){
    try {
      var motion = await import('https://esm.sh/framer-motion@11.18.2/dom?bundle');
      var animate = motion.animate;
      var inView = motion.inView;
      var stagger = motion.stagger;
      var scroll = motion.scroll;
      document.documentElement.dataset.motion = 'framer';

      animate('.fm-crown', { y: [0, -18, 0] }, { duration: 5.6, repeat: Infinity, easing: 'ease-in-out' });
      animate('.gold-ring.primary', { rotate: 360 }, { duration: 18, repeat: Infinity, easing: 'linear' });
      animate('.gold-ring.secondary', { rotate: -360 }, { duration: 24, repeat: Infinity, easing: 'linear' });
      animate('.gold-ring.tertiary', { rotate: 360 }, { duration: 32, repeat: Infinity, easing: 'linear' });
      animate('.energy-map path', { pathLength: [0, 1], opacity: [.35, .9, .45] }, { duration: 2.4, delay: stagger(.12), easing: 'ease-out' });

      inView('.fm-reveal', function(entryOrElement){
        var element = entryOrElement && entryOrElement.target ? entryOrElement.target : entryOrElement;
        if (!element || !element.style) return;
        var delayMs = Number((element.style.getPropertyValue('--delay') || '0').replace('ms', '')) || 0;
        animate(element, { opacity: [0, 1], y: [22, 0] }, { duration: .75, delay: delayMs / 1000, easing: [.22, 1, .36, 1] });
      }, { margin: '-8% 0px -8% 0px' });

      var map = document.querySelector('.parallax-map');
      if (map && scroll) {
        scroll(animate(map, { y: [-18, 18] }, { easing: 'linear' }), { target: map });
      }
    } catch (error) {
      document.documentElement.dataset.motion = 'css';
    }
  })();
</script>
`, 'home')
}
