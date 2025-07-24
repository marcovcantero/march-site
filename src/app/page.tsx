'use client';
import { useState } from "react";
import { useRouter } from "next/navigation";
export default function Home() {
  const [selectedDate, setSelectedDate] = useState("");
  const router = useRouter();

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const date = e.target.value;
    setSelectedDate(date);

    if (date === "2023-07-25") {
      router.push("/note");
    } else {
      alert("Incorrect date. Try again!");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center font-bold">
        <h1 className="text-4xl text-black font-[caveat]">happy bun day!</h1>
        <p className="text-3xl font-[caveat] text-black">enter the day we met to access some love!</p>
        <div className="relative p-4">
          <img src="/lock.jpg" className="h-96" alt="Padlock" />
          
          {/* The date input overlapping on the padlock image */}
            <input 
              type="date" 
              value={selectedDate}
              onChange={handleDateChange}
              className="absolute bottom-1/3 left-1/2 transform -translate-x-1/2 w-40 p-2 border border-gray-300 rounded-md shadow-md bg-slate-300" 
            />
        </div>
      </div>
    </div>
  );
}
