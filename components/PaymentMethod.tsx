const PaymentMethod = () => {
    return (
      <div className="max-w-lg flex flex-col justify-start h-[596px] mx-auto  shadow-md rounded-lg p-6 mt-10">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold text-gray-800">Payment Method</h2>
          <p className="text-sm text-gray-500">Step 3 of 4</p>
        </div>
        <p className="text-sm text-gray-500 mb-6">Please enter your payment method</p>
        <div className="border p-4 rounded-lg bg-gray-50">
          <div className="flex items-center justify-between mb-4">
            <label className="flex items-center">
              {/* <input type="radio" name="payment-method" checked className="mr-2 w-[386px] h-[56px] bg-[#F6F7F9]" /> */}
              <span className='mr-1'>
            <img src="mark.svg" alt="" />
          </span>
              <span className="text-gray-800 font-medium">Credit Card</span>
            </label>
            <div className="flex space-x-2">
              <img src="/Visa.svg" alt="Visa" className="" />
              
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-500 mb-1">Card Number</label>
              <input
                type="text"
                placeholder="Card number"
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-500 mb-1">Expiration Date</label>
              <input
                type="text"
                placeholder="DD / MM / YY"
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-500 mb-1">Card Holder</label>
              <input
                type="text"
                placeholder="Card holder"
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-500 mb-1">CVC</label>
              <input
                type="text"
                placeholder="CVC"
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between border p-4 rounded-lg mt-4">
          <label className="flex items-center">
            <input type="radio" name="payment-method" className="mr-2" />
            <span className="text-gray-800 font-medium">PayPal</span>
          </label>
          <img src="/PayPal.svg" alt="PayPal" className="" />
        </div>
        <div className="flex items-center justify-between border p-4 rounded-lg mt-4">
          <label className="flex items-center">
            <input type="radio" name="payment-method" className="mr-2" />
            <span className="text-gray-800 font-medium">Bitcoin</span>
          </label>
          <img src="/Bitcoin.svg" alt="Bitcoin" className="" />
        </div>
      </div>
    );
  };
  
  export default PaymentMethod;
  