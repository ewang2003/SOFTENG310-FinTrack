import React from "react";
import "../App.css";

export default function SetGoal({
  newGoal,
  setNewGoal,
  updateGoal,
  closeModal,
}) {
  const handleSliderChange = (e) => {
    setNewGoal(e.target.value);
  };

  const handleInputChange = (e) => {
    setNewGoal(e.target.value);
  };

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
        <div className="bg-white p-6 rounded-2xl w-96 relative">
          <button
            className="text-2xl absolute top-0 right-2 text-gray-500 hover:text-primary"
            onClick={closeModal}
          >
            &times;
          </button>
          <h2 className="text-2xl font-bold mb-4 text-center">
            Set New Savings Goal
          </h2>
          <input
            type="range"
            min="0"
            max="1000000"
            value={newGoal}
            onChange={handleSliderChange}
            className="w-full"
          ></input>
          <input
            type="number"
            min="0"
            max="1000000"
            value={newGoal}
            onChange={handleInputChange}
            className="mt-2 border p-2 text-center w-full"
          ></input>
          <div className="flex justify-center mt-4 gap-4">
            <button
              className=" bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded-full w-full active:bg-primary-darker"
              onClick={updateGoal}
            >
              Apply
            </button>
            <button
              className="bg-gray-400 hover:bg-primary-red active:bg-primary-red-darker text-white font-bold py-2 px-4 rounded-full mr-2 w-full"
              onClick={closeModal}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
