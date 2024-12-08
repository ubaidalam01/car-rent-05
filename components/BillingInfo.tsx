const BillingInfo = () => {
  return (
    <div className="flex flex-col w-full max-w-[600px] min-w-[90%] sm:min-w-[400px]  p-6 shadow-lg rounded-lg mx-auto mt-10">
      <h2 className="text-[24px] font-bold mb-4 text-[#1A202C]">Billing Info</h2>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
        <p className="text-sm text-[#90A3BF]">Please enter your billing info</p>
        <p className="text-sm text-[#90A3BF] font-medium sm:mt-0 mt-2">Step 1 of 4</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-[#1A202C] font-semibold">Name</label>
          <input
            type="text"
            placeholder="Your name"
            className="h-[56px] w-full bg-[#F6F7F9] rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-[#1A202C] font-semibold">Phone Number</label>
          <input
            type="text"
            placeholder="Phone Number"
            className="h-[56px] w-full bg-[#F6F7F9] rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-[#1A202C] font-semibold">Address</label>
          <input
            type="text"
            placeholder="Address"
            className="h-[56px] w-full bg-[#F6F7F9] rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-[#1A202C] font-semibold">Town / City</label>
          <input
            type="text"
            placeholder="Town or city"
            className="h-[56px] w-full bg-[#F6F7F9] rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
    </div>
  );
};

export default BillingInfo;
