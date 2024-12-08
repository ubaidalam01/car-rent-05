import React from 'react'

const page = () => {
  return (
    <div className="flex justify-between gap-6">
  {/* Details Rental Section */}
  <div className="h-[836px] w-[534px] bg-white shadow-lg rounded-lg p-6">
    <h3 className="text-lg font-bold mb-4">Details Rental</h3>
    <div className="bg-gray-200 h-[272px] rounded-md mb-4 flex items-center justify-center">
        <img src="/Maps.svg" alt="" />
    </div>
    <div className="flex items-center mb-4">
      <img
        src="/Look.svg"
        alt="Car"
        className="h-[60px] w-[100px] rounded-md mr-4"
      />
      <div>
        <h4 className="text-md font-semibold">Nissan GT-R</h4>
        <p className="text-sm text-gray-500">Sport Car</p>
      </div>
    </div>
    <div className="mb-4">
      <p className="text-sm font-medium">Pick-Up</p>
      <div className="flex justify-between text-sm">
        <div>
          <p>Location</p>
          <p>Kota Semarang</p>
        </div>
        <div>
          <p>Date</p>
          <p>20 May 2022</p>
        </div>
        <div>
          <p>Time</p>
          <p>07:00</p>
        </div>
      </div>
    </div>
    <div className="mb-4">
      <p className="text-sm font-medium">Drop-Off</p>
      <div className="flex justify-between text-sm">
        <div>
          <p>Location</p>
          <p>Kota Semarang</p>
        </div>
        <div>
          <p>Date</p>
          <p>21 May 2022</p>
        </div>
        <div>
          <p>Time</p>
          <p>01:00</p>
        </div>
      </div>
    </div>
    <div className="text-right">
      <p className="text-sm font-semibold">Total Rental Price</p>
      <p className="text-xl font-bold text-blue-500">$80.00</p>
    </div>
  </div>

  <div className="flex flex-col gap-6">
    {/* Top 5 Car Rental Section */}
    <div className="h-[324px] w-[524px] bg-white shadow-lg rounded-lg p-6">
  <h3 className="text-lg font-bold mb-4">Top 5 Car Rental</h3>
  <div className="flex items-center gap-6">
    {/* Chart Image */}
    <div className="flex-shrink-0">
      <img
        src="/Chart.svg"
        alt="Rental Chart"
        className="h-[180px] w-[180px]"
      />
    </div>

    {/* Rental List */}
    <div className="flex-1">
      <div className="flex justify-between items-center mb-2">
        <p className="text-sm">Sport Car</p>
        <p className="text-sm font-bold">17,439</p>
      </div>
      <div className="flex justify-between items-center mb-2">
        <p className="text-sm">SUV</p>
        <p className="text-sm font-bold">9,478</p>
      </div>
      <div className="flex justify-between items-center mb-2">
        <p className="text-sm">Coupe</p>
        <p className="text-sm font-bold">18,197</p>
      </div>
      <div className="flex justify-between items-center mb-2">
        <p className="text-sm">Hatchback</p>
        <p className="text-sm font-bold">12,510</p>
      </div>
      <div className="flex justify-between items-center">
        <p className="text-sm">MPV</p>
        <p className="text-sm font-bold">14,406</p>
      </div>
    </div>
  </div>
</div>


    {/* Recent Transaction Section */}
    <div className="h-[489px] w-[524px] bg-white shadow-lg rounded-lg p-6">
      <h3 className="text-lg font-bold mb-4">Recent Transaction</h3>
      <div className="flex items-center justify-between mb-4">
        <img
          src="car12.svg"
          alt="Car"
          className="h-[50px] w-[80px] rounded-md"
        />
        <div>
          <h4 className="text-sm font-semibold">Nissan GT-R</h4>
          <p className="text-sm text-gray-500">Sport Car</p>
        </div>
        <p className="text-sm font-bold">$80.00</p>
      </div>
      <div className="flex items-center justify-between mb-4">
        <img
          src="car16.svg"
          alt="Car"
          className="h-[50px] w-[80px] rounded-md"
        />
        <div>
          <h4 className="text-sm font-semibold">Koenigsegg</h4>
          <p className="text-sm text-gray-500">Sport Car</p>
        </div>
        <p className="text-sm font-bold">$99.00</p>
      </div>
      <div className="flex items-center justify-between mb-4">
        <img
          src="car14.svg"
          alt="Car"
          className="h-[50px] w-[80px] rounded-md"
        />
        <div>
          <h4 className="text-sm font-semibold">Rolls-Royce</h4>
          <p className="text-sm text-gray-500">Sport Car</p>
        </div>
        <p className="text-sm font-bold">$96.00</p>
      </div>
      <div className="flex items-center justify-between">
        <img
          src="car15.svg"
          alt="Car"
          className="h-[50px] w-[80px] rounded-md"
        />
        <div>
          <h4 className="text-sm font-semibold">CR-V</h4>
          <p className="text-sm text-gray-500">SUV</p>
        </div>
        <p className="text-sm font-bold">$80.00</p>
      </div>
    </div>
  </div>
</div>
  )
}

export default page
