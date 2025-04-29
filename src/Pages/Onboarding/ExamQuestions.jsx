import React from "react";


function ExamQuestions({ number, question, selected, onSelect }) {
  return (
    <div className="mb-8 p-10 pt-0 text-[#3d3d3d]">
      <p className="text-xl mb-4">{question.subject}</p>
      <p className="text-xl mb-4">{question.section}</p>
      <p className="text-xl mb-4">{question.instructions}</p>

      <section className="ml-6 mt-6 bg-amber-100 p-15 rounded-xl ">
        <p className="text-2xl font-bold mb-4">
          {number}. {question.text}
        </p>
        <div className="space-y-2 pb-2 text-2xl">
          {question.options.map((option, idx) => (
            <div key={idx} className="flex items-center ml-6 gap-2">
              <input
                type="radio"
                name={`q${question.id}`}
                id={`q${question.id}_${idx}`}
                className="accent-[#785491] w-4 h-4"
                checked={selected === idx}
                onChange={() => onSelect(question.id, idx)}
              />
              <label
                htmlFor={`q${question.id}_${idx}`}
                className="cursor-pointer "
              >
                {String.fromCharCode(65 + idx)}.  {option}
              </label>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default ExamQuestions;
