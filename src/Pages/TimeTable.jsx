import Layout from "../Layout/Layout";

const Timetable = () => {

  const timetable = [
    { time: "7:00 AM - 8:00 AM", monday: "Karate", tuesday: "Taekwondo", wednesday: "Kickboxing", thursday: "Judo", friday: "Muay Thai", saturday: "Boxing", sunday: "Rest" },
    { time: "8:00 AM - 9:00 AM", monday: "Taekwondo", tuesday: "Kickboxing", wednesday: "Karate", thursday: "Muay Thai", friday: "Boxing", saturday: "Judo", sunday: "Rest" },
    { time: "9:00 AM - 10:00 AM", monday: "Kickboxing", tuesday: "Muay Thai", wednesday: "Taekwondo", thursday: "Boxing", friday: "Judo", saturday: "Karate", sunday: "Rest" },
    { time: "10:00 AM - 11:00 AM", monday: "Judo", tuesday: "Karate", wednesday: "Boxing", thursday: "Taekwondo", friday: "Kickboxing", saturday: "Muay Thai", sunday: "Rest" },
    // More time slots can be added here as needed
  ];

  return (
    <Layout>
        <div data-theme="coffee" className="p-6 min-h-[90vh]">
      <h2 className="text-2xl font-semibold text-center mb-4">BMA Academy Timetable</h2>
      <table className="min-w-full table-auto border-separate border border-gray-300 rounded-md">
        <thead>
          <tr className="bg-green-600 text-white">
            <th className="border border-gray-300 px-4 py-2">Weekday</th>
            <th className="border border-gray-300 px-4 py-2">7:00 AM - 8:00 AM</th>
            <th className="border border-gray-300 px-4 py-2">8:00 AM - 9:00 AM</th>
            <th className="border border-gray-300 px-4 py-2">9:00 AM - 10:00 AM</th>
            <th className="border border-gray-300 px-4 py-2">10:00 AM - 11:00 AM</th>
            {/* More time slots can be added here as needed */}
          </tr>
        </thead>
        <tbody>
          {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day, index) => (
            <tr key={index} className="odd:bg-gray-100 hover:bg-gray-200">
              <td className="border border-gray-300 px-4 py-2 hover:bg-gray-300">{day}</td>
              <td className="border border-gray-300 px-4 py-2 hover:bg-gray-300">{timetable[0][day.toLowerCase()]}</td>
              <td className="border border-gray-300 px-4 py-2 hover:bg-gray-300">{timetable[1][day.toLowerCase()]}</td>
              <td className="border border-gray-300 px-4 py-2 hover:bg-gray-300">{timetable[2][day.toLowerCase()]}</td>
              <td className="border border-gray-300 px-4 py-2 hover:bg-gray-300">{timetable[3][day.toLowerCase()]}</td>
              {/* Add more cells for more time slots if needed */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </Layout>
  );
};

export default Timetable;
