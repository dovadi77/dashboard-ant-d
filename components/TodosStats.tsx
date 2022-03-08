import { useRecoilValue } from "recoil";
import { statTodosState } from "../recoil/data";

export const TodosStats = ({ state }: { state?: any }) => {
  const { totalNum, totalCompletedNum, totalUncompletedNum, percentCompleted } =
    state === undefined ? useRecoilValue(statTodosState) : state;

  const formattedPercentCompleted = Math.round(percentCompleted);

  return (
    <div>
      <ul>
        <li>Total items: {totalNum}</li>
        <li>Items completed: {totalCompletedNum}</li>
        <li>Items not completed: {totalUncompletedNum}</li>
        <li>Percent completed: {formattedPercentCompleted}</li>
      </ul>
    </div>
  );
};
