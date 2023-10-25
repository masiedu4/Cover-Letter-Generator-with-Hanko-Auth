import Link from "next/link";

export default function Home() {
  return (
    <main>
      <p className="text-3xl text-center">
        Are you tired of spending hours crafting the perfect cover letter? Meet
        your new hero: our AI Cover Letter Generator! Say goodbye to
        writer&apos;s block and hello to professionally written cover letters
        tailored to your needs.
      </p>

      <div className="flex justify-center my-8 ">
        <Link href="/tickets">
          <button className="btn-primary text-3xl">Create Your Letters</button>
        </Link>
      </div>
    </main>
  );
}
