export const globalCSS = `
  @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700;800&family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@300;400;500;600&display=swap');

  :root {
    --color-gold: #C79A38;
    --color-gold-light: #F0D597;
    --color-gold-dark: #8B6914;
    --color-indigo: #1E1B4B;
    --color-indigo-light: #0E0D2E;
    --color-violet: #8B5CF6;
    --color-violet-light: #DDD6FE;
    --color-blue: #4338CA;
    --color-emerald: #10B981;
    --color-amber: #F59E0B;
    --color-pink: #EC4899;
    --color-white: #FFFFFF;
    --color-light: #F8F9FC;
    --color-text-primary: #0F172A;
    --color-text-secondary: #64748B;
    --color-text-tertiary: #94A3B8;
    --color-border: #CBD5E1;
    --color-surface: #F0F3FB;

    --blur-glass: blur(28px);
    --blur-glass-sm: blur(12px);
    --saturate-glass: saturate(200%);

    --duration-fast: 150ms;
    --duration-normal: 300ms;
    --duration-slow: 600ms;
    --duration-slower: 1s;

    --easing-smooth: cubic-bezier(.25,.46,.45,.94);
    --easing-spring: cubic-bezier(.34,1.56,.64,1);
    --easing-ease-in: cubic-bezier(.4,0,1,1);
    --easing-ease-out: cubic-bezier(0,0,.2,1);

    --shadow-sm: 0 4px 20px rgba(0,0,0,.055);
    --shadow-md: 0 8px 40px rgba(31,38,135,.06);
    --shadow-lg: 0 20px 60px rgba(31,38,135,.1);
    --shadow-xl: 0 40px 100px rgba(31,38,135,.08);
    --shadow-inset: 0 1px 0 rgba(255,255,255,.98) inset;
    --shadow-glow: 0 0 80px rgba(67,56,202,.5);
  }

  *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
  html{scroll-behavior:smooth;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}
  body{
    font-family:'Inter',sans-serif;
    background:var(--color-light);
    color:var(--color-text-primary);
    overflow-x:hidden;
    cursor:none;
  }

  /* Accessibility: Reduce motion */
  @media (prefers-reduced-motion: reduce) {
    * {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
    @keyframes fadeUp { from { opacity: 0; } to { opacity: 1; } }
    @keyframes shimmer { to { opacity: 1; } }
  }

  /* ── CURSOR ── */
  #cursor-ring{
    position:fixed;width:36px;height:36px;
    border:1.5px solid rgba(199,154,56,.7);border-radius:50%;
    pointer-events:none;z-index:99999;
    transform:translate(-50%,-50%);
    transition:width var(--duration-normal) var(--easing-smooth),
              height var(--duration-normal) var(--easing-smooth),
              background var(--duration-normal),
              border-color var(--duration-normal),
              opacity var(--duration-fast);
    will-change:transform;
  }
  #cursor-ring.hov{
    width:56px;height:56px;
    background:rgba(199,154,56,.1);
    border-color:var(--color-gold-light);
    border-width:1.5px;
    box-shadow:0 0 32px rgba(199,154,56,.25);
  }
  #cursor-ring.click{
    width:22px;height:22px;
    background:rgba(199,154,56,.22);
    transition-duration:var(--duration-fast);
  }
  #cursor-dot{
    position:fixed;width:5px;height:5px;
    background:var(--color-gold);border-radius:50%;
    pointer-events:none;z-index:99999;
    transform:translate(-50%,-50%);
    box-shadow:0 0 8px rgba(199,154,56,.9);
    will-change:transform;
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
    background:rgba(255,255,255,.74);
    backdrop-filter:var(--blur-glass) var(--saturate-glass);
    -webkit-backdrop-filter:var(--blur-glass) var(--saturate-glass);
    border:1px solid rgba(199,154,56,.18);
    box-shadow:var(--shadow-md),var(--shadow-inset),0 0 0 1px rgba(255,255,255,.35);
    transition:all var(--duration-normal) var(--easing-smooth);
    will-change:transform;
  }
  .glass::before{
    content:'';position:absolute;inset:0;
    background:radial-gradient(ellipse 80% 60% at 50% 0%,rgba(199,154,56,.04),transparent 70%);
    pointer-events:none;border-radius:inherit;
  }
  .glass-dark{
    background:rgba(10,11,26,.92);
    backdrop-filter:var(--blur-glass);
    -webkit-backdrop-filter:var(--blur-glass);
    border:1px solid rgba(199,154,56,.14);
    box-shadow:0 8px 48px rgba(0,0,0,.5),0 1px 0 rgba(255,255,255,.04) inset;
    position:relative;
    z-index:1;
  }
  .glass-violet{
    background:rgba(30,27,75,.88);
    backdrop-filter:var(--blur-glass);
    -webkit-backdrop-filter:var(--blur-glass);
    border:1px solid rgba(139,92,246,.2);
    box-shadow:0 0 40px rgba(139,92,246,.2),0 8px 48px rgba(0,0,0,.4);
  }
  .glass-card{
    background:rgba(255,255,255,.81);
    backdrop-filter:blur(20px) saturate(180%);
    -webkit-backdrop-filter:blur(20px) saturate(180%);
    border:1px solid rgba(199,154,56,.14);
    border-radius:20px;
    box-shadow:var(--shadow-sm),var(--shadow-inset);
    transition:transform var(--duration-normal) var(--easing-smooth),
              box-shadow var(--duration-normal) var(--easing-smooth),
              border-color var(--duration-normal);
    position:relative;
    overflow:hidden;
  }
  .glass-card::before{
    content:'';position:absolute;inset:0;
    background:radial-gradient(circle at 50% 0%,rgba(255,255,255,.5),transparent 70%);
    pointer-events:none;
  }
  .glass-card:hover{
    transform:translateY(-6px);
    border-color:rgba(199,154,56,.3);
    box-shadow:var(--shadow-lg),var(--shadow-inset);
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
    border-radius:9px;
    transition:all var(--duration-normal) var(--easing-smooth);
    position:relative;overflow:hidden;
    will-change:transform,box-shadow;
  }
  .btn::before{
    content:'';position:absolute;inset:0;
    background:linear-gradient(135deg,rgba(255,255,255,.22),transparent);
    opacity:0;transition:opacity var(--duration-normal);
  }
  .btn:hover::before{opacity:1}
  .btn:active{transform:scale(.98)}
  .btn-gold{
    padding:14px 32px;
    background:linear-gradient(135deg,var(--color-gold-light) 0%,var(--color-gold) 50%,var(--color-gold-dark) 100%);
    color:#0A0B1A;
    box-shadow:0 4px 28px rgba(199,154,56,.42),var(--shadow-inset);
  }
  .btn-gold:hover{
    box-shadow:0 8px 48px rgba(199,154,56,.62),var(--shadow-inset);
    transform:translateY(-2px);
  }
  .btn-gold:active{transform:translateY(0) scale(.98)}
  .btn-outline{
    padding:13px 30px;
    background:transparent;
    color:var(--color-gold);
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
    background:rgba(255,255,255,.06);
    color:#E2E8F0;
    border:1px solid rgba(255,255,255,.12);
  }
  .btn-dark:hover{
    background:rgba(255,255,255,.12);
    border-color:rgba(255,255,255,.2);
    transform:translateY(-2px);
  }
  .btn-violet{
    padding:13px 30px;
    background:rgba(139,92,246,.12);
    color:#A78BFA;
    border:1px solid rgba(139,92,246,.28);
  }
  .btn-violet:hover{
    background:rgba(139,92,246,.2);
    border-color:rgba(139,92,246,.5);
    transform:translateY(-2px);
  }

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
  @keyframes orbit1{
    0%{transform:rotateX(75deg) rotateZ(0deg)}
    100%{transform:rotateX(75deg) rotateZ(360deg)}
  }
  @keyframes orbit2{
    0%{transform:rotateX(75deg) rotateZ(120deg)}
    100%{transform:rotateX(75deg) rotateZ(-240deg)}
  }
  @keyframes orbit3{
    0%{transform:rotateX(75deg) rotateZ(240deg)}
    100%{transform:rotateX(75deg) rotateZ(600deg)}
  }
  @keyframes float{
    0%,100%{transform:translateY(0) translateX(-50%)}
    50%{transform:translateY(-16px) translateX(-50%)}
  }
  @keyframes floatBadge{
    0%,100%{transform:translateX(-50%) translateY(0)}
    50%{transform:translateX(-50%) translateY(-14px)}
  }
  @keyframes glowGold{
    0%,100%{
      box-shadow:0 0 50px rgba(67,56,202,.4),
                  0 0 100px rgba(67,56,202,.12),
                  inset 0 1px 0 rgba(255,255,255,.08);
    }
    50%{
      box-shadow:0 0 80px rgba(67,56,202,.65),
                  0 0 160px rgba(67,56,202,.2),
                  0 0 220px rgba(139,92,246,.08),
                  inset 0 1px 0 rgba(255,255,255,.12);
    }
  }
  @keyframes pulseGlow{
    0%,100%{box-shadow:0 0 0 0 rgba(199,154,56,.4)}
    50%{box-shadow:0 0 0 12px rgba(199,154,56,0)}
  }

  /* ── HERO GLOW EFFECT ── */
  .hero-glow{
    position:absolute;border-radius:50%;pointer-events:none;
    animation:heroGlowPulse 7s ease-in-out infinite;
  }
  @keyframes heroGlowPulse{0%,100%{opacity:.45}50%{opacity:.8}}

  /* ── FADE IN / SLIDE UP ── */
  @keyframes fadeUp{
    from{opacity:0;transform:translateY(36px)}
    to{opacity:1;transform:translateY(0)}
  }
  @keyframes fadeIn{
    from{opacity:0}
    to{opacity:1}
  }
  @keyframes slideRight{
    from{opacity:0;transform:translateX(-28px)}
    to{opacity:1;transform:translateX(0)}
  }
  @keyframes slideLeft{
    from{opacity:0;transform:translateX(28px)}
    to{opacity:1;transform:translateX(0)}
  }
  @keyframes scaleIn{
    from{opacity:0;transform:scale(.92)}
    to{opacity:1;transform:scale(1)}
  }
  .fade-up{
    opacity:0;
    animation:fadeUp 0.8s var(--easing-smooth) forwards;
    will-change:opacity,transform;
  }
  .d0{animation-delay:0s}
  .d1{animation-delay:0.14s}
  .d2{animation-delay:0.28s}
  .d3{animation-delay:0.44s}
  .d4{animation-delay:0.62s}
  .d5{animation-delay:0.8s}

  /* ── SCROLL REVEAL ── */
  .reveal{
    opacity:0;
    transform:translateY(30px);
    transition:opacity 0.75s var(--easing-smooth),
              transform 0.75s var(--easing-smooth);
    will-change:opacity,transform;
  }
  .reveal.in{
    opacity:1;
    transform:translateY(0);
  }
  .reveal-left{
    opacity:0;
    transform:translateX(-30px);
    transition:opacity 0.75s var(--easing-smooth),
              transform 0.75s var(--easing-smooth);
    will-change:opacity,transform;
  }
  .reveal-left.in{
    opacity:1;
    transform:translateX(0);
  }
  .reveal-right{
    opacity:0;
    transform:translateX(30px);
    transition:opacity 0.75s var(--easing-smooth),
              transform 0.75s var(--easing-smooth);
    will-change:opacity,transform;
  }
  .reveal-right.in{
    opacity:1;
    transform:translateX(0);
  }

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
  .field{margin-bottom:18px}
  .field label{
    font-family:'JetBrains Mono',monospace;
    font-size:9px;
    letter-spacing:.2em;
    text-transform:uppercase;
    color:var(--color-text-tertiary);
    display:block;
    margin-bottom:8px;
    font-weight:600;
  }
  .field input,
  .field select,
  .field textarea{
    width:100%;
    padding:14px 18px;
    background:rgba(255,255,255,.7);
    border:1.5px solid rgba(199,154,56,.16);
    border-radius:11px;
    font-family:'Inter',sans-serif;
    font-size:13.5px;
    color:var(--color-text-primary);
    transition:border-color var(--duration-fast),
              box-shadow var(--duration-fast),
              background var(--duration-fast);
    outline:none;
    backdrop-filter:blur(8px);
  }
  .field input:focus,
  .field select:focus,
  .field textarea:focus{
    border-color:rgba(199,154,56,.5);
    background:rgba(255,255,255,.94);
    box-shadow:0 0 0 4px rgba(199,154,56,.09),
              inset 0 0 0 1px rgba(199,154,56,.2);
  }
  .field input::placeholder,
  .field textarea::placeholder{
    color:var(--color-border);
  }
  .field input:disabled,
  .field select:disabled,
  .field textarea:disabled{
    opacity:0.5;
    background:rgba(240,243,251,.5);
    cursor:not-allowed;
  }

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

  /* ── INTERACTIVE ENHANCEMENTS ── */
  [data-h="1"]{
    transition:all var(--duration-normal) var(--easing-smooth);
  }

  /* ── ACCESSIBILITY ── */
  *:focus-visible{
    outline:2px solid var(--color-gold);
    outline-offset:2px;
  }

  /* ── PERFORMANCE ── */
  .layer-item,
  .node,
  .div-card,
  .glass-card{
    transform:translateZ(0);
    backface-visibility:hidden;
  }

  /* ── MOBILE ── */
  .mobile-menu{display:none}
  @media(max-width:920px){
    .nav-links,.nav-cta{display:none!important}
    .mobile-toggle{display:flex!important}
    .container{padding:0 22px}
    .nav-inner{padding:16px 22px}
  }
  .mobile-toggle{
    display:none;
    background:none;
    border:none;
    cursor:pointer;
    color:var(--color-text-secondary);
    align-items:center;
    justify-content:center;
    padding:8px;
    transition:all var(--duration-normal) var(--easing-smooth);
  }
  .mobile-toggle:hover{
    color:var(--color-gold);
  }

  @media(max-width:768px){
    :root{
      --blur-glass: blur(16px);
    }
    .hero-hud-left,.hero-hud-right{display:none!important}
    .two-col{grid-template-columns:1fr!important}
  }

  @media(max-width:480px){
    .container{padding:0 16px}
    .label{font-size:8px;letter-spacing:.18em}
    .btn{padding:12px 24px;font-size:10px}
    .section-title{font-size:clamp(24px,5vw,40px)!important}
  }
`

export function layout(title: string, body: string, activePage: string = ''): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width,initial-scale=1.0"/>
  <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
  <title>${title} — Mansas Moguls</title>
  <meta name="description" content="Mansas Moguls: The Empire Operating System. Building, acquiring, and scaling transformative businesses through capital intelligence, operational excellence, and strategic vision."/>
  <meta property="og:title" content="${title} — Mansas Moguls"/>
  <meta property="og:description" content="Empire Operating System — One Vision, Six Divisions, Infinite Impact"/>
  <meta property="og:image" content="/og-image.png"/>
  <meta property="og:type" content="website"/>
  <meta name="theme-color" content="#1E1B4B"/>
  <meta name="color-scheme" content="light dark"/>
  <link rel="icon" type="image/svg+xml" href="/favicon.ico"/>
  <link rel="preload" as="font" href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700;800&display=swap" crossorigin/>
  <style>${globalCSS}</style>
</head>
<body>

<div class="grid-bg"></div>
<div id="cursor-ring"></div>
<div id="cursor-dot"></div>

<!-- ─── NAV ─── -->
<nav id="nav" role="navigation" aria-label="Main navigation">
  <div class="nav-inner">
    <a href="/" class="nav-logo" aria-label="Mansas Moguls - Empire Operating System">
      <div style="position:relative;width:42px;height:42px">
        <svg width="42" height="42" viewBox="0 0 42 42" fill="none" aria-hidden="true">
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
      <a href="/" class="nav-link ${activePage==='home'?'active':''}" aria-current="${activePage==='home'?'page':''}">Home</a>
      <a href="/divisions" class="nav-link ${activePage==='divisions'||activePage==='division'?'active':''}" aria-current="${activePage==='divisions'||activePage==='division'?'page':''}">The System</a>
      <a href="/oracle-os" class="nav-link ${activePage==='oracle'?'active':''}" aria-current="${activePage==='oracle'?'page':''}">Oracle OS</a>
      <a href="/about" class="nav-link ${activePage==='about'?'active':''}" aria-current="${activePage==='about'?'page':''}">About</a>
    </nav>
    <div class="nav-cta">
      <a href="/contact" class="btn btn-gold" style="padding:10px 24px;font-size:10.5px" aria-label="Submit launch request">Launch Request</a>
    </div>
    <button class="mobile-toggle" onclick="document.getElementById('mmenu').classList.toggle('open')" aria-label="Toggle navigation menu" aria-expanded="false">
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true">
        <line x1="3" y1="6" x2="19" y2="6"/><line x1="3" y1="11" x2="19" y2="11"/><line x1="3" y1="16" x2="19" y2="16"/>
      </svg>
    </button>
  </div>
  <div id="mmenu" class="mobile-menu" style="background:rgba(248,249,252,.97);backdrop-filter:var(--blur-glass);border-top:1px solid rgba(199,154,56,.1);padding:12px 22px 22px">
    ${[['Home','/'],['The System','/divisions'],['Oracle OS','/oracle-os'],['About','/about']].map(([l,h])=>`<a href="${h}" style="display:block;padding:12px 0;font-family:'Space Grotesk',sans-serif;font-size:14px;font-weight:600;color:#475569;text-decoration:none;border-bottom:1px solid rgba(199,154,56,.07)">${l}</a>`).join('')}
    <a href="/contact" class="btn btn-gold" style="margin-top:16px;width:100%;justify-content:center" aria-label="Submit launch request from mobile menu">Launch Request</a>
  </div>
</nav>

<!-- Skip to main content link for accessibility -->
<a href="#main-content" style="position:absolute;top:-40px;left:0;background:var(--color-gold);color:#000;padding:8px 16px;text-decoration:none;z-index:100" onmouseover="this.style.top='0'" onmouseout="this.style.top='-40px'">Skip to main content</a>

<!-- ─── MAIN ─── -->
<main id="main-content" style="position:relative;z-index:1" role="main">
${body}
</main>

<!-- ─── FOOTER ─── -->
<footer role="contentinfo">
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
        <div class="label" style="margin-bottom:18px;color:var(--color-gold)">The System</div>
        ${[['Divisions Overview','/divisions'],['Moguls AI','/divisions/moguls-ai'],['Moguls Studio','/divisions/moguls-studio'],['Moguls Growth','/divisions/moguls-growth'],['Moguls Academy','/divisions/moguls-academy'],['Moguls Labs','/divisions/moguls-labs']].map(([l,h])=>`<a href="${h}" style="display:block;font-size:13px;color:#64748B;text-decoration:none;margin-bottom:10px;transition:color var(--duration-fast)" onmouseover="this.style.color='var(--color-gold)'" onmouseout="this.style.color='#64748B'">${l}</a>`).join('')}
      </div>

      <div>
        <div class="label" style="margin-bottom:18px;color:var(--color-gold)">Platform</div>
        ${[['Oracle OS','/oracle-os'],['About','/about'],['Contact','/contact']].map(([l,h])=>`<a href="${h}" style="display:block;font-size:13px;color:#64748B;text-decoration:none;margin-bottom:10px;transition:color var(--duration-fast)" onmouseover="this.style.color='var(--color-gold)'" onmouseout="this.style.color='#64748B'">${l}</a>`).join('')}
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
(function(){
  // ── CURSOR ──
  var ring = document.getElementById('cursor-ring');
  var dot = document.getElementById('cursor-dot');
  var mx=0, my=0, rx=0, ry=0;
  var raf = false;
  var isMouseMoving = false;

  function updateCursor(){
    rx += (mx - rx) * 0.14;
    ry += (my - ry) * 0.14;
    if(ring){ ring.style.left = rx + 'px'; ring.style.top = ry + 'px'; }
    if(dot){ dot.style.left = mx + 'px'; dot.style.top = my + 'px'; }
    raf = requestAnimationFrame(updateCursor);
  }

  document.addEventListener('mousemove', function(e){
    mx = e.clientX;
    my = e.clientY;
    isMouseMoving = true;
    if(!raf) raf = updateCursor();
  }, {passive: true});

  document.addEventListener('mousedown', function(){
    if(ring) ring.classList.add('click');
  });

  document.addEventListener('mouseup', function(){
    if(ring) ring.classList.remove('click');
  });

  // Debounced hover detection
  var hoverElements = document.querySelectorAll('a, button, [data-h="1"]');
  hoverElements.forEach(function(el){
    el.addEventListener('mouseenter', function(){
      if(ring && isMouseMoving) ring.classList.add('hov');
    });
    el.addEventListener('mouseleave', function(){
      if(ring) ring.classList.remove('hov');
    });
  });

  // ── NAV SCROLL ──
  var nav = document.getElementById('nav');
  var lastScrollY = 0;
  var ticking = false;

  function updateNavScroll(){
    if(nav){
      if(window.scrollY > 60){
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }
    }
    ticking = false;
  }

  window.addEventListener('scroll', function(){
    lastScrollY = window.scrollY;
    if(!ticking){
      window.requestAnimationFrame(updateNavScroll);
      ticking = true;
    }
  }, {passive: true});

  // ── MOBILE MENU TOGGLE ──
  var mobileToggle = document.querySelector('.mobile-toggle');
  var mmenu = document.getElementById('mmenu');
  if(mobileToggle){
    mobileToggle.addEventListener('click', function(){
      mmenu.classList.toggle('open');
      mobileToggle.setAttribute('aria-expanded', mmenu.classList.contains('open'));
    });
  }

  // ── INTERSECTION OBSERVER for reveals ──
  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(e){
      if(e.isIntersecting){
        e.target.classList.add('in');
        var parent = e.target.parentElement;
        if(parent){
          var revs = parent.querySelectorAll('.reveal:not(.in), .reveal-left:not(.in), .reveal-right:not(.in)');
          revs.forEach(function(s, i){
            setTimeout(function(){ s.classList.add('in'); }, i * 80);
          });
        }
      }
    });
  }, {threshold: 0.1, rootMargin: '0px 0px -40px 0px'});

  document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(function(el){
    io.observe(el);
  });
})();
</script>
</body>
</html>`
}
