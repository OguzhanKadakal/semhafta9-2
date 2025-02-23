"use client";

import { useState } from "react";
import C1 from "./C1";

export default function Home() {
  const [isim, setIsim] = useState("Oğuzhan");

  return (
    <main className="container mx-auto max-w-[1200px] border border-gray-200 p-4">
      <h1 className="text-2xl font-bold">useContext Hooku</h1>
      <div className="border border-gray-200 p-4 mt-4 rounded">
        <C1 />
      </div>
    </main>
  );
}
