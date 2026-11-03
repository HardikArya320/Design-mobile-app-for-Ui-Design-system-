import { appNavigation, renderExtraPage } from "./pages.js";

const groups = [
  { id: "foundations", number: "01", name: "Foundations", caption: "The basic design rules.", items: ["Colour palette", "Typography and type scale", "Spacing system", "Grid system", "Border radius", "Shadows and effects", "Design tokens"] },
  { id: "components", number: "02", name: "Components", caption: "Reusable interface elements.", items: ["Buttons", "Input fields", "Checkboxes", "Radio buttons", "Dropdowns", "Cards", "Badges", "Tooltips", "Avatars", "Modals"] },
  { id: "navigation", number: "03", name: "Navigation", caption: "Help people find their way.", items: ["Top navigation bar", "Sidebar", "Bottom navigation", "Tabs", "Breadcrumbs", "Pagination"] },
  { id: "layouts", number: "04", name: "Layouts", caption: "A frame for every screen.", items: ["Desktop layout", "Tablet layout", "Mobile layout", "Responsive containers", "Columns and grids", "Page templates"] },
  { id: "patterns", number: "05", name: "Patterns", caption: "Flows that feel familiar.", items: ["Login and signup forms", "Search interface", "Dashboard", "Profile page", "Settings page", "Contact forms"] },
  { id: "assets", number: "06", name: "Icons & assets", caption: "The details that make it yours.", items: ["Icon library", "Logo", "Illustrations", "Images", "3D glass effects"] },
  { id: "states", number: "07", name: "States & interactions", caption: "Every moment, considered.", items: ["Default", "Hover", "Active", "Focus", "Disabled", "Loading", "Error", "Success"] },
  { id: "accessibility", number: "08", name: "Accessibility", caption: "Open to everyone.", items: ["Colour contrast", "Keyboard navigation", "Screen reader labels", "Touch target sizes"] },
  { id: "documentation", number: "09", name: "Documentation", caption: "Make good decisions repeatable.", items: ["Component guidelines", "Usage examples", "Naming conventions", "Design rules", "Developer handoff"] }
];

const icons = {
  grid: '<svg viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="7" height="7" rx="2"/><rect x="14" y="3" width="7" height="7" rx="2"/><rect x="3" y="14" width="7" height="7" rx="2"/><rect x="14" y="14" width="7" height="7" rx="2"/></svg>',
  spark: '<svg viewBox="0 0 24 24" fill="none"><path d="m12 3 1.9 5.8L20 11l-6.1 2.2L12 19l-2-5.8L4 11l6-2.2L12 3Z"/><path d="m19 15 .9 2.1L22 18l-2.1.9L19 21l-.9-2.1L16 18l2.1-.9L19 15Z"/></svg>',
  box: '<svg viewBox="0 0 24 24" fill="none"><path d="m12 3 9 5-9 5-9-5 9-5Z"/><path d="m3 12 9 5 9-5M3 16l9 5 9-5"/></svg>',
  book: '<svg viewBox="0 0 24 24" fill="none"><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 0 4 21.5v-16Z"/><path d="M4 18.5A2.5 2.5 0 0 1 6.5 16H20"/></svg>',
  search: '<svg viewBox="0 0 24 24" fill="none"><circle cx="10.8" cy="10.8" r="6.8"/><path d="m16 16 5 5"/></svg>',
  arrow: '<svg viewBox="0 0 24 24" fill="none"><path d="M5 12h14m-6-6 6 6-6 6"/></svg>',
  moon: '<svg viewBox="0 0 24 24" fill="none"><path d="M20.1 15.1A8.5 8.5 0 0 1 8.9 3.9 8.5 8.5 0 1 0 20.1 15.1Z"/></svg>',
  copy: '<svg viewBox="0 0 24 24" fill="none"><rect x="8" y="8" width="12" height="12" rx="2"/><path d="M16 8V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h3"/></svg>',
  close: '<svg viewBox="0 0 24 24" fill="none"><path d="m18 6-12 12M6 6l12 12"/></svg>',
  chat: '<svg viewBox="0 0 24 24" fill="none"><path d="M20 11.5a7.5 7.5 0 0 1-8 7.5 8 8 0 0 1-3-.6L4 20l1.5-4.2A7 7 0 0 1 4 11.5 7.5 7.5 0 0 1 12 4a7.5 7.5 0 0 1 8 7.5Z"/><path d="M8 11h.01M12 11h.01M16 11h.01"/></svg>'
};

const icon = (name, cls = "") => `<span class="icon ${cls}" aria-hidden="true">${icons[name] || icons.box}</span>`;
const navItems = groups.map(g => `<a class="side-link" href="#${g.id}" data-nav="${g.id}"><span class="nav-num">${g.number}</span><span>${g.name}</span></a>`).join("");
const productNavItems = appNavigation.filter(([id]) => id !== "home").map(([id, label, glyph]) => `<a class="side-link product-side-link" href="#${id}" data-view="${id}"><span class="side-glyph" aria-hidden="true">${glyph}</span><span>${label}</span></a>`).join("");
const topNavItems = appNavigation.map(([id, label]) => `<a href="#${id}" data-view="${id}">${label}</a>`).join("");
const sectionHeading = g => `<div class="section-heading"><div class="section-kicker">${g.number} <span>—</span> SYSTEM / ${g.name.toUpperCase()}</div><h2>${g.name}</h2><p>${g.caption}</p></div>`;

document.querySelector("#app").innerHTML = `
  <aside class="sidebar" id="sidebar">
    <a class="brand" href="#home" data-view="home" aria-label="Forma home"><span class="brand-mark"><i></i><i></i><i></i><i></i></span><span>forma<span class="brand-period">.</span></span></a>
    <div class="sidebar-meta"><span class="live-dot"></span> DESIGN SYSTEM <span class="version">v1.0</span></div>
    <a class="side-link home-link active" href="#home" data-nav="home" data-view="home">${icon("grid")}<span>Home</span><span class="home-arrow">↗</span></a>
    <div class="side-label product-label">YOUR SPACE <span>05</span></div>
    <nav class="side-nav product-nav" aria-label="Your pages">${productNavItems}</nav>
    <div class="sidebar-auth"><a href="#signup" data-view="signup">Sign up <span>↗</span></a><a href="#signin" data-view="signin">Sign in</a></div>
    <div class="side-label">THE LIBRARY <span>09</span></div>
    <nav class="side-nav" aria-label="Design system sections">${navItems}</nav>
    <button class="signout-link" type="button" data-signout>Sign out <span>↗</span></button>
    <div class="sidebar-bottom"><div class="avatar-stack"><img src="/attached_assets/CB4740EF-8E8A-4C05-9D97-3C6A04C45A2C_1793719038828.jpeg" alt="Hardik Arya"><span>+</span></div><div><strong>Hardik Arya</strong><small>UI designer</small></div><button class="mini-icon theme-toggle" aria-label="Switch colour theme">${icon("moon")}</button></div>
  </aside>
  <div class="mobile-bar"><a class="brand" href="#home" data-view="home"><span class="brand-mark"><i></i><i></i><i></i><i></i></span><span>forma<span class="brand-period">.</span></span></a><button class="mobile-menu" aria-label="Toggle navigation">☰</button></div>
  <main class="main-shell">
    <header class="topbar"><div class="breadcrumbs"><span>Forma</span><span class="crumb-slash">/</span><strong id="crumb-current">Home</strong></div><nav class="main-nav" aria-label="Main navigation">${topNavItems}</nav><div class="top-actions"><label class="search-box">${icon("search")}<input id="site-search" type="search" placeholder="Search the system…" aria-label="Search the design system"><kbd>⌘ K</kbd></label><span class="top-divider"></span><button class="top-theme theme-toggle" aria-label="Switch colour theme">${icon("moon")}</button><a class="github-link" href="#documentation" data-library-anchor="documentation">Docs ${icon("arrow")}</a></div></header>
    <div class="page-content" id="page-content">
      <section class="home-hero" id="home">
        <div class="hero-copy"><div class="eyebrow"><span class="live-dot"></span> THE OPEN DESIGN SYSTEM</div><h1>Good design<br>starts <em>with a system.</em></h1><p class="hero-lead">A shared language for creating digital experiences that feel clear, consistent, and unmistakably human.</p><div class="hero-actions"><a class="button button-dark" href="#foundations">Explore the system ${icon("arrow")}</a><a class="text-link" href="#components">Browse components <span>↗</span></a></div><div class="hero-proof"><div class="avatar-stack"><span>F</span><span>DS</span><span>+</span></div><span>Made for teams who care<br><strong>about the details.</strong></span></div></div>
        <div class="hero-art" aria-label="Abstract composition illustrating the Forma design system"><div class="art-orbit orbit-one"></div><div class="art-orbit orbit-two"></div><div class="art-label label-top">A SYSTEM, NOT A TEMPLATE <span>↗</span></div><div class="art-circle"><div class="art-inner"><span class="art-cross">✳</span><strong>form<br>follows<br><i>feeling.</i></strong><small>F / 001</small></div></div><div class="art-sticker">DESIGNED<br>TO FIT<br><span>↘ YOU</span></div><div class="art-caption">A little more intentional.<br>A lot more you.</div><div class="art-grid"></div></div>
      </section>
      <section class="overview-strip"><div><strong>09</strong><span>thoughtful chapters</span></div><div><strong>47</strong><span>building blocks</span></div><div><strong>∞</strong><span>ways to make it yours</span></div><div class="strip-note">A living library for better<br>digital experiences. <span>●</span></div></section>
      <section class="library-intro"><div><div class="eyebrow">YOUR CREATIVE STARTING POINT</div><h2>Everything in its<br><em>right place.</em></h2></div><p>From the first colour decision to the last interaction state, explore the small, consistent choices that make a product feel like one complete thought.</p></section>
      <section class="chapter-grid" aria-label="Design system chapters">${groups.map(g => `<a href="#${g.id}" class="chapter-card" data-chapter="${g.id}"><div class="chapter-card-top"><span class="chapter-number">${g.number}</span><span class="chapter-arrow">↗</span></div><h3>${g.name}</h3><p>${g.caption}</p><div class="chapter-tags">${g.items.slice(0, 3).map(x => `<span>${x}</span>`).join("")}${g.items.length > 3 ? `<span class="more-tag">+${g.items.length - 3}</span>` : ""}</div></a>`).join("")}</section>
      <div class="library-header"><div><div class="eyebrow">THE REFERENCE</div><h2>Built to be <em>used.</em></h2></div><span class="library-counter">01 — 09 / CHAPTERS</span></div>
      ${groups.map((g, index) => `<section class="doc-section" id="${g.id}" data-section="${g.id}">${sectionHeading(g)}${renderSection(g, index)}</section>`).join("")}
      <footer class="footer"><a class="brand" href="#home"><span class="brand-mark"><i></i><i></i><i></i><i></i></span><span>forma<span class="brand-period">.</span></span></a><span>Made with care. Shared with everyone.</span><a href="#home">Back to top ↑</a></footer>
    </div>
    <div id="extra-pages"></div>
  </main>
  <div class="toast" id="toast" role="status" aria-live="polite"></div>
  <button class="support-float" type="button" data-view="support" aria-label="Open the support chat preview">${icon("chat")}</button>
  <dialog class="demo-modal" id="demo-modal"><button class="modal-close" aria-label="Close dialog">${icon("close")}</button><div class="eyebrow">A LITTLE MORE DETAIL</div><h2>A dialog with good manners.</h2><p>Clear, focused, and easy to dismiss. A good modal keeps the conversation in context.</p><button class="button button-dark modal-done">Sounds good ${icon("arrow")}</button></dialog>
`;

function card(title, eyebrow, body, extra = "") {
  return `<article class="spec-card"><div class="spec-card-head"><div><span class="spec-eyebrow">${eyebrow}</span><h3>${title}</h3></div><button class="copy-button" data-copy="${title}" aria-label="Copy ${title} example">${icon("copy")}</button></div><div class="spec-demo">${body}</div>${extra ? `<div class="spec-foot">${extra}</div>` : ""}</article>`;
}

function renderSection(g, index) {
  if (g.id === "foundations") return `<div class="foundation-layout">
    <article class="spec-card palette-card"><div class="spec-card-head"><div><span class="spec-eyebrow">01.01 / COLOUR</span><h3>Colour palette</h3></div><button class="copy-button" data-copy="Colour palette" aria-label="Copy colour palette">${icon("copy")}</button></div><div class="swatch-grid">${[["Ink","#242522"],["Paper","#F7F7F4"],["Lime","#D4F27C"],["Sky","#C9DDF4"],["Rose","#F0C6B9"],["Lilac","#D8D0E8"],["Sand","#E9E4D9"],["Sage","#CAD8C7"]].map(([n,c]) => `<button class="swatch" data-copy="${c}" aria-label="Copy ${n}, ${c}"><span style="--swatch:${c}"></span><small>${n}</small><code>${c}</code></button>`).join("")}</div><div class="token-note">Click any swatch to copy its hex value.</div></article>
    ${card("Typography & type scale","01.02 / TYPE",`<div class="type-sample"><span class="type-caption">DISPLAY / MANROPE 64</span><div class="type-display">Make it<br><em>matter.</em></div><div class="type-body">Good things happen when the details<br>work together. <span>— Body / DM Sans 15</span></div></div>`,"A clear hierarchy does the heavy lifting.")}
    ${card("Spacing system","01.03 / SPACE",`<div class="space-list">${[["04","4"],["08","8"],["12","12"],["16","16"],["24","24"],["32","32"]].map(([a,b]) => `<div class="space-row"><code>${a}</code><span style="--space:${b}px"></span><small>${b}px</small></div>`).join("")}</div>`,"A steady rhythm, from 4 to 32 pixels.")}
    ${card("Grid system","01.04 / GRID",`<div class="grid-demo">${Array.from({length:12},() => "<i></i>").join("")}</div><div class="grid-labels"><span>12 columns</span><span>24px gutters</span><span>Responsive</span></div>`,"Flexible columns keep everything in alignment.")}
    ${card("Border radius","01.05 / SHAPE",`<div class="radius-demo"><span style="--r:4px">SM</span><span style="--r:10px">MD</span><span style="--r:18px">LG</span><span style="--r:999px">FULL</span></div>`,"Corners with a little character.")}
    ${card("Shadows & effects","01.06 / DEPTH",`<div class="shadow-demo"><span class="shadow-tile">soft</span><span class="shadow-tile shadow-mid">lifted</span><span class="shadow-tile shadow-hard">floating</span></div>`,"A gentle sense of depth, never noise.")}
    ${card("Design tokens","01.07 / TOKENS",`<div class="token-list"><span><code>color.accent</code><b>#D4F27C</b></span><span><code>radius.card</code><b>18px</b></span><span><code>space.section</code><b>96px</b></span></div>`,"Small decisions, made shareable.")}</div>`;

  if (g.id === "components") return `<div class="spec-grid">
    ${card("Buttons","02.01 / ACTION",`<div class="button-row"><button class="button button-dark demo-action">Get started ${icon("arrow")}</button><button class="button button-light demo-action">Learn more</button><button class="icon-button" aria-label="More options">···</button></div><div class="button-row"><button class="button button-dark button-small demo-action">Small button</button><button class="button button-outline demo-action">Secondary</button><button class="button button-dark" disabled>Disabled</button></div>`,"Primary, secondary, and a quiet option.")}
    ${card("Input fields","02.02 / FORM",`<label class="demo-label">Work email <input class="demo-input" placeholder="you@company.com" type="email"></label><label class="demo-label">A little context <textarea class="demo-input" placeholder="Tell us what you have in mind…" rows="2"></textarea></label>`,"Clear labels. Helpful placeholders.")}
    ${card("Checkboxes","02.03 / FORM",`<label class="check-row"><input type="checkbox" checked><span class="checkmark"></span>Keep me in the loop</label><label class="check-row"><input type="checkbox"><span class="checkmark"></span>Send me the occasional update</label><label class="check-row muted"><input type="checkbox" disabled><span class="checkmark"></span>Unavailable option</label>`)}
    ${card("Radio buttons","02.04 / FORM",`<label class="check-row"><input type="radio" name="plan" checked><span class="radiomark"></span>Just me</label><label class="check-row"><input type="radio" name="plan"><span class="radiomark"></span>My whole team</label>`)}
    ${card("Dropdowns","02.05 / FORM",`<label class="demo-label">Choose a direction <select class="demo-input"><option>Something simple</option><option>Bold and bright</option><option>Warm and considered</option></select></label>`)}
    ${card("Cards","02.06 / CONTAINER",`<div class="mini-content-card"><span class="mini-card-icon">✳</span><div><strong>Good ideas, well kept.</strong><small>A place for all the little things.</small></div><span class="mini-card-arrow">↗</span></div>`)}
    ${card("Badges","02.07 / LABEL",`<div class="badge-row"><span class="badge badge-green"><i></i>Published</span><span class="badge badge-blue">In review</span><span class="badge badge-plain">Draft</span><span class="badge badge-new">New</span></div>`)}
    ${card("Tooltips","02.08 / HINT",`<div class="tooltip-wrap"><button class="button button-light tooltip-trigger">Hover or focus me <span>?</span></button><div class="tooltip-bubble" role="tooltip">A little extra context, right when you need it.</div></div>`)}
    ${card("Avatars","02.09 / PEOPLE",`<div class="avatar-row"><span class="person-avatar avatar-lime">AM</span><span class="person-avatar avatar-rose">JD</span><span class="person-avatar avatar-lilac">SK</span><span class="person-avatar avatar-img">+</span><span class="avatar-count">+ 8</span></div>`)}
    ${card("Modals","02.10 / OVERLAY",`<button class="button button-light open-modal">Preview the modal ↗</button>`,"Focused content with an easy way out.")}</div>`;

  if (g.id === "navigation") return `<div class="spec-grid">
    ${card("Top navigation bar","03.01 / NAV",`<div class="nav-demo"><span class="nav-demo-logo">forma<span>.</span></span><div><a href="#components">Work</a><a href="#foundations">About</a><a href="#documentation">Notes</a></div><button class="nav-demo-cta">Say hello ↗</button></div>`)}
    ${card("Sidebar","03.02 / NAV",`<div class="sidebar-demo"><span>YOUR WORKSPACE</span><b>▦ &nbsp; Overview</b><small>◇ &nbsp; Projects</small><small>◷ &nbsp; Activity</small><small>⚙ &nbsp; Settings</small></div>`)}
    ${card("Bottom navigation","03.03 / MOBILE",`<div class="bottom-nav-demo"><span class="selected">⌂<small>Home</small></span><span>▦<small>Explore</small></span><span>♡<small>Saved</small></span><span>◉<small>Profile</small></span></div>`)}
    ${card("Tabs","03.04 / NAV",`<div class="tab-list" role="tablist"><button class="tab active" role="tab" aria-selected="true" data-tab="Overview">Overview</button><button class="tab" role="tab" aria-selected="false" data-tab="Activity">Activity</button><button class="tab" role="tab" aria-selected="false" data-tab="Settings">Settings</button></div><div class="tab-content" aria-live="polite">A closer look at the big picture.</div>`)}
    ${card("Breadcrumbs","03.05 / WAYFINDING",`<div class="breadcrumb-demo"><a href="#home">Home</a><span>/</span><a href="#components">Library</a><span>/</span><strong>Buttons</strong></div>`)}
    ${card("Pagination","03.06 / WAYFINDING",`<div class="pagination"><button aria-label="Previous page">←</button><button class="page selected">1</button><button class="page">2</button><button class="page">3</button><span>…</span><button class="page">8</button><button aria-label="Next page">→</button></div>`)}
  </div>`;

  if (g.id === "layouts") return `<div class="spec-grid">
    ${card("Desktop layout","04.01 / BREAKPOINT",`<div class="viewport-demo desktop-v"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div><div class="viewport-caption"><strong>1440px</strong><span>Room to breathe. 12-column grid.</span></div>`)}
    ${card("Tablet layout","04.02 / BREAKPOINT",`<div class="viewport-demo tablet-v"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div><div class="viewport-caption"><strong>768px</strong><span>A little closer. 8-column grid.</span></div>`)}
    ${card("Mobile layout","04.03 / BREAKPOINT",`<div class="viewport-demo mobile-v"><i></i><i></i><i></i><i></i></div><div class="viewport-caption"><strong>390px</strong><span>Focus on what matters. 4-column grid.</span></div>`)}
    ${card("Responsive containers","04.04 / WIDTH",`<div class="container-demo"><span>Max-width container, centred as the viewport grows.</span></div>`)}
    ${card("Columns and grids","04.05 / COMPOSITION",`<div class="columns-demo"><span>01</span><span>02</span><span>03</span></div>`)}
    ${card("Page templates","04.06 / STARTER",`<div class="template-demo"><span>✳</span><strong>Start with a page.<br>Make it your own.</strong><small>Starter · Dashboard</small></div>`)}
  </div>`;

  if (g.id === "patterns") return `<div class="spec-grid">
    ${card("Login and signup forms","05.01 / ACCOUNT",`<form class="pattern-form demo-form"><span class="pattern-asterisk">✳</span><strong>Welcome back.</strong><small>Good to see you again.</small><input class="demo-input" type="email" autocomplete="username" placeholder="Email address" aria-label="Email address"><input class="demo-input" type="password" autocomplete="current-password" placeholder="Password" aria-label="Password"><button class="button button-dark" type="submit">Sign in ${icon("arrow")}</button><span class="form-feedback" aria-live="polite"></span></form>`)}
    ${card("Search interface","05.02 / DISCOVERY",`<div class="search-demo">${icon("search")}<input placeholder="Find what you're looking for…" aria-label="Search examples"><kbd>⌘ K</kbd></div><div class="search-hint">Try: “buttons”, “colour”, “mobile”</div>`)}
    ${card("Dashboard","05.03 / OVERVIEW",`<div class="dashboard-demo"><div><small>GOOD MORNING, ALEX</small><strong>Let’s make something<br>feel <em>just right.</em></strong></div><div class="dashboard-stats"><span><b>12</b><small>Projects</small></span><span><b>08</b><small>In progress</small></span><span><b>04</b><small>Ready to share</small></span></div></div>`)}
    ${card("Profile page","05.04 / PERSONAL",`<div class="profile-demo"><span class="person-avatar avatar-lilac">AM</span><div><strong>Alex Morgan</strong><small>Designing with intention</small><a href="#documentation">View profile ↗</a></div></div>`)}
    ${card("Settings page","05.05 / PREFERENCES",`<div class="setting-row"><div><strong>Thoughtful updates</strong><small>A note when something good happens.</small></div><label class="switch"><input type="checkbox" checked aria-label="Thoughtful updates"><span></span></label></div><div class="setting-row"><div><strong>Quiet hours</strong><small>Every day, after 9pm.</small></div><label class="switch"><input type="checkbox" aria-label="Quiet hours"><span></span></label></div>`)}
    ${card("Contact forms","05.06 / CONVERSATION",`<form class="contact-form demo-form"><input class="demo-input" placeholder="Your name" aria-label="Your name"><input class="demo-input" type="email" placeholder="Email address" aria-label="Email address"><textarea class="demo-input" placeholder="What are you thinking about?" aria-label="Your message"></textarea><button class="button button-dark" type="submit">Send a note ${icon("arrow")}</button><span class="form-feedback" aria-live="polite"></span></form>`)}
  </div>`;

  if (g.id === "assets") return `<div class="spec-grid">
    ${card("Icon library","06.01 / SYMBOLS",`<div class="icon-library">${["✳","↗","⌘","◇","◉","⌂","＋","♡","⟡","↘","◌","⌁"].map((i,n) => `<button data-copy="${i}" aria-label="Copy icon ${i}"><span>${i}</span><small>${["spark","arrow","command","shape","circle","home","add","heart","shine","down","ring","wave"][n]}</small></button>`).join("")}</div>`,"Simple symbols with a consistent visual weight.")}
    ${card("Logo","06.02 / IDENTITY",`<div class="logo-showcase"><span class="brand-mark"><i></i><i></i><i></i><i></i></span><span>forma<span class="brand-period">.</span></span></div><div class="logo-variants"><span>PRIMARY</span><span>MARK ONLY</span><span>WORDMARK</span></div>`)}
    ${card("Illustrations","06.03 / EXPRESSION",`<div class="illustration-demo"><div class="illo-sun">✳</div><div class="illo-shape shape-a"></div><div class="illo-shape shape-b"></div><div class="illo-shape shape-c"></div><span>LESS, BUT<br>MORE HUMAN.</span></div>`)}
    ${card("Images","06.04 / ART DIRECTION",`<div class="image-placeholder"><div class="image-sun"></div><span>LIGHT / TEXTURE / SPACE</span><small>Good image direction starts with a feeling.</small></div>`)}
    ${card("3D glass effects","06.05 / MATERIAL",`<div class="glass-demo"><span class="glass-orb orb-a"></span><span class="glass-orb orb-b"></span><span class="glass-orb orb-c"></span><div class="glass-card"><span>FORM / 001</span><strong>Light,<br>captured.</strong><small>GLASS STUDY · 01</small></div></div>`)}
  </div>`;

  if (g.id === "states") return `<div class="spec-grid">
    ${card("Default, hover & active","07.01 / POINTER",`<div class="state-buttons"><button>Default</button><button class="hover-state">Hover me</button><button class="active-state">Active</button></div>`,"Hover over a button. Click to see its active state.")}
    ${card("Focus","07.02 / KEYBOARD",`<button class="button focus-demo">Tab to focus me</button><span class="focus-hint">Visible focus makes keyboard navigation feel natural.</span>`)}
    ${card("Disabled","07.03 / AVAILABILITY",`<div class="state-buttons"><button disabled>Not available yet</button><span class="disabled-reason">Unavailable while setup is incomplete</span></div>`)}
    ${card("Loading","07.04 / PROGRESS",`<button class="button button-dark loading-button" id="loading-button">Try a loading state</button><span class="state-feedback" aria-live="polite"></span>`)}
    ${card("Error","07.05 / FEEDBACK",`<div class="message-state message-error"><span>!</span><div><strong>Something needs another look.</strong><small>Check your details and try again.</small></div></div>`)}
    ${card("Success","07.06 / FEEDBACK",`<div class="message-state message-success"><span>✓</span><div><strong>All set. Looking good.</strong><small>Your changes are safely saved.</small></div></div>`)}
  </div>`;

  if (g.id === "accessibility") return `<div class="access-layout"><div class="spec-grid">
    ${card("Colour contrast","08.01 / WCAG",`<div class="contrast-preview" id="contrast-preview"><strong>Words should be easy to read.</strong><span>Adjust the colours below and see the contrast ratio.</span></div><div class="contrast-controls"><label>Text <input id="contrast-fg" type="color" value="#242522"></label><label>Background <input id="contrast-bg" type="color" value="#ffffff"></label><span class="contrast-result" id="contrast-result">—</span></div>`,"Aim for a 4.5:1 contrast ratio for body text.")}
    ${card("Keyboard navigation","08.02 / KEYBOARD",`<div class="keyboard-keys"><kbd>Tab</kbd><span>to move forward</span><kbd>Shift</kbd><b>+</b><kbd>Tab</kbd><span>to go back</span><kbd>Enter</kbd><span>to activate</span></div>`)}
    ${card("Screen reader labels","08.03 / CONTEXT",`<div class="sr-example"><button class="icon-button" aria-label="Close notification">${icon("close")}</button><div><strong>Give controls a name.</strong><small>Labels help assistive technology describe every action.</small></div><span class="badge badge-green"><i></i>Labelled</span></div>`)}
    ${card("Touch target sizes","08.04 / TOUCH",`<div class="touch-demo"><button aria-label="Small target"><span></span></button><button aria-label="Comfortable target"><span></span></button><button aria-label="Generous target"><span></span></button></div><div class="touch-labels"><span>24px</span><span>44px</span><span>48px</span></div>`,"44px is a comfortable minimum for touch.")}
  </div><aside class="access-note"><span class="access-star">✳</span><h3>Accessibility<br>isn't an extra.</h3><p>It’s how thoughtful design reaches more people. Start with semantic HTML, visible focus, clear language, and enough contrast.</p><a href="https://www.w3.org/WAI/WCAG22/quickref/" target="_blank" rel="noreferrer">WCAG quick reference ↗</a></aside></div>`;

  return `<div class="documentation-layout"><div class="doc-cards">
    ${card("Component guidelines","09.01 / CONSISTENCY",`<div class="guideline-row"><span>01</span><div><strong>Make one thing clear.</strong><small>A component should have one obvious job.</small></div></div><div class="guideline-row"><span>02</span><div><strong>Start with the simplest state.</strong><small>Build up only when the moment calls for it.</small></div></div><div class="guideline-row"><span>03</span><div><strong>Keep the edges considered.</strong><small>Loading, empty, and error states are part of the design.</small></div></div>`)}
    ${card("Usage examples","09.02 / IN CONTEXT",`<div class="usage-example"><span class="badge badge-green"><i></i>Recommended</span><p>Use a primary action once per view. Let everything else play a supporting role.</p><div><button class="button button-dark button-small">Continue ${icon("arrow")}</button><button class="button button-light button-small">Cancel</button></div></div>`)}
    ${card("Naming conventions","09.03 / SHARED LANGUAGE",`<div class="token-list"><span><code>Button / Primary</code><b>Action</b></span><span><code>Input / Error</code><b>Form</b></span><span><code>Navigation / Tabs</code><b>Wayfinding</b></span></div>`)}
    ${card("Design rules","09.04 / PRINCIPLES",`<div class="principle-list"><span><b>01</b> Clarity over cleverness</span><span><b>02</b> Consistency with character</span><span><b>03</b> Every detail has a reason</span><span><b>04</b> Accessible by default</span></div>`)}
    ${card("Developer handoff","09.05 / READY TO BUILD",`<div class="handoff-demo"><div><span>READY FOR HANDOFF</span><strong>Buttons · v1.0.2</strong></div><button class="copy-button" data-copy="Button / Primary — gap 8px, radius 999px, padding 12px 18px" aria-label="Copy developer handoff notes">${icon("copy")}</button></div><div class="handoff-chips"><span>Specs attached</span><span>Tokens linked</span><span>States covered</span></div>`)}
  </div><div class="doc-callout"><span>YOUR SYSTEM, YOUR RULES</span><p>Good guidelines create consistency. Great guidelines leave room for the unexpected.</p><a href="#home" class="text-link">Make it yours ↗</a></div></div>`;
}

function contrastRatio(hex1, hex2) {
  const lum = hex => {
    const rgb = hex.match(/[A-Fa-f0-9]{2}/g).map(x => parseInt(x, 16) / 255).map(c => c <= .04045 ? c / 12.92 : ((c + .055) / 1.055) ** 2.4);
    return .2126 * rgb[0] + .7152 * rgb[1] + .0722 * rgb[2];
  };
  const a = lum(hex1), b = lum(hex2);
  return (Math.max(a, b) + .05) / (Math.min(a, b) + .05);
}

const toast = document.querySelector("#toast");
let toastTimer;
function notify(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2100);
}

async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text);
    notify(`Copied “${text}” to clipboard`);
  } catch {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    document.body.append(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
    notify(`Copied “${text}” to clipboard`);
  }
}

document.addEventListener("click", event => {
  const copy = event.target.closest("[data-copy]");
  if (copy) copyText(copy.dataset.copy);

  const nav = event.target.closest("[data-nav]");
  if (nav) {
    document.querySelectorAll(".side-link").forEach(link => link.classList.toggle("active", link === nav));
    document.querySelector("#crumb-current").textContent = nav.dataset.nav === "home" ? "Home" : groups.find(g => g.id === nav.dataset.nav)?.name || "Home";
    document.querySelector("#sidebar").classList.remove("mobile-open");
  }

  const tab = event.target.closest(".tab");
  if (tab) {
    tab.parentElement.querySelectorAll(".tab").forEach(t => { t.classList.toggle("active", t === tab); t.setAttribute("aria-selected", t === tab ? "true" : "false"); });
    const content = tab.closest(".spec-demo").querySelector(".tab-content");
    content.textContent = tab.dataset.tab === "Overview" ? "A closer look at the big picture." : tab.dataset.tab === "Activity" ? "A little update, just as it happened." : "Make things feel right for your team.";
  }

  if (event.target.closest(".theme-toggle")) {
    const dark = document.documentElement.classList.toggle("dark");
    localStorage.setItem("forma-theme", dark ? "dark" : "light");
  }

  if (event.target.closest(".open-modal")) document.querySelector("#demo-modal").showModal();
  if (event.target.closest(".modal-close, .modal-done")) document.querySelector("#demo-modal").close();

  const page = event.target.closest(".pagination .page");
  if (page) {
    page.parentElement.querySelectorAll(".page").forEach(p => p.classList.toggle("selected", p === page));
    notify(`Showing page ${page.textContent}`);
  }

  if (event.target.closest(".mobile-menu")) document.querySelector("#sidebar").classList.toggle("mobile-open");

  const viewLink = event.target.closest("[data-view]");
  if (viewLink) {
    event.preventDefault();
    navigate(viewLink.dataset.view, true);
    return;
  }

  const planButton = event.target.closest("[data-plan]");
  if (planButton) {
    selectedPlan = planButton.dataset.plan;
    navigate("signup", true, selectedPlan);
    return;
  }

  if (event.target.closest("[data-signout]")) {
    notify("Sign out is a UI preview. No account is connected.");
    navigate("home", true);
    return;
  }

  const socialButton = event.target.closest("[data-social]");
  if (socialButton) {
    notify(`${socialButton.dataset.social} sign-in is not connected in this preview.`);
    return;
  }

  if (event.target.closest("[data-open-post]")) {
    const detail = document.querySelector("#post-detail");
    if (detail) {
      detail.hidden = false;
      document.querySelectorAll(".post-grid,.featured-post,.journal-heading").forEach(el => { el.hidden = true; });
      detail.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  if (event.target.closest("[data-close-post]")) {
    document.querySelector("#post-detail").hidden = true;
    document.querySelectorAll(".post-grid,.featured-post,.journal-heading").forEach(el => { el.hidden = false; });
  }

  const libraryAnchor = event.target.closest("[data-library-anchor]");
  if (libraryAnchor) {
    event.preventDefault();
    const targetId = libraryAnchor.dataset.libraryAnchor;
    navigate("home", true);
    requestAnimationFrame(() => document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" }));
  }

  const stateButton = event.target.closest(".state-buttons button:not(:disabled)");
  if (stateButton) {
    stateButton.parentElement.querySelectorAll("button").forEach(b => b.classList.toggle("active-state", b === stateButton));
  }

  if (event.target.closest("#loading-button")) {
    const button = document.querySelector("#loading-button");
    if (button.disabled) return;
    button.disabled = true;
    button.innerHTML = '<span class="spinner"></span> Saving…';
    setTimeout(() => { button.disabled = false; button.textContent = "Try a loading state"; button.nextElementSibling.textContent = "Saved — that took a moment."; }, 1500);
  }
});

document.querySelectorAll(".demo-form").forEach(form => form.addEventListener("submit", event => {
  event.preventDefault();
  const feedback = form.querySelector(".form-feedback");
  feedback.textContent = "Thanks — your message is ready.";
}));

document.addEventListener("submit", event => {
  if (event.target.matches("#chat-form")) {
    event.preventDefault();
    const input = document.querySelector("#chat-input");
    const message = input.value.trim();
    if (!message) return;
    const line = document.createElement("div");
    line.className = "chat-line user-message";
    const content = document.createElement("div");
    const sender = document.createElement("span");
    sender.className = "chat-sender";
    sender.innerHTML = "You <small>now</small>";
    const bubble = document.createElement("div");
    bubble.className = "chat-bubble";
    bubble.textContent = message;
    content.append(sender, bubble);
    line.append(content);
    const image = document.createElement("img");
    image.className = "hardik-avatar chat-avatar";
    image.src = "/attached_assets/CB4740EF-8E8A-4C05-9D97-3C6A04C45A2C_1793719038828.jpeg";
    image.alt = "Hardik Arya";
    line.append(image);
    document.querySelector("#chat-messages").append(line);
    input.value = "";
    line.scrollIntoView({ behavior: "smooth", block: "nearest" });
    notify("Added to this local chat preview. Nothing was sent.");
    return;
  }

  if (event.target.matches(".demo-auth-form")) {
    event.preventDefault();
    event.target.querySelector(".auth-feedback").textContent = "This is a preview. No account was created and no details were sent.";
  }
});

const search = document.querySelector("#site-search");
const searchable = [...document.querySelectorAll(".chapter-card, .doc-section")];
search.addEventListener("input", () => {
  if (document.querySelector(".main-shell").classList.contains("route-view")) navigate("home", false);
  const query = search.value.trim().toLowerCase();
  searchable.forEach(el => {
    const match = !query || el.textContent.toLowerCase().includes(query);
    el.classList.toggle("search-hidden", !match);
  });
});

document.querySelector(".search-demo input").addEventListener("input", event => {
  search.value = event.target.value;
  search.dispatchEvent(new Event("input"));
});

document.querySelectorAll("#contrast-fg, #contrast-bg").forEach(input => input.addEventListener("input", () => {
  const fg = document.querySelector("#contrast-fg").value;
  const bg = document.querySelector("#contrast-bg").value;
  const ratio = contrastRatio(fg, bg);
  const preview = document.querySelector("#contrast-preview");
  const result = document.querySelector("#contrast-result");
  preview.style.color = fg;
  preview.style.background = bg;
  result.textContent = `${ratio.toFixed(2)}:1 · ${ratio >= 4.5 ? "AA pass" : "Needs more contrast"}`;
  result.classList.toggle("pass", ratio >= 4.5);
}));
document.querySelector("#contrast-fg").dispatchEvent(new Event("input"));

document.addEventListener("keydown", event => {
  if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
    event.preventDefault();
    search.focus();
  }
  if (event.key === "Escape") document.querySelector("#sidebar").classList.remove("mobile-open");
});

if (localStorage.getItem("forma-theme") === "dark") document.documentElement.classList.add("dark");

let selectedPlan = "";
const routeLabels = Object.fromEntries(appNavigation.map(([id, label]) => [id, label]));
routeLabels.signup = "Sign up";
routeLabels.signin = "Sign in";

function navigate(view, updateUrl = false, plan = "") {
  const validViews = ["home", ...appNavigation.map(([id]) => id), "signup", "signin"];
  if (!validViews.includes(view)) view = "home";
  if (plan) selectedPlan = plan;
  const isExtraPage = view !== "home";
  document.querySelector(".main-shell").classList.toggle("route-view", isExtraPage);
  document.querySelector("#extra-pages").innerHTML = isExtraPage ? renderExtraPage(view, selectedPlan) : "";
  document.querySelector("#crumb-current").textContent = routeLabels[view] || "Home";
  document.querySelectorAll("[data-view]").forEach(link => {
    link.classList.toggle("route-active", link.dataset.view === view);
    if (link.classList.contains("side-link")) link.classList.toggle("active", link.dataset.view === view);
  });
  document.querySelector("#sidebar").classList.remove("mobile-open");
  document.querySelector(".support-float").hidden = view === "support";
  if (updateUrl) {
    const hash = view === "home" ? "#home" : `#${view}`;
    history.pushState({ view }, "", `${location.pathname}${location.search}${hash}`);
  }
  window.scrollTo({ top: 0, behavior: "smooth" });
}

window.addEventListener("popstate", () => navigate(location.hash.slice(1) || "home"));
if (["profile", "blog", "pricing", "support", "signup", "signin"].includes(location.hash.slice(1))) {
  navigate(location.hash.slice(1));
}
