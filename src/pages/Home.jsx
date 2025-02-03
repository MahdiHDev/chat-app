import { useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { IoMdSend } from 'react-icons/io';
import { IoSearchOutline } from 'react-icons/io5';
import logo from '../../public/user1.png';

const Home = () => {
    const [activeChat, setActiveChat] = useState(null);

    const chats = [
        {
            name: 'Nana',
            message: 'Modon o jaitam kunbay',
            time: '10:49 am',
            image: logo,
        },
        {
            name: 'Genius DTF',
            message: 'একটাই নিতে হবে।',
            time: '9:16 am',
            image: logo,
        },
        { name: 'Kuki', message: 'You reacted 😂.', time: '1:35 am', image: logo, },
        {
            name: 'Ashraful SPI',
            message: 'Kunta na vai',
            time: '12:15 am',
            image: logo,
        },
        {
            name: 'Ashraful SPI',
            message: 'Kunta na vai',
            time: '12:15 am',
            image: logo,
        },
        {
            name: 'Ashraful SPI',
            message: 'Kunta na vai',
            time: '12:15 am',
            image: logo,
        },
        {
            name: 'Ashraful SPI',
            message: 'Kunta na vai',
            time: '12:15 am',
            image: logo,
        },
        {
            name: 'Ashraful SPI',
            message: 'Kunta na vai',
            time: '12:15 am',
            image: logo,
        },
        {
            name: 'Ashraful SPI',
            message: 'Kunta na vai',
            time: '12:15 am',
            image: logo,
        },
        {
            name: 'Ashraful SPI',
            message: 'Kunta na vai',
            time: '12:15 am',
            image: logo,
        },
        {
            name: 'Ashraful SPI',
            message: 'Kunta na vai',
            time: '12:15 am',
            image: logo,
        },
        { name: 'Ashraful SPI', message: 'Kunta na vai', time: '12:15 am' },
        { name: 'Ashraful SPI', message: 'Kunta na vai', time: '12:15 am' },
        { name: 'Ashraful SPI', message: 'Kunta na vai', time: '12:15 am' },
        { name: 'Ashraful SPI', message: 'Kunta na vai', time: '12:15 am' },
        { name: 'Ashraful SPI', message: 'Kunta na vai', time: '12:15 am' },
        { name: 'Ashraful SPI', message: 'Kunta na vai', time: '12:15 am' },
        { name: 'Ashraful SPI', message: 'Kunta na vai', time: '12:15 am' },
        { name: 'Ashraful SPI', message: 'Kunta na vai', time: '12:15 am' },
        { name: 'Ashraful SPI', message: 'Kunta na vai', time: '12:15 am' },
        { name: 'Ashraful SPI', message: 'Kunta na vai', time: '12:15 am' },
        { name: 'Ashraful SPI', message: 'Kunta na vai', time: '12:15 am' },
        { name: 'Ashraful SPI', message: 'Kunta na vai', time: '12:15 am' },
    ];

    return (
        <div className="h-screen flex flex-col md:flex-row md:p-5 lg:p-10">
            {/* Sidebar  */}
            <aside
                className={`md:w-1/4 border-r border-gray-300 p-2 overflow-y-auto scrollbar scrollbar-thin flex flex-col transition-transform duration-300 border-y border-l shadow-xl rounded-md rounded-r-none ${
                    activeChat === null ? 'block' : 'hidden md:block'
                }`}
            >
                <div className="flex justify-between items-center p-3 border-b border-gray-200">
                    <div className="font-bold text-lg">Chats</div>
                    <div className="flex gap-2">
                        <IoSearchOutline className="w-5 h-5cursor-pointer" />
                    </div>
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
                                    src={chat.image}
                                    alt=""
                                />
                                <div>
                                    <div className="font-bold">{chat.name}</div>
                                    <div className="text-sm text-gray-500">
                                        {chat.message}
                                    </div>
                                    <div className="text-xs text-gray-600">
                                        {chat.time}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </aside>

            {/* Chat Window  */}
            <main
                className={`flex-1 flex flex-col transition-transform duration-300 border border-l-0 border-gray-300 shadow-xl rounded-md rounded-l-none ${
                    activeChat === null ? 'hidden md:flex' : 'flex'
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
                                        Koi{' '}
                                        <span className="text-[9px]">
                                            11: 30 am
                                        </span>
                                    </div>
                                </div>
                                <div className="text-left">
                                    <p className="inline-block bg-gray-300 text-black px-4 py-2 rounded-lg shadow-md">
                                        Goro kene{' '}
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
                                        ipsam laboriosam?{' '}
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
                                        ipsam laboriosam?{' '}
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
