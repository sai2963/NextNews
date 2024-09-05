export default function ArchiveLayout({ archive, latest }) {
  return (
    <div>
      <nav className="text-center">
        <span className="text-4xl font-extrabold  bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
          News Archive
        </span>
      </nav>

      <section>{archive}</section>
      <section>{latest}</section>
    </div>
  );
}
