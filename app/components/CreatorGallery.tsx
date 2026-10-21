'use client';

import { useMemo, useState } from 'react';
import references from '../data/creator-motion-references.json';
import motionVideos from '../data/motion-videos';

type Reference = (typeof references)[number];
type Filter = 'All' | 'Canvas' | 'SVG' | '3D / WebGL' | 'Other';
const PAGE_SIZE = 40;
const filters: Filter[] = ['All', 'Canvas', 'SVG', '3D / WebGL', 'Other'];

function matchesFilter(item: Reference, filter: Filter) {
  if (filter === 'All') return true;
  if (filter === 'Canvas') return item.techTags.includes('canvas');
  if (filter === 'SVG') return item.techTags.includes('svg');
  if (filter === '3D / WebGL') return item.techTags.some((tag) => ['threejs', 'webgl', 'shader'].includes(tag));
  return !item.techTags.some((tag) => ['canvas', 'svg', 'threejs', 'webgl', 'shader'].includes(tag));
}

function displayTag(tag: string) {
  const names: Record<string, string> = { svg: 'SVG', css: 'CSS', 'ai-image': 'AI image', threejs: 'Three.js', webgl: 'WebGL', gsap: 'GSAP' };
  return names[tag] ?? tag.charAt(0).toUpperCase() + tag.slice(1);
}

export default function CreatorGallery() {
  const [filter, setFilter] = useState<Filter>('All');
  const [query, setQuery] = useState('');
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const filtered = useMemo(() => {
    const needle = query.trim().replace(/^@/, '').toLowerCase();
    return (references as Reference[]).filter((item) => {
      const matchesQuery = !needle || item.creator.toLowerCase().includes(needle) || item.techTags.some((tag) => tag.includes(needle));
      return matchesFilter(item, filter) && matchesQuery;
    });
  }, [filter, query]);

  function chooseFilter(next: Filter) {
    setFilter(next);
    setVisibleCount(PAGE_SIZE);
  }

  function search(value: string) {
    setQuery(value);
    setVisibleCount(PAGE_SIZE);
  }

  return (
    <section className="creator-library section-wrap" id="creator-library" aria-labelledby="creator-library-title">
      <div className="creator-library-heading">
        <div>
          <p className="eyebrow"><span>03</span> CREATOR-LED MOTION INDEX</p>
          <h2 id="creator-library-title">Ideas in<br /><em>good company.</em></h2>
        </div>
        <div className="creator-library-intro">
          <p className="section-lede">A growing gallery of motion studies alongside a directory of 229 creator-shared references.</p>
          <p className="creator-rights-note"><span aria-hidden="true">↗</span> Studio-supplied clips below · external creator posts stay at their source</p>
        </div>
      </div>

      <div className="creator-video-heading">
        <div><p className="eyebrow"><span>VIDEO / {String(motionVideos.length).padStart(2, '0')}</span> MOTION STUDIES</p><h3>Selected in<br /><em>good company.</em></h3></div>
        <p className="section-lede">{motionVideos.length} video studies to start the collection. More clips can be added to this gallery as they’re ready.</p>
      </div>
      <div className="creator-video-grid">
        {motionVideos.map((video, index) => (
          <article className="creator-card creator-video-card" key={video.id}>
            <div className="creator-video-frame">
              <video controls playsInline preload="none" poster={video.poster} aria-label={`Play ${video.title}`}>
                <source src={video.src} type="video/mp4" />
                Your browser does not support embedded video. <a href={video.src}>Open {video.title}</a>.
              </video>
              <span className="creator-card-index">M / {String(index + 1).padStart(3, '0')}</span>
            </div>
            <div className="creator-card-meta">
              <div className="creator-byline"><span className="creator-video-title">{video.title}</span><span>{video.duration}</span></div>
              <div className="creator-tags"><span>Motion design</span><span>Video</span></div>
              <p className="creator-video-credit">Studio-supplied clip · preview and play</p>
            </div>
          </article>
        ))}
      </div>

      <div className="creator-toolbar">
        <div className="creator-filters" role="group" aria-label="Filter creator references by technique">
          {filters.map((item) => <button key={item} type="button" className={filter === item ? 'creator-filter is-active' : 'creator-filter'} aria-pressed={filter === item} onClick={() => chooseFilter(item)}>{item}</button>)}
        </div>
        <label className="creator-search">
          <span className="sr-only">Search creators or techniques</span>
          <span aria-hidden="true">⌕</span>
          <input value={query} onChange={(event) => search(event.target.value)} placeholder="Search creators or techniques" />
          <kbd>/</kbd>
        </label>
      </div>

      <div className="creator-result-line" aria-live="polite"><span>{filtered.length} creator references</span><span>From the open-source motion index</span></div>

      <div className="creator-grid" aria-live="polite">
        {filtered.slice(0, visibleCount).map((item, index) => (
          <article className="creator-card" key={item.id}>
            <div className={`creator-card-art creator-card-art--${index % 5}`} aria-hidden="true">
              <span className="creator-card-orbit" />
              <span className="creator-card-cross">+</span>
              <span className="creator-card-index">M / {String(index + 1).padStart(3, '0')}</span>
              <span className="creator-card-open">↗</span>
            </div>
            <div className="creator-card-meta">
              <div className="creator-byline"><a href={item.creatorUrl} target="_blank" rel="noreferrer">@{item.creator.replace(/^@/, '')}</a><span>{item.added}</span></div>
              <div className="creator-tags">{item.techTags.slice(0, 3).map((tag) => <span key={tag}>{displayTag(tag)}</span>)}</div>
              <a className="creator-source-link" href={item.originalUrl} target="_blank" rel="noreferrer">Open original post <span aria-hidden="true">↗</span></a>
            </div>
          </article>
        ))}
      </div>

      {filtered.length === 0 && <p className="creator-empty">No creator posts match that search. Try another handle or technique.</p>}
      {visibleCount < filtered.length && <button className="creator-more" type="button" onClick={() => setVisibleCount((count) => Math.min(count + PAGE_SIZE, filtered.length))}>Show more references <span>({filtered.length - visibleCount} remaining)</span><i aria-hidden="true">↓</i></button>}
      <p className="creator-attribution">Index metadata adapted from <a href="https://github.com/yihui-dev/awesome-opus5-5-videos" target="_blank" rel="noreferrer">awesome-opus5-5-videos</a> (MIT). The four studio-supplied clips above are separate from this source-linked index; external videos and prompts remain with their creators.</p>
    </section>
  );
}
