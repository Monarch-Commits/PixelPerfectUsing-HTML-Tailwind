import { projects, skills, testimonials } from './Constant.js';

const Skills = document.getElementById('Skills');
const GallaryCards = document.getElementById('GallaryCards');
const testimonialsCards = document.getElementById('testimonialsCards');

// Skills
Skills.innerHTML = skills
  .map((skill) => {
    return `

 <div
      class="flex w-full max-w-[394.67px] flex-col items-center gap-[42px] px-[42px] py-[64px]"
          >
      <img src=${skill.image} alt="Skill 1" />

            <div class="flex flex-col items-center gap-[12px]">
              <h3
                class="font-[Epilogue] text-[27px] leading-[42px] font-semibold"
              >
               ${skill.title}
              </h3>
              <p class="text-center font-[Epilogue] text-[17px] leading-[27px]">
               ${skill.description}
              </p>
            </div>
          </div> `;
  })
  .join('');

// Gallary
GallaryCards.innerHTML = projects
  .map((gallary) => {
    return `

<div
            class="flex h-[419px] w-full max-w-[394.67px] min-w-[320px] flex-col gap-[24px]"
          >
            <img src=${gallary.image} alt="1" />
            <div class="flex flex-col gap-[8px] font-[Epilogue]">
              <p class="text-[20px] leading-[20px] font-semibold">
               ${gallary.title}
              </p>
              <p class="text-[17px] leading-[27px] text-[#2D2D2D]">
              ${gallary.description}
              </p>
            </div>
          </div>`;
  })
  .join('');

// Testimonial
testimonialsCards.innerHTML = testimonials
  .map((testimonial) => {
    return `

       <div
            class="flex max-w-[394.67px] flex-col justify-center gap-[68px] bg-[#F3F3F3] p-[42px]"
          >
            <p
              class="text-center font-[Epilogue] text-[20px] leading-[30px] font-semibold text-[#2D2D2D]"
            >
             ${testimonial.text}
            </p>
            <div class="flex max-w-[310.67px] items-start gap-[16px]">
              <img
                src=${testimonial.image}
                alt="Avatar"
              />
              <div class="flex w-full max-w-[244.67px] flex-col gap-[11px]">
                <img
                  src=${testimonial.stars}
                  alt="Start"
                  class="h-[20px] w-[124px]"
                />
                <div class="w-full font-[Epilogue]">
                  <p class="font-seminbold text-[20px] leading-[30px]">
                   ${testimonial.name}
                  </p>
                  <p class="text-[17px] leading-[27px] text-[#2D2D2D]">
                  ${testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          </div>`;
  })
  .join('');
