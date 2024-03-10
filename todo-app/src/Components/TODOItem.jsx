function TodoItem() {
  let todo = "Buy Milk";
  let date = "4/10/23";

  return (
    <div className="grid grid-cols-6 gap-2">
      <div className="col-span-3 my-2 text-2xl">{todo}</div>
      <h1 className="col-span-2 my-2 text-2xl text-left px-4">4/10/23</h1>
      <button className="rounded-full bg-red-400 mx-2 col-span-1 my-2 text-2xl
                         hover:bg-red-600">
        Delete
      </button>
    </div>
  );
}
export default TodoItem;
