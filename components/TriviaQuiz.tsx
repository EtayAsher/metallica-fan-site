"use client";

import { useState, useCallback } from "react";
import { triviaQuestions } from "@/data/trivia";
import type { Difficulty } from "@/data/trivia";

const difficultyBadge: Record<Difficulty, string> = {
  Easy:   "bg-emerald-500/20 text-emerald-400 border border-emerald-500/40",
  Medium: "bg-yellow-500/20  text-yellow-400  border border-yellow-500/40",
  Hard:   "bg-red-500/20     text-red-400     border border-red-500/40",
};

type AnswerState = "unanswered" | "correct" | "incorrect";

export default function TriviaQuiz() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [answerState, setAnswerState] = useState<AnswerState>("unanswered");
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [results, setResults] = useState<boolean[]>([]);

  const questions = triviaQuestions;
  const question = questions[currentIndex];
  const total = questions.length;

  const handleAnswer = useCallback(
    (optionIndex: number) => {
      if (answerState !== "unanswered") return;
      setSelectedOption(optionIndex);
      const isCorrect = optionIndex === question.correctIndex;
      setAnswerState(isCorrect ? "correct" : "incorrect");
      if (isCorrect) setScore((s) => s + 1);
      setResults((r) => [...r, isCorrect]);
    },
    [answerState, question.correctIndex]
  );

  const handleNext = useCallback(() => {
    if (currentIndex + 1 >= total) {
      setFinished(true);
    } else {
      setCurrentIndex((i) => i + 1);
      setSelectedOption(null);
      setAnswerState("unanswered");
    }
  }, [currentIndex, total]);

  const handleRestart = useCallback(() => {
    setCurrentIndex(0);
    setSelectedOption(null);
    setAnswerState("unanswered");
    setScore(0);
    setFinished(false);
    setResults([]);
  }, []);

  /* ── Results screen ── */
  if (finished) {
    const pct = Math.round((score / total) * 100);
    const grade =
      pct >= 90 ? "Master of Puppets" :
      pct >= 70 ? "Fade to Knowledge" :
      pct >= 50 ? "Seek & Improve"    : "Hit the Books";

    return (
      <div className="border border-yellow-500/30 bg-neutral-950 p-8 md:p-14 text-center">
        <div className="flex items-center justify-center gap-3 mb-10">
          <div className="h-px w-12 bg-yellow-500/50" />
          <span className="text-yellow-500 text-[10px] font-bold tracking-[0.45em] uppercase">Results</span>
          <div className="h-px w-12 bg-yellow-500/50" />
        </div>

        <div className="text-8xl md:text-9xl font-black text-yellow-400 mb-1 tabular-nums leading-none">{pct}%</div>
        <div className="text-neutral-400 text-lg mb-1">
          <span className="text-white font-black">{score}</span>
          <span className="text-neutral-600"> / {total} correct</span>
        </div>
        <div className="text-2xl font-black text-white uppercase tracking-widest mt-4 mb-10">{grade}</div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {results.map((correct, i) => (
            <div
              key={i}
              title={`Q${i + 1}: ${correct ? "Correct" : "Wrong"}`}
              className={`w-8 h-8 text-xs flex items-center justify-center font-black rounded-sm ${
                correct
                  ? "bg-yellow-500 text-black"
                  : "bg-neutral-800 text-neutral-600"
              }`}
            >
              {correct ? "✓" : "✗"}
            </div>
          ))}
        </div>

        <button
          onClick={handleRestart}
          className="bg-yellow-500 hover:bg-yellow-400 active:bg-yellow-600 text-black font-black px-12 py-4 text-sm tracking-[0.25em] uppercase transition-colors"
        >
          Play Again
        </button>
      </div>
    );
  }

  const progressPct = ((currentIndex) / total) * 100;

  return (
    <div className="border border-neutral-800 bg-neutral-950">
      {/* Progress bar */}
      <div className="h-1 bg-neutral-900">
        <div
          className="h-full bg-yellow-500 transition-all duration-500"
          style={{ width: `${progressPct}%` }}
        />
      </div>

      <div className="p-6 md:p-10">
        {/* Header row */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2">
            <span className="text-yellow-400 font-black text-2xl tabular-nums">{currentIndex + 1}</span>
            <span className="text-neutral-600 text-sm">/ {total}</span>
          </div>
          <span className={`text-[10px] px-3 py-1 font-bold tracking-[0.2em] uppercase ${difficultyBadge[question.difficulty]}`}>
            {question.difficulty}
          </span>
        </div>

        {/* Question */}
        <h2 className="text-white font-black text-xl md:text-2xl uppercase tracking-wide leading-snug mb-8">
          {question.question}
        </h2>

        {/* Options */}
        <div className="space-y-3 mb-8">
          {question.options.map((option, i) => {
            let base = "w-full text-left p-4 transition-all duration-150 flex items-center gap-4 group";
            let style: string;

            if (answerState === "unanswered") {
              style = "border border-neutral-700 text-neutral-200 hover:border-yellow-500 hover:bg-yellow-500/8 cursor-pointer";
            } else if (i === question.correctIndex) {
              style = "border border-yellow-500 bg-yellow-500/15 text-yellow-300 cursor-default";
            } else if (i === selectedOption && answerState === "incorrect") {
              style = "border border-red-500 bg-red-500/10 text-red-400 cursor-default";
            } else {
              style = "border border-neutral-900 text-neutral-600 cursor-default";
            }

            return (
              <button
                key={i}
                onClick={() => handleAnswer(i)}
                disabled={answerState !== "unanswered"}
                className={`${base} ${style}`}
              >
                <span className={`w-7 h-7 shrink-0 flex items-center justify-center text-[11px] font-black border ${
                  answerState === "unanswered"
                    ? "border-neutral-600 text-neutral-500 group-hover:border-yellow-500 group-hover:text-yellow-400"
                    : i === question.correctIndex
                    ? "border-yellow-500 text-yellow-400 bg-yellow-500/20"
                    : i === selectedOption
                    ? "border-red-500 text-red-400"
                    : "border-neutral-800 text-neutral-700"
                }`}>
                  {String.fromCharCode(65 + i)}
                </span>
                <span className="text-sm leading-relaxed font-medium">{option}</span>
              </button>
            );
          })}
        </div>

        {/* Explanation + Next */}
        {answerState !== "unanswered" && (
          <div className="space-y-4">
            <div className={`p-5 border-l-4 ${
              answerState === "correct"
                ? "border-yellow-500 bg-yellow-500/8"
                : "border-red-500 bg-red-500/8"
            }`}>
              <div className={`text-[10px] font-black tracking-[0.35em] uppercase mb-2 ${
                answerState === "correct" ? "text-yellow-400" : "text-red-400"
              }`}>
                {answerState === "correct" ? "Correct!" : "Wrong"}
              </div>
              <p className="text-neutral-300 text-sm leading-relaxed">{question.explanation}</p>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-neutral-500 text-xs tracking-wider">
                Score: <span className="text-yellow-400 font-black">{score}</span> / {currentIndex + 1}
              </span>
              <button
                onClick={handleNext}
                className="bg-yellow-500 hover:bg-yellow-400 active:bg-yellow-600 text-black font-black px-8 py-3 text-xs tracking-[0.25em] uppercase transition-colors"
              >
                {currentIndex + 1 >= total ? "See Results" : "Next →"}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
