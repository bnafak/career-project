const Banner = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center justify-evenly">
      <div>
        <h1 className="text-5xl">Closer To Your</h1>
        <h2 className="text-5xl">Dream Job</h2>
        <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid eveniet nostrum dolorem quo repellendus dignissimos quos debitis tempore illo quam.</p>
      </div>
      <div>
        <img src="user.png" alt="" />
      </div>
    </div>
  );
};

export default Banner;
