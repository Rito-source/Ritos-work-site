
(() => {
const root = document.getElementById('mimoon-collection-preview');
const EMBEDDED_EVENTS = [{"id":1,"title":"Partner Up & WinCP组队冲榜","description":"CP双方共同完成 Lucky Gift Rewards等级目标（双方等级相加达到 Lv.5），即可获得 3天CP头像框、CP海报推广、3,000金豆/人。","url":"http://mimoon-website.connectsph.com/campaigns/partner-up-win/","image":"assets/event-01.webp","series":"榜单挑战","type":"event"},{"id":2,"title":"家族许愿","description":"开启家族宝箱数前三家族可许愿回归月亮宝藏活动或幸运礼物王活动","url":"http://mimoon-website.connectsph.com/campaigns/make-a-wish/","image":"assets/event-02.webp","series":"家族互动","type":"event"},{"id":3,"title":"史莱姆许愿战","description":"新史莱姆幸运礼物上线，送粉/蓝史莱姆支持对应奖励，活动结束后累计赠送数多的一方获得对应奖励","url":"https://d3q1f6luw4nkfq.cloudfront.net/campaigns/slime-wish-battle/","image":"assets/event-03.webp","series":"史莱姆系列","type":"event"},{"id":4,"title":"史莱姆限定座驾活动","description":"活动期间，累计送出史莱姆幸运礼物≥20,000金币，即可获得：\n💙 蓝色史莱姆座驾（15天）","url":"https://d3q1f6luw4nkfq.cloudfront.net/campaigns/slime-limited-ride-event/","image":"assets/event-04.webp","series":"史莱姆系列","type":"event"},{"id":5,"title":"Family Invite Challenge 家族邀请挑战","description":"活动期间按各家族成员累计邀请的有效新用户数排名，前3名家族分别可获得3个、2个、1个为期7天的VIP名额，虚假或异常账号不计入邀请数据","url":"https://d3q1f6luw4nkfq.cloudfront.net/campaigns/family-invite-challenge/","image":"assets/event-05.webp","series":"家族互动","type":"event"},{"id":6,"title":"Slime Couple Event史莱姆CP活动","description":"活动期间，用户任意一天完成 Lv.2 直播时长任务，自己和CP双方都可获得 7天史莱姆CP座位框；完成 Lv.6 则双方可获得 1个月座位框并登上Mimoon展示位，无需报名即可参与。","url":"https://d3q1f6luw4nkfq.cloudfront.net/campaigns/slime-couple-event/","image":"assets/event-06.webp","series":"史莱姆系列","type":"event"},{"id":7,"title":"Win Big! Get a Slime Ride! 赢大奖，拿史莱姆座驾","description":"活动期间，用户赠送任意 Slime Lucky Gift，累计 2次中得200X大奖，即可获得 15天 Blue Slime Ride（蓝色史莱姆座驾）。","url":"https://d1m0okuba9ph2x.cloudfront.net/campaigns/win-big-get-a-slime-ride/","image":"assets/event-07.webp","series":"史莱姆系列","type":"event"},{"id":8,"title":"MIMOON舞蹈模仿赛","description":"模仿MIMOON人的舞蹈视频并发布社交软件，优秀者可获得专属坐骑+5000金币","url":"https://d1m0okuba9ph2x.cloudfront.net/campaigns/mimoon-dance-challenge/","image":"assets/event-08.webp","series":"主题活动","type":"event"},{"id":9,"title":"幸运榜单活动","description":"活动期间，根据每日 Lucky榜单排名 给1-3名发放座位框奖励","url":"https://d1m0okuba9ph2x.cloudfront.net/campaigns/lucky-ranking-event/","image":"assets/event-09.webp","series":"榜单挑战","type":"event"},{"id":10,"title":"魅力榜单活动","description":"活动期间，将根据每日全球魅力榜单排名进行统计，榜单前三名可获得额外奖励：\n🥇 第1名获得：200,000金币\n🥈 第2名获得：150,000金币\n🥉 第3名获得：100,000金币","url":"https://d1m0okuba9ph2x.cloudfront.net/leaderboards/global-charm-ranking-challenge/","image":"assets/event-10.webp","series":"榜单挑战","type":"event"},{"id":11,"title":"史莱姆家族活动","description":"活动期间，根据各家族开启宝箱总次数进行排名统计（包含：幸运礼物宝箱 + 游戏宝箱），排名前 3的家族 可选出 20名家族成员 获得以下奖励：\n● 蓝色史莱姆头像框 × 7天\n● 💰 每人 1000 金币","url":"https://d1m0okuba9ph2x.cloudfront.net/campaigns/slime-family-event/","image":"assets/event-11.webp","series":"史莱姆系列","type":"event"},{"id":12,"title":"幸运榜单冲榜活动","description":"8月25日-27日，根据每日 Lucky榜单第一名 发放5w金币+Rainbow Slime & Crown Slime 座位框（7天）赠送机会","url":"https://d1m0okuba9ph2x.cloudfront.net/leaderboards/lucky-ranking-aug25-27/","image":"assets/event-12.webp","series":"榜单挑战","type":"event"},{"id":13,"title":"上麦活跃活动","description":"活动期间（8.26-30日）成功引导20个带有“NEW“座位框 的用户上麦且上麦时长不低于10分钟，即可参与TOP40排名","url":"https://d1m0okuba9ph2x.cloudfront.net/campaigns/mic-up-challenge/","image":"assets/event-13.webp","series":"主题活动","type":"event"},{"id":14,"title":"Family Leader 挑战赛","description":"活动期间（28–31日），家族成员送出任意史莱姆系列幸运礼物且触发200倍大奖，按中奖次数排名前3的家族，家族长可自选20名成员每人1000金币，家族长获得Leader专属头像框（10天","url":"https://d1m0okuba9ph2x.cloudfront.net/campaigns/family-leader/","image":"assets/event-14.webp","series":"家族互动","type":"event"},{"id":15,"title":"LUcky榜前十活动","description":"活动三天，每天幸运榜前十的用户（全球榜），每人1w金币+任意选择1款星座座位框（10天）（狮子座 / 处女座 / 天秤座 / 天蝎座）","url":"https://d1m0okuba9ph2x.cloudfront.net/leaderboards/lucky-top-10-challenge/","image":"assets/event-15.webp","series":"榜单挑战","type":"event"},{"id":16,"title":"Say \"Hi\" Challenge","description":"对每一位进入你直播间的用户说一句“Hi”，主动互动，引导用户为你送出5金币「饼干」礼物，pick你成为“最Nice的主播”。收到「饼干礼物」最多人数的TOP20名主播，即可获得奖励","url":"https://d1m0okuba9ph2x.cloudfront.net/campaigns/say-hi-challenge/","image":"assets/event-16.webp","series":"主题活动","type":"event"},{"id":17,"title":"活动主播官方招募","description":"推荐你或者朋友作为官方主播成功入选后，推荐人获得3w金豆奖励，主持人获得2w奖励","url":"https://d1m0okuba9ph2x.cloudfront.net/campaigns/super-idol-official-recruitment/","image":"assets/event-17.webp","series":"主题活动","type":"event"},{"id":18,"title":"真爱降临","description":"活动期间9.10-9.13日，「幸运礼物」任务达到Lv.3的用户，即可解锁「真爱降临」赠送权，把专属座位框送给你的TA，说出你的心意；那些没说出口的话，也可以交给mimoon，我们会替你送达","url":"https://d1m0okuba9ph2x.cloudfront.net/campaigns/true-love-arrives/?v=2069d5e","image":"assets/event-18.webp","series":"真爱系列","type":"event"},{"id":19,"title":"Charm冲榜","description":"9.12-15日，全球魅力榜第一名，可得50000金币+星座座位框赠送权","url":"https://d1m0okuba9ph2x.cloudfront.net/campaigns/charmrush/","image":"assets/event-19.webp","series":"榜单挑战","type":"event"},{"id":20,"title":"猫头鹰幸运礼物活动","description":"9月16日–9月18日，送出任意幸运礼物，将根据用户3天内幸运礼物的总收益进行排名，前50名可获得奖励","url":"https://d1m0okuba9ph2x.cloudfront.net/campaigns/owlrush/","image":"assets/event-20.webp","series":"主题活动","type":"event"},{"id":21,"title":"VIP返金币活动","description":"订阅vip可获得额外金币+专属座位框","url":"https://d1m0okuba9ph2x.cloudfront.net/campaigns/vip-owl/","image":"assets/event-21.webp","series":"VIP 专属","type":"event"},{"id":22,"title":"真爱降临2-为爱冲刺","description":"活动期间幸运礼物等级达到lv3可得座位框/头像框二选一赠送权；幸运礼物等级达到lv4，可得3000金币+整套装扮赠送权","url":"https://d1m0okuba9ph2x.cloudfront.net/campaigns/race-for-love/","image":"assets/event-22.webp","series":"真爱系列","type":"event"},{"id":23,"title":"专属封面定制活动","description":"开播任务达到LV1及以上，即可解锁抽奖资格——每天抽取10位幸运用户，免费定制你的专属封面，让你的直播间更吸睛！","url":"https://d1m0okuba9ph2x.cloudfront.net/campaigns/your-cover-your-style/","image":"assets/event-23.webp","series":"主题活动","type":"event"},{"id":24,"title":"真爱降临3-双人成行","description":"组队，两人幸运礼物等级相加大于等于6级","url":"https://d1m0okuba9ph2x.cloudfront.net/campaigns/team-up-for-love/","image":"assets/event-24.webp","series":"真爱系列","type":"event"},{"id":25,"title":"游戏冲榜活动","description":"活动期间，进行Lucky Gift榜单的全球排名，第一名，奖励5w金币+任意选择1款星座座位框（30天）","url":"https://d1m0okuba9ph2x.cloudfront.net/campaigns/game-ranking-event/","image":"assets/event-25.webp","series":"榜单挑战","type":"event"},{"id":26,"title":"真爱降临4 心动加倍","description":"两人组队，活动期间双方互相赠送幸运礼物消耗超过100w，即可获得限定CP座位框7天+10000金币奖励。","url":"https://d1m0okuba9ph2x.cloudfront.net/campaigns/true-love-arrives-4/","image":"assets/event-26.webp","series":"真爱系列","type":"event"},{"id":27,"title":"“猫头鹰”限定坐骑活动","description":"活动期间，幸运礼物累计中奖20w金币，即可获得：BlueOwl Kart Dash Ride（15天）＋20,000金币","url":"https://d1m0okuba9ph2x.cloudfront.net/campaigns/owl-limited-ride-event/","image":"assets/event-27.webp","series":"主题活动","type":"event"},{"id":28,"title":"VIP首次开通活动","description":"活动期间，用户首次开通月VIP，即可获得：VIP专属权益+40,000金币","url":"https://d1m0okuba9ph2x.cloudfront.net/campaigns/first-vip-bonus/","image":"assets/event-28.webp","series":"VIP 专属","type":"event"},{"id":29,"title":"游戏狂欢挑战","description":"活动期间，每日参与Mimoon Party Game，单日累计游戏消耗超过5,000,000金币，连续完成3天可获得30,000金币！","url":"https://d1m0okuba9ph2x.cloudfront.net/campaigns/game-fever-challenge/","image":"assets/event-29.webp","series":"主题活动","type":"event"}];

'use strict';

const EVENT_IMPACT = {
  1: ["把单人赠礼任务变成情侣共同目标，让两位成员都参与冲榜。", "双方的等级都计入同一个目标，任一方的进度都能帮助队伍达标。达标后两人各获 3,000 金豆，并可用成套头像框和海报展示搭档身份。"],
  2: ["让家族成员围绕共同的许愿奖励合力开宝箱。", "每次开箱都能为家族排名贡献进度。进入前三的家族可以提出想回归的活动，家族成绩因此能影响下一次玩什么。"],
  3: ["用粉、蓝阵营对战带动两款史莱姆礼物的首次尝试与重复赠送。", "参与者送出粉色或蓝色史莱姆时，同时也在为对应奖励阵营投票。选礼物这一步因此有了明确的偏好表达。"],
  4: ["用 15 天限定座驾，把零散赠礼串成一个可累计的目标。", "每次赠礼都能累积到同一目标。达到 20,000 金币门槛即可获得 15 天蓝色史莱姆座驾，参与者可以按自己的节奏规划赠礼。"],
  5: ["利用家族之间的竞争带来有效新用户。", "家族榜只计算有效邀请，参与者需要邀请真实的新用户。前三名家族分别获得 3、2、1 个为期 7 天的 VIP 名额。"],
  6: ["让情侣共同受益，并用两档奖品鼓励主播延长开播。", "一位主播达标后，双方都能获得座位框。参与者可先拿到 7 天装扮，也可以继续挑战 1 个月装扮和展示位。"],
  7: ["把两次 200 倍中奖与限定座驾挂钩，鼓励参与者再次赠礼。", "第一次触发 200 倍大奖后，参与者就有了清楚的下一步。累计两次即可解锁 15 天蓝色史莱姆座驾。"],
  8: ["鼓励用户在站外发布舞蹈作品，扩大活动触达。", "参与者可以用自己的舞蹈视频加入活动，并把作品分享到社交平台。优秀作品有机会获得专属坐骑与 5,000 金币。"],
  9: ["用每天重置的幸运榜，鼓励参与者连续回访。", "每日发放前三名奖励。错过当天名次的参与者，隔天还有新的机会争取座位框。"],
  10: ["通过魅力榜前三名的分档奖励，带动参与者持续冲榜。", "每日全球魅力榜的前三名分别对应 200,000、150,000 和 100,000 金币奖励，参赛者可以直接看出不同名次对应的回报。"],
  11: ["围绕家族排名，鼓励成员同时参与幸运礼物和游戏宝箱。", "喜欢幸运礼物和喜欢游戏的成员都能通过开箱贡献同一份家族成绩。进入前三的家族还可选出 20 名成员共享奖励。"],
  12: ["用连续三天的日榜奖励，让参与者每天都有冲榜机会。", "三天内每天的榜首都有机会获得 50,000 金币和为期 7 天的座位框赠送权，冲榜的回报也能通过赠礼分享给别人。"],
  13: ["引导佩戴「NEW」座位框的用户上麦并停留至少 10 分钟。", "把「NEW」座位框变成识别邀请对象的标志。10 分钟门槛把短暂上麦和真正留在麦位参与互动区分开。"],
  14: ["让家族长带动更多成员参与史莱姆赠礼。", "成员送礼触发的合格中奖次数计入家族排名。前 3 名家族的家族长可选出 20 名成员共享金币奖励，同时获得专属头像框。"],
  15: ["把奖励覆盖到每日前十名，给更多参与者争取名次的机会。", "每天参榜的玩家有 10 个获奖名次可争取。上榜者可以从四款星座座位框中选一款，奖励更贴合个人偏好。"],
  16: ["让主播主动欢迎新进房观众，并用饼干礼物承接互动。", "一句招呼让新进房的观众有机会被主播注意到。观众可以用 5 金币饼干礼物回应，而榜单看的是送礼人数，鼓励和更多观众交流。"],
  17: ["通过推荐奖励招募新人，并推动入选者完成首播。", "已有用户可以推荐熟悉的候选人，成功入选后推荐人和新主播都能获得金币，让个人推荐成为一个明确的招募入口。"],
  18: ["把幸运礼物任务与向好友赠送装扮连起来。", "达标后，用户可以把限定座位框送给自己选的人。任务奖励因此有了具体的社交用途。"],
  19: ["用限定星座座位框的赠送权，增加魅力榜榜首的吸引力。", "活动把榜首的魅力成绩转成一份可送给好友的礼物。第一名除 50,000 金币外，还能获得星座座位框赠送权。"],
  20: ["让参与者围绕三天累计收益持续参与幸运礼物活动。", "三天的幸运礼物收益合并排名，某一天排名靠后的参与者仍可在后续两天继续积累。奖励范围覆盖总榜前 50 名。"],
  21: ["用金币返还和专属座位框，让 VIP 权益更直观。", "开通 VIP 后，用户既能收到金币，也能获得可展示的专属座位框，订阅权益在日常使用中更容易感受到。"],
  22: ["通过 Lv.3 与 Lv.4 两档奖励，鼓励参与者达标后继续完成任务。", "达到 Lv.3 就能从头像框和座位框中选一项赠送。愿意继续冲到 Lv.4 的参与者可解锁整套装扮赠送权与 3,000 金币。"],
  23: ["用定制封面吸引主播完成开播任务，尤其是尝试首次开播的用户。", "主播完成 Lv.1 开播任务即可参加当天的抽选。每日 10 个名额提供了多次参与机会，抽中的主播可获得个人定制封面。"],
  24: ["降低单个用户独自冲级的压力，让双人队伍合力达到 Lv.6。", "两位成员的任务等级可以互补，进度较快的一方能帮助队伍越过合计 Lv.6 的门槛。"],
  25: ["用全球榜首奖励带动参与者冲榜与赠礼。", "全球榜首可从星座座位框中选一款使用 30 天，并获得 50,000 金币。限时装扮让榜首成绩在活动结束后仍可展示。"],
  26: ["把双方互赠设为团队任务，鼓励情侣都参与。", "双方互赠的消耗累积到同一进度。达标后获得 7 天限定情侣座位框与 10,000 金币，把任务回报落到成套情侣装扮上。"],
  27: ["以猫头鹰限定座驾激励持续参与幸运礼物活动。", "累计中奖达到 200,000 金币即可解锁奖励。达标玩家能获得 15 天猫头鹰限定座驾和 20,000 金币，把活动成果带回日常使用。"],
  28: ["用首开奖励促进未开通过月 VIP 的用户完成首次订阅。", "首次开通月 VIP 的用户可以同时获得会员权益和 40,000 金币，开通当下就能拿到一份可用的奖励。"],
  29: ["用连续三天达标的奖励，带动玩家第二天和第三天回到游戏。", "进度按天计算，首日达标后第二、第三天仍有明确的回访目标。连续完成三天的参与者可领取 30,000 金币。"],
};

const $ = (selector) => root.querySelector(selector);
const PAGE_SIZE = 6;
const state = { events: [], type: 'event', outfitType: 'frame', page: 1, query: '', series: 'all', sort: 'newest', activeEvent: null, returnFocus: null };
const grid = $('#works-grid');
const empty = $('#empty-state');
const dialog = $('#detail-dialog');
const galleryTools = $('#gallery-tools');
const searchInput = $('#search');
const galleryPanels = [
  { button: $('#search-toggle'), panel: $('#gallery-search'), field: searchInput },
  { button: $('#filter-toggle'), panel: $('#gallery-filters'), field: $('#series') },
];

function setGalleryPanel(openPanel = null) {
  for (const { button, panel } of galleryPanels) {
    const expanded = panel === openPanel;
    button.setAttribute('aria-expanded', String(expanded));
    panel.hidden = !expanded;
  }
}
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
  const main = element('button', 'card-main');
  main.type = 'button';
  main.setAttribute('aria-label', `查看${event.title}的详情`);
  main.setAttribute('aria-haspopup', 'dialog');
  main.addEventListener('click', () => openDetail(event, main));
  const imageBox = element('span', 'card-image');
  const image = element('img');
  image.src = event.image;
  image.alt = `${event.title} 活动横幅`;
  image.width = 1044;
  image.height = 252;
  image.loading = 'lazy';
  image.decoding = 'async';
  imageBox.append(image);
  const body = element('span', 'card-body');
  body.append(element('span', 'card-title', event.title), element('span', 'series-tag', event.series));
  const footer = element('span', 'card-footer');
  footer.append(element('span', '', '查看作品详情'), element('span', '', '→'));
  main.append(imageBox, body, footer);
  card.append(main);
  return card;
}

function render() {
  grid.replaceChildren();
  empty.replaceChildren();
  const isEvents = state.type === 'event';
  galleryTools.hidden = !isEvents;
  $('#results-line').hidden = !isEvents;
  $('#outfit-content').hidden = isEvents;
  $('#pagination').hidden = true;
  grid.hidden = !isEvents;
  empty.hidden = true;
  if (!isEvents) {
    renderOutfits();
    return;
  }
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
      setGalleryPanel($('#gallery-search'));
      searchInput.focus();
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
  if (type !== 'event') setGalleryPanel();
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
  $('#detail-series').textContent = event.series;
  $('#detail-description').textContent = event.description;
  const [goal, effect] = EVENT_IMPACT[event.id];
  $('#detail-goal').textContent = goal;
  $('#detail-effect').textContent = effect;
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

for (const { button, panel, field } of galleryPanels) {
  button.addEventListener('click', () => {
    const expand = panel.hidden;
    setGalleryPanel(expand ? panel : null);
    if (expand) field.focus();
  });
}

document.addEventListener('click', event => {
  if (!galleryTools.contains(event.target) && galleryPanels.some(({ panel }) => !panel.hidden)) {
    setGalleryPanel();
  }
});

root.addEventListener('keydown', event => {
  if (event.key === 'Escape' && !dialog.open && !outfitDialog.open) {
    const current = galleryPanels.find(({ panel }) => !panel.hidden);
    if (current) {
      event.preventDefault();
      setGalleryPanel();
      current.button.focus();
    }
  }
  if (event.key === '/' && !dialog.open && !outfitDialog.open && !['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement.tagName)) {
    event.preventDefault();
    selectType('event');
    setGalleryPanel($('#gallery-search'));
    searchInput.focus();
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
let outfitAudioContext;
let outfitAudioRequest;
let outfitAudioSource;

function renderOutfits() {
  const category = state.outfitType;
  const rows = outfitRows.filter(row => row.category === category &&
    (category === 'ride' || row.group === outfitGroup));
  rows.sort((a, b) => Number(Boolean(b.motion)) - Number(Boolean(a.motion)));
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
    button.setAttribute('aria-label', row.motion ? `播放 ${row.title}` : `预览 ${row.title}`);
    button.setAttribute('aria-haspopup', 'dialog');
    const media = element('span', 'outfit-thumb');
    media.classList.toggle('is-avatar', category === 'frame');
    media.classList.toggle('is-ride', category === 'ride');
    media.classList.toggle('is-portrait-ride', category === 'ride' && row.group === '3:4');
    const image = element('img');
    if (index < 3) image.fetchPriority = 'high';
    else image.loading = 'lazy';
    image.src = row.cover;
    image.alt = '';
    const controls = element('span', 'outfit-card-controls');
    media.append(image);
    if (row.motion) {
      const playIcon = element('span', 'outfit-play-icon');
      playIcon.setAttribute('aria-hidden', 'true');
      controls.append(playIcon);
    }
    button.append(media, controls, element('span', 'outfit-card-copy', row.title));
    button.addEventListener('click', () => openOutfitPreview(row, button));
    card.append(button);
    cards.append(card);
  }
  outfitGallery.append(cards);
  if (pages <= 1) return;
  const pagination = element('nav', 'pagination');
  if (category === 'ride') pagination.classList.add('ride-pagination');
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
      if (category !== 'ride') {
        outfitGallery.scrollIntoView({ block: 'start', behavior: reduceMotion() ? 'instant' : 'smooth' });
      }
      outfitGallery.querySelector('[aria-current="page"]').focus({ preventScroll: true });
    });
    return b;
  };
  const numbers = element('div', 'page-numbers');
  for (let p = 1; p <= pages; p++) numbers.append(button(String(p), p, false, p === outfitPage));
  pagination.append(button('上一页', outfitPage - 1, outfitPage === 1), numbers, button('下一页', outfitPage + 1, outfitPage === pages));
  if (category === 'ride') cards.before(pagination);
  else outfitGallery.append(pagination);
}

function outfitPoster(row) {
  const image = element('img');
  image.src = row.cover;
  image.alt = row.title;
  image.width = row.width;
  image.height = row.height;
  return image;
}

function openOutfitPreview(row, trigger) {
  outfitTrigger = trigger;
  outfitStage.classList.toggle('is-avatar', row.category === 'frame');
  outfitStage.classList.toggle('is-ride', row.category === 'ride');
  outfitStage.classList.toggle('is-portrait-ride', row.category === 'ride' && row.group === '3:4');
  $('#outfit-preview-title').textContent = row.title;
  outfitStage.replaceChildren(outfitPoster(row));
  outfitPNG.src = row.png;
  outfitPNG.alt = `${row.title}的透明缩略图`;
  outfitStatus.hidden = true;
  outfitDialog.showModal();
  $('#close-outfit-preview').focus();
  if (row.motion) void playOutfitPreview(row);
}

async function playOutfitPreview(row) {
  const request = ++outfitRequest;
  const isCurrent = () => request === outfitRequest && outfitDialog.open;
  outfitStatus.textContent = '正在载入动效…';
  outfitStatus.hidden = false;
  const soundPromise = loadOutfitSound(row.audio);
  try {
    const image = await loadOutfitMotion(row);
    if (!isCurrent()) return;
    outfitStage.replaceChildren(image);
    outfitStatus.hidden = true;
    const startedAt = performance.now();
    const sound = await soundPromise;
    if (!isCurrent()) return;
    if (sound && outfitAudioContext.state === 'running') {
      const duration = Math.min(row.audio.durationMs / 1000, sound.duration);
      outfitAudioSource = outfitAudioContext.createBufferSource();
      outfitAudioSource.buffer = sound;
      outfitAudioSource.loop = true;
      outfitAudioSource.loopEnd = duration;
      outfitAudioSource.connect(outfitAudioContext.destination);
      outfitAudioSource.start(0, ((performance.now() - startedAt) / 1000) % duration);
    } else if (row.audio) {
      outfitStatus.textContent = '声音暂时无法播放。';
      outfitStatus.hidden = false;
    }
  } catch {
    if (!isCurrent()) return;
    outfitAudioRequest?.abort();
    outfitStatus.textContent = '此浏览器暂时无法播放动效，可以查看静态预览。';
    outfitStatus.hidden = false;
  }
}

function loadOutfitMotion(row) {
  return new Promise((resolve, reject) => {
    const image = element('img');
    image.alt = row.title;
    image.fetchPriority = 'high';
    image.onload = () => resolve(image);
    image.onerror = reject;
    image.src = row.motion;
  });
}

async function loadOutfitSound(audio) {
  if (!audio) return null;
  try {
    outfitAudioContext ??= new AudioContext();
    outfitAudioRequest = new AbortController();
    // Resume in the tap handler, but don't let mobile audio policy delay the image.
    void outfitAudioContext.resume().catch(() => {});
    const response = await fetch(audio.file, { signal: outfitAudioRequest.signal });
    if (!response.ok) return null;
    return await outfitAudioContext.decodeAudioData(await response.arrayBuffer());
  } catch {
    return null;
  }
}

$('#close-outfit-preview').addEventListener('click', () => outfitDialog.close());
outfitDialog.addEventListener('close', () => {
  outfitRequest++;
  outfitAudioRequest?.abort();
  outfitAudioRequest = null;
  if (outfitAudioSource) {
    outfitAudioSource.stop();
    outfitAudioSource.disconnect();
    outfitAudioSource = null;
  }
  outfitStage.replaceChildren();
  outfitPNG.removeAttribute('src');
  outfitTrigger?.focus({ preventScroll: true });
  outfitTrigger = null;
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
