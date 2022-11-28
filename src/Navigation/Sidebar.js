export default function Sidebar () {
    return(
        <div className="Sidebar flex w-fit">
          <div className="flex flex-col h-screen p-3 bg-gray-800 shadow w-60">
              <div className="space-y-3">
                  <div className="flex items-center">
                      <h2 className="text-xl font-bold text-white">Dashboard</h2>
                  </div>
                  <div className="relative">
                      <span className="absolute inset-y-0 left-0 flex items-center py-4">
                          <button
                              type="submit"
                              className="p-2 focus:outline-none focus:ring"
                          >
                              
                          </button>
                      </span>
                      <input
                          type="search"
                          name="Search"
                          placeholder="Search..."
                          className="w-full py-2 pl-10 text-sm rounded-md focus:outline-none"
                      />
                  </div>
                  <div className="flex-1">
                      <ul className="pt-2 pb-4 space-y-1 text-sm">
                          <li className="rounded-sm ">
                              <a
                                 href='./'
                                  className="flex items-center p-2 space-x-3 rounded-md"
                              >
                                  <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="w-6 h-6 text-gray-100"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke="currentColor"
                                      strokeWidth={2}
                                  >
                                      <path
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                                      />
                                  </svg>
                                  
                                  <span className="text-gray-100">Home</span>
                                  
                              </a>
                          </li>
                          <li className="rounded-sm bg-gray-500/50">
                              <a
                                 href='./files'
                                  className="flex items-center p-2 space-x-3 rounded-md"
                              >
                                  <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="w-6 h-6 text-gray-100"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke="currentColor"
                                      strokeWidth={2}
                                  >
                                      <path
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                                      />
                                  </svg>
                                  <span className="text-gray-100">Files</span>
                              </a>
                          </li>
                          <li className="rounded-sm">
                              <a
                                  href='./explore'
                                  className="flex items-center p-2 space-x-3 rounded-md"
                              >
                                  <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="w-6 h-6 text-gray-100"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke="currentColor"
                                      strokeWidth={2}
                                  >
                                      <path
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                                      />
                                  </svg>
                                  <span className="text-gray-100"> Explore </span>
                              </a>
                          </li>
                          <li className="rounded-sm">
                              <a
                                  href='./settings'
                                  className="flex items-center p-2 space-x-3 rounded-md"
                              >
                                  <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="w-6 h-6 text-gray-100"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke="currentColor"
                                      strokeWidth={2}
                                  >
                                      <path
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                                      />
                                      <path
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                      />
                                  </svg>
                                  <span className="text-gray-100">Settings</span>
                              </a>
                          </li>
                          <li className="rounded-sm">
                              <a
                                 
                                  className="flex items-center p-2 space-x-3 rounded-md"
                              >
                                  <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="w-6 h-6 text-gray-100"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke="currentColor"
                                      strokeWidth={2}
                                  >
                                      <path
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                                      />
                                  </svg>
                                  <span className="text-gray-100">Logout</span>
                              </a>
                          </li>
                      </ul>
                  </div>
              </div>
          </div>          
      </div>
    )
}

