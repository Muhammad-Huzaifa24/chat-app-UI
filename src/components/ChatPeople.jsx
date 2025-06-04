import { useState, useLayoutEffect, useRef } from "react";
import ChatAppIcon from "../icons/ChatApp"
import { IoIosSearch } from "react-icons/io";
import { IoIosAdd } from "react-icons/io";
import { RiPushpinFill } from "react-icons/ri";
import AllMessagesIcon from "../icons/AllMessage"
import SingleChat from "./SingleChat";
import getScrollbarWidth from "../utils/getScrollbarWidth";
import useScrollableObserver from "../hooks/useScrollableObserver"
import { data } from "../data";
import SingleChatSkeleton from "../skeletons/SingleChatSkeleton";
import TabComponent from "../components/chakra-ui/Tab"



const ChatPeople = () => {
  const pinnedChatsRef = useRef(null);
  const allChatsRef = useRef(null);

  const isPinnedScrollable = useScrollableObserver(pinnedChatsRef);
  const isAllScrollable = useScrollableObserver(allChatsRef);

  useLayoutEffect(() => {
    const paddingValue = getScrollbarWidth();
    
    if (isPinnedScrollable || isAllScrollable) {
      document.body.style.paddingRight = `${paddingValue}px`;
    } else {
      document.body.style.paddingRight = `0px`;
    }
  }, [isPinnedScrollable, isAllScrollable]);


  const [pinChatClick, setPinChatClick] = useState(null)
  const [chatClick, setChatClick] = useState(null)
  console.log('data---', data);

  const handleChatClick = (item, index, type) => {
    console.log('item click', item);
    type === 'pin' ? setPinChatClick(index) : setChatClick(index)
  }

  return (
    <div className='w-2/5 min-h-screen bg-[#FFFFFF] shadow-[inset_0_0_0_1px_rgba(94,94,94,0.2)] flex flex-col h-screen overflow-auto'>
      <div role="logo-and-text" className="flex px-6 py-5 items-center gap-3.5">
        <ChatAppIcon />
        <span className='f-inter font-semibold text-[22px] text-[#00A3FF]'>Chat Buddies</span>
      </div>
      <div role="search-and-add-contact" className="w-full mt-6.5 px-6 flex items-center gap-3">
        <div role="search-field" className="w-full flex items-center gap-2.5 shadow-[inset_0_0_0_1px_#CCCFD0]  rounded-xl px-3.5 py-3">
          <IoIosSearch className="size-6 text-[#ABAFB199]" />
          <input
            type="text"
            placeholder="Search messages, people"
            className="w-full focus:outline-0 focus:border-none focus:ring-0 f-inter text-base text-[#ABAFB199]"
          />
        </div>
        <div role="add-contact-button" className="p-3 bg-[#00A3FF] rounded-xl">
          <IoIosAdd className="size-6 text-[#FFFFFF]" />
        </div>
      </div>
      <TabComponent/>
      {/* 
      <div className="flex items-center gap-1.5 mt-6 mb-2.75 pl-12">
        <RiPushpinFill />
        <span className="f-inter text-[#818181] text-xs font-medium">PINNED CHATS</span>
      </div>
      <div role="pinned-chats" ref={pinnedChatsRef} className="h-[230px] overflow-auto scroll-container">
        {data?.map((item, index) => (
          <div
            className={`hover: cursor-pointer px-6 py-3 flex gap-4  ${pinChatClick === index ? "bg-[#00A3FF]/15 shadow-[inset_0_1px_0_rgba(0,163,255,0.2),inset_0_-1px_0_rgba(0,163,255,0.2)]" : ""}`}
            onClick={() => { handleChatClick(item, index, "pin") }}
            key={index}
          >
            <SingleChat item={item}/>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-1.5 mt-6 mb-2.75 pl-12">
        <AllMessagesIcon/>
        <span className="f-inter text-[#818181] text-xs font-medium">ALL MESSAGES</span>
      </div>
      <div role="all-chats" ref={allChatsRef} className="h-64 overflow-auto scroll-container">
        {data?.map((item, index) => (
          <div
            className={`hover: cursor-pointer px-6 py-3 flex gap-4  ${chatClick === index ? "bg-[#00A3FF]/15 shadow-[inset_0_1px_0_rgba(0,163,255,0.2),inset_0_-1px_0_rgba(0,163,255,0.2)]" : ""}`}
            onClick={() => { handleChatClick(item, index) }}
            key={index}
          >
            <SingleChat item={item}/>
          </div>
        ))}
      </div> */}

    </div>
  )
}

export default ChatPeople
