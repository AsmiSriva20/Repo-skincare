import React from "react";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqData = [
  {
    question: "Are your products safe for sensitive skin?",
    answer: "Yes! Our gentle formula works with most skin types.",
  },
  {
    question: "Do you use natural ingredients?",
    answer: "We prioritize bio-sourced, organic ingredients.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#dfe6da] px-6 py-12">
      <h3 className="text-xl font-semibold mb-6">
        Answers to Your Skincare Questions
      </h3>
      <div className="space-y-4">
        {faqData.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow p-4 cursor-pointer"
            onClick={() => toggle(index)}
          >
            <div className="flex justify-between items-center">
              <span className="font-medium">{item.question}</span>
              <ChevronDown
                className={`transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </div>
            {openIndex === index && (
              <div className="mt-2 text-sm text-gray-700">{item.answer}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
