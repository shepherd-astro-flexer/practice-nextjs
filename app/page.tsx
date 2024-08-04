import Link from "next/link";

function HomePage() {
  return (
    <div>
      <h1 className="text-5xl">Home Page</h1>
      <Link href="/about" className="text-blue-500 hover:opacity-75">
        About page
      </Link>
    </div>
  );
}
export default HomePage;
