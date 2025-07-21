import type { Route } from "./+types/resume.$id";
import Navbar from "~/components/Navbar";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Resume Details - Resumind" },
    { name: "description", content: "View resume analysis and feedback" },
  ];
}

export default function ResumeDetails() {
  return (
    <main className="bg-[url('/images/bg-main.svg')] bg-cover">
      <Navbar />
      <section className="main-section">
        <div className="page-heading">
          <h1>Resume Analysis</h1>
          <h2>Detailed feedback and scoring</h2>
        </div>
        <div className="w-full max-w-md">
          <p className="text-center text-gray-600">Resume details page - will be implemented in tutorial...</p>
        </div>
      </section>
    </main>
  );
}
