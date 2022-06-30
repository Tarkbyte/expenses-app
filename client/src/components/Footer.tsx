import { HeartIcon } from "@heroicons/react/outline";

const Footer = () => {
  return (
    <div className="w-full p-5">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-xs">
            See the source code on{" "}
            <a
              href="https://github.com/Tarkbyte/expenses-app"
              target="_blank"
              className="text-emerald-500"
            >
              GitHub
            </a>
          </p>
        </div>
        <p className="flex text-xs items-center">
          Created with <HeartIcon className="w-5 h-5 text-emerald-500 mx-1" />
          by Alessandro Salzo
        </p>
      </div>
    </div>
  );
};

export default Footer;
