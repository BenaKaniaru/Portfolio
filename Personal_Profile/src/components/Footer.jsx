export default function Footer() {
  return (
    <footer className="flex flex-col py-10 md:flex-row text-center md:text-left px-8 text-white bg-gray-950">
      <div>
        <div className="flex flex-col gap-2 p-4">
          <span>Benard Kaniaru</span>
          <span>Front-end Web Developer</span>
        </div>

        <div className="flex flex-col gap-2 p-4">
          <span className="font-bold">Contact Me</span>
          <span>Email: kaniarubenard212@gmail.com</span>
          <span>Phone: +254790737591</span>
        </div>

        <p className="self-center">
          Copyright &copy; {new Date().getFullYear()} Benard Kaniaru. All rights
          reserved.{" "}
        </p>
      </div>
    </footer>
  );
}