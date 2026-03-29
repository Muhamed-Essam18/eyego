"use client";
import { ChartBarDefault } from "@/components/charts/barChart/barChart";
import { PieChartDefault } from "@/components/charts/pieChart/pieChart";
import { headCountByDepartement } from "@/features/employees/employeesSelectors";
import { hiringTrend } from "@/features/employees/employeesSelectors";
import { ChartLineLabel } from "@/components/charts/lineChart/lineChart";
import { ResponsiveContainer } from "recharts";
import {
  activeRateChart,
  selectSalaryByDepartement,
} from "@/features/employees/employeesSelectors";

const analytics = () => {
  return (
    <div className="flex flex-col gap-5 mt-10">
      <div className="flex flex-col lg:flex-row w-[90%] items-center justify-center m-auto gap-5">
        <div className="w-full">
          <ResponsiveContainer width="100%" height="full">
            <ChartBarDefault
              selector={selectSalaryByDepartement}
              title="Salary by Departement"
              xKey={"department"}
              color=""
            />
          </ResponsiveContainer>
        </div>
        <div className="w-full">
          <ResponsiveContainer width="100%" height="full">
            <PieChartDefault
              selector={activeRateChart}
              title="Employees Status"
              description="This chart shows how many Acive / Terminated / onleave Employees"
            />
          </ResponsiveContainer>
        </div>
      </div>
      <div className="flex flex-col md:flex-row w-[90%] items-center justify-center m-auto gap-5">
        <ResponsiveContainer width="100%" height="full">
          <ChartLineLabel
            selector={hiringTrend}
            title="Hiring Trend"
            subTitle="MM-YY Formated"
          />
        </ResponsiveContainer>
        <ResponsiveContainer width="100%" height="full">
          <ChartLineLabel selector={hiringTrend} />
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default analytics;
