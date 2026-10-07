import React, { useState } from "react";
import { Search } from "lucide-react";

const Searchbar = ({
  searchText,
  setSearchText,
  checkIn,
  setCheckIn,
  checkOut,
  setCheckOut,
  checkAvailability,
}) => {

  const [showGuests, setShowGuests] = useState(false);

  const [guests, setGuests] = useState({
    adults: 1,
    children: 0,
    infants: 0,
    pets: 0,
  });

  const updateGuests = (type, value) => {
    setGuests((prev) => ({
      ...prev,
      [type]: Math.max(0, prev[type] + value),
    }));
  };

  const totalGuests =
    guests.adults + guests.children;

  return (
    <div className="flex justify-center mt-6 px-4">

      <div className="flex items-center w-full max-w-[850px] border border-gray-300 rounded-full shadow-md hover:shadow-lg transition bg-white">

        {/* WHERE */}
        <div className="flex-1 px-6 py-3">
          <h4 className="font-semibold text-sm">
            Where
          </h4>

          <input
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Search destinations"
            className="w-full text-sm text-gray-500 outline-none bg-transparent mt-1"
          />
        </div>


        {/* SEPARATOR */}
        <div className="h-8 border-r border-gray-300"></div>


        {/* WHEN */}
        <div className="flex-1 px-6 py-3 relative">
          <h4 className="font-semibold text-sm">
            When
          </h4>

          <div className="flex gap-2 mt-1">

            <input
              type="date"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              min={new Date().toISOString().split("T")[0]}
              className="w-full text-xs outline-none bg-transparent"
            />

            <input
              type="date"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              min={
                checkIn ||
                new Date().toISOString().split("T")[0]
              }
              className="w-full text-xs outline-none bg-transparent"
            />

          </div>
        </div>


        {/* SEPARATOR */}
        <div className="h-8 border-r border-gray-300"></div>


        {/* WHO */}
        <div className="flex-1 px-6 py-3 relative hidden sm:block">

          <button
            type="button"
            onClick={() => setShowGuests(!showGuests)}
            className="text-left w-full"
          >

            <h4 className="font-semibold text-sm">
              Who
            </h4>

            <p className="text-gray-500 text-sm mt-1">
              {totalGuests === 1
                ? "1 guest"
                : `${totalGuests} guests`}
            </p>

          </button>


          {/* GUEST DROPDOWN */}
          {showGuests && (

            <div
              className="
                absolute
                top-[75px]
                right-0
                w-[280px]
                bg-white
                rounded-2xl
                shadow-xl
                border
                border-gray-200
                p-5
                z-50
              "
            >

              {/* ADULTS */}
              <GuestRow
                title="Adults"
                subtitle="Ages 13 or above"
                value={guests.adults}
                onDecrease={() =>
                  updateGuests("adults", -1)
                }
                onIncrease={() =>
                  updateGuests("adults", 1)
                }
                disableDecrease={guests.adults <= 1}
              />


              {/* CHILDREN */}
              <GuestRow
                title="Children"
                subtitle="Ages 2–12"
                value={guests.children}
                onDecrease={() =>
                  updateGuests("children", -1)
                }
                onIncrease={() =>
                  updateGuests("children", 1)
                }
                disableDecrease={guests.children <= 0}
              />


              {/* INFANTS */}
              <GuestRow
                title="Infants"
                subtitle="Under 2"
                value={guests.infants}
                onDecrease={() =>
                  updateGuests("infants", -1)
                }
                onIncrease={() =>
                  updateGuests("infants", 1)
                }
                disableDecrease={guests.infants <= 0}
              />


              {/* PETS */}
              <GuestRow
                title="Pets"
                subtitle="Bringing a service animal?"
                value={guests.pets}
                onDecrease={() =>
                  updateGuests("pets", -1)
                }
                onIncrease={() =>
                  updateGuests("pets", 1)
                }
                disableDecrease={guests.pets <= 0}
              />


              {/* DONE */}
              <button
                type="button"
                onClick={() => setShowGuests(false)}
                className="
                  w-full
                  mt-4
                  bg-black
                  text-white
                  py-2
                  rounded-lg
                  font-semibold
                  hover:bg-gray-800
                "
              >
                Done
              </button>

            </div>

          )}

        </div>


        {/* SEARCH BUTTON */}
        <button
          type="button"
          onClick={checkAvailability}
          className="
            mr-2
            bg-[#FF385C]
            text-white
            p-3
            rounded-full
            hover:bg-[#E31C5F]
            transition
          "
        >
          <Search size={20} />
        </button>

      </div>
    </div>
  );
};


/* GUEST ROW */

const GuestRow = ({
  title,
  subtitle,
  value,
  onDecrease,
  onIncrease,
  disableDecrease,
}) => {

  return (
    <div className="flex justify-between items-center py-3">

      <div>

        <p className="font-semibold text-sm">
          {title}
        </p>

        <p className="text-xs text-gray-500">
          {subtitle}
        </p>

      </div>


      <div className="flex items-center gap-3">

        <button
          type="button"
          onClick={onDecrease}
          disabled={disableDecrease}
          className="
            w-8
            h-8
            rounded-full
            border
            border-gray-400
            text-lg
            disabled:opacity-30
          "
        >
          −
        </button>

        <span className="w-4 text-center">
          {value}
        </span>

        <button
          type="button"
          onClick={onIncrease}
          className="
            w-8
            h-8
            rounded-full
            border
            border-gray-400
            text-lg
          "
        >
          +
        </button>

      </div>

    </div>
  );
};


export default Searchbar;