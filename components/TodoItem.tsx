import { useRecoilState } from "recoil";
import { todosState } from "../recoil/data";

export const TodoItem = ({
  item,
  edit,
  del,
  index,
}: {
  item: any;
  edit?: any;
  del?: any;
  index: number;
}) => {
  const [todoList, setTodoList] = useRecoilState(todosState);
  let dataIndex = todoList.findIndex((listItem) => listItem === item);

  const editItemText = ({
    target: { value },
  }: {
    target: { value: string };
  }) => {
    if (edit === undefined) {
      const newList = replaceItemAtIndex(todoList, dataIndex, {
        ...item,
        text: value,
      });

      setTodoList(newList);
    } else {
      edit(index, {
        ...item,
        text: value,
      });
    }
  };

  const toggleItemCompletion = () => {
    if (edit === undefined) {
      const newList = replaceItemAtIndex(todoList, dataIndex, {
        ...item,
        isComplete: !item.isComplete,
      });

      setTodoList(newList);
    } else {
      edit(index, {
        ...item,
        isComplete: !item.isComplete,
      });
    }
  };

  const changePriorityItem = ({
    target: { value },
  }: {
    target: { value: string };
  }) => {
    if (edit === undefined) {
      if (parseInt(value) !== 0) {
        const newList = replaceItemAtIndex(todoList, dataIndex, {
          ...item,
          priority: parseInt(value),
        });

        setTodoList(newList);
      }
    } else {
      edit(index, {
        ...item,
        priority: parseInt(value),
      });
    }
  };

  const deleteItem = () => {
    if (edit === undefined) {
      const newList = removeItemAtIndex(todoList, dataIndex);

      setTodoList(newList);
    } else {
      del(index);
    }
  };

  return (
    <div>
      <div>
        <label>Description</label>
        <input type="text" value={item.text} onChange={editItemText} />
      </div>
      <div>
        <label>Completed</label>
        <input
          type="checkbox"
          checked={item.isComplete}
          onChange={toggleItemCompletion}
        />
      </div>
      <div>
        <label>Choose priority:</label>
        <select
          id="priority"
          onChange={changePriorityItem}
          value={item.priority}
        >
          <option value="1">Low</option>
          <option value="2">Medium</option>
          <option value="3">High</option>
        </select>
      </div>
      <div>
        <button onClick={deleteItem}>X</button>
      </div>
    </div>
  );
};

function replaceItemAtIndex(arr: any[], index: number, newValue: any) {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
}

function removeItemAtIndex(arr: any[], index: number) {
  return [...arr.slice(0, index), ...arr.slice(index + 1)];
}
