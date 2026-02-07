import Image from "next/image";

export default function Header() {
  return (
    <section className="bg-yellow-400 px-12 py-14 flex justify-between items-center">
      <div className="max-w-xl">
        <h1 className="text-4xl font-bold mb-4">ParticleAI</h1>
        <p className="text-lg">
          ParticleAI is an end-to-end platform for building, governing,
          and operating AI copilots and AI agents in production.
        </p>
      </div>

      <div className="hidden md:flex w-[520px] h-[260px] items-center justify-center">
  		<div className="relative w-full h-full bg-white rounded-lg overflow-hidden shadow-lg">
          <Image
            src="https://img.freepik.com/premium-vector/financial-analysis-web-concept-with-flat-people-website-design-man-working-with-data-chart-with-growth-arrow-making-financial-report-with-statistics-doing-presentation-vector-illustration_9209-19667.jpg"
            alt="Financial analysis illustration"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
