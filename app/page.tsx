"use client"
import Image from "next/image";
import axios from "axios";
import {useEffect, useState} from "react";
// import useEffect from "react";

export default function Home() {
  const [test, setTest] = useState()

  const get = async () => {
    const res = await axios.get('http://localhost:3001')
    console.log('res', res)
    setTest(res.data.firstName);
  }

  useEffect(() => {
    get()
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {test}
    </main>
  );
}
