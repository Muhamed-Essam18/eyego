"use client";
import { ChartBarDefault } from "@/components/charts/barChart/barChart";
import { PieChartDefault } from "@/components/charts/pieChart/pieChart";
import { VisulizationBox } from "@/components/visulizationBox";
import boxesData from "@/data/visualizationBoxData/visulizationBoxData";
import { selectSalaryByDepartement } from "@/features/employees/employeesSelectors";
import { activeRateChart } from "@/features/employees/employeesSelectors";
const Dashboard = () => {
  return (
    <>
      <section className="w-[90%] m-auto flex flex-col justify-center gap-10 my-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {boxesData.map((box) => (
            <VisulizationBox
              key={box.title}
              title={box.title}
              icon={box.icon}
              selector={box.selector}
              iconColor={box.iconColor}
            />
          ))}
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-7">
          <ChartBarDefault
            selector={selectSalaryByDepartement}
            title="Salary by Departement"
            xKey={"department"}
            color="mono"
          />
          <PieChartDefault
            selector={activeRateChart}
            title="Employees Status"
            description="This chart shows how many Acive / Terminated / onleave Employees"
          />
        </div>
      </section>
    </>
  );
};

export default Dashboard;
