'use client'
import React from 'react';

const MessengerChat = () => {
    return (
        <div className="flex h-screen bg-gray-200">
            <div className="flex-shrink-0 w-64 bg-white border-r overflow-y-auto" style={{overflowX : ' hidden'}}>
                <button
                    data-drawer-target="logo-sidebar"
                    data-drawer-toggle="logo-sidebar"
                    aria-controls="logo-sidebar"
                    type="button"
                    className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                >
                    <span className="sr-only">Open sidebar</span>
                    <svg
                        className="w-6 h-6"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            clipRule="evenodd"
                            fillRule="evenodd"
                            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                        />
                    </svg>
                </button>
                <aside
                    id="logo-sidebar"
                    className=" z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
                    aria-label="Sidebar"
                >
                    <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
                        <a href="#" className="flex items-center ps-2.5 mb-5">
                            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                                Scrollink
                            </span>
                        </a>
                        <br />
                        <ul className="space-y-2 font-medium">
                            <li>
                                <a

                                    className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                                >
                                    <div className="p-3 bg-white border-b flex items-center" style={{width : '100%'}}>
                                        <div className="w-10 h-10 bg-blue-500 rounded-full"></div>
                                        <div className="ml-4">
                                            <div className="text-sm font-semibold">John Doe</div>
                                            <div className="text-xs text-gray-500">Active now</div>
                                        </div>
                                        <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
                                            3
                                        </span>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a

                                    className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                                >
                                    <div className="p-3 bg-white border-b flex items-center" style={{width : '100%'}}>
                                        <div className="w-10 h-10 bg-blue-500 rounded-full"></div>
                                        <div className="ml-4">
                                            <div className="text-sm font-semibold">Umair Sheikh</div>
                                            <div className="text-xs text-gray-500">Active now</div>
                                        </div>
                                        <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
                                            
                                        </span>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a

                                    className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                                >
                                    <div className="p-3 bg-white border-b flex items-center" style={{width : '100%'}}>
                                        <div className="w-10 h-10 bg-blue-500 rounded-full"></div>
                                        <div className="ml-4">
                                            <div className="text-sm font-semibold">John Doe</div>
                                            <div className="text-xs text-gray-500">last seen 10 mintues ago </div>
                                        </div>
                                        <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
                                            13
                                        </span>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a

                                    className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                                >
                                    <div className="p-3 bg-white border-b flex items-center" style={{width : '100%'}}>
                                        <div className="w-10 h-10 bg-blue-500 rounded-full"></div>
                                        <div className="ml-4">
                                            <div className="text-sm font-semibold">Alex </div>
                                            <div className="text-xs text-gray-500">last seen 2 mintues ago </div>
                                        </div>
                                        <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
                                            1
                                        </span>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a

                                    className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                                >
                                    <div className="p-3 bg-white border-b flex items-center" style={{width : '100%'}}>
                                        <div className="w-10 h-10 bg-blue-500 rounded-full"></div>
                                        <div className="ml-4">
                                            <div className="text-sm font-semibold">Bilal Ahmed </div>
                                            <div className="text-xs text-gray-500">Active Now </div>
                                        </div>
                                        <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
                                            
                                        </span>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a

                                    className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                                >
                                    <div className="p-3 bg-white border-b flex items-center" style={{width : '100%'}}>
                                        <div className="w-10 h-10 bg-blue-500 rounded-full"></div>
                                        <div className="ml-4">
                                            <div className="text-sm font-semibold">Sami Hassan </div>
                                            <div className="text-xs text-gray-500">last seen 2 Hour ago </div>
                                        </div>
                                        <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
                                            
                                        </span>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a

                                    className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                                >
                                    <div className="p-3 bg-white border-b flex items-center" style={{width : '100%'}}>
                                        <div className="w-10 h-10 bg-blue-500 rounded-full"></div>
                                        <div className="ml-4">
                                            <div className="text-sm font-semibold">Saad Baig </div>
                                            <div className="text-xs text-gray-500">last seen 10 mintue ago </div>
                                        </div>
                                        <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
                                            17
                                        </span>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </aside>
            </div>
            <div className="flex-1 flex flex-col">
                <div className="p-4 bg-white border-b flex items-center">
                    <div className="w-10 h-10 bg-blue-500 rounded-full"></div>
                    <div className="ml-4">
                        <div className="text-sm font-semibold">John Doe</div>
                        <div className="text-xs text-gray-500">Active now</div>
                    </div>
                </div>
                <div className="flex-1 p-4 overflow-y-auto">
                </div>
                <div className="p-4 bg-white border-t flex items-center">
                    <input
                        type="text"
                        placeholder="Type a message..."
                        className="flex-1 p-2 border border-gray-300 rounded"
                    />
                    <button className="ml-2 px-4 py-2 bg-blue-500 text-white rounded">
                        Send
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MessengerChat;
