const RentalInfo = () => {
  return (
    <div className="w-full max-w-[852px] h-auto bg-white rounded-lg p-6 mt-10 sm:p-8 mx-auto md:mx-0">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-bold">Rental Info</h2>
        <p className="text-sm text-gray-500">Step 2 of 4</p>
      </div>
      <p className="text-sm text-gray-500 mb-6">Please select your rental date</p>
      <div className="space-y-6">
        <div>
          <h3 className="text-[20px] font-bold mb-2">Pick - Up</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-500 mb-1">Locations</label>
              <select className="w-full h-[56px] bg-[#F6F7F9] p-2 rounded-lg text-sm">
                <option>Select your city</option>
              </select>
            </div>
            <div>
              <label className="block text-sm text-gray-500 mb-1">Date</label>
              <select className="w-full h-[56px] bg-[#F6F7F9] p-2 rounded-lg text-sm">
                <option>Select your date</option>
              </select>
            </div>
            <div>
              <label className="block text-sm text-gray-500 mb-1">Time</label>
              <select className="w-full h-[56px] bg-[#F6F7F9] p-2 rounded-lg text-sm">
                <option>Select your time</option>
              </select>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-[20px] font-bold mb-2">Drop - Off</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-500 mb-1">Locations</label>
              <select className="w-full h-[56px] bg-[#F6F7F9] p-2 rounded-lg text-sm">
                <option>Select your city</option>
              </select>
            </div>
            <div>
              <label className="block text-sm text-gray-500 mb-1">Date</label>
              <select className="w-full h-[56px] bg-[#F6F7F9] p-2 rounded-lg text-sm">
                <option>Select your date</option>
              </select>
            </div>
            <div>
              <label className="block text-sm text-gray-500 mb-1">Time</label>
              <select className="w-full h-[56px] bg-[#F6F7F9] p-2 rounded-lg text-sm">
                <option>Select your time</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RentalInfo;
