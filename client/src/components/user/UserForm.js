import React, { useEffect, useState } from "react";
import axios from "../../baseUrl/axios";
import { useNavigate } from "react-router-dom";
import Header from "../Header";
const UserForm = () => {
  const nav = useNavigate();
  const initialValues = {
    rounds: "",
    service: "",
    lecs: "",
    read: "",
    attend: "",
    game: "",
    hrUp: "",
    minUp: "",
    typeUp: "",
    hrbed: "",
    minbed: "",
    typebed: "",
    userId: "",
    submit_date: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [userDetails, setUserDetails] = useState();
  const [isSubmitted, setIsSubmitted] = useState(false);
  let today = new Date();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const date = today.getDate();
  const currentDate = date + "-" + month + "-" + year;

  if (isSubmitted) {
    nav("/form_submitted");
  }
  useEffect(() => {
    isFormSubmitted();
  }, []);

  const isFormSubmitted = async () => {
    try {
      const res = await axios.get("/isFormSubmitted", {
        headers: {
          "x-access-token": localStorage.getItem("token"),
        },
      });
      setIsSubmitted(res.data.submitted);
      setUserDetails(res.data.user);
    } catch (error) {
      nav("/user/login");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    formValues.userId = userDetails;
    formValues.submit_date = currentDate;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postData();
  };

  const postData = async () => {
    try {
      await axios.post("/postform", formValues);
      nav("/form_submitted");
    } catch (error) {
      alert(error);
    }
  };

  return (
    <>
      <Header />
      <div className="p-5 bg-gradient-to-r from-cyan-50 to-cyan-600 h-full sm:h-screen">
        <div className="w-fit m-auto border-gray-200 border mt-14 shadow-2xl shadow-cyan-400 rounded-lg">
          <form
            onSubmit={handleSubmit}
            className="p-5 space-y-5 bg-white rounded-lg"
          >
            <div className="flex justify-evenly gap-5 flex-col sm:flex-row">
              <div className="sm:w-1/2 space-y-2">
                <label className="text-sm font-bold ">
                  {" "}
                  Rounds of Mahamantra Chanting
                </label>
                <input
                  onChange={handleChange}
                  required
                  className="border rounded-lg w-full p-2 border-gray-400 focus:outline-none focus:border-cyan-400"
                  type="number"
                  min={0}
                  max={100}
                  name="rounds"
                />
              </div>
              <div className="sm:w-1/2 space-y-2">
                <label className="text-sm font-bold ">Service Rendering</label>
                <input
                  onChange={handleChange}
                  required
                  className="border rounded-lg w-full p-2 border-gray-400 focus:outline-none focus:border-cyan-400"
                  type="text"
                  name="service"
                />
              </div>
            </div>
            <div className="flex justify-evenly gap-5 flex-col sm:flex-row">
              <div className="sm:w-1/2 space-y-2">
                <label className="text-sm font-bold ">Hearing Lecture</label>
                <div className="flex items-center gap-10">
                  <div>
                    <input
                      onChange={handleChange}
                      className=""
                      type="radio"
                      name="lecs"
                      value="yes"
                      required
                    />
                    <label className="text-md ml-1">Yes</label>
                  </div>
                  <div>
                    <input
                      onChange={handleChange}
                      className=""
                      type="radio"
                      name="lecs"
                      value="no"
                      required
                    />
                    <label className="text-md ml-1">No</label>
                  </div>
                </div>
              </div>
              <div className="sm:w-1/2 space-y-2">
                <label className="text-sm font-bold ">Reading SP Book</label>
                <div className="flex items-center gap-10">
                  <div>
                    <input
                      onChange={handleChange}
                      className=""
                      type="radio"
                      name="read"
                      value="yes"
                      required
                    />
                    <label className="text-md ml-1">Yes</label>
                  </div>
                  <div>
                    <input
                      onChange={handleChange}
                      className=""
                      type="radio"
                      name="read"
                      value="no"
                      required
                    />
                    <label className="text-md ml-1">No</label>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-evenly gap-5 flex-col sm:flex-row">
              <div className="sm:w-1/2 space-y-2">
                <label className="text-sm font-bold ">
                  Attending Chanting-Reading Sessions
                </label>
                <div className="flex items-center gap-10">
                  <div>
                    <input
                      onChange={handleChange}
                      className=""
                      type="radio"
                      name="attend"
                      value="yes"
                      required
                    />
                    <label className="text-md ml-1">Yes</label>
                  </div>
                  <div>
                    <input
                      onChange={handleChange}
                      className=""
                      type="radio"
                      name="attend"
                      value="no"
                      required
                    />
                    <label className="text-md ml-1">No</label>
                  </div>
                </div>
              </div>
              <div className="sm:w-1/2 space-y-2">
                <label className="text-sm font-bold ">
                  Attending Weekend GAME Class
                </label>
                <div className="flex items-center gap-10">
                  <div>
                    <input
                      onChange={handleChange}
                      className=""
                      type="radio"
                      name="game"
                      value="yes"
                      required
                    />
                    <label className="text-md ml-1">Yes</label>
                  </div>
                  <div>
                    <input
                      onChange={handleChange}
                      className=""
                      type="radio"
                      name="game"
                      value="no"
                      required
                    />
                    <label className="text-md ml-1">No</label>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-evenly gap-5 flex-col sm:flex-row">
              <div className="sm:w-1/2 space-y-2">
                <label className="text-sm font-bold ">Getting Up</label>
                <div className="w-full flex flex-col gap-4 sm:flex-row">
                  <input
                    required
                    onChange={handleChange}
                    type="number"
                    min="0"
                    max="11"
                    step="1"
                    className="border w-24 p-2 border-gray-400 focus:outline-none focus:border-cyan-400"
                    placeholder="Hour"
                    name="hrUp"
                  />
                  <input
                    required
                    onChange={handleChange}
                    type="number"
                    min="0"
                    max="59"
                    step="1"
                    className="border w-24 p-2 border-gray-400 focus:outline-none focus:border-cyan-400"
                    placeholder="Minute"
                    name="minUp"
                  />
                  <select
                    required
                    name="typeUp"
                    onChange={handleChange}
                    className="border w-24 p-2 border-gray-400 focus:outline-none focus:border-cyan-400"
                  >
                    <option value="">Choose</option>
                    <option value="am">AM</option>
                    <option value="pm">PM</option>
                  </select>
                </div>
              </div>
              <div className="sm:w-1/2 space-y-2">
                <label className="text-sm font-bold ">Going to Bed</label>
                <div className="w-full flex flex-col gap-4 sm:flex-row">
                  <input
                    required
                    onChange={handleChange}
                    type="number"
                    min="0"
                    max="23"
                    step="1"
                    className="border w-24 p-2 border-gray-400 focus:outline-none focus:border-cyan-400"
                    placeholder="Hour"
                    name="hrbed"
                  />
                  <input
                    required
                    onChange={handleChange}
                    min="0"
                    max="59"
                    step="1"
                    type="number"
                    className="border w-24 p-2 border-gray-400 focus:outline-none focus:border-cyan-400"
                    placeholder="Minute"
                    name="minbed"
                  />
                  <select
                    required
                    name="typebed"
                    onChange={handleChange}
                    className="border w-24 p-2 border-gray-400 focus:outline-none focus:border-cyan-400"
                  >
                    <option value="">Choose</option>
                    <option value="am">AM</option>
                    <option value="pm">PM</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <button className="bg-cyan-500 w-full p-2 text-white font-semibold text-lg rounded-lg transition ease-in-out delay-200 hover:bg-cyan-600">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default UserForm;
