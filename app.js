/* ============================================================
   「留客王」会员运营落地系统 · 内测版
   纯前端：HTML + CSS + 原生JS，双击 index.html 即可运行
   ============================================================ */
'use strict';

/* ---------- 常量 ---------- */
var WECHAT_ID = 'oujing1698';
var STORE_KEY = 'lkw_member_data_v2';
var UNLOCK_KEY = 'lkw_unlocked_v2';
var LOGO_B64 = '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';

/* ---------- 工具函数 ---------- */
function $(id){ return document.getElementById(id); }
function round(v){ return Math.round(v); }
function money(v){ return String(round(v)).replace(/\B(?=(\d{3})+(?!\d))/g, ','); }
function esc(s){ return String(s == null ? '' : s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'); }
function toast(msg, type){
  var t = $('toast');
  t.textContent = msg;
  t.className = 'show' + (type ? ' ' + type : '');
  clearTimeout(t._timer);
  t._timer = setTimeout(function(){ t.className = ''; }, 2600);
}
function copyText(text, okMsg){
  var done = function(){ toast(okMsg || '已复制', 'ok'); };
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(done, function(){ legacyCopy(text, done); });
  } else { legacyCopy(text, done); }
}
function legacyCopy(text, done){
  var ta = document.createElement('textarea');
  ta.value = text;
  ta.style.cssText = 'position:fixed;top:0;left:0;opacity:0';
  document.body.appendChild(ta);
  ta.focus(); ta.select();
  try { document.execCommand('copy'); done(); }
  catch(e){ toast('复制失败，请长按手动复制：' + text, 'err'); }
  document.body.removeChild(ta);
}

/* ---------- 状态 ---------- */
var state = {
  step: 1,
  industry: '', format: '', brand: '', scale: '单店', revenue: '', channels: [],
  membernow: '无会员制',
  avgTicket: '', freq: '3', margin: '', products: [{name:'',type:'服务',price:'',margin:''},{name:'',type:'商品',price:'',margin:''}],
  goals: [], budget: '3000', team: '8',
  coeffs: { storedMult: 5, tierMode: 1, discount: 0.85, pointsEarn: 10, pointsBurn: 10, levels: 3,
            levelMult: 'a', memValid: 1, ptsValid: 1, trialDays: 7, subFeeMult: 0.5, testSize: 100, testPeriod: 1, promoRate: 5 },
  customMult: 5
};
var plan = null;

function saveState(){
  try { localStorage.setItem(STORE_KEY, JSON.stringify(state)); } catch(e){}
}
function loadState(){
  try {
    var raw = localStorage.getItem(STORE_KEY);
    if (!raw) return;
    var d = JSON.parse(raw);
    for (var k in d) { if (k === 'coeffs') { for (var c in d.coeffs) state.coeffs[c] = d.coeffs[c]; } else { state[k] = d[k]; } }
  } catch(e){}
}
function isUnlocked(){ try { return sessionStorage.getItem(UNLOCK_KEY) === '1'; } catch(e){ return false; } }
function setUnlocked(){ try { sessionStorage.setItem(UNLOCK_KEY, '1'); } catch(e){} }

/* ---------- 视图切换 ---------- */
function showView(name){
  ['landing','form','result'].forEach(function(v){
    $('view-' + v).classList.toggle('hidden', v !== name);
  });
  window.scrollTo(0, 0);
}
function openModal(id){ $(id).classList.remove('hidden'); document.body.style.overflow = 'hidden'; }
function closeModal(id){ $(id).classList.add('hidden'); document.body.style.overflow = ''; }

/* ---------- 新手引导 ---------- */
var guideIdx = 1;
var GUIDE_STEPS = [
  { title:'Step 1 · 填写门店信息', desc:'依次填写行业、客单价、毛利率等基础数据，再选择每个策略的推荐系数，约3分钟完成。', ill:'ill1' },
  { title:'Step 2 · 解锁专属方案', desc:'点击"立即生成方案"，添加顾问微信获取6位解锁码，输入后一键开启专属方案。', ill:'ill2' },
  { title:'Step 3 · 下载落地报告', desc:'方案书、SOP手册、评估工具包三大文件一键下载，附带两本秘籍与实战交流群。', ill:'ill3' }
];
function illSVG(id){
  if (id === 'ill1') return '<svg viewBox="0 0 150 150" class="g-ill"><rect x="38" y="12" width="74" height="126" rx="10" fill="#FFFFFF" stroke="#103050" stroke-width="3"/><rect x="60" y="126" width="30" height="6" rx="3" fill="#D9DEE5"/><rect x="48" y="24" width="54" height="8" rx="4" fill="#E8A33D"/><rect x="48" y="42" width="40" height="7" rx="3.5" fill="#E3E8EE"/><rect x="48" y="58" width="46" height="7" rx="3.5" fill="#E3E8EE"/><rect x="48" y="74" width="30" height="7" rx="3.5" fill="#E3E8EE"/><circle cx="101" cy="42" r="7" fill="#DF7739"/><path d="M98 42l2.5 2.5L105 39" stroke="#fff" stroke-width="1.6" fill="none"/><rect x="48" y="96" width="54" height="14" rx="7" fill="#103050"/></svg>';
  if (id === 'ill2') return '<svg viewBox="0 0 150 150" class="g-ill"><rect x="28" y="58" width="94" height="70" rx="8" fill="#E8A33D"/><rect x="28" y="58" width="94" height="26" rx="8" fill="#F2C26B"/><path d="M75 58v70" stroke="#B9772A" stroke-width="5"/><circle cx="75" cy="42" r="18" fill="#DF7739"/><path d="M57 42c-8-4-16 2-16 10s8 8 16 4M93 42c8-4 16 2 16 10s-8 8-16 4" stroke="#DF7739" stroke-width="6" fill="none"/><rect x="46" y="70" width="22" height="42" rx="4" fill="#103050"/><rect x="82" y="70" width="22" height="42" rx="4" fill="#103050"/><circle cx="75" cy="93" r="8" fill="#F2C26B"/><path d="M72 93l2.5 2.5L79 90" stroke="#7A5B1E" stroke-width="2" fill="none"/></svg>';
  return '<svg viewBox="0 0 150 150" class="g-ill"><rect x="42" y="14" width="66" height="92" rx="6" fill="#FFFFFF" stroke="#103050" stroke-width="3"/><rect x="52" y="26" width="30" height="6" rx="3" fill="#E8A33D"/><rect x="52" y="40" width="46" height="5" rx="2.5" fill="#E3E8EE"/><rect x="52" y="52" width="46" height="5" rx="2.5" fill="#E3E8EE"/><rect x="52" y="64" width="46" height="5" rx="2.5" fill="#E3E8EE"/><rect x="52" y="76" width="30" height="5" rx="2.5" fill="#E3E8EE"/><path d="M75 112v18" stroke="#103050" stroke-width="5" stroke-linecap="round"/><path d="M62 122l13 13 13-13" stroke="#DF7739" stroke-width="5" fill="none" stroke-linecap="round" stroke-linejoin="round"/><rect x="46" y="136" width="58" height="8" rx="4" fill="#E8A33D"/></svg>';
}
function renderGuide(){
  var s = GUIDE_STEPS[guideIdx - 1];
  $('guide-stage').innerHTML = illSVG(s.ill) + '<h3>' + s.title + '</h3><p>' + s.desc + '</p>';
  var nodes = document.querySelectorAll('#guide-steps .gstep');
  for (var i = 0; i < nodes.length; i++) {
    nodes[i].classList.toggle('active', i === guideIdx - 1);
    nodes[i].classList.toggle('done', i < guideIdx - 1);
  }
  $('guide-prev').disabled = guideIdx === 1;
  $('guide-next').textContent = guideIdx === 3 ? '完成' : '下一步';
}
function openGuide(){
  guideIdx = 1;
  renderGuide();
  openModal('guide-modal');
}
['guide-close','guide-modal'].forEach(function(id){
  var el = $('guide-modal');
  if (id === 'guide-close') $('guide-close').addEventListener('click', function(){ closeModal('guide-modal'); });
});
$('guide-modal').addEventListener('click', function(e){ if (e.target === this) closeModal('guide-modal'); });
$('guide-prev').addEventListener('click', function(){ if (guideIdx > 1) { guideIdx--; renderGuide(); } });
$('guide-next').addEventListener('click', function(){ if (guideIdx < 3) { guideIdx++; renderGuide(); } else { closeModal('guide-modal'); } });

/* ---------- 系数配置 ---------- */
function coeffVal(key){
  var s = state.coeffs[key];
  if (key === 'storedMult' && s === 'custom') return state.customMult;
  return s;
}
var COEFFS = [
  { key:'storedMult', group:'储值与定价', title:'储值门槛系数', baseLabel:'平均客单价', baseKey:'avgTicket', baseUnit:'元',
    opts:[{v:3,l:'3倍'},{v:5,l:'5倍',rec:true},{v:8,l:'8倍'},{v:12,l:'12倍'},{v:'custom',l:'自定义'}],
    tip:'推荐5倍：兼顾顾客接受度与门店现金流，适合大多数餐饮/美业门店',
    preview:function(){
      var b = parseFloat(state.avgTicket) || 0;
      var v = coeffVal('storedMult');
      return '<strong>' + money(b) + ' × ' + (v === 'custom' ? state.customMult : v) + ' = ' + money(b * v) + ' 元</strong> 储值门槛金额';
    } },
  { key:'tierMode', group:'储值与定价', title:'储值档位', baseLabel:'标准储值门槛', baseKey:'_threshold', baseUnit:'元',
    opts:[{v:0.6,l:'保守 0.6倍'},{v:1,l:'标准 1.0倍',rec:true},{v:2,l:'激进 2.0倍'}],
    tip:'推荐标准档：数据最均衡，便于小范围测试后微调',
    preview:function(){
      var t = derived().storedThreshold;
      return '三档储值：<strong>保守 ' + money(t*0.6) + ' 元</strong> · <strong>标准 ' + money(t) + ' 元</strong> · <strong>激进 ' + money(t*2) + ' 元</strong>（预估转化率 35% / 28% / 18%）';
    } },
  { key:'discount', group:'储值与定价', title:'会员折扣力度', baseLabel:'综合毛利率', baseKey:'margin', baseUnit:'%',
    opts:[{v:0.8,l:'8折'},{v:0.85,l:'8.5折',rec:true},{v:0.9,l:'9折'},{v:0.95,l:'9.5折'},{v:null,l:'不设折扣'}],
    tip:'推荐8.5折：让利不超毛利率一半，兼顾吸引力与利润',
    preview:function(){
      var m = parseFloat(state.margin) || 0;
      var v = state.coeffs.discount;
      var html = '';
      if (v == null) { html = '不设折扣，改用<strong>特权 + 赠品</strong>拉开价值（毛利率不足30%时推荐此方案）'; }
      else {
        var allow = m * 0.5;
        var loss = (1 - v) * 100;
        html = '让利约 <strong>' + loss.toFixed(1) + ' 个点</strong>，未超过毛利率一半（' + allow.toFixed(1) + '%）';
        if (m > 0 && loss > allow) html += '<div class="pv-warn">⚠ 让利已超过毛利率一半，建议降低折扣或改用特权+赠品</div>';
      }
      return html;
    } },
  { key:'pointsEarn', group:'积分体系', title:'积分兑换比例', baseLabel:'—', baseKey:'', baseUnit:'',
    opts:[{v:5,l:'5元=1积分'},{v:10,l:'10元=1积分',rec:true},{v:20,l:'20元=1积分'}],
    tip:'推荐10元=1积分：约等于1%返利，书中默认黄金比例',
    preview:function(){
      var v = state.coeffs.pointsEarn;
      return '返利力度 ≈ <strong>' + (100/v).toFixed(1) + '%</strong>（消费' + v + '元得1积分）';
    } },
  { key:'pointsBurn', group:'积分体系', title:'积分抵扣比例', baseLabel:'—', baseKey:'', baseUnit:'',
    opts:[{v:5,l:'5积分=1元'},{v:10,l:'10积分=1元',rec:true},{v:20,l:'20积分=1元'}],
    tip:'推荐10积分=1元：与兑换比例对称，避免通胀失衡',
    preview:function(){
      var v = state.coeffs.pointsBurn;
      return '抵扣力度：<strong>' + v + ' 积分抵 1 元</strong>，约等于' + (100/v).toFixed(1) + '%消费抵扣';
    } },
  { key:'levels', group:'体系结构', title:'会员层级数量', baseLabel:'—', baseKey:'', baseUnit:'',
    opts:[{v:3,l:'3级',rec:true},{v:4,l:'4级'},{v:5,l:'5级'}],
    tip:'推荐3级：书中"三生万物"原则，层级过多管理成本高',
    preview:function(){
      var n = state.coeffs.levels;
      var names = {3:'铜卡 / 银卡 / 金卡',4:'铜卡 / 银卡 / 金卡 / 白金卡',5:'铜卡 / 银卡 / 金卡 / 白金卡 / 黑金卡'};
      return '自动生成层级：<strong>' + names[n] + '</strong>';
    } },
  { key:'levelMult', group:'体系结构', title:'层级积分倍率', baseLabel:'—', baseKey:'', baseUnit:'',
    opts:[{v:'a',l:'银1.0/金1.2/白金1.5',rec:true},{v:'b',l:'银1.0/金1.5/白金2.0'}],
    tip:'推荐1.0/1.2/1.5：落差适中，高等级尊享感明显',
    preview:function(){
      var v = state.coeffs.levelMult;
      return '高等级积分加速：<strong>' + (v === 'a' ? '金卡1.2倍 · 白金卡1.5倍' : '金卡1.5倍 · 白金卡2.0倍') + '</strong>';
    } },
  { key:'memValid', group:'体系结构', title:'会员有效期', baseLabel:'—', baseKey:'', baseUnit:'',
    opts:[{v:1,l:'1年',rec:true},{v:2,l:'2年'},{v:0,l:'永久'}],
    tip:'推荐1年：书中建议基准，到期可续费激活二次营销',
    preview:function(){
      var v = state.coeffs.memValid;
      return '会员身份有效期：<strong>' + (v === 0 ? '永久' : v + '年') + '</strong>';
    } },
  { key:'ptsValid', group:'体系结构', title:'积分有效期', baseLabel:'—', baseKey:'', baseUnit:'',
    opts:[{v:1,l:'1年',rec:true},{v:2,l:'2年'},{v:0,l:'永久'}],
    tip:'推荐1年：督促客户持续消费，避免积分沉淀',
    preview:function(){
      var v = state.coeffs.ptsValid;
      return '积分有效期：<strong>' + (v === 0 ? '永久' : v + '年') + '</strong>';
    } },
  { key:'trialDays', group:'体系结构', title:'犹豫期（零风险承诺）', baseLabel:'—', baseKey:'', baseUnit:'',
    opts:[{v:7,l:'7天',rec:true},{v:15,l:'15天'},{v:30,l:'30天'}],
    tip:'推荐7天：足够建立信任，又不会造成过度退款',
    preview:function(){
      return '零风险承诺：<strong>' + state.coeffs.trialDays + ' 天无理由退款</strong>（写在话术与宣传物料中）';
    } },
  { key:'subFeeMult', group:'储值与定价', title:'订阅会费系数（如走订阅式）', baseLabel:'月均消费额', baseKey:'_monthly', baseUnit:'元',
    opts:[{v:0.3,l:'×0.3'},{v:0.5,l:'×0.5',rec:true},{v:0.8,l:'×0.8'},{v:'custom',l:'自定义'}],
    tip:'推荐0.5倍：会费约占月消费额一半，性价比感知最强',
    preview:function(){
      var d = derived();
      return '月消费额 <strong>' + money(d.monthlySpend) + ' 元</strong> × ' + (state.coeffs.subFeeMult === 'custom' ? '自定义' : state.coeffs.subFeeMult) + ' = 建议会费 <strong>' + money(d.subFee) + ' 元</strong>（如 99-299 元区间可再手动调整）';
    } },
  { key:'testSize', group:'测试与推广', title:'测试规模', baseLabel:'—', baseKey:'', baseUnit:'',
    opts:[{v:50,l:'50人'},{v:100,l:'100人',rec:true},{v:200,l:'200人'}],
    tip:'推荐100人：样本量足够验证模型，成本可控',
    preview:function(){ return '首轮内测规模：<strong>' + state.coeffs.testSize + ' 名目标客户</strong>'; } },
  { key:'testPeriod', group:'测试与推广', title:'测试周期', baseLabel:'—', baseKey:'', baseUnit:'',
    opts:[{v:0.5,l:'2周'},{v:1,l:'1个月',rec:true},{v:3,l:'3个月'}],
    tip:'推荐1个月：覆盖完整消费周期，数据更有说服力',
    preview:function(){ return '测试周期：<strong>' + (state.coeffs.testPeriod >= 1 ? state.coeffs.testPeriod + ' 个月' : '2 周') + '</strong>'; } },
  { key:'promoRate', group:'测试与推广', title:'推广预算比例', baseLabel:'月营业额', baseKey:'revenue', baseUnit:'元',
    opts:[{v:3,l:'3%'},{v:5,l:'5%',rec:true},{v:10,l:'10%'}],
    tip:'推荐5%：常规营销预算占比，既有效果又不伤现金流',
    preview:function(){
      var d = derived();
      return '月营业额 <strong>' + money(d.revenue) + ' 元</strong> × ' + state.coeffs.promoRate + '% = 每月推广预算 <strong>' + money(d.promoBudget) + ' 元</strong>';
    } }
];

function derived(){
  var ticket = parseFloat(state.avgTicket) || 0;
  var margin = parseFloat(state.margin) || 0;
  var freq = parseFloat(state.freq) || 1;
  var revenue = parseFloat(state.revenue) || 0;
  var sm = state.coeffs.storedMult;
  if (sm === 'custom') sm = state.customMult || 1;
  var threshold = round(ticket * sm);
  var subMult = state.coeffs.subFeeMult;
  if (subMult === 'custom') subMult = 0.5;
  return {
    avgTicket: ticket, margin: margin, freq: freq, revenue: revenue,
    monthlySpend: round(ticket * freq),
    storedThreshold: threshold,
    subFee: round(ticket * freq * subMult),
    promoBudget: round(revenue * (state.coeffs.promoRate / 100)),
    monthlyOrders: revenue > 0 && ticket > 0 ? round(revenue / ticket) : 0
  };
}

function renderCoeffs(){
  var wrap = $('coeff-list');
  var html = '';
  var groups = ['储值与定价','积分体系','体系结构','测试与推广'];
  groups.forEach(function(g){
    var items = COEFFS.filter(function(c){ return c.group === g; });
    if (!items.length) return;
    html += '<div class="card" style="padding:18px"><h2 class="card-title">' + g + '</h2>';
    items.forEach(function(c){
      html += '<div class="coeff-card" data-key="' + c.key + '">';
      html += '<div class="coeff-head"><span class="coeff-title">' + c.title + '</span><button type="button" class="tip-btn" data-tip="' + c.key + '">?</button></div>';
      html += '<div class="coeff-base">基础值：' + c.baseLabel + '（' + c.baseUnit + '）</div>';
      html += '<div class="tip-box" id="tip-' + c.key + '">' + c.tip + '</div>';
      html += '<div class="coeff-opts">';
      c.opts.forEach(function(o){
        var sel = state.coeffs[c.key] === o.v;
        var on = c.key === 'storedMult' && o.v === 'custom' && state.coeffs.storedMult === 'custom' ? ' on' : (sel ? ' on' : '');
        var rec = o.rec ? '<span class="rec-badge">推荐</span>' : '';
        var lab = o.l + (o.rec ? ' 🌟' : '');
        html += '<button type="button" class="coeff-opt' + on + '" data-key="' + c.key + '" data-v="' + o.v + '">' + lab + rec + '</button>';
      });
      html += '</div>';
      html += '<div class="coeff-custom hidden" id="custom-' + c.key + '">自定义系数：<input type="number" id="custom-input-' + c.key + '" min="0.5" max="50" step="0.5" value="' + state.customMult + '"><span>倍</span></div>';
      html += '<div class="coeff-preview" id="pv-' + c.key + '"></div>';
      html += '</div>';
    });
    html += '</div>';
  });
  wrap.innerHTML = html;

  wrap.querySelectorAll('.coeff-opt').forEach(function(btn){
    btn.addEventListener('click', function(){
      var key = btn.dataset.key;
      var v = btn.dataset.v;
      if (v === 'null') v = null;
      if (v === 'custom') v = 'custom';
      else if (!isNaN(parseFloat(v)) && v !== '') v = parseFloat(v);
      state.coeffs[key] = v;
      $('custom-' + key).classList.toggle('hidden', v !== 'custom');
      refreshCoeffs();
      saveState();
    });
  });
  wrap.querySelectorAll('.tip-btn').forEach(function(btn){
    btn.addEventListener('click', function(){
      $('tip-' + btn.dataset.tip).classList.toggle('show');
    });
  });
  ['storedMult','subFeeMult'].forEach(function(key){
    var inp = $('custom-input-' + key);
    if (!inp) return;
    inp.addEventListener('input', function(){
      var v = parseFloat(inp.value);
      if (v > 0) { state.customMult = v; refreshCoeffs(); saveState(); }
    });
  });
  refreshCoeffs();
}
function refreshCoeffs(){
  COEFFS.forEach(function(c){
    var pv = $('pv-' + c.key);
    if (pv) pv.innerHTML = c.preview();
  });
  document.querySelectorAll('.coeff-opt').forEach(function(btn){
    var key = btn.dataset.key;
    var v = btn.dataset.v;
    if (v === 'null') v = null;
    if (v === 'custom') v = 'custom';
    else if (!isNaN(parseFloat(v)) && v !== '') v = parseFloat(v);
    var on = state.coeffs[key] === v;
    if (key === 'storedMult' && v === 'custom') on = state.coeffs.storedMult === 'custom';
    btn.classList.toggle('on', on);
  });
}

/* ---------- 表单渲染与交互 ---------- */
function renderProducts(){
  var wrap = $('prod-list');
  wrap.innerHTML = state.products.map(function(p, i){
    return '<div class="prod-row">' +
      '<input type="text" placeholder="产品/服务名称" value="' + esc(p.name) + '" data-idx="' + i + '" data-f="name">' +
      '<select data-idx="' + i + '" data-f="type">' +
        '<option value="服务"' + (p.type === '服务' ? ' selected' : '') + '>服务</option>' +
        '<option value="商品"' + (p.type === '商品' ? ' selected' : '') + '>商品</option>' +
      '</select>' +
      '<input type="number" placeholder="价格" value="' + esc(p.price) + '" data-idx="' + i + '" data-f="price">' +
      '<input type="number" placeholder="毛利率%" value="' + esc(p.margin) + '" data-idx="' + i + '" data-f="margin">' +
      '<button type="button" class="prod-del" data-idx="' + i + '">×</button>' +
    '</div>';
  }).join('');
  wrap.querySelectorAll('input[data-f],select[data-f]').forEach(function(el){
    el.addEventListener('input', function(){
      state.products[el.dataset.idx][el.dataset.f] = el.value;
      saveState();
    });
  });
  wrap.querySelectorAll('.prod-del').forEach(function(btn){
    btn.addEventListener('click', function(){
      if (state.products.length <= 1) { toast('至少保留一行', 'err'); return; }
      state.products.splice(+btn.dataset.idx, 1);
      renderProducts(); saveState();
    });
  });
}
function bindChips(containerId, target, multi){
  var wrap = $(containerId);
  wrap.querySelectorAll('.chip').forEach(function(chip){
    chip.addEventListener('click', function(){
      var v = chip.dataset.v;
      if (multi) {
        var arr = state[target];
        var i = arr.indexOf(v);
        if (i >= 0) arr.splice(i, 1); else arr.push(v);
        chip.classList.toggle('on', arr.indexOf(v) >= 0);
      } else {
        state[target] = v;
        wrap.querySelectorAll('.chip').forEach(function(c){ c.classList.toggle('on', c.dataset.v === v); });
      }
      saveState();
    });
  });
}
function syncForm(){
  ['f-industry','f-format','f-brand','f-revenue','f-membernow','f-avgticket','f-freq','f-margin','f-budget','f-team'].forEach(function(id){
    var el = $(id);
    if (!el) return;
    var key = id.slice(2);
    if (id === 'f-avgticket') key = 'avgTicket';
    if (id === 'f-margin') key = 'margin';
    if (el.value === '' && state[key] !== '' && state[key] != null) el.value = state[key];
    else if (state[key] !== undefined && state[key] !== null) el.value = state[key];
  });
  $('f-scale').querySelectorAll('.chip').forEach(function(c){ c.classList.toggle('on', c.dataset.v === state.scale); });
  $('f-channels').querySelectorAll('.chip').forEach(function(c){ c.classList.toggle('on', state.channels.indexOf(c.dataset.v) >= 0); });
  $('f-goals').querySelectorAll('.chip').forEach(function(c){ c.classList.toggle('on', state.goals.indexOf(c.dataset.v) >= 0); });
  renderProducts();
}
function bindFormInputs(){
  ['f-industry','f-format','f-brand','f-revenue','f-membernow','f-freq','f-budget','f-team'].forEach(function(id){
    var el = $(id);
    var key = id.slice(2);
    el.addEventListener('change', function(){ state[key] = el.value; saveState(); renderSummary(); });
  });
  ['f-avgticket','f-margin'].forEach(function(id){
    var el = $(id);
    var key = id === 'f-avgticket' ? 'avgTicket' : 'margin';
    el.addEventListener('input', function(){ state[key] = el.value; saveState(); refreshCoeffs(); renderSummary(); });
  });
  bindChips('f-scale', 'scale', false);
  bindChips('f-channels', 'channels', true);
  bindChips('f-goals', 'goals', true);
}
function goStep(n){
  state.step = n;
  var nodes = document.querySelectorAll('#steps-bar .step-node');
  var lines = document.querySelectorAll('#steps-bar .step-line');
  for (var i = 0; i < nodes.length; i++) {
    var idx = +nodes[i].dataset.step;
    nodes[i].classList.toggle('active', idx === n);
    nodes[i].classList.toggle('done', idx < n);
  }
  for (var j = 0; j < lines.length; j++) lines[j].classList.toggle('done', j < n - 1);
  for (var k = 1; k <= 4; k++) $('step-' + k).classList.toggle('active', k === n);
  if (n === 3) renderCoeffs();
  if (n === 4) renderSummary();
  window.scrollTo(0, 0);
}
function validateStep(step){
  if (step === 1) {
    if (!state.industry) { toast('请先选择行业大类', 'err'); return false; }
  }
  if (step === 2) {
    var t = parseFloat(state.avgTicket), m = parseFloat(state.margin);
    if (!(t > 0)) { toast('请填写平均客单价', 'err'); return false; }
    if (!(m > 0)) { toast('请填写综合毛利率', 'err'); return false; }
    if (m >= 100) { toast('毛利率需小于100%', 'err'); return false; }
  }
  return true;
}
function renderSummary(){
  var d = derived();
  var discountDesc = state.coeffs.discount == null ? '不设折扣' : (state.coeffs.discount * 10) + '折';
  var html = '';
  html += '<div class="sp-row"><span class="sp-k">行业 / 业态</span><span class="sp-v">' + esc(state.industry || '—') + ' · ' + esc(state.format || '—') + '</span></div>';
  html += '<div class="sp-row"><span class="sp-k">平均客单价</span><span class="sp-v">' + (d.avgTicket ? money(d.avgTicket) + ' 元' : '—') + '</span></div>';
  html += '<div class="sp-row"><span class="sp-k">储值门槛</span><span class="sp-v gold">' + (d.storedThreshold ? money(d.storedThreshold) + ' 元' : '—') + '</span></div>';
  html += '<div class="sp-row"><span class="sp-k">折扣力度</span><span class="sp-v">' + discountDesc + '</span></div>';
  html += '<div class="sp-row"><span class="sp-k">会员层级</span><span class="sp-v">' + state.coeffs.levels + ' 级</span></div>';
  html += '<div class="sp-row"><span class="sp-k">积分规则</span><span class="sp-v">' + state.coeffs.pointsEarn + '元=1积分 · ' + state.coeffs.pointsBurn + '积分=1元</span></div>';
  html += '<div class="sp-row"><span class="sp-k">每月推广预算</span><span class="sp-v gold">' + (d.promoBudget ? money(d.promoBudget) + ' 元' : '—') + '</span></div>';
  $('summary-preview').innerHTML = html;
}

/* ---------- 规则引擎 ---------- */
function amountLevel(t){ return t >= 500 ? 'high' : (t >= 100 ? 'mid' : 'low'); }
function freqLevel(f){ return f >= 4 ? 'high' : (f >= 1 ? 'mid' : 'low'); }
function matchType(amt, fq){
  var map = {
    'high_high':['圈层式','臻选圈层卡','高金额高频次，值得用圈层式锁定最优质客户'],
    'high_mid':['储值式','高端储值卡','高客单价、消费稳定，储值可锁定大额现金流'],
    'high_low':['圈层式','圈层会员卡','高客单价低频次，适合筛选式圈层运营'],
    'mid_high':['储值式','标准储值卡','中客单高频次，储值是最主流的锁客方式'],
    'mid_mid':['储值式','标准储值卡','最主流、最容易见效的会员类型'],
    'mid_low':['储值式','轻储值卡','中等金额低频次，小额储值降低门槛'],
    'low_high':['订阅式','月卡/季卡','高频次刚需消费，适合周期性收费'],
    'low_mid':['积分式','积分会员卡','低门槛引流，为转化铺垫'],
    'low_low':['积分式','积分引流卡','低门槛引流，先做大客户基数']
  };
  return map[amt + '_' + fq] || ['积分式','积分引流卡','低门槛引流，先做大客户基数'];
}
function buildProfiles(){
  var d = derived();
  var t = d.avgTicket, f = d.freq, m = d.margin;
  var prods = state.products.filter(function(p){ return p.name; });
  var maxP = null;
  prods.forEach(function(p){ var pr = parseFloat(p.price) || 0; if (!maxP || pr > maxP.price) maxP = {name:p.name, price:pr}; });
  var list = [];
  if (f >= 4) list.push({ tag:'核心高频客', title:'高频复购客', desc:'每周到店多次，价格敏感度适中，适合用储值卡 + 积分锁定全年消费。' });
  else list.push({ tag:'稳定常客', title:'稳定消费客', desc:'每月规律消费，是储值方案的主力人群，客单价约 ' + money(t) + ' 元。' });
  if (maxP) list.push({ tag:'高价值客', title:'大额消费客', desc:'偏好' + esc(maxP.name) + '（' + money(maxP.price) + '元档），适合高等级储值 / 圈层卡尊享服务。' });
  else list.push({ tag:'高价值客', title:'大额消费客', desc:'预算充足、追求体验，适合高等级储值与专属特权。' });
  list.push({ tag:'引流新客', title:'价格敏感新客', desc:'首次到店、犹豫期长，用积分式 + 首充赠品完成转化。' });
  return list;
}
function buildSeven(d, type){
  var sm = state.coeffs.storedMult;
  var smLabel = sm === 'custom' ? '自定义' : sm + '倍';
  var disc = state.coeffs.discount;
  var discLabel = disc == null ? '不设折扣（特权+赠品）' : (disc * 10) + '折';
  var discWhy = disc == null ? '毛利率较低，避免让利侵蚀利润' : '让利不超过毛利率一半';
  var levelNames = {3:'铜卡/银卡/金卡',4:'铜卡/银卡/金卡/白金卡',5:'铜卡/银卡/金卡/白金卡/黑金卡'};
  var brand = state.brand || state.format || '门店';
  var names = [brand + '·' + type[1], brand + '会员卡', '臻选' + type[0] + '卡'];
  return [
    ['名称', '会员卡名称', names.join(' / '), '褒义词强化身份感，概括品牌特征'],
    ['权益', '折扣 + 特权 + 赠品', discLabel, discWhy],
    ['条件', '储值门槛 / 入会条件', money(d.storedThreshold) + ' 元（客单价×' + smLabel + '）', '黄金比例 3:1~5:1'],
    ['层级', '会员层级', levelNames[state.coeffs.levels], '三生万物原则，用赠品与特权拉开差距'],
    ['积分', '积分规则', state.coeffs.pointsEarn + '元=1积分 · ' + state.coeffs.pointsBurn + '积分=1元', '约1%返利，防止积分通胀'],
    ['时效', '有效期与犹豫期', (state.coeffs.memValid === 0 ? '永久' : state.coeffs.memValid + '年') + ' · 犹豫期' + state.coeffs.trialDays + '天', '零风险承诺提升成交率'],
    ['推广', '成交主张 + 话术 + 物料', '3阶段推广（测试→优化→放大）', '好处→主张→解顾虑三步话术']
  ];
}
function buildFinance(d, type){
  var t = d.storedThreshold;
  var orders = d.monthlyOrders || 100;
  var rows = [
    { name:'保守档', amt: round(t * 0.6), rate: 0.35 },
    { name:'标准档（推荐）', amt: round(t), rate: 0.28 },
    { name:'激进档', amt: round(t * 2), rate: 0.18 }
  ];
  rows.forEach(function(r){ r.members = round(orders * r.rate); r.cash = r.members * r.amt; });
  return rows;
}

/* ---------- 生成方案 ---------- */
function buildPlan(){
  var d = derived();
  var type = matchType(amountLevel(d.avgTicket), freqLevel(d.freq));
  return {
    d: d, type: type, profiles: buildProfiles(),
    seven: buildSeven(d, type),
    finance: buildFinance(d, type),
    brand: state.brand || state.format || '您的门店',
    industry: state.industry,
    discountLabel: state.coeffs.discount == null ? '不设折扣' : (state.coeffs.discount * 10) + '折',
    gift: Math.max(5, round(d.storedThreshold * 0.136)),
    testSize: state.coeffs.testSize, testPeriod: state.coeffs.testPeriod,
    promoBudget: d.promoBudget
  };
}
function generatePlan(){
  if (!validateStep(1)) { goStep(1); return; }
  if (!validateStep(2)) { goStep(2); return; }
  plan = buildPlan();
  renderResult();
  showView('result');
}

/* ---------- 结果页渲染 ---------- */
function renderResult(){
  var p = plan;
  $('result-brand-line').textContent = '为「' + p.brand + '」定制的会员运营方案 · 行业：' + p.industry + ' · 已按推荐系数生成';
  var html = '';

  html += '<h2 class="sec-title">方案摘要</h2><div class="card"><div class="kv-grid">';
  html += '<div class="kv-item"><div class="k">推荐会员类型</div><div class="v gold">' + p.type[0] + ' · ' + p.type[1] + '</div></div>';
  html += '<div class="kv-item"><div class="k">储值门槛</div><div class="v">' + money(p.d.storedThreshold) + ' 元</div></div>';
  html += '<div class="kv-item"><div class="k">折扣力度</div><div class="v">' + p.discountLabel + '</div></div>';
  html += '<div class="kv-item"><div class="k">会员层级</div><div class="v">' + state.coeffs.levels + ' 级</div></div>';
  html += '<div class="kv-item"><div class="k">积分规则</div><div class="v">' + state.coeffs.pointsEarn + '元=1积分 / ' + state.coeffs.pointsBurn + '积分=1元</div></div>';
  html += '<div class="kv-item"><div class="k">每月推广预算</div><div class="v">' + money(p.promoBudget) + ' 元</div></div>';
  html += '</div><p style="font-size:13px;color:#5B6B7A;margin-top:12px">推荐理由：' + p.type[2] + '。</p></div>';

  html += '<h2 class="sec-title">客户画像</h2><div class="card"><div class="profile-cards">';
  p.profiles.forEach(function(pr){
    html += '<div class="pcard"><span class="p-tag">' + pr.tag + '</span><div class="p-title">' + pr.title + '</div><div class="p-desc">' + pr.desc + '</div></div>';
  });
  html += '</div></div>';

  html += '<h2 class="sec-title">会员方案七要素</h2><div class="card"><div style="overflow-x:auto"><table class="tbl"><thead><tr><th style="width:56px">要素</th><th>配置</th><th>推荐值</th><th>设置理由</th></tr></thead><tbody>';
  p.seven.forEach(function(r){ html += '<tr><td>' + r[0] + '</td><td>' + r[1] + '</td><td class="hl">' + r[2] + '</td><td>' + r[3] + '</td></tr>'; });
  html += '</tbody></table></div></div>';

  html += '<h2 class="sec-title">储值方案与财务测算</h2><div class="card"><div style="overflow-x:auto"><table class="tbl"><thead><tr><th>档位</th><th>储值金额</th><th>预估转化率</th><th>首月新增会员</th><th>预计带动现金流</th></tr></thead><tbody>';
  p.finance.forEach(function(r){
    html += '<tr><td>' + r.name + '</td><td class="hl">' + money(r.amt) + ' 元</td><td>' + Math.round(r.rate * 100) + '%</td><td>' + money(r.members) + ' 人</td><td>' + money(r.cash) + ' 元</td></tr>';
  });
  html += '</tbody></table></div><p style="font-size:12.5px;color:#8A97A5;margin-top:10px">测算口径：按月营业额 ' + money(p.d.revenue) + ' 元 ÷ 客单价 ' + money(p.d.avgTicket) + ' 元 ≈ 月 ' + money(p.d.monthlyOrders) + ' 笔有效订单估算。</p></div>';

  html += '<h2 class="sec-title">方案一句话总结</h2><div class="card"><p style="font-size:14.5px;color:#103050;font-weight:600">以「' + (p.type[0] === '积分式' ? '积分卡做大基数' : p.type[0] === '订阅式' ? '订阅卡锁定高频消费' : p.type[0] === '圈层式' ? '圈层卡锁定高价值客户' : '储值卡锁定现金流') + '」为核心，把门店的头回客变成回头客。</p></div>';

  $('result-content').innerHTML = html;
}

/* ---------- 解锁弹窗 ---------- */
function openUnlock(){
  openModal('unlock-modal');
  $('unlock-pwd').value = '';
  $('pwd-error').textContent = '';
}
$('unlock-close').addEventListener('click', function(){ closeModal('unlock-modal'); });
$('unlock-modal').addEventListener('click', function(e){ if (e.target === this) closeModal('unlock-modal'); });
$('unlock-copy-wechat').addEventListener('click', function(){ copyText(WECHAT_ID, '微信号已复制，去微信搜索即可添加'); });
$('unlock-confirm').addEventListener('click', function(){
  var v = $('unlock-pwd').value.trim();
  if (!/^\d{6}$/.test(v)) { $('pwd-error').textContent = '请输入6位纯数字密码'; return; }
  setUnlocked();
  closeModal('unlock-modal');
  toast('🎉 解锁成功，正在生成您的专属方案…', 'ok');
  setTimeout(function(){ generatePlan(); }, 350);
});
$('unlock-pwd').addEventListener('input', function(){
  this.value = this.value.replace(/\D/g, '').slice(0, 6);
  $('pwd-error').textContent = '';
});

/* ---------- 下载 ---------- */
function bindSamples(){
  document.querySelectorAll('.dl-sample').forEach(function(btn){
    btn.addEventListener('click', function(){
      var a = document.createElement('a');
      a.href = 'assets/' + btn.dataset.file;
      a.download = btn.dataset.name;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      toast('已开始下载：' + btn.dataset.name, 'ok');
    });
  });
}
function fillPdfHeader(title){
  $('pdf-header-title').textContent = title;
}
async function renderReportPdf(kind){
  var cfg = {
    plan: { id:'pdf-report-plan', title:'定制化会员运营方案书', file:'定制化会员运营方案书.pdf', fill:fillPlanReport },
    sop: { id:'pdf-report-sop', title:'店长/员工落地执行SOP手册', file:'店长员工落地执行SOP手册.pdf', fill:fillSopReport },
    kit: { id:'pdf-report-kit', title:'会员运营效果评估工具包', file:'会员运营效果评估工具包.pdf', fill:fillKitReport }
  }[kind];
  if (!(window.jspdf && window.html2canvas)) {
    toast('PDF组件未加载（可能处于离线环境），请使用右侧"模拟下载样例"', 'err');
    return;
  }
  toast('正在生成PDF，请稍候…');
  await new Promise(function(r){ setTimeout(r, 30); });
  var el = document.getElementById(cfg.id);
  cfg.fill(plan, el);
  el.classList.remove('hidden');
  try {
    var canvas = await html2canvas(el, { scale: 2, backgroundColor: '#ffffff', useCORS: true, logging: false,
      width: el.scrollWidth, height: el.scrollHeight, windowWidth: Math.max(el.scrollWidth + 60, 900) });
    fillPdfHeader(cfg.title);
    var hdrEl = document.getElementById('pdf-header-strip');
    var hdrCanvas = await html2canvas(hdrEl, { scale: 1, backgroundColor: '#ffffff', logging: false,
      width: hdrEl.scrollWidth, height: hdrEl.scrollHeight });
    var hdrImg = hdrCanvas.toDataURL('image/jpeg', 0.92);
    var pdf = new window.jspdf.jsPDF('p', 'mm', 'a4');
    var pxPerMm = canvas.width / 210;
    var headerH = 20, footerH = 12, contentH = 297 - headerH - footerH;
    var slicePx = Math.round(contentH * pxPerMm);
    var pages = Math.ceil(canvas.height / slicePx);
    for (var i = 0; i < pages; i++) {
      var y = i * slicePx;
      var h = Math.min(slicePx, canvas.height - y);
      var slice = document.createElement('canvas');
      slice.width = canvas.width; slice.height = h;
      slice.getContext('2d').drawImage(canvas, 0, y, canvas.width, h, 0, 0, canvas.width, h);
      if (i > 0) pdf.addPage();
      pdf.addImage(hdrImg, 'JPEG', 0, 0, 210, headerH);
      pdf.addImage(slice.toDataURL('image/jpeg', 0.92), 'JPEG', 0, headerH, 210, h / pxPerMm);
      pdf.setDrawColor(217, 222, 229); pdf.setLineWidth(0.3);
      pdf.line(10, 297 - 9, 200, 297 - 9);
      pdf.setFontSize(8); pdf.setTextColor(107, 114, 128);
      pdf.text('Page ' + (i + 1) + ' of ' + pages, 105, 297 - 5, { align: 'center' });
    }
    pdf.save(cfg.file);
    toast('PDF已生成并开始下载', 'ok');
  } catch (err) {
    toast('生成PDF失败：' + err.message + '，请使用"模拟下载样例"', 'err');
  }
  el.classList.add('hidden');
}
function bindLivePdf(){
  $('dl-plan-live').addEventListener('click', function(){ renderReportPdf('plan'); });
  $('dl-sop-live').addEventListener('click', function(){ renderReportPdf('sop'); });
  $('dl-kit-live').addEventListener('click', function(){ renderReportPdf('kit'); });
}

/* ---------- 方案书预览 ---------- */
$('btn-preview-plan').addEventListener('click', function(){
  if (!plan) return;
  var el = document.getElementById('pdf-report-plan');
  fillPlanReport(plan, el);
  var scroll = $('report-scroll');
  scroll.innerHTML = '<div class="report-page">' + el.innerHTML + '</div>';
  $('report-modal-title').textContent = '方案书预览（可滑动查看）';
  openModal('report-modal');
});
$('report-close').addEventListener('click', function(){ closeModal('report-modal'); });
$('report-modal').addEventListener('click', function(e){ if (e.target === this) closeModal('report-modal'); });

/* ============ A4 报告内容填充 ============ */
function fmtDate(d){
  var m = d.getMonth() + 1, day = d.getDate();
  return (m < 10 ? '0' : '') + m + '-' + (day < 10 ? '0' : '') + day;
}
function fillPlanReport(p, el){
  var d = p.d;
  var disc = p.discountLabel;
  var levelNames = {3:'铜卡/银卡/金卡',4:'铜卡/银卡/金卡/白金卡',5:'铜卡/银卡/金卡/白金卡/黑金卡'}[state.coeffs.levels];
  var html = '';
  html += '<div class="pdf-cover-title">定制化会员运营方案书</div>';
  html += '<div class="pdf-cover-sub">「留客王」会员运营落地系统 · 为「' + esc(p.brand) + '」定制（' + (new Date().getFullYear()) + '年' + (new Date().getMonth()+1) + '月' + new Date().getDate() + '日 生成）</div>';
  html += '<div class="pdf-cover-line"></div>';
  html += '<div class="pdf-cover-note">本方案由「留客王」会员运营落地系统依据您填写的数据自动生成</div>';
  html += '<h1>一、方案概述</h1>';
  html += '<p>依据您填写的信息（行业：' + esc(state.industry) + '；业态：' + esc(state.format || '—') + '；月营业额：' + money(d.revenue) + '元；平均客单价：' + money(d.avgTicket) + '元；综合毛利率：' + d.margin + '%），系统为您推荐 <strong>' + p.type[0] + '会员制（' + p.type[1] + '）</strong>。' + p.type[2] + '。</p>';
  html += '<h1>二、客户画像分析</h1><table><tr><th>客户类型</th><th>特征</th><th>对应策略</th></tr>';
  p.profiles.forEach(function(pr){ html += '<tr><td>' + pr.tag + '</td><td>' + pr.desc + '</td><td>' + (pr.tag === '价格敏感新客' ? '积分引流' : pr.tag === '高价值客' ? '高等级储值/圈层' : '储值卡+积分') + '</td></tr>'; });
  html += '</table>';
  html += '<h1>三、会员类型推荐</h1><p>综合消费三要素（金额：' + (d.avgTicket >= 500 ? '高' : d.avgTicket >= 100 ? '中' : '低') + '；频次：' + (d.freq >= 4 ? '高' : d.freq >= 1 ? '中' : '低') + '），推荐：<strong>' + p.type[0] + ' · ' + p.type[1] + '</strong>。' + p.type[2] + '。</p>';
  html += '<h1>四、七要素配置明细</h1><table><tr><th>要素</th><th>配置内容</th><th>推荐值</th><th>设置理由</th></tr>';
  p.seven.forEach(function(r){ html += '<tr><td>' + r[0] + '</td><td>' + r[1] + '</td><td>' + r[2] + '</td><td>' + r[3] + '</td></tr>'; });
  html += '</table>';
  html += '<h1>五、储值方案与财务测算</h1><table><tr><th>档位</th><th>储值金额</th><th>预估转化率</th><th>首月新增会员</th><th>预计带动现金流</th></tr>';
  p.finance.forEach(function(r){ html += '<tr><td>' + r.name + '</td><td>' + money(r.amt) + ' 元</td><td>' + Math.round(r.rate*100) + '%</td><td>' + money(r.members) + ' 人</td><td>' + money(r.cash) + ' 元</td></tr>'; });
  html += '</table><p class="report-meta">测算口径：月营业额 ' + money(d.revenue) + ' 元 ÷ 客单价 ' + money(d.avgTicket) + ' 元 ≈ 月 ' + money(d.monthlyOrders) + ' 笔有效订单。储值门槛 = 客单价 × ' + (state.coeffs.storedMult === 'custom' ? state.customMult : state.coeffs.storedMult) + '倍 = ' + money(d.storedThreshold) + ' 元；会员折扣：' + disc + '；会员层级：' + levelNames + '；积分规则：' + state.coeffs.pointsEarn + '元=1积分、' + state.coeffs.pointsBurn + '积分=1元；犹豫期：' + state.coeffs.trialDays + '天无理由退款；会员有效期：' + (state.coeffs.memValid === 0 ? '永久' : state.coeffs.memValid + '年') + '；积分有效期：' + (state.coeffs.ptsValid === 0 ? '永久' : state.coeffs.ptsValid + '年') + '。</p>';
  html += '<h1>六、风险提示与合规建议</h1><p>1. 储值类产品需关注各地单用途预付卡监管要求，建议提前完成备案；2. 折扣让利控制在毛利率一半以内，' + (state.coeffs.discount == null ? '当前方案已采用"不设折扣"策略，以特权+赠品替代。' : '当前折扣' + disc + '已在合规区间。') + '3. 定期监测现金流与兑付率，避免过度承诺。</p>';
  html += '<h1>七、执行排期建议</h1><table><tr><th>阶段</th><th>周期</th><th>核心动作</th><th>验收指标</th></tr>';
  html += '<tr><td>测试期</td><td>第1-' + Math.round(p.testPeriod*4) + '周</td><td>' + p.testSize + '人内测 + 话术打磨</td><td>兴趣比例≥60%</td></tr>';
  html += '<tr><td>优化期</td><td>第' + (Math.round(p.testPeriod*4)+1) + '-' + Math.round(p.testPeriod*8) + '周</td><td>数据复盘 + 权益微调</td><td>成交概率≥25%</td></tr>';
  html += '<tr><td>推广期</td><td>第' + (Math.round(p.testPeriod*8)+1) + '-12周</td><td>全渠道放大</td><td>会员占比≥40%</td></tr>';
  html += '</table>';
  html += '<h1>八、方案一句话总结</h1><p><strong>以「' + (p.type[0] === '积分式' ? '积分卡做大基数' : p.type[0] === '订阅式' ? '订阅卡锁定高频消费' : p.type[0] === '圈层式' ? '圈层卡锁定高价值客户' : '储值卡锁定现金流') + '」为核心，把门店的头回客变成回头客。</strong></p>';
  el.innerHTML = html;
}
function fillSopReport(p, el){
  var d = p.d, t = d.storedThreshold, gift = p.gift;
  var disc = p.discountLabel;
  var html = '';
  html += '<div class="pdf-cover-title">店长 / 员工落地执行 SOP 手册</div>';
  html += '<div class="pdf-cover-sub">「留客王」会员运营落地系统 · 为「' + esc(p.brand) + '」定制</div>';
  html += '<div class="pdf-cover-line"></div>';
  html += '<h1>一、手册使用说明</h1><p>本手册面向店长与一线员工，按「测试 → 优化 → 推广」三阶段拆解动作、话术与考核标准。员工只需照做，无需自行设计策略。</p>';
  html += '<h1>二、测试执行计划</h1><table><tr><th style="width:100px">项目</th><th>内容</th></tr>';
  html += '<tr><td>测试周期</td><td>' + (p.testPeriod >= 1 ? p.testPeriod + '个月' : '2周') + '</td></tr>';
  html += '<tr><td>测试人数</td><td>' + p.testSize + ' 名目标客户</td></tr>';
  html += '<tr><td>物料清单</td><td>海报×2、桌牌×10、菜单标注贴纸、收银台堆头</td></tr>';
  html += '<tr><td>测试范围</td><td>储值卡 + 积分卡</td></tr>';
  html += '<tr><td>负责人员</td><td>店长统筹，全员参与推荐</td></tr></table>';
  html += '<h1>三、销售话术手册</h1><h2>场景1：到店推荐</h2><p>话术模板：「姐/哥，今天办张会员卡很划算，充' + money(t) + '元送您' + money(gift) + '元余额，另外每次消费都有积分，积分能换招牌小食。要不要我给您算一下？」</p><p>要点：先算账（让顾客看到好处）→ 再提门槛（降低心理压力）→ 最后给赠品（临门一脚）。</p>';
  html += '<h2>场景2：收银台推荐</h2><p>话术模板：「您好，您这单可以参加储值活动，充' + money(t) + '送' + money(gift) + '，相当于' + disc + '，今天办卡马上就能用。」</p><p>要点：以「马上能用」制造即时价值，配合桌牌视觉提示。</p>';
  html += '<h2>场景3：线上/私域推荐</h2><p>话术模板：「老顾客专享福利来啦～本周储值' + money(t) + '元立赠' + money(gift) + '元+专属小食券，仅限前' + p.testSize + '名。」</p><p>要点：限时限量制造稀缺感，附小程序/二维码入口。</p>';
  html += '<h1>四、员工培训要点</h1><table><tr><th>能力维度</th><th>培训重点</th><th>考核标准</th></tr>';
  html += '<tr><td>服务能力</td><td>会员权益背诵、异议处理</td><td>模拟考核≥90分</td></tr>';
  html += '<tr><td>专业能力</td><td>储值测算、积分规则</td><td>随机抽测通过</td></tr>';
  html += '<tr><td>沟通能力</td><td>推荐时机、话术节奏</td><td>神秘顾客评分≥4.5/5</td></tr></table>';
  html += '<h1>五、服务流程 SOP</h1><p>顾客进店 → 点单/结算 → 识别会员身份 → 按场景话术推荐 → 完成办理 → 发放权益并告知使用方式 → 记录客户信息 → 消费后次日跟进回访。</p>';
  html += '<h1>六、推广排期表</h1><table><tr><th>阶段</th><th>周期</th><th>推广动作</th><th>物料</th></tr>';
  html += '<tr><td>测试期</td><td>第1-' + Math.round(p.testPeriod*4) + '周</td><td>店内物料 + 朋友圈预热</td><td>海报/桌牌</td></tr>';
  html += '<tr><td>优化期</td><td>第' + (Math.round(p.testPeriod*4)+1) + '-' + Math.round(p.testPeriod*8) + '周</td><td>老客定向回访 + 赠品券</td><td>优惠券</td></tr>';
  html += '<tr><td>推广期</td><td>第' + (Math.round(p.testPeriod*8)+1) + '-12周</td><td>平台团购 + 社群裂变</td><td>裂变海报</td></tr></table>';
  el.innerHTML = html;
}
function fillKitReport(p, el){
  var html = '';
  html += '<div class="pdf-cover-title">会员运营效果评估工具包</div>';
  html += '<div class="pdf-cover-sub">「留客王」会员运营落地系统 · 为「' + esc(p.brand) + '」定制</div>';
  html += '<div class="pdf-cover-line"></div>';
  html += '<h1>一、KPI 指标体系</h1><table><tr><th>指标</th><th>定义</th><th>建议目标</th></tr>';
  html += '<tr><td>兴趣比例</td><td>接触会员权益后主动咨询占比</td><td>≥60%</td></tr>';
  html += '<tr><td>成交概率</td><td>咨询客户中办理会员占比</td><td>≥25%</td></tr>';
  html += '<tr><td>执行效率</td><td>员工按SOP执行比例</td><td>≥90%</td></tr>';
  html += '<tr><td>会员占比</td><td>会员消费额占总营业额比例</td><td>≥40%</td></tr>';
  html += '<tr><td>复购率</td><td>会员二次消费占比</td><td>≥55%</td></tr></table>';
  html += '<h1>二、数据采集模板（示例）</h1><table><tr><th>日期</th><th>咨询人数</th><th>办理人数</th><th>储值金额</th><th>客单价</th><th>备注</th></tr>';
  var today = new Date();
  for (var i = 0; i < 6; i++) {
    var dd = new Date(today); dd.setDate(today.getDate() + i);
    html += '<tr><td>' + fmtDate(dd) + '</td><td> </td><td> </td><td> </td><td>' + money(p.d.avgTicket) + ' 元</td><td> </td></tr>';
  }
  html += '</table><p class="report-meta">说明：每日闭店后由店长填写，数据用于周度复盘。</p>';
  html += '<h1>三、迭代优化决策树</h1><table><tr><th>测试结果</th><th>判断</th><th>调整动作</th></tr>';
  html += '<tr><td>兴趣比例&lt;40%</td><td>权益吸引力不足</td><td>加大赠品力度/调整话术</td></tr>';
  html += '<tr><td>成交概率&lt;20%</td><td>门槛或信任问题</td><td>降低储值门槛/强化零风险承诺</td></tr>';
  html += '<tr><td>执行效率&lt;80%</td><td>培训不到位</td><td>复盘培训+神秘顾客暗访</td></tr>';
  html += '<tr><td>复购率&lt;50%</td><td>权益使用率低</td><td>增加消耗引导+周期性唤醒</td></tr></table>';
  html += '<h1>四、长期评价指标框架</h1><table><tr><th>指标</th><th>评估周期</th><th>目标值</th></tr>';
  html += '<tr><td>ROI（会员投入回报）</td><td>季度</td><td>≥3:1</td></tr>';
  html += '<tr><td>NPS（净推荐值）</td><td>月度</td><td>≥50</td></tr>';
  html += '<tr><td>留存率（12个月）</td><td>年度</td><td>≥60%</td></tr>';
  html += '<tr><td>CAC（获客成本）</td><td>季度</td><td>低于单客毛利</td></tr></table>';
  el.innerHTML = html;
}

/* ---------- 按钮绑定 ---------- */
$('btn-start').addEventListener('click', function(){ showView('form'); });
$('btn-guide-landing').addEventListener('click', openGuide);
$('btn-guide-form').addEventListener('click', openGuide);
$('btn-guide-result').addEventListener('click', openGuide);
$('btn-step-next-1').addEventListener('click', function(){ if (validateStep(1)) goStep(2); });
$('btn-step-prev-2').addEventListener('click', function(){ goStep(1); });
$('btn-step-next-2').addEventListener('click', function(){ if (validateStep(2)) goStep(3); });
$('btn-step-prev-3').addEventListener('click', function(){ goStep(2); });
$('btn-step-next-3').addEventListener('click', function(){ goStep(4); });
$('btn-step-prev-4').addEventListener('click', function(){ goStep(3); });
$('btn-generate').addEventListener('click', function(){
  if (!validateStep(1)) { goStep(1); return; }
  if (!validateStep(2)) { goStep(2); return; }
  if (isUnlocked()) { generatePlan(); }
  else { openUnlock(); }
});
$('btn-copy-wechat').addEventListener('click', function(){ copyText(WECHAT_ID, '微信号已复制，去微信搜索即可添加'); });
$('btn-remake').addEventListener('click', function(){
  goStep(1);
  showView('form');
});
$('btn-back-home').addEventListener('click', function(){ showView('landing'); });

/* ---------- 初始化 ---------- */
loadState();
syncForm();
bindFormInputs();
goStep(1);
bindSamples();
bindLivePdf();
renderCoeffs();
renderSummary();
// GitHub部署：用内嵌base64替换logo文件引用
var LOGO_DATA_URI = 'data:image/png;base64,' + LOGO_B64;
document.querySelectorAll('.hero-logo, .mini-logo').forEach(function(img){ img.src = LOGO_DATA_URI; });
var fav = document.querySelector('link[rel="icon"]'); if (fav) fav.href = LOGO_DATA_URI;
