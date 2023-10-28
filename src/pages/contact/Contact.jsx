import React from 'react';
import { Fade } from 'react-awesome-reveal';

const Contact = () => {
  return (
    <section className='md:px-8 px-3'>
      <div>
        <p className='font-[900] text-center md:text-left md:text-[3.1em] text-[1.1em]'>𝙲𝚘𝚗𝚝𝚊𝚌𝚝 𝚄𝚜</p>
        <div className='hidden md:block'>
          <hr className="my-2 w-[85%] border-t-[1.32px] border-green-500" />
        </div>
      </div>
      <div className='flex flex-col-reverse md:flex-row gap-x-3 md:pt-10 pt-6'>
        <div className='md:w-[50%]'>
          <Fade direction='up'><p className='text-[1.4em] font-semibold'><span className='text-[1.2em] font-normal'>G</span>et in touch</p></Fade>
          <p className='pt-6'><span className='font-semibold font-sans text-[1.05em]'>Email:</span> Email@hotmail.com</p>
          <p className='pt-6'><span className='font-semibold font-sans text-[1.05em]'>Phone:</span>+17 192 1727</p>
          <p className='pt-6'>Feel free to reach out! I'm here to listen and collaborate. Whether it's about a project, idea, or just to say hello, I'm excited to hear from you. Your thoughts and visions matter, and I'm eager to be a part of them </p>
        </div>
        <form className='md:w-[50%] pt-4'>
          <div className='flex flex-col md:flex-row  md:gap-x-4 gap-y-3 md:gap-y-0'>
            <input placeholder='Name' className='outline-none text-center border-[1.2px] border-black h-[3.1em] md:w-[50%]' type="text" required name="" id="" />
            <input placeholder='Email' className='outline-none text-center border-[1.2px] border-black h-[3.1em] md:w-[50%]' type="email" required name="" id="" />
          </div>
          <div className='pt-8 md:pt-6'><textarea placeholder='Message' className='outline-none border-[1.2px] border-black h-[7.1em] w-full'required name=""id="" ></textarea></div>
         <div className=' flex justify-center md:justify-start'> <input className='outline-none text-center border-[1.2px] border-black h-[2.1em] w-[20%] bg-gray-200' type="submit" value="Send" /></div>
        </form>
      </div>
    </section>
  );
};

export default Contact;