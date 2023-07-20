import iconSuccess from "../../assets/images/icon-success.svg";
import { FC } from "react";

interface SuccessMessageProps {
  userEmail: string;
  setEmail: React.Dispatch<React.SetStateAction<string | null>>;
}

const SuccessMessage: FC<SuccessMessageProps> = ({ userEmail, setEmail }) => {
  function handleClick() {
    setEmail(null);
  }

  return (
    <div className="h-full sm:h-fit">
      <div className="grid h-full gap-y-6 bg-neutral-white px-8 py-10  sm:max-w-[450px]  sm:gap-y-10  sm:rounded-[2.5rem] sm:px-14 sm:py-10">
        <div className="flex flex-col gap-y-6 self-center ">
          <img src={iconSuccess} alt="success icon" className="self-start" />
          <h2 className="mt-5 text-[2.5rem] font-bold leading-10 text-neutral-dark-slate-grey sm:mt-2 sm:text-5xl ">
            Thanks for subscribing!
          </h2>
          <p className="font-neutral-dark-slate-grey">
            A confirmation email has been sent to{" "}
            <span className="font-bold text-neutral-dark-slate-grey">
              {userEmail}
            </span>
            . Please open it and click the button inside to confirm your
            subscription
          </p>
        </div>
        <button
          onClick={handleClick}
          className="self-end rounded-lg bg-neutral-dark-slate-grey px-6 py-4 font-bold text-neutral-white
               transition-all hover:bg-gradient-to-r hover:from-[#ed5c7c] hover:to-primary-tomato
                hover:shadow-[0px_10px_25px_8px_rgba(255,_97,_87,_0.42)] sm:mb-5"
        >
          Dismiss message
        </button>
      </div>
    </div>
  );
};

export default SuccessMessage;
