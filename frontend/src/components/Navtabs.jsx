import { NavLink } from "react-router-dom";

const Navtabs = () => {
  const tabs = [
    {
      name: "Homes",
      path: "/",
    },
    {
      name: "Experiences",
      path: "/experiences",
    },
    {
      name: "Services",
      path: "/services",
    },
  ];

  return (
    <div className="flex justify-center items-center gap-8 pb-5">
      
      {tabs.map((tab) => (
        <NavLink
          key={tab.name}
          to={tab.path}
          className={({ isActive }) =>
            `relative pb-2 font-semibold transition ${
              isActive
                ? "text-gray-900 dark:text-white"
                : "text-gray-500 hover:text-gray-900 dark:hover:text-white"
            }`
          }
        >
          {({ isActive }) => (
            <>
              {tab.name}

              {isActive && (
                <span className="absolute left-0 bottom-0 w-full h-[2px] bg-black dark:bg-white rounded-full"></span>
              )}
            </>
          )}
        </NavLink>
      ))}

    </div>
  );
};

export default Navtabs;