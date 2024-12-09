  import React from 'react'

  const page = () => {
    return (
      <div className="flex gap-6">

{/* Dashboard */}
<div className="hidden md:block h-screen bg-white w-64 border-r border-gray-200">
      {/* Main Menu */}
      <div className="p-4">
        <h2 className="text-gray-500 text-sm font-bold uppercase mb-4">
          Main Menu
        </h2>
        <ul>
          <li>
            <a
              href="#"
              className="flex items-center space-x-4 p-3 rounded-lg bg-[#3563E9] text-white font-semibold"
            >
              <span className="text-blue-500">
                {/* Replace this SVG with your icon */}
                <img src="/Home.svg" alt="" />
              </span>
              <span>Dashboard</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center space-x-4 p-3 rounded-lg hover:bg-[#3563E9]"
            >
              <span>
                {/* Replace this SVG with your icon */}
                <img src="/scar.svg" alt="" />
              </span>
              <span>Car Rent</span>
            </a>
          </li>
          {/* Add similar list items for other menu options */}
          <li>
            <a
              href="#"
              className="flex items-center space-x-4 p-3 rounded-lg hover:bg-[#3563E9]"
            >
              <span>
                {/* Replace this SVG with your icon */}
                <img src="/chart1.svg" alt="" />
              </span>
              <span>Insight</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center space-x-4 p-3 rounded-lg hover:bg-[#3563E9]"
            >
              <span>
                {/* Replace this SVG with your icon */}
                <img src="/wallet.svg" alt="" />
              </span>
              <span>Reimburse</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center space-x-4 p-3 rounded-lg hover:bg-[#3563E9]"
            >
              <span>
                {/* Replace this SVG with your icon */}
           <img src="/message.svg" alt="" />
              </span>
              <span>Inbox</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center space-x-4 p-3 rounded-lg hover:bg-[#3563E9]"
            >
              <span>
                {/* Replace this SVG with your icon */}
             <img src="/calendar.svg" alt="" />
              </span>
              <span>Calander</span>
            </a>
          </li>
        </ul>
      </div>

      {/* Preferences */}
      <div className="p-4">
        <h2 className="text-gray-500 text-sm font-bold uppercase mb-4">
          Preferences
        </h2>
        <ul>
          <li>
            <a
              href="#"
              className="flex items-center space-x-4 p-3 rounded-lg hover:bg-[#3563E9]"
            >
              <span>
              <img src="/setting.svg" alt="" />
              </span>
              <span>Settings</span>
            </a>
          </li>
          {/* Add similar list items for other preferences */}
          <li>
            <a
              href="#"
              className="flex items-center space-x-4 p-3 rounded-lg hover:bg-[#3563E9]"
            >
              <span>
              <img src="/circle.svg" alt="" />
              </span>
              <span>Help and Center</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center space-x-4 p-3 rounded-lg hover:bg-[#3563E9]"
            >
              <span>
             <img src="/briefcase.svg" alt="" />
              </span>
              <span>Dark Mode</span>
            </a>
          </li>
        </ul>
      </div>

      {/* Logout */}
      <div className="p-4">
        <a
          href="#"
          className="flex items-center space-x-4 p-3 rounded-lg hover:bg-[#3563E9]"
        >
          <span>
          <img src="/logout.svg" alt="" />
          </span>
          <span>Log Out</span>
        </a>
      </div>
    </div>

    {/* Details Rental Section */}
<div className="flex flex-col md:flex-row">
<div className="h-auto sm:h-[836px] w-full sm:w-[534px] bg-white shadow-lg rounded-lg p-4 sm:p-6">
  <h3 className="text-md sm:text-lg font-bold mb-4">Details Rental</h3>
  <div className="bg-gray-200 h-[200px] sm:h-[272px] rounded-md mb-4 flex items-center justify-center">
    <img src="/Maps.svg" alt="Map" className="h-auto max-h-full w-auto" />
  </div>
  <div className="flex flex-col sm:flex-row items-center mb-4">
    <img
      src="/Look.svg"
      alt="Car"
      className="h-[60px] w-[100px] rounded-md mb-2 sm:mb-0 sm:mr-4"
    />
    <div className="text-center sm:text-left">
      <h4 className="text-sm sm:text-md font-semibold">Nissan GT-R</h4>
      <p className="text-xs sm:text-sm text-gray-500">Sport Car</p>
    </div>
  </div>
  <div className="mb-4">
    <p className="text-sm font-medium">Pick-Up</p>
    <div className="flex flex-col sm:flex-row sm:justify-between text-xs sm:text-sm">
      <div className="mb-2 sm:mb-0">
        <p>Location</p>
        <p>Kota Semarang</p>
      </div>
      <div className="mb-2 sm:mb-0">
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
    <div className="flex flex-col sm:flex-row sm:justify-between text-xs sm:text-sm">
      <div className="mb-2 sm:mb-0">
        <p>Location</p>
        <p>Kota Semarang</p>
      </div>
      <div className="mb-2 sm:mb-0">
        <p>Date</p>
        <p>21 May 2022</p>
      </div>
      <div>
        <p>Time</p>
        <p>01:00</p>
      </div>
    </div>
  </div>
  <div className="text-center sm:text-right">
    <p className="text-sm font-semibold">Total Rental Price</p>
    <p className="text-lg sm:text-xl font-bold text-blue-500">$80.00</p>
  </div>
</div>

      <div className="flex flex-col gap-6">
        {/* Top 5 Car Rental Section */}
        <div className="h-auto md:h-[324px] w-full md:w-[524px] bg-white shadow-lg rounded-lg p-4 md:p-6">
  <h3 className="text-lg font-bold mb-4 text-center md:text-left">Top 5 Car Rental</h3>
  <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6">
    {/* Chart Image */}
    <div className="flex-shrink-0">
      <img
        src="/Chart.svg"
        alt="Rental Chart"
        className="h-[150px] w-[150px] md:h-[180px] md:w-[180px] mx-auto md:mx-0"
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
        <div className="h-[489px] w-[524px] bg-white shadow-lg rounded-lg p-6 md:w-[524px] sm:w-full">
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
  </div>
    )
  }

  export default page
