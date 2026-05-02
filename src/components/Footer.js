export default function Footer() {
  return (
    <footer className="bg-black text-white mt-10">
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center">
        
        <h2 className="text-lg font-semibold">NewsHub</h2>

        <p className="text-sm text-gray-400 mt-2 md:mt-0">
          © 2026 NewsHub. All rights reserved.
        </p>

        <div className="flex gap-4 mt-2 md:mt-0">
          <span className="cursor-pointer hover:text-gray-300">Privacy</span>
          <span className="cursor-pointer hover:text-gray-300">Terms</span>
        </div>
      </div>
    </footer>
  );
}