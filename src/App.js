import React, { useState } from 'react';
import './App.css';

function App() {
  // Simple state to handle page navigation
  const [page, setPage] = useState('home');

  // Handler for navigation
  const handleNav = (target) => {
    if (target === 'gallery') {
      setPage('gallery');
    } else if (target === 'achievement') {
      setPage('achievement');
    } else {
      setPage('home');
      setTimeout(() => {
        const el = document.getElementById(target);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 0);
    }
  };

  // Gallery Page
  if (page === 'gallery') {
    return (
      <div className="min-h-screen bg-black text-white px-6 py-10 relative overflow-hidden">
        {/* Header Section */}
        <header className="flex flex-col md:flex-row md:justify-between md:items-center py-4 px-4 bg-gray-900 rounded-lg shadow mb-8 gap-4 md:gap-0">
          <h1 className="text-2xl font-bold text-center md:text-left mb-2 md:mb-0">Abhishek's Portfolio</h1>
          <nav className="flex justify-center md:justify-end space-x-4">
            <button onClick={() => handleNav('home')} className="text-white hover:text-blue-400 font-semibold">Home</button>
            <button onClick={() => handleNav('contact')} className="text-white hover:text-blue-400 font-semibold">Contact</button>
            <button onClick={() => handleNav('gallery')} className="text-white hover:text-blue-400 font-semibold">Gallery</button>
            <button onClick={() => handleNav('achievement')} className="text-white hover:text-blue-400 font-semibold">Achievement</button>
            <a
              href="abhishek's resume.pdf"
              download
              className="text-white hover:text-blue-400 font-semibold"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </nav>
        </header>
        <div className="relative z-10 max-w-4xl mx-auto">
          <section className="animate-fade-in delay-1000">
            <h2 className="text-2xl font-semibold mb-2">Gallery</h2>
            <div className="flex flex-wrap gap-4">
              <img src="/gallery/photo1.jpg" alt="Gallery 1" className="w-32 h-32 object-cover rounded shadow" />
              <img src="/gallery/photo2.jpg" alt="Gallery 2" className="w-32 h-32 object-cover rounded shadow" />
              {/* Add more images as needed */}
            </div>
            <p className="text-gray-400 mt-2 text-sm">
              Upload your photos to <code>public/gallery/</code> as <code>photo1.jpg</code>, <code>photo2.jpg</code>, etc.
            </p>
          </section>
        </div>
        <footer className="mt-12 text-center text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Abhishek Shrivastav. All rights reserved.
        </footer>
      </div>
    );
  }

  // Achievement Page
  if (page === 'achievement') {
    return (
      <div className="min-h-screen bg-black text-white px-6 py-10 relative overflow-hidden">
        {/* Header Section */}
        <header className="flex flex-col md:flex-row md:justify-between md:items-center py-4 px-4 bg-gray-900 rounded-lg shadow mb-8 gap-4 md:gap-0">
          <h1 className="text-2xl font-bold text-center md:text-left mb-2 md:mb-0">Abhishek's Portfolio</h1>
          <nav className="flex justify-center md:justify-end space-x-4">
            <button onClick={() => handleNav('home')} className="text-white hover:text-blue-400 font-semibold">Home</button>
            <button onClick={() => handleNav('contact')} className="text-white hover:text-blue-400 font-semibold">Contact</button>
            <button onClick={() => handleNav('gallery')} className="text-white hover:text-blue-400 font-semibold">Gallery</button>
            <button onClick={() => handleNav('achievement')} className="text-white hover:text-blue-400 font-semibold">Achievement</button>
            <a
              href="abhishek's resume.pdf"
              download
              className="text-white hover:text-blue-400 font-semibold"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </nav>
        </header>
        <div className="relative z-10 max-w-4xl mx-auto">
          <section id="achievement" className="mt-10 animate-fade-in delay-800">
            <h2 className="text-2xl font-semibold mb-2">Achievements & Certificates</h2>
            <div className="flex flex-wrap gap-4">
              {/* Example certificate thumbnails, replace src with your certificate images */}
              <a href="/certificates/certificate1.jpg" target="_blank" rel="noopener noreferrer">
                <img src="/certificates/certificate1.jpg" alt="Certificate 1" className="w-40 h-28 object-cover rounded shadow hover:scale-105 transition-transform duration-300" />
              </a>
              <a href="/certificates/certificate2.jpg" target="_blank" rel="noopener noreferrer">
                <img src="/certificates/certificate2.jpg" alt="Certificate 2" className="w-40 h-28 object-cover rounded shadow hover:scale-105 transition-transform duration-300" />
              </a>
              {/* Add more certificates as needed */}
            </div>
            <p className="text-gray-400 mt-2 text-sm">
              Upload your certificates to <code>public/certificates/</code> as <code>certificate1.jpg</code>, <code>certificate2.jpg</code>, etc.
            </p>
          </section>
        </div>
        <footer className="mt-12 text-center text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Abhishek Shrivastav. All rights reserved.
        </footer>
      </div>
    );
  }

  // Main Page (without Gallery section)
  return (
    <div className="min-h-screen bg-black text-white px-6 py-10 relative overflow-hidden">
      {/* Header Section */}
      <header className="flex flex-col md:flex-row md:justify-between md:items-center py-4 px-4 bg-gray-900 rounded-lg shadow mb-8 gap-4 md:gap-0">
        <h1 className="text-2xl font-bold text-center md:text-left mb-2 md:mb-0">Abhishek's Portfolio</h1>
        <nav className="flex justify-center md:justify-end space-x-4">
          <button onClick={() => handleNav('home')} className="text-white hover:text-blue-400 font-semibold">Home</button>
          <button onClick={() => handleNav('contact')} className="text-white hover:text-blue-400 font-semibold">Contact</button>
          <button onClick={() => handleNav('gallery')} className="text-white hover:text-blue-400 font-semibold">Gallery</button>
          <button onClick={() => handleNav('achievement')} className="text-white hover:text-blue-400 font-semibold">Achievement</button>
          <a
            href="/resume.pdf"
            download
            className="text-white hover:text-blue-400 font-semibold"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </nav>
      </header>
      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Home Section */}
        <div id="home" className="flex flex-col md:flex-row items-center md:justify-between">
          <div className="md:w-3/4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">Abhishek Shrivastav</h1>
            <p className="text-lg md:text-xl mb-6 animate-fade-in delay-200">About Me</p>
            <p className="text-lg md:text-xl mb-6 animate-fade-in delay-200">
              Bachelor of Engineering in Computer Science & Engineering, at Srinivas Institute of Technology, Mangalore. Currently pursuing a Bachelor of Engineering in Computer Science & Engineering, with a strong focus on software development, algorithms, and data structures.
              Eager to apply engineering principles and technical skills to solve real-world problems and contribute to cutting-edge projects in the tech industry
            </p>
          </div>
          <div className="md:w-1/4 flex justify-center md:justify-end mt-6 md:mt-0">
            <div className="relative group">
              <img
                src="/profile.jpg"
                alt="Abhishek Shrivastav"
                className="relative w-32 h-32 md:w-40 md:h-40 border-4 border-white shadow-xl object-cover animate-fade-in delay-300 rounded-lg z-10 transition-transform duration-500 group-hover:scale-110"
                style={{ borderRadius: '0.5rem' }}
              />
            </div>
          </div>
        </div>

        <section className="mt-12 animate-fade-in delay-500">
          <h2 className="text-2xl font-semibold mb-2">Skills</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Languages: Java, Python, JavaScript, C</li>
            <li>Web: HTML, CSS, JavaScript</li>
            <li>Database: SQL, MongoDB</li>
            <li>Tools: Git, GitHub, VS Code, MySQL</li>
          </ul>
        </section>

        <section className="mt-10 animate-fade-in delay-700">
          <h2 className="text-2xl font-semibold mb-2">Project</h2>
          <div>
            <h3 className="text-xl font-bold">ZetaOne</h3>
            <p>
              A platform connecting users with service providers like electricians and plumbers.
              Features booking, notifications, responsive UI, and ratings. Built with HTML, CSS, JS, backend.
            </p>
          </div>
          <div className="my-4"></div> {/* Added space between projects */}
          <div>
            <h3 className="text-xl font-bold">Flood Awareness</h3>
            <p>
              A web application aimed at raising awareness about flood risks and safety measures.
              Built with React, Tailwind CSS, and hosted on GitHub Pages.
            </p>
          </div>
        </section>

        {/* Education Section */}
        <section className="mt-10 animate-fade-in delay-800">
          <h2 className="text-2xl font-semibold mb-2">Education</h2>
          <p className="mb-4 text-lg text-gray-200">My Academic Journey:</p>
          <div className="flex flex-col gap-6 md:gap-8 ml-4 border-l-4 border-blue-400 pl-6">
            <div>
              <h3 className="text-xl font-bold">Srinivas Institute of Technology, Mangalore</h3>
              <p>Bachelor of Engineering in Computer Science & Engineering</p>
              <p className="text-sm text-gray-300">2023 - Present</p>
              <p className="mt-1">Relevant Coursework: Data Structures, Algorithms, Software Development, Database Management</p>
            </div>
            <div>
              <h3 className="text-xl font-bold">Sri Chaitanya PU College</h3>
              <p>Computer Science (PCMC)</p>
              <p>Score: 73%</p>
              <p className="text-sm text-gray-300">2021 - 2023</p>
            </div>
            <div>
              <h3 className="text-xl font-bold">Sri Chaitanya Techno School</h3>
              <p>Science Stream</p>
              <p>Score: 73%</p>
              <p className="text-sm text-gray-300">2021 - 2023</p>
            </div>
          </div>
        </section>

        {/* Achievement Section */}
        {page === 'achievement' && (
          <section id="achievement" className="mt-10 animate-fade-in delay-800">
            <h2 className="text-2xl font-semibold mb-2">Achievements & Certificates</h2>
            <div className="flex flex-wrap gap-4">
              {/* Example certificate thumbnails, replace src with your certificate images */}
              <a href="/certificates/certificate1.jpg" target="_blank" rel="noopener noreferrer">
                <img src="/certificates/certificate1.jpg" alt="Certificate 1" className="w-40 h-28 object-cover rounded shadow hover:scale-105 transition-transform duration-300" />
              </a>
              <a href="/certificates/certificate2.jpg" target="_blank" rel="noopener noreferrer">
                <img src="/certificates/certificate2.jpg" alt="Certificate 2" className="w-40 h-28 object-cover rounded shadow hover:scale-105 transition-transform duration-300" />
              </a>
              {/* Add more certificates as needed */}
            </div>
            <p className="text-gray-400 mt-2 text-sm">
              Upload your certificates to <code>public/certificates/</code> as <code>certificate1.jpg</code>, <code>certificate2.jpg</code>, etc.
            </p>
          </section>
        )}

        {/* Contact Section */}
        <section id="contact" className="mt-10 animate-fade-in delay-900">
          <h2 className="text-2xl font-semibold mb-2">Contact</h2>
          <p>Phone: 7892208908</p>
          <p>
            Email:{" "}
            <a
              href="mailto:abhishekshrivastav410@gmail.com"
              className="text-blue-400 underline"
            >
              abhishekshrivastav410@gmail.com
            </a>
          </p>
          <p className="mt-2">
            <a className="text-blue-400 underline" href="https://github.com/abhishekhubs" target="_blank" rel="noreferrer">GitHub</a>{' '}
            |{' '}
            <a className="text-blue-400 underline" href="https://www.linkedin.com/in/abhishek-shrivastav-717329291/" target="_blank" rel="noreferrer">LinkedIn</a>
          </p>
        </section>
      </div>
      {/* Footer Section */}
      <footer className="mt-12 text-center text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} Abhishek Shrivastav. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
