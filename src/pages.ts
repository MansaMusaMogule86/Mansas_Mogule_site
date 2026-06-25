import { layout } from './layout'
import { homePage as empireHomePage } from './home'

const miniIcon = (accent: string, path: string): string => `
  <svg viewBox="0 0 64 64" width="42" height="42" fill="none" aria-hidden="true">
    <rect x="9" y="9" width="46" height="46" rx="14" fill="${accent}14" stroke="${accent}" stroke-opacity=".48"/>
    <rect x="16" y="16" width="32" height="32" rx="9" fill="rgba(255,255,255,.12)" stroke="rgba(255,255,255,.22)"/>
    <path d="${path}" stroke="${accent}" stroke-width="3.1" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="${path}" stroke="#F0D597" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" opacity=".7"/>
  </svg>`

// Shared division data
const DIVISIONS = [
  {
    id:'moguls-ai', n:'01', title:'Moguls AI', tag:'Intelligence at Machine Speed',
    color:'#4338CA', color2:'#6366F1', glow:'rgba(67,56,202,.28)', icon:'AI',
    emoji: miniIcon('#6366F1', 'M22 40V25l10-6 10 6v15l-10 6-10-6ZM32 19v-7M22 29h-7M49 29h-7M26 35h12'),
    status:'ACTIVE', bc:'badge-green',
    desc:'Autonomous AI systems, custom agents, and intelligent workflow automation that transforms operations from manual to machine-speed.',
    services:['AI Agent Development','Custom LLM Dashboards','Process Automation','Predictive Analytics'],
    rev:'AI Systems + Workflow Intelligence', clients:'ACTIVE', arr:'FLAGSHIP'
  },
  {
    id:'moguls-intelligence', n:'OS', title:'Moguls Intelligence', tag:'Strategic Intelligence Layer',
    color:'#8B5CF6', color2:'#A78BFA', glow:'rgba(139,92,246,.3)', icon:'OS',
    emoji: miniIcon('#A78BFA', 'M20 36c7-14 17-14 24 0M25 24h14M32 16v32M19 46h26M24 30l-6-4M40 30l6-4'),
    status:'FLAGSHIP', bc:'badge-violet',
    desc:'The central operating brain that connects mission control, company intelligence, market signals, and strategic simulation.',
    services:['Mission Control','Company Twin','Competitor Matrix','Simulation Engine'],
    rev:'Decision OS + Portfolio Intelligence', clients:'STRATEGIC', arr:'FLAGSHIP'
  },
  {
    id:'moguls-studio', n:'02', title:'Moguls Studio', tag:'Brand Architecture at the Highest Level',
    color:'#C79A38', color2:'#F0D597', glow:'rgba(199,154,56,.28)', icon:'ST',
    emoji: miniIcon('#C79A38', 'M18 43l9-23 8 18 4-9 7 14M21 45h26M27 20l6-5 6 5'),
    status:'ACTIVE', bc:'badge-green',
    desc:'Brand identity systems, UI/UX, packaging, and premium presentation architecture that commands instant market authority.',
    services:['Brand Identity Systems','UI/UX Design','Pitch Architecture','Motion Design'],
    rev:'Brand Systems + Experience Design', clients:'ACTIVE', arr:'ACTIVE'
  },
  {
    id:'moguls-growth', n:'03', title:'Moguls Growth', tag:'Performance-Engineered Scaling',
    color:'#10B981', color2:'#34D399', glow:'rgba(16,185,129,.28)', icon:'GR',
    emoji: miniIcon('#10B981', 'M18 43l12-12 8 8 10-18M38 21h10v10M19 49h30'),
    status:'STRATEGIC', bc:'badge-violet',
    desc:'High-velocity lead acquisition, strategic partnership mapping, and performance marketing at institutional scale.',
    services:['Performance Marketing','Lead Velocity Systems','Partnership Mapping','Growth Analytics'],
    rev:'Growth Systems + Partnership Mapping', clients:'STRATEGIC', arr:'STRATEGIC'
  },
  {
    id:'moguls-academy', n:'04', title:'Moguls Academy', tag:'Elevating the Next Generation',
    color:'#F59E0B', color2:'#FBBF24', glow:'rgba(245,158,11,.28)', icon:'AC',
    emoji: miniIcon('#F59E0B', 'M17 28l15-8 15 8-15 8-15-8ZM23 33v9c5 5 13 5 18 0v-9M47 29v11'),
    status:'IN TRAINING', bc:'badge-amber',
    desc:'Elite education programs, corporate training tracks, and creator monetization systems for ambitious operators.',
    services:['Corporate Training','AI Workshops','Creator Monetization','Cohort Programs'],
    rev:'Operator Education + Capability Transfer', clients:'IN TRAINING', arr:'BUILDING'
  },
  {
    id:'moguls-labs', n:'05', title:'Moguls Labs', tag:'Where the Future Gets Built',
    color:'#EC4899', color2:'#F472B6', glow:'rgba(236,72,153,.28)', icon:'LB',
    emoji: miniIcon('#EC4899', 'M25 16h14M29 16v12L19 45c-2 4 1 7 5 7h16c4 0 7-3 5-7L35 28V16M25 41h14'),
    status:'R&D', bc:'badge-violet',
    desc:'R&D incubator for next-gen SaaS micro-apps, experimental technology, and the businesses of tomorrow.',
    services:['SaaS Incubation','Tech R&D','IP Creation','Prototype Development'],
    rev:'Research + Prototype Incubation', clients:'R&D', arr:'R&D'
  },
]

// ─── Moguls Intelligence OS PAGE ───────────────────────────────────────────────────────
function intelligencePage(): string {
  const layers = [
    {
      id:'mission', n:'01', title:'Mission Control', sub:'Real-time command center for executive strategy',
      color:'#4338CA', icon: miniIcon('#4338CA', 'M18 44h28M22 38V26M32 38V18M42 38V30M20 20h8M36 24h8'),
      detail:'The nerve center of your empire. Mission Control gives executives a real-time, single-source-of-truth view of every KPI, capital movement, and strategic milestone — before others even open their laptops.',
      metrics:[['Decision Speed','3.2× faster'],['KPIs Tracked','240+'],['Alert Latency','<100ms']],
      features:['KPI Tracking Dashboard','Capital Pulse Monitor','Executive Briefing Engine','Strategic Alignment Score']
    },
    {
      id:'twin', n:'02', title:'Company Twin', sub:'Digital replica of your full organizational structure',
      color:'#8B5CF6', icon: miniIcon('#8B5CF6', 'M18 46h28M22 46V26l10-7 10 7v20M28 46V34h8v12M22 30h20'),
      detail:'A living, breathing digital replica of your company. The Company Twin models every team, process, and dependency — giving leadership the power to simulate restructures and spot bottlenecks before they cost millions.',
      metrics:[['Org Accuracy','98.7%'],['Scenario Models','1,200+'],['Update Frequency','Real-time']],
      features:['Org Topology Map','Capacity Mapping','Dependency Chains','Performance Heatmap']
    },
    {
      id:'competitor', n:'03', title:'Competitor Matrix', sub:'AI-powered competitive intelligence at scale',
      color:'#C79A38', icon: miniIcon('#C79A38', 'M20 44l24-24M44 44L20 20M26 18l-6 2 2-6M38 18l6 2-2-6M20 44l-3 6 6-3M44 44l3 6-6-3'),
      detail:'Know your competition better than they know themselves. The Competitor Matrix continuously scans markets, benchmarks performance, and identifies strategic gaps — so your next move is always five steps ahead.',
      metrics:[['Competitors Tracked','500+'],['Signal Accuracy','94.2%'],['Update Cycle','24h']],
      features:['Benchmarking Engine','Market Gap Analysis','Strategic Gap Finder','Threat Detection']
    },
    {
      id:'simulation', n:'04', title:'Simulation Engine', sub:'Scenario modeling and decision intelligence',
      color:'#10B981', icon: miniIcon('#10B981', 'M22 22h20v20H22zM18 32h8M38 32h8M32 18v8M32 38v8M24 24l-6-6M40 24l6-6M24 40l-6 6M40 40l6 6'),
      detail:"Don't make decisions in the dark. The Simulation Engine lets you run unlimited strategic scenarios and receive AI-generated Stabilization Reports before committing a single dollar.",
      metrics:[['Scenarios/day','10,000+'],['Prediction Accuracy','89.4%'],['Report Time','< 3 min']],
      features:['Scenario Builders','Predictive Analytics','Stabilization Reports','Monte Carlo Engine']
    },
  ]

  return layout('Moguls Intelligence OS — Strategic Intelligence', `

<!-- ═══════════════ Moguls Intelligence HERO ═══════════════ -->
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

      <div class="label fade-up d1" style="margin-bottom:16px">Moguls Intelligence OS // Strategic Intelligence Layer</div>

      <h1 class="section-title font-display fade-up d2" style="font-size:clamp(34px,6vw,68px);color:#0F172A;margin-bottom:22px">
        Centralize. <span class="gold">Simulate.</span><br>
        Strategize. <span class="violet-text">Dominate.</span>
      </h1>

      <p class="fade-up d3" style="font-size:15.5px;color:#475569;line-height:1.88;margin-bottom:30px;max-width:580px">
        Moguls Intelligence OS is the AI-powered operating brain for elite business operators. Four intelligence layers. One unstoppable command center that gives you omniscient visibility over your empire.
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
        <div class="layer-item reveal" id="layer-btn-${l.id}" onclick="selectIntelligenceLayer('${l.id}')" style="animation-delay:${i*.1}s" data-h="1">
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
      <div id="intelligence-detail">
        ${layers.map((l,i)=>`
        <div id="detail-${l.id}" style="display:${i===0?'block':'none'}">
          <div class="glass reveal" style="border-radius:22px;padding:38px;margin-bottom:16px;border:1px solid ${l.color}18">
            <div style="display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:24px">
              <div>
                <div class="annotation" style="margin-bottom:8px;color:#94A3B8">${l.n} / Moguls Intelligence OS Module</div>
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
      <div class="annotation" style="margin-bottom:18px;text-align:center;color:#94A3B8">Moguls Intelligence OS ARCHITECTURE STACK — ALL LAYERS ACTIVE</div>
      <div style="max-width:600px;margin:0 auto;display:flex;flex-direction:column;gap:8px">
        ${layers.map((l,i)=>`
        <div onclick="selectIntelligenceLayer('${l.id}')" id="stack-${l.id}" class="layer-item" data-h="1">
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
        <button onclick="runIntelligenceSimulation()" id="sim-btn" class="btn btn-gold" style="padding:12px 28px;font-size:11px" data-h="1">
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
            <span class="font-mono" style="font-size:10px;color:#334155;margin-left:10px;letter-spacing:.1em">Moguls Intelligence@moguls:~ — simulation-engine v2.0.1</span>
          </div>
          <div style="margin-top:4px"><span class="prompt">Moguls Intelligence@moguls</span><span class="cmd">:~$ </span><span style="color:#475569;animation:blink 1.1s step-end infinite">▋</span></div>
          <div class="comment" style="margin-top:12px;font-size:11px">// Awaiting simulation trigger... Press "Run Simulation" to initiate analysis</div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ═══════════════ Moguls Intelligence CTA ═══════════════ -->
<section style="padding:80px 0;background:#070810;position:relative;overflow:hidden">
  <div style="position:absolute;inset:0;background:radial-gradient(ellipse 60% 80% at 50% 50%,rgba(139,92,246,.09) 0%,transparent 70%);pointer-events:none"></div>
  <div class="container" style="text-align:center;max-width:620px;margin:0 auto;position:relative;z-index:1">
    <div class="section-intro-line reveal" style="margin:0 auto 22px;background:linear-gradient(90deg,#8B5CF6,#C79A38)"></div>
    <h2 class="section-title font-display reveal" style="font-size:clamp(26px,4vw,48px);color:#F8F9FC;margin-bottom:18px">
      Ready for <span class="gold">Moguls Intelligence OS?</span>
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

function selectIntelligenceLayer(id){
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
selectIntelligenceLayer('mission');

// Simulation
var simLines = [
  {pre:'[Moguls Intelligence OS]', txt:'Simulation protocol initiated — scanning empire state...', color:'#64748B'},
  {pre:'[SCAN]',      txt:'Parsing 247 live data streams across 6 market segments', color:'#94A3B8'},
  {pre:'[AI]',        txt:'Cross-referencing 500+ competitor signals — high confidence', color:'#8B5CF6'},
  {pre:'[ANALYSIS]',  txt:'Strategic vulnerability detected in Sector 4 — confidence 94.2%', color:'#F59E0B'},
  {pre:'[MONTE CARLO]',txt:'Running 10,000 scenario simulations in parallel...', color:'#4338CA'},
  {pre:'[MODEL]',     txt:'Processing 38 strategic permutations at machine speed', color:'#4338CA'},
  {pre:'[RESULT]',    txt:'Optimal strategic pivot identified — projected +34% revenue upside', color:'#10B981'},
  {pre:'[REPORT]',    txt:'Stabilization Report generated — 98.2% confidence interval', color:'#10B981'},
  {pre:'[Moguls Intelligence OS]', txt:'Analysis complete. Decision brief ready for executive review. ✓', color:'#C79A38'},
];
var simRunning = false;

function runIntelligenceSimulation(){
  if(simRunning)return;
  simRunning=true;
  var btn=document.getElementById('sim-btn');
  var term=document.getElementById('sim-terminal');
  if(btn)btn.disabled=true;
  var bar='<div class="terminal-bar"><div class="t-dot" style="background:#FF5F57"></div><div class="t-dot" style="background:#FFBD2E"></div><div class="t-dot" style="background:#28C840"></div><span class="font-mono" style="font-size:10px;color:#334155;margin-left:10px;letter-spacing:.1em">Moguls Intelligence@moguls:~ — simulation-engine v2.0.1</span></div>';
  if(term)term.innerHTML=bar+'<div style="margin-top:4px"><span class="prompt">Moguls Intelligence@moguls</span><span class="cmd">:~$ </span><span class="cmd">run-simulation --full --report</span></div>';
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
`, 'intelligence')
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
                <span class="badge ${d.bc}">${d.clients}</span>
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
                <div class="annotation" style="margin-bottom:4px">PHASE</div>
                <div class="font-display" style="font-size:22px;font-weight:800;color:${d.color}">${d.arr}</div>
              </div>
              <div>
                <div class="annotation" style="margin-bottom:4px">STATUS</div>
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

    <!-- Moguls Intelligence OS Special Card -->
    <div class="reveal" style="margin-top:28px">
      <a href="/moguls-intelligence-os" style="text-decoration:none" data-h="1">
        <div style="border-radius:22px;overflow:hidden;border:1px solid rgba(139,92,246,.2);background:linear-gradient(135deg,rgba(30,27,75,.94),rgba(14,13,40,.98));padding:0;position:relative;transition:transform .38s cubic-bezier(.25,.46,.45,.94),box-shadow .38s;box-shadow:0 4px 24px rgba(67,56,202,.15)"
          onmouseover="this.style.transform='translateY(-7px)';this.style.boxShadow='0 24px 64px rgba(67,56,202,.25)'" onmouseout="this.style.transform='';this.style.boxShadow='0 4px 24px rgba(67,56,202,.15)'">
          <div style="height:3px;background:linear-gradient(90deg,#4338CA,#8B5CF6,#C79A38)"></div>
          <div style="padding:36px 40px;display:grid;grid-template-columns:auto 1fr auto;gap:32px;align-items:center">
            <div style="display:flex;flex-direction:column;align-items:center;gap:10px;flex-shrink:0">
              <div style="width:72px;height:72px;border-radius:20px;background:rgba(139,92,246,.12);border:1.5px solid rgba(139,92,246,.25);display:flex;align-items:center;justify-content:center">${miniIcon('#8B5CF6', 'M20 36c7-14 17-14 24 0M25 24h14M32 16v32M19 46h26M24 30l-6-4M40 30l6-4')}</div>
              <div class="font-mono" style="font-size:9px;color:#64748B;letter-spacing:.14em">OS</div>
            </div>
            <div>
              <div style="display:flex;align-items:center;gap:12px;margin-bottom:8px">
                <h2 class="font-display" style="font-size:24px;font-weight:800;color:#F8F9FC">Moguls Intelligence OS</h2>
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
            <span class="badge ${div.bc}">${div.clients}</span>
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
          <a href="/moguls-intelligence-os" class="btn btn-outline" data-h="1">Moguls Intelligence OS</a>
        </div>
      </div>

      <!-- Right: stats -->
      <div class="fade-up d3">
        <div class="glass" style="border-radius:24px;padding:36px">
          <div class="label" style="margin-bottom:22px;color:${div.color}">Division Intelligence</div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:20px;margin-bottom:28px">
            ${[
              ['PHASE', div.arr, div.color],
              ['POSTURE', div.clients, div.color],
              ['STATUS', div.status, div.bc==='badge-green'?'#10B981':div.bc==='badge-amber'?'#F59E0B':'#8B5CF6'],
              ['Execution Model', div.rev.split('+')[0].trim(), '#64748B'],
            ].map(([k,v,c])=>`
            <div>
              <div class="annotation" style="margin-bottom:6px">${k}</div>
              <div class="font-display" style="font-size:16px;font-weight:700;color:${c}">${v}</div>
            </div>`).join('')}
          </div>
          <div style="padding-top:20px;border-top:1px solid rgba(199,154,56,.1)">
            <div class="annotation" style="margin-bottom:10px">Execution Model</div>
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
        {icon: miniIcon('#4338CA', 'M20 32c0-7 5-12 12-12s12 5 12 12-5 12-12 12S20 39 20 32ZM24 32h16M32 24v16'),title:'Longevity Over Liquidity',color:'#4338CA',desc:"We measure success in decades, not exit multiples. Every decision is filtered through the question: 'Does this build lasting value?'"},
        {icon: miniIcon('#C79A38', 'M35 14L20 36h11l-2 14 15-22H33l2-14Z'),title:'Operator DNA',color:'#C79A38',desc:"We are builders who operate inside the machine. We don't just advise — we deploy, execute, and own the outcome alongside our portfolio."},
        {icon: miniIcon('#8B5CF6', 'M24 16h16M29 16v12L20 46c-2 3 1 6 4 6h16c3 0 6-3 4-6L35 28V16M26 42h12'),title:'Obsessive Precision',color:'#8B5CF6',desc:'Every system, product, and hire is crafted with institutional-grade rigor. Mediocrity is the only thing we refuse to scale.'},
        {icon: miniIcon('#10B981', 'M32 16c9 0 16 7 16 16s-7 16-16 16-16-7-16-16 7-16 16-16ZM18 32h28M32 16c4 5 6 10 6 16s-2 11-6 16M32 16c-4 5-6 10-6 16s2 11 6 16'),title:'Empire Mentality',color:'#10B981',desc:"We operate on the Mansa Musa principle: acquire the best, systematize the processes, and expand with relentless patience and strategic aggression."},
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
              <div class="comment" style="font-size:10px">// Active divisions accepting requests:</div>
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
                    <option>Moguls Intelligence OS — Enterprise Access</option>
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
            <div class="font-mono" style="font-size:11px;color:#10B981;letter-spacing:.14em">SYSTEM clients: REQUEST LOGGED ✓</div>
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
    case 'home':      return empireHomePage()
    case 'intelligence':    return intelligencePage()
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
