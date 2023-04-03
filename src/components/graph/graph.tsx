import Bar from "../bar/bar";
import Total from "../total/total";

export default function Graph() {
  return (
    <div className="bg-white w-full h-full p-7 rounded-xl gap-7 flex flex-col">
      <h1 className="font-semibold text-xl text-gray-600">
        Spending - Last 7 days
      </h1>

      <div className="w-full h-2/6 flex items-end gap-2">
        <Bar name="mon" percent={10} addMoreDelay={0.1} />
        <Bar name="tue" percent={20} addMoreDelay={0.2} />
        <Bar name="wed" percent={40} addMoreDelay={0.3} />
        <Bar name="thu" percent={50} addMoreDelay={0.4} />
        <Bar name="fri" percent={30} addMoreDelay={0.5} />
        <Bar name="sat" percent={60} addMoreDelay={0.6} />
        <Bar name="sun" percent={80} addMoreDelay={0.7} />
      </div>

      <hr className="bg-gray-300" />

      <Total />
    </div>
  );
}
