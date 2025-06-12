import ChatPeople from "./components/ChatPeople"
import ChatSection from "./components/ChatSection"
import { useSelector } from 'react-redux';
import { selectIsChatSectionOpen } from './features/chat/chatSlice';


function App() {
  const isChatSectionOpen = useSelector(selectIsChatSectionOpen);


  return (
    <div className="flex bg-[#F5F5F5] h-screen w-screen min-w-sm">
      {/* Contact list */}
      <div className={`md:w-3/6 w-full ${isChatSectionOpen ? 'hidden md:block' : 'block'}`}>
        <ChatPeople />
      </div>

      {/* Chat section */}
      <div className={`w-full md:block ${isChatSectionOpen ? 'block' : 'hidden md:block'}`}>
        <ChatSection />
      </div>
    </div>
  )
}

export default App
