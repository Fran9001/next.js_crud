import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="navbar py-2 sm:py-3 bg-slate-900">
      <div className="container mx-auto flex justify-center items-center gap-x-16">
        <Link href="/" className="flex">
          <h3 className="text-center text-2xl sm:text-4xl text-white font-semibold hover:text-gray-200">Next.js CRUD
          </h3>
        </Link>
        <ul className="flex gap-x-2 sm:gap-x-8 text-lg mr-2 sm:mr-0 sm:text-xl">
          <li className="text-white flex">
            <Link href="/new" className="bg-slate-800 rounded hover:bg-slate-700 w-28 py-1 text-center">Nueva tarea</Link>
          </li>
          <li className="text-white flex">
            <Link href="/about" className="bg-slate-800 rounded hover:bg-slate-700 w-28 py-1 text-center">Acerca de</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
