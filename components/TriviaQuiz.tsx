"use client";

import { useState, useCallback } from "react";
import { triviaQuestions } from "@/data/trivia";
import type { Difficulty } from "@/data/trivia";

const difficultyStyles: Record<Difficulty, string> = {
  Easy: "text-green-400 border-green-900/60 bg-green-950/20",
  Medium: "text-yellow-400 border-yellow-900/60 bg-yellow-950/20",
  Hard: "text-red-400 border-red-900/60 bg-red-950/20",
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
      pct >= 90
        ? "Master of the Puppets"
        : pct >= 70
        ? "Fade to Knowledge"
        : pct >= 50
        ? "Seek & Improve"
        : "Hit the Books";

    return (
      <div className="bg-neutral-900 border border-neutral-800 p-8 text-center">
        <div className="text-red-600 text-xs font-semibold tracking-[0.25em] uppercase mb-4">Results</div>
        <div className="text-6xl font-black text-white mb-2">
          {score}/{total}
        </div>
        <div className="text-4xl font-black text-red-500 mb-3">{pct}%</div>
        <div className="text-neutral-300 font-bold text-xl mb-6">{grade}</div>

        {/* Per-question result dots */}
        <div className="flex flex-wrap justify-center gap-1.5 mb-8">
          {results.map((correct, i) => (
            <div
              key={i}
              title={`Q${i + 1}: ${correct ? "Correct" : "Wrong"}`}
              className={`w-5 h-5 rounded-sm text-xs flex items-center justify-center font-bold ${
                correct ? "bg-green-700 text-green-200" : "bg-red-900 text-red-300"
              }`}
            >
              {correct ? "+" : "-"}
            </div>
          ))}
        </div>

        <button
          onClick={handleRestart}
          className="bg-red-700 hover:bg-red-600 text-white font-semibold px-8 py-3 text-sm tracking-wide uppercase transition-colors"
        >
          Play Again
        </button>
      </div>
    );
  }

  const progressPct = ((currentIndex) / total) * 100;

  return (
    <div className="bg-neutral-900 border border-neutral-800">
      {/* Progress bar */}
      <div className="h-0.5 bg-neutral-800">
        <div
          className="h-full bg-red-600 transition-all duration-300"
          style={{ width: `${progressPct}%` }}
        />
      </div>

      <div className="p-6 md:p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <span className="text-neutral-500 text-xs tracking-widest">
            {currentIndex + 1} / {total}
          </span>
          <span
            className={`border text-xs px-2.5 py-1 font-medium tracking-wide ${
              difficultyStyles[question.difficulty]
            }`}
          >
            {question.difficulty}
          </span>
        </div>

        {/* Question */}
        <h2 className="text-white font-bold text-xl leading-snug mb-8">{question.question}</h2>

        {/* Options */}
        <div className="space-y-3 mb-8">
          {question.options.map((option, i) => {
            let style =
              "border border-neutral-700 text-neutral-300 hover:border-neutral-500 hover:text-white hover:bg-neutral-800";

            if (answerState !== "unanswered") {
              if (i === question.correctIndex) {
                style = "border border-green-600 bg-green-900/20 text-green-300";
              } else if (i === selectedOption && answerState === "incorrect") {
                style = "border border-red-700 bg-red-900/20 text-red-300";
              } else {
                style = "border border-neutral-800 text-neutral-600";
              }
            }

            return (
              <button
                key={i}
                onClick={() => handleAnswer(i)}
                disabled={answerState !== "unanswered"}
                className={`w-full text-left p-4 text-sm leading-relaxed transition-all duration-150 ${style} ${
                  answerState !== "unanswered" ? "cursor-default" : "cursor-pointer"
                }`}
              >
                <span className="font-mono text-xs mr-3 opacity-50">{String.fromCharCode(65 + i)}.</span>
                {option}
              </button>
            );
          })}
        </div>

        {/* Explanation + Next */}
        {answerState !== "unanswered" && (
          <div className="space-y-4">
            <div className="bg-neutral-800/60 border border-neutral-700 p-4">
              <div
                className={`text-xs font-semibold tracking-widest uppercase mb-2 ${
                  answerState === "correct" ? "text-green-500" : "text-red-500"
                }`}
              >
                {answerState === "correct" ? "Correct" : "Incorrect"}
              </div>
              <p className="text-neutral-300 text-sm leading-relaxed">{question.explanation}</p>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-neutral-500 text-xs">
                Score: {score} / {currentIndex + 1}
              </span>
              <button
                onClick={handleNext}
                className="bg-red-700 hover:bg-red-600 text-white font-semibold px-6 py-2.5 text-sm tracking-wide uppercase transition-colors"
              >
                {currentIndex + 1 >= total ? "See Results" : "Next Question"}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
