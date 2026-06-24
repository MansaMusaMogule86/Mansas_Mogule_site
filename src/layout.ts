export const globalCSS = `
  @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700;800&family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@300;400;500;600&display=swap');

  *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
  html{scroll-behavior:smooth}
  body{
    font-family:'Inter',sans-serif;
    background:#F8F9FC;
    color:#0F172A;
    overflow-x:hidden;
    cursor:none;
  }

  /* ── CURSOR ── */
  #cursor-ring{
    position:fixed;width:32px;height:32px;
    border:1.5px solid #C79A38;border-radius:50%;
    pointer-events:none;z-index:99999;
    transform:translate(-50%,-50%);
    transition:width .25s cubic-bezier(.25,.46,.45,.94),height .25s cubic-bezier(.25,.46,.45,.94),background .25s,border-color .25s,opacity .2s;
    mix-blend-mode:multiply;
  }
  #cursor-ring.hov{width:52px;height:52px;background:rgba(199,154,56,.12);border-color:#F0D597;border-width:2px}
  #cursor-ring.click{width:20px;height:20px;background:rgba(199,154,56,.25)}
  #cursor-dot{
    position:fixed;width:5px;height:5px;
    background:#C79A38;border-radius:50%;
    pointer-events:none;z-index:99999;
    transform:translate(-50%,-50%);
    transition:width .1s,height .1s;
  }

  /* ── GRID BG ── */
  .grid-bg{
    position:fixed;inset:0;pointer-events:none;z-index:0;
    background-image:
      linear-gradient(rgba(199,154,56,.028) 1px,transparent 1px),
      linear-gradient(90deg,rgba(199,154,56,.028) 1px,transparent 1px);
    background-size:72px 72px;
  }
  .grid-bg::after{
    content:'';position:absolute;inset:0;
    background:radial-gradient(ellipse 80% 60% at 50% 0%,rgba(248,249,252,0) 0%,rgba(248,249,252,.7) 100%);
  }

  /* ── GLASS ── */
  .glass{
    background:rgba(255,255,255,.78);
    backdrop-filter:blur(24px) saturate(180%);
    -webkit-backdrop-filter:blur(24px) saturate(180%);
    border:1px solid rgba(199,154,56,.16);
    box-shadow:0 8px 32px rgba(31,38,135,.055),0 1px 0 rgba(255,255,255,.95) inset,0 0 0 1px rgba(255,255,255,.4);
  }
  .glass-dark{
    background:rgba(10,11,26,.88);
    backdrop-filter:blur(24px);
    -webkit-backdrop-filter:blur(24px);
    border:1px solid rgba(199,154,56,.16);
    box-shadow:0 8px 48px rgba(0,0,0,.45),0 1px 0 rgba(255,255,255,.05) inset;
  }
  .glass-violet{
    background:rgba(30,27,75,.82);
    backdrop-filter:blur(24px);
    border:1px solid rgba(139,92,246,.22);
    box-shadow:0 8px 48px rgba(0,0,0,.35);
  }

  /* ── GOLD TEXT ── */
  .gold{
    background:linear-gradient(135deg,#F0D597 0%,#C79A38 45%,#8B6914 100%);
    -webkit-background-clip:text;background-clip:text;
    -webkit-text-fill-color:transparent;
  }
  .gold-shimmer{
    background:linear-gradient(135deg,#F0D597 0%,#E8C460 18%,#C79A38 48%,#A07828 75%,#F0D597 100%);
    background-size:250% auto;
    -webkit-background-clip:text;background-clip:text;
    -webkit-text-fill-color:transparent;
    animation:shimmer 6s linear infinite;
  }
  .violet-text{
    background:linear-gradient(135deg,#A78BFA,#8B5CF6,#6D28D9);
    -webkit-background-clip:text;background-clip:text;
    -webkit-text-fill-color:transparent;
  }
  @keyframes shimmer{to{background-position:250% center}}

  /* ── TYPOGRAPHY ── */
  .font-display{font-family:'Space Grotesk',sans-serif}
  .font-mono{font-family:'JetBrains Mono',monospace}
  .label{
    font-family:'JetBrains Mono',monospace;
    font-size:9.5px;letter-spacing:.24em;
    text-transform:uppercase;color:#C79A38;opacity:.9;
  }

  /* ── NAV ── */
  nav{
    position:fixed;top:0;left:0;right:0;z-index:100;
    padding:0;
    transition:all .35s cubic-bezier(.25,.46,.45,.94);
  }
  nav.scrolled{
    background:rgba(248,249,252,.92);
    backdrop-filter:blur(24px) saturate(180%);
    -webkit-backdrop-filter:blur(24px) saturate(180%);
    border-bottom:1px solid rgba(199,154,56,.1);
    box-shadow:0 4px 32px rgba(0,0,0,.04);
  }
  .nav-inner{
    max-width:1320px;margin:0 auto;padding:18px 40px;
    display:flex;align-items:center;justify-content:space-between;
  }
  .nav-logo{display:flex;align-items:center;gap:14px;text-decoration:none}
  .nav-links{display:flex;align-items:center;gap:40px}
  .nav-link{
    font-family:'Space Grotesk',sans-serif;font-size:11.5px;
    font-weight:600;letter-spacing:.1em;text-transform:uppercase;
    color:#64748B;text-decoration:none;
    position:relative;padding:5px 0;transition:color .2s;
  }
  .nav-link::after{
    content:'';position:absolute;bottom:-3px;left:0;
    width:0;height:1.5px;
    background:linear-gradient(90deg,#F0D597,#C79A38,#8B6914);
    transition:width .32s cubic-bezier(.25,.46,.45,.94);
    border-radius:99px;
  }
  .nav-link:hover,.nav-link.active{color:#C79A38}
  .nav-link:hover::after,.nav-link.active::after{width:100%}

  /* ── BUTTONS ── */
  .btn{
    display:inline-flex;align-items:center;gap:8px;
    font-family:'Space Grotesk',sans-serif;font-weight:700;
    font-size:11.5px;letter-spacing:.1em;text-transform:uppercase;
    text-decoration:none;border:none;cursor:pointer;
    border-radius:8px;transition:all .3s cubic-bezier(.25,.46,.45,.94);
    position:relative;overflow:hidden;
  }
  .btn::before{
    content:'';position:absolute;inset:0;
    background:linear-gradient(135deg,rgba(255,255,255,.2),transparent);
    opacity:0;transition:opacity .3s;
  }
  .btn:hover::before{opacity:1}
  .btn-gold{
    padding:14px 32px;
    background:linear-gradient(135deg,#F0D597 0%,#C79A38 50%,#8B6914 100%);
    color:#0A0B1A;
    box-shadow:0 4px 24px rgba(199,154,56,.38),0 1px 0 rgba(255,255,255,.3) inset;
  }
  .btn-gold:hover{
    box-shadow:0 8px 44px rgba(199,154,56,.58),0 1px 0 rgba(255,255,255,.3) inset;
    transform:translateY(-2px);
  }
  .btn-gold:active{transform:translateY(0)}
  .btn-outline{
    padding:13px 30px;
    background:transparent;color:#C79A38;
    border:1.5px solid rgba(199,154,56,.38);
  }
  .btn-outline:hover{
    background:rgba(199,154,56,.07);
    border-color:rgba(199,154,56,.7);
    transform:translateY(-2px);
  }
  .btn-dark{
    padding:13px 30px;
    background:rgba(255,255,255,.07);color:#F8F9FC;
    border:1px solid rgba(255,255,255,.12);
  }
  .btn-dark:hover{background:rgba(255,255,255,.12);border-color:rgba(255,255,255,.22)}

  /* ── BADGE ── */
  .badge{
    display:inline-flex;align-items:center;gap:5px;
    font-family:'JetBrains Mono',monospace;font-size:9px;
    font-weight:600;letter-spacing:.14em;text-transform:uppercase;
    padding:3px 11px;border-radius:999px;
  }
  .badge::before{content:'';width:4.5px;height:4.5px;border-radius:50%;flex-shrink:0}
  .badge-green{background:rgba(16,185,129,.1);color:#10B981;border:1px solid rgba(16,185,129,.25)}
  .badge-green::before{background:#10B981;animation:pulse-dot 2s ease-in-out infinite}
  .badge-amber{background:rgba(245,158,11,.1);color:#F59E0B;border:1px solid rgba(245,158,11,.25)}
  .badge-amber::before{background:#F59E0B}
  .badge-violet{background:rgba(139,92,246,.1);color:#8B5CF6;border:1px solid rgba(139,92,246,.25)}
  .badge-violet::before{background:#8B5CF6}
  @keyframes pulse-dot{0%,100%{box-shadow:0 0 0 0 rgba(16,185,129,.5)}60%{box-shadow:0 0 0 4px rgba(16,185,129,0)}}

  /* ── DIVIDER ── */
  .divider{height:1px;background:linear-gradient(90deg,transparent,rgba(199,154,56,.28),transparent)}

  /* ── SECTIONS ── */
  section{position:relative;z-index:1}
  .container{max-width:1320px;margin:0 auto;padding:0 40px}
  .section-title{
    font-family:'Space Grotesk',sans-serif;font-weight:800;
    line-height:1.08;letter-spacing:-.02em;
  }

  /* ── CARDS ── */
  .card{
    border-radius:20px;
    transition:transform .35s cubic-bezier(.25,.46,.45,.94),box-shadow .35s cubic-bezier(.25,.46,.45,.94);
  }
  .card:hover{transform:translateY(-5px);box-shadow:0 20px 60px rgba(0,0,0,.08)}

  /* ── HUD METRIC ── */
  .metric{border-left:2px solid rgba(199,154,56,.28);padding-left:14px}

  /* ── STATUS BAR ── */
  .status-bar{
    display:flex;align-items:center;gap:20px;flex-wrap:wrap;
    font-family:'JetBrains Mono',monospace;font-size:9px;
    letter-spacing:.16em;text-transform:uppercase;
  }
  .status-item{display:flex;align-items:center;gap:6px}
  .status-dot{width:5px;height:5px;border-radius:50%;flex-shrink:0}

  /* ── ORBITAL ANIMATIONS ── */
  @keyframes orbit1{0%{transform:rotateX(75deg) rotateZ(0deg)}100%{transform:rotateX(75deg) rotateZ(360deg)}}
  @keyframes orbit2{0%{transform:rotateX(75deg) rotateZ(120deg)}100%{transform:rotateX(75deg) rotateZ(-240deg)}}
  @keyframes orbit3{0%{transform:rotateX(75deg) rotateZ(240deg)}100%{transform:rotateX(75deg) rotateZ(600deg)}}
  @keyframes float{0%,100%{transform:translateY(0) translateX(-50%)}50%{transform:translateY(-14px) translateX(-50%)}}
  @keyframes floatBadge{0%,100%{transform:translateX(-50%) translateY(0)}50%{transform:translateX(-50%) translateY(-12px)}}
  @keyframes glowGold{0%,100%{filter:drop-shadow(0 0 12px rgba(199,154,56,.45)) drop-shadow(0 0 30px rgba(199,154,56,.15))}50%{filter:drop-shadow(0 0 28px rgba(199,154,56,.85)) drop-shadow(0 0 60px rgba(199,154,56,.25))}}
  @keyframes rotateHex{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}
  @keyframes counterRotate{from{transform:rotate(360deg)}to{transform:rotate(0deg)}}

  /* ── PARTICLE PULSE ── */
  @keyframes particlePulse{0%,100%{opacity:.5;r:2.5}50%{opacity:1;r:4}}

  /* ── FADE IN / SLIDE UP ── */
  @keyframes fadeUp{from{opacity:0;transform:translateY(32px)}to{opacity:1;transform:translateY(0)}}
  @keyframes fadeIn{from{opacity:0}to{opacity:1}}
  @keyframes slideRight{from{opacity:0;transform:translateX(-24px)}to{opacity:1;transform:translateX(0)}}
  @keyframes scaleIn{from{opacity:0;transform:scale(.9)}to{opacity:1;transform:scale(1)}}
  .fade-up{opacity:0;animation:fadeUp .75s cubic-bezier(.25,.46,.45,.94) forwards}
  .d0{animation-delay:0s}.d1{animation-delay:.12s}.d2{animation-delay:.26s}
  .d3{animation-delay:.42s}.d4{animation-delay:.58s}.d5{animation-delay:.74s}

  /* ── SCROLL REVEAL ── */
  .reveal{opacity:0;transform:translateY(28px);transition:opacity .7s cubic-bezier(.25,.46,.45,.94),transform .7s cubic-bezier(.25,.46,.45,.94)}
  .reveal.in{opacity:1;transform:translateY(0)}
  .reveal-left{opacity:0;transform:translateX(-28px);transition:opacity .7s cubic-bezier(.25,.46,.45,.94),transform .7s cubic-bezier(.25,.46,.45,.94)}
  .reveal-left.in{opacity:1;transform:translateX(0)}
  .reveal-right{opacity:0;transform:translateX(28px);transition:opacity .7s cubic-bezier(.25,.46,.45,.94),transform .7s cubic-bezier(.25,.46,.45,.94)}
  .reveal-right.in{opacity:1;transform:translateX(0)}

  /* ── SCROLLBAR ── */
  ::-webkit-scrollbar{width:3px}
  ::-webkit-scrollbar-track{background:#F1F3FA}
  ::-webkit-scrollbar-thumb{background:linear-gradient(180deg,#F0D597,#C79A38);border-radius:99px}

  /* ── TERMINAL ── */
  .terminal{
    background:#030510;
    border:1px solid rgba(16,185,129,.18);
    border-radius:12px;padding:24px 26px;
    font-family:'JetBrains Mono',monospace;
    font-size:12.5px;line-height:2;color:#10B981;
    box-shadow:0 0 0 1px rgba(16,185,129,.08),inset 0 0 40px rgba(0,0,0,.5);
  }
  .terminal-bar{
    display:flex;align-items:center;gap:8px;
    padding:10px 16px;background:rgba(255,255,255,.04);
    border-bottom:1px solid rgba(16,185,129,.1);
    border-radius:12px 12px 0 0;margin:-24px -26px 18px;
  }
  .t-dot{width:10px;height:10px;border-radius:50%}
  .terminal .prompt{color:#475569}
  .terminal .cmd{color:#F0D597}
  .terminal .comment{color:#334155}
  @keyframes blink{0%,100%{opacity:1}50%{opacity:0}}

  /* ── NODE MAP ── */
  .node{
    display:flex;flex-direction:column;align-items:center;gap:10px;
    cursor:pointer;
    transition:transform .32s cubic-bezier(.25,.46,.45,.94);
  }
  .node:hover{transform:scale(1.09) translateY(-3px)}
  .node-box{
    width:92px;height:92px;border-radius:18px;
    display:flex;flex-direction:column;align-items:center;
    justify-content:center;gap:6px;
    background:rgba(255,255,255,.92);
    border:1.5px solid rgba(199,154,56,.18);
    box-shadow:0 4px 22px rgba(0,0,0,.055),0 1px 0 rgba(255,255,255,.95) inset;
    transition:all .32s cubic-bezier(.25,.46,.45,.94);
  }
  .node:hover .node-box,.node.active .node-box{
    border-color:var(--nc,#C79A38);
    box-shadow:0 0 0 3px var(--ng,rgba(199,154,56,.15)),0 8px 32px rgba(0,0,0,.08),0 1px 0 rgba(255,255,255,.95) inset;
    background:#FFFFFF;
  }
  .node-label{
    font-family:'Space Grotesk',sans-serif;font-size:12px;
    font-weight:700;color:#0F172A;text-align:center;letter-spacing:.02em;
  }

  /* ── STACK LAYERS ── */
  .layer-item{
    padding:15px 20px;border-radius:12px;
    display:flex;align-items:center;justify-content:space-between;
    cursor:pointer;
    transition:all .28s cubic-bezier(.25,.46,.45,.94);
    border:1.5px solid rgba(199,154,56,.1);
    background:rgba(255,255,255,.72);
    border-left:3px solid transparent;
  }
  .layer-item:hover{
    background:rgba(255,255,255,.95);
    box-shadow:0 4px 24px rgba(0,0,0,.055);
  }

  /* ── PROGRESS BARS ── */
  .progress-track{height:3px;background:rgba(255,255,255,.08);border-radius:99px;overflow:hidden}
  .progress-fill{height:100%;border-radius:99px;transition:width 1.2s cubic-bezier(.25,.46,.45,.94)}

  /* ── FOOTER ── */
  footer{background:#0A0B1A;color:#94A3B8;position:relative;z-index:1}

  /* ── FORM ── */
  .field label{
    font-family:'JetBrains Mono',monospace;font-size:9px;
    letter-spacing:.2em;text-transform:uppercase;color:#94A3B8;
    display:block;margin-bottom:7px;
  }
  .field input,.field select,.field textarea{
    width:100%;padding:13px 17px;
    background:rgba(255,255,255,.72);
    border:1.5px solid rgba(199,154,56,.18);
    border-radius:10px;font-family:'Inter',sans-serif;
    font-size:13px;color:#0F172A;
    transition:border-color .22s,box-shadow .22s,background .22s;
    outline:none;
    backdrop-filter:blur(8px);
  }
  .field input:focus,.field select:focus,.field textarea:focus{
    border-color:rgba(199,154,56,.55);
    background:rgba(255,255,255,.92);
    box-shadow:0 0 0 3px rgba(199,154,56,.1);
  }
  .field input::placeholder,.field textarea::placeholder{color:#CBD5E1}

  /* ── SANKEY / FLOW ── */
  @keyframes flowAnim{from{stroke-dashoffset:300}to{stroke-dashoffset:0}}
  @keyframes flowDash{from{stroke-dashoffset:200}to{stroke-dashoffset:0}}

  /* ── MOBILE ── */
  .mobile-menu{display:none}
  @media(max-width:900px){
    .nav-links,.nav-cta{display:none!important}
    .mobile-toggle{display:flex!important}
    .container{padding:0 20px}
    .nav-inner{padding:15px 20px}
  }
  .mobile-toggle{
    display:none;background:none;border:none;cursor:pointer;
    color:#64748B;align-items:center;justify-content:center;
  }
  @media(max-width:700px){
    .hero-hud-left,.hero-hud-right{display:none!important}
    .two-col{grid-template-columns:1fr!important}
  }

  /* ── FEATURE TAG ── */
  .tag{
    display:inline-flex;align-items:center;
    font-family:'JetBrains Mono',monospace;font-size:9px;
    font-weight:500;letter-spacing:.1em;text-transform:uppercase;
    padding:3px 10px;border-radius:5px;
  }

  /* ── TOOLTIP / ANNOTATION ── */
  .annotation{
    font-family:'JetBrains Mono',monospace;font-size:8px;
    letter-spacing:.14em;text-transform:uppercase;
    color:#94A3B8;
  }

  /* ── HERO GLOW EFFECT ── */
  .hero-glow{
    position:absolute;
    border-radius:50%;
    pointer-events:none;
    animation:heroGlowPulse 6s ease-in-out infinite;
  }
  @keyframes heroGlowPulse{0%,100%{opacity:.5;transform:scale(1)}50%{opacity:.8;transform:scale(1.05)}}

  /* ── SECTION INTRO LINES ── */
  .section-intro-line{
    width:40px;height:2px;
    background:linear-gradient(90deg,#C79A38,#F0D597);
    border-radius:99px;margin-bottom:16px;
  }

  /* ── NUMBER ACCENT ── */
  .num-accent{
    font-family:'Space Grotesk',sans-serif;
    font-size:72px;font-weight:800;
    background:linear-gradient(135deg,rgba(199,154,56,.12),rgba(199,154,56,.04));
    -webkit-background-clip:text;background-clip:text;
    -webkit-text-fill-color:transparent;
    position:absolute;top:-16px;left:-8px;
    line-height:1;pointer-events:none;
    letter-spacing:-.04em;
  }
`

export function layout(title: string, body: string, activePage: string = ''): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width,initial-scale=1.0"/>
  <title>${title} — Mansas Moguls</title>
  <meta name="description" content="Mansas Moguls: The Empire Operating System. Building, acquiring, and scaling transformative businesses through capital intelligence, operational excellence, and strategic vision."/>
  <meta property="og:title" content="${title} — Mansas Moguls"/>
  <meta property="og:description" content="Empire Operating System — One Vision, Six Divisions, Infinite Impact"/>
  <style>${globalCSS}</style>
</head>
<body>

<div class="grid-bg"></div>
<div id="cursor-ring"></div>
<div id="cursor-dot"></div>

<!-- ─── NAV ─── -->
<nav id="nav">
  <div class="nav-inner">
    <a href="/" class="nav-logo">
      <div style="position:relative;width:40px;height:40px">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <polygon points="20,2 37,11 37,29 20,38 3,29 3,11" fill="#1E1B4B"/>
          <polygon points="20,2 37,11 37,29 20,38 3,29 3,11" fill="none" stroke="url(#ng)" stroke-width="1.5"/>
          <defs>
            <linearGradient id="ng" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#F0D597"/>
              <stop offset="50%" stop-color="#C79A38"/>
              <stop offset="100%" stop-color="#8B6914"/>
            </linearGradient>
          </defs>
          <path d="M11 29L13.5 18L18 25L20 16L22 25L26.5 18L29 29Z" fill="url(#ng)"/>
          <rect x="11" y="29" width="18" height="3.5" rx="1.75" fill="url(#ng)"/>
          <polygon points="20,14 22.2,19 20,20.5 17.8,19" fill="#4338CA"/>
        </svg>
      </div>
      <div>
        <div class="font-display gold-shimmer" style="font-size:13.5px;font-weight:800;letter-spacing:.16em;text-transform:uppercase">Mansas Moguls</div>
        <div class="font-mono" style="font-size:7.5px;letter-spacing:.26em;color:#94A3B8;text-transform:uppercase;margin-top:1px">Empire Operating System</div>
      </div>
    </a>
    <nav class="nav-links">
      <a href="/" class="nav-link ${activePage==='home'?'active':''}">Home</a>
      <a href="/divisions" class="nav-link ${activePage==='divisions'||activePage==='division'?'active':''}">The System</a>
      <a href="/oracle-os" class="nav-link ${activePage==='oracle'?'active':''}">Oracle OS</a>
      <a href="/about" class="nav-link ${activePage==='about'?'active':''}">About</a>
    </nav>
    <div class="nav-cta">
      <a href="/contact" class="btn btn-gold" style="padding:10px 22px;font-size:10.5px;letter-spacing:.09em">Launch Request</a>
    </div>
    <button class="mobile-toggle" onclick="document.getElementById('mmenu').classList.toggle('open')" aria-label="Menu" style="padding:8px">
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" stroke-width="1.8">
        <line x1="3" y1="6" x2="19" y2="6"/><line x1="3" y1="11" x2="19" y2="11"/><line x1="3" y1="16" x2="19" y2="16"/>
      </svg>
    </button>
  </div>
  <div id="mmenu" class="mobile-menu" style="background:rgba(248,249,252,.97);backdrop-filter:blur(24px);border-top:1px solid rgba(199,154,56,.1);padding:12px 20px 20px">
    ${[['Home','/'],['The System','/divisions'],['Oracle OS','/oracle-os'],['About','/about']].map(([l,h])=>`<a href="${h}" style="display:block;padding:11px 0;font-family:'Space Grotesk',sans-serif;font-size:14px;font-weight:600;color:#475569;text-decoration:none;border-bottom:1px solid rgba(199,154,56,.07)">${l}</a>`).join('')}
    <a href="/contact" class="btn btn-gold" style="margin-top:14px;width:100%;justify-content:center">Launch Request</a>
  </div>
</nav>

<!-- ─── MAIN ─── -->
<main style="position:relative;z-index:1">
${body}
</main>

<!-- ─── FOOTER ─── -->
<footer>
  <div style="height:1px;background:linear-gradient(90deg,transparent,rgba(199,154,56,.4),transparent)"></div>
  <div class="container" style="padding-top:64px;padding-bottom:40px">
    <div style="display:grid;grid-template-columns:2.2fr 1fr 1fr;gap:52px;padding-bottom:48px;border-bottom:1px solid rgba(255,255,255,.05)">
      <div>
        <div class="font-display gold-shimmer" style="font-size:20px;font-weight:800;letter-spacing:.14em;text-transform:uppercase;margin-bottom:5px">Mansas Moguls</div>
        <div class="font-mono" style="font-size:8.5px;color:#334155;letter-spacing:.24em;text-transform:uppercase;margin-bottom:18px">Empire Operating System</div>
        <p style="font-size:13px;color:#475569;line-height:1.8;max-width:320px">Building, acquiring, and scaling transformative businesses through capital intelligence, operational supremacy, and long-horizon strategic vision.</p>
        <div class="status-bar" style="margin-top:22px">
          <div class="status-item"><div class="status-dot" style="background:#10B981;animation:pulse-dot 2s infinite"></div><span style="color:#10B981">SYSTEMS ACTIVE</span></div>
          <div class="status-item"><div class="status-dot" style="background:#C79A38"></div><span>v2.0.1</span></div>
        </div>
      </div>
      <div>
        <div class="label" style="margin-bottom:22px">The Empire</div>
        <div style="display:flex;flex-direction:column;gap:11px">
          ${[['Moguls AI','/divisions/moguls-ai'],['Oracle OS','/oracle-os'],['Moguls Studio','/divisions/moguls-studio'],['Moguls Growth','/divisions/moguls-growth'],['Moguls Academy','/divisions/moguls-academy'],['Moguls Labs','/divisions/moguls-labs']].map(([l,h])=>`<a href="${h}" style="font-size:13px;color:#475569;text-decoration:none;transition:color .2s;display:flex;align-items:center;gap:6px" onmouseover="this.style.color='#C79A38'" onmouseout="this.style.color='#475569'"><span style="font-size:9px;opacity:.4">›</span>${l}</a>`).join('')}
        </div>
      </div>
      <div>
        <div class="label" style="margin-bottom:22px">Company</div>
        <div style="display:flex;flex-direction:column;gap:11px">
          ${[['About','/about'],['Contact Us','/contact'],['Launch Request','/contact']].map(([l,h])=>`<a href="${h}" style="font-size:13px;color:#475569;text-decoration:none;transition:color .2s;display:flex;align-items:center;gap:6px" onmouseover="this.style.color='#C79A38'" onmouseout="this.style.color='#475569'"><span style="font-size:9px;opacity:.4">›</span>${l}</a>`).join('')}
        </div>
        <div style="margin-top:32px">
          <div class="label" style="margin-bottom:12px">Core Pillars</div>
          ${['CAPITAL · INTELLIGENCE','OPERATIONAL · EXCELLENCE','STRATEGIC · VISION','LEGACY · BUILDING'].map(p=>`<div class="font-mono" style="font-size:8.5px;color:#334155;letter-spacing:.1em;margin-bottom:6px">${p}</div>`).join('')}
        </div>
      </div>
    </div>
    <div style="display:flex;justify-content:space-between;align-items:center;padding-top:26px;flex-wrap:wrap;gap:12px">
      <div class="font-mono" style="font-size:9.5px;color:#334155;letter-spacing:.1em">© ${new Date().getFullYear()} Mansas Moguls. All rights reserved.</div>
      <div class="font-mono" style="font-size:9.5px;color:#2A3344;letter-spacing:.14em">DISCIPLINE · INTELLIGENCE · INNOVATION · IMPACT</div>
    </div>
  </div>
</footer>

<script>
// ── CURSOR ──
const ring = document.getElementById('cursor-ring');
const dot  = document.getElementById('cursor-dot');
let mx=0,my=0,rx=0,ry=0;
document.addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY});
document.addEventListener('mousedown',()=>ring.classList.add('click'));
document.addEventListener('mouseup',()=>ring.classList.remove('click'));
(function tick(){
  rx+=(mx-rx)*.12;ry+=(my-ry)*.12;
  ring.style.left=rx+'px';ring.style.top=ry+'px';
  dot.style.left=mx+'px';dot.style.top=my+'px';
  requestAnimationFrame(tick)
})();
document.querySelectorAll('a,button,[data-h]').forEach(el=>{
  el.addEventListener('mouseenter',()=>ring.classList.add('hov'));
  el.addEventListener('mouseleave',()=>ring.classList.remove('hov'));
});

// ── NAV SCROLL ──
const nav = document.getElementById('nav');
window.addEventListener('scroll',()=>{
  nav.classList.toggle('scrolled',window.scrollY>50);
},{ passive:true });

// ── SCROLL REVEAL ──
const obs = new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      e.target.classList.add('in');
      obs.unobserve(e.target);
    }
  });
},{threshold:.12,rootMargin:'0px 0px -40px 0px'});
document.querySelectorAll('.reveal,.reveal-left,.reveal-right').forEach(el=>obs.observe(el));
</script>
</body>
</html>`
}
