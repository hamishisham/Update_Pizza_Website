import React from "react";

const Contact = () => {
  return (
    <div className="bg-gray-400 text-2xl text-white py-16 px-4 ">
      <div className="text-center">
        <h1 className="text-6xl font-light mb-10">Contact</h1>

        <p className="mb-6">
          Find us at some [address] or call us at 05050515-122330
        </p>
        <p className="mb-6">
          We offer full-service catering for any event, large or small. We understand your needs and we will cater the food to satisfy the biggest criteria of them all, both look and taste.
        </p>

        <p className="text-3xl font-bold mb-6">
          <b>Reserve</b> a table, ask for today's special, or just send us a message:
        </p>

        <form action="/action_page.php" target="_blank" className="space-y-6">

          <div>
            <input
              className="w-full p-4 text-lg border border-gray-300 rounded bg-white text-gray-800"
              type="text"
              placeholder="Name"
              required
              name="Name"
            />
          </div>

          <div>
            <input
              className="w-full p-4 text-lg border border-gray-300 rounded bg-white text-gray-800"
              type="number"
              placeholder="How many people"
              required
              name="People"
            />
          </div>

          <div>
            <input
              className="w-full p-4 text-lg border border-gray-300 rounded bg-white text-gray-800"
              type="datetime-local"
              placeholder="Date and time"
              required
              name="date"
              defaultValue="2020-11-16T20:00"
            />
          </div>

          <div>
            <input
              className="w-full p-4 text-lg border border-gray-300 rounded bg-white text-gray-800"
              type="text"
              placeholder="Message / Special requirements"
              required
              name="Message"
            />
          </div>

          <button
            className="w-full py-4 bg-gray-200 text-gray-800 text-lg font-semibold hover:bg-gray-300 rounded"
            type="submit"
          >
            SEND MESSAGE
          </button>

        </form>

        
      </div>
    </div>
  );
};

export default Contact;
