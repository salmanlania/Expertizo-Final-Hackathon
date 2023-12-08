"use client";

import { Fragment, useEffect, useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { onAuthStateChanged , signOut  } from "firebase/auth";
import { auth } from "../config/firebase"
import { Router } from "next/router";

// const navigation = [
//   { name: "Dashboard", href: "#", current: true },
//   { name: "Post", href: "/post", current: false },
//   { name: "Projects", href: "#", current: false },
//   { name: "Calendar", href: "#", current: false },
// ];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function navbar() {
  const [user, setUser] = useState("");

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log("user-->", user)
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        setUser(user);
        // ...
      } else {
        // User is signed out
        // ...
      }
    });
  }, []);
  const logout = async () => {
    try {
      await signOut(auth)
      // setLog(false)
      setUser()
      alert("Log Out")
      Router

    } catch (e) {
      alert(e.message)

    }
  }
  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">

                </div>
                <div className="hidden sm:ml-6 sm:block">
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                      <h1 style={{ color: "white", marginRight: "20px", marginTop: "6px" }}>{
                        user ? user.displayName : "User"
                      }</h1>
                      <img
                        className="h-8 w-8 rounded-full"
                        src={user ? user.photoURL : "data:image/jpeg;base64,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"}
                        alt=""
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Your Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                            onClick={logout}
                          >
                            Sign out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            {/* <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div> */}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}