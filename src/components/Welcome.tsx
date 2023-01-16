import Button from "./ui/Button";

type welcomeProps = {
  welcome: string;
  heading: string;
  description: string;
  button1: string;
  button2: string;
};

const Welcome = ({
  welcome,
  heading,
  description,
  button1,
  button2,
}: welcomeProps) => {
  return (
    <div className="flex flex-col sm:items-center items-start   w-full  sm:text-center  text-left">
      <div className="px-4 py-1 bg-secondary text-primary text-xs font-semibold shadow-md rounded-3xl">
        {welcome}
      </div>
      <div className="w-full flex flex-col items-center space-y-3 text-sm">
        <h2 className="font-bold lg:text-5xl text-xl lg:w-[80%] ">{heading}</h2>
        <p className=" lg:w-1/2 w-full tracking-wide leading-5">
          {description}
        </p>
      </div>
      <div className="flex items-center gap-x-4 mt-6">
        <Button href="/hire" variant="fill" size="lg">
          {button1}
        </Button>
        <Button href="/hire" variant="outline" size="lg">
          {button2}
        </Button>
      </div>
    </div>
  );
};

export default Welcome;
