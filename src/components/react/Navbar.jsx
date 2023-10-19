const Navbar = (props) => {
  return (
    <nav className="flex justify-between bg-[#BCA37F] p-5">
      <div>{props.title}</div>
      <div className="flex gap-3">
        <a className="text-white" href="#">
          Home
        </a>
        <a className="text-white" href="/about">
          About
        </a>
        <a className="text-white" href="#">
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
