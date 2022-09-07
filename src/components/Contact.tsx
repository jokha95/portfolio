// import { FC } from "react";
// import { socialLinks } from "../shared/contants";

// const Contact: FC = () => {
//   return (
//     <div className="pb-20">
//       <h1 className="text-center text-4xl mt-14 md:mt-28 mb-10">
//         Get in touch
//       </h1>
//       <div
//         data-scroll
//         data-scroll-speed="1"
//         className="flex justify-center mx-[5vw] mt-8"
//       >
//         <div className="w-full max-w-[1100px] flex gap-10 flex-col md:flex-row">
//           <div className="flex-1">
//             <form
//               action={process.env.NEXT_PUBLIC_FORM_URL}
//               method="POST"
//               className="flex flex-col gap-2"
//             >
//               <label htmlFor="name">Your name</label>
//               <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 placeholder="Jokha"
//                 required
//                 minLength={3}
//               />
//               <label htmlFor="email">Your email</label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 placeholder="jokha@gmail.com"
//                 required
//               />
//               <label htmlFor="subject">Subject</label>
//               <input
//                 type="text"
//                 id="subject"
//                 name="subject"
//                 placeholder="I want to talk to you"
//                 required
//               />
//               <button className="mt-2 py-2 text-white rounded transition duration-300 flex justify-center items-center gap-[10px] bg-[#1876d2] hover:bg-[#2884e0]">
//                 Send
//               </button>
//             </form>
//           </div>
//           <div className="flex-1">
//             <h1 className="text-xl mb-3">Other places</h1>
//             {socialLinks.map((item) => (
//               <a
//                 key={item.title}
//                 href={item.link}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="flex gap-3 items-center hover:bg-slate-900 p-2 transition duration-300"
//               >
//                 <img
//                   className="w-[30px] h-[30px] rounded-full"
//                   src={item.icon}
//                   alt=""
//                 />
//                 <h1>{item.title}</h1>
//               </a>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;

import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

function App() {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!email || !subject || !message) {
      return toast.error("Please fill email, subject and message");
    }
    try {
      setLoading(true);
      const { data } = await axios.post(`/api/email`, {
        email,
        subject,
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
        <form onSubmit={submitHandler}>
          <h1>Send Email</h1>
          <div>
            <label htmlFor="email">Email</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
            ></input>
          </div>
          <div>
            <label htmlFor="subject">Subject</label>
            <input
              id="subject"
              type="text"
              onChange={(e) => setSubject(e.target.value)}
            ></input>
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <div>
            <label></label>
            <button disabled={loading} type="submit">
              {loading ? "Sending..." : "Submit"}
            </button>
          </div>
        </form>
      </header>
    </div>
  );
}

export default App;
