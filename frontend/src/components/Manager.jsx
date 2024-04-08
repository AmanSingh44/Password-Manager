import React from "react";
import { useRef } from "react";

const Manager = () => {
  const ref = useRef();
  const showPassword = () => {
    if (ref.current.src.includes("/view.png")) {
      ref.current.src = "/hide.png";
    } else {
      ref.current.src = "/view.png";
    }
  };
  let passwords = [];
  return (
    <div className="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]">
      <div className=" mycontainer">
        <div className="text-black font-bold">
          <h1 className="text-4xl  font-bold text-center min-w-32">
            <span className="text-green-500">&lt;</span>
            <span>Password</span>
            <span className="text-green-500">Manager/&gt;</span>
          </h1>
          <p className="text-green-900 text-lg text-center min-w-32">
            My own password manager
          </p>
        </div>
        <div className=" flex flex-col p-4 mt-16 text-black gap-8 items-center">
          <input
            placeholder="Enter website, app or service name"
            className="rounded-full border border-green-500 w-full p-4 py-1"
            type="text"
          />
          <div className="flex w-full gap-8">
            <input
              placeholder="Enter Username"
              className="rounded-full border border-green-500 w-full p-4 py-1"
              type="text"
            />
            <div className="relative">
              <input
                placeholder="Enter Password"
                className="rounded-full border border-green-500 w-full p-4 py-1"
                type="text"
              />
              <span
                className="absolute right-[3px] top-[3px] cursor-pointer"
                onClick={showPassword}
              >
                <img
                  ref={ref}
                  className="p-1"
                  width={28}
                  src="/view.png"
                  alt="show"
                />
              </span>
            </div>
          </div>
          <button className=" gap-2 flex justify-center items-center bg-green-500 rounded-full px-8 py-2 w-fit hover:bg-green-400">
            <lord-icon
              src="https://cdn.lordicon.com/jgnvfzqg.json"
              trigger="hover"
            ></lord-icon>
            Add Password
          </button>
        </div>

        <div>
          <h2 className="font-bold text-2xl py-4">My Passwords</h2>
          {passwords.length === 0 && <div>No Passwords to show</div>}
          {passwords.length !== 0 && (
            <table className="table-auto w-full rounded-md:overflow-hidden justify-items-center">
              <thead className="bg-green-800 text-white">
                <tr>
                  <th className="py-2">Website</th>
                  <th className="py-2">UserName</th>
                  <th className="py-2">Password</th>
                </tr>
              </thead>
              <tbody className="bg-green-100">
                <tr>
                  <td className=" py-2 text-center min-w-32 border border-white">
                    The Sliding
                  </td>
                  <td className=" py-2 text-center min-w-32 border border-white">
                    Malcolm Lockyer
                  </td>
                  <td className=" py-2 text-center min-w-32 border border-white">
                    1961
                  </td>
                </tr>
                <tr>
                  <td className=" py-2 text-center min-w-32 border border-white">
                    Witchy Woman
                  </td>
                  <td className=" py-2 text-center min-w-32 border border-white">
                    The Eagles
                  </td>
                  <td className=" py-2 text-center min-w-32 border border-white">
                    1972
                  </td>
                </tr>
                <tr>
                  <td className=" py-2 text-center min-w-32 border border-white">
                    Shining Star
                  </td>
                  <td className=" py-2 text-center min-w-32 border border-white">
                    Earth, Wind, and Fire
                  </td>
                  <td className=" py-2 text-center min-w-32 border border-white">
                    1975
                  </td>
                </tr>
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default Manager;
