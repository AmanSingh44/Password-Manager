import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { addData, deleteData, getData } from "../apiCollection/api";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Manager = () => {
  const ref = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();

  const defaultValue = {
    website: "",
    username: "",
    password: "",
  };

  const [datas, setDatas] = useState([]);
  const [input, setInput] = useState(defaultValue);

  useEffect(() => {
    getAllData();
  }, []);

  const getAllData = async () => {
    let response = await getData();
    setDatas(response.data);
  };

  const showPassword = () => {
    if (ref.current.src.includes("/view.png")) {
      ref.current.src = "/hide.png";
      passwordRef.current.type = "password";
    } else {
      ref.current.src = "/view.png";
      passwordRef.current.type = "text";
    }
  };

  const onValueChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    console.log(input);
    await addData(input);
    toast("Password Added Successfully", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    getAllData();
  };

  const handleDelete = async (id) => {
    await deleteData(id);
    toast("Password Deleted Successfully", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    getAllData();
  };
  const handleEdit = (id) => {
    navigate(`/editPass/${id}`);
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
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
              onChange={(e) => onValueChange(e)}
              name="website"
            />
            <div className="flex w-full gap-8">
              <input
                placeholder="Enter Username"
                className="rounded-full border border-green-500 w-full p-4 py-1"
                type="text"
                onChange={(e) => onValueChange(e)}
                name="username"
              />
              <div className="relative">
                <input
                  ref={passwordRef}
                  placeholder="Enter Password"
                  className="rounded-full border border-green-500 w-full p-4 py-1"
                  type="password"
                  onChange={(e) => onValueChange(e)}
                  name="password"
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
            <button
              className=" gap-2 flex justify-center items-center bg-green-500 rounded-full px-8 py-2 w-fit hover:bg-green-400"
              onClick={handleSubmit}
            >
              <lord-icon
                src="https://cdn.lordicon.com/jgnvfzqg.json"
                trigger="hover"
              ></lord-icon>
              Add Password
            </button>
          </div>

          <div>
            <h2 className="font-bold text-2xl py-4">My Passwords</h2>
            {datas.length === 0 && <div>No Passwords to show</div>}
            {datas.length !== 0 && (
              <table className="table-auto w-full rounded-md:overflow-hidden justify-items-center">
                <thead className="bg-green-800 text-white">
                  <tr>
                    <th className="py-2">Website</th>
                    <th className="py-2">UserName</th>
                    <th className="py-2">Password</th>
                  </tr>
                </thead>
                <tbody className="bg-green-100">
                  {datas.data.map((aman) => (
                    <tr key={aman._id}>
                      <td className=" py-2 text-center min-w-32 border border-white">
                        {aman.website}
                      </td>
                      <td className=" py-2 text-center min-w-32 border border-white">
                        {aman.username}
                      </td>
                      <td className=" py-2 text-center min-w-32 border border-white relative">
                        <span className="absolute left-12 top-2">
                          {aman.password}
                        </span>
                        <span className="absolute right-12 top-2">
                          <button
                            className="right px-2 mr-1 bg-blue-500"
                            onClick={() => handleEdit(aman._id)}
                          >
                            Edit
                          </button>
                          <button
                            className=" px-1 bg-red-500"
                            onClick={() => handleDelete(aman._id)}
                          >
                            Delete
                          </button>
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Manager;
