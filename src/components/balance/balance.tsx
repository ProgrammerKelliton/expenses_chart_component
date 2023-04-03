import Image from "next/image";

export default function Balance() {
  return (
    <div className="bg-[#EC755D] flex justify-between w-full py-4 px-5 rounded-xl">
      <div>
        <span className="text-white">My balance</span>
        <h1 className="text-white text-2xl font-semibold">$921,48</h1>
      </div>
      <Image src={"/icons/logo.svg"} width={40} height={40} alt={"logo"} />
    </div>
  );
}
