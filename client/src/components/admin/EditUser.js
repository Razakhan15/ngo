import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const EditUser = () => {
  const nav = useNavigate();
  const { id } = useParams();
  const [userDetails, setUserDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [initialValues, setInitialValues] = useState({});

  useEffect(() => {
    handleUser();
  }, []);

  const handleUser = async () => {
    try {
      const res = await axios.get("/getUser/details/" + id);
      setUserDetails(res.data.results);
      setIsLoading(false);
    } catch (error) {
      alert(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    initialValues.sno = id;
    setInitialValues({ ...initialValues, [name]: value });
    console.log(initialValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postData();
  };

  const postData = async () => {
    try {
      await axios.put("/edit/user/" + id, initialValues);
      nav("/adminpanel");
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    if (userDetails.length > 0) {
      const initialVal = {
        chant_rounds: userDetails[0]?.chant_rounds || "",
        service: userDetails[0]?.service || "",
        hear_lecs: userDetails[0]?.hear_lecs || "",
        read_books: userDetails[0]?.read_books || "",
        attend_session: userDetails[0]?.attend_session || "",
        attend_game: userDetails[0]?.attend_game || "",
        hrUp: userDetails[0]?.up_time.split(/[ :]+/)[0] || "",
        minUp: userDetails[0]?.up_time.split(/[ :]+/)[1] || "",
        typeUp: userDetails[0]?.up_time.split(/[ :]+/)[2] || "",
        hrbed: userDetails[0]?.bet_time.split(/[ :]+/)[0] || "",
        minbed: userDetails[0]?.bet_time.split(/[ :]+/)[1] || "",
        typebed: userDetails[0]?.bet_time.split(/[ :]+/)[2] || "",
        sno: userDetails[0]?.sno || "",
        submit_date: userDetails[0]?.submit_date || "",
      };
      setInitialValues(initialVal);
    }
  }, [userDetails]);

  return (
    <div className="p-5 bg-gradient-to-r from-cyan-50 to-cyan-600 h-full sm:h-screen">
      {isLoading ? (
        <p>loading...</p>
      ) : (
        userDetails &&
        userDetails?.map((item) => (
          <div
            key={item.id}
            className="w-fit m-auto border-gray-200 border mt-14 shadow-2xl shadow-cyan-400 rounded-lg"
          >
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
                    defaultValue={item.chant_rounds}
                    onChange={handleChange}
                    required
                    className="border rounded-lg w-full p-2 border-gray-400 focus:outline-none focus:border-cyan-400"
                    type="number"
                    min={0}
                    max={100}
                    name="chant_rounds"
                  />
                </div>
                <div className="sm:w-1/2 space-y-2">
                  <label className="text-sm font-bold ">
                    Service Rendering
                  </label>
                  <input
                    defaultValue={item.service}
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
                        name="hear_lecs"
                        value="yes"
                        defaultChecked={item.hear_lecs === "yes"}
                        required
                      />
                      <label className="text-md ml-1">Yes</label>
                    </div>
                    <div>
                      <input
                        defaultChecked={item.hear_lecs === "no"}
                        onChange={handleChange}
                        className=""
                        type="radio"
                        name="hear_lecs"
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
                        defaultChecked={item.read_books === "yes"}
                        onChange={handleChange}
                        className=""
                        type="radio"
                        name="read_books"
                        value="yes"
                        required
                      />
                      <label className="text-md ml-1">Yes</label>
                    </div>
                    <div>
                      <input
                        defaultChecked={item.read_books === "no"}
                        onChange={handleChange}
                        className=""
                        type="radio"
                        name="read_books"
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
                        defaultChecked={item.attend_session === "yes"}
                        onChange={handleChange}
                        className=""
                        type="radio"
                        name="attend_session"
                        value="yes"
                        required
                      />
                      <label className="text-md ml-1">Yes</label>
                    </div>
                    <div>
                      <input
                        defaultChecked={item.attend_session === "no"}
                        onChange={handleChange}
                        className=""
                        type="radio"
                        name="attend_session"
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
                        defaultChecked={item.attend_game === "yes"}
                        onChange={handleChange}
                        className=""
                        type="radio"
                        name="attend_game"
                        value="yes"
                        required
                      />
                      <label className="text-md ml-1">Yes</label>
                    </div>
                    <div>
                      <input
                        defaultChecked={item.attend_game === "no"}
                        onChange={handleChange}
                        className=""
                        type="radio"
                        name="attend_game"
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
                      defaultValue={item.up_time.split(/[ :]+/)[0]}
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
                      defaultValue={item.up_time.split(/[ :]+/)[1]}
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
                      defaultValue={item.up_time.split(/[ :]+/)[2]}
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
                      defaultValue={item.bet_time.split(/[ :]+/)[0]}
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
                      defaultValue={item.bet_time.split(/[ :]+/)[1]}
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
                      defaultValue={item.bet_time.split(/[ :]+/)[2]}
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
                  Update
                </button>
              </div>
            </form>
          </div>
        ))
      )}
    </div>
  );
};

export default EditUser;
