
const SingleChat = ({ item }) => {
    return (
        <>
            <img className="size-12 rounded-full" src={item?.profileImage} alt="" />
            <div className="w-full">
                <div className="flex items-center justify-between  w-full">
                    <span className="text-lg f-inter font-medium text-[#717171]">{item?.name}</span>
                    <span className="f-inter text-sm text-[#A0A0A0]">{item?.time}</span>
                </div>
                <div className="flex items-center justify-between  w-full">
                    {item?.isTyping ? (<span className="f-inter text-[#00A3FF] text-sm">Typing...</span>) : (<span className="f-inter text-[#5F5F5F] text-sm"> {item?.message}</span>)}
                    {item?.messageCount ? (<span className="bg-[#00A3FF] text-white flex items-center justify-center f-inter font-semibold text-xs rounded-2xl px-1.5 py-0.5">{item?.messageCount}</span>) : ''}
                </div>
            </div>
        </>
    )
}

export default SingleChat
