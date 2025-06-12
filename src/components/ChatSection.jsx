import React, { useState, useRef } from 'react';

import PhoneIcon from "../icons/Phone"
import VideoIcon from '../icons/Video'
import DotVertical from "../icons/DotVertical"
import { useSelector, useDispatch } from 'react-redux';
import { selectSelectedChat, clearSelectedChat } from '../features/chat/chatSlice';
import { LuMessageSquareText } from "react-icons/lu";
import { IoArrowBack } from "react-icons/io5";
import { GrEmoji } from "react-icons/gr";
import { MdKeyboardVoice } from "react-icons/md";
import { CgAttachment } from "react-icons/cg";
import { IoIosSend } from "react-icons/io";
import { Messages } from "../data"
import EmojiPicker from 'emoji-picker-react';




// ReciverProfileImage
// SenderProfileImage
// recieveMessage
// recieverName
// sendMessage
// senderName
// time


const ChatComponent = ({ item }) => {
  const selectedChat = useSelector(selectSelectedChat);
  return (
    <>
      {/* Receiver's message (left aligned) */}
      <div className="flex gap-3.5 mb-5">
        <div>
          <img className='size-12 rounded-full' src={selectedChat?.profileImage} alt="" />
        </div>
        <div className="flex flex-col gap-3 items-start">
          <div className="flex items-center gap-4">
            <span className="f-inter font-medium text-base text-[#515151]">{selectedChat?.name}</span>
            <span className="f-inter text-xs text-[#A0A0A0]">
              {new Date(item?.time).toLocaleTimeString([], {
                hour: '2-digit',
                minute: '2-digit',
              })}
            </span>
          </div>
          <div className="shadow-[2px_2px_12px_0_rgba(209,209,209,0.25)] rounded-tr-[14px] rounded-br-[14px] rounded-bl-[14px] bg-transparent ">
            <div className="shadow-[inset_0_0_0_1px_#00A3FF] font-light f-inter bg-[#00A3FF] py-4  px-5 rounded-tr-[14px] rounded-br-[14px] rounded-bl-[14px] text-base  text-white break-words">
              {item?.recieveMessage}
            </div>
          </div>
        </div>
      </div>

      {/* Sender's message (right aligned) */}
      <div className="flex flex-row-reverse gap-3.5 mb-5">
        <div>
          <img className='size-12   rounded-full' src={item?.SenderProfileImage} alt="" />
        </div>
        <div className="flex flex-col gap-3 items-end">
          <div className="flex items-center gap-4">
            <span className="f-inter text-xs text-[#A0A0A0]">
              {new Date(item?.time).toLocaleTimeString([], {
                hour: '2-digit',
                minute: '2-digit',
              })}
            </span>
            <span className="f-inter font-medium text-base text-[#515151]">{item?.senderName}</span>
          </div>
          <div className="shadow-[2px_2px_12px_0_rgba(209,209,209,0.25)] rounded-tl-[14px] rounded-br-[14px] rounded-bl-[14px] bg-transparent ">
            <div className="shadow-[inset_0_0_0_1px_#E7E7E7] font-light f-inter bg-white py-4  px-5 rounded-tl-[14px] rounded-br-[14px] rounded-bl-[14px] text-base text-[#515151] break-words">
              {item?.sendMessage}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const ChatSection = () => {
  const dispatch = useDispatch();
  const selectedChat = useSelector(selectSelectedChat);
  const [isEmojiPickerOpen, setIsEmojiPickerOpen] = useState(false);
  const [message, setMessage] = useState('')
  const emojiIconRef = useRef(null);

  function unifiedToEmoji(unified) {
  return unified
    .split('-')
    .map(u => String.fromCodePoint(parseInt(u, 16)))
    .join('');
}


  if (!selectedChat) {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center text-gray-400">
        <LuMessageSquareText className="text-6xl mb-4" />
        <p className="text-lg font-medium">Select a conversation to start chatting</p>
      </div>
    );
  }

  return (
    <div className='w-full h-screen flex flex-col'>
      {/* chat section header */}
      <div className=' py-3 md:px-8 px-4 bg-[#FFFFFF] shadow-[inset_0_0_0_1px_#DFDFDF]'>
        <div className='flex items-center gap-4.5'>
          <div className="md:hidden block">
            <IoArrowBack
              size={20}
              color="black"
              onClick={() => dispatch(clearSelectedChat())}
              className="cursor-pointer md:hidden block"
            />
          </div>
          <div role='profileImage-and-dot' className='relative'>
            <img className='size-10 md:size-12 rounded-full' src={selectedChat?.profileImage} alt="" />
            <div className='bg-[#00A3FF] size-3.5 rounded-full bottom-0 right-0 absolute'></div>
          </div>
          <div role='name-and-status' className='flex flex-col grow-1'>
            <span className='f-inter font-medium text-base md:text-lg text-[#515151]'>{selectedChat?.name}</span>
            <span className='text-[#00A3FF] f-openSans text-xs'>online</span>
          </div>
          <div role='voice-video-options' className='flex  gap-5 md:gap-7 items-center'>
            <PhoneIcon className='hover:cursor-pointer size-5 md:size-7' color="#A0A0A0" />
            <VideoIcon className='hover:cursor-pointer size-5 md:size-7' color="#A0A0A0" />
            <DotVertical className='hover:cursor-pointer size-5 md:size-7' color="#A0A0A0" />
          </div>
        </div>
      </div>
      {/* chat section body */}
      <div className="flex-1 pt-4 overflow-y-auto px-5 md:px-11">
        {Messages?.map((message, index) => (
          <ChatComponent item={message} />
        ))}
      </div>

      {/* message input-send button */}
      <div className="bg-[#FFFFFF]  px-4 sm:px-11.5 py-4 flex items-center shadow-[inset_0_0_0_1px_#DFDFDF]" >
        <div className="relative" ref={emojiIconRef}>
          <GrEmoji
            color="#A0A0A0"
            className="size-5 md:size-6.5 cursor-pointer mr-3 flex-shrink-0"
            title="emoji feature"
            onClick={() => setIsEmojiPickerOpen(!isEmojiPickerOpen)}
          />

          {isEmojiPickerOpen && (
            <div className="absolute bottom-full mb-2 left-0 z-50">
              <EmojiPicker
                onEmojiClick={(emojiData) => {
                  console.log(emojiData);
                  
                  setMessage((prev) => prev + emojiData.emoji);
                  setIsEmojiPickerOpen(false);
                }}
              />
            </div>
          )}
        </div>

        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type message..."
          className="f-inter text-[#A0A0A0] flex-none md:flex-grow min-w-0 p-0 m-0 text-sm sm:text-[27px] border-none focus:ring-0 focus:border-none focus:outline-0"
        />
        <div className="flex items-center gap-2 sm:gap-5 flex-shrink-0">
          <MdKeyboardVoice color="#A0A0A0" className='cursor-pointer size-5 md:size-6.5' title="voice message" />
          <CgAttachment color="#A0A0A0" className='cursor-pointer size-4 md:size-6.5' title="attachements" />
          {/* <IoIosSend size={26}  className="md:text-white md:block hidden text-[#00A3FF]"/> */}
          <div
            title="send message"
            className="md:bg-[#00A3FF] bg-none rounded-xl flex items-center md:py-2.5 py-0 md:px-4.5 px-0 gap-2 cursor-pointer"
          >
            <span className="f-inter font-medium text-xl text-white md:block hidden">Send</span>
            <IoIosSend className="md:text-white md:block hidden size-5 md:size-6.5 text-[#00A3FF]" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChatSection
