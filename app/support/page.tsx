"use client";

const support = () => {
  return (
    <div className="w-full px-4 mx-auto flex flex-col items-center justify-center ">
      <h1 className="text-3xl mt-8 font-bold">
        Office Hour Rules and Schedule
      </h1>
      <p className="m-3 max-w-[800px] text-left">
        Looking for assistance with your coursework? We've got you covered with
        office hours available both in-person and virtually! In-person sessions
        take place in the Siebel basement, while virtual office hours are
        conducted via Zoom. To join either session, simply add yourself. If
        you're attending an in-person session, please make sure you're present
        in the Siebel Basement before adding yourself to the{" "}
        <a
          href="https://queue.illinois.edu/q/"
          className="font-bold hover:text-blue-500"
        >
          {" "}
          Queue
        </a>
        . Additionally, the Zoom link for virtual office hours is available on
        the
        <a
          href="https://queue.illinois.edu/q/"
          className="font-bold hover:text-blue-500"
        >
          {" "}
          Queue
        </a>{" "}
        page.
      </p>

      <iframe
        src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FChicago&bgcolor=%23ffffff&mode=WEEK&showTabs=0&src=NDQ4MTVkZDA4ZGU2MDkxYTQwZThlMjE4YWNlNWRhMTBiOTkxZDI2ZGVkNjM5NTc0YWVmYzBlZjllYWI0Nzk2NEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%238E24AA"
        className="border border-gray-600 mt-4 mb-8 rounded-lg shadow-lg p"
        width="800"
        height="600"
      ></iframe>
    </div>
  );
};

export default support;
