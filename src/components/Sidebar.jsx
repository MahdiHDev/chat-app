const Sidebar = () => {
    return (
        <aside
            className={`md:w-1/4 p-2 overflow-y-auto scrollbar scrollbar-thin flex flex-col transition-transform duration-300 rounded-md rounded-r-none ${
                activeChat === null ? "block" : "hidden md:block"
            }`}
        >
            <div className="flex justify-between items-center p-3 border-b border-gray-200 relative">
                <div
                    className={`absolute top-[20%] bg-white z-[999] w-[85%] ${
                        showSearch ? "block" : "hidden"
                    }`}
                >
                    <input
                        className={`w-full px-4 py-1 outline-0 border-0 border-b border-[#666]`}
                        type="text"
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                        placeholder="Search User by username or Mobile number"
                    />

                    <div className="box shadow-2xl p-4 rounded-md">
                        <div>
                            {searchResult.length > 0 ? (
                                searchResult.map((user, idx) => (
                                    <div
                                        key={idx}
                                        className="flex items-center gap-3 pt-2 border-b border-[#666] py-1 cursor-pointer"
                                        onClick={() =>
                                            createConversation(user._id)
                                        }
                                    >
                                        <img
                                            className="w-12 h-12 rounded-full border border-gray-300"
                                            src={user.avatar}
                                            alt=""
                                        />
                                        <div>
                                            <div className="font-bold">
                                                {user.name}
                                            </div>
                                            {/* <div className="text-sm text-gray-500">
                                                    message
                                                </div>
                                                <div className="text-xs text-gray-600">
                                                    time
                                                </div> */}
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <p className="text-center text-[#666] p-4">
                                    No user found
                                </p>
                            )}
                        </div>
                    </div>
                </div>
                <div className="font-bold text-lg">Chats</div>
                <button
                    onClick={() => {
                        setShowSearch(!showSearch);
                        setSearchValue("");
                    }}
                    className="flex gap-2"
                >
                    {showSearch ? (
                        <RxCross1 className="w-5 h-5 cursor-pointer" />
                    ) : (
                        <IoSearchOutline className="w-5 h-5 cursor-pointer" />
                    )}
                </button>
            </div>
            <div>
                {chats.map((chat, idx) => (
                    <div
                        key={idx}
                        onClick={() => setActiveChat(chat)}
                        className="flex justify-between items-center px-3 py-2 hover:bg-gray-300 hover:text-white cursor-pointer border-b border-gray-200"
                    >
                        <div className="flex justify-between w-full items-center">
                            <div className="flex items-center gap-4">
                                <img
                                    className="w-12 h-12 rounded-full border border-gray-300"
                                    src={chat.participant.avatar}
                                    alt=""
                                />
                                <div>
                                    <div className="font-bold text-sm text-gray-500">
                                        {user._id === chat.creator._id
                                            ? chat.participant.name
                                            : chat.creator.name}
                                    </div>
                                    <div className="text-sm text-gray-500">
                                        last Message
                                    </div>
                                </div>
                            </div>
                            <div className="text-xs text-gray-600">
                                {formatChatTime(chat.last_updated)}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </aside>
    );
};

export default Sidebar;
