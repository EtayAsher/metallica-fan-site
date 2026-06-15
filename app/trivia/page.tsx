import type { Metadata } from "next";
import TriviaQuiz from "@/components/TriviaQuiz";

export const metadata: Metadata = {
  title: "Trivia Quiz",
  description: "Test your Metallica knowledge with 22 questions across Easy, Medium, and Hard difficulty levels.",
};

export default function TriviaPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      <div className="border-b border-neutral-800 pb-8 mb-10">
        <span className="inline-block text-red-600 text-xs font-semibold tracking-[0.25em] uppercase mb-3">
          Quiz
        </span>
        <h1 className="text-3xl md:text-4xl font-black text-white">Metallica Trivia</h1>
        <p className="text-neutral-400 mt-2 text-sm max-w-lg">
          22 questions spanning the band&apos;s full history. Easy to Hard difficulty. See how you stack up.
        </p>
      </div>
      <TriviaQuiz />
    </div>
  );
}
