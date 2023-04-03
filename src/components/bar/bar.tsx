import { motion } from "framer-motion";

interface BarProps {
  name: string;
  percent: number;
  addMoreDelay: number;
}

export default function Bar(props: BarProps) {
  const { name, percent, addMoreDelay } = props;

  return (
    <div className="flex flex-col items-center justify-end h-full w-full">
      <motion.span
        initial={{ padding: 0 }}
        animate={{ height: `${percent}%` }}
        transition={{ delay: 0.7 + addMoreDelay }}
        className="bg-[#EC755D] w-11/12 rounded-md"
      />
      <span className="text-xs text-gray-500">{name}</span>
    </div>
  );
}
