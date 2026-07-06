// Stylized brand marks for the model cards (brand-colored, on a dark tile).
// Simplified approximations — swap in official SVGs when available.
export const LOGOS = {
  Meta: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#0866FF"
      strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 12c1.7-2.9 3.1-4.1 4.9-4.1 2.3 0 3.9 1.8 3.9 4.1s-1.6 4.1-3.9 4.1c-1.8 0-3.2-1.2-4.9-4.1z" />
      <path d="M12 12c-1.7 2.9-3.1 4.1-4.9 4.1C4.8 16.1 3.2 14.3 3.2 12S4.8 7.9 7.1 7.9c1.8 0 3.2 1.2 4.9 4.1z" />
    </svg>
  ),
  Qwen: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="#7C5CFF">
      <path d="M12 3l3.9 2.25v4.5L12 12 8.1 9.75v-4.5z" opacity="0.5" />
      <path d="M12 12l3.9-2.25L19.8 12v4.5L15.9 18.75 12 16.5z" />
      <path d="M12 12v4.5L8.1 18.75 4.2 16.5V12l3.9-2.25z" opacity="0.8" />
    </svg>
  ),
  OpenAI: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#ededed"
      strokeWidth="1.7" strokeLinejoin="round">
      <path d="M12 3.2l7.4 4.3v8.6L12 20.8 4.6 16.1V7.5z" />
      <path d="M12 8v8M8.4 6.1l7.2 4.1M8.4 17.9l7.2-4.1" strokeWidth="1.15" />
    </svg>
  ),
  DeepSeek: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="#4D6BFE">
      <path d="M2.8 13.2c2-.2 3.5-1.2 4.6-3 .7 2.2 2.5 3.6 4.9 3.6 3 0 5.3-1.9 6.5-5.3.3 1 .9 1.8 1.8 2.3-.5 3.7-3.5 6.3-7.6 6.3-4.7 0-8.3-2.9-9.3-7-.4.1-.8.4-1.1.7z" />
      <circle cx="9" cy="12" r="0.95" fill="#0b0b0d" />
    </svg>
  ),
}
