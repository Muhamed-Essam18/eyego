"use client";

import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, Cell, XAxis, YAxis } from "recharts";
import { DepartmentSalary } from "@/types/dashboard";

import {
  Card,
  CardContent,
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

export const description = "A bar chart";

export function ChartBarDefault({
  selector,
  title,
  xKey,
  color,
}: {
  selector: any;
  title: string;
  xKey: string;
  color: string;
}) {
  const chartData: DepartmentSalary[] = useSelector(selector);
  console.log(chartData);

  const datakey = Object.keys(chartData[0])[1];
  const getColor = (key: string) => {
    const colors: Record<string, string> = {
      Product: "#3b82f6",
      HR: "#22c55e",
      Sales: "#f59e0b",
      Marketing: "var(--mentGreen)",
      Finance: "var(--pink)",
    };

    return colors[key] || "#8884d8";
  };

  const chartConfig = {
    desktop: {
      label: { datakey },
      color: "var(--chart-2)",
    },
  } satisfies ChartConfig;

  return (
    <Card className="w-full h-full">
      <CardHeader>
        <CardTitle className="font-bold">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid />
            <XAxis
              dataKey={xKey}
              tickLine={true}
              tickMargin={10}
              axisLine={false}
              interval={0}
            />
            <YAxis dataKey={datakey} />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey={datakey} radius={5}>
              {chartData.map((entry) => (
                <Cell
                  key={entry.department}
                  fill={
                    color === "mono" ? "var(--primary)" : getColor(entry[xKey])
                  }
                />
              ))}
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 leading-none font-medium">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total MockData for the last 6 months
        </div>
      </CardFooter>
    </Card>
  );
}
