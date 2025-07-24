'use client';
import { useEffect, useState } from 'react';

export default function LiveTimer() {
  const [timeTogether, setTimeTogether] = useState<{
    years: number;
    weeks: number;
    hours: number;
    minutes: number;
    seconds: number;
  }>({
    years: 0,
    weeks: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const startDate = new Date('2023-07-25T00:00:00');

    const updateTimer = () => {
      const now = new Date();
      const diffMs = now.getTime() - startDate.getTime();

      const totalSeconds = Math.floor(diffMs / 1000);
      const totalMinutes = Math.floor(totalSeconds / 60);
      const totalHours = Math.floor(totalMinutes / 60);
      const totalDays = Math.floor(totalHours / 24);
      const totalWeeks = parseFloat((totalDays / 7).toFixed(2));
      const totalYears = parseFloat((totalDays / 365.25).toFixed(2));

      setTimeTogether({
        years: totalYears,
        weeks: totalWeeks,
        hours: totalHours,
        minutes: totalMinutes,
        seconds: totalSeconds,
      });
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-32 text-center">
      <h1 className="text-6xl md:text-6xl font-[caveat] mb-2  text-black">
        we've been together for 2 years and counting!
      </h1>
      <p className="font-[caveat] text-4xl text-gray-600 mb-6">to put it into perspective, that's...</p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
        <StatCard label="Weeks" value={timeTogether.weeks.toFixed(2)} />
        <StatCard label="Hours" value={timeTogether.hours.toLocaleString()} />
        <StatCard label="Minutes" value={timeTogether.minutes.toLocaleString()} />
        <StatCard label="Seconds" value={timeTogether.seconds.toLocaleString()} />
      </div>
    </div>
  );
}

function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="font-[caveat] bg-gray-100 rounded-2xl p-6 shadow-md flex flex-col items-center justify-center h-32">
      <div className="text-3xl font-extrabold text-pink-500">{value}</div>
      <div className="mt-2 text-sm font-medium text-gray-600 uppercase tracking-wide">
        {label}
      </div>
    </div>
  );
}
