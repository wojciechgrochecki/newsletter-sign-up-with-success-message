import React, { useState, useRef } from "react";
import illustrastionDesktop from "../../assets/images/illustration-sign-up-desktop.svg";
import illustrastionMobile from "../../assets/images/illustration-sign-up-mobile.svg";
import listIcon from "../../assets/images/icon-list.svg";

interface NewsletterFormProps {
  setEmail: React.Dispatch<React.SetStateAction<string | null>>;
}

const NewsletterForm: React.FC<NewsletterFormProps> = ({ setEmail }) => {
  const [emailValue, setEmailValue] = useState("");
  const [showError, setShowError] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    let isValid = validateEmail(emailValue);

    if (isValid) {
      setEmail(emailValue);
    }

    if (!didSubmit) {
      setShowError(!setClasses(isValid));
      setDidSubmit(true);
      return;
    }
  }

  function handleChange(value: string) {
    if (didSubmit) {
      setShowError(!setClasses(validateEmail(value)));
    }
    setEmailValue(value);
  }

  function setClasses(isValid: boolean) {
    if (!isValid) {
      inputRef.current?.classList.add(
        "text-primary-tomato",
        "border-primary-tomato",
        "bg-primary-tomato/20",
        "focus:border-primary-tomato",
      );
    } else {
      inputRef.current?.classList.remove(
        "text-primary-tomato",
        "border-primary-tomato",
        "bg-primary-tomato/20",
        "focus:border-primary-tomato",
      );
    }
    return isValid;
  }

  return (
    <div className="h-full bg-neutral-white sm:bg-transparent">
      <div
        className="grid min-h-fit grid-flow-row bg-neutral-white sm:max-h-fit sm:min-h-fit
       sm:max-w-fit sm:grid-cols-2 sm:rounded-[1.75rem] sm:p-4 sm:pl-0 md:rounded-[2.5rem] md:p-6 md:pl-6 lg:grid-cols-[1fr_auto]
       "
      >
        <picture className="w-full sm:order-1">
          <source media="(min-width:640px)" srcSet={illustrastionDesktop} />
          <img
            src={illustrastionMobile}
            alt="form illustration"
            className="w-full  "
          />
        </picture>
        <div className="flex sm:justify-center">
          <div
            className="flex w-full flex-col gap-y-5 p-5 text-neutral-dark-slate-grey
           sm:max-w-[400px] sm:justify-center sm:gap-y-2 sm:py-0 md:mx-2 md:pl-0 md:pr-6 lg:mx-16 lg:p-0"
          >
            <h2 className="text-[2.5rem] font-bold  md:text-[3rem] lg:text-[4rem] ">
              Stay updated!
            </h2>
            <p>Join 60,000+ product managers receiving monthly updates on:</p>
            <ul className="my-2 space-y-2">
              <li className="flex flex-row gap-x-4">
                <img
                  src={listIcon}
                  alt="checkmark icon"
                  className="self-start"
                />
                <div>Product discovery and building what matters</div>
              </li>
              <li className="flex flex-row gap-x-4">
                <img
                  src={listIcon}
                  alt="checkmark icon"
                  className="self-start"
                />{" "}
                <div>Measuring to ensure updates are a success</div>
              </li>
              <li className="flex flex-row gap-x-4">
                <img
                  src={listIcon}
                  alt="checkmark icon"
                  className="self-start"
                />
                <div>And much more!</div>
              </li>
            </ul>
            <form
              action=""
              noValidate
              onSubmit={handleSubmit}
              className="mt-3 flex flex-col gap-y-5 "
            >
              <div className="flex flex-col space-y-2">
                <label
                  htmlFor="emailInput"
                  className="flex flex-row justify-between text-xs font-bold"
                >
                  Email address{" "}
                  {showError && (
                    <span className="text-primary-tomato">
                      Valid email required
                    </span>
                  )}
                </label>
                <input
                  ref={inputRef}
                  type="email"
                  id="emailInput"
                  value={emailValue}
                  onChange={(e) => handleChange(e.target.value)}
                  className="rounded-lg border border-neutral-grey px-6 py-4 outline-none  transition-all
                  placeholder:text-neutral-grey focus:border-neutral-dark-slate-grey  focus:outline-none focus:ring-0 sm:px-3
                  sm:py-3 md:px-4 md:py-4 lg:px-6  "
                  placeholder="email@company.com"
                />
              </div>
              <button
                className="rounded-lg bg-neutral-dark-slate-grey px-6 py-4 font-bold text-neutral-white
               transition-all hover:bg-gradient-to-r hover:from-[#ed5c7c] hover:to-primary-tomato
                hover:shadow-[0px_10px_25px_8px_rgba(255,_97,_87,_0.42)] sm:px-3 sm:py-3 sm:text-[15px] md:px-4 md:py-4 lg:px-6 "
              >
                Subscribe to monthly newsletter
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterForm;
