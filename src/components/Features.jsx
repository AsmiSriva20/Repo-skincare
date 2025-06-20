import React from "react";
import model from "/assets/new-model.png"; // Adjust the path as necessary

export default function Features() {
  return (
    <section className="w-full bg-[#FEFFF4] py-12 px-4 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Side */}
        <div className="flex flex-col gap-8">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-1 rounded-full bg-white border border-[#DDE9CE] w-fit text-xs font-semibold text-[#2D3B36] shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#2D3B36] mr-2 inline-block"></span>
            Why Our Products
          </div>

          {/* Heading */}
          <h2 className="text-[#2D3B36] text-3xl md:text-4xl font-light leading-snug">
            YOUR SKIN DESERVES<br />THE BEST CARE.
          </h2>

          {/* Description */}
          <p className="text-[#2D3B36] text-base md:text-lg font-normal leading-relaxed">
            Discover a curated collection of skincare products designed to rejuvenate,<br />
            protect, and pamper your skin. Explore our rage crafted with love backed<br />
            by science, and inspired by nature.
          </p>

          {/* Features */}
          <div className="flex flex-col gap-8">
            {/* Feature 1 */}
            <div className="flex items-start gap-4">
              <span className="text-3xl md:text-4xl font-light text-[#2D3B36] min-w-[48px] bg-gradient-to-t from-[#DDE9CE] to-[#021206] bg-clip-text text-transparent">
  01
</span>
              <div>
                <div className="text-2xl md:text-3xl font-normal text-[#2D3B36] mb-1">Bio Ingredients</div>
                <div className="text-[#6B7F75] text-base md:text-lg font-normal">
                  Get naturally beautiful and transform with our bio<br />
                  ingredients creams for healthy, radiant skin.
                </div>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-start gap-4">
              <span className="text-3xl md:text-4xl font-light text-[#2D3B36] min-w-[48px] bg-gradient-to-t from-[#DDE9CE] to-[#021206] bg-clip-text text-transparent">
  02
</span>
              <div>
                <div className="text-2xl md:text-3xl font-normal text-[#2D3B36] mb-1">Everything Natural</div>
                <div className="text-[#6B7F75] text-base md:text-lg font-normal">
                  Pure ingredients for pure skin. The Perfect solution<br />
                  for your skin care needs.
                </div>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex items-start gap-4">
               <span className="text-3xl md:text-4xl font-light text-[#2D3B36] min-w-[48px] bg-gradient-to-t from-[#DDE9CE] to-[#021206] bg-clip-text text-transparent">
  03
</span>
              <div>
                <div className="text-2xl md:text-3xl font-normal text-[#2D3B36] mb-1">All Handmade</div>
                <div className="text-[#6B7F75] text-base md:text-lg font-normal">
                  Made with love and care. Just for you. Give your skin<br />
                  the tender loving care it deserves.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side */}
       <div className="relative w-full max-w-md md:max-w-lg">
  {/* Image */}
  <img
    src={model}
    alt="Model"
    className="rounded-2xl w-full h-auto object-cover shadow-lg"
    style={{ aspectRatio: '1/1.1' }}
  />

  {/* Award Badge */}
  <div className="absolute top-[72%] left-1/2 transform -translate-x-1/2 bottom-20 bg-[#FEFFF4] px-6 py-3 rounded-xl flex items-center gap-3 shadow-md border border-[#2D3B36] z-30">
    <div className="inline-block">
  <div className="w-16 h-16 border-2 border-dotted border-[#2D3B36] rounded-full flex items-center justify-center">
    <div className="w-14 h-14 bg-[#2D3B36] rounded-full flex items-center justify-center">
      <svg width="28" height="28" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.87451 22.9583V33.3124C8.87451 37.1041 8.87451 37.1041 12.4578 39.5208L22.3121 45.2082C23.7912 46.0624 26.2079 46.0624 27.6871 45.2082L37.5412 39.5208C41.1246 37.1041 41.1246 37.1041 41.1246 33.3124V22.9583C41.1246 19.1667 41.1246 19.1667 37.5412 16.75L27.6871 11.0625C26.2079 10.2083 23.7912 10.2083 22.3121 11.0625L12.4578 16.75C8.87451 19.1667 8.87451 19.1667 8.87451 22.9583Z" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path opacity="0.4" d="M36.4583 15.8957V10.4165C36.4583 6.24984 34.375 4.1665 30.2083 4.1665H19.7916C15.625 4.1665 13.5416 6.24984 13.5416 10.4165V15.7498" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path opacity="0.4" d="M26.3121 22.896L27.4996 24.7502C27.6871 25.0418 28.1038 25.3335 28.4163 25.4168L30.5413 25.9585C31.8538 26.2918 32.208 27.4168 31.3538 28.4585L29.958 30.146C29.7496 30.4168 29.583 30.896 29.6038 31.2293L29.7288 33.4168C29.8121 34.771 28.8538 35.4585 27.6038 34.9585L25.5621 34.146C25.2496 34.021 24.7288 34.021 24.4163 34.146L22.3746 34.9585C21.1246 35.4585 20.1662 34.7502 20.2496 33.4168L20.3746 31.2293C20.3954 30.896 20.2287 30.396 20.0204 30.146L18.6246 28.4585C17.7704 27.4168 18.1246 26.2918 19.4371 25.9585L21.5621 25.4168C21.8955 25.3335 22.3121 25.021 22.4788 24.7502L23.6663 22.896C24.4163 21.771 25.583 21.771 26.3121 22.896Z" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
  </div>
</div>


    <span className="text-[#2D3B36] text-base font-medium">
      Best Skin Care Product<br />Award Wining
    </span>
  </div>

  {/* Bottom text inside image */}
  <div className="absolute bottom-0 translate-y-full mt-2 left-4 right-4 flex justify-between text-[#2D3B36] text-sm md:text-base font-medium z-20">

    <span>SINCE 2001</span>
    <span className="cursor-pointer hover:underline">LEARN MORE</span>
  </div>
</div>

</div>
    </section>
  );
}
