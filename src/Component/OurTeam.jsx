import useAOS from "../hooks/useAOS";
import rohitkumar from "../assets/rohitkumar.jpg";
import deepakkumar from "../assets/deepakkumar.jpg";
import mandeepyadav from "../assets/mandeep.jpg";
import chinusaini from "../assets/chinusaini.jpg";


const team = [
  {
    id: 1,
    name: "Rohit Singh",
    role: "Full Stack Developer",
    image: rohitkumar,
    desc: "Develops end-to-end web solutions, handling both front-end interfaces and back-end systems to ensure seamless performance.",
    socials: {
      linkedin: "#",
      twitter: "#",
      instagram: "#",
    },
  },
  {
    id: 2,
    name: "Deepak Singh",
    role: "Web Designer",
    image: deepakkumar,
    desc: "Designs visually appealing, user-focused layouts and enhances overall website aesthetics and usability.",
    socials: {
      linkedin: "#",
      twitter: "#",
      instagram: "#",
    },
  },
  {
    id: 3,
    name: "Mandeep Yadav",
    role: "Backend Developer",
    image: mandeepyadav,
    desc: "Builds secure, scalable server-side systems and manages API integrations to ensure smooth application performance.",
    socials: {
      linkedin: "#",
      twitter: "#",
      instagram: "#",
    },
  },
  {
    id: 4,
    name: "Chinu Saini",
    role: "SEO Expert",
    image: chinusaini,
    desc: "Improves website visibility, boosts organic rankings, and drives targeted traffic through effective SEO strategies.",
    socials: {
      linkedin: "#",
      twitter: "#",
      instagram: "#",
    },
  },
];

export default function OurTeam() {
  useAOS();

  return (
    <section className="w-full bg-white py-20 px-6">
      {/* Heading + Description */}
      <div data-aos="zoom-in" className="max-w-5xl mx-auto text-center mb-14">
        <div className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 mb-3">
          <span className="w-2 h-2 bg-[#004aac] rounded-sm inline-block" />
          <span>Our Team</span>
          <span className="w-2 h-2 bg-[#004aac] rounded-sm inline-block" />
        </div>

        <h2 className="text-3xl md:text-4xl font-semibold text-slate-900">
          The People Powering Adivoz
        </h2>
        <p className="max-w-3xl mx-auto text-gray-600 mt-4">
          Adivoz is driven by a close-knit team of marketers, creators and
          developers who love building meaningful digital growth for brands.
        </p>
      </div>

      {/* Team Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {team.map((member) => (
          <div
            key={member.id}
            data-aos="fade-up"
            className="group bg-[#f7fbff] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            {/* Image wrapper */}
            <div className="relative w-full h-72 overflow-hidden">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
              />

              {/* Hover overlay + social icons */}
            </div>

            {/* Text content */}
            <div className="p-5">
              <h3 className="text-lg font-semibold text-gray-900">
                {member.name}
              </h3>
              <p className="text-sm text-blue-600 font-medium mt-1">
                {member.role}
              </p>
              <p className="text-sm text-gray-600 mt-3 leading-relaxed">
                {member.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
