import Image from 'next/image'
import Questions from './components/questions/page'
import Logo from "../public/mintheinkha_logo.webp"
export default function Home() {
    console.log('test')
    return ( 
        <main className='flex min-h-screen flex-col items-center p-24'>
            <Image src={Logo} alt='logo' width={150} className='pb-10' />
            <Questions/>
        </main>
    )
}