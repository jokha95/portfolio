import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { socialLinks } from "../shared/contants";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!name || !email || !message) {
      return toast.error("Please fill email, subject and message");
    }
    try {
      setLoading(true);
      console.log(name, email, message);
      const { data } = await axios.post(`/api/email`, {
        name,
        email,
        message,
      });
      setLoading(false);
      toast.success(data.message);
    } catch (err) {
      setLoading(false);
      toast.error(
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message
      );
    }
  };

  return (
    <div className="App">
      <ToastContainer position="bottom-center" limit={1} />
      <header className="App-header">
        <h1 className="text-center text-4xl mt-14 md:mt-28 mb-10">
          Get in touch
        </h1>
        <div
          data-scroll
          data-scroll-speed="1"
          className="flex-direction: column mx-[5vw] mt-8"
        >
          <form className="flex flex-col gap-2" onSubmit={submitHandler}>
            <label htmlFor="name">Your Name</label>
            <input
              onChange={(e) => setName(e.target.value)}
              type="Name"
              placeholder="Jokha"
              required
              minLength={3}
            ></input>

            <label htmlFor="subject">Your Email</label>
            <input
              id="email"
              type="email"
              placeholder="jokha@gmail.com"
              required
              onChange={(e) => setEmail(e.target.value)}
            ></input>

            <label htmlFor="message">Message</label>
            <input
              onChange={(e) => setMessage(e.target.value)}
              type="text"
              name="subject"
              placeholder="I want to talk to you"
              required
            />

            <label></label>
            <button
              className="mt-2 py-2 text-white rounded transition duration-300 flex justify-center items-center gap-[10px] bg-[#1876d2] hover:bg-[#2884e0]"
              disabled={loading}
              type="submit"
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </div>
        <div>
          <div className="flex-direction: column mx-[5vw] mt-8">
            <h1 className="text-xl mb-3">Other places</h1>
            {socialLinks.map((item) => (
              <a
                key={item.title}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-3 items-center hover:bg-slate-900 p-2 transition duration-300"
              >
                <img
                  className="w-[30px] h-[30px] rounded-full"
                  src={item.icon}
                  alt=""
                />
                <h1>{item.title}</h1>
              </a>
            ))}
          </div>
        </div>
      </header>

      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

export default App;
