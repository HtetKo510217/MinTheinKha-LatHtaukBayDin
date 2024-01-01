import React from 'react'
import Image from 'next/image'
import Logo from "../../../public/mintheinkha_logo.webp"
import Link from 'next/link';

async function getAnswer() {
    const res = await fetch("http://localhost:4000/answers");
    return res.json();
}
export default async function Answer({params}) {
    const answers = await getAnswer();
    const [questionNo,answerNo] = params.answer;
    const filterAnswer = answers.filter((answer)=> {
        if(answer.questionNo === +questionNo && answer.answerNo === +answerNo) {
          return answer;
        }
    })
  return (
    <main className='flex min-h-screen flex-col items-center p-24'>
    <Image src={Logo} alt='logo' width={150} className='pb-10' />
    <Link href="/" class="absolute left-10 top-10 ">
        <button class="btn btn-neutral">နောက်သို့</button>
      </Link>
    <div className='mb-10'>{filterAnswer[0].answerResult}</div>
</main>
  )
}
