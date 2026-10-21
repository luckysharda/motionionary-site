'use client';

import { useMemo, useState } from 'react';
import CreatorGallery from './components/CreatorGallery';

type Category = 'All' | 'Launch film' | 'Feature story' | 'Motion system';

const projects = [
  {
    id: 'signal',
    title: 'Signal / Find your focus',
    category: 'Launch film' as Category,
    description: 'A launch-film concept for a fictional focus and planning product.',
    palette: 'coral',
    shape: 'signal',
    number: '01',
    duration: '00:28',
  },
  {
    id: 'orbit',
    title: 'Orbit / Work in one flow',
    category: 'Feature story' as Category,
    description: 'A product-story concept about turning a scattered workflow into one clear path.',
    palette: 'blue',
    shape: 'orbit',
    number: '02',
    duration: '00:18',
  },
  {
    id: 'form',
    title: 'Form / Motion language',
    category: 'Motion system' as Category,
    description: 'An original motion-system study for a fictional analytics interface.',
    palette: 'lime',
    shape: 'form',
    number: '03',
    duration: '00:12',
  },
];

const categories: Category[] = ['All', 'Launch film', 'Feature story', 'Motion system'];

const references = [
  {
    repo: 'awesome-opus5-5-videos',
    owner: 'yihui-dev',
    summary: 'A curated index of Opus 5.5 video prompts and creator examples.',
    license: 'Repository code: MIT. Linked videos and prompts may have separate owners and terms.',
  },
  {
    repo: 'lemo-opuscar',
    owner: 'lemomo-ai',
    summary: 'A Claude Code skill for generating motion and video concepts.',
    license: 'Repository code: MIT. Creator films remain their creators’ work.',
  },
  {
    repo: 'pdoom-video',
    owner: 'mexicat',
    summary: 'A code-rendered karaoke music-video project.',
    license: 'Code: MIT. Song, lyrics, and audio are excluded from that license.',
  },
  {
    repo: 'PDoomVideo',
    owner: 'JohnHeibel',
    summary: 'A related Doom-themed video project.',
    license: 'No repository license identified. Source link only; no code or media reused.',
  },
  {
    repo: 'mg-styles-15',
    owner: 'Vincentwei1021',
    summary: 'Fifteen motion-graphics styles with prompts, demos, and code.',
    license: 'MIT applies to stated repository content; third-party files keep their own terms.',
  },
  {
    repo: 'ClaudeAnimationBase',
    owner: 'JohnHeibel',
    summary: 'A starter base for creating cartoon-style animations.',
    license: 'Repository: MIT. Review included character and asset rights before reuse.',
  },
  {
    repo: 'awesome-claude-5-5-videos',
    owner: 'athemeroy',
    summary: 'An index of examples and workflows with original writing and charts.',
    license: 'Original writing/charts: CC BY 4.0. Linked work and stills belong to creators.',
  },
  {
    repo: 'opus-video-prompts',
    owner: 'joeseesun',
    summary: 'A Chinese-language collection of Opus video prompt examples.',
    license: 'No repository license identified. Link only; no prompts or media copied.',
  },
];

function Artwork({ shape, palette, storyboard }: { shape: string; palette: string; storyboard: boolean }) {
  return (
    <div className={`artwork artwork--${palette} ${storyboard ? 'artwork--storyboard' : ''}`} aria-hidden="true">
      <div className="art-grid" />
      {shape === 'signal' && (
        <>
          <div className="signal-sun" />
          <div className="signal-window"><span /><span /><span /><i /><b /></div>
          <div className="signal-line" />
        </>
      )}
      {shape === 'orbit' && (
        <>
          <div className="orbit-ring orbit-ring--one" /><div className="orbit-ring orbit-ring--two" />
          <div className="orbit-core">FLOW</div><div className="orbit-node orbit-node--a" /><div className="orbit-node orbit-node--b" /><div className="orbit-node orbit-node--c" />
        </>
      )}
      {shape === 'form' && (
        <>
          <div className="form-bars"><i /><i /><i /><i /><i /></div>
          <div className="form-panel"><span /><span /><b /><b /></div>
          <div className="form-cursor">↗</div>
        </>
      )}
      <span className="art-mark">MOTIONIONARY / STUDY</span>
    </div>
  );
}

export default function Home() {
  const [category, setCategory] = useState<Category>('All');
  const [storyboard, setStoryboard] = useState(false);
  const filtered = useMemo(
    () => projects.filter((project) => category === 'All' || project.category === category),
    [category],
  );

  return (
    <main>
      <div className="announcement"><span className="pulse-dot" /> INDEPENDENT MOTION DESIGN FOR DIGITAL PRODUCTS <a href="#contact">TAKING PROJECT BRIEFS <span aria-hidden="true">↗</span></a></div>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Motionionary home"><img className="brand-icon" src="/motionionary-mark.svg" alt="" /><span>MOTIONIONARY<span className="brand-sub">INDEPENDENT MOTION STUDIO</span></span></a>
        <nav aria-label="Main navigation"><a href="#work">Work</a><a href="#services">Services</a><a href="#process">Process</a><a href="#references">Resources</a></nav>
        <a className="header-cta" href="#contact">Start a project <span aria-hidden="true">↗</span></a>
      </header>

      <section className="hero section-wrap" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span>01</span> SMALL STUDIO · BIG PRODUCT ENERGY</p>
          <h1>Make your<br />product <em>move.</em></h1>
          <p className="hero-intro">Motion design for software teams with something worth showing. Launch films, feature stories, and UI motion built to make the value click.</p>
          <div className="hero-actions"><a className="button button--light" href="#contact">Tell me what you’re building <span aria-hidden="true">↗</span></a><a className="text-link" href="#work">Explore concept work <span aria-hidden="true">↓</span></a></div>
          <div className="hero-note"><span className="hero-note-rule" /><span>Clear story. Considered motion.<br />Made around the product.</span></div>
        </div>
        <div className="hero-visual" aria-label="Original motion design concept graphic">
          <div className="visual-label">MOTIONIONARY / STUDY 001 <span>CONCEPT</span></div>
          <div className="visual-orbit visual-orbit--outer" /><div className="visual-orbit visual-orbit--inner" />
          <div className="visual-cross visual-cross--one">+</div><div className="visual-cross visual-cross--two">+</div>
          <div className="visual-card visual-card--back"><span className="mini-label">PRODUCT / 01</span><div className="mini-bars"><i /><i /><i /></div><div className="mini-dot" /></div>
          <div className="visual-card visual-card--front"><span className="mini-label">YOUR NEXT BIG IDEA</span><strong>Clarity<br /><em>in motion.</em></strong><span className="mini-arrow">↗</span></div>
          <div className="visual-caption"><span>01—03</span><span>STORY / STRUCTURE / MOTION</span><span>↘</span></div>
        </div>
        <div className="hero-bottom"><span>SCROLL TO EXPLORE</span><span className="scroll-line" /><span>BUILT FOR LAUNCH MOMENTS</span></div>
      </section>

      <section className="work-section section-wrap" id="work">
        <div className="section-heading"><div><p className="eyebrow"><span>02</span> THE WORK</p><h2>Ideas made<br /><em>visible.</em></h2></div><p className="section-lede">A growing set of original motion studies. These are self-directed concepts, created to explore how product stories can land with more clarity and character.</p></div>
        <div className="work-toolbar"><div className="filters" role="group" aria-label="Filter concept studies">{categories.map((item) => <button key={item} className={category === item ? 'filter is-active' : 'filter'} onClick={() => setCategory(item)} aria-pressed={category === item}>{item}</button>)}</div><button className="compare-toggle" type="button" role="switch" aria-checked={storyboard} onClick={() => setStoryboard(!storyboard)}><span className="switch-track"><i /></span><span>{storyboard ? 'Storyboard view' : 'Motion view'}</span><span className="compare-hint">COMPARE</span></button></div>
        {storyboard && <p className="view-note" role="status">Storyboard view shows the same original concepts as a static planning frame.</p>}
        <div className="project-grid" aria-live="polite">{filtered.map((project) => <article className="project-card" key={project.id}>
          <div className="project-media"><Artwork shape={project.shape} palette={project.palette} storyboard={storyboard} /><span className="project-number">{project.number} / 03</span><span className="project-duration">{storyboard ? 'FRAME 01' : project.duration}</span><span className="concept-pill">SELF-DIRECTED CONCEPT</span></div>
          <div className="project-meta"><div><p className="project-category">{project.category}</p><h3>{project.title}</h3><p className="project-desc">{project.description}</p></div><span className="project-arrow" aria-hidden="true">↗</span></div>
        </article>)}</div>
        <p className="portfolio-note"><span className="note-mark">i</span> Concept work, not commissioned client work. No client outcomes or performance claims are implied.</p>
      </section>

      <CreatorGallery />

      <section className="film-section section-wrap" aria-labelledby="film-title">
        <div className="film-heading">
          <div><p className="eyebrow"><span>04</span> A CREATOR FILM, SELECTED FOR REFERENCE</p><h2 id="film-title">Product, with<br /><em>presence.</em></h2></div>
          <p className="section-lede">A real motion-design film from LemoLab’s open-source showcase. Included as an attributed reference to show the craft and polish motion can bring to a product story.</p>
        </div>
        <figure className="film-figure">
          <video className="reference-video" controls playsInline preload="none" poster="/references/lemo-glass-product-poster.jpg" aria-label="Glass Product motion design reference film by LemoLab">
            <source src="/references/lemo-glass-product.mp4" type="video/mp4" />
            Your browser does not support embedded video. <a href="https://github.com/lemomo-ai/lemo-opuscar/releases/download/web/glass-product.mp4">Watch the film directly</a>.
          </video>
          <figcaption className="film-caption"><span><strong>Glass Product</strong><br />A creator film by LemoLab × Claude Opus 5.5</span><span className="film-credit">Not Motionionary client work · Used unchanged under <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noreferrer">CC BY 4.0</a> · <a href="https://github.com/lemomo-ai/lemo-opuscar" target="_blank" rel="noreferrer">Source & credits ↗</a></span></figcaption>
        </figure>
      </section>

      <section className="services-section" id="services"><div className="section-wrap services-inner">
        <div className="section-heading section-heading--services"><div><p className="eyebrow"><span>05</span> WHAT I CAN MAKE</p><h2>From first frame<br />to <em>final cut.</em></h2></div><p className="section-lede">One focused creative partner for the moments your product needs to make a lasting impression.</p></div>
        <div className="service-list">
          <article className="service-row"><span className="service-index">01</span><div><h3>Launch film</h3><p>A clear, crafted story that introduces your product and gives people a reason to care.</p></div><span className="service-tags">STRATEGY · STORY · ANIMATION</span><span className="service-arrow">↗</span></article>
          <article className="service-row"><span className="service-index">02</span><div><h3>Feature story</h3><p>Show how a meaningful feature works, where it fits, and why it matters.</p></div><span className="service-tags">PRODUCT · UI · EXPLAINER</span><span className="service-arrow">↗</span></article>
          <article className="service-row"><span className="service-index">03</span><div><h3>Motion system</h3><p>Reusable motion principles and UI moments that make your product feel cohesive.</p></div><span className="service-tags">MOTION · INTERACTION · TOOLKIT</span><span className="service-arrow">↗</span></article>
          <article className="service-row"><span className="service-index">04</span><div><h3>Launch cutdowns</h3><p>Purposeful edits for the channels where your story needs another life.</p></div><span className="service-tags">SOCIAL · PAID · PRODUCT</span><span className="service-arrow">↗</span></article>
        </div><p className="scope-note">Every scope is shaped around the brief. Share your goals and timing for a tailored estimate.</p>
      </div></section>

      <section className="process-section section-wrap" id="process"><div className="process-top"><div><p className="eyebrow"><span>06</span> HOW WE GET THERE</p><h2>A good process<br />keeps the <em>spark.</em></h2></div><p className="section-lede">A transparent, collaborative path from the first conversation to files your team can put to work.</p></div>
        <ol className="process-steps"><li><span>01 / ALIGN</span><h3>Brief & goals</h3><p>Agree audience, message, channels, deliverables, and what success should mean for you.</p></li><li><span>02 / SHAPE</span><h3>Story & boards</h3><p>Turn the brief into a focused script and storyboard before animation begins.</p></li><li><span>03 / DESIGN</span><h3>Styleframes</h3><p>Set the visual direction and product details together, with room to refine early.</p></li><li><span>04 / MAKE</span><h3>Animate & review</h3><p>Bring approved frames to life in clear review rounds with agreed feedback points.</p></li><li><span>05 / DELIVER</span><h3>Package & handoff</h3><p>Prepare agreed formats and cutdowns, then hand everything over for launch.</p></li></ol>
      </section>

      <section className="resource-section" id="references"><div className="section-wrap"><div className="resource-heading"><div><p className="eyebrow"><span>07</span> OPEN SOURCE, OPEN CREDIT</p><h2>Notes from<br /><em>the community.</em></h2></div><p className="section-lede">A short reading list from the supplied X post. These are references for learning—not Motionionary’s work. Each repository retains its own license and attribution terms.</p></div>
        <div className="resource-grid">{references.map((item, index) => <article className="resource-card" key={item.repo}><div className="resource-topline"><span>REF / {String(index + 1).padStart(2, '0')}</span><span>↗</span></div><h3>{item.repo}</h3><p className="resource-owner">BY <strong>{item.owner}</strong></p><p className="resource-summary">{item.summary}</p><p className="resource-license">{item.license}</p><a href={`https://github.com/${item.owner}/${item.repo}`} target="_blank" rel="noreferrer">VIEW SOURCE REPOSITORY <span aria-hidden="true">↗</span></a></article>)}</div>
      </div></section>

      <section className="contact-section section-wrap" id="contact"><div className="contact-copy"><p className="eyebrow"><span>08</span> YOUR NEXT MOVE</p><h2>Have a product<br />worth <em>showing?</em></h2><p>Tell me what you’re building and what the moment needs to do. I’ll reply with questions and a practical next step.</p><div className="contact-aside"><span className="contact-symbol">M</span><span>Independent by design.<br />Collaborative by default.</span></div></div>
        <div className="inquiry-form upwork-card">
          <div className="form-heading"><span>UPWORK CONTACT PATH</span><span>↗</span></div>
          <div className="upwork-mark" aria-hidden="true">U</div>
          <h3>Start the conversation on Upwork.</h3>
          <p>Use the public Upwork profile to share your product, project goals, and timing directly.</p>
          <a className="button button--lime form-submit" href="https://www.upwork.com/freelancers/~01cf5d446b15fc8e90" target="_blank" rel="noopener noreferrer">Contact via Upwork <span aria-hidden="true">↗</span></a>
          <p className="form-privacy">Opens the supplied public Upwork profile in a new tab.</p>
        </div>
      </section>

      <footer className="site-footer"><a className="wordmark" href="#top" aria-label="Motionionary home"><img className="brand-icon" src="/motionionary-mark.svg" alt="" /><span>MOTIONIONARY<span className="brand-sub">INDEPENDENT MOTION STUDIO</span></span></a><p>Original motion for products in motion.</p><div className="footer-links"><a href="#work">Work</a><a href="#references">Open-source references</a><a href="#contact">Project inquiry</a></div><span className="copyright">© MOTIONIONARY · CONCEPT PORTFOLIO</span></footer>
    </main>
  );
}
