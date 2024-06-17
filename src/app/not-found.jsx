import Link from "next/link";

const NotFound = () => {
  return (
    <section className="text-white flex h-[calc(100vh-64px)] justify-center items-center">
      <div className="flex justify-center items-center flex-col gap-y-8">
        <h1 className="text-3xl font-bold ">404 - Página no encontrada</h1>
        <Link href="/" className="text-xl font-bold underline hover:text-gray-200   ">
          Volver a inicio
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
