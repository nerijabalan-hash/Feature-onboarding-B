// =============================================
// PowerPoint Interface – Sorting of Assets
// =============================================

// --- Mock Data ---
const MOCK_DATA = {
  folders: [
    { id: 'f1', name: 'Global', type: 'folder', modified: '2026-03-13T14:30:00' },
    { id: 'f2', name: 'Product', type: 'folder', modified: '2026-03-10T09:15:00' },
    { id: 'f3', name: 'Commercial (NEW)', type: 'folder', modified: '2026-03-08T16:45:00' },
  ],
  slides: [
    { id: 'a1', name: 'Introduction to academy', type: 'slide', modified: '2026-03-14T10:30:00', color: 1 },
    { id: 'a2', name: 'Our market analysis', type: 'slide', modified: '2026-03-14T08:00:00', color: 2 },
    { id: 'a3', name: 'Competitive edge', type: 'slide', modified: '2026-03-13T14:20:00', color: 3 },
    { id: 'a4', name: 'Personalized engagement', type: 'slide', modified: '2026-03-12T09:45:00', color: 4 },
    { id: 'a5', name: 'Competitive landscape', type: 'slide', modified: '2026-03-10T15:10:00', color: 5 },
    { id: 'a6', name: 'Diverse range of solutions', type: 'slide', modified: '2026-03-08T08:00:00', color: 1 },
    { id: 'a7', name: 'Building long-term relationships', type: 'slide', modified: '2026-03-05T11:30:00', color: 3 },
    { id: 'a8', name: 'Market demands', type: 'slide', modified: '2026-03-01T09:00:00', color: 2 },
    { id: 'a9', name: 'Industry overview', type: 'slide', modified: '2026-02-20T14:00:00', color: 4 },
    { id: 'a10', name: 'Product roadmap', type: 'slide', modified: '2026-03-14T11:45:00', color: 2 },
    { id: 'a11', name: 'Feature highlights', type: 'slide', modified: '2026-03-11T11:30:00', color: 1 },
    { id: 'a12', name: 'Technical architecture', type: 'slide', modified: '2026-03-07T14:00:00', color: 3 },
  ],
  folderContents: {
    f1: {
      folders: [],
      slides: [
        { id: 'g1', name: 'Company overview', type: 'slide', modified: '2026-03-12T10:00:00', color: 1 },
        { id: 'g2', name: 'Mission and values', type: 'slide', modified: '2026-03-10T14:00:00', color: 2 },
        { id: 'g3', name: 'Leadership team', type: 'slide', modified: '2026-03-08T09:00:00', color: 4 },
      ],
    },
    f2: {
      folders: [],
      slides: [
        { id: 'p1', name: 'Product roadmap', type: 'slide', modified: '2026-03-14T12:00:00', color: 2 },
        { id: 'p2', name: 'Feature prioritization', type: 'slide', modified: '2026-03-13T16:30:00', color: 1 },
        { id: 'p3', name: 'Sprint velocity', type: 'slide', modified: '2026-03-13T11:00:00', color: 5 },
        { id: 'p4', name: 'User research findings', type: 'slide', modified: '2026-03-12T15:45:00', color: 3 },
        { id: 'p5', name: 'Platform architecture', type: 'slide', modified: '2026-03-12T09:30:00', color: 4 },
        { id: 'p6', name: 'API integration plan', type: 'slide', modified: '2026-03-11T14:00:00', color: 2 },
        { id: 'p7', name: 'Mobile app strategy', type: 'slide', modified: '2026-03-11T08:15:00', color: 1 },
        { id: 'p8', name: 'Performance benchmarks', type: 'slide', modified: '2026-03-10T16:00:00', color: 5 },
        { id: 'p9', name: 'Security compliance', type: 'slide', modified: '2026-03-10T10:30:00', color: 3 },
        { id: 'p10', name: 'Data pipeline overview', type: 'slide', modified: '2026-03-09T13:00:00', color: 4 },
        { id: 'p11', name: 'Release schedule Q2', type: 'slide', modified: '2026-03-08T11:00:00', color: 2 },
        { id: 'p12', name: 'Customer feedback summary', type: 'slide', modified: '2026-03-07T15:30:00', color: 1 },
        { id: 'p13', name: 'Onboarding flow redesign', type: 'slide', modified: '2026-03-06T09:00:00', color: 3 },
        { id: 'p14', name: 'Analytics dashboard', type: 'slide', modified: '2026-03-05T14:00:00', color: 5 },
        { id: 'p15', name: 'Accessibility audit results', type: 'slide', modified: '2026-03-04T10:00:00', color: 4 },
        { id: 'p16', name: 'Localization roadmap', type: 'slide', modified: '2026-03-03T08:30:00', color: 2 },
        { id: 'p17', name: 'Design system updates', type: 'slide', modified: '2026-03-02T12:00:00', color: 1 },
        { id: 'p18', name: 'Infrastructure cost analysis', type: 'slide', modified: '2026-02-28T16:00:00', color: 3 },
      ],
    },
    f3: {
      folders: [],
      slides: [
        { id: 'c1', name: 'Sales enablement deck', type: 'slide', modified: '2026-03-11T10:00:00', color: 1 },
        { id: 'c2', name: 'Pricing strategy', type: 'slide', modified: '2026-03-09T14:30:00', color: 5 },
        { id: 'c3', name: 'Partner program overview', type: 'slide', modified: '2026-03-07T09:00:00', color: 2 },
      ],
    },
  },
};

// Slide thumbnails data
const SLIDES = [
  { num: 1, title: 'Product Initiatives', sub: 'Strategic roadmap and priorities', hasLogo: true },
  { num: 2, title: 'Product roadmap', sub: 'Key milestones and timeline', hasChart: false },
  { num: 3, title: 'Feature highlights', sub: 'What we are building', hasChart: false },
  { num: 4, title: 'Market demands', sub: 'Customer needs and trends', hasChart: true },
  { num: 5, title: 'Competitive landscape', sub: 'Positioning and differentiation', hasChart: true },
  { num: 6, title: 'Industry overview', sub: 'Market context and opportunity', hasChart: true },
];

// --- State ---
let currentSort = 'name-asc';
let currentFolder = null;
let searchQuery = '';
let viewMode = 'grid'; // 'grid' or 'list'

// --- DOM ---
const sortBtn = document.getElementById('sortBtn');
const sortDropdown = document.getElementById('sortDropdown');
const assetList = document.getElementById('assetList');
const searchInput = document.getElementById('searchInput');

// --- Generate slide thumbnails ---
function renderSlideThumbnails() {
  const container = document.getElementById('slideThumbnails');
  container.innerHTML = '';

  SLIDES.forEach((slide, i) => {
    const wrapper = document.createElement('div');
    wrapper.className = `slide-thumb-wrapper${i === 0 ? ' active' : ''}`;
    wrapper.innerHTML = `
      <span class="slide-num">${slide.num}</span>
      <div class="slide-thumb">
        <div class="slide-thumb-content">
          <div class="mini-title">${slide.title}</div>
          <div class="mini-sub">${slide.sub}</div>
          <div class="slide-thumb-deco"></div>
        </div>
      </div>
    `;
    wrapper.addEventListener('click', () => {
      document.querySelectorAll('.slide-thumb-wrapper').forEach(w => w.classList.remove('active'));
      wrapper.classList.add('active');
    });
    container.appendChild(wrapper);
  });
}

// --- Sort Icon SVGs ---
const SORT_ICONS = {
  'name-asc': `<svg viewBox="0 0 13 12" width="14" height="13"><path d="M1.5 1v10M1.5 11L0 9.5M1.5 11L3 9.5" stroke="#464646" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" fill="none"/><text x="6" y="5" font-size="5.5" font-weight="700" fill="#464646" font-family="Segoe UI, sans-serif">A</text><text x="6" y="11" font-size="5.5" font-weight="700" fill="#464646" font-family="Segoe UI, sans-serif">Z</text></svg>`,
  'name-desc': `<svg viewBox="0 0 13 12" width="14" height="13"><path d="M1.5 11V1M1.5 1L0 2.5M1.5 1L3 2.5" stroke="#464646" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" fill="none"/><text x="6" y="5" font-size="5.5" font-weight="700" fill="#464646" font-family="Segoe UI, sans-serif">Z</text><text x="6" y="11" font-size="5.5" font-weight="700" fill="#464646" font-family="Segoe UI, sans-serif">A</text></svg>`,
  'date-desc': `<svg viewBox="0 0 12 12" width="14" height="13"><path d="M1.5 1v10M1.5 11L0 9.5M1.5 11L3 9.5" stroke="#464646" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" fill="none"/><path d="M5.5 3h6M5.5 6h4.5M5.5 9h3" stroke="#464646" stroke-width="1.2" stroke-linecap="round" fill="none"/></svg>`,
  'date-asc': `<svg viewBox="0 0 12 12" width="14" height="13"><path d="M1.5 11V1M1.5 1L0 2.5M1.5 1L3 2.5" stroke="#464646" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" fill="none"/><path d="M5.5 3h3M5.5 6h4.5M5.5 9h6" stroke="#464646" stroke-width="1.2" stroke-linecap="round" fill="none"/></svg>`,
};

function updateSortIcon() {
  sortBtn.innerHTML = SORT_ICONS[currentSort] || SORT_ICONS['name-asc'];
}

// --- Sort Dropdown ---
sortBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  const isOpen = sortDropdown.classList.toggle('open');
  sortBtn.setAttribute('aria-expanded', isOpen);
});

document.addEventListener('click', () => {
  sortDropdown.classList.remove('open');
  sortBtn.setAttribute('aria-expanded', 'false');
});

sortDropdown.addEventListener('click', (e) => {
  e.stopPropagation();
});

document.querySelectorAll('.sort-option').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.sort-option').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentSort = btn.dataset.sort;
    sortDropdown.classList.remove('open');
    sortBtn.setAttribute('aria-expanded', 'false');
    updateSortIcon();
    render();
  });
});

// --- Search ---
searchInput.addEventListener('input', (e) => {
  searchQuery = e.target.value.toLowerCase();
  render();
});

// --- Tab switching ---
document.querySelectorAll('.pane-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.pane-tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    render();
  });
});

// --- Ribbon tab switching ---
document.querySelectorAll('.ribbon-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.ribbon-tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
  });
});

// --- Sorting ---
function sortItems(items, sortKey) {
  const sorted = [...items];
  switch (sortKey) {
    case 'name-asc':
      sorted.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case 'name-desc':
      sorted.sort((a, b) => b.name.localeCompare(a.name));
      break;
    case 'date-desc':
      sorted.sort((a, b) => new Date(b.modified) - new Date(a.modified));
      break;
    case 'date-asc':
      sorted.sort((a, b) => new Date(a.modified) - new Date(b.modified));
      break;
  }
  return sorted;
}

function formatDate(dateStr) {
  const d = new Date(dateStr);
  const now = new Date();
  const diff = now - d;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  if (days === 0) return 'Today';
  if (days === 1) return 'Yesterday';
  if (days < 7) return `${days} days ago`;
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

// --- SVG Helpers ---
function folderThumbSvg() {
  return `<svg viewBox="0 0 48 48" width="32" height="32" fill="none">
    <rect x="8" y="12" width="32" height="24" rx="3" fill="#d8d8d8" stroke="#c0c0c0" stroke-width="1"/>
    <path d="M8 15a3 3 0 013-3h8l3 3h15a3 3 0 013 3v1H8v-4z" fill="#c8c8c8"/>
  </svg>`;
}

function folderSvg() {
  return `<svg viewBox="0 0 20 20" fill="none">
    <path d="M2 5a2 2 0 012-2h3.172a2 2 0 011.414.586l1.828 1.828A2 2 0 0011.828 6H16a2 2 0 012 2v7a2 2 0 01-2 2H4a2 2 0 01-2-2V5z" fill="#c0c0c0" stroke="#a8a8a8" stroke-width=".5"/>
  </svg>`;
}

function backArrowSvg() {
  return `<svg viewBox="0 0 16 16" fill="none">
    <path d="M10 3L5 8l5 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`;
}

// --- Date Grouping ---
function getDateGroup(dateStr) {
  const d = new Date(dateStr);
  const now = new Date();
  const diffMs = now - d;
  const diffHours = diffMs / (1000 * 60 * 60);
  const diffDays = diffMs / (1000 * 60 * 60 * 24);

  if (diffHours <= 24) return 'Last 24 hours';
  if (diffDays <= 7) return 'Last 7 days';
  if (diffDays <= 14) return 'Last 14 days';
  if (diffDays <= 30) return 'Last 30 days';
  return 'Older';
}

const DATE_GROUP_ORDER = ['Last 24 hours', 'Last 7 days', 'Last 14 days', 'Last 30 days', 'Older'];

function groupByDate(items) {
  const groups = {};
  items.forEach(item => {
    const group = getDateGroup(item.modified);
    if (!groups[group]) groups[group] = [];
    groups[group].push(item);
  });
  return groups;
}

function isDateSort() {
  return currentSort === 'date-desc' || currentSort === 'date-asc';
}

function renderAssetCard(asset) {
  const card = document.createElement('div');
  card.className = 'asset-card';
  card.draggable = true;
  card.innerHTML = `
    <div class="asset-card-thumb color-${asset.color}">
      <svg viewBox="0 0 158 89" width="100%" height="100%" fill="none" preserveAspectRatio="xMidYMid meet">
        <rect width="158" height="89" rx="2" fill="#f0f0f0"/>
        <rect x="12" y="10" width="60" height="30" rx="2" fill="#ccc" opacity=".4"/>
        <rect x="12" y="48" width="134" height="6" rx="2" fill="#ddd" opacity=".5"/>
        <rect x="12" y="60" width="100" height="5" rx="2" fill="#ddd" opacity=".3"/>
        <rect x="12" y="72" width="80" height="4" rx="2" fill="#ddd" opacity=".2"/>
      </svg>
    </div>
    <div class="asset-card-name">${asset.name}</div>
    <div class="asset-card-tooltip">${asset.name}</div>
  `;

  card.addEventListener('dragstart', (e) => {
    card.classList.add('dragging');
    e.dataTransfer.effectAllowed = 'copy';
    e.dataTransfer.setData('application/json', JSON.stringify({ name: asset.name, color: asset.color }));
  });

  card.addEventListener('dragend', () => {
    card.classList.remove('dragging');
  });

  return card;
}

// --- Render ---
function render() {
  assetList.innerHTML = '';

  // If inside a folder, show its contents with a back button
  if (currentFolder) {
    const folderData = MOCK_DATA.folderContents[currentFolder];
    const folderInfo = MOCK_DATA.folders.find(f => f.id === currentFolder);
    if (!folderData) { currentFolder = null; render(); return; }

    // Back breadcrumb
    const breadcrumb = document.createElement('div');
    breadcrumb.className = 'breadcrumb';
    breadcrumb.innerHTML = `${backArrowSvg()} <span>${folderInfo ? folderInfo.name : 'Back'}</span>`;
    breadcrumb.addEventListener('click', () => { currentFolder = null; render(); });
    assetList.appendChild(breadcrumb);

    let folders = folderData.folders || [];
    let slides = folderData.slides || [];

    if (searchQuery) {
      folders = folders.filter(f => f.name.toLowerCase().includes(searchQuery));
      slides = slides.filter(s => s.name.toLowerCase().includes(searchQuery));
    }

    if (folders.length === 0 && slides.length === 0) {
      assetList.insertAdjacentHTML('beforeend', renderEmptyState());
      return;
    }

    const sortedFolders = sortItems(folders, currentSort);
    const sortedSlides = sortItems(slides, currentSort);

    if (isDateSort()) {
      const allItems = [...sortedFolders, ...sortedSlides];
      const sorted = sortItems(allItems, currentSort);
      renderGroupedItems(sorted);
    } else {
      renderFlatFolders(sortedFolders);
      if (sortedSlides.length > 0) {
        const grid = document.createElement('div');
        grid.className = 'asset-card-grid';
        sortedSlides.forEach(slide => grid.appendChild(renderAssetCard(slide)));
        assetList.appendChild(grid);
      }
    }
    return;
  }

  // Root level
  let folders = MOCK_DATA.folders;
  let slides = MOCK_DATA.slides;

  if (searchQuery) {
    folders = folders.filter(f => f.name.toLowerCase().includes(searchQuery));
    slides = slides.filter(s => s.name.toLowerCase().includes(searchQuery));
  }

  if (folders.length === 0 && slides.length === 0) {
    assetList.innerHTML = renderEmptyState();
    return;
  }

  if (isDateSort()) {
    const allItems = [
      ...sortItems(folders, currentSort),
      ...sortItems(slides, currentSort),
    ];
    const sorted = sortItems(allItems, currentSort);
    renderGroupedItems(sorted);
  } else {
    const sortedFolders = sortItems(folders, currentSort);
    const sortedSlides = sortItems(slides, currentSort);
    renderFlatFolders(sortedFolders);
    if (sortedSlides.length > 0) {
      const grid = document.createElement('div');
      grid.className = 'asset-card-grid';
      sortedSlides.forEach(slide => grid.appendChild(renderAssetCard(slide)));
      assetList.appendChild(grid);
    }
  }
}

function renderGroupedItems(sorted) {
  const groups = groupByDate(sorted);
  const order = currentSort === 'date-asc' ? [...DATE_GROUP_ORDER].reverse() : DATE_GROUP_ORDER;

  order.forEach(groupName => {
    const items = groups[groupName];
    if (!items || items.length === 0) return;

    const header = document.createElement('div');
    header.className = 'date-group-header';
    header.textContent = groupName;
    assetList.appendChild(header);

    const groupFolders = items.filter(i => i.type === 'folder');
    const groupSlides = items.filter(i => i.type === 'slide');

    if (groupFolders.length > 0) {
      const folderContainer = document.createElement('div');
      folderContainer.className = 'folder-list';
      groupFolders.forEach(folder => {
        folderContainer.appendChild(renderFolderRow(folder));
      });
      assetList.appendChild(folderContainer);
    }

    if (groupSlides.length > 0) {
      const grid = document.createElement('div');
      grid.className = 'asset-card-grid';
      groupSlides.forEach(slide => grid.appendChild(renderAssetCard(slide)));
      assetList.appendChild(grid);
    }
  });
}

function renderFolderRow(folder) {
  const row = document.createElement('div');
  row.className = 'folder-row';
  row.innerHTML = `
    <div class="folder-icon">${folderSvg()}</div>
    <div class="folder-name">${folder.name}</div>
  `;
  row.addEventListener('click', () => {
    currentFolder = folder.id;
    render();
  });
  return row;
}

function renderGroupedFolders(sorted) {
  const groups = groupByDate(sorted);
  const order = currentSort === 'date-asc' ? [...DATE_GROUP_ORDER].reverse() : DATE_GROUP_ORDER;

  order.forEach(groupName => {
    const items = groups[groupName];
    if (!items || items.length === 0) return;

    const header = document.createElement('div');
    header.className = 'date-group-header';
    header.textContent = groupName;
    assetList.appendChild(header);

    const folderContainer = document.createElement('div');
    folderContainer.className = 'folder-list';
    items.forEach(folder => {
      folderContainer.appendChild(renderFolderRow(folder));
    });
    assetList.appendChild(folderContainer);
  });
}

function renderFlatFolders(sorted) {
  if (sorted.length === 0) return;
  const container = document.createElement('div');
  container.className = 'folder-list';
  sorted.forEach(folder => {
    container.appendChild(renderFolderRow(folder));
  });
  assetList.appendChild(container);
}

function renderEmptyState() {
  return `<div class="empty-state">
    <svg viewBox="0 0 24 24" fill="none">
      <circle cx="11" cy="11" r="7" stroke="currentColor" stroke-width="1.5"/>
      <path d="M16 16l4.5 4.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
    </svg>
    <div>No results found</div>
  </div>`;
}

// --- Resize handle ---
const resizeHandle = document.getElementById('resizeHandle');
const taskPane = document.getElementById('taskPane');
let isResizing = false;

resizeHandle.addEventListener('mousedown', (e) => {
  isResizing = true;
  document.body.style.cursor = 'col-resize';
  document.body.style.userSelect = 'none';
  e.preventDefault();
});

document.addEventListener('mousemove', (e) => {
  if (!isResizing) return;
  const railWidth = 36;
  const newWidth = window.innerWidth - e.clientX - railWidth;
  const clamped = Math.max(240, Math.min(420, newWidth));
  taskPane.style.width = clamped + 'px';
});

document.addEventListener('mouseup', () => {
  if (isResizing) {
    isResizing = false;
    document.body.style.cursor = '';
    document.body.style.userSelect = '';
  }
});

// --- AI Popover ---
const aiRailBtn = document.getElementById('aiRailBtn');
const aiPopover = document.getElementById('aiPopover');

aiRailBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  aiPopover.classList.toggle('open');
});

document.addEventListener('click', (e) => {
  if (!aiPopover.contains(e.target) && e.target !== aiRailBtn) {
    aiPopover.classList.remove('open');
  }
});

// --- Drag & Drop: Right pane → Left slide panel & center canvas ---
function getActiveSlideIndex() {
  const wrappers = document.querySelectorAll('.slide-thumb-wrapper');
  for (let i = 0; i < wrappers.length; i++) {
    if (wrappers[i].classList.contains('active')) return i;
  }
  return 0;
}

function insertSlideAt(data, insertIdx) {
  const newSlide = {
    num: 0,
    title: data.name,
    sub: '',
    hasChart: false,
  };

  SLIDES.splice(insertIdx, 0, newSlide);
  SLIDES.forEach((s, i) => { s.num = i + 1; });

  renderSlideThumbnails();
  const wrappers = document.querySelectorAll('.slide-thumb-wrapper');
  wrappers.forEach(w => w.classList.remove('active'));
  if (wrappers[insertIdx]) wrappers[insertIdx].classList.add('active');

  updateStatusBar(insertIdx + 1);
}

function setupSlideDropTarget() {
  const slidePanel = document.querySelector('.slide-panel');
  const container = document.getElementById('slideThumbnails');
  let dropIndicator = null;

  function getDropIndicator() {
    if (!dropIndicator) {
      dropIndicator = document.createElement('div');
      dropIndicator.className = 'drop-indicator';
    }
    return dropIndicator;
  }

  function removeDropIndicator() {
    if (dropIndicator && dropIndicator.parentNode) {
      dropIndicator.parentNode.removeChild(dropIndicator);
    }
  }

  function getInsertIndex(y) {
    const wrappers = Array.from(container.querySelectorAll('.slide-thumb-wrapper'));
    for (let i = 0; i < wrappers.length; i++) {
      const rect = wrappers[i].getBoundingClientRect();
      const midY = rect.top + rect.height / 2;
      if (y < midY) return i;
    }
    return wrappers.length;
  }

  // Left slide panel drop target
  slidePanel.addEventListener('dragover', (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'copy';
    slidePanel.classList.add('drag-over');

    const indicator = getDropIndicator();
    const wrappers = Array.from(container.querySelectorAll('.slide-thumb-wrapper'));
    const insertIdx = getInsertIndex(e.clientY);

    if (insertIdx >= wrappers.length) {
      container.appendChild(indicator);
    } else {
      container.insertBefore(indicator, wrappers[insertIdx]);
    }
  });

  slidePanel.addEventListener('dragleave', (e) => {
    if (!slidePanel.contains(e.relatedTarget)) {
      slidePanel.classList.remove('drag-over');
      removeDropIndicator();
    }
  });

  slidePanel.addEventListener('drop', (e) => {
    e.preventDefault();
    slidePanel.classList.remove('drag-over');
    removeDropIndicator();

    let data;
    try {
      data = JSON.parse(e.dataTransfer.getData('application/json'));
    } catch { return; }

    insertSlideAt(data, getInsertIndex(e.clientY));
  });

  // Center canvas drop target — inserts after selected slide
  const slideCanvas = document.getElementById('slideCanvas');

  slideCanvas.addEventListener('dragover', (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'copy';
    slideCanvas.classList.add('drag-over');
  });

  slideCanvas.addEventListener('dragleave', (e) => {
    if (!slideCanvas.contains(e.relatedTarget)) {
      slideCanvas.classList.remove('drag-over');
    }
  });

  slideCanvas.addEventListener('drop', (e) => {
    e.preventDefault();
    slideCanvas.classList.remove('drag-over');

    let data;
    try {
      data = JSON.parse(e.dataTransfer.getData('application/json'));
    } catch { return; }

    const insertIdx = getActiveSlideIndex() + 1;
    insertSlideAt(data, insertIdx);
  });
}

function updateStatusBar(activeSlideNum) {
  const statusLeft = document.querySelector('.status-left');
  if (statusLeft) {
    const span = statusLeft.querySelector('span');
    if (span) span.textContent = `Slide ${activeSlideNum} of ${SLIDES.length}`;
  }
}

// --- Init ---
updateSortIcon();
renderSlideThumbnails();
render();
setupSlideDropTarget();
