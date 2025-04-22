import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-dark text-light font-sans">
      <header className="text-center py-10 bg-black">
        <img src="/logo.png" alt="Total Auto Care Group Logo" className="mx-auto w-48 md:w-60 rounded-xl shadow-xl" />
        <h1 className="text-4xl font-bold mt-4">Total Auto Care Group</h1>
        <p className="text-accent text-xl">Detailing & Car Carrier Services for Dealerships</p>
      </header>

      <section className="px-6 py-10 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4 text-accent">Our Services</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="p-4 bg-gray-800 rounded shadow">
            <h3 className="text-xl font-semibold">🚗 Car Dealership Detailing</h3>
            <p>Premium detailing services tailored for car dealerships.</p>
          </div>
          <div className="p-4 bg-gray-800 rounded shadow">
            <h3 className="text-xl font-semibold">🚚 Vehicle Delivery</h3>
            <p>Reliable and efficient car carrier services across WA.</p>
          </div>
        </div>
      </section>

      <section className="px-6 py-10 max-w-4xl mx-auto">
        <div className="bg-gray-900 rounded-lg shadow p-6">
          <h2 className="text-2xl font-semibold mb-4 text-accent">About Us</h2>
          <p>
            Total Auto Care Group is a trusted provider of automotive services in Western Australia.
            We specialize in premium car detailing for dealerships and reliable vehicle delivery services.
            Our experienced team is committed to quality, efficiency, and customer satisfaction.
          </p>
        </div>
      </section>

      <section className="px-6 py-10 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4 text-accent">Contact</h2>
        <p>Email: <a href="mailto:contact@totalautocare.au" className="text-blue-400 underline">contact@totalautocare.au</a></p>
        <p>Phone: <a href="tel:+61477533479" className="text-blue-400 underline">0477 533 479</a></p>
        <p>Location: Perth, WA</p>
        <p className="mt-4">
          <a href="https://wa.me/61477533479" target="_blank" rel="noopener noreferrer" className="text-green-400 underline">
            💬 Chat with us on WhatsApp
          </a>
        </p>

        <form className="mt-6 space-y-4 max-w-lg">
          <input type="text" placeholder="Your Name" className="w-full p-2 rounded bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-accent" required />
          <input type="email" placeholder="Your Email" className="w-full p-2 rounded bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-accent" required />
          <textarea placeholder="Your Message" className="w-full p-2 rounded bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-accent" rows="4" required></textarea>
          <button type="submit" className="bg-accent hover:bg-blue-800 text-white font-semibold px-4 py-2 rounded shadow">Send Message</button>
        </form>
      </section>

      <footer className="text-center text-sm text-gray-500 py-6 border-t border-gray-700">
        © {new Date().getFullYear()} Total Auto Care Group – Perth, WA
      </footer>
    </div>
  );
}

export default App;
