import React from 'react'

async function getQuestion () {
  const res = await fetch('http://localhost:4000/questions');
  console.log('res')
  return res.json()
}

export default async function Questions() {
  const questions = await getQuestion();
  return (
    <div>
      <h2 className='mb-4 font-bold'>မေးခွန်းများ</h2>
      <div className='flex flex-wrap justify-between'>{questions.map((question)=>(
      <div key={question.questionNo} className='card w-80 bg-base-100 shadow-xl mb-4'><div class="card-body">
      <h2 class="card-title">{question.questionName}</h2>
     
      <div class="card-actions justify-end">
        <button class="btn btn-primary">ဖတ်မည်</button>
      </div>
    </div></div>
    ))}
    </div>
    </div>
  )
}
