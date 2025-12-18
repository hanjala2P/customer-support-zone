import React from "react";
import inProgressBg from "../../assets/Logo/vector1.png";
// import resolvedBg from "../../assets/Logo/vector2.png";

const TaskStatus = ({count}) => {
  
  return (
    <div className="mx-10 lg:mx-20 grid mt-6 grid-cols-1 sm:grid-cols-2 gap-4 ">

      {/* In Progress */}
      <div
        className="
          h-40 sm:h-48 md:h-64
          rounded-xl
          bg-gradient-to-r from-[#632EE3] to-[#9F62F2]
          relative overflow-hidden
          flex items-center justify-center
        "
      >
        {/* LEFT BG (reversed) */}
        <img
          src={inProgressBg}
          alt="In Progress Left"
          className="absolute left-0 top-0 w-80 h-full object-cover opacity-60 pointer-events-none transform scale-y-[1]"
        />
        {/* RIGHT BG (reversed) */}
        <img
          src={inProgressBg}
          alt="In Progress Right"
          className="absolute right-0 top-0 w-80 h-full object-cover opacity-60 pointer-events-none transform scale-x-[-1]"
        />

        <div className="relative z-10 text-white text-center">
          <p className="text-sm sm:text-base">In-Progress</p>
          <h2 className="text-2xl sm:text-3xl font-bold">{count}</h2>
        </div>
      </div>

      {/* Resolved */}
      <div
        className="
          h-40 sm:h-48 md:h-64
          rounded-xl
          bg-gradient-to-r from-[#54CF68] to-[#00827A]
          relative overflow-hidden
          flex items-center justify-center
        "
      >
        {/* LEFT BG (reversed) */}
        <img
          src={inProgressBg}
          alt="Resolved Left"
          className="absolute left-0 top-0 w-80 h-full object-cover opacity-60 pointer-events-none transform  transform scale-x-[1]"
        />
        {/* RIGHT BG (reversed) */}
        <img
          src={inProgressBg}
          alt="Resolved Right"
          className="absolute right-0 top-0 w-60% h-full object-cover opacity-60 pointer-events-none transform scale-x-[-1]"
        />

        <div className="relative z-10 text-white text-center">
          <p className="text-sm sm:text-base">Resolved</p>
          <h2 className="text-2xl sm:text-3xl font-bold">5</h2>
        </div>
      </div>

    </div>
  );
};

export default TaskStatus;
