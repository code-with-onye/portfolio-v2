const Footer = ({ footer }: { footer: string }) => {
  return (
    <div className=" flex items-center w-full bg-gray-200 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10  p-4   drop-shadow-md justify-center  fixed bottom-0">
      <p className="text-center text-xs tracking-wider uppercase font-semibold">
        {footer}
      </p>
    </div>
  );
};

export default Footer;
