import Link from "next/link";

function ContactPage() {
  return (
    <div>
      <h1 className="text-5xl">Contact Page</h1>
      <Link href="/" className="hover:text-blue-500">
        Back to home
      </Link>
    </div>
  );
}
export default ContactPage;
