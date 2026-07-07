import { useState, useRef, useEffect } from 'react'
import { Routes, Route, Navigate, NavLink, useParams, useLocation } from 'react-router-dom'
import { NAV, NAV_TOP, NAV_BOTTOM, PROJECTS, PAGES } from './data.js'
import { CubeIllus } from './illustrations.jsx'
import { LOGOS } from './logos.jsx'
import {
  IconChevron, IconChevronRight, IconChevronUpDown, IconBell, IconUpload, IconPlus,
  IconSun, IconGrid, IconSunburst, IconPanel, IconChip, IconCode, IconExternal,
  IconServerless, IconSelfServe, IconFineTune, IconEval, IconDataset,
  IconDeployments, IconUsage, IconBilling, IconMetrics, IconKeys,
} from './icons.jsx'

const CARD_ICONS = {
  chip: IconServerless, layers: IconSelfServe, tune: IconFineTune,
  eval: IconEval, dataset: IconDataset, deploy: IconDeployments,
  usage: IconUsage, billing: IconBilling, metrics: IconMetrics, key: IconKeys,
}
const BTN_ICONS = { upload: IconUpload, plus: IconPlus, key: IconKeys }
const BRAND_COLOR = { Qwen: '#7a5cff', Meta: '#1d82ff', OpenAI: '#10a37f', DeepSeek: '#4d6bfe' }

function initials(name) { return name.trim().charAt(0).toUpperCase() }

/* ---------- Global top bar (full width) ---------- */
function GlobalTopbar() {
  const { pathname } = useLocation()
  const screen = pathname.split('/app/')[1]
  const surface = PAGES[screen]?.surface || 'Serverless Inference'
  return (
    <header className="gtopbar">
      <div className="gt-left">
        <span className="gt-panel"><IconPanel size={18} /></span>
        <span className="gt-logo"><span className="gt-logo-name">Crusoe</span><IconSunburst size={16} /></span>
        <span className="gt-divider" />
        <span className="gt-crumb">
          <span className="gt-crumb-product">Intelligence Foundry</span>
          <span className="gt-crumb-slash">/</span>
          <span className="gt-crumb-page">{surface}</span>
        </span>
      </div>
      <div className="gt-right">
        <span className="gt-icon" title="Theme"><IconSun size={17} /></span>
        <span className="gt-icon" title="Notifications"><IconBell size={17} /></span>
        <span className="gt-icon" title="Apps"><IconGrid size={17} /></span>
        <span className="gt-avatar">JD</span>
      </div>
    </header>
  )
}

/* ---------- Project switcher ---------- */
function ProjectSwitcher() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState(PROJECTS[0])
  const ref = useRef(null)
  useEffect(() => {
    const onClick = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false) }
    document.addEventListener('mousedown', onClick)
    return () => document.removeEventListener('mousedown', onClick)
  }, [])
  return (
    <div className="switcher" ref={ref}>
      <button className="switcher-trigger" onClick={() => setOpen((o) => !o)}>
        <span className="avatar sq">{initials(active.name)}</span>
        <span className="switcher-meta">
          <span className="switcher-label">Project</span>
          <span className="switcher-name">{active.name}</span>
        </span>
        <span className="switcher-chev"><IconChevronUpDown size={16} /></span>
      </button>
      {open && (
        <div className="menu">
          <div className="menu-label">Projects</div>
          {PROJECTS.map((p) => (
            <button key={p.id}
              className={'menu-item' + (p.id === active.id ? ' is-active' : '')}
              onClick={() => { setActive(p); setOpen(false) }}>
              <span className="avatar sq">{initials(p.name)}</span><span>{p.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

/* ---------- Sidebar ---------- */
function StaticItem({ item }) {
  const Icon = item.icon
  return (
    <div className="nav-item">
      <Icon size={18} /><span>{item.label}</span>
      {item.chevron && <span className="nav-chev"><IconChevronRight size={14} /></span>}
    </div>
  )
}

function Sidebar() {
  return (
    <aside className="sidebar">
      <ProjectSwitcher />
      <nav className="nav">
        <div className="nav-group">
          {NAV_TOP.map((item) => <StaticItem key={item.key} item={item} />)}
        </div>
        {NAV.map((section) => (
          <div className="nav-group" key={section.group}>
            <div className="nav-group-label">{section.group}</div>
            {section.items.map((item) => {
              const Icon = item.icon
              return item.path ? (
                <NavLink key={item.key} to={item.path}
                  className={({ isActive }) => 'nav-item' + (isActive ? ' is-active' : '')}>
                  <Icon size={18} /><span>{item.label}</span>
                </NavLink>
              ) : <StaticItem key={item.key} item={item} />
            })}
          </div>
        ))}
        <div className="nav-divider" />
        {NAV_BOTTOM.map((item) => <StaticItem key={item.key} item={item} />)}
      </nav>
      <div className="sidebar-footer">
        <span className="avatar sq">JD</span>
        <div className="user-meta">
          <div className="user-name">John Doe</div>
          <div className="user-sub">john@example.com</div>
        </div>
        <span className="switcher-chev"><IconChevronUpDown size={15} /></span>
      </div>
    </aside>
  )
}

// A single primary CTA — docs live as an inline link in the description.
function Actions({ primary }) {
  return <Button label={primary.label} variant="primary" icon={primary.icon} />
}

const DocLinkInline = ({ docs }) => (
  <>{' '}
    <a className="doc-link" href={docs} target="_blank" rel="noreferrer">View docs <IconExternal size={14} /></a>
  </>
)

function Button({ label, variant, icon }) {
  // White (primary) CTAs get a leading + unless they specify another icon.
  const resolved = icon || (variant === 'primary' ? 'plus' : null)
  const Icon = resolved ? BTN_ICONS[resolved] : null
  return (
    <button className={'btn ' + (variant === 'primary' ? 'btn-p' : 'btn-o')}>
      {Icon && <Icon size={15} />}{label}
    </button>
  )
}

function Desc({ desc, className = 'hero-desc', docs }) {
  const body = Array.isArray(desc)
    ? desc.map((seg, i) =>
        typeof seg === 'string'
          ? seg
          : <a key={i} className="hero-link" href={seg.href} target="_blank" rel="noreferrer">{seg.text}</a>)
    : desc
  return <p className={className}>{body}{docs && <DocLinkInline docs={docs} />}</p>
}

function ModelCard({ model }) {
  return (
    <div className="rescard rescard-click" role="button" tabIndex={0}>
      <div className="rescard-top">
        <span className="rescard-icon">{LOGOS[model.brand] || <IconChip size={20} />}</span>
        <div className="rescard-info">
          <div className="rescard-name">{model.brand}: {model.name}</div>
        </div>
      </div>
      <div className="rescard-tag">{model.tags.join(' · ')}</div>
    </div>
  )
}

/* ---------- Tabbed code block (step 3) ---------- */
function CodeBlock({ model, tabs }) {
  const [i, setI] = useState(0)
  return (
    <div className="gs-code">
      <div className="gs-code-model">
        <span className="gs-code-model-label">Model:</span>
        <span className="gs-code-model-val">{model}</span>
      </div>
      <div className="gs-code-tabs">
        {tabs.map((t, idx) => (
          <button key={t.lang} className={'gs-tab' + (idx === i ? ' active' : '')} onClick={() => setI(idx)}>{t.lang}</button>
        ))}
        <div className="gs-copy"><button className="gs-copy-btn">Copy</button></div>
      </div>
      <pre className="gs-code-body"><code>{tabs[i].code}</code></pre>
    </div>
  )
}

/* ---------- Step action (button / model selector / code) ---------- */
function StepAction({ action }) {
  if (!action) return null
  switch (action.type) {
    case 'button':
      return <Button {...action} />
    case 'buttons':
      return <div className="gs-btn-row">{action.items.map((b, i) => <Button key={i} {...b} />)}</div>
    case 'cli':
      return <pre className="card-cli"><code>{action.cmd}</code></pre>
    case 'model':
      return (
        <div>
          <div className="gs-model">
            <div className="gs-model-icon">{LOGOS[action.brand] || action.brand?.charAt(0) || 'M'}</div>
            <div className="gs-model-info">
              <div className="gs-model-brand">{action.brand}</div>
              <div className="gs-model-name">{action.name}</div>
              <div className="gs-model-meta">{action.meta}</div>
            </div>
            {action.price && <div className="gs-model-price">{action.price}</div>}
            <span className="gs-model-chev"><IconChevron size={18} /></span>
          </div>
          {action.note && <div className="gs-note">{action.note}</div>}
          {action.buttons && <div className="gs-btn-row">{action.buttons.map((b, i) => <Button key={i} {...b} />)}</div>}
        </div>
      )
    case 'code':
      return <CodeBlock model={action.model} tabs={action.tabs} />
    default:
      return null
  }
}

/* ---------- Graph line-art ---------- */
function GraphIllus() {
  return (
    <svg className="cloud-illus-svg" viewBox="0 0 220 190" fill="none"
      stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M110 10 L210 95 L110 180 L10 95 Z" />
      <path d="M22 120 C 46 70, 60 66, 74 92 C 86 114, 98 150, 112 96 C 124 54, 140 70, 156 92 C 172 112, 188 96, 198 84" />
      <circle cx="60" cy="70" r="5.5" fill="currentColor" stroke="none" />
      <circle cx="112" cy="96" r="5.5" fill="currentColor" stroke="none" />
    </svg>
  )
}

/* ---------- WITH cards: left-hero layout (illustration left, text right, cards below) ---------- */
function LeftHeroPage({ page, screen }) {
  return (
    <div className={'content page-' + screen}>
      <div className="content-inner wide">
        <div className="cloud-hero">
          <div className="cloud-illus"><CubeIllus /></div>
          <div className="cloud-hero-txt">
            <h2 className="cloud-title">{page.title}</h2>
            <Desc desc={page.desc} className="cloud-desc" docs={page.docs} />
            <div className="cloud-actions">
              <Actions primary={page.primary} />
            </div>
          </div>
        </div>

        {page.steps && (
          <>
            <div className="cloud-steps-label">{page.stepsLabel}</div>
            <div className="cloud-cards">
              {page.steps.map((s) => (
                <div className="cloud-card" key={s.n}>
                  <div className="cloud-card-top">
                    <span className="cloud-card-num">{s.n}</span>
                    <div className="cloud-card-titles">
                      <div className="cloud-card-title">{s.title}</div>
                      <div className="cloud-card-sub">{s.sub}</div>
                    </div>
                  </div>
                  {s.desc && <div className="cloud-card-desc">{s.desc}</div>}
                  <button className="btn btn-p cloud-card-btn">{s.button}</button>
                </div>
              ))}
            </div>
          </>
        )}

        {page.fullSteps && (
          <div className="gs-steps">
            {page.fullSteps.map((step, i) => (
              <div className="gs-step" key={i}>
                <span className="gs-step-num">{i + 1}</span>
                <div className="gs-step-body">
                  <div className="gs-step-title">{step.title}</div>
                  <div className="gs-step-desc">{step.desc}</div>
                  {step.action && <div className="gs-step-action"><StepAction action={step.action} /></div>}
                </div>
              </div>
            ))}
          </div>
        )}

        {page.models && (
          <div className="models-section">
            <div className="models-head">
              <span className="models-title">{page.models.title}</span>
              {page.models.viewAll && <a className="view-all">View All</a>}
            </div>
            <div className="model-grid">
              {page.models.items.map((m, i) => <ModelCard key={i} model={m} action={page.models.action} />)}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

/* ---------- NO cards: simple centered state (illustration + headline + description + CTA) ---------- */
function CenteredPage({ page }) {
  return (
    <div className="content">
      <div className="content-inner">
        <div className="hero">
          <div className="hero-illus"><CubeIllus /></div>
          <h1 className="hero-title">{page.title}</h1>
          <Desc desc={page.desc} docs={page.docs} />
          <div className="hero-actions">
            <Actions primary={page.primary} />
          </div>
        </div>
      </div>
    </div>
  )
}

function EmptyState() {
  const { screen } = useParams()
  const page = PAGES[screen]
  if (!page) return <Navigate to="/app/serverless" replace />
  return page.layout === 'cards' ? <LeftHeroPage page={page} screen={screen} /> : <CenteredPage page={page} />
}

export default function App() {
  return (
    <div className="app">
      <GlobalTopbar />
      <div className="app-body">
        <Sidebar />
        <main className="main">
          <Routes>
            <Route path="/" element={<Navigate to="/app/serverless" replace />} />
            <Route path="/app/:screen" element={<EmptyState />} />
            <Route path="*" element={<Navigate to="/app/serverless" replace />} />
          </Routes>
        </main>
      </div>
    </div>
  )
}
