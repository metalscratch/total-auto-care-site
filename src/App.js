import React from 'react';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 p-6 space-y-10">
      <header className="flex items-center space-x-4">
        <img src="/logo.png" alt="Total Auto Care Group Logo" className="h-16 w-auto" />
        <div>
          <h1 className="text-3xl font-bold">Total Auto Care Group</h1>
          <p className="text-base text-gray-600">Detailing & Car Carrier Services for Dealerships</p>
        </div>
      </header>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Our Services</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Car Dealership Detailing</li>
          <li>Vehicle Delivery (Car Carrier Services)</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">About Us</h2>
        <p>
          Total Auto Care Group is a trusted provider of automotive services in Western Australia.
          We specialize in premium car detailing for dealerships and reliable vehicle delivery services.
          Our experienced team is committed to quality, efficiency, and customer satisfaction.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Contact</h2>
        <p>Email: <a href="mailto:contact@totalautocare.au" className="text-blue-600 underline">contact@totalautocare.au</a></p>
        <p>Phone: <a href="tel:+61477533479" className="text-blue-600 underline">0477 533 479</a></p>
        <p>Location: Perth, WA</p>
        <p className="mt-4">
          <a href="https://wa.me/61477533479" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
            Chat with us on WhatsApp
          </a>
        </p>

        <form className="mt-6 space-y-4 max-w-lg">
          <input type="text" placeholder="Your Name" className="w-full p-2 border border-gray-300 rounded" required />
          <input type="email" placeholder="Your Email" className="w-full p-2 border border-gray-300 rounded" required />
          <textarea placeholder="Your Message" className="w-full p-2 border border-gray-300 rounded" rows="4" required></textarea>
          <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">Send Message</button>
        </form>
      </section>
    </div>
  );
}

export default App;