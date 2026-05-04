import Image from "next/image";

const TopInstructors = () => {
  const instructors = [
    {
      id: 1,
      name: "John Doe",
      role: "Web Development Expert",
      image: "https://i.pravatar.cc/150?img=1",
    },
    {
      id: 2,
      name: "Jane Smith",
      role: "UI/UX Designer",
      image: "https://i.pravatar.cc/150?img=2",
    },
    {
      id: 3,
      name: "Michael Lee",
      role: "Digital Marketing Specialist",
      image: "https://i.pravatar.cc/150?img=3",
    },
    {
      id: 4,
      name: "Sarah Khan",
      role: "Data Science Mentor",
      image: "https://i.pravatar.cc/150?img=4",
    },
  ];

  return (
    <div className="mt-16">
      <h2 className="text-3xl font-bold text-center mb-8">
        🏆 Top Instructors
      </h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
        {instructors.map((ins) => (
          <div
            key={ins.id}
            className="bg-white shadow-lg rounded-2xl p-6 text-center hover:scale-105 transition"
          >
            <Image
            width={200}
            height={200}
              src={ins.image}
              alt={ins.name}
              className="w-24 h-24 mx-auto rounded-full mb-4"
            />

            <h3 className="text-lg font-semibold">{ins.name}</h3>
            <p className="text-gray-500">{ins.role}</p>

            <button className="mt-3 bg-blue-500 text-white px-4 py-1 rounded-full">
              View Profile
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopInstructors;