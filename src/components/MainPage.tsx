import Link from "next/link";
import Navbar from "@/components/Navbar";

const Main = () => {
  return (
    <div className="bg-white">
      <Navbar />{" "}
      {/* Assuming Navbar has the fixed header with logo and navigation links */}
      {/* Banner */}
      <div className="bg-blue-600 h-64 relative flex items-center justify-center">
        <img
          src="/path-to-city-skyline-image.jpg"
          alt="City Skyline"
          className="absolute w-full h-64 object-cover"
        />
        <div className="relative z-10 text-center">
          <h2 className="text-white text-2xl md:text-4xl">
            Empower Your Business with Cutting-Edge AI Solutions
          </h2>
          <Link href="/contact-form-link">
            <a className="mt-4 bg-white text-blue-600 px-6 py-2 rounded-full">
              Get Started
            </a>
          </Link>
        </div>
      </div>
      {/* Sections */}
      <div className="bg-gray-100 py-12">
        {/* About Us */}
        <section className="container mx-auto mb-12">
          <h3 className="text-blue-500 text-xl md:text-2xl font-bold mb-6">
            About Us
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <p>
              HeresAnIdea.dev is a platform for indie developers to share,
              critique, and collaborate on ideas. Our mission is to foster a
              community where innovation thrives and everyone feels empowered to
              bring their ideas to life.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {["Concept", "Production", "Beyond"].map((iconText) => (
                <div key={iconText}>
                  {/* Replace 'icon-placeholder.png' with your actual icon paths */}
                  <img
                    src="/icon-placeholder.png"
                    alt={iconText}
                    className="mx-auto mb-2"
                  />
                  <p className="text-center">{iconText}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Services */}
        <section className="container mx-auto mb-12">
          <h3 className="text-blue-500 text-xl md:text-2xl font-bold mb-6">
            Our Services
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "GPT-3 | GPT 4 Development",
              "Language synthesis",
              "Knowledge response",
              "Chatbot development",
              "Model tuning",
              "AI Consulting",
              "Feasibility assessments",
              "Use case identification",
            ].map((service) => (
              <div key={service}>
                {/* Replace 'service-icon-placeholder.png' with your actual icon paths */}
                <img
                  src="/service-icon-placeholder.png"
                  alt={service}
                  className="mx-auto mb-2"
                />
                <p className="text-center">{service}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Meet The Team */}
        <section className="container mx-auto">
          <h3 className="text-blue-500 text-xl md:text-2xl font-bold mb-6">
            Meet The Team
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {["Liam Ottley", "Josh Brown", "Nikhil Bery", "Another Person"].map(
              (member) => (
                <div key={member}>
                  {/* Replace 'portrait-placeholder.png' with your actual portrait paths */}
                  <img
                    src="/portrait-placeholder.png"
                    alt={member}
                    className="mx-auto mb-2 rounded-full w-32 h-32 object-cover"
                  />
                  <p className="text-center">{member}</p>
                </div>
              )
            )}
          </div>
        </section>
      </div>
      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Let's get in touch */}
          <div>
            <h4 className="mb-4 font-bold">Let’s get in touch</h4>
            <form>
              <input className="mb-2 p-2 w-full" placeholder="Full Name" />
              <input className="mb-2 p-2 w-full" placeholder="Subject" />
              <input className="mb-2 p-2 w-full" placeholder="Email" />
              <textarea
                className="mb-2 p-2 w-full"
                placeholder="Message"
              ></textarea>
              <button className="px-4 py-2 bg-blue-500 rounded text-gray-800">
                Submit
              </button>
            </form>
          </div>

          {/* Join our newsletter */}
          <div>
            <h4 className="mb-4 font-bold">Join our newsletter</h4>
            <form>
              <input className="mb-2 p-2 w-full" placeholder="Email" />
              <button className="px-4 py-2 bg-blue-500 rounded text-gray-800">
                Subscribe
              </button>
            </form>
          </div>

          {/* Address */}
          <div>
            <h4 className="mb-4 font-bold">Address</h4>
            <address>
              [Company Name]
              <br />
              [Street Address]
              <br />
              Dubai, UAE
            </address>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 font-bold">Contact</h4>
            <p>
              Email: contact@company.com
              <br />
              Phone: +123 456 7890
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Main;
