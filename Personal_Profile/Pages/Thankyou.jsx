import Header from "../src/components/Header"
import Footer from "../src/components/Footer"

export default function Thankyou () {
  return <div>
    <Header />
    <main className="flex mt-16 items-center justify-center">
      <section className=" flex flex-col items-center justify-center">
        <img src="/thankyou.jpg" alt="Thank you image" />
        <p className="text-3xl font-black pb-6">I will get back to you in a few!</p>
      </section>
    </main>
    <Footer />
  </div>
}