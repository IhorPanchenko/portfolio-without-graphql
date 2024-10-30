import Reveal from "../UI/Reveal";

const Contact = () => {
  const statistics = [
    { count: "11+", label: "Projects" },
    { count: "5+", label: "years of experience" },
    { count: "30+", label: "happy clients" },
  ];

  return (
    <section className="px-6 max-w-[1000px] mx-auto md:my-12" id="contact">
      <Reveal>
        <div className="grid md:grid-cols-2 place-items-center">
          <div>
            {/* About Me section */}
            <div className="text-gray-300 my-3">
              <h3 className="text-4xl font-semibold mb-5">
                About <span>Me</span>
              </h3>
              <p className="text-justify leading-7 w-11/12 mx-auto">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                eos, quam vel quisquam, explicabo sit labore dignissimos optio
                ratione quibusdam doloribus pariatur consequuntur sint.
                Reprehenderit cupiditate possimus facere quasi voluptatem?
              </p>
            </div>

            {/* Statistics display */}
            <div className="flex mt-10 items-center gap-7">
              {statistics.map((item, index) => (
                <div key={index} className="bg-gray-800/40 p-4 rounded-lg">
                  <h3 className="text-2xl md:text-4xl font-semibold text-white">
                    {item.count}
                  </h3>
                  <p className="text-xs md:text-base">
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
            className="max-w-6xl p-5 md:p-12"
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
              className="mb-2 w-full rounded-md border border-purple-600 py-2 pl-2 pr-4"
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
              className="mb-2 w-full rounded-md border border-purple-600 py-2 pl-2 pr-4"
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
              className="mb-2 w-full rounded-md border border-purple-600 py-2 pl-2 pr-4"
              required
            />
            {/* Submit button */}
            <button
              type="submit"
              className="w-full py-3 rounded-md text-gray-100 font-semibold text-xl bg-primary-color"
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
