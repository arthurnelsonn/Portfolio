export default function Footer() {
  return (
    <footer className="border-t border-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-8 flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-gray-400">
        <span>© {new Date().getFullYear()} Your Name. All rights reserved.</span>
        <span>Built with React & Tailwind CSS</span>
      </div>
    </footer>
  );
}
