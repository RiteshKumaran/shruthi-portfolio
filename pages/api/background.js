const background = [
  {
    eduCards: [
      {
        id: 0,
        title: "SRM Institute of Science and Technology, Ramapuram",
        degree: "B.Tech, Computer Science",
        detail:
          "Currently pursuing B.Tech in Computer Science at SRMIST, Ramapuram. Active participant in various competitions and events.",
        year: "Aug 2023 - Present",
      },
      {
        id: 1,
        title: "Bala Vidya Mandir (BVM Global), BHS",
        degree: "Senior Secondary School",
        detail:
          "Completed senior secondary education, recognized for leadership roles and participation in events like MUN and chess tournaments.",
        year: "Jul 2021 - May 2023",
      },
      {
        id: 2,
        title: "San Academy, Pallikaranai",
        degree: "Secondary School",
        detail:
          "Led a team in the Young Environmental Scientist program and participated in numerous academic and extracurricular activities.",
        year: "Jun 2018 - Oct 2020",
      },
    ],
  },
  {
    expCards: [
      {
        id: 1,
        title: "Technical Team Member, CodeKrafters",
        role: "Technical Team Member",
        url: "no website",
        desc: "Worked as part of the technical team, contributing to the success of club activities, including workshops and hackathons.",
        year: "Oct 2023 - Jul 2024",
        location: "SRMIST, Ramapuram",
      },
      {
        id: 2,
        title: "Management Team Member, TechPro",
        role: "Management Team Member",
        url: "no website",
        desc: "Organized an online coding contest and CyberVerse workshop in collaboration with CyberHub.",
        year: "Sep 2023 - Oct 2023",
        location: "SRMIST, Ramapuram",
      },
      {
        id: 3,
        title: "Pixel Perfectors Team Leader",
        role: "Team Leader",
        url: "no website",
        desc: "Led the 'Safebites' project, an innovative food safety app, during the club's ideathon, which earned top recognition among 5 competing teams.",
        year: "no date provided",
        location: "SRMIST, Ramapuram",
      },

      {
        id: 5,
        title: "Participant, Various Meetups",
        role: "Participant",
        url: "no website",
        desc: "Participated in multiple meetups focused on Soft Skills, Web3, and Data Science to expand my knowledge in emerging technologies.",
        year: "no date provided",
        location: "Various",
      },
      {
        id: 6,
        title: "Designer",
        role: "Designer",
        url: "no website",
        desc: "Created UI/UX designs like Amazon replica, Speedy Food, Electrobuy, and Safebites using Figma and Canva.",
        year: "no date provided",
        location: "Freelance",
      },
      {
        id: 7,
        title: "Marketing individual, Hackverse’24",
        role: "Marketing",
        url: "no website",
        desc: "Played a key role in promoting Hackverse’24 by creating reels and actively pitching ideas to the community.",
        year: "no date provided",
        location: "SRMIST, Ramapuram",
      },
      {
        id: 8,
        title: "Debate Competition Winner",
        role: "Winner",
        url: "no website",
        desc: "Emerged as the winner in an internal debate competition, showcasing strong communication and public speaking skills.",
        year: "no date provided",
        location: "SRMIST, Ramapuram",
      },
    ],
  },
];

export default function handler(req, res) {
  res.status(200).json(background);
}
