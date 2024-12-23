const Location = () => {
  return (
    <div className="h-[397px]  rounded-lg bg-white p-8 shadow-xl shadow-mist/70">
      <h1 className="text-2xl font-bold lg:text-32px">Locate us</h1>
      <div className="relative">
        <div className="w-full h-64 mt-8 bg-gray-200 rounded-lg animate-pulse"></div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3539.741448215697!2d77.45083149999999!3d27.477307599999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39730f39dd8fd35b%3A0xc782a3ade5f013!2sISKCON%20Bhagavata%20Mahavidyalaya!5e0!3m2!1sen!2sin!4v1652701994357!5m2!1sen!2sin"
          className="absolute top-0 w-full h-64 border-0 rounded-lg"
          loading="lazy"></iframe>
      </div>
    </div>
  );
};

export default Location;
