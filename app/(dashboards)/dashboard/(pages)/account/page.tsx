import { Button } from "@/components/ui/button";
import { Camera, Crown, PenLine } from "lucide-react";
import React from "react";

const Page = () => {
  return (
    <div className=" space-y-5 px-6 md:px-13 py-10">
      <div className=" flex w-full items-center gap-2">
        <span className=" whitespace-nowrap text-lg font-medium text-[#234E49]  font-sora">
          My Profile
        </span>
        <span className=" h-[1px] w-full bg-[#cccccc]"></span>
      </div>

      <div className="bg-white font-fredoka rounded-2xl p-8 shadow-sm border border-gray-100/50">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-6">
            <div className="relative">
              <img
                src="https://tapback.co/api/avatar/johndoe"
                alt="User Avatar"
                className="h-20 w-20 rounded-full "
              />
              <div className="absolute -bottom-1 bg-white -right-1  h-6 w-6 rounded-full border-3 border-white flex items-center justify-center">
                <Camera color="#234E49" size={24} strokeWidth={2} />
              </div>
            </div>
            <div className="flex flex-col">
              <h1 className="text-2xl font-bold text-gray-900 mb-1 font-sora">
                Abdullahi Olaiwon
              </h1>
              <div className="text-sm font-medium text-gray-500 mb-1 font-fredoka">
                Admin
              </div>
              <div className="text-base font-medium text-gray-500 mb-1 font-fredoka">
                Leeds,United Kingdom
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white font-fredoka rounded-2xl p-8 shadow-sm border border-gray-100/50">
        <div className="flex justify-between py-2 border-b border-gray-200">
          <div className="text-xl font-semibold text-gray-900 font-sora">
            Personal Information
          </div>
          <Button variant="outline">
            <PenLine className="w-4 h-4 mr-2" />
            Edit
          </Button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 gap-y-6 gap-x-12 mt-6">
          <div className="flex flex-col space-y-1">
            <div className="text-sm font-medium text-gray-500 font-sora">
              First Name
            </div>
            <div className="text-lg font-medium text-gray-900">Abdullahi</div>
          </div>

          <div className="flex flex-col space-y-1">
            <div className="text-sm font-medium text-gray-500 font-sora">
              Last Name
            </div>
            <div className="text-lg font-medium text-gray-900">Olaiwon</div>
          </div>

          <div className="flex flex-col space-y-1">
            <div className="text-sm font-medium text-gray-500 font-sora">
              Country
            </div>
            <div className="text-lg font-medium text-gray-900">
              United Kingdom
            </div>
          </div>

          <div className="flex flex-col space-y-1">
            <div className="text-sm font-medium text-gray-500 font-sora">
              Email Address
            </div>
            <div className="text-lg font-medium text-gray-900">
              abdullahi@myfithub.life
            </div>
          </div>

          <div className="flex flex-col space-y-1">
            <div className="text-sm font-medium text-gray-500 font-sora">
              Phone Number
            </div>
            <div className="text-lg font-medium text-gray-900">
              (+62) 821 2554-5846
            </div>
          </div>

          <div className="flex flex-col space-y-1">
            <div className="text-sm font-medium text-gray-500 font-sora">
              User Role
            </div>
            <div className="text-lg font-medium text-gray-900">Admin</div>
          </div>
          <div className="flex flex-col space-y-1">
            <div className="text-sm font-medium text-gray-500 font-sora">
              Session Tier
            </div>
            <div className="text-lg font-medium text-gray-900">Premium</div>
          </div>
        </div>
      </div>
      <div className="bg-white space-y-4 font-fredoka rounded-2xl p-8 shadow-sm border border-gray-100/50">
        <div className="flex justify-between py-2 border-b border-gray-200">
          <div className="text-xl font-semibold text-gray-900 font-sora">
            Account Management
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="">
            <Button variant="default" className=" bg-[#234E49] text-white">
              Upgrade Subscripsion
            </Button>
          </div>
          <div className="">
            <Button className=" border-red-500 " variant={"outline"}>
              Cancel Subscription
            </Button>
          </div>
        </div>
        <div className="mt-6 p-4 md:w-1/2 w-full bg-amber-50 border border-amber-200 rounded-lg">
          <div className="flex items-start gap-3">
            <Crown className="text-amber-600 mt-0.5" size={20} />
            <div>
              <p className="font-semibold text-amber-800 font-sora">
                Premium Membership Active
              </p>
              <p className="text-sm text-amber-700 mt-1">
                Your premium subscription includes all advanced features and
                priority support.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
