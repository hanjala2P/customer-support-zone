import Task from '../assets/Task/Task';
import Card from '../Castumers Ticket/Card';

const CustomerTiket = ({ CardPromise,handleSelectedCard }) => {
  return (
    <div className="mx-4 sm:mx-6 lg:mx-20 mt-8 mb-16 text-black ">

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* Left Section (Cards) */}
        <div className="lg:col-span-2">
          <p className="text-[20px] sm:text-[24px] text-[#34485A] font-bold mb-2">
            Customer Tickets
          </p>

          <div className="mt-2">
            <Card handleSelectedCard={handleSelectedCard} CardPromise={CardPromise} />
          </div>
        </div>

        {/* Right Section (Task Sidebar) */}
        <div className="w-full">
          <Task />
        </div>

      </div>
    </div>
  );
};

export default CustomerTiket;
