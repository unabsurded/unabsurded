export default function Home() {
  return (
    <>
      <div className="bg-gray-900 min-h-screen flex items-center justify-center">
        <div className="bg-gray-700 rounded-lg p-8 shadow-2xl max-w-sm w-full">
          <div className="block flex items-center justify-center mb-3">
            <img src="drawable/logo.png" alt="A clear description of the image" width="50" height="30" />
          </div>
          <p className="text-gray-200 mb-6 block text-center text-sm">we're still cooking, drop a message.</p>
          <form action="https://formsubmit.co/unabsurded@gmail.com" method="POST">
            <div className="mb-4">
              <label className="block text-sm font-bold text-gray-300 mb-2" for="name">Name</label>
              <input className="bg-gray-600 w-full px-3 py-2 border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" name="name" placeholder="Name" required />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-bold text-gray-300 mb-2" for="name">Email</label>
              <input className="bg-gray-600 w-full px-3 py-2 border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500" type="email" name="email" placeholder="Email" required />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-bold text-gray-300 mb-2" for="name">Message</label>
              <textarea className="bg-gray-600 w-full px-3 py-2 border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500" rows="4" type="text" name="message" placeholder="Message" required></textarea>
            </div>
            <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 shadow-2xl" type="submit">Send</button>
          </form>
        </div>
      </div>
    </>
  )
}
