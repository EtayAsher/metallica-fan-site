import type { Metadata } from "next";
import TriviaQuiz from "@/components/TriviaQuiz";

export const metadata: Metadata = {
  title: "Trivia Quiz",
  description: "Test your Metallica knowledge with 22 questions across Easy, Medium, and Hard difficulty levels.",
};

export default function TriviaPage() {
  return (
    <>
      <section className="bg-yellow-400 border-b-4 border-black px-4 sm:px-6 py-14">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px w-8 bg-black" />
            <span className="text-black text-[10px] font-black tracking-[0.4em] uppercase">Quiz</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-black uppercase tracking-tight">Metallica Trivia</h1>
          <p className="text-black/60 mt-3 text-sm max-w-lg leading-relaxed font-medium">
            22 questions spanning the band&apos;s full history. Easy to Hard difficulty. See how you stack up.
          </p>
        </div>
      </section>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
        <TriviaQuiz />
      </div>
    </>
  );
}
