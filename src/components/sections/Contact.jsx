import Reveal from "../UI/Reveal";

const Contact = () => {
  const statistics = [
    { count: "C1", label: "English" },
    { count: "B2", label: "German" },
    { count: "D1", label: "Example" },
  ];

  return (
    <section className="mx-auto md:my-12" id="contact">
      <Reveal>
        <h3 className="my-10 text-center text-4xl text-gray-200">
          About <span>Me</span>
        </h3>
        <div className="grid md:grid-cols-2 place-items-center">
          <div>
            {/* About Me section */}
            <div className="text-gray-300 my-3">
              <h3 className="text-4xl font-semibold mb-5">
                About <span>Me</span>
              </h3>
              <p className="text-justify leading-7 w-11/12">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                eos, quam vel quisquam, explicabo sit labore dignissimos optio
                ratione quibusdam doloribus pariatur consequuntur sint.
                Reprehenderit cupiditate possimus facere quasi voluptatem?
              </p>
            </div>

            {/* Statistics display */}
            <div className="flex justify-center md:justify-start my-10 md:mt-4 md:mb-0 items-center gap-7">
              {statistics.map((item, index) => (
                <div key={index} className="bg-gray-800/40 p-6 rounded-lg">
                  <h3 className="text-3xl md:text-4xl font-semibold text-white">
                    {item.count}
                  </h3>
                  <p className="text-sm md:text-base">
                    <span>{item.label}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Contact form */}
          <form
            action="https://getform.io/f/bkkkkgob"
            method="POST"
            className="flex flex-col justify-between px-5 w-full h-full"
            id="form"
            aria-label="Contact Form"
          >
            <p className="text-gray-100 font-bold text-xl mb-2">
              Let's connect!
            </p>
            {/* Name input field */}
            <label htmlFor="name" className="sr-only">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Your Name"
              name="name"
              className="w-full mb-3 p-3 rounded-md border border-purple-600"
              required
            />
            {/* Email input field */}
            <label htmlFor="email" className="sr-only">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Your Email"
              name="email"
              className="w-full mb-3 p-3 rounded-md border border-purple-600"
              required
            />
            {/* Message textarea */}
            <label htmlFor="textarea" className="sr-only">
              Your Message
            </label>
            <textarea
              id="textarea"
              cols="30"
              rows="4"
              placeholder="Your Message"
              className="w-full mb-3 p-3 rounded-md border border-purple-600"
              required
            />
            {/* Submit button */}
            <button
              type="submit"
              className="w-full py-3 rounded-md text-gray-100 font-semibold bg-purple-500 
              hover:bg-purple-600"
            >
              Send Message
            </button>
          </form>
        </div>
      </Reveal>
    </section>
  );
};

export default Contact;
