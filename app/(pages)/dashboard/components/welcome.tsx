const Welcome = () => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <div className="flex items-center gap-4 mb-4">
        <img
          src="https://tapback.co/api/avatar/johndoe"
          alt="User Avatar"
          className="h-16 w-16 rounded-full border-2 border-[#234E49]/20"
        />
        <div className="flex flex-col">
          <div className="font-fredoka text-sm text-gray-600">
            Welcome Back,
          </div>
          <h2 className="font-sora text-2xl font-semibold text-gray-900">
            Abdullahi
          </h2>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        <div className="bg-[#234E49]/5 rounded-lg p-4">
          <div className="text-2xl font-sora font-bold text-[#234E49]">12</div>
          <div className="text-sm text-gray-600 font-fredoka">
            Classes This Month
          </div>
        </div>
        <div className="bg-[#234E49]/5 rounded-lg p-4">
          <div className="text-2xl font-bold text-[#234E49]">3</div>
          <div className="text-sm text-gray-600 font-fredoka">
            Favorite Studios
          </div>
        </div>
        <div className="bg-[#234E49]/5 rounded-lg p-4">
          <div className="text-2xl font-bold text-[#234E49]">2</div>
          <div className="text-sm text-gray-600 font-fredoka">
            Upcoming Sessions
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
