export default function Total() {
  return (
    <div className="flex justify-between items-end">
      <div className="flex flex-col">
        <span className="text-gray-500">Total this month</span>
        <h1 className="font-semibold text-2xl text-gray-600">$473.57</h1>
      </div>
      <div className="flex flex-col">
        <span className="font-semibold">+2.4%</span>
        <span className="text-gray-500 text-xs">from last month</span>
      </div>
    </div>
  );
}
