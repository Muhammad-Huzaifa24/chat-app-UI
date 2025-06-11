import { useState, useMemo } from "react";
import TabComponent from "../components/chakra-ui/Tab"
import ChatAppIcon from "../icons/ChatApp"
import { IoIosSearch } from "react-icons/io";
import { IoIosAdd } from "react-icons/io";
import { CiMenuKebab } from "react-icons/ci";
import { data } from "../data";
import AddContactModal from "./chakra-ui/Modal";
import { useDisclosure } from '@chakra-ui/react'; // for modal
import MainMenu from "../components/chakra-ui/Menu"



const ChatPeople = () => {
  // const { isOpen, onOpen, onClose } = useDisclosure(); // for modal
  const modalDisclosure = useDisclosure(); // for modal
  const menuDisclosure = useDisclosure();  // for menu
  const [searchTerm, setSearchTerm] = useState("");
  // Filter and sort data based on search term
  const filteredData = useMemo(() => {
    // Return all data if no search term
    if (!searchTerm.trim()) return data;

    const lowerCaseSearch = searchTerm.toLowerCase();

    // Filter by name only
    return data.filter(chat =>
      chat.name.toLowerCase().includes(lowerCaseSearch)
    ).sort((a, b) => {
      // Sort alphabetically by name
      return a.name.localeCompare(b.name);
    });
  }, [searchTerm]); // Removed data from dependencies since it's imported

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  console.log('chat poeple---', data);

  return (
    <>
      <div className='md:w-2/5 w-full  h-screen overflow-auto bg-[#FFFFFF] shadow-[inset_0_0_0_1px_rgba(94,94,94,0.2)] flex flex-col'>
        <div role="logo-and-text" className="flex pl-6 pr-1 sm:px-6 py-5 items-center gap-3.5">
          <ChatAppIcon />
          <span className='f-inter font-semibold text-[22px] text-[#00A3FF] grow-1'>Chat Buddies</span>
          <div className="md:hidden block">
            <MainMenu
          />
          </div>
        </div>
        <div role="search-and-add-contact" className="w-full  mt-6.5 px-3 sm:px-6 mb-7 flex items-center gap-3">
          <div role="search-field" className="w-full flex items-center gap-2.5 shadow-[inset_0_0_0_1px_#CCCFD0]  rounded-full sm:rounded-xl px-3.5 py-3">
            <IoIosSearch className="size-6 text-[#ABAFB199]" />
            <input
              type="text"
              placeholder="Search messages, people"
              value={searchTerm}
              onChange={handleSearch}
              className="w-full focus:outline-0 focus:border-none focus:ring-0 f-inter text-base text-[#ABAFB199]"
            />
          </div>
          <div role="add-contact-button" className="p-5 sm:p-3 bg-[#00A3FF] rounded-full absolute bottom-5 right-5 sm:relative sm:bottom-auto sm:right-auto sm:rounded-xl cursor-pointer shadow-lg z-50 sm:shadow-none" onClick={modalDisclosure.onOpen}>
            <IoIosAdd className="size-6 text-[#FFFFFF] " />
          </div>
        </div>
        <div className="border flex-grow overflow-hidden p-0">
          <TabComponent
            data={filteredData}
          />
        </div>
      </div>

      <AddContactModal
        isOpen={modalDisclosure.isOpen}
        onClose={modalDisclosure.onClose}
      />
    </>
  )
}

export default ChatPeople
