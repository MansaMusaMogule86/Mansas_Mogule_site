export const globalCSS = `
  @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700;800&family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@300;400;500;600&display=swap');

  *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
  html{scroll-behavior:smooth;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}
  body{
    font-family:'Inter',sans-serif;
    background:#F8F9FC;
    color:#0F172A;
    overflow-x:hidden;
    cursor:none;
  }

  /* ── CURSOR ── */
  #cursor-ring{
    position:fixed;width:36px;height:36px;
    border:1.5px solid rgba(199,154,56,.7);border-radius:50%;
    pointer-events:none;z-index:99999;
    transform:translate(-50%,-50%);
    transition:width .3s cubic-bezier(.25,.46,.45,.94),height .3s cubic-bezier(.25,.46,.45,.94),background .3s,border-color .3s,opacity .25s;
  }
  #cursor-ring.hov{width:56px;height:56px;background:rgba(199,154,56,.1);border-color:#F0D597;border-width:1.5px}
  #cursor-ring.click{width:22px;height:22px;background:rgba(199,154,56,.22);transition-duration:.1s}
  #cursor-dot{
    position:fixed;width:5px;height:5px;
    background:#C79A38;border-radius:50%;
    pointer-events:none;z-index:99999;
    transform:translate(-50%,-50%);
    box-shadow:0 0 6px rgba(199,154,56,.8);
  }

  /* ── NOISE OVERLAY ── */
  body::after{
    content:'';position:fixed;inset:0;pointer-events:none;z-index:0;
    opacity:.018;
    background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
    background-repeat:repeat;background-size:200px;
  }

  /* ── GRID BG ── */
  .grid-bg{
    position:fixed;inset:0;pointer-events:none;z-index:0;
    background-image:
      linear-gradient(rgba(199,154,56,.025) 1px,transparent 1px),
      linear-gradient(90deg,rgba(199,154,56,.025) 1px,transparent 1px);
    background-size:80px 80px;
  }
  .grid-bg::after{
    content:'';position:absolute;inset:0;
    background:radial-gradient(ellipse 90% 70% at 50% 0%,rgba(248,249,252,0) 0%,rgba(248,249,252,.85) 100%);
  }

  /* ── GLASS ── */
  .glass{
    background:rgba(255,255,255,.75);
    backdrop-filter:blur(28px) saturate(200%);
    -webkit-backdrop-filter:blur(28px) saturate(200%);
    border:1px solid rgba(199,154,56,.18);
    box-shadow:0 8px 40px rgba(31,38,135,.06),0 1px 0 rgba(255,255,255,.98) inset,0 0 0 1px rgba(255,255,255,.35);
  }
  .glass-dark{
    background:rgba(10,11,26,.9);
    backdrop-filter:blur(28px);
    -webkit-backdrop-filter:blur(28px);
    border:1px solid rgba(199,154,56,.14);
    box-shadow:0 8px 48px rgba(0,0,0,.5),0 1px 0 rgba(255,255,255,.04) inset;
  }
  .glass-violet{
    background:rgba(30,27,75,.85);
    backdrop-filter:blur(28px);
    border:1px solid rgba(139,92,246,.2);
    box-shadow:0 8px 48px rgba(0,0,0,.4);
  }
  .glass-card{
    background:rgba(255,255,255,.82);
    backdrop-filter:blur(20px) saturate(180%);
    -webkit-backdrop-filter:blur(20px) saturate(180%);
    border:1px solid rgba(199,154,56,.14);
    border-radius:20px;
    box-shadow:0 4px 24px rgba(31,38,135,.05),0 1px 0 rgba(255,255,255,.96) inset;
    transition:transform .35s cubic-bezier(.25,.46,.45,.94),box-shadow .35s cubic-bezier(.25,.46,.45,.94),border-color .35s;
  }
  .glass-card:hover{
    transform:translateY(-6px);
    border-color:rgba(199,154,56,.3);
    box-shadow:0 20px 60px rgba(31,38,135,.1),0 1px 0 rgba(255,255,255,.98) inset;
  }

  /* ── GOLD TEXT ── */
  .gold{
    background:linear-gradient(135deg,#F0D597 0%,#C79A38 45%,#A07828 100%);
    -webkit-background-clip:text;background-clip:text;
    -webkit-text-fill-color:transparent;
  }
  .gold-shimmer{
    background:linear-gradient(135deg,#F0D597 0%,#E8C460 20%,#C79A38 50%,#A07828 78%,#F0D597 100%);
    background-size:300% auto;
    -webkit-background-clip:text;background-clip:text;
    -webkit-text-fill-color:transparent;
    animation:shimmer 7s linear infinite;
  }
  .violet-text{
    background:linear-gradient(135deg,#C4B5FD,#8B5CF6,#6D28D9);
    -webkit-background-clip:text;background-clip:text;
    -webkit-text-fill-color:transparent;
  }
  @keyframes shimmer{to{background-position:300% center}}

  /* ── TYPOGRAPHY ── */
  .font-display{font-family:'Space Grotesk',sans-serif}
  .font-mono{font-family:'JetBrains Mono',monospace}
  .label{
    font-family:'JetBrains Mono',monospace;
    font-size:9.5px;letter-spacing:.26em;
    text-transform:uppercase;color:#C79A38;opacity:.95;
  }
  .annotation{
    font-family:'JetBrains Mono',monospace;font-size:8px;
    letter-spacing:.14em;text-transform:uppercase;
    color:#94A3B8;
  }

  /* ── NAV ── */
  nav#nav{
    position:fixed;top:0;left:0;right:0;z-index:100;
    padding:0;
    transition:all .38s cubic-bezier(.25,.46,.45,.94);
  }
  nav#nav.scrolled{
    background:rgba(248,249,252,.93);
    backdrop-filter:blur(28px) saturate(200%);
    -webkit-backdrop-filter:blur(28px) saturate(200%);
    border-bottom:1px solid rgba(199,154,56,.1);
    box-shadow:0 4px 40px rgba(0,0,0,.05);
  }
  .nav-inner{
    max-width:1360px;margin:0 auto;padding:20px 44px;
    display:flex;align-items:center;justify-content:space-between;
  }
  .nav-logo{display:flex;align-items:center;gap:14px;text-decoration:none}
  .nav-links{display:flex;align-items:center;gap:44px}
  .nav-link{
    font-family:'Space Grotesk',sans-serif;font-size:11px;
    font-weight:700;letter-spacing:.12em;text-transform:uppercase;
    color:#64748B;text-decoration:none;
    position:relative;padding:5px 0;transition:color .2s;
  }
  .nav-link::after{
    content:'';position:absolute;bottom:-4px;left:0;
    width:0;height:1.5px;
    background:linear-gradient(90deg,#F0D597,#C79A38);
    transition:width .35s cubic-bezier(.25,.46,.45,.94);
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
    border-radius:9px;transition:all .3s cubic-bezier(.25,.46,.45,.94);
    position:relative;overflow:hidden;
  }
  .btn::before{
    content:'';position:absolute;inset:0;
    background:linear-gradient(135deg,rgba(255,255,255,.22),transparent);
    opacity:0;transition:opacity .3s;
  }
  .btn:hover::before{opacity:1}
  .btn-gold{
    padding:14px 32px;
    background:linear-gradient(135deg,#F0D597 0%,#C79A38 50%,#9A7028 100%);
    color:#0A0B1A;
    box-shadow:0 4px 28px rgba(199,154,56,.42),0 1px 0 rgba(255,255,255,.32) inset;
  }
  .btn-gold:hover{
    box-shadow:0 8px 48px rgba(199,154,56,.62),0 1px 0 rgba(255,255,255,.32) inset;
    transform:translateY(-2px);
  }
  .btn-gold:active{transform:translateY(0)}
  .btn-outline{
    padding:13px 30px;
    background:transparent;color:#C79A38;
    border:1.5px solid rgba(199,154,56,.35);
  }
  .btn-outline:hover{
    background:rgba(199,154,56,.07);
    border-color:rgba(199,154,56,.65);
    transform:translateY(-2px);
    box-shadow:0 8px 32px rgba(199,154,56,.12);
  }
  .btn-dark{
    padding:13px 30px;
    background:rgba(255,255,255,.06);color:#E2E8F0;
    border:1px solid rgba(255,255,255,.12);
  }
  .btn-dark:hover{background:rgba(255,255,255,.12);border-color:rgba(255,255,255,.2);transform:translateY(-2px)}
  .btn-violet{
    padding:13px 30px;
    background:rgba(139,92,246,.12);color:#A78BFA;
    border:1px solid rgba(139,92,246,.28);
  }
  .btn-violet:hover{background:rgba(139,92,246,.2);border-color:rgba(139,92,246,.5);transform:translateY(-2px)}

  /* ── BADGE ── */
  .badge{
    display:inline-flex;align-items:center;gap:5px;
    font-family:'JetBrains Mono',monospace;font-size:9px;
    font-weight:600;letter-spacing:.14em;text-transform:uppercase;
    padding:4px 12px;border-radius:999px;
  }
  .badge::before{content:'';width:4.5px;height:4.5px;border-radius:50%;flex-shrink:0}
  .badge-green{background:rgba(16,185,129,.1);color:#10B981;border:1px solid rgba(16,185,129,.22)}
  .badge-green::before{background:#10B981;animation:pulse-dot 2s ease-in-out infinite}
  .badge-amber{background:rgba(245,158,11,.1);color:#F59E0B;border:1px solid rgba(245,158,11,.22)}
  .badge-amber::before{background:#F59E0B}
  .badge-violet{background:rgba(139,92,246,.1);color:#8B5CF6;border:1px solid rgba(139,92,246,.22)}
  .badge-violet::before{background:#8B5CF6}
  @keyframes pulse-dot{0%,100%{box-shadow:0 0 0 0 rgba(16,185,129,.5)}60%{box-shadow:0 0 0 4px rgba(16,185,129,0)}}

  /* ── DIVIDER ── */
  .divider{height:1px;background:linear-gradient(90deg,transparent,rgba(199,154,56,.25),transparent)}

  /* ── SECTIONS ── */
  section{position:relative;z-index:1}
  .container{max-width:1360px;margin:0 auto;padding:0 44px}
  .section-title{
    font-family:'Space Grotesk',sans-serif;font-weight:800;
    line-height:1.07;letter-spacing:-.025em;
  }

  /* ── HUD METRIC ── */
  .metric{border-left:2px solid rgba(199,154,56,.3);padding-left:14px}

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
  @keyframes floatBadge{0%,100%{transform:translateX(-50%) translateY(0)}50%{transform:translateX(-50%) translateY(-13px)}}
  @keyframes glowGold{
    0%,100%{box-shadow:0 0 50px rgba(67,56,202,.4),0 0 100px rgba(67,56,202,.12),inset 0 1px 0 rgba(255,255,255,.08)}
    50%{box-shadow:0 0 80px rgba(67,56,202,.65),0 0 160px rgba(67,56,202,.2),0 0 220px rgba(139,92,246,.08),inset 0 1px 0 rgba(255,255,255,.12)}
  }

  /* ── HERO GLOW EFFECT ── */
  .hero-glow{
    position:absolute;border-radius:50%;pointer-events:none;
    animation:heroGlowPulse 7s ease-in-out infinite;
  }
  @keyframes heroGlowPulse{0%,100%{opacity:.45}50%{opacity:.8}}

  /* ── FADE IN / SLIDE UP ── */
  @keyframes fadeUp{from{opacity:0;transform:translateY(36px)}to{opacity:1;transform:translateY(0)}}
  @keyframes fadeIn{from{opacity:0}to{opacity:1}}
  @keyframes slideRight{from{opacity:0;transform:translateX(-28px)}to{opacity:1;transform:translateX(0)}}
  @keyframes slideLeft{from{opacity:0;transform:translateX(28px)}to{opacity:1;transform:translateX(0)}}
  @keyframes scaleIn{from{opacity:0;transform:scale(.92)}to{opacity:1;transform:scale(1)}}
  .fade-up{opacity:0;animation:fadeUp .8s cubic-bezier(.25,.46,.45,.94) forwards}
  .d0{animation-delay:0s}.d1{animation-delay:.14s}.d2{animation-delay:.28s}
  .d3{animation-delay:.44s}.d4{animation-delay:.62s}.d5{animation-delay:.8s}

  /* ── SCROLL REVEAL ── */
  .reveal{opacity:0;transform:translateY(30px);transition:opacity .75s cubic-bezier(.25,.46,.45,.94),transform .75s cubic-bezier(.25,.46,.45,.94)}
  .reveal.in{opacity:1;transform:translateY(0)}
  .reveal-left{opacity:0;transform:translateX(-30px);transition:opacity .75s cubic-bezier(.25,.46,.45,.94),transform .75s cubic-bezier(.25,.46,.45,.94)}
  .reveal-left.in{opacity:1;transform:translateX(0)}
  .reveal-right{opacity:0;transform:translateX(30px);transition:opacity .75s cubic-bezier(.25,.46,.45,.94),transform .75s cubic-bezier(.25,.46,.45,.94)}
  .reveal-right.in{opacity:1;transform:translateX(0)}

  /* ── SCROLLBAR ── */
  ::-webkit-scrollbar{width:3px}
  ::-webkit-scrollbar-track{background:transparent}
  ::-webkit-scrollbar-thumb{background:linear-gradient(180deg,#F0D597,#C79A38);border-radius:99px}

  /* ── TERMINAL ── */
  .terminal{
    background:#020409;
    border:1px solid rgba(16,185,129,.16);
    border-radius:12px;padding:24px 26px;
    font-family:'JetBrains Mono',monospace;
    font-size:12.5px;line-height:2.1;color:#10B981;
    box-shadow:0 0 0 1px rgba(16,185,129,.07),inset 0 0 60px rgba(0,0,0,.6);
    position:relative;
  }
  .terminal::before{
    content:'';position:absolute;inset:0;border-radius:12px;
    background:radial-gradient(ellipse 80% 60% at 50% 0%,rgba(16,185,129,.04) 0%,transparent 70%);
    pointer-events:none;
  }
  .terminal-bar{
    display:flex;align-items:center;gap:8px;
    padding:10px 16px;background:rgba(255,255,255,.03);
    border-bottom:1px solid rgba(16,185,129,.09);
    border-radius:12px 12px 0 0;margin:-24px -26px 20px;
  }
  .t-dot{width:10px;height:10px;border-radius:50%}
  .terminal .prompt{color:#334155}
  .terminal .cmd{color:#F0D597}
  .terminal .comment{color:#1E293B}
  @keyframes blink{0%,100%{opacity:1}50%{opacity:0}}

  /* ── NODE MAP ── */
  .node{
    display:flex;flex-direction:column;align-items:center;gap:10px;
    cursor:pointer;
    transition:transform .32s cubic-bezier(.25,.46,.45,.94);
  }
  .node:hover{transform:scale(1.1) translateY(-4px)}
  .node-box{
    width:96px;height:96px;border-radius:20px;
    display:flex;flex-direction:column;align-items:center;
    justify-content:center;gap:6px;
    background:rgba(255,255,255,.9);
    border:1.5px solid rgba(199,154,56,.16);
    box-shadow:0 4px 20px rgba(0,0,0,.055),0 1px 0 rgba(255,255,255,.98) inset;
    transition:all .32s cubic-bezier(.25,.46,.45,.94);
    position:relative;overflow:hidden;
  }
  .node-box::before{
    content:'';position:absolute;inset:0;border-radius:20px;
    background:radial-gradient(circle at 50% 0%,rgba(255,255,255,.5),transparent 70%);
    pointer-events:none;
  }
  .node:hover .node-box,.node.active .node-box{
    border-color:var(--nc,#C79A38);
    box-shadow:0 0 0 3px var(--ng,rgba(199,154,56,.15)),0 8px 36px rgba(0,0,0,.1),0 1px 0 rgba(255,255,255,.98) inset;
    background:#FFFFFF;
  }
  .node-label{
    font-family:'Space Grotesk',sans-serif;font-size:12.5px;
    font-weight:700;color:#0F172A;text-align:center;letter-spacing:.02em;
  }

  /* ── STACK LAYERS ── */
  .layer-item{
    padding:16px 20px;border-radius:14px;
    display:flex;align-items:center;justify-content:space-between;
    cursor:pointer;
    transition:all .28s cubic-bezier(.25,.46,.45,.94);
    border:1.5px solid rgba(199,154,56,.1);
    background:rgba(255,255,255,.68);
    border-left:3px solid transparent;
  }
  .layer-item:hover{
    background:rgba(255,255,255,.95);
    box-shadow:0 4px 28px rgba(0,0,0,.06);
    border-color:rgba(199,154,56,.18);
  }

  /* ── PROGRESS BARS ── */
  .progress-track{height:3px;background:rgba(255,255,255,.07);border-radius:99px;overflow:hidden}
  .progress-fill{height:100%;border-radius:99px;transition:width 1.4s cubic-bezier(.25,.46,.45,.94)}

  /* ── FOOTER ── */
  footer{background:#070810;color:#94A3B8;position:relative;z-index:1;border-top:1px solid rgba(199,154,56,.1)}

  /* ── FORM ── */
  .field label{
    font-family:'JetBrains Mono',monospace;font-size:9px;
    letter-spacing:.2em;text-transform:uppercase;color:#94A3B8;
    display:block;margin-bottom:8px;
  }
  .field input,.field select,.field textarea{
    width:100%;padding:14px 18px;
    background:rgba(255,255,255,.7);
    border:1.5px solid rgba(199,154,56,.16);
    border-radius:11px;font-family:'Inter',sans-serif;
    font-size:13.5px;color:#0F172A;
    transition:border-color .22s,box-shadow .22s,background .22s;
    outline:none;
    backdrop-filter:blur(8px);
  }
  .field input:focus,.field select:focus,.field textarea:focus{
    border-color:rgba(199,154,56,.5);
    background:rgba(255,255,255,.94);
    box-shadow:0 0 0 4px rgba(199,154,56,.09);
  }
  .field input::placeholder,.field textarea::placeholder{color:#CBD5E1}

  /* ── SANKEY / FLOW ── */
  @keyframes flowAnim{from{stroke-dashoffset:300}to{stroke-dashoffset:0}}
  @keyframes flowDash{from{stroke-dashoffset:200}to{stroke-dashoffset:0}}

  /* ── SECTION INTRO LINES ── */
  .section-intro-line{
    width:44px;height:2.5px;
    background:linear-gradient(90deg,#C79A38,#F0D597,#C79A38);
    border-radius:99px;margin-bottom:18px;
    box-shadow:0 0 8px rgba(199,154,56,.35);
  }

  /* ── NUMBER ACCENT ── */
  .num-accent{
    font-family:'Space Grotesk',sans-serif;
    font-size:80px;font-weight:800;
    background:linear-gradient(135deg,rgba(199,154,56,.1),rgba(199,154,56,.03));
    -webkit-background-clip:text;background-clip:text;
    -webkit-text-fill-color:transparent;
    position:absolute;top:-20px;left:-10px;
    line-height:1;pointer-events:none;
    letter-spacing:-.04em;user-select:none;
  }

  /* ── PARTICLE PULSE ── */
  @keyframes particlePulse{0%,100%{opacity:.5}50%{opacity:1}}

  /* ── GLOW LINE ── */
  .glow-line{
    height:1px;
    background:linear-gradient(90deg,transparent 0%,rgba(199,154,56,.4) 30%,rgba(199,154,56,.7) 50%,rgba(199,154,56,.4) 70%,transparent 100%);
    box-shadow:0 0 8px rgba(199,154,56,.25);
  }

  /* ── TAG ── */
  .tag{
    display:inline-flex;align-items:center;
    font-family:'JetBrains Mono',monospace;font-size:9px;
    font-weight:500;letter-spacing:.1em;text-transform:uppercase;
    padding:3px 10px;border-radius:5px;
  }

  /* ── DIVISION CARD ── */
  .div-card{
    border-radius:22px;overflow:hidden;
    background:rgba(255,255,255,.82);
    backdrop-filter:blur(20px);
    border:1px solid rgba(199,154,56,.12);
    box-shadow:0 4px 24px rgba(31,38,135,.05),0 1px 0 rgba(255,255,255,.96) inset;
    transition:transform .38s cubic-bezier(.25,.46,.45,.94),box-shadow .38s cubic-bezier(.25,.46,.45,.94),border-color .38s;
    position:relative;
  }
  .div-card::before{
    content:'';position:absolute;top:0;left:0;right:0;height:3px;
    background:linear-gradient(90deg,var(--dc,#C79A38),var(--dc2,#F0D597));
    opacity:0;transition:opacity .38s;
  }
  .div-card:hover{
    transform:translateY(-7px);
    box-shadow:0 24px 64px rgba(31,38,135,.1),0 1px 0 rgba(255,255,255,.98) inset;
    border-color:rgba(199,154,56,.28);
  }
  .div-card:hover::before{opacity:1}

  /* ── MOBILE ── */
  .mobile-menu{display:none}
  @media(max-width:920px){
    .nav-links,.nav-cta{display:none!important}
    .mobile-toggle{display:flex!important}
    .container{padding:0 22px}
    .nav-inner{padding:16px 22px}
  }
  .mobile-toggle{
    display:none;background:none;border:none;cursor:pointer;
    color:#64748B;align-items:center;justify-content:center;
  }
  @media(max-width:720px){
    .hero-hud-left,.hero-hud-right{display:none!important}
    .two-col{grid-template-columns:1fr!important}
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
  <meta name="theme-color" content="#1E1B4B"/>
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
      <div style="position:relative;width:42px;height:42px">
        <svg width="42" height="42" viewBox="0 0 42 42" fill="none">
          <polygon points="21,2 39,11.5 39,30.5 21,40 3,30.5 3,11.5" fill="#1E1B4B"/>
          <polygon points="21,2 39,11.5 39,30.5 21,40 3,30.5 3,11.5" fill="none" stroke="url(#nlg)" stroke-width="1.5"/>
          <defs>
            <linearGradient id="nlg" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#F0D597"/>
              <stop offset="50%" stop-color="#C79A38"/>
              <stop offset="100%" stop-color="#8B6914"/>
            </linearGradient>
          </defs>
          <path d="M11.5 30L14 18L18.5 25.5L21 15.5L23.5 25.5L28 18L30.5 30Z" fill="url(#nlg)"/>
          <rect x="11.5" y="30" width="19" height="3.5" rx="1.75" fill="url(#nlg)"/>
          <polygon points="21,13.5 23.2,18.5 21,20 18.8,18.5" fill="#4338CA"/>
        </svg>
      </div>
      <div>
        <div class="font-display gold-shimmer" style="font-size:13.5px;font-weight:800;letter-spacing:.18em;text-transform:uppercase">Mansas Moguls</div>
        <div class="font-mono" style="font-size:7px;letter-spacing:.28em;color:#94A3B8;text-transform:uppercase;margin-top:1px">Empire Operating System</div>
      </div>
    </a>
    <nav class="nav-links">
      <a href="/" class="nav-link ${activePage==='home'?'active':''}">Home</a>
      <a href="/divisions" class="nav-link ${activePage==='divisions'||activePage==='division'?'active':''}">The System</a>
      <a href="/oracle-os" class="nav-link ${activePage==='oracle'?'active':''}">Oracle OS</a>
      <a href="/about" class="nav-link ${activePage==='about'?'active':''}">About</a>
    </nav>
    <div class="nav-cta">
      <a href="/contact" class="btn btn-gold" style="padding:10px 24px;font-size:10.5px">Launch Request</a>
    </div>
    <button class="mobile-toggle" onclick="document.getElementById('mmenu').classList.toggle('open')" aria-label="Menu" style="padding:8px">
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" stroke-width="1.8">
        <line x1="3" y1="6" x2="19" y2="6"/><line x1="3" y1="11" x2="19" y2="11"/><line x1="3" y1="16" x2="19" y2="16"/>
      </svg>
    </button>
  </div>
  <div id="mmenu" class="mobile-menu" style="background:rgba(248,249,252,.97);backdrop-filter:blur(28px);border-top:1px solid rgba(199,154,56,.1);padding:12px 22px 22px">
    ${[['Home','/'],['The System','/divisions'],['Oracle OS','/oracle-os'],['About','/about']].map(([l,h])=>`<a href="${h}" style="display:block;padding:12px 0;font-family:'Space Grotesk',sans-serif;font-size:14px;font-weight:600;color:#475569;text-decoration:none;border-bottom:1px solid rgba(199,154,56,.07)">${l}</a>`).join('')}
    <a href="/contact" class="btn btn-gold" style="margin-top:16px;width:100%;justify-content:center">Launch Request</a>
  </div>
</nav>

<!-- ─── MAIN ─── -->
<main style="position:relative;z-index:1">
${body}
</main>

<!-- ─── FOOTER ─── -->
<footer>
  <div style="height:1px;background:linear-gradient(90deg,transparent,rgba(199,154,56,.3),transparent)"></div>
  <div class="container" style="padding-top:64px;padding-bottom:40px">
    <div style="display:grid;grid-template-columns:2fr 1fr 1fr 1fr;gap:48px;margin-bottom:56px" class="two-col">

      <div>
        <a href="/" class="nav-logo" style="margin-bottom:22px;display:inline-flex">
          <svg width="38" height="38" viewBox="0 0 42 42" fill="none">
            <polygon points="21,2 39,11.5 39,30.5 21,40 3,30.5 3,11.5" fill="#1E1B4B" stroke="rgba(199,154,56,.45)" stroke-width="1.5"/>
            <path d="M11.5 30L14 18L18.5 25.5L21 15.5L23.5 25.5L28 18L30.5 30Z" fill="#C79A38"/>
            <rect x="11.5" y="30" width="19" height="3.5" rx="1.75" fill="#C79A38"/>
          </svg>
          <div style="margin-left:12px">
            <div class="font-display" style="font-size:13px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;background:linear-gradient(135deg,#F0D597,#C79A38);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent">Mansas Moguls</div>
            <div class="font-mono" style="font-size:7px;letter-spacing:.24em;color:#475569;text-transform:uppercase;margin-top:1px">Empire Operating System</div>
          </div>
        </a>
        <p style="font-size:13px;color:#475569;line-height:1.85;max-width:280px;margin-bottom:24px">Building, acquiring, and scaling transformative businesses through capital intelligence, operational supremacy, and long-horizon vision.</p>
        <div style="display:flex;gap:10px">
          ${[['IN','#0A66C2'],['TW','#1DA1F2'],['YT','#FF0000']].map(([l,c])=>`<div style="width:32px;height:32px;border-radius:8px;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.1);display:flex;align-items:center;justify-content:center;cursor:pointer;transition:all .2s" onmouseover="this.style.borderColor='${c}50';this.style.background='${c}15'" onmouseout="this.style.borderColor='rgba(255,255,255,.1)';this.style.background='rgba(255,255,255,.06)'"><span class="font-mono" style="font-size:9px;color:#475569;font-weight:600">${l}</span></div>`).join('')}
        </div>
      </div>

      <div>
        <div class="label" style="margin-bottom:18px;color:#C79A38">The System</div>
        ${[['Divisions Overview','/divisions'],['Moguls AI','/divisions/moguls-ai'],['Moguls Studio','/divisions/moguls-studio'],['Moguls Growth','/divisions/moguls-growth'],['Moguls Academy','/divisions/moguls-academy'],['Moguls Labs','/divisions/moguls-labs']].map(([l,h])=>`<a href="${h}" style="display:block;font-size:13px;color:#64748B;text-decoration:none;margin-bottom:10px;transition:color .2s" onmouseover="this.style.color='#C79A38'" onmouseout="this.style.color='#64748B'">${l}</a>`).join('')}
      </div>

      <div>
        <div class="label" style="margin-bottom:18px;color:#C79A38">Platform</div>
        ${[['Oracle OS','/oracle-os'],['About','/about'],['Contact','/contact']].map(([l,h])=>`<a href="${h}" style="display:block;font-size:13px;color:#64748B;text-decoration:none;margin-bottom:10px;transition:color .2s" onmouseover="this.style.color='#C79A38'" onmouseout="this.style.color='#64748B'">${l}</a>`).join('')}
      </div>

      <div>
        <div class="label" style="margin-bottom:18px;color:#C79A38">Core Pillars</div>
        ${['Capital Intelligence','Operational Excellence','Strategic Acquisitions','Legacy Building','Talent Systems'].map(p=>`<div style="font-size:12px;color:#475569;margin-bottom:10px;display:flex;align-items:center;gap:7px"><span style="color:rgba(199,154,56,.5);font-size:10px">◆</span>${p}</div>`).join('')}
      </div>
    </div>

    <div style="height:1px;background:rgba(255,255,255,.05);margin-bottom:28px"></div>

    <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:14px">
      <div class="font-mono" style="font-size:9px;color:#334155;letter-spacing:.14em">© 2025 MANSAS MOGULS EMPIRE LLC · ALL RIGHTS RESERVED</div>
      <div class="font-mono" style="font-size:9px;color:#334155;letter-spacing:.12em">BUILDING THE FUTURE · OWNING THE NOW · INSPIRING FOREVER</div>
    </div>
  </div>
</footer>

<script>
// ── CURSOR
var ring = document.getElementById('cursor-ring');
var dot = document.getElementById('cursor-dot');
var mx=0,my=0,rx=0,ry=0;
var raf = false;
function updateCursor(){
  rx += (mx-rx)*.14;
  ry += (my-ry)*.14;
  if(ring){ ring.style.left=rx+'px'; ring.style.top=ry+'px'; }
  if(dot){ dot.style.left=mx+'px'; dot.style.top=my+'px'; }
  raf=requestAnimationFrame(updateCursor);
}
document.addEventListener('mousemove',function(e){mx=e.clientX;my=e.clientY;if(!raf)updateCursor();},{passive:true});
document.addEventListener('mousedown',function(){if(ring)ring.classList.add('click')});
document.addEventListener('mouseup',function(){if(ring)ring.classList.remove('click')});
document.querySelectorAll('a,button,[data-h="1"]').forEach(function(el){
  el.addEventListener('mouseenter',function(){if(ring)ring.classList.add('hov')});
  el.addEventListener('mouseleave',function(){if(ring)ring.classList.remove('hov')});
});

// ── NAV SCROLL
var nav = document.getElementById('nav');
window.addEventListener('scroll',function(){
  if(nav) nav.classList[window.scrollY>60?'add':'remove']('scrolled');
},{passive:true});

// ── INTERSECTION OBSERVER
var io = new IntersectionObserver(function(entries){
  entries.forEach(function(e){
    if(e.isIntersecting){
      e.target.classList.add('in');
      // stagger siblings
      var parent = e.target.parentElement;
      if(parent){
        var revs = parent.querySelectorAll('.reveal:not(.in),.reveal-left:not(.in),.reveal-right:not(.in)');
        revs.forEach(function(s,i){ setTimeout(function(){ s.classList.add('in'); },i*80); });
      }
    }
  });
},{threshold:0.1,rootMargin:'0px 0px -40px 0px'});
document.querySelectorAll('.reveal,.reveal-left,.reveal-right').forEach(function(el){ io.observe(el); });
</script>
</body>
</html>`
}
