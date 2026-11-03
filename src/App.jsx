import { useEffect, useMemo, useState } from "react";
import {
  AlertCircle, ArrowDown, ArrowRight, Bell, Blocks, BookOpen, Check, ChevronDown,
  ChevronRight, CircleHelp, Code2, Copy, Contrast, Eye, FileText, Heart, LayoutGrid,
  Menu, Moon, Palette, Search, Sparkles, SquareMousePointer, Sun, Type, X
} from "lucide-react";

const groups = [
  { name: "Getting started", items: [{ name: "Introduction", icon: BookOpen }, { name: "Foundations", icon: Blocks }] },
  { name: "Foundations", items: [{ name: "Color", icon: Palette }, { name: "Typography", icon: Type }] },
  { name: "Components", items: [
    { name: "Buttons", icon: SquareMousePointer }, { name: "Inputs", icon: FileText },
    { name: "Cards", icon: LayoutGrid }, { name: "Alerts", icon: AlertCircle },
    { name: "Badges", icon: Contrast }, { name: "Checkboxes", icon: Check },
    { name: "Switches", icon: Contrast }, { name: "Avatars", icon: Eye }
  ] }
];
const componentDescriptions = {
  Buttons: "Clear, confident actions for moving through an interface. A small set of variants covers the moments that matter.",
  Inputs: "Quietly capable fields that make the next step feel obvious. Start with a label, then let the content breathe.",
  Cards: "A flexible surface for bringing related information together without adding visual noise.",
  Alerts: "Helpful, human messages for moments that need a little more context.",
  Badges: "Compact labels for a status, category, or small piece of metadata.",
  Checkboxes: "A simple way to make a selection from a set of independent options.",
  Switches: "A considered on/off control for a setting that takes effect right away.",
  Avatars: "A familiar way to represent a person, with initials when a photo is not available.",
};
const codeSamples = {
  Buttons: `// Button variants\n<button className="button button-primary">Save changes</button>\n<button className="button button-secondary">Learn more</button>\n<button className="button button-ghost">Cancel</button>`,
  Inputs: `// Labeled input\n<label className="field">\n  <span>Email address</span>\n  <input type="email" placeholder="you@example.com" />\n</label>`,
  Cards: `// A quiet, useful surface\n<article className="card">\n  <span className="badge">New release</span>\n  <h3>A little more room</h3>\n  <p>Keep related details together.</p>\n  <button>Read the notes</button>\n</article>`,
  Alerts: `// Informative message\n<div role="status" className="alert">\n  <Check aria-hidden="true" />\n  <div><strong>Changes saved</strong>\n    <p>Your workspace is up to date.</p>\n  </div>\n</div>`,
  Badges: `// Status and category labels\n<span className="badge badge-success">Published</span>\n<span className="badge">In review</span>\n<span className="badge badge-warm">Draft</span>`,
  Checkboxes: `// A single, independent choice\n<label className="checkbox">\n  <input type="checkbox" />\n  <span>Send me product updates</span>\n</label>`,
  Switches: `// Immediate preference control\n<button role="switch" aria-checked="true">\n  <span className="switch-thumb" />\n</button>`,
  Avatars: `// Initials fallback, no image required\n<div className="avatar" aria-label="Mina Lee">ML</div>\n<div className="avatar avatar-small">JT</div>`,
};
const allComponents = Object.keys(componentDescriptions);
const colors = [
  { name: "Canvas", value: "#F7F6F2", color: "#f7f6f2" },
  { name: "Paper", value: "#FFFEFA", color: "#fffefa" },
  { name: "Moss", value: "#536D59", color: "#536d59" },
  { name: "Sage", value: "#E8EEE7", color: "#e8eee7" },
  { name: "Terracotta", value: "#BC6D54", color: "#bc6d54" },
];

function App() {
  const [page, setPage] = useState("Introduction");
  const [search, setSearch] = useState("");
  const [tab, setTab] = useState("Preview");
  const [theme, setTheme] = useState(() => localStorage.getItem("forma-theme") || "light");
  const [mobileNav, setMobileNav] = useState(false);
  const [toast, setToast] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [size, setSize] = useState("Medium");
  const [switchOn, setSwitchOn] = useState(true);
  const [checked, setChecked] = useState(true);
  const [inputValue, setInputValue] = useState("");
  const [selected, setSelected] = useState("Overview");
  useEffect(() => { document.documentElement.dataset.theme = theme; localStorage.setItem("forma-theme", theme); }, [theme]);
  useEffect(() => {
    const handler = (event) => { if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") { event.preventDefault(); document.querySelector("#global-search")?.focus(); } };
    window.addEventListener("keydown", handler); return () => window.removeEventListener("keydown", handler);
  }, []);
  useEffect(() => {
    if (!toast) return;
    const timer = setTimeout(() => setToast(""), 2200);
    return () => clearTimeout(timer);
  }, [toast]);
  const filtered = useMemo(() => allComponents.filter(item => item.toLowerCase().includes(search.toLowerCase())), [search]);
  const choose = (name) => { setPage(name); setSearch(""); setTab("Preview"); setMobileNav(false); };
  const copy = async (value) => {
    try { await navigator.clipboard.writeText(value); setToast("Copied to clipboard"); }
    catch { setToast("Clipboard access is unavailable"); }
  };
  const activeComponent = componentDescriptions[page];
  const title = page === "Introduction" ? "A good place to begin." : page;
  const subtitle = activeComponent || (page === "Color" ? "A quiet, earthy palette brings clarity to the things that matter." : page === "Typography" ? "A typography system with a clear voice and room to think." : "A practical foundation for making thoughtful, consistent interfaces.");
  return <div className="app-shell">
    <header className="topbar">
      <button className="icon-button mobile-menu" aria-label={mobileNav ? "Close navigation" : "Open navigation"} onClick={() => setMobileNav(!mobileNav)}>{mobileNav ? <X size={16}/> : <Menu size={16}/>}</button>
      <button className="brand" aria-label="Forma home" onClick={() => choose("Introduction")}>
        <span className="brand-mark"><span style={{font: "800 14px Manrope", letterSpacing:"-1px"}}>f.</span></span><span className="brand-name">forma</span><span className="brand-sub">design system</span>
      </button>
      <div className="top-search"><Search size={15}/><input id="global-search" aria-label="Search components" placeholder="Search components..." value={search} onChange={e => setSearch(e.target.value)} /><span className="shortcut">⌘ K</span></div>
      <div className="top-actions"><span className="version">V 1.4.0</span><button className="icon-button" aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`} onClick={() => setTheme(theme === "light" ? "dark" : "light")}>{theme === "light" ? <Moon size={16}/> : <Sun size={16}/>}</button><button className="icon-button" aria-label="About Forma" onClick={() => setToast("Forma is a practical component reference.")}><CircleHelp size={16}/></button></div>
    </header>
    <div className="layout">
      <aside className={`sidebar ${mobileNav ? "open" : ""}`} aria-label="Main navigation">
        {groups.map(group => <div className="side-group" key={group.name}>
          <div className="side-caption">{group.name}</div>
          {group.items.map(item => { const Icon = item.icon; const active = page === item.name || (item.name === "Foundations" && (page === "Color" || page === "Typography")); return <button key={item.name} className={`side-link ${active ? "active" : ""}`} onClick={() => choose(item.name)}><Icon size={15}/>{item.name}{item.name === "Buttons" && <span className="count">08</span>}</button>; })}
        </div>)}
        <div className="side-note"><div className="side-note-label"><Sparkles size={13}/> A living library</div><p>Small, useful patterns. Thoughtfully made to work together.</p></div>
      </aside>
      <main className="main">
        <div className="crumb"><span>Forma</span><ChevronRight size={13}/><strong>{page === "Introduction" ? "Overview" : page}</strong></div>
        {search ? <SearchResults items={filtered} onChoose={choose} query={search}/> : page === "Introduction" ? <IntroPage choose={choose} copy={copy}/> : page === "Color" || page === "Typography" ? <FoundationsPage page={page} title={title} subtitle={subtitle} tab={tab} setTab={setTab} copy={copy}/> : activeComponent ? <ComponentPage page={page} subtitle={subtitle} tab={tab} setTab={setTab} copy={copy} disabled={disabled} setDisabled={setDisabled} size={size} setSize={setSize} switchOn={switchOn} setSwitchOn={setSwitchOn} checked={checked} setChecked={setChecked} inputValue={inputValue} setInputValue={setInputValue} selected={selected} setSelected={setSelected} toast={setToast}/> : <IntroPage choose={choose} copy={copy}/>}
      </main>
    </div>
    {toast && <div className="toast" role="status">{toast}</div>}
  </div>;
}

function SearchResults({ items, onChoose, query }) {
  return <><div className="page-heading"><div><div className="eyebrow">Library search</div><h1>Find your component.</h1><p className="intro">Showing matches for “{query}”</p></div></div>{items.length ? <div className="component-list">{items.map(item => <button className="list-card" onClick={() => onChoose(item)} key={item}><strong>{item}<ArrowRight size={14} style={{float:"right"}}/></strong><span>{componentDescriptions[item]}</span></button>)}</div> : <div className="empty-state"><Search size={22} color="var(--quiet)"/><strong>No components found</strong><p>Try a shorter search, or browse the library from the left.</p></div>}</>;
}

function IntroPage({ choose, copy }) {
  return <>
    <div className="page-heading"><div><div className="eyebrow">The Forma library · 01 / 08</div><h1>A good place to begin.</h1><p className="intro">A practical component reference for people who care how the details fit together. Considered building blocks, ready to make your own.</p></div><div className="heading-tools"><button className="button primary" onClick={() => choose("Buttons")}>Explore components <ArrowRight size={14}/></button></div></div>
    <section className="section"><div className="section-head"><h2>Built for the everyday details</h2><span className="section-meta">A FEW THINGS TO KNOW</span></div><div className="component-list">
      {[["01", "A shared visual language", "A warm, grounded palette and a clear type system give every piece a natural home.", "Color"], ["02", "Useful by default", "Every control is here to solve a real interface problem, without getting in the way.", "Buttons"], ["03", "Made to make your own", "Start with a working pattern. Tune the details until they feel like yours.", "Inputs"], ["04", "A little room to breathe", "Thoughtful spacing, gentle contrast, and restraint where it counts.", "Typography"]].map(([number, title, detail, destination]) => <button className="list-card" onClick={() => choose(destination)} key={number}><span className="section-meta">{number} / 04</span><strong style={{marginTop:10}}>{title}<ArrowRight size={14} style={{float:"right"}}/></strong><span>{detail}</span></button>)}
    </div></section>
    <section className="section"><div className="section-head"><h2>Start with the essentials</h2><button className="button" onClick={() => choose("Buttons")}>Browse library <ArrowRight size={13}/></button></div><div className="showcase"><div className="showcase-top"><div className="showcase-title"><span className="live-dot"/>A small, solid foundation</div><span className="section-meta">READY TO USE</span></div><div className="preview-stage"><div className="preview-inner"><button className="component-button">Save changes</button><button className="component-button secondary">Learn more</button><button className="component-button ghost">Cancel</button></div><span className="stage-caption">BUTTONS · THREE CONSIDERED VARIANTS</span></div><div className="control-row"><span className="control-label">THE BASICS</span><span className="tag green">Accessible</span><span className="tag">Responsive</span><span className="tag coral">Customizable</span><button className="button" style={{marginLeft:"auto"}} onClick={() => copy("Forma — a practical component reference.")}><Copy size={13}/> Copy intro</button></div></div></section>
    <section className="section"><div className="section-head"><h2>Explore at your own pace</h2><span className="section-meta">8 COMPONENTS · 2 FOUNDATIONS</span></div><div className="component-list">{allComponents.slice(0,4).map(name => <button className="list-card" onClick={() => choose(name)} key={name}><strong>{name}<ArrowRight size={14} style={{float:"right"}}/></strong><span>{componentDescriptions[name]}</span></button>)}</div></section>
  </>;
}

function Showcase({ title, tab, setTab, code, children, controls, copy }) {
  return <div className="showcase"><div className="showcase-top"><div className="showcase-title"><span className="live-dot"/>{title}</div><div className="tabs" role="tablist" aria-label="Showcase view"><button role="tab" aria-selected={tab === "Preview"} className={`tab ${tab === "Preview" ? "active" : ""}`} onClick={() => setTab("Preview")}><Eye size={12} style={{verticalAlign:"-2px",marginRight:4}}/>Preview</button><button role="tab" aria-selected={tab === "Code"} className={`tab ${tab === "Code" ? "active" : ""}`} onClick={() => setTab("Code")}><Code2 size={12} style={{verticalAlign:"-2px",marginRight:4}}/>Code</button><button className="icon-button" style={{width:28,height:28,border:0,background:"transparent"}} aria-label="Copy code" onClick={() => copy(code)}><Copy size={14}/></button></div></div>{tab === "Preview" ? <div className="preview-stage">{children}<span className="stage-caption">LIVE PREVIEW · INTERACT TO EXPLORE</span></div> : <pre className="code-stage"><span className="code-muted">{"// Forma · " + title + "\n"}</span>{code}</pre>}{tab === "Preview" && controls && <div className="control-row">{controls}</div>}</div>;
}

function ComponentPage({ page, subtitle, tab, setTab, copy, disabled, setDisabled, size, setSize, switchOn, setSwitchOn, checked, setChecked, inputValue, setInputValue, selected, setSelected, toast }) {
  let demo;
  if (page === "Buttons") demo = <div className="preview-inner"><button className={`component-button ${size === "Small" ? "sm" : size === "Large" ? "lg" : ""}`} disabled={disabled}>Save changes</button><button className={`component-button secondary ${size === "Small" ? "sm" : size === "Large" ? "lg" : ""}`} disabled={disabled}>Learn more</button><button className="component-button ghost" disabled={disabled}>Cancel</button><button className="component-button danger" disabled={disabled}>Delete</button></div>;
  if (page === "Inputs") demo = <div style={{display:"grid",gap:14,width:"min(340px,100%)"}}><label style={{fontSize:11,color:"var(--muted)"}}>Your email address<input className="text-input" style={{display:"block",width:"100%",marginTop:7}} value={inputValue} placeholder="mina@studio.co" onChange={e => setInputValue(e.target.value)}/></label><label style={{fontSize:11,color:"var(--muted)"}}>Workspace<select className="select-demo" style={{display:"block",width:"100%",marginTop:7}} value={selected} onChange={e => setSelected(e.target.value)}><option>Overview</option><option>Design team</option><option>Research</option></select></label></div>;
  if (page === "Cards") demo = <article className="demo-card"><span className="demo-badge">New release</span><h3 style={{marginTop:12}}>A little more room</h3><p>Give the things that matter a little space to breathe.</p><button className="button" onClick={() => toast("Release notes opened")}>Read the notes <ArrowRight size={13}/></button></article>;
  if (page === "Alerts") demo = <div className="demo-alert" role="status"><Check size={17}/><div><strong>Changes saved</strong><p>Your workspace is up to date. Nothing left to do here.</p></div><button aria-label="Dismiss message" onClick={(e) => e.currentTarget.parentElement.remove()} style={{marginLeft:"auto",border:0,background:"transparent",color:"var(--muted)"}}><X size={14}/></button></div>;
  if (page === "Badges") demo = <div className="preview-inner"><span className="tag green">Published</span><span className="tag">In review</span><span className="tag coral">Draft</span><span className="tag">v1.4.0</span></div>;
  if (page === "Checkboxes") demo = <div style={{display:"grid",gap:15}}><label className="demo-checkbox"><input type="checkbox" checked={checked} onChange={e => setChecked(e.target.checked)}/> Send me a product update</label><label className="demo-checkbox"><input type="checkbox" checked={!checked} onChange={e => setChecked(!e.target.checked)}/> Keep me signed in</label></div>;
  if (page === "Switches") demo = <div className="toggle-line"><button role="switch" aria-checked={switchOn} className={`switch ${switchOn ? "on" : ""}`} onClick={() => setSwitchOn(!switchOn)} aria-label="Toggle notifications"><span/></button><span className="switch-label">Email notifications <span style={{color:"var(--quiet)"}}>· {switchOn ? "On" : "Off"}</span></span></div>;
  if (page === "Avatars") demo = <div className="preview-inner"><div className="avatar">ML</div><div className="avatar a2">JT</div><div className="avatar a3">RK</div><div className="avatar-stack"><div className="avatar small">ML</div><div className="avatar small a2">JT</div><div className="avatar small a3">RK</div></div></div>;
  const controls = page === "Buttons" ? <><span className="control-label">SIZE</span><select className="control-select" value={size} onChange={e => setSize(e.target.value)} aria-label="Button size"><option>Small</option><option>Medium</option><option>Large</option></select><button className="button" onClick={() => setDisabled(!disabled)}>{disabled ? "Enable buttons" : "Disable buttons"}</button><span className="control-label" style={{marginLeft:"auto"}}>{disabled ? "DISABLED" : "ENABLED"}</span></> : page === "Inputs" ? <><span className="control-label">FIELD STATE</span><span className="tag green">{inputValue ? "Has value" : "Empty"}</span><button className="button" onClick={() => {setInputValue("");setSelected("Overview");}}>Reset fields</button></> : page === "Switches" ? <><span className="control-label">CURRENT STATE</span><span className="tag">{switchOn ? "On" : "Off"}</span><button className="button" onClick={() => setSwitchOn(!switchOn)}>Toggle setting</button></> : page === "Checkboxes" ? <><span className="control-label">SELECTION</span><span className="tag">{checked ? "One selected" : "One selected"}</span><button className="button" onClick={() => setChecked(!checked)}>Change selection</button></> : <><span className="control-label">COMPONENT</span><span className="tag green">Interactive preview</span><span className="tag">Keyboard friendly</span></>;
  return <><div className="page-heading"><div><div className="eyebrow">Components · 0{allComponents.indexOf(page)+1}</div><h1>{page}<span style={{color:"var(--quiet)"}}>.</span></h1><p className="intro">{subtitle}</p></div><div className="heading-tools"><button className="button" onClick={() => copy(codeSamples[page])}><Copy size={14}/> Copy example</button></div></div>
    <section className="section"><div className="section-head"><h2>Try it out</h2><span className="section-meta">INTERACTIVE COMPONENT</span></div><Showcase title={`${page} · Default`} tab={tab} setTab={setTab} code={codeSamples[page]} controls={controls} copy={copy}>{demo}</Showcase></section>
    <section className="section"><div className="section-head"><h2>Made for real interfaces</h2><span className="section-meta">A FEW GOOD DEFAULTS</span></div><div className="component-list"><div className="list-card"><strong>Accessible, from the start</strong><span>Native controls, clear focus states, and semantic patterns keep this component usable for everyone.</span></div><div className="list-card"><strong>Small details, considered</strong><span>Every state has a purpose. Adjust the preview above to see how the component responds.</span></div></div></section>
  </>;
}

function FoundationsPage({ page, title, subtitle, tab, setTab, copy }) {
  const isColor = page === "Color";
  const code = isColor ? `:root {\n  --canvas: #F7F6F2;\n  --paper: #FFFEFA;\n  --moss: #536D59;\n  --sage: #E8EEE7;\n  --terracotta: #BC6D54;\n}` : `/* Type roles */\n--font-display: 'Manrope', sans-serif;\n--font-body: 'DM Sans', sans-serif;\n--font-mono: 'DM Mono', monospace;\n\n/* Display · 38 / 700 */\nfont: 700 38px/1.1 var(--font-display);`;
  return <><div className="page-heading"><div><div className="eyebrow">Foundations · 0{isColor ? "1" : "2"}</div><h1>{title}<span style={{color:"var(--quiet)"}}>.</span></h1><p className="intro">{subtitle}</p></div><div className="heading-tools"><button className="button" onClick={() => copy(code)}><Copy size={14}/> Copy tokens</button></div></div>
    <section className="section"><div className="section-head"><h2>{isColor ? "The palette" : "Type in its element"}</h2><span className="section-meta">{isColor ? "5 CORE TOKENS" : "A CLEAR, FLEXIBLE SCALE"}</span></div><Showcase title={isColor ? "Core color tokens" : "Display & body"} tab={tab} setTab={setTab} code={code} copy={copy}>{isColor ? <div className="color-grid">{colors.map(color => <div className="swatch" key={color.name}><div className="swatch-color" style={{background:color.color}}/><div className="swatch-name">{color.name}</div><div className="swatch-value">{color.value}</div></div>)}</div> : <div className="type-sample"><h2>A thoughtful place<br/>to start.</h2><p>Good things are built one considered detail at a time.</p><div style={{font:"11px var(--mono)",color:"var(--quiet)",marginTop:20}}>MANROPE 700 / DM SANS 400 / DM MONO</div></div>}</Showcase></section>
    <section className="section"><div className="section-head"><h2>{isColor ? "Color has a job to do" : "A scale with intention"}</h2><span className="section-meta">DESIGN NOTES</span></div><div className="component-list">{(isColor ? [["Surface first", "Warm neutrals set a gentle canvas, letting content do the talking."], ["Moss for meaning", "The muted green marks the interactive moments and important actions."]] : [["Manrope", "A rounded, assured display face for clear hierarchy."], ["DM Sans + Mono", "Readable, practical body copy paired with a precise utility voice."]]).map(([heading, body]) => <div className="list-card" key={heading}><strong>{heading}</strong><span>{body}</span></div>)}</div></section>
  </>;
}

export default App;
