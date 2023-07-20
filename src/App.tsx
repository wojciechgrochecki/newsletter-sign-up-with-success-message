import "./App.css";
import NewsletterSignup from "./components/NewsletterSignup/NewsletterSignup";

function App() {
  return (
    <div className="h-full bg-neutral-charcoal-grey sm:grid sm:place-content-center sm:p-5 ">
      <NewsletterSignup />
      <div className="mx-auto mt-3 hidden w-[90%] text-center text-neutral-white sm:block">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a
          className="whitespace-nowrap bg-gradient-to-b from-[#ed5c7c] to-primary-tomato bg-clip-text font-bold text-transparent"
          href="#"
        >
          Wojciech Grochecki
        </a>
        .
      </div>
    </div>
  );
}

export default App;
