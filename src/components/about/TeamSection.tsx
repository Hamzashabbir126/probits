import React from "react";
import { TeamMemberCard } from "../ui/TeamMemberCard";

export const TeamSection = (): JSX.Element => {
  const teamMembers = [
    {
      name: "DR PHILIP JONKERGOUW",
      title: "Managing Director / Co-founder",
      imageUrl: "https://c.animaapp.com/mewzloz6gWYaG0/img/smiling-handsome-indian-businessman-crossing-arms-looking-camera.png"
    },
    {
      name: "DR TIM WATSON",
      title: "Technical Director / Co-founder",
      description: "An asset management specialist with over 20 year's worldwide experience in the water and asset management industry working with water utilities, councils and private consultancies, Tim has extensive experience in determining the performance and investment needs of a wide range of assets and resources, including water infrastructure, non-infrastructure, roads/highways, and fisheries. He specialises in developing strategies for utilities that help build efficient asset maintenance and operational approaches capable of implementation in a consistent and repeatable manner.",
      imageUrl: "https://c.animaapp.com/mewzloz6gWYaG0/img/istockphoto-1257624278-170667a-1.png"
    },
    {
      name: "TIM YOUNG",
      title: "Non-Executive Director",
      description: "Tim brings extensive experience in executive leadership and strategic planning to our team. He has over 15 years of experience in infrastructure development and has been instrumental in guiding numerous successful projects across the utilities sector.",
      imageUrl: "https://c.animaapp.com/mewzloz6gWYaG0/img/smiling-handsome-indian-businessman-crossing-arms-looking-camera-1.png"
    },
    {
      name: "SOMEONE ELSE",
      title: "Whatever Title",
      description: "A dedicated professional with expertise in technical solutions and project management. They bring innovative approaches to complex infrastructure challenges and have a proven track record of delivering high-quality results.",
      imageUrl: "https://c.animaapp.com/mewzloz6gWYaG0/img/istockphoto-1257624278-170667a-2.png"
    }
  ];

  return (
    <div className="w-full sm:w-[90%] md:w-[78.9%] mx-auto px-4 py-8">
      <p className="w-full sm:w-[60%] md:w-[41.4%] mx-auto text-center [font-family:'Outfit',Helvetica] font-normal text-[#1e1e1e] text-sm sm:text-base leading-5 sm:leading-6 mb-8 sm:mb-12 md:mb-16">
        Probit is a small, specialist team with deep experience in
        infrastructure modelling, investment planning, regulatory strategy and
        technical delivery.
      </p>

      <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8">
        {teamMembers.map((member, index) => (
          <TeamMemberCard
            key={index}
            name={member.name}
            title={member.title}
            description={member.description}
            imageUrl={member.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};
