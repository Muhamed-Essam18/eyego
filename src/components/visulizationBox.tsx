import { useSelector } from "react-redux";
import { visulizationBoxProps } from "@/types/dashboard";
export const VisulizationBox = (props: visulizationBoxProps) => {
  const data = useSelector(props.selector);

  return (
    <div className="flex flex-col  justify-center bg-primary-foreground border border-muted-foreground/10 shadow w-full px-10 py-6 m-auto rounded-2xl gap-3">
      <div className="flex flex-row items-center justify-between">
        <h4 className="text-muted-foreground text-sm">{props.title}</h4>
        <div className={`text-${props.iconColor} text-xl`}>{props.icon}</div>
      </div>
      <strong className="text-2xl">{data}</strong>
    </div>
  );
};
