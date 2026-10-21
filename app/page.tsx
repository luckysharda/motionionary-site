'use client';

import { useMemo, useState, type PointerEvent } from 'react';
import motionVideos from './data/motion-videos';

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

function startMotionPreview(event: PointerEvent<HTMLDivElement>) {
  if (event.pointerType !== 'mouse') return;
  const video = event.currentTarget.querySelector('video');
  if (!video || !video.paused) return;
  video.dataset.hoverPreview = 'true';
  video.muted = true;
  video.loop = true;
  void video.play().catch(() => {
    delete video.dataset.hoverPreview;
    video.loop = false;
    video.muted = false;
  });
}

function stopMotionPreview(event: PointerEvent<HTMLDivElement>) {
  const video = event.currentTarget.querySelector('video');
  if (!video || video.dataset.hoverPreview !== 'true') return;
  delete video.dataset.hoverPreview;
  video.pause();
  video.currentTime = 0;
  video.loop = false;
  video.muted = false;
}

function takeOverMotionPreview(event: PointerEvent<HTMLDivElement>) {
  const video = event.currentTarget.querySelector('video');
  if (!video || video.dataset.hoverPreview !== 'true') return;
  delete video.dataset.hoverPreview;
  video.loop = false;
  video.muted = false;
}

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
        <nav aria-label="Main navigation"><a href="#work">Work</a><a href="#demos">Demos</a><a href="#services">Services</a><a href="#process">Process</a></nav>
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
        <section className="motion-film-library" id="demos" aria-labelledby="motion-film-title">
          <div className="motion-film-heading">
            <div><p className="eyebrow"><span>DEMO VIDEOS / 07</span> ORIGINAL MOTION DESIGN</p><h3 id="motion-film-title">See the work<br /><em>in motion.</em></h3></div>
            <p className="section-lede">Seven original demo videos by Motionionary. Press play to explore the animation, pacing, and visual details.</p>
          </div>
          <div className="motion-film-grid">
            {motionVideos.map((video, index) => (
              <article className="motion-film-card" key={video.id}>
                <div className="motion-film-frame" onPointerEnter={startMotionPreview} onPointerLeave={stopMotionPreview} onPointerDown={takeOverMotionPreview}>
                  <video controls playsInline preload="metadata" poster={video.poster} aria-label={`Play ${video.title}`}>
                    <source src={video.src} type="video/mp4" />
                    Your browser does not support embedded video. <a href={video.src}>Open {video.title}</a>.
                  </video>
                  <span className="motion-film-index">DEMO / {String(index + 1).padStart(2, '0')}</span>
                  <span className="motion-preview-hint" aria-hidden="true"><span>HOVER FOR MOTION</span><span>TAP TO PLAY</span></span>
                </div>
                <div className="motion-film-meta"><h4>{video.title}</h4><span>{video.duration}</span></div>
                <p className="motion-film-tag">ORIGINAL DEMO VIDEO</p>
              </article>
            ))}
          </div>
        </section>
      </section>

      <section className="services-section" id="services"><div className="section-wrap services-inner">
        <div className="section-heading section-heading--services"><div><p className="eyebrow"><span>03</span> WHAT I CAN MAKE</p><h2>From first frame<br />to <em>final cut.</em></h2></div><p className="section-lede">One focused creative partner for the moments your product needs to make a lasting impression.</p></div>
        <div className="service-list">
          <article className="service-row"><span className="service-index">01</span><div><h3>Launch film</h3><p>A clear, crafted story that introduces your product and gives people a reason to care.</p></div><span className="service-tags">STRATEGY · STORY · ANIMATION</span><span className="service-arrow">↗</span></article>
          <article className="service-row"><span className="service-index">02</span><div><h3>Feature story</h3><p>Show how a meaningful feature works, where it fits, and why it matters.</p></div><span className="service-tags">PRODUCT · UI · EXPLAINER</span><span className="service-arrow">↗</span></article>
          <article className="service-row"><span className="service-index">03</span><div><h3>Motion system</h3><p>Reusable motion principles and UI moments that make your product feel cohesive.</p></div><span className="service-tags">MOTION · INTERACTION · TOOLKIT</span><span className="service-arrow">↗</span></article>
          <article className="service-row"><span className="service-index">04</span><div><h3>Launch cutdowns</h3><p>Purposeful edits for the channels where your story needs another life.</p></div><span className="service-tags">SOCIAL · PAID · PRODUCT</span><span className="service-arrow">↗</span></article>
        </div><p className="scope-note">Every scope is shaped around the brief. Share your goals and timing for a tailored estimate.</p>
      </div></section>

      <section className="process-section section-wrap" id="process"><div className="process-top"><div><p className="eyebrow"><span>04</span> HOW WE GET THERE</p><h2>A good process<br />keeps the <em>spark.</em></h2></div><p className="section-lede">A transparent, collaborative path from the first conversation to files your team can put to work.</p></div>
        <ol className="process-steps"><li><span>01 / ALIGN</span><h3>Brief & goals</h3><p>Agree audience, message, channels, deliverables, and what success should mean for you.</p></li><li><span>02 / SHAPE</span><h3>Story & boards</h3><p>Turn the brief into a focused script and storyboard before animation begins.</p></li><li><span>03 / DESIGN</span><h3>Styleframes</h3><p>Set the visual direction and product details together, with room to refine early.</p></li><li><span>04 / MAKE</span><h3>Animate & review</h3><p>Bring approved frames to life in clear review rounds with agreed feedback points.</p></li><li><span>05 / DELIVER</span><h3>Package & handoff</h3><p>Prepare agreed formats and cutdowns, then hand everything over for launch.</p></li></ol>
      </section>

      <section className="contact-section section-wrap" id="contact"><div className="contact-copy"><p className="eyebrow"><span>05</span> YOUR NEXT MOVE</p><h2>Have a product<br />worth <em>showing?</em></h2><p>Tell me what you’re building and what the moment needs to do. I’ll reply with questions and a practical next step.</p><div className="contact-aside"><span className="contact-symbol">M</span><span>Independent by design.<br />Collaborative by default.</span></div></div>
        <div className="inquiry-form upwork-card">
          <div className="form-heading"><span>UPWORK CONTACT PATH</span><span>↗</span></div>
          <div className="upwork-mark" aria-hidden="true">U</div>
          <h3>Start the conversation on Upwork.</h3>
          <p>Use the public Upwork profile to share your product, project goals, and timing directly.</p>
          <a className="button button--lime form-submit" href="https://www.upwork.com/freelancers/~01cf5d446b15fc8e90" target="_blank" rel="noopener noreferrer">Contact via Upwork <span aria-hidden="true">↗</span></a>
          <p className="form-privacy">Opens the supplied public Upwork profile in a new tab.</p>
        </div>
      </section>

      <footer className="site-footer"><a className="wordmark" href="#top" aria-label="Motionionary home"><img className="brand-icon" src="/motionionary-mark.svg" alt="" /><span>MOTIONIONARY<span className="brand-sub">INDEPENDENT MOTION STUDIO</span></span></a><p>Original motion for products in motion.</p><div className="footer-links"><a href="#work">Work</a><a href="#demos">Demo videos</a><a href="#contact">Project inquiry</a></div><span className="copyright">© MOTIONIONARY · CONCEPT PORTFOLIO</span></footer>
    </main>
  );
}
