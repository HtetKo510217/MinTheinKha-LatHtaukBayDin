import React from 'react'
import Link from 'next/link';
async function getQuestion () {
  const res = await fetch('http://localhost:4000/questions');
  return res.json()
}

export default async function Questions() {
  const questions = await getQuestion();
  return (
    <div>
      <h2 className='mb-4 font-bold'>မေးခွန်းများ</h2>
      <div className='flex flex-wrap justify-between'>{questions.map((question)=>(
      <div key={question.questionNo} className='card w-80 bg-base-100 shadow-xl mb-4'><div class="card-body justify-between">
      <h2 class="card-title">{question.questionName}</h2>
     
      <Link href={`/questions/${question.questionNo}`} class="card-actions justify-end">
        <button class="btn btn-primary">ဖတ်မည်</button>
      </Link>
    </div></div>
    ))}
    </div>
    </div>
  )
}
