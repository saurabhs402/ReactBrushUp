function AddTodo() {
  return (
    <div className="grid grid-cols-6 gap-2">
      <input
        type="text"
        className="block w-full  text-slate-500
                  file:mr-4 file:py-2 file:px-4
                  file:rounded-full file:border-0
                  file:text-sm file:font-semibold
                  file:bg-violet-50 file:text-violet-700
                  hover:file:bg-violet-100
                  col-span-3 pl-72 mx-2 my-2 text-2xl"
        placeholder="Enter Todo here"
      />

      <input type="date" className="col-span-2 mx-2 my-2" />
      <button className="rounded-full bg-green-400 mx-2 my-2 text-2xl hover:bg-green-600">
        Add
      </button>
    </div>
  );
}
export default AddTodo;
