import axios from "axios";
import { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { IoMdSend } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";
import logo from "../../public/user1.png";
import { useChat } from "../context/ChatContext";

const Home = () => {
    const { chats, setChats, user } = useChat();

    const [activeChat, setActiveChat] = useState(null);
    const [showSearch, setShowSearch] = useState(false);
    const [searchValue, setSearchValue] = useState("");
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        const delayDebounce = setTimeout(() => {
            if (searchValue.trim() !== "") {
                getUser(searchValue);
            } else {
                setSearchResult([]);
            }
        }, 500); // wait 500ms after user stops typing

        const getMessages = async () => {
            if (user) {
                try {
                    const res = await axios.get(
                        `http://localhost:3000/chat/converstion?userId=${user._id}`
                    );

                    setChats(res.data);
                } catch (error) {
                    console.log("Failed to fetch chats", error);
                    if (error.response) {
                        console.log(
                            "Error from backend:",
                            error.response.data.message
                        );
                    }
                }
            }
        };

        getMessages();

        return () => clearTimeout(delayDebounce);
    }, [searchValue, user]);

    // const getUser = async (query) => {
    //     try {
    //         const res = await axios.get(
    //             `http://localhost:3000/user/searchUser?query=${query}`,
    //             {
    //                 headers: {
    //                     Authorization: `Bearer ${localStorage.getItem(
    //                         'token'
    //                     )}`,
    //                 },
    //             }
    //         );
    //         setSearchResult(res.data);
    //     } catch (error) {
    //         console.log('Failed to fetch users', error);
    //     }
    // };

    const getUser = async (query) => {
        const token = localStorage.getItem("token");
        console.log("Token from localStorage:", token); // Debugging

        try {
            const res = await axios.get(
                `http://localhost:3000/user/searchUser?query=${query}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`, // Ensure token is sent
                    },
                }
            );
            setSearchResult(res.data);
        } catch (error) {
            console.log("Failed to fetch users", error);
            if (error.response) {
                console.log("Error from backend:", error.response.data.message);
            }
        }
    };

    // const chats = [
    //     {
    //         name: 'Nana',
    //         message: 'Modon o jaitam kunbay',
    //         time: '10:49 am',
    //         image: logo,
    //     },
    //     {
    //         name: 'Genius DTF',
    //         message: 'একটাই নিতে হবে।',
    //         time: '9:16 am',
    //         image: logo,
    //     },
    //     {
    //         name: 'Kuki',
    //         message: 'You reacted 😂.',
    //         time: '1:35 am',
    //         image: logo,
    //     },
    //     {
    //         name: 'Ashraful SPI',
    //         message: 'Kunta na vai',
    //         time: '12:15 am',
    //         image: logo,
    //     },
    //     {
    //         name: 'Ashraful SPI',
    //         message: 'Kunta na vai',
    //         time: '12:15 am',
    //         image: logo,
    //     },
    //     {
    //         name: 'Ashraful SPI',
    //         message: 'Kunta na vai',
    //         time: '12:15 am',
    //         image: logo,
    //     },
    //     {
    //         name: 'Ashraful SPI',
    //         message: 'Kunta na vai',
    //         time: '12:15 am',
    //         image: logo,
    //     },
    //     {
    //         name: 'Ashraful SPI',
    //         message: 'Kunta na vai',
    //         time: '12:15 am',
    //         image: logo,
    //     },
    //     {
    //         name: 'Ashraful SPI',
    //         message: 'Kunta na vai',
    //         time: '12:15 am',
    //         image: logo,
    //     },
    //     {
    //         name: 'Ashraful SPI',
    //         message: 'Kunta na vai',
    //         time: '12:15 am',
    //         image: logo,
    //     },
    //     {
    //         name: 'Ashraful SPI',
    //         message: 'Kunta na vai',
    //         time: '12:15 am',
    //         image: logo,
    //     },
    //     { name: 'Ashraful SPI', message: 'Kunta na vai', time: '12:15 am' },
    //     { name: 'Ashraful SPI', message: 'Kunta na vai', time: '12:15 am' },
    //     { name: 'Ashraful SPI', message: 'Kunta na vai', time: '12:15 am' },
    //     { name: 'Ashraful SPI', message: 'Kunta na vai', time: '12:15 am' },
    //     { name: 'Ashraful SPI', message: 'Kunta na vai', time: '12:15 am' },
    //     { name: 'Ashraful SPI', message: 'Kunta na vai', time: '12:15 am' },
    //     { name: 'Ashraful SPI', message: 'Kunta na vai', time: '12:15 am' },
    //     { name: 'Ashraful SPI', message: 'Kunta na vai', time: '12:15 am' },
    //     { name: 'Ashraful SPI', message: 'Kunta na vai', time: '12:15 am' },
    //     { name: 'Ashraful SPI', message: 'Kunta na vai', time: '12:15 am' },
    //     { name: 'Ashraful SPI', message: 'Kunta na vai', time: '12:15 am' },
    //     { name: 'Ashraful SPI', message: 'Kunta na vai', time: '12:15 am' },
    // ];

    return (
        <div className="h-screen flex flex-col md:flex-row md:p-5 lg:p-10">
            {/* Sidebar  */}
            <aside
                className={`md:w-1/4 border-r border-gray-300 p-2 overflow-y-auto scrollbar scrollbar-thin flex flex-col transition-transform duration-300 border-y border-l rounded-md rounded-r-none ${
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
                                            className="flex items-center gap-3 pt-2 border-b border-[#666] py-1"
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
                        onClick={() => setShowSearch(!showSearch)}
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
                            <div className="flex items-center gap-3">
                                <img
                                    className="w-12 h-12 rounded-full border border-gray-300"
                                    src={chat.participant.avatar}
                                    alt=""
                                />
                                <div>
                                    <div className="font-bold">{chat.name}</div>
                                    <div className="text-sm text-gray-500">
                                        {chat.participant.name}
                                    </div>
                                    {/* <div className="text-xs text-gray-600">
                                        {chat.time}
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </aside>

            {/* Chat Window  */}
            <main
                className={`flex-1 flex flex-col transition-transform duration-300 border border-l-0 border-gray-300 rounded-md rounded-l-none ${
                    activeChat === null ? "hidden md:flex" : "flex"
                }`}
            >
                {activeChat && (
                    <>
                        {/* Header  */}
                        <header className="flex gap-4 items-center p-3 border-b border-gray-200 bg-gray-200 sticky top-0">
                            <FaArrowLeft
                                className="cursor-pointer h-10"
                                onClick={() => setActiveChat(null)}
                            />
                            <div>
                                <img
                                    className="h-12 border border-black p-1 rounded-full"
                                    src={logo}
                                    alt="profile"
                                />
                            </div>
                            <div>
                                <div className="font-bold">
                                    {activeChat.name}
                                </div>
                                <div className="text-sm text-gray-500">
                                    last seen today at 11:44 am
                                </div>
                            </div>
                        </header>
                        {/* Messages   */}
                        <div className="flex-1 overflow-y-auto bg-gray-100 p-4">
                            <div className="space-y-4">
                                <div className="text-right">
                                    <div className="inline-block bg-gray-800 text-white px-4 py-2 rounded-lg shadow-md">
                                        Koi{" "}
                                        <span className="text-[9px]">
                                            11: 30 am
                                        </span>
                                    </div>
                                </div>
                                <div className="text-left">
                                    <p className="inline-block bg-gray-300 text-black px-4 py-2 rounded-lg shadow-md">
                                        Goro kene{" "}
                                        <span className="text-[9px]">
                                            11: 30 am
                                        </span>
                                    </p>
                                </div>
                                <div className="text-right">
                                    <p className="inline-block bg-gray-800 text-white px-4 py-2 rounded-lg shadow-md max-w-70 lg:max-w-100">
                                        Lorem ipsum dolor sit, amet consectetur
                                        adipisicing elit. Ipsum numquam natus
                                        tempore veritatis, aperiam eaque, dolore
                                        error saepe animi ex nobis vero? Labore
                                        sint dignissimos, debitis minima
                                        blanditiis fugiat aliquam fugit
                                        consequuntur quis! Aperiam, totam quo
                                        ratione aliquid excepturi sapiente
                                        deleniti provident voluptate minus
                                        inventore praesentium aliquam voluptates
                                        ipsam laboriosam?{" "}
                                        <span className="text-[9px]">
                                            11: 30 am
                                        </span>
                                    </p>
                                </div>
                                <div className="text-right">
                                    <p className="inline-block bg-gray-800 text-white px-4 py-2 rounded-lg shadow-md max-w-70 lg:max-w-100">
                                        Lorem ipsum dolor sit, amet consectetur
                                        adipisicing elit. Ipsum numquam natus
                                        tempore veritatis, aperiam eaque, dolore
                                        error saepe animi ex nobis vero? Labore
                                        sint dignissimos, debitis minima
                                        blanditiis fugiat aliquam fugit
                                        consequuntur quis! Aperiam, totam quo
                                        ratione aliquid excepturi sapiente
                                        deleniti provident voluptate minus
                                        inventore praesentium aliquam voluptates
                                        ipsam laboriosam?{" "}
                                        <span className="text-[9px]">
                                            11: 30 am
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Send message area */}
                        <div className="p-3 pb-5 border-t border-r-gray-700 bg-gray-800 sticky bottom-0">
                            <form
                                action=""
                                className="text-white flex items-center text-sm gap-1"
                            >
                                <input
                                    type="text"
                                    placeholder="Send Message"
                                    className="flex-1 px-4 py-1 text-white border border-gray-500 outline-0 rounded-xl"
                                />
                                <button
                                    type="submit"
                                    className="h-8 w-8 bg-gray-500 flex justify-center items-center rounded-full"
                                >
                                    <IoMdSend className="text-lg text-center" />
                                </button>
                            </form>
                        </div>
                    </>
                )}
                {!activeChat && (
                    <div className="flex items-center justify-center h-full text-gray-400">
                        Select a chat to start messaging
                    </div>
                )}
            </main>
        </div>
    );
};

export default Home;
