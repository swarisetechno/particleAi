import Image from "next/image";

export default function Header() {
  return (
    <section className="bg-yellow-400 px-12 py-14 flex justify-between items-center">
      <div className="max-w-xl">
        <h1 className="text-4xl font-bold mb-4">Particle OS</h1>
        <p className="text-lg">
          Particle OS is an end-to-end platform for building, governing,
          and operating AI copilots and AI agents in production.
        </p>
      </div>

      <div className="hidden md:flex w-[520px] h-[260px] items-center justify-center">
  		<div className="relative w-full h-full bg-white rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/Statistics-pana.svg"
              alt="Statistics illustration"
              fill
              className="object-cover"
              priority
            />
        </div>
      </div>
    </section>
  );
}
