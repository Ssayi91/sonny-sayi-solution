"use client";
import { useEffect, useState } from "react";

export default function LocalTime() {
  const [time, setTime] = useState("--:--");

  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-KE", {
      hour: "2-digit",
      minute: "2-digit",
      timeZone: "Africa/Nairobi",
    });
    const tick = () => setTime(fmt.format(new Date()));
    tick();
    const id = setInterval(tick, 15000);
    return () => clearInterval(id);
  }, []);

  return <span>{time} EAT</span>;
}