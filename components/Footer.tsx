import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h1 className="text-2xl text-[#3563E9] font-bold mb-4">MORENT</h1>
            <p className='text-[#131313]'>Our vision is to provide convenience<br/> and help increase your sales business.</p>
          </div>

          <div className="flex flex-col md:flex-row space-x-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">About</h3>
              <ul className='space-y-3'>
                <li><a href="#" className="hover:underline">How it works</a></li>
                <li><a href="#" className="hover:underline">Featured</a></li>
                <li><a href="#" className="hover:underline">Partnership</a></li>
                <li><a href="#" className="hover:underline">Business Relation</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Community</h3>
              <ul className='space-y-3'>
                <li><a href="#" className="hover:underline">Events</a></li>
                <li><a href="#" className="hover:underline">Blog</a></li>
                <li><a href="#" className="hover:underline">Podcast</a></li>
                <li><a href="#" className="hover:underline">Invite a friend</a></li>
              </ul>
            </div>

            <div className=''>
              <h3 className="text-lg font-semibold mb-4">Socials</h3>
              <ul className='space-y-3'>
                <li><a href="#" className="hover:underline">Discord</a></li>
                <li><a href="#" className="hover:underline">Instagram</a></li>
                <li><a href="#" className="hover:underline">Twitter</a></li>
                <li><a href="#" className="hover:underline">Facebook</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-200 pt-4">
          <div className="flex justify-between mt-4">
          <p className="text-sm text-black">© 2022 MORENT. All rights reserved.</p>
           <div>
           <a href="#" className="text-sm text-black hover:underline mr-4">Privacy & Policy</a>
           <a href="#" className="text-sm text-black hover:underline">Terms & Condition</a>
           </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;