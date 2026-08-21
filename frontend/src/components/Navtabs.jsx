import React from "react";

const Navtabs = ({ activeTab, setActiveTab }) => {
  return (
    <div className="flex justify-center pb-5 gap-8">

      <button
        onClick={() => setActiveTab("Homes")}
        className={
          activeTab === "Homes"
            ? "font-semibold border-b-2 border-black pb-2"
            : "font-semibold text-gray-500 pb-2"
        }
      >
        Homes
      </button>

      <button
        onClick={() => setActiveTab("Experiences")}
        className={
          activeTab === "Experiences"
            ? "font-semibold border-b-2 border-black pb-2"
            : "font-semibold text-gray-500 pb-2"
        }
      >
        Experiences
      </button>

      <button
        onClick={() => setActiveTab("Services")}
        className={
          activeTab === "Services"
            ? "font-semibold border-b-2 border-black pb-2"
            : "font-semibold text-gray-500 pb-2"
        }
      >
        Services
      </button>

    </div>
  );
};

export default Navtabs;