import { RootState } from "@/store/store";
import { ReactElement, ReactNode } from "react";
import { IconBaseProps, IconType } from "react-icons/lib";

export interface layoutProps {
  expanded: boolean;
  setExpanded: (expanded: boolean) => void;
  path: string;
}
export interface visulizationBoxProps {
  title: string;
  selector: (state: RootState) => string | number;
  icon: ReactElement;
  iconColor: string;
}
export interface DepartmentSalary {
  department: string;
  salary: number;
}
