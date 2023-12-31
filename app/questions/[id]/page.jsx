import React from 'react'
import Image from 'next/image'
import Logo from "../../../public/mintheinkha_logo.webp"
import Link from 'next/link';
async function getQuestion () {
  const res = await fetch('http://localhost:4000/questions');
  return res.json()
}
async function getNumberList() {
  const res = await fetch("http://localhost:4000/numberList");
  return res.json();
}
export default async function Question({params:{id}}) {
  const data = await getQuestion();
  const numberList = await getNumberList();
  const question = data.find((q)=> q.questionNo === +id)
  const choices = [
    {
      myan: "၁",
      eng: "1",
    },
    {
      myan: "၂",
      eng: "2",
    },
    {
      myan: "၃",
      eng: "3",
    },
    {
      myan: "၄",
      eng: "4",
    },
    {
      myan: "၅",
      eng: "5",
    },
    {
      myan: "၆",
      eng: "6",
    },
    {
      myan: "၇",
      eng: "7",
    },
    {
      myan: "၈",
      eng: "8",
    },
    {
      myan: "၉",
      eng: "9",
    },
    {
      myan: "၁၀",
      eng: "10",
    },
    
  ];
  function getNumber(number) {
    return choices.find((choose)=> choose.myan == number)
  }
  return (
    <main className='flex min-h-screen flex-col items-center p-24'>
    <Image src={Logo} alt='logo' width={150} className='pb-10' />
    <Link href="/" class="absolute left-10 top-10 ">
        <button class="btn btn-neutral">နောက်သို့</button>
      </Link>
    <div className='mb-10'>{question.questionName}</div>
    <div className='grid grid-cols-9 gap-1 max-w-xl mx-auto'>
      {numberList.map((number)=>(
        <Link key={number} href={`/answers/${getNumber(number).eng}`} className='text-center bg-green-500 p-4 hover:bg-opacity-50'>{number}</Link>
      ))}
    </div>
</main>
  )
}
