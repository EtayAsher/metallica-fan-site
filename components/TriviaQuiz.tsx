"use client";

import { useState, useCallback } from "react";
import { triviaQuestions } from "@/data/trivia";
import type { Difficulty } from "@/data/trivia";

const difficultyStyles: Record<Difficulty, string> = {
  Easy: "text-green-400 border-green-900/60",
  Medium: "text-yellow-400 border-yellow-700/60",
  Hard: "text-red-400 border-red-900/60",
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

  if (finished) {
    const pct = Math.round((score / total) * 100);
    const grade =
      pct >= 90 ? "Master of Puppets" :
      pct >= 70 ? "Fade to Knowledge" :
      pct >= 50 ? "Seek & Improve" : "Hit the Books";

    return (
      <div className="bg-neutral-950 border border-neutral-900 p-8 md:p-12 text-center">
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="h-px w-10 bg-yellow-500/40" />
          <span className="text-yellow-500 text-[10px] font-bold tracking-[0.4em] uppercase">Results</span>
          <div className="h-px w-10 bg-yellow-500/40" />
        </div>
        <div className="text-7xl md:text-8xl font-black text-white mb-2 tabular-nums">{score}<span className="text-neutral-700">/{total}</span></div>
        <div className="text-5xl font-black text-yellow-400 mb-4">{pct}%</div>
        <div className="text-neutral-400 font-bold text-xl uppercase tracking-widest mb-10">{grade}</div>

        <div className="flex flex-wrap justify-center gap-1.5 mb-10">
          {results.map((correct, i) => (
            <div
              key={i}
              title={`Q${i + 1}: ${correct ? "Correct" : "Wrong"}`}
              className={`w-6 h-6 text-[10px] flex items-center justify-center font-black ${
                correct ? "bg-yellow-500 text-black" : "bg-neutral-800 text-neutral-600"
              }`}
            >
              {correct ? "+" : "-"}
            </div>
          ))}
        </div>

        <button
          onClick={handleRestart}
          className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-10 py-4 text-xs tracking-[0.2em] uppercase transition-colors"
        >
          Play Again
        </button>
      </div>
    );
  }

  const progressPct = (currentIndex / total) * 100;

  return (
    <div className="bg-neutral-950 border border-neutral-900">
      {/* Progress bar */}
      <div className="h-0.5 bg-neutral-900">
        <div className="h-full bg-yellow-500 transition-all duration-500" style={{ width: `${progressPct}%` }} />
      </div>

      <div className="p-6 md:p-10">
        <div className="flex items-center justify-between mb-8">
          <span className="text-neutral-700 text-xs tracking-[0.3em] tabular-nums">
            {currentIndex + 1} / {total}
          </span>
          <span className={`border text-[10px] px-2.5 py-1 font-bold tracking-[0.2em] uppercase ${difficultyStyles[question.difficulty]}`}>
            {question.difficulty}
          </span>
        </div>

        <h2 className="text-white font-black text-xl md:text-2xl uppercase tracking-wide leading-snug mb-10">
          {question.question}
        </h2>

        <div className="space-y-2 mb-10">
          {question.options.map((option, i) => {
            let style = "border border-neutral-800 text-neutral-400 hover:border-yellow-500/50 hover:text-white hover:bg-yellow-500/4";

            if (answerState !== "unanswered") {
              if (i === question.correctIndex) {
                style = "border border-yellow-500 bg-yellow-500/10 text-yellow-300";
              } else if (i === selectedOption && answerState === "incorrect") {
                style = "border border-red-800 bg-red-900/10 text-red-400";
              } else {
                style = "border border-neutral-900 text-neutral-700";
              }
            }

            return (
              <button
                key={i}
                onClick={() => handleAnswer(i)}
                disabled={answerState !== "unanswered"}
                className={`w-full text-left p-4 text-sm leading-relaxed transition-all duration-150 ${style} ${answerState !== "unanswered" ? "cursor-default" : "cursor-pointer"}`}
              >
                <span className="font-mono text-[10px] mr-3 opacity-40 uppercase">{String.fromCharCode(65 + i)}.</span>
                {option}
              </button>
            );
          })}
        </div>

        {answerState !== "unanswered" && (
          <div className="space-y-4">
            <div className="bg-neutral-900 border border-neutral-800 p-5">
              <div className={`text-[10px] font-bold tracking-[0.3em] uppercase mb-2 ${answerState === "correct" ? "text-yellow-500" : "text-red-500"}`}>
                {answerState === "correct" ? "Correct" : "Incorrect"}
              </div>
              <p className="text-neutral-400 text-sm leading-relaxed">{question.explanation}</p>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-neutral-700 text-xs tracking-wider">
                Score: {score} / {currentIndex + 1}
              </span>
              <button
                onClick={handleNext}
                className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-7 py-3 text-xs tracking-[0.2em] uppercase transition-colors"
              >
                {currentIndex + 1 >= total ? "See Results" : "Next"}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
