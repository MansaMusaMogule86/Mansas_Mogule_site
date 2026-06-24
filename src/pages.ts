import { layout } from './layout'

// ─── SHARED DIVISION DATA ──────────────────────────────────────────────────
const DIVISIONS = [
  {
    id:'moguls-ai', n:'01', title:'Moguls AI', tag:'Intelligence at Machine Speed',
    color:'#4338CA', color2:'#6366F1', glow:'rgba(67,56,202,.28)', icon:'◈', emoji:'🤖',
    status:'ACTIVE', bc:'badge-green',
    desc:'Autonomous AI systems, custom agents, and intelligent workflow automation that transforms operations from manual to machine-speed.',
    services:['AI Agent Development','Custom LLM Dashboards','Process Automation','Predictive Analytics'],
    rev:'Setup Fee + SaaS Retainer', clients:'24+', arr:'$420K'
  },
  {
    id:'moguls-studio', n:'02', title:'Moguls Studio', tag:'Brand Architecture at the Highest Level',
    color:'#C79A38', color2:'#F0D597', glow:'rgba(199,154,56,.28)', icon:'◇', emoji:'🎨',
    status:'ACTIVE', bc:'badge-green',
    desc:'Brand identity systems, UI/UX, packaging, and premium presentation architecture that commands instant market authority.',
    services:['Brand Identity Systems','UI/UX Design','Pitch Architecture','Motion Design'],
    rev:'Project + Retainer', clients:'18+', arr:'$280K'
  },
  {
    id:'moguls-growth', n:'03', title:'Moguls Growth', tag:'Performance-Engineered Scaling',
    color:'#10B981', color2:'#34D399', glow:'rgba(16,185,129,.28)', icon:'◉', emoji:'📈',
    status:'ACTIVE', bc:'badge-green',
    desc:'High-velocity lead acquisition, strategic partnership mapping, and performance marketing at institutional scale.',
    services:['Performance Marketing','Lead Velocity Systems','Partnership Mapping','Growth Analytics'],
    rev:'Performance Fee + Retainer', clients:'31+', arr:'$340K'
  },
  {
    id:'moguls-academy', n:'04', title:'Moguls Academy', tag:'Elevating the Next Generation',
    color:'#F59E0B', color2:'#FBBF24', glow:'rgba(245,158,11,.28)', icon:'◎', emoji:'🎓',
    status:'BUILDING', bc:'badge-amber',
    desc:'Elite education programs, corporate training tracks, and creator monetization systems for ambitious operators.',
    services:['Corporate Training','AI Workshops','Creator Monetization','Cohort Programs'],
    rev:'Course Sales + Memberships', clients:'200+', arr:'$80K'
  },
  {
    id:'moguls-labs', n:'05', title:'Moguls Labs', tag:'Where the Future Gets Built',
    color:'#EC4899', color2:'#F472B6', glow:'rgba(236,72,153,.28)', icon:'◆', emoji:'🧪',
    status:'DEV', bc:'badge-violet',
    desc:"R&D incubator for next-gen SaaS micro-apps, experimental technology, and the businesses of tomorrow.",
    services:['SaaS Incubation','Tech R&D','IP Creation','Prototype Development'],
    rev:'Equity + Revenue Share', clients:'8+', arr:'$60K'
  },
]

// ─── HOME PAGE (PUBLIC LANDING) ────────────────────────────────────────────
function homePage(): string {
  return layout('Mansas Moguls', `

<!-- ═══════════════════ CINEMATIC 3D EMPIRE COMMAND CENTER ═══════════════════ -->
<section style="min-height:100vh;display:flex;align-items:center;justify-content:center;overflow:hidden;background:linear-gradient(180deg,#F8F7F3 0%,#FFFFFF 50%,#EEF0F7 100%);padding:80px 20px;position:relative;perspective:1200px">

  <!-- Animated grid background -->
  <div style="position:absolute;inset:0;pointer-events:none;overflow:hidden">
    <div style="position:absolute;inset:0;background-image:linear-gradient(0deg,rgba(212,175,55,.03) 1px,transparent 1px),linear-gradient(90deg,rgba(212,175,55,.03) 1px,transparent 1px);background-size:80px 80px;animation:gridDrift 40s linear infinite"></div>

    <!-- Radial glows -->
    <div style="position:absolute;top:50%;left:50%;width:1200px;height:1200px;background:radial-gradient(circle,rgba(109,53,255,.08) 0%,transparent 70%);transform:translate(-50%,-50%);filter:blur(40px)"></div>
    <div style="position:absolute;top:35%;left:50%;width:900px;height:900px;background:radial-gradient(circle,rgba(212,175,55,.06) 0%,transparent 70%);transform:translate(-50%,-50%);filter:blur(60px);animation:glowPulse 6s ease-in-out infinite"></div>
  </div>

  <!-- Main 3D isometric command center -->
  <div style="position:relative;z-index:2;width:100%;max-width:1400px;perspective:1200px">

    <!-- Central 3D monument container -->
    <div style="position:relative;display:flex;align-items:center;justify-content:center;min-height:700px;width:100%">

      <!-- Layered glass platforms (3D depth) -->
      <div style="position:absolute;left:50%;top:50%;transform:translate(-50%,-50%) perspective(1200px)">

        <!-- Bottom marble base layer -->
        <div style="position:absolute;width:600px;height:200px;background:linear-gradient(180deg,#F5F3EE 0%,#E8E4DB 50%,#D4CFBE 100%);border-radius:0 0 40px 40px;box-shadow:0 40px 80px rgba(0,0,0,.1),0 0 1px rgba(212,175,55,.4) inset;transform:translateZ(-60px) rotateX(5deg);opacity:.95"></div>

        <!-- Middle navy glass layer -->
        <div style="position:absolute;width:580px;height:280px;background:linear-gradient(180deg,rgba(16,22,74,.5) 0%,rgba(7,10,45,.6) 100%);border-radius:0 0 30px 30px;backdrop-filter:blur(20px);border:1px solid rgba(212,175,55,.15);box-shadow:0 20px 60px rgba(7,10,45,.3),inset 0 1px 0 rgba(255,255,255,.1);transform:translateZ(-30px) rotateX(3deg)"></div>

        <!-- Top glass layer with glow -->
        <div style="position:absolute;width:560px;height:360px;background:linear-gradient(180deg,rgba(255,255,255,.5) 0%,rgba(238,240,247,.3) 100%);border-radius:30px;backdrop-filter:blur(30px);border:2px solid rgba(212,175,55,.25);box-shadow:0 0 40px rgba(109,53,255,.2),inset 0 1px 20px rgba(255,255,255,.3);transform:translateZ(0px)"></div>

        <!-- Inner glow (violet energy) -->
        <div style="position:absolute;width:540px;height:340px;background:radial-gradient(ellipse at 50% 40%,rgba(109,53,255,.15) 0%,transparent 70%);border-radius:25px;transform:translateZ(5px);filter:blur(15px)"></div>
      </div>

      <!-- Central emblem container -->
      <div style="position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);z-index:10">

        <!-- Floating crown emblem -->
        <div style="position:relative;width:280px;height:280px;display:flex;align-items:center;justify-content:center;animation:floatCrown 4s ease-in-out infinite">
          <!-- Rotating gold rings -->
          <div style="position:absolute;inset:0;border:2px solid rgba(212,175,55,.3);border-radius:50%;animation:rotate1 20s linear infinite"></div>
          <div style="position:absolute;inset:20px;border:1px solid rgba(212,175,55,.2);border-radius:50%;animation:rotate2 30s linear infinite reverse"></div>
          <div style="position:absolute;inset:40px;border:1px dashed rgba(139,92,246,.25);border-radius:50%;animation:rotate3 40s linear infinite"></div>

          <!-- Central crown -->
          <svg viewBox="0 0 120 100" style="width:200px;height:160px;filter:drop-shadow(0 0 30px rgba(212,175,55,.6));position:relative;z-index:2">
            <defs>
              <linearGradient id="crown-gold" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#F5D77B"/>
                <stop offset="40%" stop-color="#D4AF37"/>
                <stop offset="100%" stop-color="#9B6A16"/>
              </linearGradient>
              <filter id="crown-shadow">
                <feGaussianBlur stdDeviation="2" result="b"/>
                <feOffset in="b" dy="4" result="b"/>
                <feFlood flood-color="#000" flood-opacity=".3" result="c"/>
                <feComposite in="c" in2="b" operator="in" result="s"/>
                <feComposite in="s" in2="SourceGraphic" operator="in" result="s2"/>
                <feComposite in="SourceGraphic" in2="s2" operator="arithmetic" k2="1" k3="1" result="f"/>
              </filter>
            </defs>
            <path d="M20 80L30 40L45 60L60 20L75 60L90 40L100 80Z" fill="url(#crown-gold)" filter="url(#crown-shadow)"/>
            <rect x="20" y="80" width="80" height="14" rx="5" fill="url(#crown-gold)"/>
            <circle cx="60" cy="15" r="6" fill="#B694FF" filter="url(#crown-shadow)"/>
            <polygon points="60,12 65,20 60,22 55,20" fill="#6D35FF"/>
          </svg>
        </div>

        <!-- Premium metal plaque -->
        <div style="position:absolute;bottom:-120px;left:50%;transform:translateX(-50%);width:520px;text-align:center;z-index:20">
          <div style="background:linear-gradient(180deg,#D4AF37 0%,#9B6A16 50%,#6B4C0A 100%);padding:28px 40px;border-radius:12px;box-shadow:0 20px 40px rgba(0,0,0,.3),inset 0 1px 0 rgba(255,255,255,.3),inset 0 -1px 2px rgba(0,0,0,.2);border:1px solid rgba(0,0,0,.2)">
            <div class="font-display" style="font-size:44px;font-weight:900;color:#0A0A0A;letter-spacing:.08em;line-height:1.1;margin-bottom:4px;text-shadow:0 2px 4px rgba(0,0,0,.3)">MANSAS<br>MOGULS</div>
            <div class="font-mono" style="font-size:13px;color:#0A0A0A;letter-spacing:.2em;font-weight:600;text-shadow:0 1px 2px rgba(0,0,0,.2)">EMPIRE OPERATING SYSTEM</div>
          </div>
        </div>
      </div>

      <!-- Violet energy beams (connecting lines) -->
      <svg style="position:absolute;inset:0;width:100%;height:100%;pointer-events:none;z-index:5">
        <defs>
          <linearGradient id="beam-violet" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="rgba(109,53,255,0)"/>
            <stop offset="50%" stop-color="#6D35FF"/>
            <stop offset="100%" stop-color="rgba(109,53,255,0)"/>
          </linearGradient>
          <filter id="beam-glow">
            <feGaussianBlur stdDeviation="2" result="b"/>
            <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
        </defs>

        <!-- Six connection beams to divisions (will be positioned by divs) -->
        <!-- These are drawn by the division cards below -->
      </svg>

      <!-- Six division platforms (3D modules arranged around center) -->
      <div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center">
        ${[
          {id:'moguls-ai',n:'01',title:'Moguls AI',label:'Machine Speed',icon:'🤖',color:'#4338CA',pos:'top-left',angle:'-120deg'},
          {id:'moguls-studio',n:'02',title:'Moguls Studio',label:'Brand Systems',icon:'🎨',color:'#C79A38',pos:'top-right',angle:'-60deg'},
          {id:'moguls-growth',n:'03',title:'Moguls Growth',label:'Performance',icon:'📈',color:'#10B981',pos:'right',angle:'0deg'},
          {id:'moguls-academy',n:'04',title:'Moguls Academy',label:'Next Gen',icon:'🎓',color:'#F59E0B',pos:'bottom-right',angle:'60deg'},
          {id:'moguls-labs',n:'05',title:'Moguls Labs',label:'R&D',icon:'🧪',color:'#EC4899',pos:'bottom-left',angle:'120deg'},
          {id:'moguls-intelligence',n:'OS',title:'Moguls Intelligence',label:'Strategic Core',icon:'🧠',color:'#8B5CF6',pos:'left',angle:'180deg'},
        ].map((d,i)=>`
        <div style="position:absolute;width:140px;height:140px;display:flex;align-items:center;justify-content:center;transform:translate(-50%,-50%) ${
          d.pos === 'top-left' ? 'translate(-280px,-200px)' :
          d.pos === 'top-right' ? 'translate(280px,-200px)' :
          d.pos === 'right' ? 'translate(360px,0px)' :
          d.pos === 'bottom-right' ? 'translate(280px,200px)' :
          d.pos === 'bottom-left' ? 'translate(-280px,200px)' :
          'translate(-360px,0px)'
        };transition:all .3s ease;cursor:pointer">

          <!-- SVG beam from division to center -->
          <svg style="position:absolute;inset:-200px;width:calc(100% + 400px);height:calc(100% + 400px);pointer-events:none">
            <line x1="50%" y1="50%" x2="50%" y2="0%" stroke="url(#beam-violet)" stroke-width="2" opacity="0.6" filter="url(#beam-glow)">
              <animate attributeName="stroke-width" values="2;3;2" dur="2s" repeatCount="indefinite"/>
              <animate attributeName="opacity" values="0.4;0.7;0.4" dur="3s" repeatCount="indefinite"/>
            </line>
          </svg>

          <!-- Division platform card -->
          <div style="position:relative;width:100%;height:100%;background:linear-gradient(135deg,rgba(255,255,255,.6) 0%,rgba(238,240,247,.4) 100%);backdrop-filter:blur(16px);border:2px solid ${d.color}30;border-radius:16px;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:12px;box-shadow:0 0 30px ${d.color}20,inset 0 1px 10px rgba(255,255,255,.3);transition:all .3s ease;hover:box-shadow 0 0 50px ${d.color}35,inset 0 1px 10px rgba(255,255,255,.3)">

            <!-- Division icon -->
            <div style="font-size:32px;margin-bottom:6px">${d.icon}</div>

            <!-- Division label -->
            <div class="font-mono" style="font-size:7px;color:#94A3B8;letter-spacing:.1em;margin-bottom:4px;text-align:center;font-weight:600">${d.n}</div>
            <div class="font-display" style="font-size:11px;font-weight:700;color:${d.color};letter-spacing:.02em;line-height:1.1;margin-bottom:4px;text-align:center">${d.title.split(' ')[1]}</div>
            <div class="font-mono" style="font-size:6px;color:${d.color};letter-spacing:.08em;font-weight:600">${d.label}</div>

            <!-- Status dot -->
            <div style="position:absolute;top:6px;right:6px;width:6px;height:6px;border-radius:50%;background:${d.color};box-shadow:0 0 8px ${d.color};opacity:.9"></div>
          </div>
        </div>`).join('')}
      </div>
    </div>

    <!-- HUD panels around the command center -->
    <div style="position:absolute;inset:0;pointer-events:none;z-index:3">

      <!-- Top left: Mission panel -->
      <div style="position:absolute;top:60px;left:40px;width:280px;animation:slideInLeft .8s ease-out .2s both;pointer-events:auto">
        <div style="background:rgba(255,255,255,.7);backdrop-filter:blur(12px);border:1px solid rgba(212,175,55,.2);border-radius:12px;padding:20px;box-shadow:0 10px 30px rgba(0,0,0,.08)">
          <div class="font-mono" style="font-size:9px;color:#94A3B8;letter-spacing:.12em;margin-bottom:12px;font-weight:600">OUR MISSION</div>
          <p style="font-size:12px;color:#475569;line-height:1.6;margin:0">To build, acquire, and scale transformative businesses that empower generations and elevate communities.</p>
        </div>
      </div>

      <!-- Top right: System status -->
      <div style="position:absolute;top:60px;right:40px;width:280px;animation:slideInRight .8s ease-out .2s both;pointer-events:auto">
        <div style="background:rgba(255,255,255,.7);backdrop-filter:blur(12px);border:1px solid rgba(212,175,55,.2);border-radius:12px;padding:20px;box-shadow:0 10px 30px rgba(0,0,0,.08)">
          <div class="font-mono" style="font-size:9px;color:#94A3B8;letter-spacing:.12em;margin-bottom:12px;font-weight:600">SYSTEM STATUS</div>
          ${[['NETWORK','OPTIMAL','#10B981'],['CAPITAL','DEPLOYED','#D4AF37'],['ECOSYSTEM','EXPANDING','#8B5CF6']].map(([k,v,c])=>`
          <div style="display:flex;justify-content:space-between;margin-bottom:8px;padding-bottom:8px;border-bottom:1px solid rgba(0,0,0,.05)">
            <span class="font-mono" style="font-size:9px;color:#94A3B8;letter-spacing:.08em">${k}</span>
            <span class="font-mono" style="font-size:9px;color:${c};font-weight:600;letter-spacing:.08em">${v}</span>
          </div>`).join('')}
        </div>
      </div>

      <!-- Bottom left: Core pillars -->
      <div style="position:absolute;bottom:60px;left:40px;width:280px;animation:slideInLeft .8s ease-out .4s both;pointer-events:auto">
        <div style="background:rgba(255,255,255,.7);backdrop-filter:blur(12px);border:1px solid rgba(212,175,55,.2);border-radius:12px;padding:20px;box-shadow:0 10px 30px rgba(0,0,0,.08)">
          <div class="font-mono" style="font-size:9px;color:#94A3B8;letter-spacing:.12em;margin-bottom:12px;font-weight:600">CORE PILLARS</div>
          ${['Capital Intelligence','Operational Excellence','Strategic Acquisitions','Legacy Building'].map(p=>`
          <div style="font-size:11px;color:#475569;margin-bottom:6px;display:flex;align-items:center;gap:6px">
            <span style="width:4px;height:4px;background:#D4AF37;border-radius:50%;flex-shrink:0"></span>${p}
          </div>`).join('')}
        </div>
      </div>

      <!-- Bottom right: Portfolio metrics -->
      <div style="position:absolute;bottom:60px;right:40px;width:280px;animation:slideInRight .8s ease-out .4s both;pointer-events:auto">
        <div style="background:rgba(255,255,255,.7);backdrop-filter:blur(12px);border:1px solid rgba(212,175,55,.2);border-radius:12px;padding:20px;box-shadow:0 10px 30px rgba(0,0,0,.08)">
          <div class="font-mono" style="font-size:9px;color:#94A3B8;letter-spacing:.12em;margin-bottom:12px;font-weight:600">PORTFOLIO METRICS</div>
          ${[['6','Moguls'],['1','Ecosystem'],['∞','Ventures']].map(([n,l])=>`
          <div style="display:flex;justify-content:space-between;margin-bottom:8px;padding-bottom:8px;border-bottom:1px solid rgba(0,0,0,.05)">
            <span class="font-mono" style="font-size:10px;font-weight:700;color:#D4AF37">${n}</span>
            <span class="font-mono" style="font-size:10px;color:#94A3B8;letter-spacing:.08em">${l}</span>
          </div>`).join('')}
        </div>
      </div>
    </div>
  </div>

  <!-- Scroll indicator -->
  <div style="position:absolute;bottom:40px;left:50%;transform:translateX(-50%);display:flex;flex-direction:column;align-items:center;gap:8px;opacity:.6;animation:float 2.4s ease-in-out infinite;pointer-events:none;z-index:4">
    <div class="font-mono" style="font-size:8px;color:#94A3B8;letter-spacing:.1em">SCROLL</div>
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" stroke-width="2.5"><polyline points="6,9 12,15 18,9"/></svg>
  </div>

  <!-- CSS animations -->
  <style>
    @keyframes floatCrown {
      0%, 100% { transform: translateZ(0px) translateY(0px); }
      50% { transform: translateZ(20px) translateY(-20px); }
    }
    @keyframes rotate1 {
      from { transform: rotateZ(0deg); }
      to { transform: rotateZ(360deg); }
    }
    @keyframes rotate2 {
      from { transform: rotateZ(360deg); }
      to { transform: rotateZ(0deg); }
    }
    @keyframes rotate3 {
      from { transform: rotateZ(0deg); }
      to { transform: rotateZ(360deg); }
    }
    @keyframes gridDrift {
      0% { transform: translate(0, 0); }
      100% { transform: translate(80px, 80px); }
    }
    @keyframes glowPulse {
      0%, 100% { opacity: 0.6; }
      50% { opacity: 1; }
    }
    @keyframes slideInLeft {
      from { opacity: 0; transform: translateX(-30px); }
      to { opacity: 1; transform: translateX(0); }
    }
    @keyframes slideInRight {
      from { opacity: 0; transform: translateX(30px); }
      to { opacity: 1; transform: translateX(0); }
    }
  </style>
</section>

<!-- ═════════════════ THE EMPIRE SYSTEM ═════════════════ -->
<section id="empire-system" style="padding:120px 0;background:linear-gradient(180deg,#F8F9FC 0%,#F0F3FB 100%);position:relative">
  <div class="container">

    <div class="reveal" style="text-align:center;margin-bottom:72px">
      <div class="section-intro-line" style="margin:0 auto 24px"></div>
      <h2 class="section-title font-display" style="font-size:clamp(28px,4.5vw,54px);color:#0F172A;margin-bottom:18px">
        The Empire <span class="gold">System</span>
      </h2>
      <p style="font-size:15px;color:#64748B;max-width:520px;margin:0 auto;line-height:1.85">
        Mansas Moguls in the center with six connected specialized divisions. Each operates independently but shares one intelligence core.
      </p>
    </div>

    <!-- Ecosystem visualization -->
    <div style="position:relative;max-width:1000px;margin:0 auto 32px">
      <svg viewBox="0 0 1000 650" style="width:100%;max-width:100%">
        <defs>
          <filter id="system-glow"><feGaussianBlur stdDeviation="3" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
        </defs>

        <!-- Connection lines -->
        ${[
          [500, 325, 200, 120, '#4338CA'],
          [500, 325, 800, 120, '#8B5CF6'],
          [500, 325, 800, 530, '#C79A38'],
          [500, 325, 500, 580, '#10B981'],
          [500, 325, 200, 530, '#F59E0B'],
          [500, 325, 200, 200, '#EC4899'],
        ].map(([cx,cy,nx,ny,c])=>`
        <line x1="${cx}" y1="${cy}" x2="${nx}" y2="${ny}" stroke="${c}" stroke-width="2" opacity=".25" filter="url(#system-glow)"/>
        <circle cx="${nx}" cy="${ny}" r="5" fill="${c}" opacity=".6"/>`).join('')}

        <!-- Center hub -->
        <g transform="translate(500, 325)">
          <circle r="45" fill="rgba(199,154,56,.08)" stroke="rgba(199,154,56,.3)" stroke-width="1.5"/>
          <circle r="35" fill="rgba(30,27,75,.6)" stroke="rgba(199,154,56,.4)" stroke-width="1"/>
          <text x="0" y="5" text-anchor="middle" fill="#C79A38" font-size="14" font-family="Space Grotesk" font-weight="700">MOGULS</text>
        </g>
      </svg>
    </div>

    <!-- Six divisions cards -->
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:28px">
      ${DIVISIONS.map((d,i)=>`
      <div class="reveal glass-card" style="padding:32px;position:relative;overflow:hidden;animation-delay:${i*.08}s">
        <div style="position:absolute;top:0;right:0;width:120px;height:120px;background:radial-gradient(circle,${d.glow},transparent 70%);pointer-events:none"></div>

        <div style="display:flex;align-items:center;gap:12px;margin-bottom:16px;position:relative;z-index:1">
          <div style="font-size:28px">${d.emoji}</div>
          <div style="flex:1">
            <div class="font-display" style="font-size:16px;font-weight:700;color:${d.color};margin-bottom:2px">${d.title}</div>
            <div style="font-size:11px;color:#94A3B8;letter-spacing:.1em">${d.tag}</div>
          </div>
          <div class="${d.bc}" style="font-size:8px;font-weight:600;padding:4px 10px;border-radius:6px">${d.status}</div>
        </div>

        <p style="font-size:13px;color:#64748B;line-height:1.7;margin-bottom:16px;position:relative;z-index:1">${d.desc}</p>

        <div style="padding:12px 0;border-top:1px solid rgba(199,154,56,.1);position:relative;z-index:1">
          <div style="font-size:11px;color:#94A3B8;letter-spacing:.08em;margin-bottom:6px">KEY METRICS</div>
          <div style="display:flex;justify-content:space-between;font-size:12px;color:#0F172A;font-weight:600">
            <span>${d.clients} Clients</span>
            <span>${d.arr} ARR</span>
          </div>
        </div>
      </div>`).join('')}
    </div>
  </div>
</section>

<!-- ═════════════════ MEET THE MOGULS ═════════════════ -->
<section style="padding:120px 0;background:#FFFFFF;position:relative">
  <div class="container">

    <div class="reveal" style="text-align:center;margin-bottom:72px">
      <div class="section-intro-line" style="margin:0 auto 24px"></div>
      <h2 class="section-title font-display" style="font-size:clamp(28px,4.5vw,54px);color:#0F172A;margin-bottom:18px">
        Meet The <span class="gold">Moguls</span>
      </h2>
      <p style="font-size:15px;color:#64748B;max-width:520px;margin:0 auto;line-height:1.85">
        Six specialized operators. One unified vision. Each bringing distinct expertise to the ecosystem.
      </p>
    </div>

    <!-- Premium cards for each division -->
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(320px,1fr));gap:32px">
      ${DIVISIONS.map((d,i)=>`
      <div class="reveal" style="position:relative;animation-delay:${i*.12}s">
        <div class="glass-card" style="padding:40px;height:100%;display:flex;flex-direction:column;position:relative;overflow:hidden;border:1px solid ${d.color}20">

          <!-- Background glow -->
          <div style="position:absolute;top:-40px;right:-40px;width:200px;height:200px;background:radial-gradient(circle,${d.glow},transparent 65%);pointer-events:none"></div>

          <!-- Icon and status -->
          <div style="display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:20px;position:relative;z-index:1">
            <div style="font-size:42px">${d.emoji}</div>
            <div class="${d.bc}" style="font-size:9px;font-weight:700;padding:6px 12px;border-radius:6px;letter-spacing:.1em">${d.status}</div>
          </div>

          <!-- Title and tag -->
          <div class="font-display" style="font-size:20px;font-weight:700;color:${d.color};margin-bottom:4px;position:relative;z-index:1">${d.title}</div>
          <div style="font-size:12px;color:#94A3B8;letter-spacing:.1em;margin-bottom:18px;position:relative;z-index:1">${d.tag.toUpperCase()}</div>

          <!-- Description -->
          <p style="font-size:13.5px;color:#64748B;line-height:1.8;margin-bottom:28px;position:relative;z-index:1;flex-grow:1">${d.desc}</p>

          <!-- Capabilities -->
          <div style="margin-bottom:24px;position:relative;z-index:1">
            <div class="annotation" style="margin-bottom:10px;color:#94A3B8">CAPABILITIES</div>
            <div style="display:flex;flex-wrap:wrap;gap:8px">
              ${d.services.map(s=>`<span style="font-size:11px;padding:6px 10px;background:${d.color}08;border:1px solid ${d.color}22;border-radius:5px;color:${d.color};font-weight:500">${s}</span>`).join('')}
            </div>
          </div>

          <!-- Footer metrics -->
          <div style="padding-top:16px;border-top:1px solid rgba(199,154,56,.1);display:grid;grid-template-columns:1fr 1fr;gap:12px;position:relative;z-index:1">
            <div>
              <div class="annotation" style="color:#94A3B8;margin-bottom:3px">Clients</div>
              <div class="font-display" style="font-size:14px;font-weight:700;color:${d.color}">${d.clients}</div>
            </div>
            <div>
              <div class="annotation" style="color:#94A3B8;margin-bottom:3px">Annual Revenue</div>
              <div class="font-display" style="font-size:14px;font-weight:700;color:${d.color}">${d.arr}</div>
            </div>
          </div>
        </div>
      </div>`).join('')}
    </div>
  </div>
</section>

<!-- PLACEHOLDER FOR FUTURE ECOSYSTEM DETAILS (REMOVED OLD SVG) -->

      <!-- SVG connector lines with animated particles -->
      <svg style="position:absolute;inset:0;width:100%;height:100%;pointer-events:none;overflow:visible" viewBox="0 0 900 580" preserveAspectRatio="xMidYMid meet">
        <defs>
          <filter id="eco-glow">
            <feGaussianBlur stdDeviation="2.5" result="b"/>
            <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
          <filter id="eco-glow-strong">
            <feGaussianBlur stdDeviation="4" result="b"/>
            <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
        </defs>

        <!-- Connection lines: center (450,290) to each node -->
        ${[
          [450, 90,  '#4338CA', '4 7',  2.5, 2.8, 'M 450 290 L 450 90'],
          [710, 168, '#8B5CF6', '4 6',  2.2, 3.2, 'M 450 290 L 710 168'],
          [718, 390, '#C79A38', '3 8',  2.0, 2.6, 'M 450 290 L 718 390'],
          [450, 476, '#10B981', '4 7',  2.2, 3.0, 'M 450 290 L 450 476'],
          [182, 390, '#F59E0B', '3 8',  2.0, 2.5, 'M 450 290 L 182 390'],
          [190, 168, '#EC4899', '4 6',  2.2, 2.8, 'M 450 290 L 190 168'],
        ].map(([nx,ny,c,da,sw,dur,path],i)=>`
        <line x1="450" y1="290" x2="${nx}" y2="${ny}"
          stroke="${c}" stroke-width="${sw}" stroke-dasharray="${da}" opacity=".35" filter="url(#eco-glow)">
          <animate attributeName="stroke-dashoffset" from="0" to="-120" dur="${dur}s" repeatCount="indefinite"/>
        </line>
        <!-- Traveling particle -->
        <circle r="4" fill="${c}" opacity=".95" filter="url(#eco-glow)">
          <animateMotion dur="${dur}s" repeatCount="indefinite" path="${path}"/>
          <animate attributeName="opacity" values="0;0;.9;.9;0" dur="${dur}s" repeatCount="indefinite"/>
          <animate attributeName="r" values="2;4;4;2" dur="${dur}s" repeatCount="indefinite"/>
        </circle>
        <!-- Return particle -->
        <circle r="3" fill="${c}" opacity=".6" filter="url(#eco-glow)">
          <animateMotion dur="${dur}s" repeatCount="indefinite" begin="${Number(dur)/2}s" path="${String(path).split('L').reverse().map((s,j)=>j===0?'M '+s.trim():s.trim()).join(' L ')}"/>
          <animate attributeName="opacity" values="0;.6;.6;0" dur="${dur}s" repeatCount="indefinite"/>
        </circle>`).join('')}

        <!-- Center pulsing ring -->
        <circle cx="450" cy="290" r="72" fill="none" stroke="rgba(67,56,202,.12)" stroke-width="1">
          <animate attributeName="r" values="68;76;68" dur="4s" repeatCount="indefinite"/>
          <animate attributeName="opacity" values=".5;.12;.5" dur="4s" repeatCount="indefinite"/>
        </circle>
        <circle cx="450" cy="290" r="48" fill="none" stroke="rgba(199,154,56,.18)" stroke-width="1">
          <animate attributeName="r" values="44;52;44" dur="3s" repeatCount="indefinite"/>
          <animate attributeName="opacity" values=".6;.15;.6" dur="3s" repeatCount="indefinite"/>
        </circle>
      </svg>

      <!-- Node grid (3×3 grid with center hub placeholder) -->
      <div style="display:grid;grid-template-columns:repeat(3,1fr);grid-template-rows:repeat(3,auto);gap:0;min-height:580px;align-items:center;justify-items:center">

        <!-- Top row -->
        <div style="grid-column:1;grid-row:1;padding:20px" class="reveal">
          <a href="/divisions/moguls-labs" style="text-decoration:none">
            <div class="node" style="--nc:#EC4899;--ng:rgba(236,72,153,.25)">
              <div class="node-box"><span style="font-size:26px">🧪</span><div class="font-mono" style="font-size:7.5px;color:#94A3B8;letter-spacing:.12em">05</div></div>
              <div class="node-label" style="color:#EC4899">Labs</div>
              <div class="badge badge-violet" style="font-size:8px">DEV</div>
            </div>
          </a>
        </div>

        <div style="grid-column:2;grid-row:1;padding:20px" class="reveal">
          <a href="/divisions/moguls-ai" style="text-decoration:none">
            <div class="node" style="--nc:#4338CA;--ng:rgba(67,56,202,.25)">
              <div class="node-box"><span style="font-size:26px">🤖</span><div class="font-mono" style="font-size:7.5px;color:#94A3B8;letter-spacing:.12em">01</div></div>
              <div class="node-label" style="color:#4338CA">Moguls AI</div>
              <div class="badge badge-green" style="font-size:8px">ACTIVE</div>
            </div>
          </a>
        </div>

        <div style="grid-column:3;grid-row:1;padding:20px" class="reveal">
          <a href="/oracle-os" style="text-decoration:none">
            <div class="node" style="--nc:#8B5CF6;--ng:rgba(139,92,246,.25)">
              <div class="node-box"><span style="font-size:26px">🔮</span><div class="font-mono" style="font-size:7.5px;color:#94A3B8;letter-spacing:.12em">OS</div></div>
              <div class="node-label" style="color:#8B5CF6">Oracle OS</div>
              <div class="badge badge-green" style="font-size:8px">ACTIVE</div>
            </div>
          </a>
        </div>

        <!-- Middle row -->
        <div style="grid-column:1;grid-row:2;padding:20px" class="reveal">
          <a href="/divisions/moguls-academy" style="text-decoration:none">
            <div class="node" style="--nc:#F59E0B;--ng:rgba(245,158,11,.25)">
              <div class="node-box"><span style="font-size:26px">🎓</span><div class="font-mono" style="font-size:7.5px;color:#94A3B8;letter-spacing:.12em">04</div></div>
              <div class="node-label" style="color:#F59E0B">Academy</div>
              <div class="badge badge-amber" style="font-size:8px">BUILDING</div>
            </div>
          </a>
        </div>

        <!-- Center hub -->
        <div style="grid-column:2;grid-row:2;width:145px;height:145px;display:flex;align-items:center;justify-content:center">
          <div style="animation:floatBadge 5.5s ease-in-out infinite;width:100%;height:100%;display:flex;align-items:center;justify-content:center">
            <div style="width:140px;height:140px;clip-path:polygon(50% 0%,100% 25%,100% 75%,50% 100%,0% 75%,0% 25%);background:linear-gradient(145deg,#1E1B4B,#0E0D2E,#07061A);display:flex;align-items:center;justify-content:center;box-shadow:0 0 80px rgba(67,56,202,.5),0 0 160px rgba(67,56,202,.15)">
              <div style="text-align:center">
                <svg viewBox="0 0 60 52" style="width:48px;height:42px">
                  <defs><linearGradient id="chg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#F0D597"/><stop offset="50%" stop-color="#C79A38"/><stop offset="100%" stop-color="#8B6914"/></linearGradient></defs>
                  <path d="M6 44L9.5 27L17 38L30 17L43 38L50.5 27L54 44Z" fill="url(#chg)"/>
                  <rect x="6" y="44" width="48" height="5.5" rx="2.5" fill="url(#chg)"/>
                  <polygon points="30,15 33.5,21 30,23 26.5,21" fill="#4338CA"/>
                </svg>
                <div class="font-display" style="font-size:6px;font-weight:800;letter-spacing:.12em;background:linear-gradient(135deg,#F0D597,#C79A38);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;margin-top:3px">MANSAS<br>MOGULS</div>
              </div>
            </div>
          </div>
        </div>

        <div style="grid-column:3;grid-row:2;padding:20px" class="reveal">
          <a href="/divisions/moguls-studio" style="text-decoration:none">
            <div class="node" style="--nc:#C79A38;--ng:rgba(199,154,56,.25)">
              <div class="node-box"><span style="font-size:26px">🎨</span><div class="font-mono" style="font-size:7.5px;color:#94A3B8;letter-spacing:.12em">02</div></div>
              <div class="node-label" style="color:#C79A38">Studio</div>
              <div class="badge badge-green" style="font-size:8px">ACTIVE</div>
            </div>
          </a>
        </div>

        <!-- Bottom row -->
        <div style="grid-column:1;grid-row:3;padding:20px" class="reveal">
          <div style="width:96px;height:60px"></div>
        </div>

        <div style="grid-column:2;grid-row:3;padding:20px" class="reveal">
          <a href="/divisions/moguls-growth" style="text-decoration:none">
            <div class="node" style="--nc:#10B981;--ng:rgba(16,185,129,.25)">
              <div class="node-box"><span style="font-size:26px">📈</span><div class="font-mono" style="font-size:7.5px;color:#94A3B8;letter-spacing:.12em">03</div></div>
              <div class="node-label" style="color:#10B981">Growth</div>
              <div class="badge badge-green" style="font-size:8px">ACTIVE</div>
            </div>
          </a>
        </div>

        <div style="grid-column:3;grid-row:3;padding:20px" class="reveal">
          <div style="width:96px;height:60px"></div>
        </div>

      </div>
    </div>

    <div class="reveal" style="text-align:center;margin-top:32px">
      <p class="annotation" style="color:#94A3B8">Click any division to explore its capabilities</p>
    </div>
  </div>
</section>

<!-- ═════════════════ MOGULS INTELLIGENCE OS ═════════════════ -->
<section id="moguls-intelligence-os" style="padding:120px 0;background:linear-gradient(180deg,#070810 0%,#0F0F1F 100%);position:relative;overflow:hidden">
  <div style="position:absolute;inset:0;background-image:linear-gradient(rgba(199,154,56,.01) 1px,transparent 1px),linear-gradient(90deg,rgba(199,154,56,.01) 1px,transparent 1px);background-size:80px 80px;pointer-events:none"></div>
  <div style="position:absolute;top:0;left:50%;width:1000px;height:600px;background:radial-gradient(ellipse,rgba(67,56,202,.1) 0%,transparent 70%);transform:translate(-50%,-30%);pointer-events:none"></div>

  <div class="container" style="position:relative;z-index:1">

    <div class="reveal" style="text-align:center;margin-bottom:72px">
      <div class="section-intro-line" style="margin:0 auto 24px;box-shadow:0 0 20px rgba(139,92,246,.3)"></div>
      <h2 class="section-title font-display" style="font-size:clamp(28px,4.5vw,54px);color:#F8F9FC;margin-bottom:18px">
        Moguls <span class="gold">Intelligence OS</span>
      </h2>
      <p style="font-size:15px;color:#94A3B8;max-width:580px;margin:0 auto;line-height:1.85">
        The strategic intelligence workspace that helps organizations centralize data, monitor operations, analyze competitors, simulate decisions, and generate executive recommendations at scale.
      </p>
    </div>

    <!-- Flagship product modules -->
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:24px;margin-bottom:48px">
      ${[
        {icon:'🎯',name:'Mission Control',desc:'Real-time operational dashboards with AI-powered anomaly detection'},
        {icon:'👥',name:'Company Twin',desc:'AI digital twin of your organization for stress-testing and simulation'},
        {icon:'🔍',name:'Competitor Matrix',desc:'Continuous monitoring and intelligence on competitive landscape'},
        {icon:'⚡',name:'Simulation Engine',desc:'What-if analysis and decision scenario modeling'},
        {icon:'🤝',name:'M&A Analysis',desc:'Automated due diligence and acquisition intelligence'},
        {icon:'📊',name:'Intervention Ledger',desc:'Strategic recommendation engine with decision tracking'},
      ].map((m,i)=>`
      <div class="reveal glass-card" style="padding:32px;position:relative;overflow:hidden;border:1px solid rgba(139,92,246,.2);animation-delay:${i*.1}s">
        <div style="position:absolute;top:0;right:0;width:100px;height:100px;background:radial-gradient(circle,rgba(139,92,246,.1),transparent 70%);pointer-events:none"></div>
        <div style="font-size:32px;margin-bottom:12px">${m.icon}</div>
        <div class="font-display" style="font-size:16px;font-weight:700;color:#F8F9FC;margin-bottom:8px">${m.name}</div>
        <p style="font-size:13px;color:#94A3B8;line-height:1.7">${m.desc}</p>
      </div>`).join('')}
    </div>

    <!-- CTAs -->
    <div style="display:flex;gap:16px;justify-content:center;flex-wrap:wrap;margin-top:48px">
      <a href="#" class="btn btn-gold" data-h="1">
        View Moguls Intelligence OS
        <svg style="width:14px;height:14px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9,18 15,12 9,6"/></svg>
      </a>
      <a href="#" class="btn btn-outline" data-h="1">
        Request Demo
        <svg style="width:14px;height:14px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" opacity=".6"><polyline points="9,18 15,12 9,6"/></svg>
      </a>
    </div>
  </div>
</section>

<!-- ═════════════════ VENTURES BUILT ═════════════════ -->
<section style="padding:120px 0;background:#FFFFFF;position:relative">
  <div class="container">

    <div class="reveal" style="text-align:center;margin-bottom:72px">
      <div class="section-intro-line" style="margin:0 auto 24px"></div>
      <h2 class="section-title font-display" style="font-size:clamp(28px,4.5vw,54px);color:#0F172A;margin-bottom:18px">
        Ventures Built By <span class="gold">Mansas Moguls</span>
      </h2>
      <p style="font-size:15px;color:#64748B;max-width:580px;margin:0 auto;line-height:1.85">
        Classified venture case files showcasing our portfolio of companies, systems, and strategic partnerships.
      </p>
    </div>

    <!-- Venture cards -->
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(320px,1fr));gap:28px">
      ${[
        {n:'01',title:'Mansas Moguls Ecosystem',color:'#C79A38',desc:'The master holding company and strategic investment vehicle for our multi-division empire.'},
        {n:'02',title:'Moguls Intelligence OS',color:'#8B5CF6',desc:'Strategic intelligence platform powering executive decision-making and operational excellence.'},
        {n:'03',title:'Client AI Automation',color:'#4338CA',desc:'Custom AI systems and agent frameworks deployed across Fortune 500 operations.'},
        {n:'04',title:'Rochester University Initiative',color:'#10B981',desc:'Strategic partnership advancing AI education and creator monetization systems.'},
        {n:'05',title:'SaaS Experiments',color:'#F59E0B',desc:'Incubated micro-applications and experimental technologies from Moguls Labs.'},
      ].map((v,i)=>`
      <div class="reveal" style="position:relative;animation-delay:${i*.12}s">
        <div class="glass-card" style="padding:40px;height:100%;position:relative;overflow:hidden;border-left:4px solid ${v.color}">
          <div style="position:absolute;top:-30px;right:-30px;width:150px;height:150px;background:radial-gradient(circle,${v.color}08,transparent 60%);pointer-events:none"></div>

          <div style="position:relative;z-index:1">
            <div style="font-size:11px;color:#94A3B8;letter-spacing:.1em;margin-bottom:12px;font-weight:600">CASE FILE ${v.n}</div>
            <div class="font-display" style="font-size:20px;font-weight:700;color:${v.color};margin-bottom:16px">${v.title}</div>
            <p style="font-size:13.5px;color:#64748B;line-height:1.8">${v.desc}</p>
          </div>
        </div>
      </div>`).join('')}
    </div>
  </div>
</section>

<!-- ═════════════════ WORK WITH US ═════════════════ -->
<section style="padding:120px 0;background:linear-gradient(180deg,#F8F9FC 0%,#F0F3FB 100%);position:relative">
  <div class="container">

    <div class="reveal" style="text-align:center;margin-bottom:72px">
      <div class="section-intro-line" style="margin:0 auto 24px"></div>
      <h2 class="section-title font-display" style="font-size:clamp(28px,4.5vw,54px);color:#0F172A;margin-bottom:18px">
        Work With <span class="gold">Mansas Moguls</span>
      </h2>
      <p style="font-size:15px;color:#64748B;max-width:580px;margin:0 auto;line-height:1.85">
        Three paths to partnership. One unified vision. Let's build the future together.
      </p>
    </div>

    <!-- Partnership paths -->
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(320px,1fr));gap:28px;margin-bottom:48px">
      ${[
        {icon:'⚙️',title:'Build AI Systems',desc:'Custom AI agents, automation frameworks, and intelligent platforms engineered for your operations.'},
        {icon:'🚀',title:'Build A Venture',desc:'Incubate new businesses within the Mansas Moguls ecosystem with capital, talent, and strategic support.'},
        {icon:'🤝',title:'Partner With The Ecosystem',desc:'Strategic partnerships that leverage our divisions for growth, innovation, and market expansion.'},
      ].map((p,i)=>`
      <div class="reveal glass-card" style="padding:40px;position:relative;overflow:hidden;animation-delay:${i*.1}s">
        <div style="position:absolute;top:-40px;right:-40px;width:160px;height:160px;background:radial-gradient(circle,rgba(199,154,56,.08),transparent 65%);pointer-events:none"></div>

        <div style="font-size:40px;margin-bottom:16px">${p.icon}</div>
        <div class="font-display" style="font-size:18px;font-weight:700;color:#0F172A;margin-bottom:12px">${p.title}</div>
        <p style="font-size:13.5px;color:#64748B;line-height:1.8">${p.desc}</p>
      </div>`).join('')}
    </div>

    <!-- Contact form section -->
    <div class="reveal glass-card" style="max-width:600px;margin:0 auto;padding:48px;text-align:center;position:relative;overflow:hidden">
      <div style="position:absolute;top:0;right:0;width:200px;height:200px;background:radial-gradient(circle,rgba(199,154,56,.08),transparent 70%);pointer-events:none"></div>

      <h3 class="font-display" style="font-size:24px;font-weight:700;color:#0F172A;margin-bottom:16px;position:relative;z-index:1">Start A Conversation</h3>
      <p style="font-size:14px;color:#64748B;margin-bottom:28px;position:relative;z-index:1">Share your vision, challenge, or opportunity. We'll explore how the ecosystem can help.</p>

      <form style="position:relative;z-index:1;display:flex;flex-direction:column;gap:16px">
        <input type="email" placeholder="Your email address" style="padding:12px 16px;border:1px solid rgba(199,154,56,.2);border-radius:8px;background:rgba(255,255,255,.5);font-size:14px;font-family:inherit" required/>
        <textarea placeholder="Brief description of your vision" rows="4" style="padding:12px 16px;border:1px solid rgba(199,154,56,.2);border-radius:8px;background:rgba(255,255,255,.5);font-size:14px;font-family:inherit;resize:vertical" required></textarea>
        <button type="submit" class="btn btn-gold" style="width:100%">
          Submit Inquiry
          <svg style="width:14px;height:14px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9,18 15,12 9,6"/></svg>
        </button>
      </form>
    </div>
  </div>
</section>

<script>
function updateHUDs(){
  var show = window.innerWidth >= 1300;
  document.querySelectorAll('.hero-hud-left,.hero-hud-right').forEach(function(el){
    el.style.display = show ? 'block' : 'none';
  });
}
updateHUDs();
window.addEventListener('resize',updateHUDs,{passive:true});
</script>
`, 'home')
}

// ─── ORACLE OS PAGE ───────────────────────────────────────────────────────
function oraclePage(): string {
  const layers = [
    {
      id:'mission', n:'01', title:'Mission Control', sub:'Real-time command center for executive strategy',
      color:'#4338CA', icon:'📊',
      detail:'The nerve center of your empire. Mission Control gives executives a real-time, single-source-of-truth view of every KPI, capital movement, and strategic milestone — before others even open their laptops.',
      metrics:[['Decision Speed','3.2× faster'],['KPIs Tracked','240+'],['Alert Latency','<100ms']],
      features:['KPI Tracking Dashboard','Capital Pulse Monitor','Executive Briefing Engine','Strategic Alignment Score']
    },
    {
      id:'twin', n:'02', title:'Company Twin', sub:'Digital replica of your full organizational structure',
      color:'#8B5CF6', icon:'🏙️',
      detail:'A living, breathing digital replica of your company. The Company Twin models every team, process, and dependency — giving leadership the power to simulate restructures and spot bottlenecks before they cost millions.',
      metrics:[['Org Accuracy','98.7%'],['Scenario Models','1,200+'],['Update Frequency','Real-time']],
      features:['Org Topology Map','Capacity Mapping','Dependency Chains','Performance Heatmap']
    },
    {
      id:'competitor', n:'03', title:'Competitor Matrix', sub:'AI-powered competitive intelligence at scale',
      color:'#C79A38', icon:'⚔️',
      detail:'Know your competition better than they know themselves. The Competitor Matrix continuously scans markets, benchmarks performance, and identifies strategic gaps — so your next move is always five steps ahead.',
      metrics:[['Competitors Tracked','500+'],['Signal Accuracy','94.2%'],['Update Cycle','24h']],
      features:['Benchmarking Engine','Market Gap Analysis','Strategic Gap Finder','Threat Detection']
    },
    {
      id:'simulation', n:'04', title:'Simulation Engine', sub:'Scenario modeling and decision intelligence',
      color:'#10B981', icon:'🧠',
      detail:"Don't make decisions in the dark. The Simulation Engine lets you run unlimited strategic scenarios and receive AI-generated Stabilization Reports before committing a single dollar.",
      metrics:[['Scenarios/day','10,000+'],['Prediction Accuracy','89.4%'],['Report Time','< 3 min']],
      features:['Scenario Builders','Predictive Analytics','Stabilization Reports','Monte Carlo Engine']
    },
  ]

  return layout('Oracle OS — Strategic Intelligence', `

<!-- ═══════════════ ORACLE HERO ═══════════════ -->
<section style="padding:140px 0 80px;background:linear-gradient(168deg,#FFFFFF 0%,#F8F9FC 55%,#F0F0FC 100%);position:relative;overflow:hidden">
  <div style="position:absolute;inset:0;pointer-events:none">
    <div style="position:absolute;top:25%;left:50%;transform:translate(-50%,-50%);width:800px;height:500px;background:radial-gradient(ellipse,rgba(139,92,246,.06) 0%,transparent 65%)"></div>
    <div style="position:absolute;top:60%;right:10%;width:400px;height:300px;background:radial-gradient(ellipse,rgba(67,56,202,.04) 0%,transparent 70%)"></div>
  </div>
  <div class="container" style="position:relative;z-index:1">

    <div style="display:flex;flex-direction:column;align-items:center;text-align:center;max-width:740px;margin:0 auto">
      <a href="/" class="font-mono fade-up d0" style="font-size:9.5px;color:#94A3B8;letter-spacing:.2em;text-decoration:none;display:inline-flex;align-items:center;gap:7px;margin-bottom:28px;padding:6px 14px;border-radius:999px;border:1px solid rgba(199,154,56,.16);transition:all .2s" onmouseover="this.style.borderColor='rgba(199,154,56,.4)'" onmouseout="this.style.borderColor='rgba(199,154,56,.16)'">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="15,18 9,12 15,6"/></svg>
        BACK TO HOME
      </a>

      <div class="label fade-up d1" style="margin-bottom:16px">Oracle OS // Strategic Intelligence Layer</div>

      <h1 class="section-title font-display fade-up d2" style="font-size:clamp(34px,6vw,68px);color:#0F172A;margin-bottom:22px">
        Centralize. <span class="gold">Simulate.</span><br>
        Strategize. <span class="violet-text">Dominate.</span>
      </h1>

      <p class="fade-up d3" style="font-size:15.5px;color:#475569;line-height:1.88;margin-bottom:30px;max-width:580px">
        Oracle OS is the AI-powered operating brain for elite business operators. Four intelligence layers. One unstoppable command center that gives you omniscient visibility over your empire.
      </p>

      <div class="fade-up d4" style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap;margin-bottom:48px">
        <span class="badge badge-green">SYSTEM ACTIVE</span>
        <span class="badge badge-violet">ENTERPRISE LICENSE</span>
        <span style="display:inline-flex;align-items:center;gap:5px;font-family:'JetBrains Mono',monospace;font-size:9px;font-weight:600;letter-spacing:.14em;text-transform:uppercase;padding:4px 12px;border-radius:999px;background:rgba(199,154,56,.1);color:#C79A38;border:1px solid rgba(199,154,56,.22)">v2.0.1 STABLE</span>
      </div>

      <!-- 4-layer animated preview -->
      <div class="fade-up d5" style="display:flex;flex-direction:column;gap:8px;width:100%;max-width:520px">
        ${layers.map((l,i)=>`
        <div style="display:flex;align-items:center;gap:14px;padding:13px 20px;border-radius:12px;background:rgba(255,255,255,.8);backdrop-filter:blur(12px);border:1px solid ${l.color}20;animation:slideRight .55s cubic-bezier(.25,.46,.45,.94) forwards;animation-delay:${.65+i*.12}s;opacity:0;box-shadow:0 2px 12px rgba(0,0,0,.04)">
          <div style="width:38px;height:38px;border-radius:10px;background:${l.color}0D;border:1px solid ${l.color}22;display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0">${l.icon}</div>
          <div style="flex:1;text-align:left">
            <div class="font-display" style="font-size:13.5px;font-weight:700;color:#0F172A">${l.title}</div>
            <div class="annotation" style="color:#94A3B8;margin-top:2px">${l.sub}</div>
          </div>
          <div style="display:flex;align-items:center;gap:6px">
            <div style="width:6px;height:6px;border-radius:50%;background:${l.color};box-shadow:0 0 6px ${l.color}"></div>
            <span class="font-mono" style="font-size:8.5px;color:${l.color};letter-spacing:.08em">ACTIVE</span>
          </div>
        </div>`).join('')}
      </div>
    </div>
  </div>
</section>

<!-- ═══════════════ INTELLIGENCE LAYERS ═══════════════ -->
<section style="padding:80px 0;background:#FFFFFF">
  <div class="container">

    <div class="reveal" style="text-align:center;margin-bottom:56px">
      <div class="section-intro-line" style="margin:0 auto 18px"></div>
      <div class="label" style="margin-bottom:13px">Deep Intelligence Architecture</div>
      <h2 class="section-title font-display" style="font-size:clamp(24px,3.8vw,46px);color:#0F172A">
        Four Layers, One <span class="gold">Command Center</span>
      </h2>
    </div>

    <div style="display:grid;grid-template-columns:2fr 3fr;gap:28px;align-items:start">

      <!-- Left: layer selector -->
      <div style="display:flex;flex-direction:column;gap:10px">
        <div class="annotation" style="margin-bottom:8px;color:#94A3B8">SELECT INTELLIGENCE LAYER</div>
        ${layers.map((l,i)=>`
        <div class="layer-item reveal" id="layer-btn-${l.id}" onclick="selectOracleLayer('${l.id}')" style="animation-delay:${i*.1}s" data-h="1">
          <div style="display:flex;align-items:center;gap:14px">
            <div style="width:44px;height:44px;border-radius:12px;background:${l.color}0D;border:1px solid ${l.color}1A;display:flex;align-items:center;justify-content:center;font-size:20px;flex-shrink:0">${l.icon}</div>
            <div>
              <div style="display:flex;align-items:center;gap:8px;margin-bottom:3px">
                <span class="font-mono" style="font-size:9px;color:#94A3B8;letter-spacing:.1em">${l.n}</span>
                <span class="font-display" style="font-size:14.5px;font-weight:700;color:#0F172A">${l.title}</span>
              </div>
              <p style="font-size:11.5px;color:#94A3B8;line-height:1.3">${l.sub}</p>
            </div>
          </div>
          <svg style="width:13px;height:13px;flex-shrink:0;color:#CBD5E1;transition:transform .3s" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9,18 15,12 9,6"/></svg>
        </div>`).join('')}
      </div>

      <!-- Right: detail panel -->
      <div id="oracle-detail">
        ${layers.map((l,i)=>`
        <div id="detail-${l.id}" style="display:${i===0?'block':'none'}">
          <div class="glass reveal" style="border-radius:22px;padding:38px;margin-bottom:16px;border:1px solid ${l.color}18">
            <div style="display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:24px">
              <div>
                <div class="annotation" style="margin-bottom:8px;color:#94A3B8">${l.n} / Oracle OS Module</div>
                <h2 class="font-display" style="font-size:30px;font-weight:800;color:${l.color}">${l.title}</h2>
              </div>
              <div style="width:64px;height:64px;border-radius:18px;background:${l.color}0D;border:1.5px solid ${l.color}20;display:flex;align-items:center;justify-content:center;font-size:30px;flex-shrink:0">${l.icon}</div>
            </div>
            <p style="font-size:14.5px;color:#475569;line-height:1.88;margin-bottom:28px">${l.detail}</p>

            <!-- Metrics -->
            <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:18px;margin-bottom:26px;padding-bottom:26px;border-bottom:1px solid rgba(199,154,56,.1)">
              ${l.metrics.map(([k,v])=>`
              <div class="metric" style="border-left-color:${l.color}45">
                <div class="annotation" style="color:#94A3B8;margin-bottom:5px">${k}</div>
                <div class="font-display" style="font-size:20px;font-weight:800;color:${l.color}">${v}</div>
              </div>`).join('')}
            </div>

            <!-- Features -->
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
              ${l.features.map(f=>`
              <div style="display:flex;align-items:center;gap:9px;padding:10px 14px;border-radius:9px;background:${l.color}07;border:1px solid ${l.color}12">
                <div style="width:5px;height:5px;border-radius:50%;background:${l.color};flex-shrink:0;box-shadow:0 0 6px ${l.color}80"></div>
                <span style="font-size:12.5px;color:#475569;font-weight:500">${f}</span>
              </div>`).join('')}
            </div>
          </div>
        </div>`).join('')}
      </div>
    </div>

    <!-- Architecture Stack -->
    <div class="reveal" style="margin-top:56px">
      <div class="annotation" style="margin-bottom:18px;text-align:center;color:#94A3B8">ORACLE OS ARCHITECTURE STACK — ALL LAYERS ACTIVE</div>
      <div style="max-width:600px;margin:0 auto;display:flex;flex-direction:column;gap:8px">
        ${layers.map((l,i)=>`
        <div onclick="selectOracleLayer('${l.id}')" id="stack-${l.id}" class="layer-item" data-h="1">
          <div style="display:flex;align-items:center;gap:12px">
            <span style="font-size:16px">${l.icon}</span>
            <span class="font-display" style="font-size:14px;font-weight:600;color:#0F172A">${l.title}</span>
          </div>
          <span id="sstat-${l.id}" class="font-mono" style="font-size:9px;color:#CBD5E1;letter-spacing:.08em">${i===0?'● ACTIVE':'○ READY'}</span>
        </div>`).join('')}
      </div>
    </div>
  </div>
</section>

<!-- ═══════════════ SIMULATION TERMINAL ═══════════════ -->
<section style="padding:80px 0;background:#F8F9FC">
  <div class="container">
    <div class="reveal" style="text-align:center;margin-bottom:40px">
      <div class="label" style="margin-bottom:12px">Live Intelligence Demo</div>
      <h2 class="section-title font-display" style="font-size:clamp(24px,3.5vw,44px);color:#0F172A">
        Decision <span class="gold">Simulation Terminal</span>
      </h2>
    </div>

    <div class="reveal glass" style="border-radius:26px;padding:0;max-width:960px;margin:0 auto;overflow:hidden;box-shadow:0 20px 80px rgba(31,38,135,.08)">

      <!-- Terminal header -->
      <div style="padding:20px 30px;background:rgba(255,255,255,.55);border-bottom:1px solid rgba(199,154,56,.1);display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:14px">
        <div>
          <div class="label" style="margin-bottom:4px">Simulation Engine — Live Demo</div>
          <h3 class="font-display" style="font-size:22px;font-weight:700;color:#0F172A">Decision Simulation Terminal</h3>
        </div>
        <button onclick="runOracleSimulation()" id="sim-btn" class="btn btn-gold" style="padding:12px 28px;font-size:11px" data-h="1">
          <svg style="width:12px;height:12px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polygon points="5,3 19,12 5,21"/></svg>
          Run Simulation
        </button>
      </div>

      <!-- Terminal body -->
      <div style="padding:30px">
        <div class="terminal" id="sim-terminal" style="min-height:240px">
          <div class="terminal-bar">
            <div class="t-dot" style="background:#FF5F57"></div>
            <div class="t-dot" style="background:#FFBD2E"></div>
            <div class="t-dot" style="background:#28C840"></div>
            <span class="font-mono" style="font-size:10px;color:#334155;margin-left:10px;letter-spacing:.1em">oracle@moguls:~ — simulation-engine v2.0.1</span>
          </div>
          <div style="margin-top:4px"><span class="prompt">oracle@moguls</span><span class="cmd">:~$ </span><span style="color:#475569;animation:blink 1.1s step-end infinite">▋</span></div>
          <div class="comment" style="margin-top:12px;font-size:11px">// Awaiting simulation trigger... Press "Run Simulation" to initiate analysis</div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ═══════════════ ORACLE CTA ═══════════════ -->
<section style="padding:80px 0;background:#070810;position:relative;overflow:hidden">
  <div style="position:absolute;inset:0;background:radial-gradient(ellipse 60% 80% at 50% 50%,rgba(139,92,246,.09) 0%,transparent 70%);pointer-events:none"></div>
  <div class="container" style="text-align:center;max-width:620px;margin:0 auto;position:relative;z-index:1">
    <div class="section-intro-line reveal" style="margin:0 auto 22px;background:linear-gradient(90deg,#8B5CF6,#C79A38)"></div>
    <h2 class="section-title font-display reveal" style="font-size:clamp(26px,4vw,48px);color:#F8F9FC;margin-bottom:18px">
      Ready for <span class="gold">Oracle OS?</span>
    </h2>
    <p class="reveal" style="font-size:15px;color:#475569;margin-bottom:36px;line-height:1.88">
      Get enterprise access to all four intelligence layers. Built for founders and operators who execute at the speed of markets.
    </p>
    <div class="reveal" style="display:flex;gap:14px;justify-content:center;flex-wrap:wrap">
      <a href="/contact" class="btn btn-gold" data-h="1">
        Request Enterprise Access
        <svg style="width:13px;height:13px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9,18 15,12 9,6"/></svg>
      </a>
      <a href="/divisions" class="btn btn-dark" data-h="1">Explore All Divisions</a>
    </div>
  </div>
</section>

<script>
var layerColors = {mission:'#4338CA',twin:'#8B5CF6',competitor:'#C79A38',simulation:'#10B981'};
var currentLayer = 'mission';

function selectOracleLayer(id){
  ['mission','twin','competitor','simulation'].forEach(function(l){
    var d=document.getElementById('detail-'+l);
    var btn=document.getElementById('layer-btn-'+l);
    var st=document.getElementById('stack-'+l);
    var ss=document.getElementById('sstat-'+l);
    if(d)d.style.display='none';
    if(btn){btn.style.background='rgba(255,255,255,.68)';btn.style.borderLeftColor='transparent';btn.style.boxShadow='';}
    if(st){st.style.background='rgba(255,255,255,.68)';st.style.borderColor='rgba(199,154,56,.1)';}
    if(ss){ss.textContent='○ READY';ss.style.color='#CBD5E1';}
  });
  var c=layerColors[id];
  var d=document.getElementById('detail-'+id);
  var btn=document.getElementById('layer-btn-'+id);
  var st=document.getElementById('stack-'+id);
  var ss=document.getElementById('sstat-'+id);
  if(d)d.style.display='block';
  if(btn){btn.style.background='rgba(255,255,255,.96)';btn.style.borderLeftColor=c;btn.style.boxShadow='0 4px 28px '+c+'25';}
  if(st){st.style.background=c+'10';st.style.borderColor=c+'38';}
  if(ss){ss.textContent='● ACTIVE';ss.style.color=c;}
  currentLayer=id;
}
selectOracleLayer('mission');

// Simulation
var simLines = [
  {pre:'[ORACLE OS]', txt:'Simulation protocol initiated — scanning empire state...', color:'#64748B'},
  {pre:'[SCAN]',      txt:'Parsing 247 live data streams across 6 market segments', color:'#94A3B8'},
  {pre:'[AI]',        txt:'Cross-referencing 500+ competitor signals — high confidence', color:'#8B5CF6'},
  {pre:'[ANALYSIS]',  txt:'Strategic vulnerability detected in Sector 4 — confidence 94.2%', color:'#F59E0B'},
  {pre:'[MONTE CARLO]',txt:'Running 10,000 scenario simulations in parallel...', color:'#4338CA'},
  {pre:'[MODEL]',     txt:'Processing 38 strategic permutations at machine speed', color:'#4338CA'},
  {pre:'[RESULT]',    txt:'Optimal strategic pivot identified — projected +34% revenue upside', color:'#10B981'},
  {pre:'[REPORT]',    txt:'Stabilization Report generated — 98.2% confidence interval', color:'#10B981'},
  {pre:'[ORACLE OS]', txt:'Analysis complete. Decision brief ready for executive review. ✓', color:'#C79A38'},
];
var simRunning = false;

function runOracleSimulation(){
  if(simRunning)return;
  simRunning=true;
  var btn=document.getElementById('sim-btn');
  var term=document.getElementById('sim-terminal');
  if(btn)btn.disabled=true;
  var bar='<div class="terminal-bar"><div class="t-dot" style="background:#FF5F57"></div><div class="t-dot" style="background:#FFBD2E"></div><div class="t-dot" style="background:#28C840"></div><span class="font-mono" style="font-size:10px;color:#334155;margin-left:10px;letter-spacing:.1em">oracle@moguls:~ — simulation-engine v2.0.1</span></div>';
  if(term)term.innerHTML=bar+'<div style="margin-top:4px"><span class="prompt">oracle@moguls</span><span class="cmd">:~$ </span><span class="cmd">run-simulation --full --report</span></div>';
  simLines.forEach(function(line,i){
    setTimeout(function(){
      if(term){
        var el=document.createElement('div');
        el.style.cssText='color:'+line.color+';padding:1px 0;';
        el.innerHTML='<span style="color:#334155;font-size:11px">'+line.pre+'</span> '+line.txt;
        term.appendChild(el);
        term.scrollTop=term.scrollHeight;
      }
      if(i===simLines.length-1){
        setTimeout(function(){
          if(btn){btn.disabled=false;btn.textContent='Run Again';}
          simRunning=false;
        },600);
      }
    },i*420+300);
  });
}
</script>
`, 'oracle')
}

// ─── DIVISIONS PAGE ───────────────────────────────────────────────────────
function divisionsPage(): string {
  return layout('The System — All Divisions', `

<!-- ═══ DIVISIONS HERO ═══ -->
<section style="padding:140px 0 80px;background:linear-gradient(168deg,#FFFFFF 0%,#F8F9FC 55%,#EEEEFB 100%);position:relative;overflow:hidden">
  <div style="position:absolute;inset:0;pointer-events:none">
    <div style="position:absolute;top:30%;left:50%;transform:translate(-50%,-50%);width:700px;height:400px;background:radial-gradient(ellipse,rgba(67,56,202,.055) 0%,transparent 65%)"></div>
  </div>
  <div class="container" style="position:relative;z-index:1;text-align:center">
    <a href="/" class="font-mono fade-up d0" style="font-size:9.5px;color:#94A3B8;letter-spacing:.2em;text-decoration:none;display:inline-flex;align-items:center;gap:7px;margin-bottom:28px;padding:6px 14px;border-radius:999px;border:1px solid rgba(199,154,56,.16)">
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="15,18 9,12 15,6"/></svg> BACK TO HOME
    </a>
    <div class="label fade-up d1" style="margin-bottom:16px">The Empire Architecture</div>
    <h1 class="section-title font-display fade-up d2" style="font-size:clamp(34px,5.5vw,66px);color:#0F172A;margin-bottom:22px">
      Five Divisions.<br><span class="gold">One Empire.</span>
    </h1>
    <p class="fade-up d3" style="font-size:15.5px;color:#64748B;max-width:580px;margin:0 auto 40px;line-height:1.88">
      Each division is a precision-engineered powerhouse. Together they form an unstoppable empire architecture built to dominate every layer of the modern economy.
    </p>
    <div class="fade-up d4" style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap">
      <span class="badge badge-green">3 DIVISIONS ACTIVE</span>
      <span class="badge badge-amber">1 BUILDING</span>
      <span class="badge badge-violet">1 IN DEV</span>
    </div>
  </div>
</section>

<!-- ═══ DIVISION CARDS ═══ -->
<section style="padding:80px 0 110px;background:#F8F9FC">
  <div class="container">
    <div style="display:flex;flex-direction:column;gap:28px">
      ${DIVISIONS.map((d,i)=>`
      <a href="/divisions/${d.id}" style="text-decoration:none" class="reveal" data-h="1">
        <div class="div-card" style="--dc:${d.color};--dc2:${d.color2};padding:0"
          onmouseover="this.style.borderColor='${d.color}28'" onmouseout="this.style.borderColor=''">
          <!-- Accent bar top -->
          <div style="height:3px;background:linear-gradient(90deg,${d.color},${d.color2},${d.color});opacity:0;transition:opacity .3s" class="div-card-bar"></div>

          <div style="padding:36px 40px;display:grid;grid-template-columns:auto 1fr auto;gap:32px;align-items:center" class="two-col" style="grid-template-columns:auto 1fr auto">

            <!-- Icon + number -->
            <div style="display:flex;flex-direction:column;align-items:center;gap:10px;flex-shrink:0">
              <div style="width:72px;height:72px;border-radius:20px;background:${d.color}0E;border:1.5px solid ${d.color}22;display:flex;align-items:center;justify-content:center;font-size:30px">${d.emoji}</div>
              <div class="font-mono" style="font-size:9px;color:#94A3B8;letter-spacing:.14em">${d.n}</div>
            </div>

            <!-- Main content -->
            <div>
              <div style="display:flex;align-items:center;gap:12px;margin-bottom:8px;flex-wrap:wrap">
                <h2 class="font-display" style="font-size:24px;font-weight:800;color:#0F172A">${d.title}</h2>
                <span class="badge ${d.bc}">${d.status}</span>
              </div>
              <p style="font-size:13.5px;color:${d.color};font-weight:600;margin-bottom:12px;letter-spacing:.02em">${d.tag}</p>
              <p style="font-size:13.5px;color:#64748B;line-height:1.78;max-width:560px">${d.desc}</p>
              <!-- Service tags -->
              <div style="display:flex;gap:7px;margin-top:14px;flex-wrap:wrap">
                ${d.services.map(s=>`<span style="font-family:'JetBrains Mono',monospace;font-size:9px;padding:3px 10px;border-radius:5px;background:${d.color}0A;border:1px solid ${d.color}1A;color:${d.color};letter-spacing:.06em">${s}</span>`).join('')}
              </div>
            </div>

            <!-- Right column -->
            <div style="text-align:right;flex-shrink:0;display:flex;flex-direction:column;align-items:flex-end;gap:12px">
              <div>
                <div class="annotation" style="margin-bottom:4px">ARR TARGET</div>
                <div class="font-display" style="font-size:22px;font-weight:800;color:${d.color}">${d.arr}</div>
              </div>
              <div>
                <div class="annotation" style="margin-bottom:4px">CLIENTS</div>
                <div class="font-display" style="font-size:17px;font-weight:700;color:#0F172A">${d.clients}</div>
              </div>
              <div style="display:flex;align-items:center;gap:5px;font-family:'Space Grotesk',sans-serif;font-size:11.5px;font-weight:700;color:${d.color};letter-spacing:.04em;margin-top:4px">
                Deep Dive
                <svg style="width:14px;height:14px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9,18 15,12 9,6"/></svg>
              </div>
            </div>
          </div>
        </div>
      </a>`).join('')}
    </div>

    <!-- Oracle OS Special Card -->
    <div class="reveal" style="margin-top:28px">
      <a href="/oracle-os" style="text-decoration:none" data-h="1">
        <div style="border-radius:22px;overflow:hidden;border:1px solid rgba(139,92,246,.2);background:linear-gradient(135deg,rgba(30,27,75,.94),rgba(14,13,40,.98));padding:0;position:relative;transition:transform .38s cubic-bezier(.25,.46,.45,.94),box-shadow .38s;box-shadow:0 4px 24px rgba(67,56,202,.15)"
          onmouseover="this.style.transform='translateY(-7px)';this.style.boxShadow='0 24px 64px rgba(67,56,202,.25)'" onmouseout="this.style.transform='';this.style.boxShadow='0 4px 24px rgba(67,56,202,.15)'">
          <div style="height:3px;background:linear-gradient(90deg,#4338CA,#8B5CF6,#C79A38)"></div>
          <div style="padding:36px 40px;display:grid;grid-template-columns:auto 1fr auto;gap:32px;align-items:center">
            <div style="display:flex;flex-direction:column;align-items:center;gap:10px;flex-shrink:0">
              <div style="width:72px;height:72px;border-radius:20px;background:rgba(139,92,246,.12);border:1.5px solid rgba(139,92,246,.25);display:flex;align-items:center;justify-content:center;font-size:30px">🔮</div>
              <div class="font-mono" style="font-size:9px;color:#64748B;letter-spacing:.14em">OS</div>
            </div>
            <div>
              <div style="display:flex;align-items:center;gap:12px;margin-bottom:8px">
                <h2 class="font-display" style="font-size:24px;font-weight:800;color:#F8F9FC">Oracle OS</h2>
                <span class="badge badge-violet">ENTERPRISE</span>
              </div>
              <p style="font-size:13.5px;color:#8B5CF6;font-weight:600;margin-bottom:12px">The Strategic Intelligence Layer — Powering Every Division</p>
              <p style="font-size:13.5px;color:#64748B;line-height:1.78;max-width:560px">The AI brain that connects, coordinates, and amplifies all divisions. Four intelligence layers: Mission Control, Company Twin, Competitor Matrix, Simulation Engine.</p>
            </div>
            <div style="text-align:right;flex-shrink:0;display:flex;flex-direction:column;align-items:flex-end;gap:8px">
              <span class="badge badge-green">SYSTEM ACTIVE</span>
              <div style="display:flex;align-items:center;gap:5px;font-family:'Space Grotesk',sans-serif;font-size:11.5px;font-weight:700;color:#8B5CF6;letter-spacing:.04em;margin-top:8px">
                Explore Platform
                <svg style="width:14px;height:14px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9,18 15,12 9,6"/></svg>
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>
  </div>
</section>
`, 'divisions')
}

// ─── DIVISION DETAIL PAGE ─────────────────────────────────────────────────
function divisionPage(slug: string): string {
  const div = DIVISIONS.find(d => d.id === slug)
  if (!div) {
    return layout('Division Not Found', `
      <section style="padding:180px 0;text-align:center">
        <h1 class="font-display" style="font-size:48px;color:#0F172A;margin-bottom:16px">Division Not Found</h1>
        <a href="/divisions" class="btn btn-gold">Back to Divisions</a>
      </section>
    `)
  }

  const nextDiv = DIVISIONS[(DIVISIONS.indexOf(div) + 1) % DIVISIONS.length]

  return layout(`${div.title} — Division`, `

<!-- ═══ DIVISION HERO ═══ -->
<section style="padding:140px 0 80px;background:linear-gradient(168deg,#FFFFFF 0%,#F8F9FC 55%,#EEEEFB 100%);position:relative;overflow:hidden">
  <div style="position:absolute;inset:0;pointer-events:none">
    <div style="position:absolute;top:30%;left:40%;width:700px;height:500px;background:radial-gradient(ellipse,${div.color}05 0%,transparent 65%);transform:translate(-50%,-50%)"></div>
  </div>
  <div class="container" style="position:relative;z-index:1">

    <!-- Breadcrumb -->
    <div class="fade-up d0" style="margin-bottom:32px;display:flex;align-items:center;gap:10px">
      <a href="/" class="font-mono" style="font-size:9.5px;color:#94A3B8;letter-spacing:.16em;text-decoration:none;transition:color .2s" onmouseover="this.style.color='#C79A38'" onmouseout="this.style.color='#94A3B8'">HOME</a>
      <span class="font-mono" style="font-size:9px;color:#CBD5E1">→</span>
      <a href="/divisions" class="font-mono" style="font-size:9.5px;color:#94A3B8;letter-spacing:.16em;text-decoration:none;transition:color .2s" onmouseover="this.style.color='#C79A38'" onmouseout="this.style.color='#94A3B8'">THE SYSTEM</a>
      <span class="font-mono" style="font-size:9px;color:#CBD5E1">→</span>
      <span class="font-mono" style="font-size:9.5px;color:${div.color};letter-spacing:.16em">${div.title.toUpperCase()}</span>
    </div>

    <div style="display:grid;grid-template-columns:1fr 1fr;gap:64px;align-items:center" class="two-col">

      <!-- Left -->
      <div>
        <div class="fade-up d1" style="display:flex;align-items:center;gap:12px;margin-bottom:20px;flex-wrap:wrap">
          <div style="width:70px;height:70px;border-radius:20px;background:${div.color}0E;border:1.5px solid ${div.color}22;display:flex;align-items:center;justify-content:center;font-size:32px">${div.emoji}</div>
          <div>
            <div class="font-mono" style="font-size:9px;color:#94A3B8;letter-spacing:.2em;margin-bottom:3px">DIVISION ${div.n}</div>
            <span class="badge ${div.bc}">${div.status}</span>
          </div>
        </div>

        <h1 class="section-title font-display fade-up d2" style="font-size:clamp(32px,5vw,60px);color:#0F172A;margin-bottom:14px">${div.title}</h1>
        <p class="fade-up d2" style="font-size:16px;color:${div.color};font-weight:600;margin-bottom:20px;letter-spacing:.02em">${div.tag}</p>
        <p class="fade-up d3" style="font-size:15px;color:#64748B;line-height:1.88;margin-bottom:36px">${div.desc}</p>

        <div class="fade-up d4" style="display:flex;gap:12px;flex-wrap:wrap">
          <a href="/contact" class="btn btn-gold" data-h="1">
            Get Started
            <svg style="width:13px;height:13px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9,18 15,12 9,6"/></svg>
          </a>
          <a href="/oracle-os" class="btn btn-outline" data-h="1">Oracle OS</a>
        </div>
      </div>

      <!-- Right: stats -->
      <div class="fade-up d3">
        <div class="glass" style="border-radius:24px;padding:36px">
          <div class="label" style="margin-bottom:22px;color:${div.color}">Division Intelligence</div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:20px;margin-bottom:28px">
            ${[
              ['ARR TARGET', div.arr, div.color],
              ['CLIENTS', div.clients, div.color],
              ['STATUS', div.status, div.bc==='badge-green'?'#10B981':div.bc==='badge-amber'?'#F59E0B':'#8B5CF6'],
              ['REVENUE MODEL', div.rev.split('+')[0].trim(), '#64748B'],
            ].map(([k,v,c])=>`
            <div>
              <div class="annotation" style="margin-bottom:6px">${k}</div>
              <div class="font-display" style="font-size:16px;font-weight:700;color:${c}">${v}</div>
            </div>`).join('')}
          </div>
          <div style="padding-top:20px;border-top:1px solid rgba(199,154,56,.1)">
            <div class="annotation" style="margin-bottom:10px">Revenue Model</div>
            <div class="font-mono" style="font-size:11px;color:${div.color};letter-spacing:.06em">${div.rev}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ═══ SERVICES ═══ -->
<section style="padding:80px 0;background:#FFFFFF">
  <div class="container">
    <div class="reveal" style="text-align:center;margin-bottom:56px">
      <div class="section-intro-line" style="margin:0 auto 18px;background:linear-gradient(90deg,${div.color},${div.color2})"></div>
      <div class="label" style="margin-bottom:13px">Core Services</div>
      <h2 class="section-title font-display" style="font-size:clamp(26px,4vw,48px);color:#0F172A">
        What <span style="color:${div.color}">${div.title}</span> Delivers
      </h2>
    </div>

    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:20px">
      ${div.services.map((s,i)=>`
      <div class="reveal glass-card" style="padding:32px;animation-delay:${i*.1}s">
        <div style="width:44px;height:44px;border-radius:12px;background:${div.color}0E;border:1px solid ${div.color}1A;display:flex;align-items:center;justify-content:center;margin-bottom:20px">
          <div style="width:18px;height:18px;border-radius:50%;background:${div.color};box-shadow:0 0 10px ${div.color}60"></div>
        </div>
        <h3 class="font-display" style="font-size:18px;font-weight:700;color:#0F172A;margin-bottom:10px">${s}</h3>
        <p style="font-size:13px;color:#64748B;line-height:1.78">Enterprise-grade ${s.toLowerCase()} built for operators who demand category-defining results and measurable ROI at scale.</p>
        <div style="margin-top:18px;height:2px;background:linear-gradient(90deg,${div.color}40,transparent);border-radius:99px"></div>
      </div>`).join('')}
    </div>
  </div>
</section>

<!-- ═══ CTA + NEXT DIVISION ═══ -->
<section style="padding:80px 0;background:#070810;position:relative;overflow:hidden">
  <div style="position:absolute;inset:0;background:radial-gradient(ellipse 60% 80% at 50% 50%,${div.color}07 0%,transparent 70%);pointer-events:none"></div>
  <div class="container" style="position:relative;z-index:1">
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:40px;align-items:center" class="two-col">

      <div class="reveal">
        <div class="section-intro-line" style="background:linear-gradient(90deg,${div.color},${div.color2})"></div>
        <h2 class="section-title font-display" style="font-size:clamp(26px,4vw,46px);color:#F8F9FC;margin-bottom:16px">
          Ready to Deploy<br><span style="color:${div.color}">${div.title}?</span>
        </h2>
        <p style="font-size:14.5px;color:#475569;margin-bottom:32px;line-height:1.85">Submit your launch request and get a custom proposal within 24 hours.</p>
        <div style="display:flex;gap:12px;flex-wrap:wrap">
          <a href="/contact" class="btn btn-gold" data-h="1">
            Submit Launch Request
            <svg style="width:13px;height:13px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9,18 15,12 9,6"/></svg>
          </a>
          <a href="/divisions" class="btn btn-dark" data-h="1">All Divisions</a>
        </div>
      </div>

      <!-- Next division -->
      <div class="reveal">
        <div class="annotation" style="margin-bottom:14px;color:#475569">NEXT DIVISION</div>
        <a href="/divisions/${nextDiv.id}" style="text-decoration:none" data-h="1">
          <div style="border-radius:20px;border:1px solid ${nextDiv.color}22;background:rgba(255,255,255,.04);padding:26px;transition:all .35s;cursor:pointer"
            onmouseover="this.style.background='${nextDiv.color}08';this.style.borderColor='${nextDiv.color}38'" onmouseout="this.style.background='rgba(255,255,255,.04)';this.style.borderColor='${nextDiv.color}22'">
            <div style="display:flex;align-items:center;gap:14px;margin-bottom:12px">
              <div style="width:52px;height:52px;border-radius:15px;background:${nextDiv.color}0E;border:1px solid ${nextDiv.color}22;display:flex;align-items:center;justify-content:center;font-size:24px">${nextDiv.emoji}</div>
              <div>
                <div class="font-mono" style="font-size:8px;color:#475569;letter-spacing:.16em;margin-bottom:3px">DIVISION ${nextDiv.n}</div>
                <div class="font-display" style="font-size:18px;font-weight:700;color:#F8F9FC">${nextDiv.title}</div>
              </div>
            </div>
            <p style="font-size:13px;color:#475569;margin-bottom:12px">${nextDiv.tag}</p>
            <div style="display:flex;align-items:center;gap:5px;color:${nextDiv.color};font-family:'Space Grotesk',sans-serif;font-size:11.5px;font-weight:700">
              Explore Division <svg style="width:12px;height:12px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9,18 15,12 9,6"/></svg>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</section>
`, 'division')
}

// ─── ABOUT PAGE ────────────────────────────────────────────────────────────
function aboutPage(): string {
  return layout('About — The Vision', `

<!-- ═══ ABOUT HERO ═══ -->
<section style="padding:140px 0 80px;background:linear-gradient(168deg,#FFFFFF 0%,#F8F9FC 55%,#EEEEFB 100%);position:relative;overflow:hidden">
  <div style="position:absolute;inset:0;pointer-events:none">
    <div style="position:absolute;top:30%;left:50%;transform:translate(-50%,-50%);width:700px;height:450px;background:radial-gradient(ellipse,rgba(199,154,56,.05) 0%,transparent 65%)"></div>
  </div>
  <div class="container" style="position:relative;z-index:1;max-width:820px;margin:0 auto;text-align:center">
    <div class="label fade-up d1" style="margin-bottom:16px">The Vision // Built to Last</div>
    <h1 class="section-title font-display fade-up d2" style="font-size:clamp(34px,6vw,70px);color:#0F172A;margin-bottom:22px">
      We Build <span class="gold">Empires,</span><br>Not Companies
    </h1>
    <p class="fade-up d3" style="font-size:16px;color:#64748B;line-height:1.9;margin-bottom:44px">
      Mansas Moguls is a multi-division holding empire operating at the intersection of technology, capital, and culture. We don't chase trends — we create the systems that outlast them.
    </p>
    <div class="fade-up d4" style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap">
      <span class="badge badge-green">FOUNDED 2023</span>
      <span class="badge badge-violet">GLOBAL OPERATIONS</span>
      <span style="font-family:'JetBrains Mono',monospace;font-size:9px;font-weight:600;letter-spacing:.14em;text-transform:uppercase;padding:4px 12px;border-radius:999px;background:rgba(199,154,56,.1);color:#C79A38;border:1px solid rgba(199,154,56,.22)">EMPIRE OS v2.0</span>
    </div>
  </div>
</section>

<!-- ═══ MISSION + VALUES ═══ -->
<section style="padding:80px 0;background:#FFFFFF">
  <div class="container">
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:72px;align-items:center;margin-bottom:80px" class="two-col">

      <!-- Mission statement -->
      <div class="reveal-left">
        <div class="section-intro-line" style="margin-bottom:20px"></div>
        <div class="label" style="margin-bottom:14px">The Mission</div>
        <h2 class="section-title font-display" style="font-size:clamp(26px,4vw,48px);color:#0F172A;margin-bottom:22px">
          Operating at the<br><span class="gold">Frontier of Everything</span>
        </h2>
        <p style="font-size:15px;color:#64748B;line-height:1.9;margin-bottom:20px">
          We exist to acquire, build, and scale transformative businesses with institutional-grade capital discipline, AI-powered operational systems, and a relentless pursuit of category dominance.
        </p>
        <p style="font-size:15px;color:#64748B;line-height:1.9;margin-bottom:32px">
          Every division, every product, every operator is selected with one question: "Will this still matter in 25 years?"
        </p>
        <div style="display:flex;flex-direction:column;gap:14px">
          ${[
            ['Build to last, not to exit','Legacy over liquidity events'],
            ['Operator-first culture','Founders who also build systems'],
            ['Capital intelligence','Every dollar deployed with precision'],
          ].map(([title,sub])=>`
          <div style="display:flex;align-items:flex-start;gap:14px">
            <div style="width:8px;height:8px;border-radius:50%;background:#C79A38;box-shadow:0 0 8px rgba(199,154,56,.6);margin-top:6px;flex-shrink:0"></div>
            <div>
              <div class="font-display" style="font-size:14px;font-weight:700;color:#0F172A;margin-bottom:3px">${title}</div>
              <div class="annotation" style="color:#94A3B8">${sub}</div>
            </div>
          </div>`).join('')}
        </div>
      </div>

      <!-- Empire metrics -->
      <div class="reveal-right">
        <div class="glass" style="border-radius:24px;padding:40px;position:relative;overflow:hidden">
          <div style="position:absolute;top:0;right:0;width:200px;height:200px;background:radial-gradient(circle at top right,rgba(199,154,56,.06),transparent 65%);pointer-events:none"></div>
          <div class="label" style="margin-bottom:28px;color:#C79A38">Empire Metrics // 2025</div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:24px">
            ${[
              ['$1.2B+','Valuation Target','#C79A38'],
              ['7+','Portfolio Cos','#4338CA'],
              ['38','Elite Operators','#10B981'],
              ['6','Active Divisions','#8B5CF6'],
              ['14+','Active Products','#F59E0B'],
              ['3','Global Markets','#EC4899'],
            ].map(([n,l,c])=>`
            <div style="position:relative">
              <div class="font-display" style="font-size:30px;font-weight:800;color:${c};line-height:1;margin-bottom:5px;filter:drop-shadow(0 0 8px ${c}40)">${n}</div>
              <div class="annotation" style="color:#94A3B8">${l}</div>
            </div>`).join('')}
          </div>
        </div>
      </div>
    </div>

    <!-- Core values -->
    <div class="reveal" style="text-align:center;margin-bottom:56px">
      <div class="section-intro-line" style="margin:0 auto 18px"></div>
      <div class="label" style="margin-bottom:13px">Guiding Principles</div>
      <h2 class="section-title font-display" style="font-size:clamp(26px,4vw,48px);color:#0F172A">
        What We <span class="gold">Stand For</span>
      </h2>
    </div>

    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:22px">
      ${[
        {icon:'♾️',title:'Longevity Over Liquidity',color:'#4338CA',desc:"We measure success in decades, not exit multiples. Every decision is filtered through the question: 'Does this build lasting value?'"},
        {icon:'⚡',title:'Operator DNA',color:'#C79A38',desc:"We are builders who operate inside the machine. We don't just advise — we deploy, execute, and own the outcome alongside our portfolio."},
        {icon:'🔬',title:'Obsessive Precision',color:'#8B5CF6',desc:'Every system, product, and hire is crafted with institutional-grade rigor. Mediocrity is the only thing we refuse to scale.'},
        {icon:'🌍',title:'Empire Mentality',color:'#10B981',desc:"We operate on the Mansa Musa principle: acquire the best, systematize the processes, and expand with relentless patience and strategic aggression."},
      ].map((v,i)=>`
      <div class="reveal glass-card" style="padding:36px 32px;animation-delay:${i*.1}s">
        <div style="width:56px;height:56px;border-radius:16px;background:${v.color}0E;border:1px solid ${v.color}18;display:flex;align-items:center;justify-content:center;font-size:26px;margin-bottom:22px">${v.icon}</div>
        <h3 class="font-display" style="font-size:18px;font-weight:700;color:#0F172A;margin-bottom:12px">${v.title}</h3>
        <p style="font-size:13.5px;color:#64748B;line-height:1.82">${v.desc}</p>
        <div style="margin-top:20px;height:2px;background:linear-gradient(90deg,${v.color}45,transparent);border-radius:99px"></div>
      </div>`).join('')}
    </div>
  </div>
</section>

<!-- ═══ MANIFESTO ═══ -->
<section style="padding:80px 0;background:#070810;position:relative;overflow:hidden">
  <div style="position:absolute;inset:0;background:radial-gradient(ellipse 70% 80% at 50% 50%,rgba(199,154,56,.06) 0%,transparent 70%);pointer-events:none"></div>
  <div style="position:absolute;inset:0;background-image:linear-gradient(rgba(199,154,56,.02) 1px,transparent 1px),linear-gradient(90deg,rgba(199,154,56,.02) 1px,transparent 1px);background-size:80px 80px;pointer-events:none"></div>
  <div class="container" style="position:relative;z-index:1;max-width:760px;margin:0 auto;text-align:center">
    <div class="reveal">
      <div class="section-intro-line" style="margin:0 auto 22px;box-shadow:0 0 12px rgba(199,154,56,.4)"></div>
      <div class="label" style="margin-bottom:20px;color:#C79A38">The Mansas Moguls Manifesto</div>
      <blockquote class="font-display" style="font-size:clamp(20px,3.5vw,36px);color:#F8F9FC;line-height:1.5;font-weight:600;letter-spacing:-.01em;margin-bottom:32px">
        "We don't build companies.<br>
        <span class="gold">We build systems that outlast empires.</span><br>
        One vision. Six divisions. Infinite impact."
      </blockquote>
      <div class="font-mono" style="font-size:10px;color:#475569;letter-spacing:.2em">— THE MANSAS MOGULS CODE</div>
    </div>

    <div class="reveal" style="margin-top:48px;display:flex;gap:14px;justify-content:center;flex-wrap:wrap">
      <a href="/contact" class="btn btn-gold" data-h="1">
        Join the Empire
        <svg style="width:13px;height:13px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9,18 15,12 9,6"/></svg>
      </a>
      <a href="/divisions" class="btn btn-dark" data-h="1">Explore Divisions</a>
    </div>
  </div>
</section>
`, 'about')
}

// ─── CONTACT PAGE ──────────────────────────────────────────────────────────
function contactPage(): string {
  return layout('Contact — Launch Request', `

<!-- ═══ CONTACT HERO ═══ -->
<section style="padding:140px 0 0;background:linear-gradient(168deg,#FFFFFF 0%,#F8F9FC 55%,#EEEEFB 100%);position:relative;overflow:hidden">
  <div style="position:absolute;inset:0;pointer-events:none">
    <div style="position:absolute;top:30%;left:50%;transform:translate(-50%,-50%);width:600px;height:400px;background:radial-gradient(ellipse,rgba(67,56,202,.05) 0%,transparent 65%)"></div>
  </div>
  <div class="container" style="position:relative;z-index:1;max-width:780px;margin:0 auto;text-align:center;padding-bottom:60px">
    <div class="label fade-up d1" style="margin-bottom:16px">The Gateway // Selective Access</div>
    <h1 class="section-title font-display fade-up d2" style="font-size:clamp(32px,5.5vw,64px);color:#0F172A;margin-bottom:20px">
      Submit Your<br><span class="gold">Launch Request</span>
    </h1>
    <p class="fade-up d3" style="font-size:15px;color:#64748B;line-height:1.9;max-width:520px;margin:0 auto 28px">
      We are highly selective. We only engage with operators and founders whose ambitions align with empire-level thinking and execution standards.
    </p>
    <div class="fade-up d4" style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap">
      <span class="badge badge-green">ACCEPTING REQUESTS</span>
      <span style="font-family:'JetBrains Mono',monospace;font-size:9px;font-weight:600;letter-spacing:.14em;text-transform:uppercase;padding:4px 12px;border-radius:999px;background:rgba(199,154,56,.1);color:#C79A38;border:1px solid rgba(199,154,56,.22)">24H RESPONSE</span>
    </div>
  </div>
</section>

<!-- ═══ CONTACT FORM + INFO ═══ -->
<section style="padding:0 0 110px;background:linear-gradient(180deg,#F8F9FC 0%,#FFFFFF 100%)">
  <div class="container">
    <div style="display:grid;grid-template-columns:1fr 2fr;gap:48px;max-width:1080px;margin:0 auto" class="two-col">

      <!-- Left: contact info terminal -->
      <div>
        <div class="reveal">
          <!-- Terminal card -->
          <div class="terminal" style="border-radius:16px;padding:26px">
            <div class="terminal-bar" style="margin:-26px -26px 20px;border-radius:16px 16px 0 0">
              <div class="t-dot" style="background:#FF5F57"></div>
              <div class="t-dot" style="background:#FFBD2E"></div>
              <div class="t-dot" style="background:#28C840"></div>
              <span class="font-mono" style="font-size:10px;color:#334155;margin-left:10px;letter-spacing:.1em">contact@moguls</span>
            </div>
            <div style="margin-bottom:3px"><span class="prompt">→ </span><span class="cmd">./empire --contact</span></div>
            <div class="comment" style="font-size:11px;margin-bottom:14px">// Empire contact directory</div>
            ${[
              ['EMAIL', 'hello@mansasmoguls.com', '#C79A38'],
              ['LOCATION', 'Dubai, UAE // Global', '#10B981'],
              ['RESPONSE', '24 hours or less', '#8B5CF6'],
              ['INTAKE', 'Highly Selective', '#F59E0B'],
            ].map(([k,v,c])=>`
            <div style="margin-bottom:12px">
              <div style="color:#475569;font-size:10.5px;letter-spacing:.14em">${k}:</div>
              <div style="color:${c};font-size:12px;margin-top:2px">${v}</div>
            </div>`).join('')}
            <div style="margin-top:18px;padding-top:14px;border-top:1px solid rgba(16,185,129,.1)">
              <div class="comment" style="font-size:10px">// Active divisions accepting clients:</div>
              ${['Moguls AI','Moguls Studio','Moguls Growth'].map(d=>`<div style="color:#10B981;font-size:11px;margin-top:5px">✓ ${d}</div>`).join('')}
              ${['Moguls Academy (Building)'].map(d=>`<div style="color:#F59E0B;font-size:11px;margin-top:5px">◷ ${d}</div>`).join('')}
            </div>
            <div style="margin-top:14px;display:flex;align-items:center;gap:6px">
              <span style="color:#475569;font-size:11px">System</span>
              <span style="width:5px;height:5px;border-radius:50%;background:#10B981;box-shadow:0 0 5px #10B981;display:inline-block"></span>
              <span style="color:#10B981;font-size:11px">Online</span>
            </div>
          </div>
        </div>

        <!-- Process steps -->
        <div class="reveal" style="margin-top:24px;display:flex;flex-direction:column;gap:14px">
          <div class="annotation" style="margin-bottom:4px;color:#94A3B8">WHAT HAPPENS NEXT</div>
          ${[
            ['01','Submit Request','Your information is reviewed within 24 hours'],
            ['02','Strategy Call','30-minute discovery call with our team'],
            ['03','Custom Proposal','Tailored empire plan built for your goals'],
            ['04','Launch','Activation and deployment begins'],
          ].map(([n,t,d])=>`
          <div style="display:flex;gap:14px;align-items:flex-start">
            <div class="font-mono" style="font-size:11px;color:#C79A38;font-weight:700;min-width:24px;margin-top:2px">${n}</div>
            <div>
              <div class="font-display" style="font-size:13.5px;font-weight:700;color:#0F172A;margin-bottom:2px">${t}</div>
              <div style="font-size:12px;color:#64748B;line-height:1.6">${d}</div>
            </div>
          </div>`).join('')}
        </div>
      </div>

      <!-- Right: form -->
      <div class="reveal">
        <!-- Form container -->
        <div id="form-wrap">
          <div class="glass" style="border-radius:24px;padding:44px;position:relative">
            <!-- Corner brackets -->
            ${[
              ['top:18px;left:18px','border-top:1.5px solid rgba(199,154,56,.28);border-left:1.5px solid rgba(199,154,56,.28);border-radius:3px 0 0 0'],
              ['top:18px;right:18px','border-top:1.5px solid rgba(199,154,56,.28);border-right:1.5px solid rgba(199,154,56,.28);border-radius:0 3px 0 0'],
              ['bottom:18px;left:18px','border-bottom:1.5px solid rgba(199,154,56,.28);border-left:1.5px solid rgba(199,154,56,.28);border-radius:0 0 0 3px'],
              ['bottom:18px;right:18px','border-bottom:1.5px solid rgba(199,154,56,.28);border-right:1.5px solid rgba(199,154,56,.28);border-radius:0 0 3px 0'],
            ].map(([pos,brd])=>`<div style="position:absolute;${pos};width:26px;height:26px;${brd}"></div>`).join('')}

            <div class="label" style="margin-bottom:6px">Launch Request Form</div>
            <h2 class="font-display" style="font-size:26px;font-weight:800;color:#0F172A;margin-bottom:28px">Tell Us About Your Empire</h2>

            <form id="empire-form" onsubmit="handleSubmit(event)">
              <div style="display:grid;grid-template-columns:1fr 1fr;gap:18px;margin-bottom:18px" class="two-col">
                <div class="field">
                  <label>Full Name *</label>
                  <input type="text" placeholder="John Empire" required/>
                </div>
                <div class="field">
                  <label>Email Address *</label>
                  <input type="email" placeholder="john@empire.com" required/>
                </div>
              </div>
              <div style="display:grid;grid-template-columns:1fr 1fr;gap:18px;margin-bottom:18px" class="two-col">
                <div class="field">
                  <label>Company / Brand</label>
                  <input type="text" placeholder="Your company name"/>
                </div>
                <div class="field">
                  <label>Division of Interest *</label>
                  <select required style="appearance:none;cursor:pointer">
                    <option value="">Select division...</option>
                    <option>Moguls AI — Intelligence Automation</option>
                    <option>Moguls Studio — Brand Architecture</option>
                    <option>Moguls Growth — Performance Scaling</option>
                    <option>Moguls Academy — Education Programs</option>
                    <option>Moguls Labs — R&D Partnership</option>
                    <option>Oracle OS — Enterprise Access</option>
                    <option>Full Empire Engagement</option>
                  </select>
                </div>
              </div>
              <div class="field" style="margin-bottom:18px">
                <label>Budget Range</label>
                <select style="appearance:none;cursor:pointer">
                  <option value="">Select budget range...</option>
                  <option>$5K – $15K / month</option>
                  <option>$15K – $50K / month</option>
                  <option>$50K – $150K / month</option>
                  <option>$150K+ / month (Enterprise)</option>
                </select>
              </div>
              <div class="field" style="margin-bottom:28px">
                <label>Tell us about your empire *</label>
                <textarea rows="5" placeholder="Describe your business, goals, challenges, and what kind of empire you're building..." required style="resize:vertical"></textarea>
              </div>

              <button type="submit" class="btn btn-gold" id="submit-btn" style="width:100%;justify-content:center;padding:16px;font-size:13px" data-h="1">
                <svg style="width:14px;height:14px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9,18 15,12 9,6"/></svg>
                Submit Launch Request
              </button>

              <p style="text-align:center;margin-top:14px;font-size:11.5px;color:#94A3B8">
                We respect your privacy. No spam, ever. Response within 24 hours.
              </p>
            </form>
          </div>
        </div>

        <!-- Success state (hidden) -->
        <div id="success-wrap" style="display:none">
          <div class="glass" style="border-radius:24px;padding:64px 44px;text-align:center">
            <div style="width:72px;height:72px;border-radius:50%;background:rgba(16,185,129,.1);border:2px solid rgba(16,185,129,.3);display:flex;align-items:center;justify-content:center;margin:0 auto 28px;font-size:32px">✓</div>
            <div class="label" style="margin-bottom:12px;color:#10B981">REQUEST RECEIVED</div>
            <h2 class="font-display" style="font-size:28px;font-weight:800;color:#0F172A;margin-bottom:14px">Launch Request Submitted</h2>
            <p style="font-size:14.5px;color:#64748B;line-height:1.85;max-width:380px;margin:0 auto 32px">
              Your request has been received. Expect a response within 24 hours from our team.
            </p>
            <div class="font-mono" style="font-size:11px;color:#10B981;letter-spacing:.14em">SYSTEM STATUS: REQUEST LOGGED ✓</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<script>
function handleSubmit(e){
  e.preventDefault();
  var btn=document.getElementById('submit-btn');
  if(btn){btn.disabled=true;btn.textContent='Processing...';}
  setTimeout(function(){
    var fw=document.getElementById('form-wrap');
    var sw=document.getElementById('success-wrap');
    if(fw){fw.style.transition='opacity .4s';fw.style.opacity='0';}
    setTimeout(function(){
      if(fw)fw.style.display='none';
      if(sw){sw.style.display='block';sw.style.opacity='0';sw.style.transition='opacity .5s';setTimeout(function(){sw.style.opacity='1';},20);}
    },420);
  },1400);
}
</script>
`, 'contact')
}

// ─── PAGE ROUTER ──────────────────────────────────────────────────────────
export function getPage(type: string, slug?: string): string {
  switch(type) {
    case 'home':      return homePage()
    case 'oracle':    return oraclePage()
    case 'divisions': return divisionsPage()
    case 'division':  return divisionPage(slug || '')
    case 'about':     return aboutPage()
    case 'contact':   return contactPage()
    default:
      return layout('Page Not Found', `
        <section style="min-height:100vh;display:flex;align-items:center;justify-content:center;text-align:center;padding:120px 24px">
          <div>
            <div class="label" style="margin-bottom:14px">404 // Not Found</div>
            <h1 class="section-title font-display" style="font-size:64px;color:#0F172A;margin-bottom:20px">Page Not Found</h1>
            <p style="font-size:15px;color:#64748B;margin-bottom:36px">This path doesn't exist in the empire.</p>
            <a href="/" class="btn btn-gold" data-h="1">Return to Command Center</a>
          </div>
        </section>
      `)
  }
}
