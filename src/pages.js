const portrait = "/attached_assets/CB4740EF-8E8A-4C05-9D97-3C6A04C45A2C_1793719038828.jpeg";
const spaceArt = "/attached_assets/IMG_5126_1793717332647.jpeg";
const icons = {
  chat: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M20 11.5a7.5 7.5 0 0 1-8 7.5 8 8 0 0 1-3-.6L4 20l1.5-4.2A7 7 0 0 1 4 11.5 7.5 7.5 0 0 1 12 4a7.5 7.5 0 0 1 8 7.5Z"/><path d="M8 11h.01M12 11h.01M16 11h.01"/></svg>',
  arrow: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14m-6-6 6 6-6 6"/></svg>',
  mail: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>'
};
const providerIcons = {
  google: `<svg class="provider-icon google-provider-icon" viewBox="0 0 48 48" role="img" aria-label="Google logo"><path fill="#4285F4" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/><path fill="#34A853" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.76 7.18l7.73 6C44.42 38.21 46.98 31.86 46.98 24.55z"/><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-3-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.64 0 20.21 0 24s.92 7.36 2.56 10.78l7.97-6.19z"/><path fill="#EA4335" d="M24 48c6.48 0 11.93-2.13 15.91-5.8l-7.73-6c-2.15 1.45-4.92 2.3-8.18 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/></svg>`,
  apple: `<svg class="provider-icon apple-provider-icon" viewBox="0 0 24 24" role="img" aria-label="Apple logo"><path fill="currentColor" d="M16.77 12.045c-.028-3.052 2.493-4.523 2.607-4.594-1.42-2.076-3.63-2.36-4.417-2.39-1.879-.191-3.666 1.1-4.62 1.1-.952 0-2.425-1.074-3.984-1.045-2.05.03-3.94 1.192-4.995 3.024-2.12 3.68-.542 9.13 1.52 12.11 1.01 1.46 2.21 3.1 3.8 3.04 1.53-.06 2.1-.99 3.95-.99 1.85 0 2.37.99 3.99.96 1.65-.03 2.69-1.49 3.69-2.96 1.16-1.68 1.63-3.31 1.66-3.39-.036-.016-3.19-1.224-3.22-4.85zm-3.04-9.02c.84-1.01 1.4-2.42 1.24-3.82-1.2.05-2.65.8-3.51 1.81-.77.89-1.45 2.32-1.27 3.68 1.34.1 2.7-.68 3.54-1.67Z"/></svg>`
};

const icon = name => `<span class="page-icon">${icons[name]}</span>`;
const avatar = (className = "") => `<img class="hardik-avatar ${className}" src="${portrait}" alt="Hardik Arya">`;

export const appNavigation = [
  ["home", "Home", "⌂"],
  ["dashboard", "Dashboard", '<svg viewBox="0 0 24 24" fill="none"><rect x="3.5" y="3.5" width="7" height="7" rx="1.5"/><rect x="13.5" y="3.5" width="7" height="7" rx="1.5"/><rect x="3.5" y="13.5" width="7" height="7" rx="1.5"/><rect x="13.5" y="13.5" width="7" height="7" rx="1.5"/></svg>'],
  ["profile", "Profile", "◉"],
  ["blog", "Blog", "▤"],
  ["typography", "Typography", '<svg viewBox="0 0 24 24" fill="none"><path d="M4 6V4h16v2M12 4v16m-4 0h8"/></svg>'],
  ["component-library", "Components", '<svg viewBox="0 0 24 24" fill="none"><rect x="3.5" y="3.5" width="7" height="7" rx="1.5"/><rect x="13.5" y="3.5" width="7" height="7" rx="1.5"/><rect x="3.5" y="13.5" width="7" height="7" rx="1.5"/><rect x="13.5" y="13.5" width="7" height="7" rx="1.5"/></svg>'],
  ["icons", "Icon library", '<svg viewBox="0 0 24 24" fill="none"><path d="m12 3 2.7 5.5 6.1.9-4.4 4.3 1 6.1-5.4-2.9-5.4 2.9 1-6.1-4.4-4.3 6.1-.9L12 3Z"/></svg>'],
  ["pricing", "Plans", "◇"],
  ["support", "Live support", "◌"],
  ["feedback", "Feedback", "✎"]
];

export function renderExtraPage(view, selectedPlan = "") {
  if (view === "dashboard") return `
    <div class="product-page dashboard-page">
      <header class="dashboard-welcome">
        <div class="dashboard-hello">${avatar("dashboard-avatar")}<div><div class="eyebrow">YOUR FORMA WORKSPACE</div><h1>Good to see you, Hardik.</h1><p>A home for the things you’re making and the system behind them.</p></div></div>
        <a class="button button-dark" href="#feedback" data-view="feedback">Share feedback <span>↗</span></a>
      </header>
      <section class="dashboard-metrics" aria-label="Forma library overview">
        <article class="metric-card metric-green"><span>THE LIBRARY</span><strong>09</strong><small>Design system chapters</small><a href="#home" data-library-anchor="foundations">Explore the library ↗</a></article>
        <article class="metric-card"><span>REUSABLE ELEMENTS</span><strong>57</strong><small>Reference items across 9 chapters</small><a href="#home" data-library-anchor="components">Browse components ↗</a></article>
        <article class="metric-card"><span>THE JOURNAL</span><strong>03</strong><small>Notes on design and making</small><a href="#blog" data-view="blog">Read the blog ↗</a></article>
        <article class="metric-card metric-lilac"><span>YOUR PROFILE</span>${avatar("metric-avatar")}<strong>Hardik Arya</strong><small>Ui Designer system management</small><a href="#profile" data-view="profile">View profile ↗</a></article>
      </section>
      <div class="dashboard-columns">
        <section class="dashboard-library">
          <div class="dash-section-heading"><div><span class="eyebrow">BUILT TO BE EXPLORED</span><h2>Start anywhere.</h2></div><a href="#home" data-library-anchor="foundations">All chapters ↗</a></div>
          <div class="dash-chapter-list">
            <a href="#home" data-library-anchor="foundations"><span class="dash-chapter-num">01</span><span class="dash-chapter-mark mark-lime">✳</span><span><strong>Foundations</strong><small>Colour, type, spacing, and tokens.</small></span><span class="dash-chapter-arrow">↗</span></a>
            <a href="#home" data-library-anchor="components"><span class="dash-chapter-num">02</span><span class="dash-chapter-mark mark-blue">▦</span><span><strong>Components</strong><small>Reusable pieces for thoughtful interfaces.</small></span><span class="dash-chapter-arrow">↗</span></a>
            <a href="#home" data-library-anchor="patterns"><span class="dash-chapter-num">05</span><span class="dash-chapter-mark mark-rose">⌁</span><span><strong>Patterns</strong><small>Familiar flows, considered from the start.</small></span><span class="dash-chapter-arrow">↗</span></a>
            <a href="#home" data-library-anchor="accessibility"><span class="dash-chapter-num">08</span><span class="dash-chapter-mark mark-lilac">◉</span><span><strong>Accessibility</strong><small>Make room for more people.</small></span><span class="dash-chapter-arrow">↗</span></a>
          </div>
        </section>
        <aside class="dashboard-actions"><span class="eyebrow">WHAT WOULD YOU LIKE TO DO?</span><h2>Make a little<br><em>progress.</em></h2>
          <a href="#profile" data-view="profile"><span class="dash-action-icon">◉</span><span><strong>Open your profile</strong><small>Make it personal.</small></span><b>↗</b></a>
          <a href="#blog" data-view="blog"><span class="dash-action-icon">▤</span><span><strong>Read the journal</strong><small>Find a fresh point of view.</small></span><b>↗</b></a>
          <a href="#pricing" data-view="pricing"><span class="dash-action-icon">◇</span><span><strong>Explore the plans</strong><small>Find your starting point.</small></span><b>↗</b></a>
          <a href="#support" data-view="support"><span class="dash-action-icon">◌</span><span><strong>Talk to support</strong><small>Open a local chat preview.</small></span><b>↗</b></a>
        </aside>
      </div>
      <footer class="page-footer"><span>YOUR WORKSPACE, YOUR PACE</span><a href="#feedback" data-view="feedback">Tell me what you think ↗</a></footer>
    </div>`;

  if (view === "feedback") return `
    <div class="product-page feedback-page">
      <header class="page-heading"><div><div class="eyebrow">A NOTE TO THE FORMA STUDIO</div><h1>Tell me what<br><em>you think.</em></h1><p>Share an idea, point out a rough edge, or tell us what you’d like to see next.</p></div><span class="feedback-label"><span>✳</span> YOUR VOICE MATTERS</span></header>
      <div class="feedback-layout">
        <form class="feedback-form" id="feedback-form">
          <label>Your name <span class="optional-label">OPTIONAL</span><input name="name" autocomplete="name" placeholder="What should we call you?"></label>
          <label>What’s this about?<select name="topic"><option>Choose a topic</option><option>The design system</option><option>A feature idea</option><option>Something isn’t working</option><option>Something else</option></select></label>
          <label>Your message <span class="optional-label">REQUIRED</span><textarea id="feedback-message" name="message" required maxlength="1200" rows="6" placeholder="Write your feedback here…"></textarea><span class="message-count"><span id="feedback-count">0</span> / 1200</span></label>
          <div class="feedback-consent"><span>✳</span><p>This is a local preview. Your note won’t be sent or stored.</p></div>
          <button class="button button-dark feedback-submit" type="submit">Send feedback <span>↗</span></button>
          <p class="feedback-status" id="feedback-status" role="status" aria-live="polite"></p>
        </form>
        <aside class="feedback-aside"><div class="feedback-aside-mark">✳</div><span class="eyebrow">SMALL DETAILS MAKE A DIFFERENCE</span><h2>Good systems<br>grow from <em>good conversations.</em></h2><p>Your feedback helps shape the next thoughtful detail. It’s fine to keep it short—or share the whole story.</p><div class="feedback-aside-foot"><span class="feedback-status-dot"></span>Thanks for helping Forma grow.</div></aside>
      </div>
      <footer class="page-footer"><span>THANK YOU FOR BEING HERE</span><a href="#dashboard" data-view="dashboard">Back to dashboard ↗</a></footer>
    </div>`;

  if (view === "typography") return `
    <div class="product-page typography-page">
      <header class="page-heading"><div><div class="eyebrow">FOUNDATIONS / TYPOGRAPHY</div><h1>Words have a<br><em>shape of their own.</em></h1><p>A practical type system for clear hierarchy, comfortable reading, and a little personality.</p></div><span class="post-count">TYPE SCALE / 08 STYLES</span></header>
      <section class="type-hero-specimen" aria-label="Typography display specimen">
        <div class="type-hero-left"><span class="eyebrow">DISPLAY / MANROPE · 600</span><p>Good ideas<br><em>deserve space.</em></p><span class="type-hero-alphabet">Aa Bb Cc Dd Ee Ff Gg Hh</span></div>
        <div class="type-hero-right"><span class="type-hero-index">01 — DISPLAY</span><strong>48 / 52</strong><small>Font size / line height</small><div class="type-font-chip">MANROPE <span>DISPLAY</span></div></div>
      </section>
      <section class="typography-scale">
        <div class="type-scale-heading"><div><span class="eyebrow">A SHARED RHYTHM</span><h2>One voice. A clear scale.</h2></div><span class="type-pair-label">MANROPE + DM SANS + DM MONO</span></div>
        <div class="type-scale-list">
          <div class="type-scale-row"><div class="type-scale-meta"><strong>Display</strong><small>Manrope · 600</small></div><div class="type-scale-sample type-scale-display">Make it matter.</div><span class="type-scale-measure">48 / 52</span></div>
          <div class="type-scale-row"><div class="type-scale-meta"><strong>Heading 1</strong><small>Manrope · 600</small></div><div class="type-scale-sample type-scale-h1">Designed to feel right.</div><span class="type-scale-measure">36 / 42</span></div>
          <div class="type-scale-row"><div class="type-scale-meta"><strong>Heading 2</strong><small>Manrope · 600</small></div><div class="type-scale-sample type-scale-h2">A thoughtful system.</div><span class="type-scale-measure">28 / 34</span></div>
          <div class="type-scale-row"><div class="type-scale-meta"><strong>Heading 3</strong><small>Manrope · 600</small></div><div class="type-scale-sample type-scale-h3">Details make the difference.</div><span class="type-scale-measure">22 / 30</span></div>
          <div class="type-scale-row"><div class="type-scale-meta"><strong>Body</strong><small>DM Sans · 400</small></div><div class="type-scale-sample type-scale-body">Good systems make room for good ideas.</div><span class="type-scale-measure">16 / 26</span></div>
          <div class="type-scale-row"><div class="type-scale-meta"><strong>Body small</strong><small>DM Sans · 400</small></div><div class="type-scale-sample type-scale-small">Keep supporting details easy to scan and comfortable to read.</div><span class="type-scale-measure">13 / 20</span></div>
          <div class="type-scale-row"><div class="type-scale-meta"><strong>Caption</strong><small>DM Sans · 500</small></div><div class="type-scale-sample type-scale-caption">A LITTLE MORE CONTEXT</div><span class="type-scale-measure">11 / 16</span></div>
          <div class="type-scale-row"><div class="type-scale-meta"><strong>Label</strong><small>DM Mono · 400</small></div><div class="type-scale-sample type-scale-label">FOUNDATIONS / TYPE / 01</div><span class="type-scale-measure">10 / 14</span></div>
        </div>
      </section>
      <section class="type-usage-note"><span class="type-usage-mark">Aa</span><div><span class="eyebrow">TYPE IN PRACTICE</span><h2>Hierarchy without noise.</h2><p>Use display and heading styles to guide attention. Keep body copy relaxed, labels brief, and line length comfortable.</p></div><a href="#home" data-library-anchor="foundations">See the foundations ↗</a></section>
      <footer class="page-footer"><span>TYPE / MANROPE · DM SANS · DM MONO</span><a href="#component-library" data-view="component-library">Explore components ↗</a></footer>
    </div>`;

  if (view === "component-library") return `
    <div class="product-page component-library-page">
      <header class="page-heading"><div><div class="eyebrow">THE FORMA LIBRARY / COMPONENTS</div><h1>All the pieces.<br><em>Working together.</em></h1><p>Reusable interface building blocks, with clear examples and states you can explore.</p></div><span class="post-count">10 COMPONENTS / 02</span></header>
      <div class="component-library-slot" id="component-library-slot" aria-label="Component examples"></div>
      <p class="component-library-note">Try the tabs, buttons, pagination, and modal examples. These are interactive previews.</p>
      <footer class="page-footer"><span>COMPONENTS / REUSABLE ELEMENTS</span><a href="#typography" data-view="typography">Review typography ↗</a></footer>
    </div>`;

  if (view === "icons") return `
    <div class="product-page icon-library-page">
      <header class="page-heading"><div><div class="eyebrow">FORMA / ICON LIBRARY</div><h1>Small marks.<br><em>Clear meaning.</em></h1><p>A growing collection of familiar symbols, ready to use in thoughtful interfaces.</p></div><span class="post-count">BRAND ICONS / 02</span></header>
      <section class="icon-library-grid" aria-label="Brand icon examples">
        <article class="icon-library-card">
          <div class="icon-library-card-top"><span>01 / SEARCH & SIGN IN</span><span>GOOGLE</span></div>
          <div class="provider-stage google-stage">${providerIcons.google}</div>
          <div class="icon-library-info"><div><span class="eyebrow">MULTICOLOUR MARK</span><h2>Google</h2><p>Four-colour brand mark for search and account flows.</p></div><span class="provider-color-dot google-color-dot" aria-label="Google blue"></span></div>
          <div class="provider-sample">${providerIcons.google}<span>Continue with Google</span></div>
        </article>
        <article class="icon-library-card">
          <div class="icon-library-card-top"><span>02 / SIGN IN</span><span>APPLE</span></div>
          <div class="provider-stage apple-stage">${providerIcons.apple}</div>
          <div class="icon-library-info"><div><span class="eyebrow">MONOCHROME MARK</span><h2>Apple</h2><p>Simple monochrome brand mark for Apple account flows.</p></div><span class="provider-color-dot apple-color-dot" aria-label="Apple black"></span></div>
          <div class="provider-sample">${providerIcons.apple}<span>Continue with Apple</span></div>
        </article>
      </section>
      <p class="icon-library-note">These are visual examples. Social sign-in is not connected in this preview.</p>
      <footer class="page-footer"><span>ICONS / BRAND MARKS</span><a href="#home" data-library-anchor="assets">Explore icons & assets ↗</a></footer>
    </div>`;

  if (view === "profile") return `
    <div class="product-page profile-page">
      <div class="profile-cover"><img src="${spaceArt}" alt="Layered planets and colour in a deep space illustration"><span class="cover-caption">CREATIVE SPACE / 001</span></div>
      <section class="profile-intro">
        ${avatar("profile-portrait")}
        <div class="profile-heading"><div class="eyebrow">DESIGNER PROFILE · FORMA LIBRARY</div><h1>Hardik Arya</h1><p>Ui Designer system management</p><div class="profile-meta"><span>✳ UI & design systems</span><span>⌁ Independent designer</span></div></div>
        <button class="button button-light" data-view="support">${icon("chat")} Say hello</button>
      </section>
      <div class="profile-columns">
        <article class="profile-bio"><span class="eyebrow">A LITTLE ABOUT ME</span><h2>Thoughtful systems.<br><em>Human details.</em></h2><p>I’m Hardik, a UI designer interested in the details that help digital products feel clear, consistent, and considered. This is my space for design notes, visual explorations, and the systems behind good interfaces.</p><a class="profile-email" href="#support" data-view="support">${icon("mail")} Get in touch</a></article>
        <aside class="profile-focus"><span class="eyebrow">CURRENT FOCUS</span><div class="focus-line"><span>01</span><div><strong>Design systems</strong><small>Foundations that make room for creativity.</small></div></div><div class="focus-line"><span>02</span><div><strong>Interface design</strong><small>Useful, expressive, made for people.</small></div></div><div class="focus-line"><span>03</span><div><strong>Creative technology</strong><small>Exploring ideas at the edge of design.</small></div></div></aside>
      </div>
      <div class="profile-bottom"><span>DESIGN WITH INTENTION</span><span>HARDIK ARYA · 2026</span></div>
    </div>`;

  if (view === "blog") return `
    <div class="product-page blog-page">
      <header class="page-heading"><div><div class="eyebrow">THE FORMA JOURNAL · NOTES ON MAKING</div><h1>Thoughts on <em>good design.</em></h1><p>Small observations on the colours, type, and choices that make a system feel whole.</p></div><span class="post-count">03 NOTES / 2026</span></header>
      <article class="featured-post">
        <div class="featured-art"><div class="feature-ui-window"><div class="feature-window-top"><span></span><span></span><span></span><small>forma / components</small></div><div class="feature-ui-body"><span class="feature-small">A SYSTEM, IN PRACTICE</span><strong>Make room<br>for <em>better ideas.</em></strong><div class="feature-controls"><i></i><i></i><i></i></div><div class="feature-button">An interface that feels like you →</div></div></div><div class="featured-sticker">A SYSTEM<br>OF YOUR<br><i>own.</i></div></div>
        <div class="featured-copy"><span class="post-category">FEATURED · DESIGN SYSTEMS</span><h2>A good design system doesn’t make everything look the same.</h2><p>It gives good ideas a shared starting point—and leaves enough room for them to become their own thing.</p><a href="#post-system" class="post-read" data-open-post="post-system">Read the note <span>↗</span></a><span class="post-date">6 MIN READ · 03 NOV 2026</span></div>
      </article>
      <div class="journal-heading"><div><span class="eyebrow">FROM THE NOTEBOOK</span><h2>Design, in the details.</h2></div><span>01 — 03</span></div>
      <div class="post-grid">
        <article class="post-card" id="post-system"><div class="post-image post-image-space"><img src="${spaceArt}" alt="A colourful planet illustration against a deep space background"><span>ART DIRECTION / 01</span></div><div class="post-card-copy"><span class="post-category">ART DIRECTION · 4 MIN READ</span><h3>Start with a feeling, then build a system.</h3><p>How a visual point of view can help a component library feel like more than a kit.</p><a href="#post-system" class="post-read" data-open-post="post-system">Read the note <span>↗</span></a></div></article>
        <article class="post-card"><div class="post-image palette-image"><span>COLOUR HAS<br>A POINT OF VIEW.</span><div class="palette-orbit"></div><div class="palette-chip-row"><i></i><i></i><i></i><i></i><i></i></div><small>INK · LIME · SKY · ROSE · LILAC</small></div><div class="post-card-copy"><span class="post-category">FOUNDATIONS · 3 MIN READ</span><h3>Colour palettes that know when to speak.</h3><p>A palette is more than a handful of hex codes. It’s the feeling you return to.</p><a href="#foundations" data-library-anchor="foundations" class="post-read">Explore colour <span>↗</span></a></div></article>
        <article class="post-card"><div class="post-image type-image"><div class="type-card-label">TYPE STUDY / 03</div><strong>Words<br>have a<br><em>shape.</em></strong><div class="type-card-foot"><span>MANROPE</span><span>DM SANS</span><span>GOOGLE FONTS</span></div></div><div class="post-card-copy"><span class="post-category">TYPOGRAPHY · 5 MIN READ</span><h3>One type family, many different voices.</h3><p>Pairing a distinct display face with an everyday workhorse for clearer hierarchy.</p><a href="#foundations" data-library-anchor="foundations" class="post-read">Explore typography <span>↗</span></a></div></article>
      </div>
      <section class="post-detail" id="post-detail" hidden><button class="button button-light" data-close-post>← Back to all notes</button><div class="eyebrow">FEATURED · DESIGN SYSTEMS</div><h2>A good design system doesn’t make everything look the same.</h2><p>It gives teams shared foundations, reusable patterns, and a common language. The best systems do not flatten creative choices; they make the consistent parts easier so people can spend time on the important differences.</p><p>Start with a clear set of principles, make the components understandable, and leave room for the system to grow with the people using it.</p></section>
      <footer class="page-footer"><span>NOTES FROM THE FORMA STUDIO</span><a href="#profile" data-view="profile">Meet Hardik ↗</a></footer>
    </div>`;

  if (view === "pricing") {
    const plans = [
      { id: "free", name: "Free trial", price: "Free to explore", intro: "A thoughtful place to start.", list: ["UI design system", "HTML files", "CSS files", "JavaScript files"], button: "Start free trial" },
      { id: "pro", name: "Pro", price: "For growing teams", intro: "Everything to build across platforms.", list: ["Everything in Free", "React Native files", "Tailwind CSS file", "Component examples"], button: "Choose Pro", featured: true },
      { id: "max", name: "Max", price: "For the full toolkit", intro: "More ways to build, all together.", list: ["Everything in Pro", "Next.js app files", "Vue.js code files", "HTML, CSS & JavaScript"], button: "Choose Max" }
    ];
    return `
      <div class="product-page pricing-page">
        <header class="page-heading"><div><div class="eyebrow">PLANS THAT GROW WITH YOUR WORK</div><h1>Pick your <em>starting point.</em></h1><p>Start with the Forma UI design system. Choose the files and frameworks you need.</p></div></header>
        <div class="pricing-cards">${plans.map(plan => `<article class="price-card ${plan.featured ? "price-featured" : ""} ${selectedPlan === plan.id ? "price-selected" : ""}">${plan.featured ? '<span class="popular-label">MOST FLEXIBLE</span>' : ""}<span class="price-kicker">${plan.id === "free" ? "01 / TRY IT OUT" : plan.id === "pro" ? "02 / BUILD MORE" : "03 / EVERYTHING"}</span><h2>${plan.name}</h2><div class="price-tag">${plan.price}</div><p>${plan.intro}</p><button class="button ${plan.featured ? "button-dark" : "button-light"} plan-button" data-plan="${plan.id}">${plan.button} <span>↗</span></button><span class="includes-label">INCLUDED</span><ul>${plan.list.map(item => `<li><span>✓</span>${item}</li>`).join("")}</ul><div class="price-foot">One design system. Your way of building.</div></article>`).join("")}</div>
        <div class="pricing-note"><span>✳</span><p>Not sure which plan fits? <button class="text-link" data-view="support">Ask Hardik for a hand ↗</button></p></div>
        <footer class="page-footer"><span>THE RIGHT TOOLS FOR THE NEXT IDEA</span><a href="#signup" data-view="signup">Create your account ↗</a></footer>
      </div>`;
  }

  if (view === "support") return `
    <div class="product-page support-page">
      <header class="page-heading"><div><div class="eyebrow">HERE WHEN YOU NEED A HAND</div><h1>Good questions deserve<br><em>good answers.</em></h1><p>A friendly support-chat interface for questions about the Forma design system.</p></div><span class="support-online"><i></i> SUPPORT PREVIEW</span></header>
      <div class="support-layout">
        <aside class="support-intro"><div class="support-avatar-mark">${avatar()}</div><span class="eyebrow">FORMA / DIRECT</span><h2>Let’s figure it<br>out together.</h2><p>This is a local chat preview. Messages appear in this screen only; SMS and live-agent delivery are not connected yet.</p><div class="support-hours"><span class="support-status-dot"></span><div><strong>Chat interface demo</strong><small>No external messages are sent</small></div></div><div class="support-shortcuts"><span>DESIGN SYSTEM</span><span>ACCOUNT HELP</span><span>PLANS & FILES</span></div></aside>
        <section class="chat-window" aria-label="Support chat preview">
          <header class="chat-header"><div class="chat-header-icon">${icon("chat")}</div><div><strong>Forma support</strong><small><i></i> Preview conversation · Messages stay here</small></div><button class="chat-more" aria-label="More chat options">···</button></header>
          <div class="chat-date">TODAY · 10:42</div>
          <div class="chat-messages" id="chat-messages" aria-live="polite">
            <div class="chat-line support-message">${avatar("chat-avatar")}<div><span class="chat-sender">Forma support <small>10:42</small></span><div class="chat-bubble">Hi Hardik! This is a preview of your support chat. How can we help with your design system today?</div></div></div>
            <div class="chat-line user-message"><div><span class="chat-sender">You <small>10:43</small></span><div class="chat-bubble">I’d love to know more about the component files.</div></div>${avatar("chat-avatar")}</div>
            <div class="chat-line support-message">${avatar("chat-avatar")}<div><span class="chat-sender">Forma support <small>10:43</small></span><div class="chat-bubble">Of course. Take a look at the plans page, or leave a note here. Replies in this preview stay on your device.</div></div></div>
          </div>
          <form class="chat-compose" id="chat-form"><button class="chat-compose-icon" type="button" aria-label="Chat message icon">${icon("chat")}</button><label class="sr-only" for="chat-input">Write a message</label><input id="chat-input" autocomplete="off" placeholder="Write a message…" maxlength="300"><button class="chat-send" type="submit" aria-label="Add message to preview">↑</button></form>
          <div class="chat-disclaimer">Preview only · Nothing is sent by SMS or iMessage</div>
        </section>
      </div>
      <footer class="page-footer"><span>NEED MORE DETAIL?</span><a href="#pricing" data-view="pricing">Compare plans ↗</a></footer>
    </div>`;

  if (view === "signup" || view === "signin") {
    const signup = view === "signup";
    return `
      <div class="auth-stage ${signup ? "signup-stage" : "signin-stage"}">
        <div class="auth-backdrop"><img src="${spaceArt}" alt="" aria-hidden="true"><div class="auth-glass-orb orb-one"></div><div class="auth-glass-orb orb-two"></div></div>
        <section class="auth-card" aria-labelledby="auth-title"><a href="#home" data-view="home" class="auth-brand"><img class="brand-mark brand-mark-image" src="/forma-icon.png" alt=""><span>forma<span class="brand-period">.</span></span></a>
          <div class="eyebrow">${signup ? "A GOOD PLACE TO BEGIN" : "GOOD TO HAVE YOU BACK"}</div><h1 id="auth-title">${signup ? "Create your account." : "Welcome back."}</h1><p class="auth-subtitle">${signup ? "Start building a system that feels like yours." : "Sign in to continue with Forma."}</p>
          <form class="auth-form demo-auth-form" data-auth="${view}">
            <label>Full name<input name="fullName" autocomplete="name" required placeholder="Enter your Full Name"></label>
            <label>Email address<input type="email" name="email" autocomplete="email" required placeholder="Enter your Email address"></label>
            <label>Password<input type="password" name="password" autocomplete="${signup ? "new-password" : "current-password"}" minlength="8" required placeholder="Enter your Password"></label>
            ${selectedPlan ? `<input type="hidden" name="plan" value="${selectedPlan}"><span class="selected-plan-note">Selected plan · ${selectedPlan.toUpperCase()}</span>` : ""}
            <button class="button button-dark auth-submit" type="submit">${signup ? "Sign up" : "Sign in"} <span>↗</span></button><span class="auth-feedback" aria-live="polite"></span>
          </form>
          <div class="auth-divider"><span></span>or continue with<span></span></div>
          <div class="social-auth"><button type="button" class="social-button" data-social="Google">${providerIcons.google}<span>Google</span></button><button type="button" class="social-button" data-social="Apple">${providerIcons.apple}<span>Apple</span></button></div>
          <p class="auth-switch">${signup ? "Already have an account?" : "Don’t have an account?"} <a href="#${signup ? "signin" : "signup"}" data-view="${signup ? "signin" : "signup"}">${signup ? "Sign in" : "Sign up"}</a></p>
          <p class="auth-notice">Demo form only · Account creation and sign-in are not connected.</p>
        </section>
      </div>`;
  }

  return "";
}
