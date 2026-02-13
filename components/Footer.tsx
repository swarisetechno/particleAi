export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white px-12 py-3 flex items-center justify-between text-sm">
      <div className="flex items-center gap-2">
        <span className="inline-flex h-6 w-6 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-blue-500" />
        <span className="font-semibold tracking-wide text-gray-700 uppercase">
          Particle OS
        </span>
      </div>
      <span className="text-gray-400">© {new Date().getFullYear()} Particle OS</span>
    </footer>
  );
}
