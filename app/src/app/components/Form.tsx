"use client";
import { useState } from "react";
import Button from "./Button";

interface TabButtonsProps {
  activeTab: "lecturer" | "admin";
  handleTabClick: (tab: "lecturer" | "admin") => void;
}

function LecturerForm() {
  return (
    <>
      <div>
        <form>
          <div className="px-4 pb-3">
            <p className="text-white font-medium text-base">Faculty No.</p>
            <input
              className="placeholder-shown:border-gray-500 ... p-3 rounded-lg text-gray-700 font-medium placeholder:italic border outline-none"
              placeholder=""
              type="text"
              name=""
              id=""
            />
          </div>
          <div className="px-4">
            <Button
              style="w-32 text-white bg-pink-600 hover:opacity-90 p-4 font-semibold rounded-lg outline-none"
              type="button"
              onClick={() => console.log()}
              text="Enter ->"
            />
          </div>
        </form>
      </div>
    </>
  );
}

function AdminForm() {
  return (
    <>
      <div>
        <form>
          <div className="px-4 pb-2">
            <p className="text-white font-medium text-base">Username</p>
            <input
              className="placeholder-shown:border-gray-500 ... p-3 rounded-lg text-gray-700 font-medium placeholder:italic border outline-none"
              placeholder="admin"
              type="text"
              name=""
              id=""
            />
          </div>
          <div className="px-4 pb-2">
            <p className="text-white font-medium text-base">Password</p>
            <input
              className="placeholder-shown:border-gray-500 ... p-3 rounded-lg text-gray-700 font-medium placeholder:italic border outline-none"
              placeholder="Password"
              type="password"
              name=""
              id=""
            />
          </div>
          <div className="px-4">
            <Button
              style="w-32 text-white bg-pink-600 hover:opacity-90 p-4 font-semibold rounded-lg outline-none"
              type="button"
              onClick={() => console.log()}
              text="Enter ->"
            />
          </div>
        </form>
      </div>
    </>
  );
}

const TabButtons: React.FC<TabButtonsProps> = ({
  activeTab,
  handleTabClick,
}) => (
  <div className="flex px-8">
    <span
      className={`px-4 py-2 text-white font-medium text-lg cursor-pointer ${
        activeTab === "lecturer"
          ? "underline underline-offset-8 decoration-4 decoration-pink-600"
          : ""
      }`}
      onClick={() => handleTabClick("lecturer")}
    >
      Lecturer
    </span>
    <span
      className={`px-4 py-2 text-white font-medium text-lg cursor-pointer ${
        activeTab === "admin"
          ? "underline underline-offset-8 decoration-4 decoration-pink-600"
          : ""
      }`}
      onClick={() => handleTabClick("admin")}
    >
      Admin
    </span>
  </div>
);

const Form = () => {
  const [activeTab, setActiveTab] = useState<"lecturer" | "admin">("lecturer");

  const handleTabClick = (tab: "lecturer" | "admin") => {
    setActiveTab(tab);
  };

  return (
    <div>
      <TabButtons activeTab={activeTab} handleTabClick={handleTabClick} />
      <div className="p-8">
        {activeTab === "lecturer" ? <LecturerForm /> : <AdminForm />}
      </div>
    </div>
  );
};

export default Form;
