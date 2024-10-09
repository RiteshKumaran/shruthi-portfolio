const expertise = [
  {
    id: 0,
    title: "Team Management & Leadership",
    desc: "I am a proficient leader with extensive experience in managing cross-functional teams, fostering collaboration, and driving team productivity. My strong organizational skills and ability to motivate individuals ensure that projects are completed on time while maintaining a positive and inclusive team environment.",
  },
  {
    id: 1,
    title: "Marketing & Strategic Analysis",
    desc: "I have a deep understanding of marketing principles and strategic analysis, enabling me to craft data-driven marketing campaigns that align with business goals. With expertise in market research and competitor analysis, I ensure that marketing strategies are both innovative and impactful, leading to improved brand positioning and growth.",
  },
  {
    id: 2,
    title: "Critical Thinking & Problem Solving",
    desc: "I excel at applying critical thinking to analyze complex situations, identify key challenges, and develop innovative solutions. This skill allows me to approach problems logically, ensuring well-thought-out strategies that improve efficiency and drive business success.",
  },
  {
    id: 3,
    title: "Excel & Data Analysis",
    desc: "I am highly proficient in Excel, utilizing its advanced functions for data analysis, reporting, and visualization. Whether it’s developing dynamic dashboards or performing in-depth data analysis, I leverage Excel to drive insights that support informed decision-making and operational improvements.",
  },
  {
    id: 4,
    title: "UI/UX Design",
    desc: "With a strong foundation in UI/UX principles and hands-on experience in design tools like Figma and Adobe XD, I create intuitive and aesthetically pleasing user interfaces. My design process focuses on improving user experience, ensuring that digital products are both functional and engaging.",
  },
  {
    id: 5,
    title: "SQL & Python",
    desc: "I have a solid background in SQL for database management and data querying, and I am skilled in Python for automating tasks, data analysis, and building algorithms. My technical expertise allows me to handle data efficiently and create scalable solutions that align with business needs.",
  },
  {
    id: 6,
    title: "Public Speaking & Communication",
    desc: "As an effective communicator, I have developed strong public speaking skills that allow me to deliver clear and engaging presentations. My experience in leading meetings, workshops, and events has honed my ability to convey complex ideas in an understandable way, while engaging diverse audiences.",
  },
];

export default function handler(req, res) {
  res.status(200).json(expertise);
}
