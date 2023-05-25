

import {AiFillTwitterCircle,AiFillLinkedin,AiFillYoutube} from 'react-icons/ai'
import Link from 'next/link';

import { BsFillMoonStarsFill } from 'react-icons/bs';
import Image from 'next/image';
import deved from '../public/dev-ed-wave.png'


import design from '../public/design.png'
import code from '../public/code.png'
import consulting from '../public/consulting.png'
import web1 from '../public/web1.png'
import web2 from '../public/web2.png'
import web3 from '../public/web3.png'
import web4 from '../public/web4.png'
import web5 from '../public/web5.png'
import web6 from '../public/web6.png'
// import {useState} from 'react'

// import cons from '../public/design.png'

export default function Home() {
  // const [darkmode,setdarkmode ]=useState(false)
  return (

<div >

<main className='bg-white px-10 md:px-20 lg:px-40' >
<section className='min-h-screen '>
<nav className='py-10  flex justify-between '>
  <h1 className='text-xl font-bold'>Developer</h1>
  <ul className='flex items-center'>
    <li><BsFillMoonStarsFill className='cursor-pointer' /></li>
    <li>
      <Link href={'/#'} className='bg-cyan-500 text-white px-4 py-2 rounded-md ml-8
      '> Resume</Link>
    </li>
  </ul>
</nav>
{/* /// this is matter section  */}
<div className='text-center p-10 '>
<h2 className='font-medium text-5xl py-1 text-teal-500 md:text-6xl'>Arjun Chey</h2>
<h3 className='text-2xl py-2'>Frontend Developer</h3>
<p className='text-md py-5 leading-6 text-gray-800 md:text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores incidunt at nulla, fugiat et voluptas!</p>
</div>
<div className='text-5xl flex justify-center gap-16'>
<AiFillTwitterCircle/>
<AiFillLinkedin/>
<AiFillYoutube/>
</div>

{/* /// this is the image section */}
<div className='relative mx-auto bg-gradient-to-b from-teal-500 rounded-full  w-80 h-80 mt-20'>
  <Image src={deved} />
</div>
</section>




{/* //this is section 2 */}
<section>
<div>
  <h3 className='text-3xl py-1'>Services I Offer</h3>
  <p className='text-md py-2 leading-8 text-gray-800'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus voluptatem magni id dignissimos voluptatum perferendis doloremque optio assumenda provident est.</p>

</div>
<div className='lg:flex gap-10'>
  <div className="text-center shadow-xl p-10 rounded-xl my-10 ">
   <Image src={design} width={100} height={100} className='text-center block'/>
    {/* <Image src={design} width={100} height={100} className='text-center block'/> */}

    <h3 className='text-lg font-medium pt-8 pb-2'>Beautiful Designs</h3>
    <p className='py-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat quod autem corrupti enim inventore recusandae!</p>
    <h4 className='py-4 text-teal-600'>Design tools I use</h4>
    <p className='text-gray-800 py-1'>PhotoShopping</p>
    <p className='text-gray-800 py-1'>Illustration</p>
    <p className='text-gray-800 py-1'>Figma</p>
  </div>

  <div className="text-center shadow-xl p-10 rounded-xl my-10 ">
   <Image src={code} width={100} height={100} className='text-center block'/>
    {/* <Image src={design} width={100} height={100} className='text-center block'/> */}

    <h3 className='text-lg font-medium pt-8 pb-2'>Beautiful Designs</h3>
    <p className='py-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat quod autem corrupti enim inventore recusandae!</p>
    <h4 className='py-4 text-teal-600'>Design tools I use</h4>
    <p className='text-gray-800 py-1'>PhotoShopping</p>
    <p className='text-gray-800 py-1'>Illustration</p>
    <p className='text-gray-800 py-1'>Figma</p>
  </div>


  <div className="text-center shadow-xl p-10 rounded-xl my-10 ">
   <Image src={consulting} width={100} height={100} />
    {/* <Image src={design} width={100} height={100} className='text-center block'/> */}

    <h3 className='text-lg font-medium pt-8 pb-2'>Beautiful Designs</h3>
    <p className='py-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat quod autem corrupti enim inventore recusandae!</p>
    <h4 className='py-4 text-teal-600'>Design tools I use</h4>
    <p className='text-gray-800 py-1'>PhotoShopping</p>
    <p className='text-gray-800 py-1'>Illustration</p>
    <p className='text-gray-800 py-1'>Figma</p>
  </div>
</div>
</section>

<section> 
  <div>
    <h3 className='text-3xl py-1'>Portofolio</h3>
    <p className='text-md py-2 leading-8 text-gray-800' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde quaerat ea odit, suscipit cumque eius alias hic voluptates sunt nisi?</p>
  </div>

  <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
    <div className='basis-1/3 flex-1'>
      <Image src={web1} className='rounded-lg object-cover ' width={'100%'} height={'100%'} />
    </div>
    <div className='basis-1/3 flex-1'>
      <Image src={web2} className='rounded-lg object-cover ' width={'100%'} height={'100%'}  />
    </div>

    <div className='basis-1/3 flex-1'>
      <Image src={web3} className='rounded-lg object-cover ' width={'100%'} height={'100%'} />
    </div>

    <div className='basis-1/3 flex-1'>
      <Image src={web4} className='rounded-lg object-cover ' width={'100%'} height={'100%'} />
    </div>
    <div className='basis-1/3 flex-1'>
      <Image src={web5} className='rounded-lg object-cover ' width={'100%'} height={'100%'} />
    </div>
    <div className='basis-1/3 flex-1'>
      <Image src={web6} className='rounded-lg object-cover ' width={'100%'} height={'100%'} />
    </div>

  </div>
</section>
</main>
</div>

  );
};