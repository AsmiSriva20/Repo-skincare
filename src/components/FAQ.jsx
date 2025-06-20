import React, { useState } from "react";
import cleanser from "/assets/cleanser3.jpg"; // Adjust the path as necessary

const faqData = [
  {
    question: "Are your products safe for sensitive skin?",
    answer: "Yes! Our gentle formula works with most skin types.",
  },
  {
    question: "Are your products cruelty-free?",
    answer:
      "Absolutely! All our products are cruelty-free, and most are vegan. Check individual product details for specifics.",
  },
  {
    question: "What's your return policy?",
    answer: "We offer a 30-day return policy on all unopened products.",
  },
  {
    question: "Do you ship internationally?",
    answer: "Yes, we ship to most countries worldwide.",
  },
  {
    question: "How do i choose the right product?",
    answer: "Contact our support for personalized recommendations.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(1); // second question open by default

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#FEFFF4] py-16 px-2 md:px-8 w-full">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left: Image with badge */}
        <div className="relative flex justify-center items-center">
          <img
            src={cleanser}
            alt="FAQ Product"
            className="rounded-2xl w-full max-w-md object-cover shadow-lg"
            style={{ aspectRatio: '1/1.1' }}
          />

          {/* Floating Badge - Centered & Lowered */}
          <div className="absolute left-1/2 top-[92%] transform -translate-x-1/2 -translate-y-1/2 bg-[#F6F8ED] px-3 py-1.5 rounded-full flex items-center gap-3 shadow-md border border-[#DDE9CE]">
  <span className="inline-flex items-center justify-center w-10 h-10 rounded-full relative">
    {/* Dotted Border */}
    <span
      className="absolute inset-0 rounded-full border-2 border-dotted"
      style={{ borderColor: '#2D3B36', zIndex: 1 }}
    ></span>

    {/* Icon Circle */}
    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#2D3B36] z-10">
      <svg
        width="24"
        height="24"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_2261_38)">
          <path
            d="M33.3334 19.9043C33.3334 12.6035 27.3739 6.66683 20 6.66683C12.6262 6.66683 6.66671 12.6035 6.66671 19.9043C6.66671 21.8875 6.91102 23.1642 7.21409 24.0977C7.41589 24.719 7.90201 24.1073 8.14117 23.883C9.77787 22.3473 12.3369 22.3838 13.929 23.9658C16.297 26.3185 18.481 29.5818 15.4635 32.5818C13.8435 34.1925 11.4038 34.8623 9.54727 33.1277C7.15064 30.8882 5.06814 28.2822 4.04369 25.127C3.61504 23.8068 3.33337 22.175 3.33337 19.9043C3.33337 10.7425 10.8054 3.3335 20 3.3335C29.1947 3.3335 36.6667 10.7425 36.6667 19.9043C36.6667 22.175 36.385 23.8068 35.9564 25.127C34.9319 28.2822 32.8494 30.8882 30.4529 33.1277C28.5962 34.8623 26.1565 34.1925 24.5365 32.5818C21.519 29.5818 23.703 26.3185 26.071 23.9658C27.6632 22.3838 30.2222 22.3473 31.8589 23.883C32.3209 24.3165 32.5477 24.8317 32.786 24.0977C33.089 23.1642 33.3334 21.8875 33.3334 19.9043Z"
            fill="#fff"
          />
        </g>
        <defs>
          <clipPath id="clip0_2261_38">
            <rect width="40" height="40" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </span>
  </span>
  <span className="text-[#2D3B36] text-xs font-medium">
    24/7 We're Here<br />to Help You
  </span>
</div>

        </div>

        {/* Right: FAQ Content */}
        <div className="flex flex-col gap-6">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-1 rounded-full bg-white border border-[#DDE9CE] w-fit text-xs font-semibold text-[#2D3B36] mb-2 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#2D3B36] mr-2 inline-block"></span>
            Frequently Asked Question
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-light text-[#2D3B36] leading-snug mb-4 text-left">
            Answers to Your<br />Skincare Questions, All<br />in One Place.
          </h2>

          {/* Accordion */}
          <div className="flex flex-col gap-2">
            {faqData.map((item, index) => (
              <div
                key={index}
                className={`border border-[#BFC8BC] rounded-lg bg-white px-4 py-3 cursor-pointer transition-all duration-200 ${openIndex === index ? "shadow-md" : ""
                  }`}
                onClick={() => toggle(index)}
              >
                <div className="flex justify-between items-center">
                  <span className="font-medium text-[#2D3B36] text-base md:text-lg">
                    {item.question}
                  </span>
                  <span className="ml-2">
                    {openIndex === index ? (
                      <span className="text-2xl text-[#2D3B36] font-bold">&#8212;</span>
                    ) : (
                      <span className="text-2xl text-[#2D3B36] font-bold">+</span>
                    )}
                  </span>
                </div>
                {openIndex === index && (
                  <div className="mt-2 text-xs md:text-sm text-[#6B7F75]">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
