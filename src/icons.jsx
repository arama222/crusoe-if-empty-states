// Minimal stroke icon set — no external dependencies.
const S = ({ children, size = 18 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    {children}
  </svg>
)

export const IconServerless = (p) => (
  <S {...p}><path d="M13 2L4.5 12.5H11l-1 9.5 8.5-10.5H12l1-9.5z" /></S>
)
export const IconSelfServe = (p) => (
  <S {...p}><rect x="3" y="4" width="18" height="6" rx="1.5" /><rect x="3" y="14" width="18" height="6" rx="1.5" /><path d="M7 7h.01M7 17h.01" /></S>
)
export const IconTailored = (p) => (
  <S {...p}><path d="M12 2l2.4 4.9 5.4.8-3.9 3.8.9 5.4L12 14.9 7.2 17l.9-5.4L4.2 7.7l5.4-.8L12 2z" /></S>
)
export const IconFineTune = (p) => (
  <S {...p}><path d="M4 21v-7M4 10V3M12 21v-9M12 8V3M20 21v-5M20 12V3" /><circle cx="4" cy="12" r="2" /><circle cx="12" cy="6" r="2" /><circle cx="20" cy="14" r="2" /></S>
)
export const IconEval = (p) => (
  <S {...p}><path d="M9 11l3 3L22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" /></S>
)
export const IconDataset = (p) => (
  <S {...p}><ellipse cx="12" cy="5" rx="8" ry="3" /><path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5" /><path d="M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" /></S>
)
export const IconDeployments = (p) => (
  <S {...p}><path d="M4 4h16v6H4zM4 14h16v6H4z" /><path d="M8 7h.01M8 17h.01" /></S>
)
export const IconUsage = (p) => (
  <S {...p}><path d="M3 3v18h18" /><path d="M7 14l3-4 3 3 5-7" /></S>
)
export const IconBilling = (p) => (
  <S {...p}><rect x="2" y="5" width="20" height="14" rx="2" /><path d="M2 10h20" /></S>
)
export const IconMetrics = (p) => (
  <S {...p}><rect x="3" y="12" width="4" height="8" rx="1" /><rect x="10" y="7" width="4" height="13" rx="1" /><rect x="17" y="3" width="4" height="17" rx="1" /></S>
)
export const IconKeys = (p) => (
  <S {...p}><circle cx="7.5" cy="15.5" r="4.5" /><path d="M10.5 12.5L21 2M17 6l3 3M14 9l2 2" /></S>
)
export const IconChevron = (p) => (
  <S {...p}><path d="M6 9l6 6 6-6" /></S>
)
export const IconPlus = (p) => (
  <S {...p}><path d="M12 5v14M5 12h14" /></S>
)
export const IconSearch = (p) => (
  <S {...p}><circle cx="11" cy="11" r="7" /><path d="M21 21l-4-4" /></S>
)
export const IconBell = (p) => (
  <S {...p}><path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.7 21a2 2 0 0 1-3.4 0" /></S>
)
export const IconExternal = (p) => (
  <S {...p}><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><path d="M15 3h6v6M10 14L21 3" /></S>
)
export const IconPower = (p) => (
  <S {...p}><path d="M12 3v9" /><path d="M6.6 6.6a8 8 0 1 0 10.8 0" /></S>
)
export const IconRocket = (p) => (
  <S {...p}><path d="M12 3c3 1.6 4.5 4.6 4.5 8.5L14 15h-4l-2.5-3.5C7.5 7.6 9 4.6 12 3z" /><circle cx="12" cy="9.5" r="1.3" /><path d="M10 15l-2.5 2.5M14 15l2.5 2.5M9.5 18.5 12 21l2.5-2.5" /></S>
)
export const IconDoc = (p) => (
  <S {...p}><path d="M7 3h7l4 4v14H7z" /><path d="M14 3v4h4" /><path d="M10 12h5M10 16h5" /></S>
)
export const IconUpload = (p) => (
  <S {...p}><path d="M12 15V4" /><path d="M8 8l4-4 4 4" /><path d="M5 15v3a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-3" /></S>
)
export const IconArrowRight = (p) => (
  <S {...p}><path d="M4 12h15M13 6l6 6-6 6" /></S>
)
export const IconHome = (p) => (
  <S {...p}><path d="M4 11l8-7 8 7" /><path d="M6 10v9h12v-9" /></S>
)
export const IconModelHub = (p) => (
  <S {...p}><path d="M5 20V9M12 20V4M19 20v-8" /></S>
)
export const IconPlay = (p) => (
  <S {...p}><path d="M7 5l12 7-12 7z" /></S>
)
export const IconLayers = (p) => (
  <S {...p}><path d="M12 3l9 5-9 5-9-5 9-5z" /><path d="M3 13l9 5 9-5" /></S>
)
export const IconPlug = (p) => (
  <S {...p}><path d="M9 3v5M15 3v5" /><path d="M7 8h10v3a5 5 0 0 1-10 0z" /><path d="M12 16v5" /></S>
)
export const IconShield = (p) => (
  <S {...p}><path d="M12 3l7 3v6c0 4-3 7-7 9-4-2-7-5-7-9V6z" /></S>
)
export const IconSun = (p) => (
  <S {...p}><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.4 1.4M17.6 17.6 19 19M19 5l-1.4 1.4M6.4 17.6 5 19" /></S>
)
export const IconGrid = (p) => (
  <S {...p}><rect x="4" y="4" width="7" height="7" rx="1.5" /><rect x="13" y="4" width="7" height="7" rx="1.5" /><rect x="4" y="13" width="7" height="7" rx="1.5" /><rect x="13" y="13" width="7" height="7" rx="1.5" /></S>
)
export const IconSunburst = (p) => (
  <S {...p}><circle cx="12" cy="12" r="2.4" /><path d="M12 2.5v3.5M12 18v3.5M2.5 12h3.5M18 12h3.5M5.3 5.3l2.5 2.5M16.2 16.2l2.5 2.5M18.7 5.3l-2.5 2.5M7.8 16.2l-2.5 2.5" /></S>
)
export const IconChevronRight = (p) => (
  <S {...p}><path d="M9 6l6 6-6 6" /></S>
)
export const IconChevronUpDown = (p) => (
  <S {...p}><path d="M8 9l4-4 4 4M8 15l4 4 4-4" /></S>
)
export const IconPanel = (p) => (
  <S {...p}><rect x="3" y="4" width="18" height="16" rx="2" /><path d="M9 4v16" /></S>
)
export const IconChip = (p) => (
  <S {...p}><rect x="6" y="6" width="12" height="12" rx="2" /><rect x="9.5" y="9.5" width="5" height="5" rx="1" /><path d="M9 2v2M15 2v2M9 20v2M15 20v2M2 9h2M2 15h2M20 9h2M20 15h2" /></S>
)
export const IconCode = (p) => (
  <S {...p}><path d="M8 6l-6 6 6 6M16 6l6 6-6 6" /></S>
)
