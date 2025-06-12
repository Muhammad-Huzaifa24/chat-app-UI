import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Box
} from "@chakra-ui/react";
import { useState, useRef } from "react";
import { RiPushpinFill } from "react-icons/ri";
import { LuMessageSquareText } from "react-icons/lu";
import SingleChat from "../SingleChat";
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedChat, selectSelectedChat } from '../../features/chat/chatSlice';


const TabComponent = ({
  data,
}) => {
  const dispatch = useDispatch();
  const selectedChat = useSelector(selectSelectedChat);
  const [pinChatClick, setPinChatClick] = useState(null)
  const [chatClick, setChatClick] = useState(null)
  const pinnedChatsRef = useRef(null);
  const allChatsRef = useRef(null);

  console.log('Tab component----', data);
  console.log('selectedChat----', selectedChat);

  const handleChatClick = (item, index, type) => {
    dispatch(setSelectedChat({
      ...item,
      chatType: type,
      chatIndex: index,
    }));
    type === 'pin' ? setPinChatClick(index) : setChatClick(index)
  };

  return (
    <Tabs
      variant=""
      isFitted
      className="px-0 py-1"
      display="flex"
      flexDirection="column"
      height="100%"
      minHeight="0"
      css={{
        "& ::-webkit-scrollbar": {
          width: "0px",
          height: "3px",
        },
        "& ::-webkit-scrollbar-thumb": {
          backgroundColor: "transparent",
          borderRadius: "1px",
        },
        "&:hover ::-webkit-scrollbar-thumb": {
          backgroundColor: "transparent",
        },

      }}
    >
      <TabList
        className=" px-3 py-2" flexShrink={0}>
        <Tab color="#00A3FF"
          _selected={{fontWeight: "bold", borderBottom:'2px solid #00A3FF' }}
          className="flex items-center gap-2 f-inter">
          <LuMessageSquareText />
          All
        </Tab>
        <Tab
          color="#00A3FF"
          _selected={{ fontWeight: "bold",borderBottom:'2px solid #00A3FF' }}
          className="flex items-center gap-2 f-inter">
          <RiPushpinFill />Pinned
        </Tab>

      </TabList>

      <TabPanels
        flex="1"
        minHeight="0"
        display="flex"
        flexDirection="column"
      >
        {/* Tab 1: All Chats */}
        <TabPanel
          p={0}
          py={2}
          height="100%"
          flex="1"
          minHeight="0"
          display="flex"
          flexDirection="column"
        >
          <Box
            ref={allChatsRef}
            flex="1"
            overflowY="auto"
            minHeight="0"
            css={{
              "&::-webkit-scrollbar-track": {
                backgroundColor: "transparent",
              },
            }}
          >
            {data?.map((item, index) => (
              <div
                key={index}
                className={`cursor-pointer border-b-amber-300 px-3 py-3 flex gap-4 ${chatClick === index
                  ? "bg-[#00A3FF]/15 shadow-[inset_0_1px_0_rgba(0,163,255,0.2),inset_0_-1px_0_rgba(0,163,255,0.2)] "
                  : ""
                  }`}
                onClick={() => handleChatClick(item, index, "all")}
              >
                <SingleChat item={item} />
              </div>
            ))}
          </Box>

        </TabPanel>

        {/* Tab 2: Pinned Chats */}
        <TabPanel
          p={0}
          py={2}
          flex="1"
          minHeight="0"
          display="flex"
          flexDirection="column">

          <Box
            ref={pinnedChatsRef}
            flex="1"
            overflowY="auto"
            minHeight="0"
            css={{
              "&::-webkit-scrollbar-track": {
                backgroundColor: "transparent",
              },
            }}
          >
            {data?.map((item, index) => (
              <div
                key={index}
                className={`cursor-pointer px-3 py-3 flex gap-4 ${pinChatClick === index
                  ? "bg-[#00A3FF]/15 shadow-[inset_0_1px_0_rgba(0,163,255,0.2),inset_0_-1px_0_rgba(0,163,255,0.2)]"
                  : ""
                  }`}
                onClick={() => handleChatClick(item, index, "pin")}
              >
                <SingleChat item={item} />
              </div>
            ))}
          </Box>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default TabComponent;
