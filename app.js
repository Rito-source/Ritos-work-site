
(() => {
const root = document.getElementById('mimoon-collection-preview');
const EMBEDDED_EVENTS = [{"id":1,"title":"Partner Up & WinCP组队冲榜","description":"CP双方共同完成 Lucky Gift Rewards等级目标（双方等级相加达到 Lv.5），即可获得 3天CP头像框、CP海报推广、3,000金豆/人。","url":"http://mimoon-website.connectsph.com/campaigns/partner-up-win/","image":"assets/event-01.webp","series":"榜单挑战","type":"event"},{"id":2,"title":"家族许愿","description":"开启家族宝箱数前三家族可许愿回归月亮宝藏活动或幸运礼物王活动","url":"http://mimoon-website.connectsph.com/campaigns/make-a-wish/","image":"assets/event-02.webp","series":"家族互动","type":"event"},{"id":3,"title":"史莱姆许愿战","description":"新史莱姆幸运礼物上线，送粉/蓝史莱姆支持对应奖励，活动结束后累计赠送数多的一方获得对应奖励","url":"https://d3q1f6luw4nkfq.cloudfront.net/campaigns/slime-wish-battle/","image":"assets/event-03.webp","series":"史莱姆系列","type":"event"},{"id":4,"title":"史莱姆限定座驾活动","description":"活动期间，累计送出史莱姆幸运礼物≥20,000金币，即可获得：\n💙 蓝色史莱姆座驾（15天）","url":"https://d3q1f6luw4nkfq.cloudfront.net/campaigns/slime-limited-ride-event/","image":"assets/event-04.webp","series":"史莱姆系列","type":"event"},{"id":5,"title":"Family Invite Challenge 家族邀请挑战","description":"活动期间按各家族成员累计邀请的有效新用户数排名，前3名家族分别可获得3个、2个、1个为期7天的VIP名额，虚假或异常账号不计入邀请数据","url":"https://d3q1f6luw4nkfq.cloudfront.net/campaigns/family-invite-challenge/","image":"assets/event-05.webp","series":"家族互动","type":"event"},{"id":6,"title":"Slime Couple Event史莱姆CP活动","description":"活动期间，用户任意一天完成 Lv.2 直播时长任务，自己和CP双方都可获得 7天史莱姆CP座位框；完成 Lv.6 则双方可获得 1个月座位框并登上Mimoon展示位，无需报名即可参与。","url":"https://d3q1f6luw4nkfq.cloudfront.net/campaigns/slime-couple-event/","image":"assets/event-06.webp","series":"史莱姆系列","type":"event"},{"id":7,"title":"Win Big! Get a Slime Ride! 赢大奖，拿史莱姆座驾","description":"活动期间，用户赠送任意 Slime Lucky Gift，累计 2次中得200X大奖，即可获得 15天 Blue Slime Ride（蓝色史莱姆座驾）。","url":"https://d1m0okuba9ph2x.cloudfront.net/campaigns/win-big-get-a-slime-ride/","image":"assets/event-07.webp","series":"史莱姆系列","type":"event"},{"id":8,"title":"MIMOON舞蹈模仿赛","description":"模仿MIMOON人的舞蹈视频并发布社交软件，优秀者可获得专属坐骑+5000金币","url":"https://d1m0okuba9ph2x.cloudfront.net/campaigns/mimoon-dance-challenge/","image":"assets/event-08.webp","series":"主题活动","type":"event"},{"id":9,"title":"幸运榜单活动","description":"活动期间，根据每日 Lucky榜单排名 给1-3名发放座位框奖励","url":"https://d1m0okuba9ph2x.cloudfront.net/campaigns/lucky-ranking-event/","image":"assets/event-09.webp","series":"榜单挑战","type":"event"},{"id":10,"title":"魅力榜单活动","description":"活动期间，将根据每日全球魅力榜单排名进行统计，榜单前三名可获得额外奖励：\n🥇 第1名获得：200,000金币\n🥈 第2名获得：150,000金币\n🥉 第3名获得：100,000金币","url":"https://d1m0okuba9ph2x.cloudfront.net/leaderboards/global-charm-ranking-challenge/","image":"assets/event-10.webp","series":"榜单挑战","type":"event"},{"id":11,"title":"史莱姆家族活动","description":"活动期间，根据各家族开启宝箱总次数进行排名统计（包含：幸运礼物宝箱 + 游戏宝箱），排名前 3的家族 可选出 20名家族成员 获得以下奖励：\n● 蓝色史莱姆头像框 × 7天\n● 💰 每人 1000 金币","url":"https://d1m0okuba9ph2x.cloudfront.net/campaigns/slime-family-event/","image":"assets/event-11.webp","series":"史莱姆系列","type":"event"},{"id":12,"title":"幸运榜单冲榜活动","description":"8月25日-27日，根据每日 Lucky榜单第一名 发放5w金币+Rainbow Slime & Crown Slime 座位框（7天）赠送机会","url":"https://d1m0okuba9ph2x.cloudfront.net/leaderboards/lucky-ranking-aug25-27/","image":"assets/event-12.webp","series":"榜单挑战","type":"event"},{"id":13,"title":"上麦活跃活动","description":"活动期间（8.26-30日）成功引导20个带有“NEW“座位框 的用户上麦且上麦时长不低于10分钟，即可参与TOP40排名","url":"https://d1m0okuba9ph2x.cloudfront.net/campaigns/mic-up-challenge/","image":"assets/event-13.webp","series":"主题活动","type":"event"},{"id":14,"title":"Family Leader 挑战赛","description":"活动期间（28–31日），家族成员送出任意史莱姆系列幸运礼物且触发200倍大奖，按中奖次数排名前3的家族，家族长可自选20名成员每人1000金币，家族长获得Leader专属头像框（10天","url":"https://d1m0okuba9ph2x.cloudfront.net/campaigns/family-leader/","image":"assets/event-14.webp","series":"家族互动","type":"event"},{"id":15,"title":"LUcky榜前十活动","description":"活动三天，每天幸运榜前十的用户（全球榜），每人1w金币+任意选择1款星座座位框（10天）（狮子座 / 处女座 / 天秤座 / 天蝎座）","url":"https://d1m0okuba9ph2x.cloudfront.net/leaderboards/lucky-top-10-challenge/","image":"assets/event-15.webp","series":"榜单挑战","type":"event"},{"id":16,"title":"Say \"Hi\" Challenge","description":"对每一位进入你直播间的用户说一句“Hi”，主动互动，引导用户为你送出5金币「饼干」礼物，pick你成为“最Nice的主播”。收到「饼干礼物」最多人数的TOP20名主播，即可获得奖励","url":"https://d1m0okuba9ph2x.cloudfront.net/campaigns/say-hi-challenge/","image":"assets/event-16.webp","series":"主题活动","type":"event"},{"id":17,"title":"活动主播官方招募","description":"推荐你或者朋友作为官方主播成功入选后，推荐人获得3w金豆奖励，主持人获得2w奖励","url":"https://d1m0okuba9ph2x.cloudfront.net/campaigns/super-idol-official-recruitment/","image":"assets/event-17.webp","series":"主题活动","type":"event"},{"id":18,"title":"真爱降临","description":"活动期间9.10-9.13日，「幸运礼物」任务达到Lv.3的用户，即可解锁「真爱降临」赠送权，把专属座位框送给你的TA，说出你的心意；那些没说出口的话，也可以交给mimoon，我们会替你送达","url":"https://d1m0okuba9ph2x.cloudfront.net/campaigns/true-love-arrives/?v=2069d5e","image":"assets/event-18.webp","series":"真爱系列","type":"event"},{"id":19,"title":"Charm冲榜","description":"9.12-15日，全球魅力榜第一名，可得50000金币+星座座位框赠送权","url":"https://d1m0okuba9ph2x.cloudfront.net/campaigns/charmrush/","image":"assets/event-19.webp","series":"榜单挑战","type":"event"},{"id":20,"title":"猫头鹰幸运礼物活动","description":"9月16日–9月18日，送出任意幸运礼物，将根据用户3天内幸运礼物的总收益进行排名，前50名可获得奖励","url":"https://d1m0okuba9ph2x.cloudfront.net/campaigns/owlrush/","image":"assets/event-20.webp","series":"主题活动","type":"event"},{"id":21,"title":"VIP返金币活动","description":"订阅vip可获得额外金币+专属座位框","url":"https://d1m0okuba9ph2x.cloudfront.net/campaigns/vip-owl/","image":"assets/event-21.webp","series":"VIP 专属","type":"event"},{"id":22,"title":"真爱降临2-为爱冲刺","description":"活动期间幸运礼物等级达到lv3可得座位框/头像框二选一赠送权；幸运礼物等级达到lv4，可得3000金币+整套装扮赠送权","url":"https://d1m0okuba9ph2x.cloudfront.net/campaigns/race-for-love/","image":"assets/event-22.webp","series":"真爱系列","type":"event"},{"id":23,"title":"专属封面定制活动","description":"开播任务达到LV1及以上，即可解锁抽奖资格——每天抽取10位幸运用户，免费定制你的专属封面，让你的直播间更吸睛！","url":"https://d1m0okuba9ph2x.cloudfront.net/campaigns/your-cover-your-style/","image":"assets/event-23.webp","series":"主题活动","type":"event"},{"id":24,"title":"真爱降临3-双人成行","description":"组队，两人幸运礼物等级相加大于等于6级","url":"https://d1m0okuba9ph2x.cloudfront.net/campaigns/team-up-for-love/","image":"assets/event-24.webp","series":"真爱系列","type":"event"},{"id":25,"title":"游戏冲榜活动","description":"活动期间，进行Lucky Gift榜单的全球排名，第一名，奖励5w金币+任意选择1款星座座位框（30天）","url":"https://d1m0okuba9ph2x.cloudfront.net/campaigns/game-ranking-event/","image":"assets/event-25.webp","series":"榜单挑战","type":"event"},{"id":26,"title":"真爱降临4 心动加倍","description":"两人组队，活动期间双方互相赠送幸运礼物消耗超过100w，即可获得限定CP座位框7天+10000金币奖励。","url":"https://d1m0okuba9ph2x.cloudfront.net/campaigns/true-love-arrives-4/","image":"assets/event-26.webp","series":"真爱系列","type":"event"},{"id":27,"title":"“猫头鹰”限定坐骑活动","description":"活动期间，幸运礼物累计中奖20w金币，即可获得：BlueOwl Kart Dash Ride（15天）＋20,000金币","url":"https://d1m0okuba9ph2x.cloudfront.net/campaigns/owl-limited-ride-event/","image":"assets/event-27.webp","series":"主题活动","type":"event"},{"id":28,"title":"VIP首次开通活动","description":"活动期间，用户首次开通月VIP，即可获得：VIP专属权益+40,000金币","url":"https://d1m0okuba9ph2x.cloudfront.net/campaigns/first-vip-bonus/","image":"assets/event-28.webp","series":"VIP 专属","type":"event"},{"id":29,"title":"游戏狂欢挑战","description":"活动期间，每日参与Mimoon Party Game，单日累计游戏消耗超过5,000,000金币，连续完成3天可获得30,000金币！","url":"https://d1m0okuba9ph2x.cloudfront.net/campaigns/game-fever-challenge/","image":"assets/event-29.webp","series":"主题活动","type":"event"}];

'use strict';

const $ = (selector) => root.querySelector(selector);
const PAGE_SIZE = 6;
const state = { events: [], type: 'event', outfitType: 'frame', page: 1, query: '', series: 'all', sort: 'newest', activeEvent: null, returnFocus: null };
const grid = $('#works-grid');
const empty = $('#empty-state');
const dialog = $('#detail-dialog');
const galleryFilters = $('#gallery-filters');
const types = {
  frame: { title: '头像框', en: 'AVATAR FRAMES', symbol: '◎' },
  seat: { title: '座位框', en: 'SEAT FRAMES', symbol: '▣' },
  ride: { title: '座驾', en: 'RIDES & ENTRANCES', symbol: '↗' }
};

function element(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}

function showToast(message) {
  const toast = $('#toast');
  toast.textContent = message;
  toast.classList.add('visible');
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove('visible'), 2500);
}

function buildCard(event) {
  const card = element('article', 'work-card');
  const main = element('a', 'card-main');
  main.href = event.url;
  main.target = '_blank';
  main.rel = 'noopener noreferrer';
  main.setAttribute('aria-label', `打开${event.title}的网页（新窗口）`);
  const imageBox = element('div', 'card-image');
  const image = element('img');
  image.src = event.image;
  image.alt = `${event.title} 活动横幅`;
  image.width = 1044;
  image.height = 252;
  image.loading = 'lazy';
  image.decoding = 'async';
  imageBox.append(image);
  const body = element('div', 'card-body');
  const top = element('div', 'card-topline');
  top.append(element('span', 'series-tag', event.series));
  const title = element('h3', '', event.title);
  const description = element('p', 'card-description', event.description.replace(/\n/g, ' '));
  body.append(top, title, description);
  main.append(imageBox, body);

  const footer = element('div', 'card-footer');
  const detail = element('button', 'detail-trigger', '查看作品详情');
  detail.type = 'button';
  detail.append(element('span', '', '→'));
  detail.setAttribute('aria-label', `查看${event.title}的详情`);
  detail.addEventListener('click', () => openDetail(event, detail));
  const link = element('a', '', '原活动网页');
  link.href = event.url;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
  link.setAttribute('aria-label', `打开${event.title}的原活动网页（新窗口）`);
  link.append(element('span', '', '↗'));
  footer.append(detail, link);
  card.append(main, footer);
  return card;
}

function render() {
  grid.replaceChildren();
  empty.replaceChildren();
  const isEvents = state.type === 'event';
  galleryFilters.hidden = !isEvents;
  $('#results-line').hidden = !isEvents;
  $('#outfit-content').hidden = isEvents;
  $('#pagination').hidden = true;
  grid.hidden = !isEvents;
  empty.hidden = true;
  if (!isEvents) {
    renderOutfits();
    return;
  }
  clearOutfitCards();
  let matches = state.events.filter(event => {
    const text = `${event.title} ${event.description} ${event.series} ${event.id}`.toLocaleLowerCase();
    return (!state.query || text.includes(state.query.toLocaleLowerCase())) && (state.series === 'all' || event.series === state.series);
  });
  matches = matches.slice().sort((a, b) => state.sort === 'oldest' ? a.id - b.id : b.id - a.id);
  const pageCount = Math.max(1, Math.ceil(matches.length / PAGE_SIZE));
  state.page = Math.min(state.page, pageCount);
  const start = (state.page - 1) * PAGE_SIZE;
  const visible = matches.slice(start, start + PAGE_SIZE);
  $('#result-count').textContent = `共 ${matches.length} 件网页作品`;
  empty.hidden = matches.length > 0;
  if (matches.length === 0) {
    empty.append(element('div', 'empty-symbol', '⌕'), element('h3', '', '暂时没有找到这件作品'), element('p', '', '换一个关键词或系列试试，也许下一份灵感就在附近。'));
    const reset = element('button', 'reset-button', '重置搜索与筛选');
    reset.type = 'button';
    reset.addEventListener('click', () => {
      state.query = '';
      state.series = 'all';
      state.page = 1;
      $('#search').value = '';
      $('#series').value = 'all';
      render();
      $('#search').focus();
    });
    empty.append(reset);
  }
  const fragment = document.createDocumentFragment();
  for (const event of visible) fragment.append(buildCard(event));
  grid.append(fragment);
  renderPagination(pageCount);
}

function renderPagination(pageCount) {
  const pagination = $('#pagination');
  pagination.replaceChildren();
  pagination.hidden = pageCount <= 1;
  if (pageCount <= 1) return;
  const button = (label, page, disabled = false, accessibleLabel = label) => {
    const node = element('button', 'page-button', label);
    node.type = 'button';
    node.disabled = disabled;
    node.setAttribute('aria-label', accessibleLabel);
    node.addEventListener('click', () => {
      if (page === state.page) return;
      state.page = page;
      render();
      $('#collection').scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth', block: 'start' });
      $('#pagination [aria-current="page"]').focus({ preventScroll: true });
    });
    return node;
  };
  const pages = element('div', 'page-numbers');
  for (let page = 1; page <= pageCount; page++) {
    const node = button(String(page), page, false, `第 ${page} 页`);
    if (page === state.page) node.setAttribute('aria-current', 'page');
    pages.append(node);
  }
  pagination.append(button('上一页', state.page - 1, state.page === 1), pages, button('下一页', state.page + 1, state.page === pageCount), element('span', 'page-summary', `第 ${state.page} / ${pageCount} 页`));
}

function selectOutfit(type) {
  if (state.outfitType !== type) {
    outfitPage = 1;
    outfitGroup = OUTFIT_GROUPS[type]?.[0] ?? '';
  }
  state.outfitType = type;
  root.querySelectorAll('.outfit-tab').forEach(tab => {
    const selected = tab.dataset.outfit === type;
    tab.classList.toggle('active', selected);
    tab.setAttribute('aria-selected', String(selected));
    tab.tabIndex = selected ? 0 : -1;
  });
  $('#outfit-panel').setAttribute('aria-labelledby', `outfit-tab-${type}`);
  render();
}

function selectType(type) {
  state.type = type;
  root.querySelectorAll('.type-tab').forEach(tab => {
    const selected = tab.dataset.type === type;
    tab.classList.toggle('active', selected);
    tab.setAttribute('aria-selected', String(selected));
    tab.tabIndex = selected ? 0 : -1;
  });
  $('#works-panel').setAttribute('aria-labelledby', `tab-${type}`);
  render();
}

function openDetail(event, trigger) {
  state.activeEvent = event;
  state.returnFocus = trigger;
  $('#detail-title').textContent = event.title;
  $('#detail-image').src = event.image;
  $('#detail-image').alt = `${event.title} 活动横幅`;
  $('#detail-id').textContent = `作品 ${String(event.id).padStart(2, '0')} / ${state.events.length}`;
  $('#detail-series').textContent = event.series;
  $('#detail-description').textContent = event.description;
  $('#detail-link').href = event.url;
  dialog.showModal();
  dialog.scrollTop = 0;
  root.style.overflow = 'hidden';
  $('#close-dialog').focus({ preventScroll: true });
}

function closeDetail() { dialog.close(); }
$('#close-dialog').addEventListener('click', closeDetail);
dialog.addEventListener('click', event => {
  if (event.target === dialog) {
    const bounds = dialog.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) closeDetail();
  }
});
dialog.addEventListener('close', () => {
  root.style.overflow = '';
  if (state.returnFocus && state.returnFocus.isConnected) state.returnFocus.focus({ preventScroll: true });
});
$('#copy-link').addEventListener('click', async () => {
  if (!state.activeEvent) return;
  const url = state.activeEvent.url;
  try {
    if (!navigator.clipboard) throw new Error('Clipboard unavailable');
    await navigator.clipboard.writeText(url);
    showToast('活动链接已复制');
  } catch {
    const input = element('textarea');
    input.value = url;
    input.style.position = 'fixed';
    input.style.opacity = '0';
    dialog.append(input);
    input.select();
    let copied = false;
    try { copied = document.execCommand('copy'); } catch { /* Show the visible URL below if copying is unavailable. */ }
    input.remove();
    if (copied) showToast('活动链接已复制');
    else {
      let fallback = $('#copy-fallback');
      if (!fallback) {
        fallback = element('input');
        fallback.id = 'copy-fallback';
        fallback.readOnly = true;
        fallback.setAttribute('aria-label', '选中并手动复制活动链接');
        fallback.style.cssText = 'width:100%;padding:12px;margin-top:16px;border:1px solid var(--line);border-radius:5px;background:var(--surface);color:var(--ink);font-size:11px';
        $('.detail-content').append(fallback);
      }
      fallback.value = url;
      fallback.focus();
      fallback.select();
      showToast('请复制已选中的活动链接');
    }
  }
});

root.querySelectorAll('.type-tab').forEach(tab => {
  tab.addEventListener('click', () => selectType(tab.dataset.type));
  tab.addEventListener('keydown', event => {
    const tabs = [...root.querySelectorAll('.type-tab')];
    let index = tabs.indexOf(tab);
    if (event.key === 'ArrowRight') index = (index + 1) % tabs.length;
    else if (event.key === 'ArrowLeft') index = (index - 1 + tabs.length) % tabs.length;
    else if (event.key === 'Home') index = 0;
    else if (event.key === 'End') index = tabs.length - 1;
    else return;
    event.preventDefault();
    selectType(tabs[index].dataset.type);
    tabs[index].focus();
  });
});
root.querySelectorAll('.outfit-tab').forEach(tab => {
  tab.addEventListener('click', () => selectOutfit(tab.dataset.outfit));
  tab.addEventListener('keydown', event => {
    const tabs = [...root.querySelectorAll('.outfit-tab')];
    let index = tabs.indexOf(tab);
    if (event.key === 'ArrowRight') index = (index + 1) % tabs.length;
    else if (event.key === 'ArrowLeft') index = (index - 1 + tabs.length) % tabs.length;
    else if (event.key === 'Home') index = 0;
    else if (event.key === 'End') index = tabs.length - 1;
    else return;
    event.preventDefault();
    selectOutfit(tabs[index].dataset.outfit);
    tabs[index].focus();
  });
});
$('#search').addEventListener('input', event => { state.query = event.target.value.trim(); state.page = 1; render(); });
$('#series').addEventListener('change', event => { state.series = event.target.value; state.page = 1; render(); });
$('#sort').addEventListener('change', event => { state.sort = event.target.value; state.page = 1; render(); });

root.addEventListener('keydown', event => {
  if (event.key === '/' && !dialog.open && !outfitDialog.open && !['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement.tagName)) {
    event.preventDefault();
    selectType('event');
    galleryFilters.open = true;
    $('#search').focus();
  }
});

const outfitGallery = $('#outfit-gallery');
const outfitDialog = $('#outfit-dialog');
const outfitStage = $('#outfit-preview-stage');
const outfitStatus = $('#outfit-preview-status');
const outfitPNG = $('#outfit-preview-png');
const motionPreference = matchMedia('(prefers-reduced-motion: reduce)');
const reduceMotion = () => motionPreference.matches;
const outfitRows = window.MIMOON_OUTFITS ?? [];
const OUTFIT_GROUPS = {
  seat: ['猫头鹰', '十二星座', '史莱姆', '其他'],
};
const RIDE_PAGES = ['3:4', '1:1', '透明抠图'];
const outfitTotal = outfitRows.length;
$('#outfit-total').textContent = outfitTotal;
for (const tab of root.querySelectorAll('.outfit-tab')) {
  const count = outfitRows.filter(row => row.category === tab.dataset.outfit).length;
  tab.append(element('span', 'tab-count', String(count)));
}
let outfitPage = 1;
let outfitGroup = '';
let outfitTrigger = null;
let outfitRequest = 0;
const outfitCards = new Map();
const outfitObserver = typeof IntersectionObserver === 'function' ? new IntersectionObserver(entries => {
  for (const entry of entries) {
    const preview = outfitCards.get(entry.target);
    if (preview) preview.visible = entry.isIntersecting;
  }
  syncOutfitCards();
}, { rootMargin: '160px 0px' }) : null;

function clearOutfitCards() {
  outfitObserver?.disconnect();
  for (const preview of outfitCards.values()) stopOutfitCard(preview);
  outfitCards.clear();
}

function stopOutfitCard(preview) {
  if (!preview.playing) return;
  preview.playing = false;
  preview.request++;
  preview.pending?.removeAttribute('src');
  preview.pending = null;
  preview.media.replaceChildren(preview.poster);
}

function syncOutfitCards() {
  const allowed = !document.hidden && !outfitDialog.open;
  for (const preview of outfitCards.values()) {
    if (allowed && preview.visible) {
      if (!preview.playing) void playOutfitCard(preview);
    } else stopOutfitCard(preview);
  }
}

async function decodeOutfitImage(image, row, motion = row.motion, isCurrent = () => true) {
  image.src = motion;
  try { await image.decode(); }
  catch (error) {
    const fallback = motion !== row.motion ? row.motion : row.fallback;
    if (!fallback || !isCurrent()) throw error;
    image.src = fallback;
    await image.decode();
  }
}

async function playOutfitCard(preview) {
  if (preview.failed) return;
  const { row, media } = preview;
  const request = ++preview.request;
  preview.playing = true;
  const image = element('img');
  image.alt = '';
  preview.pending = image;
  try {
    await decodeOutfitImage(image, row, row.cardMotion, () => request === preview.request);
    if (request === preview.request) {
      preview.pending = null;
      media.replaceChildren(image);
    }
  } catch {
    if (request === preview.request) {
      preview.failed = true;
      stopOutfitCard(preview);
    }
  }
}

document.addEventListener('visibilitychange', syncOutfitCards);

function renderOutfits() {
  clearOutfitCards();
  const category = state.outfitType;
  const rows = outfitRows.filter(row => row.category === category &&
    (category === 'ride' || row.group === outfitGroup));
  if (category === 'frame') rows.sort((a, b) => Number(a.kind === 'still') - Number(b.kind === 'still'));
  const pages = category === 'ride' ? RIDE_PAGES.length : Math.max(1, Math.ceil(rows.length / PAGE_SIZE));
  outfitPage = Math.min(outfitPage, pages);
  const visibleRows = category === 'ride'
    ? rows.filter(row => row.group === RIDE_PAGES[outfitPage - 1])
    : rows.slice((outfitPage - 1) * PAGE_SIZE, outfitPage * PAGE_SIZE);
  const heading = element('div', 'outfit-gallery-heading');
  heading.append(element('h3', '', outfitGroup || types[category].title));
  heading.append(element('p', '', `共 ${rows.length} 件`));
  outfitGallery.replaceChildren(heading);
  if (OUTFIT_GROUPS[category]) {
    const groups = element('div', 'outfit-group-switch');
    groups.setAttribute('aria-label', '座位框系列');
    for (const value of OUTFIT_GROUPS[category]) {
      const button = element('button', '', value);
      button.type = 'button';
      button.setAttribute('aria-pressed', String(outfitGroup === value));
      button.addEventListener('click', () => {
        if (outfitGroup === value) return;
        outfitGroup = value;
        outfitPage = 1;
        renderOutfits();
        outfitGallery.querySelector('[aria-pressed="true"]').focus();
      });
      groups.append(button);
    }
    outfitGallery.append(groups);
  }
  const cards = element('div', 'outfit-card-grid');
  for (const [index, row] of visibleRows.entries()) {
    const card = element('article', 'outfit-card');
    const button = element('button', 'outfit-card-button');
    button.type = 'button';
    button.setAttribute('aria-label', `预览${row.title}${row.kind === 'still' ? '' : '动效'}`);
    const media = element('span', 'outfit-thumb');
    media.classList.toggle('is-avatar', category === 'frame');
    media.classList.toggle('is-ride', category === 'ride');
    media.classList.toggle('is-portrait-ride', category === 'ride' && row.group === '3:4');
    const image = element('img');
    if (index < 3) image.fetchPriority = 'high';
    image.src = row.cover;
    image.alt = '';
    const title = element('span', 'outfit-card-copy', row.title);
    media.append(image);
    button.append(media, title);
    button.addEventListener('click', () => {
      const preview = outfitCards.get(card);
      const animation = preview?.playing && media.firstElementChild !== image
        ? media.firstElementChild
        : null;
      openOutfitPreview(row, button, animation);
    });
    card.append(button);
    cards.append(card);
    if (row.kind !== 'still') outfitCards.set(card, { row, media, poster: image, visible: !outfitObserver, playing: false, request: 0 });
  }
  outfitGallery.append(cards);
  for (const card of outfitCards.keys()) outfitObserver?.observe(card);
  syncOutfitCards();
  if (pages <= 1) return;
  const pagination = element('nav', 'pagination');
  pagination.setAttribute('aria-label', `${types[category].title}分页`);
  const button = (label, page, disabled, active = false) => {
    const b = element('button', 'page-button', label);
    b.type = 'button';
    b.disabled = disabled;
    if (active) b.setAttribute('aria-current', 'page');
    b.addEventListener('click', () => {
      if (page === outfitPage) return;
      outfitPage = page;
      renderOutfits();
      outfitGallery.scrollIntoView({ block: 'start', behavior: reduceMotion() ? 'instant' : 'smooth' });
      outfitGallery.querySelector('[aria-current="page"]').focus({ preventScroll: true });
    });
    return b;
  };
  const numbers = element('div', 'page-numbers');
  for (let p = 1; p <= pages; p++) numbers.append(button(String(p), p, false, p === outfitPage));
  pagination.append(button('上一页', outfitPage - 1, outfitPage === 1), numbers, button('下一页', outfitPage + 1, outfitPage === pages));
  outfitGallery.append(pagination);
}

function outfitPoster(row) {
  const image = element('img');
  image.src = row.cover;
  image.alt = row.title;
  image.width = row.width;
  image.height = row.height;
  return image;
}

function openOutfitPreview(row, trigger, animation) {
  outfitTrigger = trigger;
  outfitStage.classList.toggle('is-avatar', row.category === 'frame');
  outfitStage.classList.toggle('is-ride', row.category === 'ride');
  outfitStage.classList.toggle('is-portrait-ride', row.category === 'ride' && row.group === '3:4');
  $('#outfit-preview-title').textContent = row.title;
  $('#outfit-preview-category').textContent = [types[row.category].title, row.group, row.format].filter(Boolean).join(' · ');
  outfitStage.replaceChildren(outfitPoster(row));
  outfitPNG.src = row.png;
  outfitPNG.alt = `${row.title}的透明缩略图`;
  outfitStatus.hidden = true;
  outfitDialog.showModal();
  syncOutfitCards();
  $('#close-outfit-preview').focus();
  if (animation) {
    animation.alt = row.title;
    outfitStage.replaceChildren(animation);
  }
  if (row.motion) void playOutfitPreview(row, animation);
}

async function playOutfitPreview(row, animation) {
  const request = ++outfitRequest;
  const isCurrent = () => request === outfitRequest;
  try {
    const image = outfitPoster(row);
    await decodeOutfitImage(image, row, row.motion, isCurrent);
    if (isCurrent()) outfitStage.replaceChildren(image);
  } catch {
    if (!isCurrent()) return;
    if (animation?.parentNode === outfitStage) return;
    outfitStage.replaceChildren(outfitPoster(row));
    outfitStatus.textContent = '此浏览器暂时无法播放动效，可以查看静态预览。';
    outfitStatus.hidden = false;
  }
}

$('#close-outfit-preview').addEventListener('click', () => outfitDialog.close());
outfitDialog.addEventListener('close', () => {
  outfitRequest++;
  outfitStage.replaceChildren();
  outfitPNG.removeAttribute('src');
  outfitTrigger?.focus({ preventScroll: true });
  outfitTrigger = null;
  syncOutfitCards();
});

async function init() {
  try {
    state.events = EMBEDDED_EVENTS;
    render();
  } catch {
    $('#result-count').textContent = '作品暂时未能加载';
    empty.hidden = false;
    empty.append(element('h3', '', '作品正在等你回来'), element('p', '', '网络连接似乎遇到了一点问题，请重试。'));
    const retry = element('button', 'reset-button', '重新载入');
    retry.type = 'button';
    retry.addEventListener('click', () => { empty.replaceChildren(); init(); });
    empty.append(retry);
  }
}
init();

})();
