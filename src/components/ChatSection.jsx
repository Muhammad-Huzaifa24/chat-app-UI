import PhoneIcon from "../icons/Phone"
import VideoIcon from '../icons/Video'
import DotVertical from "../icons/DotVertical"
import { useSelector } from 'react-redux';
import { selectSelectedChat } from '../features/chat/chatSlice';
import { LuMessageSquareText } from "react-icons/lu";


const ChatSection = () => {
  const selectedChat = useSelector(selectSelectedChat);

  return (
    <div className='w-full md:block hidden '>
      {selectedChat ? (
        <div className=' bg-white py-3 px-8'>
          <div className='flex items-center gap-4.5'>
            <div role='profileImage-and-dot' className='relative'>
              <img className='size-12 rounded-full' src={selectedChat?.profileImage} alt="" />
              <div className='bg-[#00A3FF] size-3.5 rounded-full bottom-0 right-0 absolute'></div>
            </div>
            <div role='name-and-status' className='flex flex-col grow-1'>
              <span className='f-inter font-medium text-lg text-[#515151]'>{selectedChat?.name}</span>
              <span className='text-[#00A3FF] f-inter text-xs'>online</span>
            </div>
            <div role='voice-video-options' className='flex gap-7 items-center'>
              <PhoneIcon className='hover:cursor-pointer' />
              <VideoIcon className='hover:cursor-pointer' />
              <DotVertical className='hover:cursor-pointer' />
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center text-gray-400">
          <LuMessageSquareText className="text-6xl mb-4" />
          <p className="text-lg font-medium">Select a conversation to start chatting</p>
        </div>
      )}
    </div>
  )
}

export default ChatSection
