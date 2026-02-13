import Header from "@/components/Header";
import FeatureCard from "@/components/FeatureCard";
import {
  AISdkIcon,
  LowCodeIcon,
  IdeIcon,
  EvaluationIcon,
  GatewayIcon,
  PrivateLlmIcon,
  McpIcon,
  WhatsappIcon,
} from "@/components/Icons";
import { getFeatureHref } from "@/config/features";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">

      <Header />

      <section className="bg-white px-12 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

          <FeatureCard
            title="AI SDK"
            subtitle="Developer Tools"
            items={[
              "Seamless integration with AI platform",
              "Built‑in auth, storage, and edge primitives",
              "Optimized DX for serverless and AI apps",
            ]}
            href={getFeatureHref("AI SDK")}
            icon={<AISdkIcon />}
          />

          <FeatureCard
            title="Lowcode-nocode"
            subtitle="Development Teams"
            items={[
                "Drag-and-drop workflow builder",
                "Prebuilt connectors to enterprise apps",
                "Visual data mapping and transformations",
            ]}
            href={getFeatureHref("Lowcode-nocode")}
            icon={<LowCodeIcon />}
          />

          <FeatureCard
            title="Coding IDE/SDK"
            subtitle="Agent Runtime"
            items={[
			  "In-editor agent tools",
			  "One-click deployment",
			  "Live logs & traces",
            ]}
        href={getFeatureHref("Coding IDE/SDK")}
            icon={<IdeIcon />}
          />

          <FeatureCard
            title="Evaluation"
            items={[
                "Scenario-based test suites",
                "Human + automated scoring",
                "Safety and quality benchmarks",
                "Regression tracking over time",
            ]}
            href={getFeatureHref("Evaluation")}
            icon={<EvaluationIcon />}
          />

          <div className="md:col-span-4 flex flex-col md:flex-row md:justify-center gap-6 mt-4">
            <div className="flex-1 min-w-[260px] max-w-sm">
              <FeatureCard
                title="Ai GW"
                items={[
                    "Unified ingress for AI traffic",
                    "Smart routing across models",
                    "Rate limiting and quotas",
                    "Centralized logging and metrics",
                ]}
                href={getFeatureHref("Ai GW")}
                icon={<GatewayIcon />}
              />
            </div>

            <div className="flex-1 min-w-[260px] max-w-sm">
              <FeatureCard
                title="Private LLM"
                items={[
                 "Dedicated, isolated model runtime",
                 "Bring-your-own data and weights",
                 "Fine-tuning with enterprise governance",
                 "On-prem or VPC deployment options",
                ]}
                href={getFeatureHref("Private LLM")}
                icon={<PrivateLlmIcon />}
              />
            </div>


            <div className="flex-1 min-w-[260px] max-w-sm">
              <FeatureCard
                title="MCP [server]"
                items={[
                 "Central registry for MCP tools",
                 "Secure connection to enterprise systems",
                 "Multi-tenant session and state management",
                 "Policy-driven access and auditing",
                ]}
                href={getFeatureHref("MCP [server]")}
                icon={<McpIcon />}
              />
            </div>

            <div className="flex-1 min-w-[260px] max-w-sm">
              <FeatureCard
                title="Whatsapp"
                subtitle="Voice agent"
                items={[
                 "Real-time voice message processing and response",
                 "Natural language understanding for seamless conversations",
                ]}
                href={getFeatureHref("MCP [server]")}
                icon={<WhatsappIcon />}
              />
            </div>

          </div>

        </div>
      </section>

    </main>
  );
}
