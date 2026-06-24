import { layout } from './layout'

// ─── SHARED DATA ───────────────────────────────────────────────
const DIVISIONS = [
  {id:'moguls-ai',   n:'01',title:'Moguls AI',    tag:'Intelligence at Machine Speed',       color:'#4338CA',glow:'rgba(67,56,202,.3)',  icon:'◈', emoji:'🤖',status:'ACTIVE',  bc:'badge-green',  desc:'Autonomous AI systems, custom agents, and intelligent workflow automation that transforms operations from manual to machine-speed.',services:['AI Agent Development','Custom LLM Dashboards','Process Automation','Predictive Analytics'],rev:'Setup Fee + SaaS Retainer'},
  {id:'moguls-studio',n:'03',title:'Moguls Studio',tag:'Brand Architecture at the Highest Level',color:'#C79A38',glow:'rgba(199,154,56,.3)',icon:'◇', emoji:'🎨',status:'ACTIVE',  bc:'badge-green',  desc:'Brand identity systems, UI/UX, packaging, and premium presentation architecture that commands instant market authority.',services:['Brand Identity Systems','UI/UX Design','Pitch Architecture','Motion Design'],rev:'Project + Retainer'},
  {id:'moguls-growth',n:'04',title:'Moguls Growth',tag:'Performance-Engineered Scaling',       color:'#10B981',glow:'rgba(16,185,129,.3)', icon:'◉', emoji:'📈',status:'ACTIVE',  bc:'badge-green',  desc:'High-velocity lead acquisition, strategic partnership mapping, and performance marketing at institutional scale.',services:['Performance Marketing','Lead Velocity Systems','Partnership Mapping','Growth Analytics'],rev:'Performance Fee + Retainer'},
  {id:'moguls-academy',n:'05',title:'Moguls Academy',tag:'Elevating the Next Generation',        color:'#F59E0B',glow:'rgba(245,158,11,.3)', icon:'◎', emoji:'🎓',status:'BUILDING',bc:'badge-amber',  desc:'Elite education programs, corporate training tracks, and creator monetization systems for ambitious operators.',services:['Corporate Training','AI Workshops','Creator Monetization','Cohort Programs'],rev:'Course Sales + Memberships'},
  {id:'moguls-labs',  n:'06',title:'Moguls Labs',   tag:'Where the Future Gets Built',          color:'#EC4899',glow:'rgba(236,72,153,.3)', icon:'◆', emoji:'🧪',status:'DEV',    bc:'badge-violet', desc:"R&D incubator for next-gen SaaS micro-apps, experimental technology, and the businesses of tomorrow.",services:['SaaS Incubation','Tech R&D','IP Creation','Prototype Development'],rev:'Equity + Revenue Share'},
]

// ─── HOME PAGE ─────────────────────────────────────────────────
function homePage(): string {
  return layout('Command Center', `

<!-- ═══════════════════════════════ HERO ═══════════════════════════════ -->
<section style="min-height:100vh;display:flex;align-items:center;justify-content:center;overflow:hidden;background:linear-gradient(168deg,#FFFFFF 0%,#F8F9FC 55%,#EEF0FA 100%);padding-top:90px;position:relative">

  <!-- Background radial glows -->
  <div style="position:absolute;inset:0;pointer-events:none;overflow:hidden">
    <div class="hero-glow" style="width:800px;height:500px;background:radial-gradient(ellipse,rgba(67,56,202,.055) 0%,transparent 70%);top:50%;left:50%;transform:translate(-50%,-55%)"></div>
    <div class="hero-glow" style="width:500px;height:300px;background:radial-gradient(ellipse,rgba(199,154,56,.065) 0%,transparent 65%);top:40%;left:50%;transform:translate(-50%,-50%);animation-delay:3s"></div>
  </div>

  <!-- LEFT HUD PANEL -->
  <div class="fade-up d1 hero-hud-left" style="position:absolute;top:160px;left:48px;width:180px">
    <div class="label" style="margin-bottom:16px;color:#94A3B8">MM // ECOSYSTEM v2.0</div>
    <div style="display:flex;flex-direction:column;gap:14px">
      ${[
        ['NETWORK STATUS','OPTIMAL','#10B981'],
        ['CAPITAL STATE','DEPLOYED','#C79A38'],
        ['ECOSYSTEM','EXCEPTIONAL','#10B981'],
        ['GROWTH VECTOR','EXPONENTIAL','#8B5CF6'],
      ].map(([k,v,c])=>`
      <div class="metric">
        <div class="annotation" style="margin-bottom:3px">${k}</div>
        <div class="font-mono" style="font-size:11px;color:${c};font-weight:600;letter-spacing:.1em">${v}</div>
      </div>`).join('')}
    </div>
    <div style="margin-top:22px;padding-top:18px;border-top:1px solid rgba(199,154,56,.12)">
      <div class="annotation" style="margin-bottom:10px">CORE PILLARS</div>
      ${['CAPITAL INTELLIGENCE','OPERATIONAL EXCELLENCE','STRATEGIC ACQUISITIONS','TALENT SYSTEMS','LEGACY BUILDING'].map(p=>`
      <div class="font-mono" style="font-size:8px;color:#475569;letter-spacing:.09em;margin-bottom:5px;display:flex;align-items:center;gap:6px"><span style="color:#C79A38;opacity:.6">—</span>${p}</div>`).join('')}
    </div>
  </div>

  <!-- RIGHT HUD PANEL -->
  <div class="fade-up d2 hero-hud-right" style="position:absolute;top:160px;right:48px;width:200px">
    <div class="annotation" style="margin-bottom:16px;text-align:right;color:#94A3B8">PORTFOLIO METRICS</div>
    <!-- Mini chart -->
    <div class="glass" style="border-radius:14px;padding:16px;margin-bottom:16px">
      <svg viewBox="0 0 170 60" style="width:100%;display:block">
        <defs>
          <linearGradient id="hcg" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#4338CA" stop-opacity=".6"/>
            <stop offset="100%" stop-color="#C79A38" stop-opacity=".9"/>
          </linearGradient>
          <linearGradient id="hcgf" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#C79A38" stop-opacity=".18"/>
            <stop offset="100%" stop-color="#C79A38" stop-opacity="0"/>
          </linearGradient>
        </defs>
        <polygon points="0,58 20,52 45,44 75,32 105,20 130,12 150,7 170,2 170,60 0,60" fill="url(#hcgf)"/>
        <polyline points="0,58 20,52 45,44 75,32 105,20 130,12 150,7 170,2" fill="none" stroke="url(#hcg)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <!-- dots -->
        ${[[20,52],[75,32],[130,12],[170,2]].map(([x,y])=>`<circle cx="${x}" cy="${y}" r="2.5" fill="#C79A38" opacity=".8"/>`).join('')}
      </svg>
      <div class="font-mono" style="font-size:8px;color:#10B981;letter-spacing:.12em;margin-top:6px">↑ EXPONENTIAL TRAJECTORY</div>
    </div>
    <div style="display:flex;flex-direction:column;gap:9px">
      ${[['PORTFOLIO','7+ Companies'],['PRODUCTS','14 Active'],['TEAM','38 Operators'],['VALUATION','$1.2B+ Target']].map(([l,v])=>`
      <div style="display:flex;justify-content:space-between;align-items:center">
        <span class="annotation">${l}</span>
        <span class="font-display" style="font-size:11px;font-weight:700;color:#0F172A">${v}</span>
      </div>`).join('')}
    </div>
  </div>

  <!-- CENTER HERO CONTENT -->
  <div style="display:flex;flex-direction:column;align-items:center;text-align:center;padding:0 24px;position:relative;z-index:2">

    <!-- 3D Crown with orbital rings -->
    <div class="fade-up d2" style="position:relative;margin-bottom:56px;width:340px;height:280px;flex-shrink:0">

      <!-- Orbital rings container -->
      <div style="position:absolute;top:50%;left:50%;transform:translate(-50%,-54%);pointer-events:none">
        <!-- Ring 1 -->
        <div style="position:absolute;top:-60px;left:-155px;width:310px;height:120px;border:1.5px solid rgba(199,154,56,.25);border-radius:50%;animation:orbit1 14s linear infinite"></div>
        <!-- Ring 2 -->
        <div style="position:absolute;top:-48px;left:-125px;width:250px;height:96px;border:1px solid rgba(67,56,202,.18);border-radius:50%;animation:orbit2 10s linear infinite"></div>
        <!-- Ring 3 (dashed) -->
        <div style="position:absolute;top:-70px;left:-185px;width:370px;height:140px;border:1px dashed rgba(139,92,246,.12);border-radius:50%;animation:orbit3 22s linear infinite"></div>

        <!-- Orbital dot - gold ring 1 -->
        <div style="position:absolute;top:-60px;left:-155px;width:310px;height:120px;border-radius:50%;animation:orbit1 14s linear infinite">
          <div style="position:absolute;top:-5px;left:50%;width:9px;height:9px;background:radial-gradient(circle,#F0D597,#C79A38);border-radius:50%;box-shadow:0 0 8px #C79A38;transform:translateX(-50%)"></div>
        </div>
        <!-- Orbital dot - indigo ring 2 -->
        <div style="position:absolute;top:-48px;left:-125px;width:250px;height:96px;border-radius:50%;animation:orbit2 10s linear infinite">
          <div style="position:absolute;top:-4.5px;left:50%;width:8px;height:8px;background:radial-gradient(circle,#818CF8,#4338CA);border-radius:50%;box-shadow:0 0 8px #4338CA;transform:translateX(-50%)"></div>
        </div>
      </div>

      <!-- Crown hexagon badge -->
      <div style="position:absolute;top:22px;left:50%;animation:floatBadge 5.5s ease-in-out infinite">
        <!-- Outer ring -->
        <div style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:148px;height:148px">
          <svg width="148" height="148" viewBox="0 0 148 148">
            <circle cx="74" cy="74" r="70" fill="none" stroke="rgba(199,154,56,.18)" stroke-width="1" stroke-dasharray="4 8"/>
          </svg>
        </div>
        <!-- Crown body -->
        <div style="width:124px;height:124px;clip-path:polygon(50% 0%,100% 25%,100% 75%,50% 100%,0% 75%,0% 25%);background:linear-gradient(135deg,#1E1B4B 0%,#0E0D2E 60%,#0A0920 100%);display:flex;align-items:center;justify-content:center;transform:translateX(-50%);box-shadow:0 0 60px rgba(67,56,202,.4),0 0 120px rgba(67,56,202,.12),inset 0 1px 0 rgba(255,255,255,.08);animation:glowGold 4.5s ease-in-out infinite">
          <svg viewBox="0 0 80 72" style="width:66px;height:60px">
            <defs>
              <linearGradient id="cg2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#F0D597"/>
                <stop offset="40%" stop-color="#C79A38"/>
                <stop offset="100%" stop-color="#8B6914"/>
              </linearGradient>
              <filter id="crown-glow">
                <feGaussianBlur stdDeviation="1.5" result="b"/>
                <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
              </filter>
            </defs>
            <path d="M10 55L14 33L24 48L40 22L56 48L66 33L70 55Z" fill="url(#cg2)" filter="url(#crown-glow)"/>
            <rect x="10" y="55" width="60" height="7.5" rx="3" fill="url(#cg2)"/>
            <polygon points="40,19 43.5,24.5 40,27 36.5,24.5" fill="#6D28D9"/>
            <circle cx="40" cy="17" r="3" fill="#818CF8" opacity=".8"/>
            <text x="40" y="71" text-anchor="middle" fill="url(#cg2)" font-size="9" font-family="Space Grotesk" font-weight="800" letter-spacing="2">MM</text>
          </svg>
        </div>
      </div>

      <!-- Platform base stack -->
      <div style="position:absolute;bottom:8px;left:50%;transform:translateX(-50%);display:flex;flex-direction:column;align-items:center;gap:3px">
        ${[
          ['200px','14px','rgba(199,154,56,.14)','rgba(30,27,75,.94)','rgba(199,154,56,.45)'],
          ['234px','12px','rgba(30,27,75,.88)','rgba(14,13,40,.98)','rgba(199,154,56,.38)'],
          ['268px','10px','rgba(14,13,40,.95)','rgba(10,11,26,1)',  'rgba(199,154,56,.28)'],
        ].map(([w,h,c1,c2,bc])=>`<div style="width:${w};height:${h};background:linear-gradient(180deg,${c1},${c2});border:1px solid ${bc};border-radius:3px;box-shadow:0 0 28px rgba(67,56,202,.18)"></div>`).join('')}
        <div style="width:268px;height:2px;background:linear-gradient(90deg,transparent,rgba(67,56,202,.6),rgba(139,92,246,.4),transparent);margin-top:3px;border-radius:99px"></div>
      </div>
    </div>

    <!-- Main title card -->
    <div class="glass fade-up d3" style="border-radius:24px;padding:44px 56px;max-width:660px;width:100%;position:relative;box-shadow:0 32px 80px rgba(31,38,135,.07),0 1px 0 rgba(255,255,255,.95) inset">

      <!-- Corner accent dots -->
      ${[['top:15px;left:15px'],['top:15px;right:15px'],['bottom:15px;left:15px'],['bottom:15px;right:15px']].map(([p])=>`
      <div style="position:absolute;${p};width:10px;height:10px">
        <div style="width:100%;height:100%;border-radius:50%;background:radial-gradient(circle,#F0D597,#C79A38 45%,#8B6914);box-shadow:0 0 8px rgba(199,154,56,.55)"></div>
      </div>`).join('')}

      <!-- Corner lines -->
      <div style="position:absolute;top:14px;left:14px;width:28px;height:28px;border-top:1.5px solid rgba(199,154,56,.4);border-left:1.5px solid rgba(199,154,56,.4);border-radius:2px 0 0 0;pointer-events:none"></div>
      <div style="position:absolute;top:14px;right:14px;width:28px;height:28px;border-top:1.5px solid rgba(199,154,56,.4);border-right:1.5px solid rgba(199,154,56,.4);border-radius:0 2px 0 0;pointer-events:none"></div>
      <div style="position:absolute;bottom:14px;left:14px;width:28px;height:28px;border-bottom:1.5px solid rgba(199,154,56,.4);border-left:1.5px solid rgba(199,154,56,.4);border-radius:0 0 0 2px;pointer-events:none"></div>
      <div style="position:absolute;bottom:14px;right:14px;width:28px;height:28px;border-bottom:1.5px solid rgba(199,154,56,.4);border-right:1.5px solid rgba(199,154,56,.4);border-radius:0 0 2px 0;pointer-events:none"></div>

      <div class="label" style="margin-bottom:16px;letter-spacing:.22em">Building the Future · Owning the Now · Inspiring Forever</div>

      <h1 class="font-display gold-shimmer" style="font-size:clamp(38px,6.5vw,70px);font-weight:800;letter-spacing:.12em;text-transform:uppercase;line-height:.96;margin-bottom:14px">
        Mansas<br>Moguls
      </h1>

      <div class="font-mono" style="font-size:clamp(9px,1.4vw,13px);letter-spacing:.36em;color:#64748B;text-transform:uppercase;margin-bottom:24px">
        — Empire Operating System —
      </div>

      <p style="font-size:14px;color:#64748B;line-height:1.8;max-width:460px;margin:0 auto 36px">
        A multi-division empire built on capital intelligence, operational supremacy, and long-horizon vision. We don't just build companies — we architect legacies.
      </p>

      <div style="display:flex;gap:14px;justify-content:center;flex-wrap:wrap">
        <a href="/divisions" class="btn btn-gold" data-h="1">
          Explore The System
          <svg style="width:13px;height:13px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9,18 15,12 9,6"/></svg>
        </a>
        <a href="/oracle-os" class="btn btn-outline" data-h="1">
          Oracle OS
          <svg style="width:13px;height:13px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" opacity=".6"><polyline points="9,18 15,12 9,6"/></svg>
        </a>
      </div>
    </div>

    <!-- Status bar -->
    <div class="fade-up d4 status-bar" style="margin-top:32px;justify-content:center;gap:24px">
      ${[
        ['SYSTEM STATUS','OPTIMAL','#10B981'],
        ['NETWORK','ACTIVE','#10B981'],
        ['CAPITAL','HIGH','#F59E0B'],
        ['GROWTH','EXPONENTIAL','#8B5CF6'],
      ].map(([l,v,c])=>`
      <div style="text-align:center;padding:0 12px;border-right:1px solid rgba(199,154,56,.1)">
        <div class="annotation" style="color:#94A3B8;margin-bottom:3px">${l}</div>
        <div class="font-mono" style="font-size:10px;color:${c};font-weight:600;letter-spacing:.1em">${v}</div>
      </div>`).join('')}
    </div>
  </div>

  <!-- Scroll indicator -->
  <div class="fade-up d5" style="position:absolute;bottom:32px;left:50%;transform:translateX(-50%);display:flex;flex-direction:column;align-items:center;gap:7px;opacity:.45">
    <div class="annotation" style="color:#94A3B8">SCROLL TO EXPLORE</div>
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C79A38" stroke-width="2.5" style="animation:float 2s ease-in-out infinite"><polyline points="6,9 12,15 18,9"/></svg>
  </div>
</section>

<!-- ═══════════════════ NUMBERS BAND ═══════════════════ -->
<div style="background:#0A0B1A;position:relative;z-index:2;border-top:1px solid rgba(199,154,56,.12);border-bottom:1px solid rgba(199,154,56,.12)">
  <div class="container" style="padding-top:0;padding-bottom:0">
    <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:0">
      ${[
        ['7+','Portfolio Companies','#C79A38'],
        ['$1.2B+','Valuation Target','#8B5CF6'],
        ['6','Active Divisions','#10B981'],
        ['38','Elite Operators','#F59E0B'],
      ].map(([n,l,c],i)=>`
      <div class="reveal" style="padding:32px 28px;text-align:center;${i<3?'border-right:1px solid rgba(255,255,255,.05)':''}">
        <div class="font-display" style="font-size:38px;font-weight:800;color:${c};line-height:1;margin-bottom:7px">${n}</div>
        <div class="annotation" style="color:#475569;letter-spacing:.18em">${l}</div>
      </div>`).join('')}
    </div>
  </div>
</div>

<!-- ═══════════════════ ECOSYSTEM MAP ═══════════════════ -->
<section style="padding:100px 0;background:linear-gradient(180deg,#F8F9FC,#F1F4FA)">
  <div class="container">

    <div class="reveal" style="text-align:center;margin-bottom:70px">
      <div class="section-intro-line" style="margin:0 auto 18px"></div>
      <div class="label" style="margin-bottom:14px">One Vision · Six Divisions · Infinite Impact</div>
      <h2 class="section-title font-display" style="font-size:clamp(28px,4.5vw,52px);color:#0F172A;margin-bottom:18px">
        The Mansas Moguls<br><span class="gold">Ecosystem Map</span>
      </h2>
      <p style="font-size:14px;color:#64748B;max-width:480px;margin:0 auto;line-height:1.8">
        Six precision-engineered divisions — each a powerhouse in its domain — connected through one intelligent core.
      </p>
    </div>

    <!-- Interactive ecosystem -->
    <div style="position:relative;max-width:880px;margin:0 auto">

      <!-- SVG connector lines -->
      <svg style="position:absolute;inset:0;width:100%;height:100%;pointer-events:none;overflow:visible" viewBox="0 0 880 560" preserveAspectRatio="xMidYMid meet">
        <defs>
          <filter id="glow-f">
            <feGaussianBlur stdDeviation="2" result="b"/>
            <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
        </defs>
        <!-- Lines from center 440,280 to nodes -->
        ${[
          [440, 90,  '#4338CA', '4 6',  2.4, 2.8],
          [680, 160, '#8B5CF6', '5 5',  2.4, 3.2],
          [700, 370, '#C79A38', '3 7',  2.0, 2.6],
          [440, 460, '#10B981', '4 6',  2.2, 3.0],
          [180, 370, '#F59E0B', '3 7',  2.0, 2.5],
          [200, 160, '#EC4899', '5 5',  2.4, 2.8],
        ].map(([nx,ny,c,da,sw,dur],i)=>`
        <line x1="440" y1="280" x2="${nx}" y2="${ny}"
          stroke="${c}" stroke-width="${sw}" stroke-dasharray="${da}" opacity=".45" filter="url(#glow-f)">
          <animate attributeName="stroke-dashoffset" from="0" to="-120" dur="${dur}s" repeatCount="indefinite"/>
        </line>
        <circle r="3.5" fill="${c}" opacity=".9" filter="url(#glow-f)">
          <animateMotion dur="${dur}s" repeatCount="indefinite" path="M 440 280 L ${nx} ${ny}"/>
          <animate attributeName="opacity" values="0;1;1;0" dur="${dur}s" repeatCount="indefinite"/>
        </circle>`).join('')}
      </svg>

      <!-- Central hub (placeholder spacing) -->
      <div style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);z-index:10">
        <div style="animation:floatBadge 5.5s ease-in-out infinite;transform:translateX(-50%);margin-left:-50%">
          <div style="width:136px;height:136px;clip-path:polygon(50% 0%,100% 25%,100% 75%,50% 100%,0% 75%,0% 25%);background:linear-gradient(135deg,#1E1B4B,#0E0D2E);display:flex;align-items:center;justify-content:center;box-shadow:0 0 70px rgba(67,56,202,.45),0 0 140px rgba(67,56,202,.12)">
            <div style="text-align:center">
              <svg viewBox="0 0 60 52" style="width:46px;height:40px">
                <defs><linearGradient id="hg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#F0D597"/><stop offset="50%" stop-color="#C79A38"/><stop offset="100%" stop-color="#8B6914"/></linearGradient></defs>
                <path d="M6 44L9.5 27L17 38L30 17L43 38L50.5 27L54 44Z" fill="url(#hg)"/>
                <rect x="6" y="44" width="48" height="5.5" rx="2.5" fill="url(#hg)"/>
                <polygon points="30,15 33.5,21 30,23 26.5,21" fill="#4338CA"/>
              </svg>
              <div class="font-display" style="font-size:6.5px;font-weight:800;letter-spacing:.12em;background:linear-gradient(135deg,#F0D597,#C79A38);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;margin-top:3px">MANSAS<br>MOGULS</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Nodes grid -->
      <div style="display:grid;grid-template-columns:repeat(3,1fr);grid-template-rows:repeat(3,auto);gap:0;min-height:560px;align-items:center;justify-items:center">
        ${[
          {id:'moguls-ai',    n:'01',label:'Moguls AI',  color:'#4338CA',glow:'rgba(67,56,202,.3)',  badge:'ACTIVE', bc:'badge-green',  row:1,col:2, icon:'🤖'},
          {id:'oracle-link',  n:'02',label:'Oracle OS',  color:'#8B5CF6',glow:'rgba(139,92,246,.3)', badge:'ACTIVE', bc:'badge-green',  row:1,col:3, icon:'🔮', href:'/oracle-os'},
          {id:'moguls-studio',n:'03',label:'Studio',     color:'#C79A38',glow:'rgba(199,154,56,.3)', badge:'ACTIVE', bc:'badge-green',  row:2,col:3, icon:'🎨'},
          {id:'moguls-growth',n:'04',label:'Growth',     color:'#10B981',glow:'rgba(16,185,129,.3)', badge:'ACTIVE', bc:'badge-green',  row:3,col:2, icon:'📈'},
          {id:'moguls-academy',n:'05',label:'Academy',   color:'#F59E0B',glow:'rgba(245,158,11,.3)', badge:'BUILDING',bc:'badge-amber', row:3,col:1, icon:'🎓'},
          {id:'moguls-labs',  n:'06',label:'Labs',       color:'#EC4899',glow:'rgba(236,72,153,.3)', badge:'DEV',    bc:'badge-violet', row:2,col:1, icon:'🧪'},
          {id:'_c',n:'',label:'',color:'',glow:'',badge:'',bc:'',row:2,col:2,icon:''},
        ].map(d=>{
          if(d.id==='_c') return `<div style="grid-column:2;grid-row:2;width:140px;height:140px"></div>`
          const href = (d as any).href || (d.id==='oracle-link'?'/oracle-os':'/divisions/'+d.id)
          return `
          <div style="grid-column:${d.col};grid-row:${d.row};padding:20px" class="reveal">
            <a href="${href}" style="text-decoration:none">
              <div class="node" style="--nc:${d.color};--ng:${d.glow}">
                <div class="node-box">
                  <span style="font-size:24px">${d.icon}</span>
                  <div class="font-mono" style="font-size:7.5px;color:#94A3B8;letter-spacing:.12em">${d.n}</div>
                </div>
                <div class="node-label" style="color:${d.color};font-size:12.5px">${d.label}</div>
                <div class="badge ${d.bc}" style="font-size:8px">${d.badge}</div>
              </div>
            </a>
          </div>`
        }).join('')}
      </div>
    </div>

    <div class="reveal" style="text-align:center;margin-top:40px">
      <p class="annotation" style="color:#94A3B8">Click any division to explore its capabilities</p>
    </div>
  </div>
</section>

<!-- ═══════════════════ CORE PILLARS ═══════════════════ -->
<section style="padding:100px 0;background:#FFFFFF">
  <div class="container">

    <div class="reveal" style="text-align:center;margin-bottom:60px">
      <div class="section-intro-line" style="margin:0 auto 18px"></div>
      <div class="label" style="margin-bottom:14px">Foundational Principles</div>
      <h2 class="section-title font-display" style="font-size:clamp(26px,4vw,48px);color:#0F172A">
        The Four <span class="gold">Core Pillars</span>
      </h2>
    </div>

    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:22px">
      ${[
        {icon:'🏛️',title:'Capital Intelligence',color:'#4338CA',bg:'rgba(67,56,202,.06)',border:'rgba(67,56,202,.14)',n:'01',desc:'Strategic deployment of capital across high-conviction assets with institutional-grade due diligence and risk architecture.'},
        {icon:'⚡',title:'Operational Excellence',color:'#C79A38',bg:'rgba(199,154,56,.06)',border:'rgba(199,154,56,.14)',n:'02',desc:'AI-powered systems and elite human talent operating in perfect synchrony at every layer of the empire.'},
        {icon:'🎯',title:'Strategic Acquisitions',color:'#8B5CF6',bg:'rgba(139,92,246,.06)',border:'rgba(139,92,246,.14)',n:'03',desc:'Acquiring undervalued, high-potential businesses and scaling them to category dominance with precision.'},
        {icon:'👑',title:'Legacy Building',color:'#10B981',bg:'rgba(16,185,129,.06)',border:'rgba(16,185,129,.14)',n:'04',desc:'Constructing entities that outlast trends — empires built to be inherited, not just exited.'},
      ].map((p,i)=>`
      <div class="reveal glass card" style="padding:36px 30px;animation-delay:${i*.1}s;border:1px solid ${p.border};position:relative;overflow:hidden">
        <div class="num-accent" style="opacity:.4">${p.n}</div>
        <div style="position:absolute;top:0;right:0;width:120px;height:120px;background:radial-gradient(circle at top right,${p.bg},transparent 70%);pointer-events:none"></div>
        <div style="width:56px;height:56px;border-radius:16px;background:${p.bg};border:1px solid ${p.border};display:flex;align-items:center;justify-content:center;font-size:24px;margin-bottom:22px">${p.icon}</div>
        <h3 class="font-display" style="font-size:18px;font-weight:700;color:#0F172A;margin-bottom:12px">${p.title}</h3>
        <p style="font-size:13px;color:#64748B;line-height:1.8">${p.desc}</p>
        <div style="margin-top:20px;height:1.5px;background:linear-gradient(90deg,${p.color}40,transparent);border-radius:99px"></div>
      </div>`).join('')}
    </div>
  </div>
</section>

<!-- ═══════════════════ REVENUE ENGINE ═══════════════════ -->
<section style="padding:100px 0;background:#0A0B1A;position:relative;overflow:hidden">
  <!-- Grid background -->
  <div style="position:absolute;inset:0;background-image:linear-gradient(rgba(199,154,56,.022) 1px,transparent 1px),linear-gradient(90deg,rgba(199,154,56,.022) 1px,transparent 1px);background-size:72px 72px;pointer-events:none"></div>
  <!-- Center glow -->
  <div style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:800px;height:500px;background:radial-gradient(ellipse,rgba(67,56,202,.09) 0%,transparent 65%);pointer-events:none"></div>

  <div class="container" style="position:relative;z-index:1">

    <div class="reveal" style="text-align:center;margin-bottom:68px">
      <div class="section-intro-line" style="margin:0 auto 18px;background:linear-gradient(90deg,#C79A38,#F0D597)"></div>
      <div class="label" style="margin-bottom:14px;color:#C79A38">Multi-Channel Revenue Architecture</div>
      <h2 class="section-title font-display" style="font-size:clamp(26px,4vw,50px);color:#F8F9FC;margin-bottom:18px">
        The Empire <span class="gold">Revenue Engine</span>
      </h2>
      <p style="font-size:14px;color:#475569;max-width:460px;margin:0 auto;line-height:1.8">
        One client entry point. Multiple perpetual revenue streams. The flywheel that builds empires.
      </p>
    </div>

    <div style="display:grid;grid-template-columns:1fr 1fr;gap:64px;align-items:center" class="two-col">

      <!-- Sankey SVG -->
      <div class="reveal-left">
        <svg viewBox="0 0 500 400" style="width:100%">
          <defs>
            ${[
              ['sg1','#C79A38','#4338CA'],
              ['sg2','#C79A38','#8B5CF6'],
              ['sg3','#C79A38','#C79A38'],
              ['sg4','#C79A38','#10B981'],
              ['sg5','#C79A38','#F59E0B'],
            ].map(([id,c1,c2])=>`<linearGradient id="${id}" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="${c1}" stop-opacity=".9"/><stop offset="100%" stop-color="${c2}" stop-opacity=".85"/></linearGradient>`).join('')}
            <filter id="sg-glow"><feGaussianBlur stdDeviation="3.5" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
          </defs>

          <!-- Client entry node -->
          <rect x="12" y="150" width="92" height="100" rx="10" fill="rgba(199,154,56,.08)" stroke="rgba(199,154,56,.45)" stroke-width="1.5"/>
          <text x="58" y="188" text-anchor="middle" fill="#C79A38" font-size="11" font-family="Space Grotesk" font-weight="700" letter-spacing="1.5">CLIENT</text>
          <text x="58" y="207" text-anchor="middle" fill="#C79A38" font-size="9" font-family="JetBrains Mono" letter-spacing="1">ENTRY</text>
          <text x="58" y="223" text-anchor="middle" fill="#64748B" font-size="8" font-family="JetBrains Mono">NODE</text>

          <!-- Flow paths -->
          ${[
            {grad:'sg1',label:'Moguls AI',    rev:'$420K',cy:42, h:26, color:'#4338CA'},
            {grad:'sg2',label:'Oracle OS',    rev:'$360K',cy:108,h:22, color:'#8B5CF6'},
            {grad:'sg3',label:'Studio',       rev:'$180K',cy:170,h:18, color:'#C79A38'},
            {grad:'sg4',label:'Growth',       rev:'$140K',cy:228,h:15, color:'#10B981'},
            {grad:'sg5',label:'Academy',      rev:'$80K', cy:280,h:12, color:'#F59E0B'},
          ].map((d,i)=>`
          <path d="M 104 200 C 200 200 270 ${d.cy+d.h/2} 360 ${d.cy+d.h/2}"
            fill="none" stroke="url(#${d.grad})" stroke-width="${d.h}" stroke-linecap="round" opacity=".72" filter="url(#sg-glow)">
            <animate attributeName="stroke-dashoffset" from="700" to="0" dur="${1.1+i*.18}s" fill="freeze" begin="0.${i+1}s"/>
          </path>
          <!-- dest rect -->
          <rect x="360" y="${d.cy}" width="130" height="${d.h+20}" rx="8"
            fill="rgba(${d.color==='#4338CA'?'67,56,202':d.color==='#8B5CF6'?'139,92,246':d.color==='#C79A38'?'199,154,56':d.color==='#10B981'?'16,185,129':'245,158,11'},.1)"
            stroke="rgba(${d.color==='#4338CA'?'67,56,202':d.color==='#8B5CF6'?'139,92,246':d.color==='#C79A38'?'199,154,56':d.color==='#10B981'?'16,185,129':'245,158,11'},.3)" stroke-width="1"/>
          <text x="425" y="${d.cy+d.h/2+5}" text-anchor="middle" fill="${d.color}" font-size="10" font-family="Space Grotesk" font-weight="700">${d.label}</text>
          <text x="425" y="${d.cy+d.h/2+19}" text-anchor="middle" fill="#64748B" font-size="8.5" font-family="JetBrains Mono">${d.rev}</text>`).join('')}
        </svg>
      </div>

      <!-- Revenue bars -->
      <div class="reveal-right" style="display:flex;flex-direction:column;gap:14px">
        <div class="label" style="margin-bottom:10px;color:#C79A38">Annual Recurring Revenue Breakdown</div>
        ${[
          {label:'Moguls AI',    rev:'$420K ARR', pct:84, color:'#4338CA'},
          {label:'Oracle OS',   rev:'$360K ARR', pct:72, color:'#8B5CF6'},
          {label:'Studio',      rev:'$180K ARR', pct:44, color:'#C79A38'},
          {label:'Growth',      rev:'$140K ARR', pct:34, color:'#10B981'},
          {label:'Academy',     rev:'$80K ARR',  pct:20, color:'#F59E0B'},
        ].map(b=>`
        <div class="glass-dark" style="border-radius:14px;padding:16px 20px">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px">
            <div style="display:flex;align-items:center;gap:9px">
              <div style="width:8px;height:8px;border-radius:50%;background:${b.color};box-shadow:0 0 6px ${b.color}80"></div>
              <span class="font-display" style="font-size:13.5px;font-weight:600;color:#F1F5F9">${b.label}</span>
            </div>
            <span class="font-mono" style="font-size:12px;color:${b.color};font-weight:600">${b.rev}</span>
          </div>
          <div class="progress-track">
            <div class="progress-fill" style="width:${b.pct}%;background:linear-gradient(90deg,${b.color}70,${b.color})"></div>
          </div>
        </div>`).join('')}

        <!-- Total ARR -->
        <div class="glass-dark" style="border-radius:14px;padding:20px 22px;border:1px solid rgba(199,154,56,.28);background:rgba(199,154,56,.05)">
          <div style="display:flex;justify-content:space-between;align-items:center">
            <div>
              <div class="label" style="margin-bottom:5px;color:#C79A38">Total Projected ARR</div>
              <div class="font-display gold-shimmer" style="font-size:36px;font-weight:800;line-height:1">$1.18M+</div>
            </div>
            <div style="text-align:right">
              <div class="font-mono" style="font-size:9px;color:#10B981;letter-spacing:.14em">↑ EXPONENTIAL</div>
              <div class="font-mono" style="font-size:9px;color:#475569;letter-spacing:.1em;margin-top:3px">PORTFOLIO Y2</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ═══════════════════ DIVISIONS PREVIEW ═══════════════════ -->
<section style="padding:100px 0;background:#F8F9FC">
  <div class="container">
    <div class="reveal" style="text-align:center;margin-bottom:60px">
      <div class="section-intro-line" style="margin:0 auto 18px"></div>
      <div class="label" style="margin-bottom:14px">The Empire System</div>
      <h2 class="section-title font-display" style="font-size:clamp(26px,4vw,48px);color:#0F172A">
        Six <span class="gold">Precision Divisions</span>
      </h2>
    </div>

    <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:20px">
      ${DIVISIONS.map((d,i)=>`
      <a href="/divisions/${d.id}" style="text-decoration:none" class="reveal" style="animation-delay:${i*.08}s" data-h="1">
        <div class="glass card" style="padding:28px;height:100%;border:1px solid rgba(199,154,56,.1);position:relative;overflow:hidden"
          onmouseover="this.style.borderColor='${d.color}33';this.style.boxShadow='0 12px 50px ${d.color}12'"
          onmouseout="this.style.borderColor='rgba(199,154,56,.1)';this.style.boxShadow=''">
          <div style="position:absolute;top:0;right:0;width:150px;height:150px;background:radial-gradient(circle at top right,${d.color}07,transparent 70%);pointer-events:none"></div>
          <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:22px">
            <div style="width:54px;height:54px;border-radius:14px;background:${d.color}10;border:1px solid ${d.color}20;display:flex;align-items:center;justify-content:center;font-size:22px">${d.emoji}</div>
            <span class="badge ${d.bc}" style="font-size:8px">${d.status}</span>
          </div>
          <div class="font-mono" style="font-size:8px;color:#94A3B8;letter-spacing:.16em;margin-bottom:5px">${d.n} / DIVISION</div>
          <h3 class="font-display" style="font-size:20px;font-weight:700;color:#0F172A;margin-bottom:5px">${d.title}</h3>
          <p style="font-size:12px;color:${d.color};font-weight:600;margin-bottom:12px;letter-spacing:.02em">${d.tag}</p>
          <p style="font-size:13px;color:#64748B;line-height:1.72;margin-bottom:18px">${d.desc}</p>
          <div style="display:flex;align-items:center;gap:5px;font-family:'Space Grotesk',sans-serif;font-size:11.5px;font-weight:700;color:${d.color}">
            Deep Dive
            <svg style="width:13px;height:13px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9,18 15,12 9,6"/></svg>
          </div>
        </div>
      </a>`).join('')}
    </div>

    <div class="reveal" style="text-align:center;margin-top:44px">
      <a href="/divisions" class="btn btn-gold" data-h="1">View Full Empire System <svg style="width:13px;height:13px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9,18 15,12 9,6"/></svg></a>
    </div>
  </div>
</section>

<!-- ═══════════════════ CTA BAND ═══════════════════ -->
<section style="padding:100px 0;background:#FFFFFF">
  <div class="container">
    <div class="reveal glass" style="border-radius:28px;padding:80px 56px;text-align:center;max-width:820px;margin:0 auto;position:relative;overflow:hidden">
      <div style="position:absolute;inset:0;background:radial-gradient(ellipse 70% 70% at 50% 50%,rgba(67,56,202,.04) 0%,transparent 70%);pointer-events:none"></div>
      <!-- Corner brackets -->
      ${[['top:20px;left:20px;border-top:2px solid rgba(199,154,56,.35);border-left:2px solid rgba(199,154,56,.35);border-radius:3px 0 0 0'],['top:20px;right:20px;border-top:2px solid rgba(199,154,56,.35);border-right:2px solid rgba(199,154,56,.35);border-radius:0 3px 0 0'],['bottom:20px;left:20px;border-bottom:2px solid rgba(199,154,56,.35);border-left:2px solid rgba(199,154,56,.35);border-radius:0 0 0 3px'],['bottom:20px;right:20px;border-bottom:2px solid rgba(199,154,56,.35);border-right:2px solid rgba(199,154,56,.35);border-radius:0 0 3px 0']].map(([s])=>`<div style="position:absolute;${s};width:32px;height:32px"></div>`).join('')}
      <div class="label" style="margin-bottom:16px">Ready to Join the Empire?</div>
      <h2 class="section-title font-display" style="font-size:clamp(28px,4.5vw,54px);color:#0F172A;margin-bottom:20px">
        Your Empire Starts With<br><span class="gold">One Request</span>
      </h2>
      <p style="font-size:14px;color:#64748B;max-width:460px;margin:0 auto 40px;line-height:1.82">
        We are selective about who we work with. If you're building something that deserves empire-grade infrastructure, let's talk.
      </p>
      <div style="display:flex;gap:16px;justify-content:center;flex-wrap:wrap">
        <a href="/contact" class="btn btn-gold" data-h="1">Submit Launch Request <svg style="width:13px;height:13px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9,18 15,12 9,6"/></svg></a>
        <a href="/oracle-os" class="btn btn-outline" data-h="1">Explore Oracle OS</a>
      </div>
    </div>
  </div>
</section>

<script>
// Show HUDs only on wide screens
function updateHUDs(){
  var show = window.innerWidth >= 1280;
  document.querySelectorAll('.hero-hud-left,.hero-hud-right').forEach(function(el){
    el.style.display = show ? 'block' : 'none';
  });
}
updateHUDs();
window.addEventListener('resize', updateHUDs, {passive:true});

// Subtle parallax on crown
document.addEventListener('mousemove', function(e){
  var cx = window.innerWidth/2, cy = window.innerHeight/2;
  var rx = (e.clientY-cy)/cy * -6;
  var ry = (e.clientX-cx)/cx * 6;
  var crown = document.querySelector('[style*="floatBadge"]');
  if(crown) crown.style.setProperty('--rx', rx+'deg');
});
</script>
`, 'home')
}

// ─── ORACLE OS PAGE ─────────────────────────────────────────────────────────
function oraclePage(): string {
  const layers = [
    {
      id:'mission',n:'01',title:'Mission Control',sub:'Real-time command center for executive strategy',
      color:'#4338CA',icon:'📊',
      detail:'The nerve center of your empire. Mission Control gives executives a real-time, single-source-of-truth view of every KPI, capital movement, and strategic milestone — before others even open their laptops.',
      metrics:[['Decision Speed','3.2× faster'],['KPIs Tracked','240+'],['Alert Latency','<100ms']],
      features:['KPI Tracking Dashboard','Capital Pulse Monitor','Executive Briefing Engine','Strategic Alignment Score']
    },
    {
      id:'twin',n:'02',title:'Company Twin',sub:'Digital replica of your full organizational structure',
      color:'#8B5CF6',icon:'🏙️',
      detail:'A living, breathing digital replica of your company. The Company Twin models every team, process, and dependency — giving leadership the power to simulate restructures and spot bottlenecks before they cost millions.',
      metrics:[['Org Accuracy','98.7%'],['Scenario Models','1,200+'],['Update Frequency','Real-time']],
      features:['Org Topology Map','Capacity Mapping','Dependency Chains','Performance Heatmap']
    },
    {
      id:'competitor',n:'03',title:'Competitor Matrix',sub:'AI-powered competitive intelligence at scale',
      color:'#C79A38',icon:'⚔️',
      detail:'Know your competition better than they know themselves. The Competitor Matrix continuously scans markets, benchmarks performance, and identifies strategic gaps — so your next move is always five steps ahead.',
      metrics:[['Competitors Tracked','500+'],['Signal Accuracy','94.2%'],['Update Cycle','24h']],
      features:['Benchmarking Engine','Market Gap Analysis','Strategic Gap Finder','Threat Detection']
    },
    {
      id:'simulation',n:'04',title:'Simulation Engine',sub:'Scenario modeling and decision intelligence',
      color:'#10B981',icon:'🧠',
      detail:"Don't make decisions in the dark. The Simulation Engine lets you run unlimited strategic scenarios and receive AI-generated Stabilization Reports before committing a single dollar.",
      metrics:[['Scenarios/day','10,000+'],['Prediction Accuracy','89.4%'],['Report Time','< 3 min']],
      features:['Scenario Builders','Predictive Analytics','Stabilization Reports','Monte Carlo Engine']
    },
  ]

  return layout('Oracle OS — Strategic Intelligence', `

<!-- ═══════════════════ ORACLE HERO ═══════════════════ -->
<section style="padding:130px 0 72px;background:linear-gradient(168deg,#FFFFFF 0%,#F8F9FC 60%,#F0F0FA 100%);position:relative;overflow:hidden">
  <div style="position:absolute;inset:0;pointer-events:none;overflow:hidden">
    <div style="position:absolute;top:30%;left:50%;transform:translate(-50%,-50%);width:700px;height:400px;background:radial-gradient(ellipse,rgba(139,92,246,.055) 0%,transparent 65%)"></div>
  </div>
  <div class="container" style="position:relative;z-index:1">

    <div style="display:flex;flex-direction:column;align-items:center;text-align:center;max-width:720px;margin:0 auto">
      <a href="/" class="font-mono fade-up d0" style="font-size:9.5px;color:#94A3B8;letter-spacing:.2em;text-decoration:none;display:inline-flex;align-items:center;gap:6px;margin-bottom:24px">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="15,18 9,12 15,6"/></svg> BACK TO HOME
      </a>

      <div class="label fade-up d1" style="margin-bottom:16px">Oracle OS // Strategic Intelligence Layer</div>

      <h1 class="section-title font-display fade-up d2" style="font-size:clamp(32px,5.5vw,64px);color:#0F172A;margin-bottom:20px">
        Centralize. <span class="gold">Simulate.</span><br>
        Strategize. <span class="violet-text">Dominate.</span>
      </h1>

      <p class="fade-up d3" style="font-size:15px;color:#475569;line-height:1.85;margin-bottom:28px;max-width:560px">
        Oracle OS is the AI-powered operating brain for elite business operators. Four intelligence layers. One unstoppable command center that gives you omniscient visibility over your empire.
      </p>

      <div class="fade-up d4" style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap;margin-bottom:40px">
        <span class="badge badge-green">SYSTEM ACTIVE</span>
        <span class="badge badge-violet">ENTERPRISE LICENSE</span>
        <span style="display:inline-flex;align-items:center;gap:5px;font-family:'JetBrains Mono',monospace;font-size:9px;font-weight:600;letter-spacing:.14em;text-transform:uppercase;padding:3px 11px;border-radius:999px;background:rgba(199,154,56,.1);color:#C79A38;border:1px solid rgba(199,154,56,.25)">v2.0.1 STABLE</span>
      </div>

      <!-- 4-layer visual preview -->
      <div class="fade-up d5" style="display:flex;flex-direction:column;gap:7px;width:100%;max-width:480px">
        ${layers.map((l,i)=>`
        <div style="display:flex;align-items:center;gap:12px;padding:12px 18px;border-radius:10px;background:rgba(255,255,255,.78);backdrop-filter:blur(12px);border:1px solid ${l.color}22;animation:slideRight .5s ease forwards;animation-delay:${.6+i*.1}s;opacity:0">
          <span style="font-size:16px">${l.icon}</span>
          <div style="flex:1;text-align:left">
            <div class="font-display" style="font-size:13px;font-weight:700;color:#0F172A">${l.title}</div>
            <div class="annotation" style="color:#94A3B8;margin-top:1px">${l.sub}</div>
          </div>
          <div style="width:8px;height:8px;border-radius:50%;background:${l.color};box-shadow:0 0 6px ${l.color}"></div>
        </div>`).join('')}
      </div>
    </div>
  </div>
</section>

<!-- ═══════════════════ INTELLIGENCE LAYERS ═══════════════════ -->
<section style="padding:72px 0;background:#FFFFFF">
  <div class="container">

    <div class="reveal" style="text-align:center;margin-bottom:52px">
      <div class="label" style="margin-bottom:12px">Deep Intelligence Architecture</div>
      <h2 class="section-title font-display" style="font-size:clamp(24px,3.5vw,44px);color:#0F172A">
        Four Layers, One <span class="gold">Command Center</span>
      </h2>
    </div>

    <div style="display:grid;grid-template-columns:2fr 3fr;gap:28px;align-items:start">

      <!-- Left: selector -->
      <div style="display:flex;flex-direction:column;gap:10px">
        <div class="annotation" style="margin-bottom:6px;color:#94A3B8">Select Intelligence Layer</div>
        ${layers.map((l,i)=>`
        <div class="layer-item reveal" id="layer-btn-${l.id}" onclick="selectOracleLayer('${l.id}')" style="animation-delay:${i*.1}s" data-h="1">
          <div style="display:flex;align-items:center;gap:13px">
            <div style="width:42px;height:42px;border-radius:11px;background:${l.color}0D;border:1px solid ${l.color}22;display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0">${l.icon}</div>
            <div>
              <div style="display:flex;align-items:center;gap:8px;margin-bottom:2px">
                <span class="font-mono" style="font-size:9px;color:#94A3B8;letter-spacing:.1em">${l.n}</span>
                <span class="font-display" style="font-size:14px;font-weight:700;color:#0F172A">${l.title}</span>
              </div>
              <p style="font-size:11px;color:#94A3B8;line-height:1.3">${l.sub}</p>
            </div>
          </div>
          <svg style="width:13px;height:13px;flex-shrink:0;color:#CBD5E1;transition:transform .3s" class="lchev-${l.id}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9,18 15,12 9,6"/></svg>
        </div>`).join('')}
      </div>

      <!-- Right: detail panel -->
      <div id="oracle-detail">
        ${layers.map((l,i)=>`
        <div id="detail-${l.id}" style="display:${i===0?'block':'none'}">
          <div class="glass reveal" style="border-radius:22px;padding:36px;margin-bottom:16px;border:1px solid ${l.color}1A">
            <div style="display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:22px">
              <div>
                <div class="annotation" style="margin-bottom:7px;color:#94A3B8">${l.n} / Oracle OS Module</div>
                <h2 class="font-display" style="font-size:28px;font-weight:800;color:${l.color}">${l.title}</h2>
              </div>
              <div style="width:60px;height:60px;border-radius:16px;background:${l.color}0D;border:1.5px solid ${l.color}22;display:flex;align-items:center;justify-content:center;font-size:28px;flex-shrink:0">${l.icon}</div>
            </div>
            <p style="font-size:14px;color:#475569;line-height:1.85;margin-bottom:26px">${l.detail}</p>

            <!-- Metrics -->
            <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-bottom:24px;padding-bottom:24px;border-bottom:1px solid rgba(199,154,56,.1)">
              ${l.metrics.map(([k,v])=>`
              <div class="metric" style="border-left-color:${l.color}45">
                <div class="annotation" style="color:#94A3B8;margin-bottom:4px">${k}</div>
                <div class="font-display" style="font-size:18px;font-weight:800;color:${l.color}">${v}</div>
              </div>`).join('')}
            </div>

            <!-- Features -->
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
              ${l.features.map(f=>`
              <div style="display:flex;align-items:center;gap:8px;padding:9px 12px;border-radius:8px;background:${l.color}07">
                <div style="width:5px;height:5px;border-radius:50%;background:${l.color};flex-shrink:0;box-shadow:0 0 5px ${l.color}80"></div>
                <span style="font-size:12.5px;color:#475569;font-weight:500">${f}</span>
              </div>`).join('')}
            </div>
          </div>
        </div>`).join('')}
      </div>
    </div>

    <!-- Stack visual -->
    <div class="reveal" style="margin-top:52px">
      <div class="annotation" style="margin-bottom:18px;text-align:center;color:#94A3B8">Oracle OS Architecture Stack — All Layers Active</div>
      <div style="max-width:580px;margin:0 auto;display:flex;flex-direction:column;gap:8px">
        ${layers.map((l,i)=>`
        <div onclick="selectOracleLayer('${l.id}')" id="stack-${l.id}" class="layer-item" style="cursor:pointer" data-h="1">
          <div style="display:flex;align-items:center;gap:11px">
            <span style="font-size:15px">${l.icon}</span>
            <span class="font-display" style="font-size:13.5px;font-weight:600;color:#0F172A">${l.title}</span>
          </div>
          <span id="sstat-${l.id}" class="font-mono" style="font-size:9px;color:#CBD5E1;letter-spacing:.08em">${i===0?'● ACTIVE':'○ READY'}</span>
        </div>`).join('')}
      </div>
    </div>
  </div>
</section>

<!-- ═══════════════════ SIMULATION TERMINAL ═══════════════════ -->
<section style="padding:72px 0;background:#F8F9FC">
  <div class="container">
    <div class="reveal glass" style="border-radius:24px;padding:0;max-width:920px;margin:0 auto;overflow:hidden">

      <!-- Terminal header bar -->
      <div style="padding:18px 28px;background:rgba(255,255,255,.6);border-bottom:1px solid rgba(199,154,56,.12);display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:12px">
        <div>
          <div class="label" style="margin-bottom:4px">Simulation Engine — Live Demo</div>
          <h3 class="font-display" style="font-size:22px;font-weight:700;color:#0F172A">Decision Simulation Terminal</h3>
        </div>
        <button onclick="runOracleSimulation()" id="sim-btn" class="btn btn-gold" style="padding:11px 26px;font-size:11px" data-h="1">
          <svg style="width:12px;height:12px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polygon points="5,3 19,12 5,21"/></svg>
          Run Simulation
        </button>
      </div>

      <!-- Terminal body -->
      <div style="padding:28px">
        <div class="terminal" id="sim-terminal" style="min-height:210px">
          <div class="terminal-bar">
            <div class="t-dot" style="background:#FF5F57"></div>
            <div class="t-dot" style="background:#FFBD2E"></div>
            <div class="t-dot" style="background:#28C840"></div>
            <span class="font-mono" style="font-size:10px;color:#334155;margin-left:8px;letter-spacing:.1em">oracle@moguls:~ — simulation-engine</span>
          </div>
          <div><span class="prompt">oracle@moguls</span><span class="cmd">:~$ </span><span style="color:#64748B;animation:blink 1s step-end infinite">▋</span></div>
          <div class="comment" style="margin-top:10px;font-size:11px">// Awaiting simulation trigger... Press "Run Simulation" to initiate analysis</div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ═══════════════════ ORACLE CTA ═══════════════════ -->
<section style="padding:72px 0;background:#0A0B1A;position:relative;overflow:hidden">
  <div style="position:absolute;inset:0;background:radial-gradient(ellipse 60% 80% at 50% 50%,rgba(139,92,246,.08) 0%,transparent 70%);pointer-events:none"></div>
  <div class="container" style="text-align:center;max-width:600px;margin:0 auto;position:relative;z-index:1">
    <div class="section-intro-line reveal" style="margin:0 auto 20px;background:linear-gradient(90deg,#8B5CF6,#C79A38)"></div>
    <h2 class="section-title font-display reveal" style="font-size:clamp(26px,4vw,46px);color:#F8F9FC;margin-bottom:16px">
      Ready for <span class="gold">Oracle OS?</span>
    </h2>
    <p class="reveal" style="font-size:14px;color:#475569;margin-bottom:32px;line-height:1.85">
      Get enterprise access to all four intelligence layers. Built for founders and operators who operate at the speed of markets.
    </p>
    <div class="reveal" style="display:flex;gap:14px;justify-content:center;flex-wrap:wrap">
      <a href="/contact" class="btn btn-gold" data-h="1">Request Enterprise Access <svg style="width:13px;height:13px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9,18 15,12 9,6"/></svg></a>
      <a href="/divisions" class="btn btn-dark" data-h="1">Explore All Divisions</a>
    </div>
  </div>
</section>

<script>
const layerColors = {mission:'#4338CA',twin:'#8B5CF6',competitor:'#C79A38',simulation:'#10B981'};
let currentLayer = 'mission';

function selectOracleLayer(id){
  ['mission','twin','competitor','simulation'].forEach(l=>{
    const d = document.getElementById('detail-'+l);
    const btn = document.getElementById('layer-btn-'+l);
    const st = document.getElementById('stack-'+l);
    const ss = document.getElementById('sstat-'+l);
    if(d) d.style.display='none';
    if(btn){ btn.style.background='rgba(255,255,255,.72)'; btn.style.borderLeftColor='transparent'; btn.style.boxShadow=''; }
    if(st){ st.style.background='rgba(255,255,255,.72)'; st.style.borderColor='rgba(199,154,56,.1)'; }
    if(ss){ ss.textContent='○ READY'; ss.style.color='#CBD5E1'; }
  });
  const c = layerColors[id];
  const d = document.getElementById('detail-'+id);
  const btn = document.getElementById('layer-btn-'+id);
  const st = document.getElementById('stack-'+id);
  const ss = document.getElementById('sstat-'+id);
  if(d) d.style.display='block';
  if(btn){ btn.style.background='rgba(255,255,255,.95)'; btn.style.borderLeftColor=c; btn.style.boxShadow='0 4px 24px '+c+'20'; }
  if(st){ st.style.background=c+'10'; st.style.borderColor=c+'40'; }
  if(ss){ ss.textContent='● ACTIVE'; ss.style.color=c; }
  currentLayer=id;
}
selectOracleLayer('mission');

// Simulation
const simLines = [
  {pre:'[ORACLE OS]',  txt:'Simulation protocol initiated...', color:'#64748B'},
  {pre:'[SCAN]',       txt:'Parsing 247 live data streams across 6 market segments', color:'#94A3B8'},
  {pre:'[AI]',         txt:'Cross-referencing competitor signals — 500+ entities tracked', color:'#8B5CF6'},
  {pre:'[ANALYSIS]',   txt:'Strategic vulnerability detected in Sector 4 — confidence 94.2%', color:'#F59E0B'},
  {pre:'[MONTE CARLO]',txt:'Running 10,000 scenario simulations...', color:'#4338CA'},
  {pre:'[MODEL]',      txt:'Processing 38 strategic permutations at machine speed', color:'#4338CA'},
  {pre:'[RESULT]',     txt:'Optimal strategic pivot identified — projected +34% revenue upside', color:'#10B981'},
  {pre:'[REPORT]',     txt:'Stabilization Report generated — 98.2% confidence interval', color:'#10B981'},
  {pre:'[STATUS ✓]',   txt:'Decision Package ready for executive review', color:'#C79A38'},
];

function runOracleSimulation(){
  const t = document.getElementById('sim-terminal');
  const btn = document.getElementById('sim-btn');
  if(!t || !btn) return;
  btn.setAttribute('disabled','');
  btn.innerHTML = '<svg style="width:12px;height:12px;animation:rotateHex .8s linear infinite" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg> Processing...';
  t.innerHTML = '<div class="terminal-bar"><div class="t-dot" style="background:#FF5F57"></div><div class="t-dot" style="background:#FFBD2E"></div><div class="t-dot" style="background:#28C840"></div><span class="font-mono" style="font-size:10px;color:#334155;margin-left:8px;letter-spacing:.1em">oracle@moguls:~ — simulation-engine</span></div>';
  let i=0;
  const iv = setInterval(()=>{
    if(i>=simLines.length){
      clearInterval(iv);
      btn.removeAttribute('disabled');
      btn.innerHTML = '<svg style="width:12px;height:12px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polygon points="5,3 19,12 5,21"/></svg> Run Again';
      return;
    }
    const line = simLines[i];
    const el = document.createElement('div');
    el.style.cssText='margin-bottom:5px;animation:fadeIn .3s ease';
    el.innerHTML = '<span style="color:'+line.color+';font-size:11px">['+line.pre.replace('[','').replace(']','')+']</span> <span style="color:#F1F5F9;font-size:11.5px">'+line.txt+'</span>';
    t.appendChild(el);
    t.scrollTop = t.scrollHeight;
    i++;
  }, 400);
}
</script>
`, 'oracle')
}

// ─── DIVISIONS PAGE ──────────────────────────────────────────────────────────
function divisionsPage(): string {
  return layout('The System — All Divisions', `

<!-- ═══════════════════ DIVISIONS HERO ═══════════════════ -->
<section style="padding:130px 0 72px;background:linear-gradient(168deg,#FFFFFF,#F8F9FC);position:relative;overflow:hidden">
  <div style="position:absolute;inset:0;pointer-events:none;overflow:hidden">
    <div style="position:absolute;top:40%;left:50%;transform:translate(-50%,-50%);width:700px;height:400px;background:radial-gradient(ellipse,rgba(199,154,56,.05) 0%,transparent 65%)"></div>
  </div>
  <div class="container" style="position:relative;z-index:1">
    <div style="text-align:center;max-width:680px;margin:0 auto">
      <a href="/" class="font-mono fade-up d0" style="font-size:9.5px;color:#94A3B8;letter-spacing:.2em;text-decoration:none;display:inline-flex;align-items:center;gap:6px;margin-bottom:26px">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="15,18 9,12 15,6"/></svg> HOME
      </a>
      <div class="section-intro-line fade-up d1" style="margin:0 auto 18px"></div>
      <div class="label fade-up d1" style="margin-bottom:16px">The Empire System — Six Divisions</div>
      <h1 class="section-title font-display fade-up d2" style="font-size:clamp(30px,5.5vw,62px);color:#0F172A;margin-bottom:20px">
        One Vision.<br><span class="gold">Six Divisions.</span><br>Infinite Impact.
      </h1>
      <p class="fade-up d3" style="font-size:14px;color:#64748B;max-width:500px;margin:0 auto;line-height:1.85">
        Each division is a precision-engineered powerhouse. Together, they form an unstoppable empire ecosystem designed for compounding growth.
      </p>
    </div>
  </div>
</section>

<!-- Oracle OS Featured Card -->
<section style="padding:0 0 40px;background:#F8F9FC">
  <div class="container">
    <div class="reveal glass" style="border-radius:26px;padding:52px;border:1.5px solid rgba(139,92,246,.2);position:relative;overflow:hidden">
      <div style="position:absolute;top:0;right:0;width:350px;height:350px;background:radial-gradient(circle at top right,rgba(139,92,246,.07),transparent 65%);pointer-events:none"></div>
      <div style="position:absolute;top:0;right:0;width:200px;height:200px;border-bottom-left-radius:100%;background:linear-gradient(225deg,rgba(139,92,246,.06),transparent);pointer-events:none"></div>

      <div style="display:grid;grid-template-columns:1fr 1fr;gap:44px;align-items:center" class="two-col">
        <div>
          <div style="display:flex;align-items:center;gap:10px;margin-bottom:18px;flex-wrap:wrap">
            <span style="font-family:'JetBrains Mono',monospace;font-size:9px;color:#8B5CF6;letter-spacing:.14em;background:rgba(139,92,246,.08);padding:4px 11px;border-radius:5px;border:1px solid rgba(139,92,246,.2)">FLAGSHIP PRODUCT</span>
            <span class="badge badge-green">ACTIVE</span>
          </div>
          <div style="display:flex;align-items:center;gap:14px;margin-bottom:16px">
            <span style="font-size:36px">🔮</span>
            <h2 class="font-display" style="font-size:44px;font-weight:800;background:linear-gradient(135deg,#A78BFA,#8B5CF6,#6D28D9);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;line-height:1">Oracle OS</h2>
          </div>
          <p style="font-size:14px;color:#475569;line-height:1.85;margin-bottom:26px">The AI-powered strategic intelligence operating system. Four layers of intelligence — Mission Control, Company Twin, Competitor Matrix, and Simulation Engine — unified into one command center.</p>
          <a href="/oracle-os" class="btn btn-gold" data-h="1">Explore Oracle OS <svg style="width:13px;height:13px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9,18 15,12 9,6"/></svg></a>
        </div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px">
          ${[
            {name:'Mission Control',icon:'📊',color:'#4338CA'},
            {name:'Company Twin',   icon:'🏙️',color:'#8B5CF6'},
            {name:'Competitor Matrix',icon:'⚔️',color:'#C79A38'},
            {name:'Simulation Engine',icon:'🧠',color:'#10B981'},
          ].map(f=>`
          <div style="border-radius:14px;padding:18px;background:rgba(139,92,246,.06);border:1px solid rgba(139,92,246,.12);transition:all .3s"
            onmouseover="this.style.background='rgba(139,92,246,.1)'" onmouseout="this.style.background='rgba(139,92,246,.06)'">
            <span style="font-size:20px;display:block;margin-bottom:9px">${f.icon}</span>
            <div class="font-display" style="font-size:12.5px;font-weight:700;color:#0F172A">${f.name}</div>
          </div>`).join('')}
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Division cards -->
<section style="padding:20px 0 80px;background:#F8F9FC">
  <div class="container">
    <div class="label reveal" style="margin-bottom:24px">All Divisions</div>
    <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:22px">
      ${DIVISIONS.map((d,i)=>`
      <div class="reveal" style="animation-delay:${i*.08}s">
        <a href="/divisions/${d.id}" style="text-decoration:none;display:block" data-h="1">
          <div class="glass card" style="height:100%;border-radius:22px;padding:30px;border:1.5px solid rgba(199,154,56,.1);position:relative;overflow:hidden"
            onmouseover="this.style.borderColor='${d.color}35';this.style.boxShadow='0 12px 50px ${d.color}12';this.style.transform='translateY(-5px)'"
            onmouseout="this.style.borderColor='rgba(199,154,56,.1)';this.style.boxShadow='';this.style.transform=''">
            <div style="position:absolute;top:0;right:0;width:180px;height:180px;background:radial-gradient(circle at top right,${d.color}07,transparent 65%);pointer-events:none;transition:opacity .3s"></div>
            <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:22px">
              <div style="width:56px;height:56px;border-radius:16px;background:${d.color}10;border:1.5px solid ${d.color}20;display:flex;align-items:center;justify-content:center;font-size:24px">${d.emoji}</div>
              <span class="badge ${d.bc}" style="font-size:8px">${d.status}</span>
            </div>
            <div class="font-mono" style="font-size:8px;color:#94A3B8;letter-spacing:.16em;margin-bottom:5px">${d.n} / DIVISION</div>
            <h3 class="font-display" style="font-size:21px;font-weight:700;color:#0F172A;margin-bottom:6px">${d.title}</h3>
            <p style="font-size:12.5px;color:${d.color};font-weight:600;margin-bottom:13px;letter-spacing:.02em">${d.tag}</p>
            <p style="font-size:13px;color:#64748B;line-height:1.75;margin-bottom:18px">${d.desc}</p>
            <div style="display:flex;flex-wrap:wrap;gap:6px;margin-bottom:20px">
              ${d.services.map(s=>`<span style="font-family:'JetBrains Mono',monospace;font-size:8.5px;padding:3px 9px;border-radius:5px;background:${d.color}0A;color:${d.color};border:1px solid ${d.color}22;letter-spacing:.06em">${s}</span>`).join('')}
            </div>
            <div style="display:flex;justify-content:space-between;align-items:center;padding-top:16px;border-top:1px solid rgba(199,154,56,.1)">
              <span class="font-mono" style="font-size:9px;color:#94A3B8;letter-spacing:.06em">${d.rev}</span>
              <div style="display:flex;align-items:center;gap:5px;font-family:'Space Grotesk',sans-serif;font-size:11.5px;font-weight:700;color:${d.color}">
                Deep Dive
                <svg style="width:12px;height:12px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9,18 15,12 9,6"/></svg>
              </div>
            </div>
          </div>
        </a>
      </div>`).join('')}
    </div>
  </div>
</section>
`, 'divisions')
}

// ─── DIVISION DETAIL PAGE ────────────────────────────────────────────────────
function divisionPage(slug: string): string {
  const divData: Record<string, any> = {
    'moguls-ai':{n:'01',title:'Moguls AI',tag:'Intelligence at Machine Speed',color:'#4338CA',emoji:'🤖',bc:'badge-green',status:'ACTIVE',
      hero:"We build the neural infrastructure of modern empires — autonomous AI systems, intelligent agents, and workflow automation that scales your operations without adding headcount.",
      services:[
        {name:'AI Agent Development',desc:'Custom autonomous agents for research, outreach, reporting, and decision support that operate 24/7 at machine speed.'},
        {name:'LLM Dashboard Systems',desc:'Beautiful, functional AI-powered command centers integrated into your existing technology stack.'},
        {name:'Process Automation',desc:'End-to-end workflow automation that eliminates operational bottlenecks and reclaims hundreds of hours.'},
        {name:'Predictive Analytics',desc:'ML models that forecast revenue, churn, and market movements with institutional-grade accuracy.'},
        {name:'Neural Workflow Systems',desc:'AI-orchestrated multi-agent pipelines that replicate entire departments autonomously.'},
      ],
      pkgs:[{name:'Starter Intelligence',price:'$2,500',desc:'One AI agent + dashboard integration',dur:'4 weeks'},{name:'Operations Suite',price:'$8,000',desc:'Full process automation + 3 agents',dur:'8 weeks'},{name:'Enterprise Neural Stack',price:'Custom',desc:'Complete AI infrastructure buildout',dur:'Ongoing'}],
      roi:[['Time Saved','68%'],['Cost Reduction','45%'],['Scale Factor','10×']]},

    'moguls-studio':{n:'03',title:'Moguls Studio',tag:'Brand Architecture at the Highest Level',color:'#C79A38',emoji:'🎨',bc:'badge-green',status:'ACTIVE',
      hero:"We don't design logos — we architect brand empires. From identity systems to cinematic brand films, our studio output commands instant market authority and commands premium pricing.",
      services:[
        {name:'Brand Identity Systems',desc:'Logo, typography, color architecture, and complete brand guidelines that define your empire\'s visual language.'},
        {name:'UI/UX Product Design',desc:'Web and mobile interfaces designed to convert at the highest level while delighting users.'},
        {name:'Pitch Architecture',desc:'Investor decks and presentation systems that close deals at maximum valuation.'},
        {name:'Motion Design',desc:'Brand films, animations, and content that moves audiences and builds legend.'},
        {name:'Content Production',desc:'Photography, video, and editorial content at premium production quality.'},
      ],
      pkgs:[{name:'Brand Foundation',price:'$4,500',desc:'Logo + identity system + guidelines',dur:'3 weeks'},{name:'Full Brand Build',price:'$12,000',desc:'Identity + web + pitch deck',dur:'6 weeks'},{name:'Studio Retainer',price:'$3,500/mo',desc:'Ongoing creative production',dur:'Monthly'}],
      roi:[['Brand Recall','+85%'],['Conversion Rate','+40%'],['Deal Close Rate','+3×']]},

    'moguls-growth':{n:'04',title:'Moguls Growth',tag:'Performance-Engineered Scaling',color:'#10B981',emoji:'📈',bc:'badge-green',status:'ACTIVE',
      hero:"Growth without a system is just luck. We architect performance marketing machines and partnership ecosystems that generate compounding revenue velocity at institutional scale.",
      services:[
        {name:'Performance Marketing',desc:'Paid acquisition across Meta, Google, LinkedIn, and emerging platforms with surgical attribution.'},
        {name:'Lead Velocity Systems',desc:'Automated outbound systems that fill pipelines without cold calling.'},
        {name:'Partnership Mapping',desc:'Strategic alliance identification and partnership development for exponential growth.'},
        {name:'Funnel Architecture',desc:'End-to-end conversion funnel design and optimization for maximum revenue extraction.'},
        {name:'Growth Analytics',desc:'Attribution modeling and growth experiment frameworks built for serious operators.'},
      ],
      pkgs:[{name:'Growth Starter',price:'$3,000/mo',desc:'One channel + funnel setup',dur:'3 months'},{name:'Velocity Pack',price:'$7,500/mo',desc:'Multi-channel + lead system',dur:'6 months'},{name:'Empire Growth',price:'Custom',desc:'Full acquisition engine buildout',dur:'Ongoing'}],
      roi:[['Lead Volume','+320%'],['CAC Reduction','-42%'],['Revenue Added','$1.2M avg']]},

    'moguls-academy':{n:'05',title:'Moguls Academy',tag:'Elevating the Next Generation',color:'#F59E0B',emoji:'🎓',bc:'badge-amber',status:'BUILDING',
      hero:"The next era demands operators who understand AI, capital, and digital leverage. Moguls Academy trains the leaders of tomorrow, today — at the intersection of strategy and execution.",
      services:[
        {name:'Corporate Training Tracks',desc:'Custom team training on AI tools, digital strategy, and performance systems for enterprises.'},
        {name:'AI & Automation Courses',desc:'Self-paced programs on building AI-powered workflows that compound over time.'},
        {name:'Creator Monetization',desc:'Programs for content creators to build sustainable, scalable revenue empires.'},
        {name:'Executive Coaching',desc:'One-on-one strategic coaching for founders and C-suite operators at every stage.'},
        {name:'Cohort Programs',desc:'Intensive 8-week cohorts for high-potential operators ready to scale fast.'},
      ],
      pkgs:[{name:'Corporate Workshop',price:'$5,000',desc:'Full-day team training session',dur:'1 day'},{name:'AI Mastery Course',price:'$997',desc:'Complete AI workflow program',dur:'8 weeks'},{name:'Empire Cohort',price:'$4,500',desc:'Intensive 8-week operator program',dur:'8 weeks'}],
      roi:[['Team Efficiency','+60%'],['Skill Rating','4.8/5'],['Operator Retention','+35%']]},

    'moguls-labs':{n:'06',title:'Moguls Labs',tag:'Where the Future Gets Built',color:'#EC4899',emoji:'🧪',bc:'badge-violet',status:'DEV',
      hero:"The most valuable companies of the next decade don't exist yet. Moguls Labs is where we build them — systematically, strategically, and with the surgical speed of an empire.",
      services:[
        {name:'SaaS Micro-App Incubation',desc:'Rapid development and validation of SaaS concepts with built-in go-to-market strategy.'},
        {name:'Technology R&D',desc:'Applied research into emerging technologies with proven commercial potential.'},
        {name:'IP Creation',desc:'Proprietary algorithm, data asset, and technology development for long-term competitive moat.'},
        {name:'Prototype Development',desc:'MVPs built to investor-grade quality in compressed timelines.'},
        {name:'Future Architecture',desc:'Long-horizon thinking on where industries are heading and how to capitalize.'},
      ],
      pkgs:[{name:'Prototype Sprint',price:'$15,000',desc:'MVP in 4 weeks',dur:'4 weeks'},{name:'Lab Partnership',price:'Equity-based',desc:'Co-founder-style engagement',dur:'6 months'},{name:'Incubation Program',price:'Revenue Share',desc:'Concept to launch support',dur:'6+ months'}],
      roi:[['Build Speed','4× faster'],['Launch Success','72%'],['IP Value','Proprietary']]},
  }

  const d = divData[slug]
  if(!d) return layout('Division Not Found', `
    <section style="padding:180px 0;text-align:center;background:#F8F9FC">
      <div class="container">
        <h2 class="font-display" style="font-size:30px;color:#0F172A;margin-bottom:16px">Division not found</h2>
        <a href="/divisions" class="btn btn-gold" style="display:inline-flex">← Back to Divisions</a>
      </div>
    </section>
  `)

  return layout(`${d.title} — Division`, `

<!-- ═══════════════════ DIVISION HERO ═══════════════════ -->
<section style="padding:130px 0 64px;background:linear-gradient(168deg,#FFFFFF,#F8F9FC);position:relative;overflow:hidden">
  <div style="position:absolute;top:0;right:0;width:500px;height:500px;background:radial-gradient(circle at top right,${d.color}06,transparent 65%);pointer-events:none"></div>
  <div class="container" style="position:relative;z-index:1">

    <a href="/divisions" class="font-mono fade-up d0" style="font-size:9.5px;color:#94A3B8;letter-spacing:.2em;text-decoration:none;display:inline-flex;align-items:center;gap:6px;margin-bottom:28px">
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="15,18 9,12 15,6"/></svg> ALL DIVISIONS
    </a>

    <div class="fade-up d1" style="display:flex;align-items:flex-start;gap:26px;margin-bottom:36px;flex-wrap:wrap">
      <div style="width:80px;height:80px;border-radius:20px;background:${d.color}10;border:2px solid ${d.color}25;display:flex;align-items:center;justify-content:center;font-size:34px;flex-shrink:0;box-shadow:0 8px 32px ${d.color}18">${d.emoji}</div>
      <div>
        <div style="display:flex;align-items:center;gap:11px;margin-bottom:9px;flex-wrap:wrap">
          <span class="font-mono" style="font-size:9px;color:#94A3B8;letter-spacing:.18em">${d.n} / DIVISION</span>
          <span class="badge ${d.bc}">${d.status}</span>
        </div>
        <h1 class="font-display" style="font-size:clamp(30px,5vw,56px);font-weight:800;color:${d.color};line-height:1.06;margin-bottom:9px">${d.title}</h1>
        <p style="font-size:16px;color:#475569;font-weight:500">${d.tag}</p>
      </div>
    </div>

    <p class="fade-up d2" style="font-size:15px;color:#475569;line-height:1.9;max-width:720px;margin-bottom:52px">${d.hero}</p>

    <!-- ROI metrics -->
    <div class="fade-up d3" style="display:flex;gap:28px;flex-wrap:wrap">
      ${d.roi.map(([k,v]: string[])=>`
      <div class="glass" style="border-radius:14px;padding:18px 24px;min-width:130px">
        <div class="font-display" style="font-size:26px;font-weight:800;color:${d.color};margin-bottom:4px">${v}</div>
        <div class="annotation" style="color:#94A3B8">${k}</div>
      </div>`).join('')}
    </div>
  </div>
</section>

<!-- ═══════════════════ SERVICES ═══════════════════ -->
<section style="padding:72px 0;background:#FFFFFF">
  <div class="container">
    <div class="reveal" style="margin-bottom:28px">
      <div class="section-intro-line" style="margin-bottom:16px"></div>
      <div class="label">Core Services</div>
    </div>
    <div style="display:flex;flex-direction:column;gap:13px;margin-bottom:64px">
      ${d.services.map((s: any,i: number)=>`
      <div class="reveal glass" style="border-radius:16px;padding:24px 28px;display:flex;align-items:flex-start;gap:16px;animation-delay:${i*.07}s;border-left:3px solid ${d.color}40"
        onmouseover="this.style.borderLeftColor='${d.color}'" onmouseout="this.style.borderLeftColor='${d.color}40'">
        <div style="width:36px;height:36px;border-radius:10px;background:${d.color}0D;display:flex;align-items:center;justify-content:center;flex-shrink:0">
          <div style="width:8px;height:8px;border-radius:50%;background:${d.color}"></div>
        </div>
        <div>
          <h3 class="font-display" style="font-size:16px;font-weight:700;color:#0F172A;margin-bottom:5px">${s.name}</h3>
          <p style="font-size:13px;color:#64748B;line-height:1.72">${s.desc}</p>
        </div>
      </div>`).join('')}
    </div>

    <!-- Packages -->
    <div class="reveal" style="margin-bottom:28px">
      <div class="label">Engagement Packages</div>
    </div>
    <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:18px;margin-bottom:64px">
      ${d.pkgs.map((pk: any,i: number)=>`
      <div class="reveal glass" style="border-radius:18px;padding:28px;animation-delay:${i*.1}s;${i===1?`border:2px solid ${d.color}30`:'border:1px solid rgba(199,154,56,.1)'}">
        ${i===1?`<div style="display:inline-block;font-family:'JetBrains Mono',monospace;font-size:8px;color:${d.color};letter-spacing:.14em;text-transform:uppercase;background:${d.color}10;padding:3px 9px;border-radius:4px;border:1px solid ${d.color}25;margin-bottom:14px">RECOMMENDED</div>`:''}
        <h4 class="font-display" style="font-size:16px;font-weight:700;color:#0F172A;margin-bottom:6px">${pk.name}</h4>
        <div class="font-display gold-shimmer" style="font-size:28px;font-weight:800;margin-bottom:8px">${pk.price}</div>
        <p style="font-size:13px;color:#64748B;margin-bottom:14px;line-height:1.65">${pk.desc}</p>
        <div class="annotation" style="color:#94A3B8">Timeline: ${pk.dur}</div>
        <div style="margin-top:18px;height:1.5px;background:linear-gradient(90deg,${d.color}40,transparent)"></div>
      </div>`).join('')}
    </div>

    <!-- CTA -->
    <div class="reveal glass" style="border-radius:20px;padding:44px;text-align:center;max-width:640px;margin:0 auto;border:1px solid ${d.color}1A">
      <h3 class="font-display" style="font-size:26px;font-weight:800;color:#0F172A;margin-bottom:12px">Ready to Engage <span style="color:${d.color}">${d.title}?</span></h3>
      <p style="font-size:14px;color:#64748B;max-width:380px;margin:0 auto 28px;line-height:1.8">Submit a launch request and our team will get back to you within 24 hours.</p>
      <div style="display:flex;gap:13px;justify-content:center;flex-wrap:wrap">
        <a href="/contact" class="btn btn-gold" data-h="1">Submit Launch Request <svg style="width:13px;height:13px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9,18 15,12 9,6"/></svg></a>
        <a href="/divisions" class="btn btn-outline" data-h="1">All Divisions</a>
      </div>
    </div>
  </div>
</section>
`, 'division')
}

// ─── ABOUT PAGE ──────────────────────────────────────────────────────────────
function aboutPage(): string {
  return layout('About — The Vision', `

<!-- ABOUT HERO -->
<section style="padding:130px 0 72px;background:linear-gradient(168deg,#FFFFFF,#F8F9FC);position:relative;overflow:hidden">
  <div style="position:absolute;inset:0;pointer-events:none;overflow:hidden">
    <div style="position:absolute;top:40%;left:50%;transform:translate(-50%,-50%);width:700px;height:400px;background:radial-gradient(ellipse,rgba(67,56,202,.04) 0%,transparent 65%)"></div>
  </div>
  <div class="container" style="position:relative;z-index:1">
    <a href="/" class="font-mono fade-up d0" style="font-size:9.5px;color:#94A3B8;letter-spacing:.2em;text-decoration:none;display:inline-flex;align-items:center;gap:6px;margin-bottom:26px">
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="15,18 9,12 15,6"/></svg> HOME
    </a>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:72px;align-items:center" class="two-col">
      <div>
        <div class="section-intro-line fade-up d1" style="margin-bottom:18px"></div>
        <div class="label fade-up d1" style="margin-bottom:16px">The Origin — The Vision</div>
        <h1 class="section-title font-display fade-up d2" style="font-size:clamp(32px,5vw,58px);color:#0F172A;margin-bottom:22px">
          We Don't Build<br>Companies. We Build<br><span class="gold">Empires.</span>
        </h1>
        <p class="fade-up d3" style="font-size:15px;color:#475569;line-height:1.88;margin-bottom:28px">
          Mansas Moguls was founded on a singular conviction: that the next generation of business leaders needs more than capital — they need infrastructure, intelligence, and an operational system designed for compounding dominance.
        </p>
        <p class="fade-up d4" style="font-size:14px;color:#64748B;line-height:1.85;margin-bottom:36px">
          Named after Mansa Musa — history's wealthiest sovereign and greatest empire builder — we carry that legacy forward into the digital age. Through six precision-engineered divisions and Oracle OS, we give modern operators the tools to build their own empires.
        </p>
        <div class="fade-up d5" style="display:flex;gap:14px;flex-wrap:wrap">
          <a href="/contact" class="btn btn-gold" data-h="1">Join the Empire <svg style="width:13px;height:13px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9,18 15,12 9,6"/></svg></a>
          <a href="/divisions" class="btn btn-outline" data-h="1">Explore The System</a>
        </div>
      </div>
      <div class="fade-up d3" style="display:grid;grid-template-columns:1fr 1fr;gap:14px">
        ${[
          {label:'Portfolio Companies',value:'7+',color:'#C79A38',bg:'rgba(199,154,56,.07)'},
          {label:'Active Divisions',value:'6',color:'#4338CA',bg:'rgba(67,56,202,.07)'},
          {label:'Team Members',value:'38',color:'#8B5CF6',bg:'rgba(139,92,246,.07)'},
          {label:'Valuation Target',value:'$1.2B+',color:'#10B981',bg:'rgba(16,185,129,.07)'},
        ].map((s,i)=>`
        <div class="glass" style="border-radius:18px;padding:28px;background:${s.bg};border:1px solid ${s.color}18">
          <div class="font-display" style="font-size:34px;font-weight:800;color:${s.color};line-height:1;margin-bottom:8px">${s.value}</div>
          <div class="annotation" style="color:#64748B">${s.label}</div>
        </div>`).join('')}
      </div>
    </div>
  </div>
</section>

<!-- MISSION & VALUES -->
<section style="padding:80px 0;background:#FFFFFF">
  <div class="container">
    <div class="reveal" style="text-align:center;margin-bottom:56px">
      <div class="section-intro-line" style="margin:0 auto 18px"></div>
      <div class="label" style="margin-bottom:14px">Mission & Values</div>
      <h2 class="section-title font-display" style="font-size:clamp(26px,4vw,46px);color:#0F172A">
        The <span class="gold">Empire Doctrine</span>
      </h2>
    </div>

    <div style="display:grid;grid-template-columns:1fr 1fr;gap:32px;margin-bottom:48px" class="two-col">
      <div class="reveal glass" style="border-radius:22px;padding:40px">
        <div style="font-size:28px;margin-bottom:18px">🎯</div>
        <h3 class="font-display" style="font-size:22px;font-weight:700;color:#0F172A;margin-bottom:14px">Our Mission</h3>
        <p style="font-size:14px;color:#64748B;line-height:1.88">To build, acquire, and scale the most impactful businesses of the next decade — leveraging AI, capital, and operational supremacy to create empires that outlast trends and inspire generations.</p>
      </div>
      <div class="reveal glass" style="border-radius:22px;padding:40px">
        <div style="font-size:28px;margin-bottom:18px">👁️</div>
        <h3 class="font-display" style="font-size:22px;font-weight:700;color:#0F172A;margin-bottom:14px">Our Vision</h3>
        <p style="font-size:14px;color:#64748B;line-height:1.88">A world where ambitious operators have access to empire-grade infrastructure — the AI systems, capital intelligence, and strategic frameworks that were once reserved for the elite few.</p>
      </div>
    </div>

    <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:18px">
      ${[
        {word:'Discipline',icon:'⚔️',desc:'Ruthless focus on what compounds. Zero tolerance for distraction from the empire\'s objectives.',color:'#4338CA'},
        {word:'Intelligence',icon:'🧠',desc:'Data-driven decisions, AI-augmented execution, and machine-speed insight generation.',color:'#8B5CF6'},
        {word:'Innovation',icon:'⚡',desc:'Constant forward motion. Building what doesn\'t exist yet. Owning what others haven\'t imagined.',color:'#C79A38'},
        {word:'Impact',icon:'👑',desc:'Legacy over profit. Building entities that transform industries and inspire operators globally.',color:'#10B981'},
      ].map((v,i)=>`
      <div class="reveal glass card" style="padding:28px;animation-delay:${i*.1}s;border-top:3px solid ${v.color}">
        <div style="font-size:24px;margin-bottom:14px">${v.icon}</div>
        <h4 class="font-display" style="font-size:17px;font-weight:700;color:#0F172A;margin-bottom:10px">${v.word}</h4>
        <p style="font-size:12.5px;color:#64748B;line-height:1.75">${v.desc}</p>
      </div>`).join('')}
    </div>
  </div>
</section>

<!-- NAME ORIGIN -->
<section style="padding:80px 0;background:#0A0B1A;position:relative;overflow:hidden">
  <div style="position:absolute;inset:0;background-image:linear-gradient(rgba(199,154,56,.022) 1px,transparent 1px),linear-gradient(90deg,rgba(199,154,56,.022) 1px,transparent 1px);background-size:72px 72px;pointer-events:none"></div>
  <div class="container" style="position:relative;z-index:1">
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:64px;align-items:center" class="two-col">
      <div class="reveal-left">
        <div class="label" style="margin-bottom:16px;color:#C79A38">The Name</div>
        <h2 class="section-title font-display" style="font-size:clamp(26px,4vw,46px);color:#F8F9FC;margin-bottom:20px">
          Why <span class="gold">Mansas Moguls</span>?
        </h2>
        <p style="font-size:14px;color:#475569;line-height:1.9;margin-bottom:18px">
          Mansa Musa I — Emperor of the Mali Empire (1312–1337) — is widely considered the wealthiest person in history. His empire wasn't just rich; it was an ecosystem of trade, knowledge, and systems that compounded across generations.
        </p>
        <p style="font-size:14px;color:#475569;line-height:1.9;margin-bottom:28px">
          "Moguls" — from the great Mughal Empire — represents apex empire builders. We carry that legacy forward: builders who don't just create businesses, but construct civilizations of commerce.
        </p>
        <div style="display:flex;flex-direction:column;gap:12px">
          ${[
            ['MANSA MUSA','Richest person in recorded history. Built compounding systems.'],
            ['MUGHAL LEGACY','Empire builders who created enduring civilization infrastructure.'],
            ['OUR MANDATE','Modern empire architecture for the digital age operators.'],
          ].map(([t,d])=>`
          <div style="display:flex;align-items:flex-start;gap:12px;padding:14px 18px;border-radius:10px;background:rgba(199,154,56,.06);border:1px solid rgba(199,154,56,.14)">
            <div style="width:6px;height:6px;border-radius:50%;background:#C79A38;margin-top:6px;flex-shrink:0;box-shadow:0 0 6px rgba(199,154,56,.6)"></div>
            <div>
              <div class="font-mono" style="font-size:9px;color:#C79A38;letter-spacing:.14em;margin-bottom:3px">${t}</div>
              <div style="font-size:12.5px;color:#64748B;line-height:1.6">${d}</div>
            </div>
          </div>`).join('')}
        </div>
      </div>
      <div class="reveal-right">
        <div class="glass-dark" style="border-radius:22px;padding:40px">
          <div style="text-align:center;margin-bottom:28px">
            <div style="width:100px;height:100px;margin:0 auto 18px;clip-path:polygon(50% 0%,100% 25%,100% 75%,50% 100%,0% 75%,0% 25%);background:linear-gradient(135deg,#1E1B4B,#0E0D2E);display:flex;align-items:center;justify-content:center;box-shadow:0 0 60px rgba(67,56,202,.35)">
              <svg viewBox="0 0 60 52" style="width:44px;height:38px">
                <defs><linearGradient id="ag" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#F0D597"/><stop offset="50%" stop-color="#C79A38"/><stop offset="100%" stop-color="#8B6914"/></linearGradient></defs>
                <path d="M6 44L9.5 28L17 38L30 17L43 38L50.5 28L54 44Z" fill="url(#ag)"/>
                <rect x="6" y="44" width="48" height="5.5" rx="2.5" fill="url(#ag)"/>
                <polygon points="30,15 33.5,21 30,23 26.5,21" fill="#4338CA"/>
              </svg>
            </div>
            <div class="font-display gold-shimmer" style="font-size:22px;font-weight:800;letter-spacing:.14em;text-transform:uppercase">Mansas Moguls</div>
            <div class="annotation" style="color:#475569;margin-top:5px">Empire Operating System</div>
          </div>
          <div class="divider" style="margin-bottom:22px"></div>
          <div style="display:flex;flex-direction:column;gap:10px">
            ${['Building the Future','Owning the Now','Inspiring Forever','Compounding Always'].map(m=>`
            <div style="display:flex;align-items:center;gap:10px">
              <div style="width:5px;height:5px;border-radius:50%;background:#C79A38;box-shadow:0 0 6px rgba(199,154,56,.6)"></div>
              <span class="font-display" style="font-size:14px;font-weight:600;color:#F1F5F9">${m}</span>
            </div>`).join('')}
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- CTA -->
<section style="padding:80px 0;background:#F8F9FC">
  <div class="container" style="text-align:center;max-width:620px;margin:0 auto">
    <div class="section-intro-line reveal" style="margin:0 auto 20px"></div>
    <h2 class="section-title font-display reveal" style="font-size:clamp(26px,4vw,46px);color:#0F172A;margin-bottom:16px">
      Become Part of the <span class="gold">Empire</span>
    </h2>
    <p class="reveal" style="font-size:14px;color:#64748B;margin-bottom:32px;line-height:1.85">
      Whether you're a founder, investor, or operator — if you're building something worth empire-grade infrastructure, we want to hear from you.
    </p>
    <div class="reveal" style="display:flex;gap:14px;justify-content:center;flex-wrap:wrap">
      <a href="/contact" class="btn btn-gold" data-h="1">Submit Launch Request <svg style="width:13px;height:13px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9,18 15,12 9,6"/></svg></a>
      <a href="/divisions" class="btn btn-outline" data-h="1">Explore The System</a>
    </div>
  </div>
</section>
`, 'about')
}

// ─── CONTACT PAGE ────────────────────────────────────────────────────────────
function contactPage(): string {
  return layout('Contact — Launch Request', `

<!-- CONTACT HERO -->
<section style="padding:130px 0 72px;background:linear-gradient(168deg,#FFFFFF,#F8F9FC);position:relative;overflow:hidden">
  <div style="position:absolute;inset:0;pointer-events:none;overflow:hidden">
    <div style="position:absolute;top:40%;left:50%;transform:translate(-50%,-50%);width:600px;height:350px;background:radial-gradient(ellipse,rgba(199,154,56,.05) 0%,transparent 65%)"></div>
  </div>
  <div class="container" style="position:relative;z-index:1">

    <div style="display:grid;grid-template-columns:1fr 1fr;gap:72px;align-items:start" class="two-col">

      <!-- Left: info -->
      <div>
        <a href="/" class="font-mono fade-up d0" style="font-size:9.5px;color:#94A3B8;letter-spacing:.2em;text-decoration:none;display:inline-flex;align-items:center;gap:6px;margin-bottom:26px">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="15,18 9,12 15,6"/></svg> HOME
        </a>
        <div class="section-intro-line fade-up d1" style="margin-bottom:18px"></div>
        <div class="label fade-up d1" style="margin-bottom:16px">Initiate Contact</div>
        <h1 class="section-title font-display fade-up d2" style="font-size:clamp(30px,5vw,56px);color:#0F172A;margin-bottom:22px">
          Submit Your<br><span class="gold">Launch Request</span>
        </h1>
        <p class="fade-up d3" style="font-size:14px;color:#64748B;line-height:1.88;margin-bottom:32px">
          We are highly selective about who we work with. Every engagement begins with a Launch Request — our way of understanding your vision, your ambition, and whether we're the right empire partner for you.
        </p>

        <div class="fade-up d4" style="display:flex;flex-direction:column;gap:14px;margin-bottom:36px">
          ${[
            {icon:'⚡',title:'Response Time',   detail:'24 hours or less'},
            {icon:'🎯',title:'Qualification Rate',detail:'Top 15% of requests accepted'},
            {icon:'🔒',title:'Confidentiality',  detail:'All requests are NDA-protected'},
          ].map(i=>`
          <div style="display:flex;align-items:center;gap:14px;padding:16px 18px;border-radius:12px;background:rgba(255,255,255,.72);backdrop-filter:blur(12px);border:1px solid rgba(199,154,56,.12)">
            <span style="font-size:20px">${i.icon}</span>
            <div>
              <div class="font-display" style="font-size:13px;font-weight:600;color:#0F172A;margin-bottom:2px">${i.title}</div>
              <div style="font-size:12px;color:#64748B">${i.detail}</div>
            </div>
          </div>`).join('')}
        </div>

        <!-- Terminal-style contact info -->
        <div class="terminal fade-up d5" style="border-radius:14px;padding:0">
          <div class="terminal-bar">
            <div class="t-dot" style="background:#FF5F57"></div>
            <div class="t-dot" style="background:#FFBD2E"></div>
            <div class="t-dot" style="background:#28C840"></div>
            <span class="font-mono" style="font-size:9.5px;color:#334155;margin-left:8px;letter-spacing:.1em">contact@moguls — secure channel</span>
          </div>
          <div style="padding:20px 22px">
            <div><span class="prompt">moguls</span><span class="cmd">:~$ </span><span>cat contact.config</span></div>
            <div style="margin-top:8px;font-size:11.5px">
              <div style="margin-bottom:5px"><span style="color:#475569">email   </span><span style="color:#F0D597">→ </span><span>contact@mansasmoguls.com</span></div>
              <div style="margin-bottom:5px"><span style="color:#475569">location</span><span style="color:#F0D597">→ </span><span>Dubai, UAE | Global</span></div>
              <div style="margin-bottom:5px"><span style="color:#475569">status  </span><span style="color:#F0D597">→ </span><span style="color:#10B981">ACCEPTING NEW REQUESTS</span></div>
              <div><span style="color:#475569">division</span><span style="color:#F0D597">→ </span><span style="color:#8B5CF6">SELECT FROM FORM →</span></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Right: form -->
      <div class="fade-up d3">
        <div class="glass" style="border-radius:24px;padding:40px;border:1px solid rgba(199,154,56,.16)">
          <div class="label" style="margin-bottom:20px">Launch Request Form</div>

          <form id="launch-form" onsubmit="handleSubmit(event)" style="display:flex;flex-direction:column;gap:18px">

            <div style="display:grid;grid-template-columns:1fr 1fr;gap:14px">
              <div class="field">
                <label>First Name</label>
                <input type="text" placeholder="Mansa" required/>
              </div>
              <div class="field">
                <label>Last Name</label>
                <input type="text" placeholder="Mogul" required/>
              </div>
            </div>

            <div class="field">
              <label>Email Address</label>
              <input type="email" placeholder="you@empire.com" required/>
            </div>

            <div class="field">
              <label>Company / Project</label>
              <input type="text" placeholder="Your empire name" required/>
            </div>

            <div class="field">
              <label>Division of Interest</label>
              <select>
                <option value="">— Select a Division —</option>
                <option>Moguls AI — AI Systems & Automation</option>
                <option>Oracle OS — Strategic Intelligence</option>
                <option>Moguls Studio — Brand Architecture</option>
                <option>Moguls Growth — Performance Scaling</option>
                <option>Moguls Academy — Education Programs</option>
                <option>Moguls Labs — R&D & Incubation</option>
                <option>Full Empire System — Multiple Divisions</option>
              </select>
            </div>

            <div class="field">
              <label>Investment Level</label>
              <select>
                <option value="">— Select Range —</option>
                <option>$2,500 — $10,000</option>
                <option>$10,000 — $25,000</option>
                <option>$25,000 — $100,000</option>
                <option>$100,000+ (Enterprise)</option>
              </select>
            </div>

            <div class="field">
              <label>Your Vision / Request</label>
              <textarea rows="4" placeholder="Describe your empire, your challenge, and what you need to scale..." style="resize:vertical"></textarea>
            </div>

            <button type="submit" class="btn btn-gold" style="justify-content:center;padding:15px;font-size:12px" data-h="1" id="submit-btn">
              <svg style="width:13px;height:13px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M22 2L11 13"/><path d="M22 2L15 22 11 13 2 9l20-7z"/></svg>
              Transmit Launch Request
            </button>

          </form>

          <!-- Success state (hidden) -->
          <div id="form-success" style="display:none;text-align:center;padding:24px">
            <div style="font-size:40px;margin-bottom:16px">👑</div>
            <h3 class="font-display" style="font-size:22px;font-weight:700;color:#10B981;margin-bottom:10px">Request Transmitted</h3>
            <p style="font-size:14px;color:#64748B;line-height:1.8">Your launch request has been received. Our team will review it and reach out within 24 hours.</p>
            <div class="terminal" style="margin-top:20px;border-radius:10px;padding:16px;font-size:11px">
              <div><span style="color:#10B981">✓</span> Launch Request logged — ID: <span style="color:#C79A38">MM-${Math.floor(Math.random()*90000)+10000}</span></div>
              <div><span style="color:#10B981">✓</span> Status: <span style="color:#10B981">UNDER REVIEW</span></div>
              <div><span style="color:#10B981">✓</span> Response ETA: <span style="color:#F0D597">24 hours</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<script>
function handleSubmit(e){
  e.preventDefault();
  const btn = document.getElementById('submit-btn');
  const form = document.getElementById('launch-form');
  const success = document.getElementById('form-success');
  if(!btn || !form || !success) return;

  btn.setAttribute('disabled','');
  btn.innerHTML = '<svg style="width:13px;height:13px;animation:rotateHex .8s linear infinite" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg> Transmitting...';

  setTimeout(()=>{
    form.style.opacity='0';
    form.style.transition='opacity .4s';
    setTimeout(()=>{
      form.style.display='none';
      success.style.display='block';
    }, 400);
  }, 1400);
}
</script>
`, 'contact')
}

// ─── EXPORT ──────────────────────────────────────────────────────────────────
export function getPage(type: string, slug?: string): string {
  switch(type) {
    case 'home':      return homePage()
    case 'oracle':    return oraclePage()
    case 'divisions': return divisionsPage()
    case 'division':  return divisionPage(slug || '')
    case 'about':     return aboutPage()
    case 'contact':   return contactPage()
    default:          return layout('Page Not Found', `<section style="padding:180px 0;text-align:center"><h2 class="font-display" style="font-size:28px;color:#0F172A">Page not found</h2><a href="/" class="btn btn-gold" style="margin-top:24px;display:inline-flex">← Home</a></section>`)
  }
}
