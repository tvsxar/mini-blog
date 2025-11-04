function Footer() {
  return (
    <footer className="border-t border-gray-200 mt-16 py-10 px-4 sm:px-12 lg:px-25 bg-black text-white">
      <div className="mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        <h2 className="font-bold text-xl">
          Mini<span className="text-green-600">Blog</span>
        </h2>

        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} MiniBlog. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;