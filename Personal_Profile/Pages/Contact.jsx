import Header from "../src/components/Header";
import Footer from "../src/components/Footer"
import {useNavigate} from "react-router-dom"
import Thankyou from "./Thankyou";
import {useState} from "react"
import PhoneInput from 'react-phone-input-2'
import "react-phone-input-2/lib/style.css";
export default function Contact () {
  const [email, setEmail] = useState({firstName:"", lastName:"", email:"", phoneNumber:"", subject:"", message:""})
  const [errors, setErrors] = useState({})
  const Navigate = useNavigate()

  const validate = (e) => {
    let isValid = true;
    const newErrors = {}
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.firstName.trim()) {
      newErrors.firstName="Please provide your name."
      isValid=false;
    }

    if (!email.lastName.trim()) {
      newErrors.lastName=" Please provide your name"
      isValid=false;
    }

    if (!email.email.trim()) {
      newErrors.email="Would you please provide your email"
      isValid=false
    }

    if(!emailRegex.test(email.email)) {
      newErrors.email="Please provide a valid email"
    }

    if (!email.subject.trim()) {
      newErrors.subject="Purpose of your message?"
      isValid=false
    }

    if (!email.message.trim()) {
      newErrors.message="What is your message?"
      isValid=false
    }
    
    setErrors(newErrors)
    return isValid
  }

  const handleSubmit = (e) => {
     if (!validate()) {
      e.preventDefault();
    }

  }
  return (
    <div>
      <Header />
      <main>
        <section className=" bg-black bg-fixed w-full h-[60vh] md:h-[70vh] flex flex-col items-center justify-center">
          <h1 className="text-2xl font-bold self-center text-white py-10">
            Contact Me
          </h1>
        </section>

        <section className="flex flex-col bg-white px-8 md:px-10 z-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 bg-white rounded-lg shadow-lg -mt-20 py-14 px-15 md:px-5">
            <div className="grid grid-cols-[auto_1fr] items-top gap-2">
              <img
                src="/placeholder (1).png"
                className="w-5 md:w-7 mt-1"
                alt="location Icon"
              />
              <div className="flex flex-col gap-2  font-semibold text-left">
                <span className="text-md md:text-lg">Physical Location</span>
                <span className="font-light text-md">Nairobi, Kenya</span>
              </div>
            </div>
            <div className="grid grid-cols-[auto_1fr] items-top gap-2">
              <img
                src="/telephone.png"
                alt="mobilephone Icon"
                className="w-5 md:w-7 mt-2"
              />
              <div className="flex flex-col text-left gap-2 text-md md:text-lg font-semibold">
                <span>Phone Number</span>
                <span className="font-light">+254790737591</span>
              </div>
            </div>
            <div className="grid grid-cols-[auto_1fr] items-top gap-2">
              <img
                src="/email.png"
                alt="mobilephone Icon"
                className="w-5 md:w-7 mt-1"
              />
              <div className="flex flex-col text-left gap-2 text-md md:text-lg font-semibold">
                <span>Email Address</span>
                <span className="font-light">kaniarubenard212@gmail.com</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 items-center justif-center">
            <h1 className="font-bold text-lg mt-10">Send Me a Message</h1>
            <form
              onSubmit={handleSubmit}
              action="https://formsubmit.co/kaniarubenard212@gmail.com"
              method="POST"
              className="flex flex-col items-center justify-center py-10"
            >
              {/*Hidden inputs for form submission*/}
              <input type="hidden" name="_captcha" value="false" />
              <input
                type="hidden"
                name="_subject"
                value="You have a new message from your portfolio!"
              />

              <input
                type="hidden"
                name="_next"
                value="http://localhost:5173/Thankyou"
              />

              {/*User input fields*/}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="grid grid-cols-1 gap-2">
                  <input
                    type="text"
                    placeholder="First Name*"
                    className="border-1 p-2 w-60 focus:outline-none focus:border-transparent focus:ring-red-500 focus:ring-1"
                    name="First Name"
                    value={email.firstName}
                    onChange={(e) =>
                      setEmail({ ...email, firstName: e.target.value })
                    }
                  />
                  <span className="italic text-red-500 px-2">
                    {errors.firstName}
                  </span>
                </div>

                <div className="grid grid-cols-1 gap-2">
                  <input
                    type="text"
                    placeholder="Last Name*"
                    className="border-1 p-2 w-60 focus:outline-none focus:border-transparent focus:ring-red-500 focus:ring-1"
                    name="Last Name"
                    value={email.lastName}
                    onChange={(e) =>
                      setEmail({ ...email, lastName: e.target.value })
                    }
                  />
                  <span className="italic text-red-500 px-2">
                    {errors.lastName}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
                <div className="grid grid-cols-1 gap-2">
                  <input
                    type="email"
                    placeholder="Email*"
                    className="border-1 p-2 w-60 focus:outline-none focus:border-transparent focus:ring-red-500 focus:ring-1"
                    name="Email"
                    value={email.email}
                    onChange={(e) =>
                      setEmail({ ...email, email: e.target.value })
                    }
                  />
                  <span className="text-red-500 px-2 italic">
                    {errors.email}
                  </span>
                </div>
                <div className="grid grid-cols-1 gap-2">
                  <PhoneInput
                    country={"ke"}
                    value={email.phoneNumber}
                    onChange={(phone) =>
                      setEmail({ ...email, phoneNumber: phone })
                    }
                    inputProps={{
                      name: "Phone Number",
                      required: false,
                      className:
                        "border-1 p-2 pl-11 w-60 focus:outline-none focus:border-transparent focus:ring-red-500 focus:ring-1",
                    }}
                  />
                  <span className="italic font-light">(Optional)</span>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-10 mt-10">
                <div className="grid grid-cols-1 gap-2">
                  <input
                    type="text"
                    placeholder="Subject for your message*"
                    className="border-1 p-2 w-60 md:w-130 focus:outline-none focus:border-transparent focus:ring-red-500 focus:ring-1"
                    name="Subject"
                    value={email.subject}
                    onChange={(e) =>
                      setEmail({ ...email, subject: e.target.value })
                    }
                  />
                  <span className="text-red-500 italic px-2">
                    {errors.subject}
                  </span>
                </div>
                <div className="grid grid-cols-1 gap-2">
                  <textarea
                    type="text"
                    placeholder="Enter Message*"
                    className="border-1 p-2 w-60 md:w-130 h-40 focus:outline-none focus:border-transparent focus:ring-red-500 focus:ring-1"
                    name="Message"
                    value={email.message}
                    onChange={(e) =>
                      setEmail({ ...email, message: e.target.value })
                    }
                  />
                  <span className="text-red-500 italic px-2">
                    {errors.message}
                  </span>
                </div>
              </div>

              <button
                type="submit"
                className="bg-red-500 text-white p-2 font-semibold mt-4 hover:opacity-80 hover:cursor-pointer"
              >
                Submit Message
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}