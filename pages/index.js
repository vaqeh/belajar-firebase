import React, { useEffect, useState } from "react";
import fireConfig from "./firebase";
// console.log(fireConfig);

export default function Home() {
  const [nama, setNama] = useState("");
  const [umur, setUmur] = useState("");

  const saveData = () => {
    console.log("sim:", nama, umur);
  };

  const editData = () => {};

  const deleteData = () => {};

  return (
    <div className="container mx-auto font-serif w-72">
      <h1 className="text-3xl font-bold mb-4">
        WelcomeToNext.js WithFirebaseCong
      </h1>
      <div className="flex flex-col space-y-4">
        <input
          type="text"
          placeholder="nama"
          value={nama}
          onChange={(e) => setNama(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="number"
          placeholder="umur"
          value={umur}
          onChange={(e) => setUmur(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={saveData}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Save
        </button>
        <button
          onClick={editData}
          className="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600"
        >
          Edit
        </button>
        <button
          onClick={deleteData}
          className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
        >
          Hapus
        </button>
      </div>
    </div>
  );
}
