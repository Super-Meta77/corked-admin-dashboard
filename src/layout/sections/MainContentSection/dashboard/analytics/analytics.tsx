import { ChevronDownIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const Analytics = (): JSX.Element => {
  // Analytics data
  const analyticsMetrics = [
    {
      id: 1,
      color: "bg-app-primary",
      title: "No of Log over time",
      value: "1.1K",
      change: "+3.4%",
      isPositive: true,
    },
    {
      id: 2,
      color: "bg-highlight",
      title: "Most Logged wines",
      value: "2.3K",
      change: "+11.4%",
      isPositive: true,
    },
    {
      id: 3,
      color: "bg-primary-text",
      title: "Repeat Visit Trends",
      value: "1.5K",
      change: "-1.4%",
      isPositive: false,
    },
  ];

  // Months data for x-axis
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  // Y-axis values for analytics chart
  const yAxisValues = ["60", "50", "40", "30", "20", "10", "00"];

  // Insights chart data
  const insightsDays = ["10", "11", "12", "13", "14"];
  const insightsYAxis = ["$50", "$30", "$10"];

  // Benchmark chart data
  const benchmarkMonths = Array.from({ length: 18 }, (_, i) =>
    String(i + 1).padStart(2, "0")
  );
  const benchmarkYAxis = ["120", "100", "80", "60", "40", "20", "0"];

  return (
    <section className="flex flex-col w-full items-start justify-center gap-6 pt-5 pb-[46px] px-5 bg-[#ffffff] rounded-lg shadow-shadow">
      <header className="flex items-center gap-2.5 relative self-stretch w-full">
        <h1 className="relative w-fit mt-[-1.00px] [font-family:'Outfit',Helvetica] font-semibold text-app-primary text-xl tracking-[0] leading-[normal]">
          Analytics &amp; Benchmark
        </h1>
      </header>

      <div className="flex items-start gap-[22px] w-full">
        {/* Analytics Card */}
        <Card className="flex-1 border-[#e0e1e4] shadow-shadow">
          <CardContent className="p-7">
            <div className="flex flex-col w-full justify-center gap-6 items-start">
              <div className="flex flex-col justify-center gap-2.5 self-stretch w-full items-start">
                <div className="flex items-center justify-between relative self-stretch w-full">
                  <h2 className="relative w-fit [font-family:'Outfit',Helvetica] font-semibold text-app-primary text-xl tracking-[0] leading-8 whitespace-nowrap">
                    Analytics
                  </h2>

                  <div className="flex items-center gap-3 justify-between">
                    <Select defaultValue="Logs Over Time">
                      <SelectTrigger className="w-[150px] h-[38px] bg-basewhite border border-solid border-[#dbdbdb] shadow-drop-shadow">
                        <SelectValue placeholder="Select period" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Logs Over Time">
                          Logs Over Time
                        </SelectItem>
                        <SelectItem value="Most Logged Wines">
                          Most Logged Wines
                        </SelectItem>
                        <SelectItem value="Repeat Visitors">
                          Repeat Visitors
                        </SelectItem>
                        <SelectItem value="Wine Type Breakdown">
                          Wine Type Breakdown
                        </SelectItem>
                        <SelectItem value="Wine club signups">
                          Wine club signups
                        </SelectItem>
                        <SelectItem value="Check-ins by Day">
                          Check-ins by Day
                        </SelectItem>
                      </SelectContent>
                    </Select>

                    <Select defaultValue="last7days">
                      <SelectTrigger className="w-[125px] h-[38px] bg-basewhite border border-solid border-[#dbdbdb] shadow-drop-shadow">
                        <SelectValue placeholder="Select period" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="last7days">Last 7 Days</SelectItem>
                        <SelectItem value="last30days">Last 30 Days</SelectItem>
                        <SelectItem value="last90days">Last 90 Days</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-start gap-6 mt-6">
              {/* Chart Area */}
              <div className="relative w-full h-[234.58px]">
                {/* Y-axis labels */}
                <div className="absolute w-12 h-[166px] top-[35px] left-0">
                  {yAxisValues.map((value, index) => (
                    <div
                      key={`y-value-${index}`}
                      className="absolute w-[34px] h-[17px] text-[#475569b0] text-[9.7px] text-right leading-[normal] [font-family:'Outfit',Helvetica] font-normal tracking-[0]"
                      style={{ top: `${index * 25}px` }}
                    >
                      {value}
                    </div>
                  ))}
                </div>

                {/* Chart area */}
                <div className="absolute w-[601px] h-[235px] top-0 left-[50px]">
                  {/* Grid lines */}
                  <img
                    className="absolute w-[576px] h-[209px] top-0 left-0"
                    alt="Grid lines"
                    src="/grid-lines.png"
                  />

                  {/* X-axis labels */}
                  <div className="absolute w-[601px] h-[34px] top-[201px] left-0">
                    {months.map((month, index) => (
                      <div
                        key={`month-${index}`}
                        className={`absolute w-[34px] h-[17px] top-[17px] [font-family:'Outfit',Helvetica] ${
                          month === "Aug"
                            ? "font-bold text-slate-600"
                            : "font-normal text-[#475569b0]"
                        } text-[9.7px] text-center tracking-[0] leading-[normal]`}
                        style={{ left: `${index * 49}px` }}
                      >
                        {month}
                      </div>
                    ))}
                    <img
                      className="absolute w-[576px] h-px -top-px left-0"
                      alt="Axis line"
                      src="/axis-line.svg"
                    />
                  </div>

                  {/* Chart lines */}
                  <img
                    className="absolute w-[543px] h-[130px] top-[21px] left-[21px]"
                    alt="Series graph"
                    src="/series-3-graph.png"
                  />
                  <img
                    className="absolute w-[542px] h-[200px] top-0 left-[21px]"
                    alt="Series"
                    src="/series-2.png"
                  />
                  <img
                    className="absolute w-[542px] h-[105px] top-[97px] left-[21px]"
                    alt="Series graph"
                    src="/series-1-graph.png"
                  />
                </div>
              </div>

              {/* Metrics Cards */}
              <div className="flex items-center justify-center gap-[13px] w-full">
                {analyticsMetrics.map((metric) => (
                  <Card
                    key={`metric-${metric.id}`}
                    className="flex-1 h-16 border-[#f2f2f2] bg-basewhite"
                  >
                    <CardContent className="flex flex-col items-start justify-center gap-[9px] p-3">
                      <div className="flex items-center gap-[9px]">
                        <div
                          className={`w-1.5 h-1.5 ${metric.color} rounded-[3px]`}
                        />
                        <div className="[font-family:'Outfit',Helvetica] font-semibold text-slate-600 text-sm tracking-[-0.50px] leading-[18px]">
                          {metric.title}
                        </div>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <div className="[font-family:'Outfit',Helvetica] font-medium text-primary-text text-base tracking-[-1.00px] leading-7 whitespace-nowrap">
                          {metric.value}
                        </div>
                        <Badge
                          className={`px-1 py-0.5 ${
                            metric.isPositive
                              ? "bg-green-100 text-green-300"
                              : "bg-red-100 text-red-400"
                          }`}
                        >
                          <span className="font-body-MD-12 font-[number:var(--body-MD-12-font-weight)] text-[length:var(--body-MD-12-font-size)] tracking-[var(--body-MD-12-letter-spacing)] leading-[var(--body-MD-12-line-height)] [font-style:var(--body-MD-12-font-style)]">
                            {metric.change}
                          </span>
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Insights Card */}
        <Card className="w-[400px] border-[#e0e1e4] shadow-shadow">
          <CardContent className="p-7">
            <div className="flex flex-col w-80 items-start gap-2">
              <h2 className="relative w-fit mt-[-1.00px] [font-family:'Outfit',Helvetica] font-semibold text-app-primary text-xl tracking-[0] leading-8 whitespace-nowrap">
                Insights
              </h2>

              <div className="flex items-start gap-3">
                <Select defaultValue="Most Engaged Customers">
                  <SelectTrigger className="w-[210px] h-[38px] bg-basewhite border border-solid border-[#dbdbdb] shadow-drop-shadow">
                    <SelectValue placeholder="Select period" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Most Engaged Customers">
                      Most Engaged Customers
                    </SelectItem>
                    <SelectItem value="Peak Visit Day/Time">
                      Peak Visit Day/Time
                    </SelectItem>
                    <SelectItem value="Wine Club Signup Trends">
                      Wine Club Signup Trends
                    </SelectItem>
                    <SelectItem value="Top Commenters">
                      Top Commenters
                    </SelectItem>
                    <SelectItem value="First-Time Visitors">
                      First-Time Visitors
                    </SelectItem>
                  </SelectContent>
                </Select>

                <Select defaultValue="last7days">
                  <SelectTrigger className="w-[125px] h-[38px] bg-basewhite border border-solid border-[#dbdbdb] shadow-drop-shadow">
                    <SelectValue placeholder="Select period" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="last7days">Last 7 Days</SelectItem>
                    <SelectItem value="last30days">Last 30 Days</SelectItem>
                    <SelectItem value="last90days">Last 90 Days</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="flex flex-col items-start gap-[33px] mt-4">
              {/* Insights Chart */}
              <div className="relative w-[306.96px] h-[204px]">
                {/* Y-axis labels */}
                <div className="flex flex-col w-[26px] h-[178px] items-start gap-[64.23px] absolute top-0 left-0">
                  {insightsYAxis.map((value, index) => (
                    <div
                      key={`insight-y-${index}`}
                      className="relative self-stretch [font-family:'Outfit',Helvetica] font-normal text-slate-500 text-[12.6px] tracking-[0] leading-[normal]"
                    >
                      {value}
                    </div>
                  ))}
                </div>

                {/* X-axis labels */}
                <div className="flex w-[204px] h-4 items-center gap-[36.52px] absolute top-[188px] left-[69px]">
                  {insightsDays.map((day, index) => (
                    <div
                      key={`insight-x-${index}`}
                      className="relative w-fit mt-[-1.07px] [font-family:'Outfit',Helvetica] font-normal text-slate-500 text-[12.6px] tracking-[0] leading-[normal]"
                    >
                      {day}
                    </div>
                  ))}
                </div>

                {/* Chart area */}
                <div className="absolute w-[275px] h-[159px] top-[7px] left-8">
                  {/* Horizontal lines */}
                  <div className="flex flex-col w-[275px] h-[159px] items-start gap-[79.34px] absolute top-0 left-0">
                    {[0, 1, 2].map((index) => (
                      <img
                        key={`line-${index}`}
                        className="relative self-stretch w-full h-px"
                        alt={`Line ${index + 1}`}
                        src="/line-1.svg"
                      />
                    ))}
                  </div>

                  {/* Bar charts */}
                  <div className="flex w-[216px] h-[110px] items-end gap-[36.52px] absolute top-12 left-[41px]">
                    {[0, 1, 2, 3, 4].map((index) => (
                      <div
                        key={`bar-group-${index}`}
                        className="inline-flex items-end relative flex-[0_0_auto]"
                      >
                        <div className="relative w-[6.95px] h-[56.05px] bg-app-primary rounded-[3.48px]" />
                        <div className="relative w-[6.95px] h-[36.68px] bg-highlight rounded-[3.48px]" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Legend */}
              <div className="flex flex-col items-start justify-center gap-2.5">
                <div className="flex items-center justify-center gap-2.5">
                  <div className="w-2.5 h-2.5 bg-app-primary rounded-[5px]" />
                  <div className="[font-family:'Outfit',Helvetica] font-semibold text-[#757575] text-base tracking-[0] leading-[normal]">
                    Most engaged customers
                  </div>
                </div>
                <div className="flex items-center justify-center gap-2.5">
                  <div className="w-2.5 h-2.5 bg-highlight rounded-[5px]" />
                  <div className="[font-family:'Outfit',Helvetica] font-semibold text-[#757575] text-base tracking-[0] leading-[normal]">
                    Peak visit days/times
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Benchmark Data Card */}
      <Card className="w-full border-[#e0e1e4] shadow-shadow">
        <CardContent className="p-7">
          <div className="flex items-center justify-between w-full">
            <h2 className="[font-family:'Outfit',Helvetica] font-semibold text-app-primary text-xl tracking-[0] leading-[30.4px] whitespace-nowrap">
              Benchmark data
            </h2>

            <div className="flex items-center gap-8">
              <div className="flex items-center gap-[4.75px]">
                <div className="w-[18px] h-[18px] bg-[#d6a85c] rounded-[5px]" />
                <div className="[font-family:'Outfit',Helvetica] font-normal text-x-80 text-base tracking-[0] leading-[26.6px] whitespace-nowrap">
                  Top 20% avg. in region
                </div>
              </div>

              <div className="flex items-center gap-[4.75px]">
                <div className="w-[18px] h-[18px] bg-[#52111e] rounded-[5px]" />
                <div className="[font-family:'Outfit',Helvetica] font-normal text-x-80 text-base tracking-[0] leading-[26.6px] whitespace-nowrap">
                  Your stats
                </div>
              </div>

              <Button className="h-[38px] px-[11px] py-1.5 bg-app-primary rounded-lg border-[0.95px] border-solid border-[#52111e]">
                <span className="[font-family:'Outfit',Helvetica] font-semibold text-[#ffffff] text-base tracking-[0] leading-[19.0px] whitespace-nowrap">
                  View All
                </span>
              </Button>
            </div>
          </div>

          {/* Benchmark Chart */}
          <div className="relative w-full h-[392px] mt-6 bg-[#ffffff] rounded-[7.6px] overflow-hidden border border-solid border-[#e0e1e4]">
            <div className="relative w-full h-[347px] top-[33px] left-[5px]">
              {/* Horizontal grid lines */}
              {[275, 314, 232, 215, 189, 146, 104].map((top, index) => (
                <img
                  key={`grid-line-${index}`}
                  className="absolute w-[908px] h-px left-[117px]"
                  style={{ top: `${top}px` }}
                  alt={`Line ${index + 1}`}
                  src={top === 215 ? "/line-13.svg" : "/line-15.svg"}
                />
              ))}

              {/* Y-axis labels */}
              <div className="absolute w-[23px] h-[309px] top-0 left-0">
                <div className="flex flex-col w-[23px] h-[309px] items-center gap-[16.09px]">
                  {benchmarkYAxis.map((value, index) => (
                    <div
                      key={`benchmark-y-${index}`}
                      className="relative w-fit [-webkit-text-stroke:0.96px_#f1f4f9] text-x-60 text-base text-center leading-[27.6px] whitespace-nowrap [font-family:'Outfit',Helvetica] font-normal tracking-[0]"
                    >
                      {value}
                    </div>
                  ))}
                </div>
              </div>

              {/* X-axis labels */}
              <div className="flex w-[955px] items-center gap-[58.92px] absolute top-[319px] left-[77px]">
                {benchmarkMonths.slice(0, 14).map((month, index) => (
                  <div
                    key={`benchmark-x-${index}`}
                    className="relative w-fit mt-[-2.00px] [-webkit-text-stroke:1.04px_#f1f4f9] text-x-60 text-base leading-[27.6px] whitespace-nowrap [font-family:'Outfit',Helvetica] font-normal tracking-[0]"
                  >
                    {month}
                  </div>
                ))}
              </div>

              {/* Bar chart */}
              <div className="flex w-[869px] h-72 items-end justify-between absolute top-[9px] left-[101px]">
                {/* Rendering 11 bar groups */}
                {Array.from({ length: 11 }, (_, i) => (
                  <div
                    key={`bar-group-${i}`}
                    className="relative w-[23px] h-[178px]"
                  >
                    <div className="relative w-[23px] h-[178px]">
                      <div className="h-[92px] top-[86px] absolute w-[23px] left-0 bg-app-primary" />
                      <div className="h-[89px] absolute w-[23px] top-0 left-0 bg-highlight rounded-[9.67px_9.67px_0px_0px]" />
                    </div>
                  </div>
                ))}
              </div>

              {/* Y-axis label */}
              <div className="absolute top-32 left-[-88px] -rotate-90 [font-family:'Outfit',Helvetica] font-semibold text-slate-600 text-sm tracking-[-0.50px] leading-[18px] whitespace-nowrap">
                Average Time to Respond (hours)
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
