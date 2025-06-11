import ChatPeople from "./components/ChatPeople"
import ChatSection from "./components/ChatSection"

function App() {

  return (
    <div className="flex bg-[#F5F5F5] h-screen w-screen min-w-sm">
      <ChatPeople/>
      <ChatSection/>
    </div>
  )
}

export default App
