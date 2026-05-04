const LearningTips = () => {
  return (
    <div className="mt-16">
      <h2 className="text-3xl font-bold text-center mb-8">
        📌 Learning Tips
      </h2>

      <div className="grid md:grid-cols-3 gap-6">

        {/* Tip 1 */}
        <div className="bg-white shadow-lg rounded-2xl p-6 text-center hover:scale-105 transition">
          <h3 className="text-xl font-semibold mb-2">
            ⏰ Time Management
          </h3>
          <p className="text-gray-600">
            Plan your study time daily. Break your tasks into small chunks and
            avoid procrastination to stay consistent.
          </p>
        </div>

        {/* Tip 2 */}
        <div className="bg-white shadow-lg rounded-2xl p-6 text-center hover:scale-105 transition">
          <h3 className="text-xl font-semibold mb-2">
            📅 Practice Daily
          </h3>
          <p className="text-gray-600">
            Practice regularly to build strong skills. Even 1 hour a day can make
            a huge difference over time.
          </p>
        </div>

        {/* Tip 3 */}
        <div className="bg-white shadow-lg rounded-2xl p-6 text-center hover:scale-105 transition">
          <h3 className="text-xl font-semibold mb-2">
            🛠 Build Projects
          </h3>
          <p className="text-gray-600">
            Apply what you learn by building real projects. This helps you gain
            practical experience and confidence.
          </p>
        </div>

      </div>
    </div>
  );
};

export default LearningTips;