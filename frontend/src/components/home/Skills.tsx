type TSkillItem = {
  title: string;
};

const Skills = () => {
  const items: TSkillItem[] = [
    { title: "UX Research" },
    { title: "UI Design" },
    { title: "UX Research" },
    { title: "Prototyping" },
    { title: "Wireframing" },
    { title: "Product Design" },
    { title: "Consulting" },
    { title: "Front-end Development" },
    { title: "Web Design" },
    { title: "App Design" },
    { title: "Usability Testing" },
    { title: "Interaction Design" },
    { title: "Design Thinking" },
  ];
  return (
    <div>
      <h2 className="text-3xl text-[#CFEF00]">Skills I put to work</h2>
      <div className="flex flex-wrap gap-4 mt-4 px-96 justify-center">
        {items?.map((item, itemIndex) => (
          <div
            key={itemIndex}
            className="text-lg border-[1px] border-[#CFEF00] rounded-lg border-solid px-2"
          >
            {item.title}
          </div>
        ))}
      </div>
    </div>
  );
};
export default Skills;
