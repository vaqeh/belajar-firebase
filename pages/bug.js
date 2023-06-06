import React, { useEffect, useState } from "react";
import db from "./firebase";
// console.log("d", db);
import {
  setDoc,
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore/lite";
// console.log("dd", collection);
// console.log("dd", getDocs);

export default function Home() {
  // const [newName, setNewName] = useState("");
  // const [newAge, setNewAge] = useState(0);
  // const [users, setUsers] = useState([]);
  const [data, setdata] = useState([]);
  console.log("datatatat", data);
  // const newData = { ...data };
  // const usersCollectionRef = collection(db, "user");

  const saveData = async (e) => {
    e.preventDefault();
    console.log("save", saveData);
    // await addDoc(usersCollectionRef, { newName, newAge });
    await setDoc(doc(db, "nama", data.nama + data.umur), {
      nama: data.nama,
      umur: data.umur,
    });
  };

  // const editData = async (id, age) => {
  //   const userDoc = doc(db, "users", id);
  //   const newFields = { age: age + 1 };
  //   await updateDoc(userDoc, newFields);
  // };
  // const deleteData = async (id) => {
  //   const userDoc = doc(db, "users", id);
  //   await deleteDoc(userDoc);
  // };
  useEffect(() => {
    const getUsers = async () => {
      const CollectionRef = collection(db, "nama");
      const querySnapshot = await getDocs(CollectionRef);
      const dokumenData = querySnapshot.docs.map((doc) => doc.data());
      // setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      // console.log("d", data.docs);
      setdata(dokumenData);
      console.log("hasil", dokumenData);
    };

    getUsers();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    // e.preventDefault();
    setdata((data) => ({
      ...data,
      [name]: value,
    }));
  };

  return (
    <form className="container mx-auto font-serif w-72" onSubmit={saveData}>
      <h1 className="text-3xl font-bold mb-4">
        WelcomeToNext.js WithFirebaseCong
      </h1>
      <div className="flex flex-col space-y-4">
        <input
          placeholder="Nama"
          name="nama"
          onChange={handleChange}
          // onChange={(e) => {
          //   setNewName(e.target.value);
          // }}
          className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="number"
          name="umur"
          placeholder="umur"
          onChange={handleChange}
          // onChange={(event) => {
          //   setNewAge(event.target.value);
          // }}
          className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button type="submit" className=" bg-red-600 rounded-lg">
          {" "}
          Create User
        </button>
        {data.map((v, i) => (
          <div>
            <h1>NamA: {v.nama}</h1>
            <h1>Umur: {v.umur}</h1>
          </div>
        ))}
      </div>
    </form>
  );
}
