import { Feature } from "@/types/feature";

const {
  NEXT_PUBLIC_VERCEL_SDK_URL,
  NEXT_PUBLIC_LOWCODENOCODE_URL,
  NEXT_PUBLIC_CODING_IDE_SDK_URL,
  NEXT_PUBLIC_EVALUATION_URL,
  NEXT_PUBLIC_AIGW_PROXY_URL,
  NEXT_PUBLIC_PRIVATE_LLM_URL,
  NEXT_PUBLIC_MCP_SERVER_URL,
} = process.env;

export const featureConfig: Feature[] = [
  {
    title: "Vercel SDK",
    subtitle: "Developer Tools",
    items: [
      "Seamless integration with Vercel platform",
      "Built‑in auth, storage, and edge primitives",
      "Optimized DX for serverless and AI apps",
    ],
    href: NEXT_PUBLIC_VERCEL_SDK_URL,
  },
  {
    title: "Lowcode-nocode",
    subtitle: "Development Teams",
    items: [
      "Drag-and-drop workflow builder",
      "Prebuilt connectors to enterprise apps",
      "Visual data mapping and transformations",
      "One-click deployment across environments",
    ],
    href: NEXT_PUBLIC_LOWCODENOCODE_URL,
  },
  {
    title: "Coding IDE/SDK",
    subtitle: "Agent Runtime",
    items: [
      "In-editor agent tools",
      "One-click deployment",
      "Live logs & traces",
    ],
    href: NEXT_PUBLIC_CODING_IDE_SDK_URL,
  },
  {
    title: "Evaluation",
    items: [
      "Scenario-based test suites",
      "Human + automated scoring",
      "Safety and quality benchmarks",
      "Regression tracking over time",
    ],
    href: NEXT_PUBLIC_EVALUATION_URL,
  },
  {
    title: "AiGW/proxy",
    items: [
      "Unified ingress for AI traffic",
      "Smart routing across models",
      "Rate limiting and quotas",
      "Centralized logging and metrics",
    ],
    href: NEXT_PUBLIC_AIGW_PROXY_URL,
  },
  {
    title: "Private LLM",
    items: [
      "Dedicated, isolated model runtime",
      "Bring-your-own data and weights",
      "Fine-tuning with enterprise governance",
      "On-prem or VPC deployment options",
    ],
    href: NEXT_PUBLIC_PRIVATE_LLM_URL,
  },
  {
    title: "MCP [server]",
    items: [
      "Central registry for MCP tools",
      "Secure connection to enterprise systems",
      "Multi-tenant session and state management",
      "Policy-driven access and auditing",
    ],
    href: NEXT_PUBLIC_MCP_SERVER_URL,
  },
];

export function getFeatureHref(title: string): string | undefined {
  return featureConfig.find((feature) => feature.title === title)?.href;
}
