import { layoutProps } from "@/types/dashboard";
import { BsJustify } from "react-icons/bs";

const navbar = (props: layoutProps) => {
  const { expanded, setExpanded, path } = props;
  const pathname = path.split("/");
  const title = pathname[pathname.length - 1];

  return (
    <div className="w-full h-18 shrink-0 flex flex-row items-center bg-primary-foreground text-secondary gap-4 px-4">
      <BsJustify
        className="w-10 h-7 md:hidden"
        onClick={() => setExpanded(!expanded)}
      />
      <strong className="capitalize text-xl w-[90%] m-auto">{title}</strong>
    </div>
  );
};

export default navbar;
