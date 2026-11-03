const portrait = "/attached_assets/CB4740EF-8E8A-4C05-9D97-3C6A04C45A2C_1793719038828.jpeg";
const spaceArt = "/attached_assets/IMG_5126_1793717332647.jpeg";
const icons = {
  chat: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M20 11.5a7.5 7.5 0 0 1-8 7.5 8 8 0 0 1-3-.6L4 20l1.5-4.2A7 7 0 0 1 4 11.5 7.5 7.5 0 0 1 12 4a7.5 7.5 0 0 1 8 7.5Z"/><path d="M8 11h.01M12 11h.01M16 11h.01"/></svg>',
  arrow: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14m-6-6 6 6-6 6"/></svg>',
  mail: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>'
};

const icon = name => `<span class="page-icon">${icons[name]}</span>`;
const avatar = (className = "") => `<img class="hardik-avatar ${className}" src="${portrait}" alt="Hardik Arya">`;

export const appNavigation = [
  ["home", "Home", "⌂"],
  ["profile", "Profile", "◉"],
  ["blog", "Blog", "▤"],
  ["pricing", "Plans", "◇"],
  ["support", "Live support", "◌"]
];

export function renderExtraPage(view, selectedPlan = "") {
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
        <section class="auth-card" aria-labelledby="auth-title"><a href="#home" data-view="home" class="auth-brand"><span class="brand-mark"><i></i><i></i><i></i><i></i></span><span>forma<span class="brand-period">.</span></span></a>
          <div class="eyebrow">${signup ? "A GOOD PLACE TO BEGIN" : "GOOD TO HAVE YOU BACK"}</div><h1 id="auth-title">${signup ? "Create your account." : "Welcome back."}</h1><p class="auth-subtitle">${signup ? "Start building a system that feels like yours." : "Sign in to continue with Forma."}</p>
          <form class="auth-form demo-auth-form" data-auth="${view}">
            <label>Full name<input name="fullName" autocomplete="name" required placeholder="Enter your Full Name"></label>
            <label>Email address<input type="email" name="email" autocomplete="email" required placeholder="Enter your Email address"></label>
            <label>Password<input type="password" name="password" autocomplete="${signup ? "new-password" : "current-password"}" minlength="8" required placeholder="Enter your Password"></label>
            ${selectedPlan ? `<input type="hidden" name="plan" value="${selectedPlan}"><span class="selected-plan-note">Selected plan · ${selectedPlan.toUpperCase()}</span>` : ""}
            <button class="button button-dark auth-submit" type="submit">${signup ? "Sign up" : "Sign in"} <span>↗</span></button><span class="auth-feedback" aria-live="polite"></span>
          </form>
          <div class="auth-divider"><span></span>or continue with<span></span></div>
          <div class="social-auth"><button type="button" class="social-button" data-social="Google"><span class="google-g">G</span>Google</button><button type="button" class="social-button" data-social="Apple"><span class="apple-mark">●</span>Apple</button></div>
          <p class="auth-switch">${signup ? "Already have an account?" : "Don’t have an account?"} <a href="#${signup ? "signin" : "signup"}" data-view="${signup ? "signin" : "signup"}">${signup ? "Sign in" : "Sign up"}</a></p>
          <p class="auth-notice">Demo form only · Account creation and sign-in are not connected.</p>
        </section>
      </div>`;
  }

  return "";
}
