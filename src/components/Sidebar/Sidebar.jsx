import React, { useState } from "react";
import { assets } from "../../assets/assets";

function Sidebar() {
  const [extended, Setextended] = useState(false);

  return (

    <div
      className="inline-flex flex-col py-6 px-4"
      style={{ backgroundColor: "#f0f4f9" }}
    >
      <div>
        <img
          className="w-5 cursor-pointer ml-2"
          src={assets.menu_icon}
          alt=""
        />
        <div
          className="mt-10 inline-flex items-center gap-3 py-3 px-3 rounded-full text-gray-500 cursor-pointer"
          style={{ backgroundColor: "#e6eaf1" }}
        >
          <img className="w-5" src={assets.plus_icon} alt="" />
          {extended?<p>New Chat</p>:null}
        </div>
        {extended?<div className="flex flex-col">
          <p className="mt-7 mb-5">Recent</p>
          <div
            className="flex pl-3 p-3 gap-2 cursor-pointer rounded-full hover:bg-slate-200"
            style={{ color: "#282828" }}
          >
            <img className="w-5" src={assets.message_icon} alt="" />
            <p>What is react...</p>
          </div>
        </div>:null}
      </div>
      <div className="flex flex-col">
        <div
          className="flex pl-3 p-3 gap-3 cursor-pointer rounded-full hover:bg-slate-200"
          style={{ color: "#282828" }}
        >
          <img className="w-5" src={assets.question_icon} alt="" />
          {extended?<p>Help</p>:null}
        </div>
        <div
          className="flex pl-3 p-3 gap-2 cursor-pointer rounded-full hover:bg-slate-200"
          style={{ color: "#282828" }}
        >
          <img className="w-5" src={assets.history_icon} alt="" />
          {extended?<p>Activity</p>:null}
        </div>
        <div
          className="flex pl-3 p-3 gap-2 cursor-pointer rounded-full hover:bg-slate-200"
          style={{ color: "#282828" }}
        >
          <img className="w-5" src={assets.setting_icon} alt="" />
          {extended?<p>Settings</p>:null}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
