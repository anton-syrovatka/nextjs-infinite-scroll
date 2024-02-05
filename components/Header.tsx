import Image from 'next/image';

function Header() {
  return (
    <header
      className="bg-ticket bg-center bg-cover bg-no-repeat opacity-70 sm:p-16 py-16 px-8 flex
        justify-center lg:items-center max-lg:flex-col w-full sm:gap-16 gap-0"
    >
      <div className="flex-1 flex flex-col gap-10">
        <Image
          src="./tmdb-logo.svg"
          alt="logo"
          width={300}
          height={100}
          className="object-contain"
        />
        <h1 className="sm:text-6xl text-5xl text-white -lg:max-w-lg font-bold -leading-[120%]">
          <p>Welcome.</p>
          <p className="red-gradient">Millions of movies to discover.</p>
          <p>Explore now.</p>
        </h1>
      </div>
    </header>
  );
}

export default Header;
