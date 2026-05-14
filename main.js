const navItems = ["Tổng quan", "Hiệu suất SEO chi tiết", "Google Search Console", "GA4 Organic", "Landing Pages", "Từ khóa", "Chuyển đổi", "Chẩn đoán SEO", "Xuất báo cáo", "Cài đặt"];

const kpis = [
  { title: "Tổng traffic từ SEO", value: "150,968", badge: "GA4", tone: "warning", icon: "↗" },
  { title: "Chương trình đang tăng trưởng", value: "4", badge: "Theo GSC", tone: "positive", icon: "▲" },
  { title: "Chương trình cần chú ý", value: "3", badge: "Cần theo dõi", tone: "warning", icon: "!" },
  { title: "Từ khóa trong Top 10", value: "940", badge: "GSC Top 1000", tone: "positive", icon: "★" },
];

const programs = [
  { groupName: "Lao động", accent: "green", rows: [
    ["Định cư LĐ Mỹ EB3", "4,249", "eb3 là diện gì", "#2", "Tăng", "EB3: hiện tại 55 lead, 14 QL và 2 hợp đồng; quá khứ 100 lead nhưng chỉ 1 QL", "warning"],
    ["Định cư Lao động Úc", "640", "làm farm ở úc", "#4", "Ổn định", "Có traffic từ query lao động/farm; cần mở rộng landing page chuyển đổi", "opportunity"],
  ]},
  { groupName: "Đầu tư", accent: "blue", rows: [
    ["Đầu tư NewZealand (AIP, BIV)", "111", "định cư new zealand 2025", "#5", "Tăng", "Có tín hiệu tốt nhưng traffic còn nhỏ", "opportunity"],
    ["Đầu tư Mỹ EB5", "1,032", "định cư mỹ eb5", "#13", "Cần đẩy", "Impressions cao, ranking/query chính cần tiếp tục tối ưu", "warning"],
    ["Golden Visa Châu Âu", "1,549", "liên minh châu âu", "#6", "Theo dõi", "Nhiều impressions; cần tách nhóm Golden Visa khỏi query thông tin rộng", "warning"],
  ]},
  { groupName: "Quốc tịch", accent: "purple", rows: [
    ["Quốc tịch Pháp", "1,698", "quốc tịch pháp", "#5", "Tăng", "Traffic tốt từ cụm nội dung Pháp; tiếp tục giữ top", "good"],
    ["Quốc tịch Hungary", "3,006", "định cư hungary", "#6", "Ổn định", "Traffic tốt; cần tối ưu thêm query quốc tịch/chương trình", "good"],
    ["Quốc tịch Bulgaria", "136", "bulgaria gia nhập schengen", "#7", "Theo dõi", "Query chính về quốc tịch cần tiếp tục mở rộng", "warning"],
    ["Quốc tịch Thụy Sĩ", "94", "định cư thụy sĩ", "#4", "Cần đẩy", "Có top với query định cư; cần đẩy query quốc tịch/chuyển đổi", "warning"],
  ]},
];

const keywords = [
  ["si group", "Brand", "Navigational", "2,136", "10,392", "20.55%", "6.23", "Stable"],
  ["số hộ chiếu", "Blog", "Informational", "1,118", "10,556", "10.59%", "1.45", "Stable"],
  ["số hộ chiếu là gì", "Blog", "Informational", "636", "5,084", "12.51%", "1.59", "Stable"],
  ["sigroup", "Brand", "Navigational", "581", "3,623", "16.04%", "5.97", "Stable"],
  ["eb3 là diện gì", "Service", "Informational", "282", "4,496", "6.27%", "1.67", "Opportunity"],
  ["liên minh châu âu", "Blog", "Informational", "224", "43,484", "0.52%", "5.75", "Need Optimization"],
  ["làm farm ở úc", "Service", "Commercial", "144", "1,675", "8.60%", "3.96", "Opportunity"],
];

const pages = [
  ["/tin-tuc/passport-number-la-gi/", "Blog", "11,742", "245,208", "4.79%", "5.58", "Growing"],
  ["/tin-tuc/eu-la-gi/", "Blog", "5,066", "644,384", "0.79%", "4.98", "Needs Attention"],
  ["/tin-tuc/luong-trung-binh-o-my/", "Blog", "4,571", "177,059", "2.58%", "4.67", "Growing"],
  ["/tin-tuc/dinh-cu-my-eb-3/", "EB3", "2,166", "122,387", "1.77%", "4.64", "Opportunity"],
  ["/", "Brand", "4,038", "66,843", "6.04%", "4.62", "Stable"],
];

const insights = [
  { title: "Lead 1 năm duy trì ổn định", text: "Lead giai đoạn 01/05/2025 - 11/05/2026 đạt 190. Qualified lead tăng mạnh từ 7 lên 28 lead, phản ánh chất lượng lead cải thiện rõ rệt." },
  { title: "QL lead tăng mạnh", text: "Qualified lead tăng từ 7 lên 28 lead, tương đương +300% và gấp 4 lần mốc trước. Riêng EB3 hiện có 55 lead, 14 QL và 2 hợp đồng." },
  { title: "Mobile chiếm phần lớn clicks", text: "Mobile đóng góp khoảng 70% clicks GSC; cần tiếp tục ưu tiên trải nghiệm và CTA mobile." },
];

function renderNav(active) {
  document.getElementById('nav').innerHTML = navItems.map(item => `<button class="${item === active ? 'active' : ''}" data-page="${item}">${item}</button>`).join('');
  document.querySelectorAll('#nav button').forEach(btn => btn.addEventListener('click', () => renderPage(btn.dataset.page)));
}

function renderKpis() {
  return `<div class="kpis">${kpis.map(k => `<div class="card kpi ${k.tone}"><div class="kpi-top"><div class="kpi-icon">${k.icon}</div><span class="badge">${k.badge}</span></div><div class="kpi-value">${k.value}</div><div class="kpi-title">${k.title}</div></div>`).join('')}</div>`;
}

function renderSummary() {
  return `<section class="card summary">
    <div class="summary-head"><h2>Tóm tắt nhanh</h2><span class="pill">Lead theo mốc 1 năm</span></div>
    <div class="insights">
      <div class="insight"><span class="dot green">✓</span><span>GA4 ghi nhận 150.968 active users trong kỳ; Google Search Console ghi nhận 167.157 clicks và 8.393.515 impressions.</span></div>
      <div class="insight"><span class="dot blue">★</span><span>Nhóm Lao động đang mang traffic tốt nhất trong nhóm chương trình, nổi bật là EB3 và các nội dung lao động Úc.</span></div>
      <div class="insight"><span class="dot purple">●</span><span>Nhóm Quốc tịch có tín hiệu ổn ở Pháp/Hungary; Bulgaria và Thụy Sĩ cần tiếp tục đẩy query chính theo chương trình.</span></div>
    </div>
    <div class="lead-grid">
      <div class="lead-box">
        <div class="label">Lead hiện tại · 01/05/2025 - 11/05/2026</div>
        <div><span class="big">190</span> <span class="badge red">-8.7%</span></div>
        <p class="lead-note">Lead duy trì ở mức tốt trong kỳ báo cáo; tiếp tục theo dõi chất lượng nguồn lead và tối ưu CTA theo từng chương trình.</p>
      </div>
      <div class="lead-box green">
        <div class="label">Qualified lead</div>
        <div><span class="big">28</span> <span class="badge white">+300%</span></div>
        <p class="lead-note">Qualified lead tăng từ 7 lên 28 lead · tăng gấp 4 lần so với mốc 7 lead.</p>
      </div>
    </div>
  </section>`;
}

function renderProgramGroups() {
  return programs.map(group => `<section class="card group ${group.accent}">
    <div class="group-head"><div class="group-accent"></div><h3>Nhóm ${group.groupName}</h3></div>
    <div class="table-wrap"><table><thead><tr><th>Chương trình</th><th>Traffic</th><th>Từ khóa top</th><th>Top hiện tại</th><th>Xu hướng</th><th>Vấn đề / Ghi chú</th></tr></thead>
    <tbody>${group.rows.map(r => `<tr><td class="program-name">${r[0]}</td><td>${r[1]}</td><td>${r[2]}</td><td>${r[3]}</td><td class="trend ${r[4] === 'Tăng' ? 'up' : r[4] === 'Theo dõi' ? 'down' : 'stable'}">${r[4]}</td><td><span class="status ${r[6]}">${r[5]}</span></td></tr>`).join('')}</tbody></table></div>
  </section>`).join('');
}

function renderTable(title, headers, rows) {
  return `<section class="card group"><div class="group-head"><div class="group-accent" style="background:#2563eb"></div><h3>${title}</h3></div><div class="table-wrap"><table><thead><tr>${headers.map(h => `<th>${h}</th>`).join('')}</tr></thead><tbody>${rows.map(row => `<tr>${row.map((c,i) => `<td class="${i===0?'program-name':''}">${c}</td>`).join('')}</tr>`).join('')}</tbody></table></div></section>`;
}

function renderOverview() {
  return `<h2 class="section-title">Tổng quan</h2><p class="section-desc">Báo cáo tổng quan SEO theo chương trình, tập trung vào traffic, từ khóa top và nhóm cần xử lý cho cấp quản lý.</p>${renderSummary()}${renderKpis()}${renderProgramGroups()}<div class="attention"><div class="attention-card"><h4>Lead 1 năm hiện tại: 190 lead</h4><p>Lead giai đoạn 01/05/2025 - 11/05/2026 đạt 190 lead. Qualified lead tăng mạnh từ 7 lên 28 lead, cho thấy chất lượng lead đang cải thiện rõ rệt.</p></div><div class="attention-card"><h4>EB3 cải thiện mạnh về chất lượng lead</h4><p>Quá khứ EB3 có 100 lead nhưng chỉ 1 lead QL. Hiện tại EB3 có 55 lead, trong đó 14 lead QL và đã có 2 hợp đồng.</p></div></div><div class="footer-note">Ghi chú: Các số liệu hiện đang dùng dữ liệu GA4.xlsx, GC.xlsx và lead note nội bộ. Phase 2 có thể kết nối API GA4/GSC trực tiếp.</div>`;
}

function renderDetailed() {
  return `<h2 class="section-title">Hiệu suất SEO chi tiết</h2><p class="section-desc">Clicks, impressions, CTR, organic users, leads và conversion.</p>${renderKpis()}<div class="chart-grid"><div class="card simple-card"><h3>Clicks & Impressions</h3><div class="bar-chart">${[45,58,62,49,73,88,67,92,80,96].map(v=>`<div class="bar" style="height:${v}%"></div>`).join('')}</div></div><div class="card simple-card"><h3>Traffic by Device</h3><p>Mobile: 116,869 clicks · Desktop: 48,401 clicks · Tablet: 1,887 clicks</p></div></div>${renderTable('Top landing pages', ['Landing page','Group','Clicks','Impressions','CTR','Position','Status'], pages)}${renderTable('Top queries', ['Keyword','Group','Intent','Clicks','Impressions','CTR','Position','Status'], keywords)}`;
}

function renderSimplePage(title, desc) {
  return `<h2 class="section-title">${title}</h2><p class="section-desc">${desc}</p><div class="simple-grid"><div class="card simple-card"><h3>Organic Clicks</h3><p>167,157 clicks từ Google Search Console.</p></div><div class="card simple-card"><h3>Lead hiện tại</h3><p>190 leads trong giai đoạn 01/05/2025 - 11/05/2026.</p></div><div class="card simple-card"><h3>Qualified Lead</h3><p>28 qualified leads, tăng từ 7 lên 28.</p></div></div>${title.includes('Keyword') || title.includes('Từ khóa') ? renderTable('Keyword performance', ['Keyword','Group','Intent','Clicks','Impressions','CTR','Position','Status'], keywords) : renderTable('Landing page performance', ['Landing page','Group','Clicks','Impressions','CTR','Position','Status'], pages)}`;
}

function renderDiagnosis() {
  return `<h2 class="section-title">Chẩn đoán SEO</h2><p class="section-desc">Insight, nguyên nhân và action plan.</p><div class="simple-grid">${insights.map(i=>`<div class="card simple-card"><h3>${i.title}</h3><p>${i.text}</p></div>`).join('')}</div>`;
}

function renderExport() {
  return `<h2 class="section-title">Xuất báo cáo</h2><p class="section-desc">Preview nội dung trước khi xuất PDF/CSV.</p><div class="card simple-card"><h3>Executive Summary</h3><p>Trong kỳ báo cáo này, SEO ghi nhận visibility và organic traffic ổn định. Nhóm EB3 có chất lượng lead cải thiện rõ rệt với 14 QL và 2 hợp đồng. Qualified lead tổng tăng từ 7 lên 28 lead.</p><button class="btn primary">Generate PDF</button> <button class="btn secondary">Download CSV</button></div>`;
}

function renderPage(page) {
  renderNav(page);
  document.getElementById('pageTitle').textContent = page === 'Tổng quan' ? 'Báo cáo tổng quan SEO theo chương trình' : page;
  const content = document.getElementById('content');
  if (page === 'Tổng quan') content.innerHTML = renderOverview();
  else if (page === 'Hiệu suất SEO chi tiết') content.innerHTML = renderDetailed();
  else if (page === 'Chẩn đoán SEO') content.innerHTML = renderDiagnosis();
  else if (page === 'Xuất báo cáo') content.innerHTML = renderExport();
  else if (page === 'Cài đặt') content.innerHTML = renderSimplePage('Cài đặt', 'Placeholder cấu hình project, GA4 Property ID, GSC Property, mapping conversion và logo báo cáo.');
  else content.innerHTML = renderSimplePage(page, 'Dữ liệu mock đã được cập nhật từ GA4.xlsx, GC.xlsx và lead note nội bộ.');
}

renderPage('Tổng quan');