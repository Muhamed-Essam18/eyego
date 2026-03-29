"use client";

import { TrendingUp } from "lucide-react";
import { CartesianGrid, LabelList, Line, LineChart, XAxis } from "recharts";

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
import { stat } from "fs";

export const description = "A line chart with a label";
const getColor = (key: string) => {
  const colors: Record<string, string> = {
    active: "var(--green)",
    onleave: "var(--yellow)",
    terminated: "var(--pink)",
  };

  return colors[key] || "gray";
};
export function ChartLineLabel(props: any) {
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
    <Card>
      <CardHeader>
        <CardTitle className="font-bold">{props.title}</CardTitle>
        <CardDescription>{props.subTitle}</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              top: 20,
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey={status}
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              //tickFormatter={(value) => value.slice(0, 5)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <Line
              dataKey={number}
              type="natural"
              stroke={`var(--primary)`}
              strokeWidth={2}
              dot={{
                fill: `var(--primary)`,
              }}
              activeDot={{
                r: 6,
              }}
            >
              <LabelList
                position="top"
                offset={12}
                className="fill-foreground"
                fontSize={12}
              />
            </Line>
          </LineChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-center gap-2 text-sm">
        <div className="flex gap-2 leading-none font-medium">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total MockData{" "}
        </div>
      </CardFooter>
    </Card>
  );
}
