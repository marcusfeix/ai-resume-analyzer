import type { Route } from "./+types/auth";
import Navbar from "~/components/Navbar";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Upload Resume - Resumind" },
    { name: "description", content: "Upload your resume for AI analysis" },
  ];
}

export default function Auth() {
  return (
    <main className="bg-[url('/images/bg-main.svg')] bg-cover">
      <Navbar />
      <section className="main-section">
        <div className="page-heading">
          <h1>Upload Your Resume</h1>
          <h2>Get AI-powered feedback on your resume</h2>
        </div>
        <div className="w-full max-w-md">
          <p className="text-center text-gray-600">Upload functionality coming soon...</p>
        </div>
      </section>
    </main>
  );
}
