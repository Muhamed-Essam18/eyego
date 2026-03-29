"use client";

import { FastForward, TrendingUp } from "lucide-react";
import { Pie, PieChart } from "recharts";
import { FaStreetView } from "react-icons/fa";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";
import { useSelector } from "react-redux";

export const description = "A pie chart with a label";

const getColor = (key: string) => {
  const colors: Record<string, string> = {
    active: "var(--green)",
    onleave: "var(--yellow)",
    terminated: "var(--pink)",
  };

  return colors[key] || "gray";
};

export function PieChartDefault(props: any) {
  const chartData: any[] = useSelector(props.selector);
  if (!chartData?.length) return null;

  const status = Object.keys(chartData[0])[0];
  const number = Object.keys(chartData[0])[1];

  const chartConfig: ChartConfig = {
    [number]: {
      label: number,
    },
  };

  chartData.forEach((item) => {
    const key = item[status];

    chartConfig[key] = {
      label: key,
      color: getColor(key),
    };
  });

  return (
    <Card className=" w-full h-full">
      <CardHeader className="items-center pb-0">
        <CardTitle>
          <div className="flex flex-row items-center gap-2 md:mb-2 font-bold">
            <FaStreetView />
            {props.title}
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-1 pb-0 flex items-center justify-center">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px] pb-0 [&_.recharts-pie-label-text]:fill-foreground w-full"
        >
          <PieChart>
            <ChartTooltip content={<ChartTooltipContent hideLabel />} />
            <Pie
              data={chartData}
              dataKey={number}
              label={({ payload }) => payload[status]}
              nameKey={status}
              innerRadius={50}
              strokeWidth={5}
              activeIndex={0}
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 leading-none font-medium">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total Active Employyes for the last 6 months
        </div>
      </CardFooter>
    </Card>
  );
}
