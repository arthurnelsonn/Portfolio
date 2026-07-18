export default function Footer() {
  return (
    <footer className="bg-gray-950 border-t-2 border-white py-10">
      <div className="max-w-7xl mx-auto px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="text-2xl font-black text-white uppercase tracking-tight">Arthur Nelson Kings Pranoto</span>
        <div className="flex flex-col sm:flex-row items-center gap-4 text-sm text-gray-500 uppercase tracking-widest font-semibold">
          <span>© {new Date().getFullYear()} All rights reserved.</span>
          <span className="hidden sm:block text-gray-700">—</span>
          <span>Built with React & Tailwind CSS</span>
        </div>
      </div>
    </footer>
  );
}
