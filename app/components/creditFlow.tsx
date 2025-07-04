import React from "react";

const CreditFlow = () => {
  return (
    <div>
      <div className="">
        <div className="max-w-sm p-4 rounded-xl bg-white border text-gray-800 space-y-4">
          {/* User Info */}
          <div className="flex items-center space-x-4">
            <img
              src="https://tapback.co/api/avatar/kate.jpg"
              alt="Kate"
              width={100}
              height={100}
              className="rounded-full object-cover"
            />
            <div>
              <h2 className="text-2xl font-sora font-bold">25-credit plan</h2>
              <p className="text-lg font-fredoka">
                <span className="font-semibold">Kate</span> · Amsterdam
              </p>
            </div>
          </div>

          {/* Description */}
          <p className="text-sm font-fredoka">
            Kate recently found out she’s pregnant and uses Myfithub once or
            twice a week to stay active.
          </p>

          <hr />

          {/* Classes */}
          <div className="space-y-3 text-sm font-fredoka">
            <div className="flex justify-between items-start border-b pb-2">
              <div>
                <p className="font-semibold">
                  Prenatal Yoga{" "}
                  <span className="ml-2 text-xs bg-gray-200 text-gray-600 px-2 py-0.5 rounded-full">
                    x2
                  </span>
                </p>
                <p className="text-xs text-gray-500">4 credits each</p>
              </div>
              <p className="font-semibold">8 credits</p>
            </div>

            <div className="flex justify-between border-b py-2 pb-3">
              <p>Full Body Pilates</p>
              <p className="font-semibold">10 credits</p>
            </div>

            <div className="flex justify-between border-b py-2 pb-3">
              <p>Meditation</p>
              <p className="font-semibold">4 credits</p>
            </div>

            <div className="flex justify-between border-b py-2 pb-3">
              <p>Barre</p>
              <p className="font-semibold">3 credits</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreditFlow;
