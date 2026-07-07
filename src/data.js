import {
  IconServerless, IconFineTune, IconEval, IconDataset,
  IconDeployments, IconUsage, IconBilling, IconMetrics,
  IconKeys, IconPower, IconRocket, IconDoc,
  IconHome, IconModelHub, IconPlay, IconLayers, IconPlug, IconShield,
} from './icons.jsx'

export const PROJECTS = [
  { id: 'zero-state', name: 'Zero State' },
  { id: 'hugging-face', name: 'Hugging Face' },
  { id: 'tailored-e2e', name: 'Tailored E2E' },
  { id: 'self-serve-e2e', name: 'Self-Serve E2E' },
  { id: 'keys', name: 'KEYS' },
  { id: 'northstar', name: 'Northstar' },
  { id: 'backup', name: 'Backup' },
  { id: 'pre-auth', name: 'Pre-Auth' },
  { id: 'v1-experience', name: 'V1 Experience' },
]

// Static items above the grouped nav (not wired to empty-state routes).
export const NAV_TOP = [
  { key: 'home', label: 'Home', icon: IconHome },
  { key: 'model-hub', label: 'Model Hub', icon: IconModelHub, chevron: true },
  { key: 'playground', label: 'Playground', icon: IconPlay, chevron: true },
]

export const NAV = [
  {
    group: 'Inference',
    items: [
      { key: 'serverless', label: 'Serverless', path: '/app/serverless', icon: IconServerless },
      { key: 'self-serve', label: 'Self-Serve Deployments', path: '/app/self-serve', icon: IconRocket },
      { key: 'tailored', label: 'Tailored Deployments', path: '/app/tailored', icon: IconLayers },
    ],
  },
  {
    group: 'Develop',
    items: [
      { key: 'fine-tuning', label: 'Serverless Fine-Tuning', path: '/app/fine-tuning', icon: IconFineTune },
      { key: 'evaluations', label: 'Evaluations', path: '/app/evaluations', icon: IconEval },
      { key: 'datasets', label: 'Datasets', path: '/app/datasets', icon: IconDataset },
    ],
  },
  {
    group: 'Monitor',
    items: [
      { key: 'deployments', label: 'Deployments', path: '/app/deployments', icon: IconDeployments },
      { key: 'usage', label: 'Usage', path: '/app/usage', icon: IconUsage },
      { key: 'billing', label: 'Billing', path: '/app/billing', icon: IconBilling },
      { key: 'metrics', label: 'Metrics', path: '/app/metrics', icon: IconMetrics },
    ],
  },
  {
    group: 'Manage',
    items: [
      { key: 'api-keys', label: 'API Keys', path: '/app/api-keys', icon: IconKeys },
      { key: 'integrations', label: 'Integrations', icon: IconPlug },
    ],
  },
]

// Static item pinned below the grouped nav.
export const NAV_BOTTOM = [{ key: 'admin', label: 'Admin', icon: IconShield, chevron: true }]

const DOCS = 'https://docs.crusoecloud.com/managed-inference/overview/'

const LLAMA_CODE = {
  model: 'accounts/crusoe/models/llama-3.3-70b-instruct',
  tabs: [
    {
      lang: 'Python',
      code: `import os
from openai import OpenAI

client = OpenAI(
    api_key=os.getenv("CRUSOE_API_KEY"),
    base_url="https://api.inference.crusoecloud.com/v1",
)

completion = client.chat.completions.create(
    model="meta-llama/Llama-3.3-70B-Instruct",
    messages=[
        {"role": "system", "content": "You are a helpful assistant."},
        {"role": "user", "content": "Hello!"},
    ],
)

print(completion.choices[0].message.content)`,
    },
    {
      lang: 'cURL',
      code: `curl https://api.inference.crusoecloud.com/v1/chat/completions \\
  -H "Authorization: Bearer $CRUSOE_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "meta-llama/Llama-3.3-70B-Instruct",
    "messages": [
      {"role": "system", "content": "You are a helpful assistant."},
      {"role": "user", "content": "Hello!"}
    ]
  }'`,
    },
    {
      lang: 'TypeScript',
      code: `import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.CRUSOE_API_KEY,
  baseURL: "https://api.inference.crusoecloud.com/v1",
});

const completion = await client.chat.completions.create({
  model: "meta-llama/Llama-3.3-70B-Instruct",
  messages: [
    { role: "system", content: "You are a helpful assistant." },
    { role: "user", content: "Hello!" },
  ],
});

console.log(completion.choices[0].message.content);`,
    },
  ],
}

// Badge icons for the centered hero.
export const BADGE_ICONS = {
  power: IconPower, rocket: IconRocket, tune: IconFineTune, doc: IconDoc,
  eval: IconEval, deploy: IconDeployments, usage: IconUsage,
  billing: IconBilling, metrics: IconMetrics, key: IconKeys, chip: IconServerless,
}

// Popular / catalog models shown as chips (from the real IF console).
const CATALOG = [
  { brand: 'Qwen', name: 'Qwen3 30B A3B', tags: ['Text To Text', 'Tunable'], desc: 'Efficient mixture-of-experts model, strong reasoning at low compute. Great for high-volume, cost-sensitive workloads.' },
  { brand: 'Meta', name: 'Llama 3.3 70B Instruct', tags: ['Text To Text', 'Tunable'], desc: 'Meta’s flagship open model, excellent instruction-following for production chat, RAG, and agents.' },
  { brand: 'OpenAI', name: 'gpt-oss-120b', tags: ['Text To Text', 'Tunable'], desc: 'OpenAI’s open-weight model, a capable general-purpose default with strong tool-use and long context.' },
  { brand: 'DeepSeek', name: 'R1 0528', tags: ['Text To Text', 'Tunable'], desc: 'Reasoning-optimized with transparent chain-of-thought, ideal for math, code, and multi-step problems.' },
]

export const PAGES = {
  // ── WITH cards → left-hero layout (illustration left, text right, cards below) ──
  serverless: {
    surface: 'Serverless Inference', layout: 'cards',
    pageTitle: 'Serverless Inference',
    title: 'Run your first model',
    desc: 'Call leading open models over an OpenAI-compatible API, no GPUs to manage, billed per token and accelerated by MemoryAlloy.',
    primary: { label: 'Open playground' },
    docs: DOCS,
    fullSteps: [
      { title: 'Create an API key', desc: 'Your key is shown only once, save it somewhere safe.',
        action: { type: 'button', label: 'Get API key', variant: 'outline', icon: 'key' } },
      { title: 'Choose a model', desc: 'Select a model and the code example updates automatically.',
        action: { type: 'model', brand: 'Meta', name: 'Llama 3.3 70B Instruct', meta: 'LLM · 131k context',
          price: '$0.25 Input · $0.13 Cached · $0.75 Output',
          note: 'Try the selected model in the Playground, or explore all available models including NVIDIA Nemotron, Gemma, GPT-OSS and more.',
          buttons: [{ label: 'Try Model', variant: 'outline' }, { label: 'Explore Model Catalog', variant: 'outline' }] } },
      { title: 'Make your first inference call', desc: 'OpenAI-compatible, swap the base URL, add your key, done.',
        action: { type: 'code', ...LLAMA_CODE } },
    ],
  },

  'self-serve': {
    surface: 'Self-Serve Deployments', layout: 'cards',
    pageTitle: 'Self-Serve Deployments',
    title: 'Deploy an on-demand endpoint',
    desc: [
      'Spin up on-demand endpoints in minutes, pay only while they run, scale to zero when idle and tear them down when you’re done. Browse the ',
      { text: 'Model Library', href: DOCS },
      ' to get started.',
    ],
    primary: { label: 'Create Deployment' },
    docs: DOCS,
    models: { title: 'Popular models to self-serve deploy', viewAll: true, action: 'Deploy', items: CATALOG.slice(0, 3) },
  },

  'fine-tuning': {
    surface: 'Serverless Fine-Tuning', layout: 'cards',
    pageTitle: 'Serverless Fine-Tuning',
    title: 'Fine-tune models',
    desc: 'Customize foundation models with your own data to specialize them for your domain and tasks.',
    primary: { label: 'Start a Fine-tuning Job', icon: 'upload' },
    docs: DOCS,
    models: { title: 'Select a base model from the Catalog to begin.', viewAll: true, action: 'Select', items: CATALOG.slice(0, 3) },
  },

  // ── NO cards → simple centered state (illustration + headline + description + CTA) ──
  tailored: {
    surface: 'Tailored Deployments', layout: 'centered',
    title: 'Tailored Deployment',
    desc: 'Tailored Deployments are available by request. Our team benchmarks your model on Crusoe hardware and provisions a dedicated, always-on endpoint sized to your workload. Submit a benchmarking request to get started.',
    primary: { label: 'Request Benchmarking' }, docs: DOCS,
  },

  evaluations: {
    surface: 'Evaluations', layout: 'centered', icon: 'eval',
    title: 'Evaluations',
    desc: 'Measure and compare model quality with the built-in eval harness to catch regressions before you ship a change to production.',
    primary: { label: 'New evaluation' }, docs: DOCS,
  },

  datasets: {
    surface: 'Datasets', layout: 'centered', icon: 'doc',
    tabs: ['Datasets', 'Models'],
    title: 'Datasets',
    desc: 'Manage your datasets to fine-tune your models.',
    primary: { label: 'Upload a dataset', icon: 'upload' }, docs: DOCS,
  },

  deployments: {
    surface: 'Deployments', layout: 'centered', icon: 'deploy',
    title: 'Deployments',
    desc: 'Your self-serve and tailored deployments will appear here with their status, model, and traffic. Create one to get started.',
    primary: { label: 'New deployment' }, docs: DOCS,
  },

  usage: {
    surface: 'Usage', layout: 'centered', icon: 'usage',
    title: 'Usage',
    desc: 'Token volume, request counts, and spend appear here in real time, broken down by model and API key, once you make your first request.',
    primary: { label: 'Open playground' }, docs: DOCS,
  },

  billing: {
    surface: 'Billing', layout: 'centered', icon: 'billing',
    title: 'Billing',
    desc: 'Usage-based billing across pay-per-token and provisioned throughput. Add a payment method to move beyond free limits.',
    primary: { label: 'Add payment method' }, docs: DOCS,
  },

  metrics: {
    surface: 'Metrics', layout: 'centered', icon: 'metrics',
    title: 'Metrics',
    desc: 'Time-to-first-token, throughput, and error rates, accelerated by MemoryAlloy, appear here as soon as traffic flows.',
    primary: { label: 'Open playground' }, docs: DOCS,
  },

  'api-keys': {
    surface: 'API Keys', layout: 'centered', icon: 'key',
    title: 'API Keys',
    desc: 'Generate a bearer token to authenticate requests against api.inference.crusoecloud.com. Keys are shown only once at creation.',
    primary: { label: 'Create API key' }, docs: DOCS,
  },
}
