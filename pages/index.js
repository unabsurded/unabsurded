import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <title>unabsurded - unabsurding culture, faith & history</title>
        <meta name="description" content="Unabsurding culture, faith & history. Simple, honest answers to questions that sound strange or shocking until you know the full story." />
        <link rel="canonical" href="https://www.unabsurded.in/" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="unabsurded — unabsurding culture, faith & history" />
        <meta property="og:description" content="Unabsurding culture, faith & history. Simple, honest answers to questions that sound strange or shocking until you know the full story." />
        <meta property="og:url" content="https://www.unabsurded.in/" />
        <meta property="og:site_name" content="unabsurded" />
        <meta property="og:image" content="drawable/logo.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="unabsurded — unabsurding culture, faith & history" />
        <meta name="twitter:description" content="Unabsurding culture, faith & history. Simple, honest answers to questions that sound strange or shocking until you know the full story." />
        <meta name="twitter:image" content="drawable/logo.png" />
        <meta name="twitter:creator" content="@unabsurded" />

        <meta httpEquiv="Content-Language" content="en" />
        <link rel="icon" type="image/png" href="favicon.ico" />
        <link crossorigin="crossorigin" href="https://fonts.gstatic.com" rel="preconnect" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css" />
        <link crossorigin="anonymous" href="/assets/styles/main.min.css" media="screen" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.5.0/styles/atom-one-dark.min.css" />
      </Head>
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
