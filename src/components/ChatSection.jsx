import React from 'react'
import { data } from '../data'
import PhoneIcon from "../icons/Phone"
import VideoIcon from '../icons/Video'
import DotVertical from "../icons/DotVertical"

const ChatSection = () => {
  return (
    <div className='w-full'>
      <div className=' bg-white  py-4 px-12'>
        <div className='flex items-center gap-4.5'> 
          <div role='profileImage-and-dot' className='relative'>
            <img className='size-14 rounded-full' src={data[0]?.profileImage} alt="" />
            <div className='bg-[#00A3FF] size-3.5 rounded-full bottom-0 right-0 absolute'></div>
          </div>
          <div role='name-and-status' className='flex flex-col grow-1'>
            <span className='f-inter font-medium text-xl text-[#515151]'>{data[0]?.name}</span>
            <span className='text-[#00A3FF] f-inter text-sm'>online</span>
          </div>
          <div role='voice-video-options' className='flex gap-10 items-center'>
            <PhoneIcon className='hover:cursor-pointer'/>
            <VideoIcon className='hover:cursor-pointer'/>
            <DotVertical className='hover:cursor-pointer'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChatSection
