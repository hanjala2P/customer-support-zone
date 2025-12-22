import TaskStatusCard from "../Task status card/TaskStatusCard";
import ResolvedCard from "../Task/Resolved Card/ResolvedCard";
const Task = ({handleResolvedData, CardPromise, selectedCards}) => {
  return (
    <div className="p-4 sm:p-4 lg:p-0 flex flex-col gap-6">

      {/* Task Status */}
      <div>
        <h4 className="font-semibold text-[18px] sm:text-[20px] lg:text-[24px] text-[#34485A]">
          Task Status
        </h4>

        <TaskStatusCard  selectedCards={ selectedCards} CardPromise={CardPromise} handleResolvedData={handleResolvedData}></TaskStatusCard>
        <p className="text-[#627382] text-sm sm:text-base mt-1">
          Select a ticket to add to Task Status
        </p>
      </div>

      <div className="border-t pt-4"></div>

      {/* Resolved Task */}
      <div>
        <h4 className="font-semibold text-[18px] sm:text-[20px] lg:text-[24px] text-[#34485A]">
          Resolved Task
        </h4>
        <ResolvedCard></ResolvedCard>
        <p className="text-[#627382] text-sm sm:text-base mt-1">
          No resolved tasks yet.
        </p>
      </div>

    </div>
  );
};

export default Task;
