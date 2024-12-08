import BillingInfo from '@/components/BillingInfo';
import PaymentMethod from '@/components/PaymentMethod';
import RentalInfo from '@/components/RentalInfo';
import React from 'react';
import Link from 'next/link';

const page = () => {
  return (
    <div className="h-screen flex">
      <div className="flex flex-col items-start w-3/5">
        <BillingInfo />
        <RentalInfo />
        <div className="mr-72">
          <PaymentMethod />
        </div>

        {/* Confirmation Section */}
        <div className="text-black p-6 rounded-lg shadow-md mt-6 w-full sm:w-4/5 md:w-3/4 lg:w-2/3 xl:w-1/2">
  <h2 className="text-xl sm:text-2xl font-bold mb-4">Confirmation</h2>

  <p className="mb-4 text-sm sm:text-base">
    We are getting to the end. Just a few clicks and your rental is ready!
  </p>

  <div className="mb-4">
    <input type="checkbox" id="marketing-checkbox" className="mr-2" />
    <label htmlFor="marketing-checkbox" className="text-sm sm:text-base">
      I agree with sending Marketing and newsletter emails. No spam, promised!
    </label>
  </div>

  <div className="mb-4">
    <input type="checkbox" id="terms-checkbox" className="mr-2" />
    <label htmlFor="terms-checkbox" className="text-sm sm:text-base">
      I agree with our terms and conditions and privacy policy.
    </label>
  </div>

  <button className="bg-[#3563E9] text-white px-3 py-2 sm:px-4 sm:py-2 rounded w-full sm:w-auto">
    Rent Now
  </button>

  <div className="mt-4">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="w-6 h-6 inline-block mr-2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
    <p className="text-sm sm:text-base">All your data are safe</p>
    <p className="text-xs sm:text-sm">
      We are using the most advanced security to provide you the best experience ever.
    </p>
  </div>
</div>

      </div>

      <div className="w-2/5 p-6 bg-white rounded-lg shadow-md mt-6">
        <h2 className="text-2xl font-bold mb-4">Rental Summary</h2>
        <p className="text-gray-500 mb-6">
          Prices may change depending on the length of the rental and the price of your rental car.
        </p>

        <div className="flex mb-6">
          <img
            src="/Look.svg"
            alt="Car Image"
            className="w-40 h-32 rounded-lg mr-6"
          />
          <div>
            <h3 className="text-xl font-bold mb-2">Nissan GT-R</h3>
            <p className="text-gray-500">★★★★✩ 440+ Reviews</p>
          </div>
        </div>

        <div className="mb-6 flex justify-between">
          <p className="text-gray-500">Subtotal:Tax: $0</p>
          <p className="text-gray-500">$80.00</p>
        </div>

        <div className="mb-6">
          <p className="text-gray-500">Apply promo code</p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          <Link href="/Dashboard">Apply Now</Link>
          </button>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-2">Total Rental Price</h2>
          <h3 className="text-3xl font-bold">$80.00</h3>
          <p className="text-gray-500">
            Overall price and includes rental discount
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
