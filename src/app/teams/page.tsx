export default function TeamsPage() {
  const members = [
    {
      name: "Benjamin Morin",
      email: "benjamin.morin@grandhorizon.com",
      photo: "/team/team1.jpeg",
    },
    {
      name: "Heidi Fabre",
      email: "heidi.fabre@grandhorizon.com",
      photo: "/team/team2.jpeg",
    },
    {
      name: "Elpidio Santos",
      email: "elpidio.santos@grandhorizon.com",
      photo: "/team/team3.jpeg",
    },
    {
      name: "Ceylan Errekli",
      email: "ceylan.errekli@grandhorizon.com",
      photo: "/team/team4.jpeg",
    },
    {
      name: "Maia Anderson",
      email: "maia.anderson@grandhorizon.com",
      photo: "/team/team5.jpeg",
    },
    {
      name: "Pascal Epp",
      email: "pascal.epp@grandhorizon.com",
      photo: "/team/team6.jpeg",
    },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Our Team</h1>
      <div className="grid md:grid-cols-3 gap-4">
        {members.map((m, i) => (
          <div key={i} className="border p-4 rounded shadow text-center">
            <img
              src={m.photo}
              alt={m.name}
              className="mx-auto rounded-full w-32 h-32 object-cover"
            />
            <h2 className="text-xl font-semibold mt-2">{m.name}</h2>
            <p className="text-gray-400">{m.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
