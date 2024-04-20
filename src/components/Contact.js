const Contact = () => {
  return (
    <div>
      <h1 className="font-bold text-3xl p-4 m-4">Contact</h1>
      <h2 className="font-bold text-2xl p-4 m-4">
        This is Contact Page of Namaste Food
      </h2>
      <form className="p-4 m-4">
        <input
          className="border border-black p-2 m-2"
          type="text"
          placeholder="name"
        ></input>
        <input
          className="border border-black p-2 m-2"
          type="text"
          placeholder="message"
        ></input>
        <button className="border border-black p-2 m-2 bg-gray-200 rounded-lg">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
