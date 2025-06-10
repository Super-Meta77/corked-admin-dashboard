import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { TableCell } from "@/components/ui/table";
import TableComponent from "@/components/custom/CustomTableComponent";

export const Dashboard = (): JSX.Element => {
  // Data for stats cards

  const yAxisLabels = [5, 4, 3, 2, 1];
  const xAxisDates = [
    "Feb 9",
    "Feb 10",
    "Feb 11",
    "Feb 12",
    "Feb 13",
    "Feb 14",
    "Feb 15",
  ];

  const statsData = [
    {
      title: "Wine loged this week",
      value: "24",
      change: "+8.43",
      bgcolor: "#8280FF",
      icon: "/wineglass-2-line.svg",
    },
    {
      title: "Repeat visitors",
      value: "24",
      change: "+8.43",
      bgcolor: "#D6A85C",
      icon: "/repeat-line.svg",
    },
    {
      title: "Most popular wine",
      value: "24",
      change: "+8.43",
      bgcolor: "#FF80D7",
      icon: "/repeat-line.svg",
    },
  ];

  const recentLogs = [
    {
      id: 1,
      name: "Rachel Chu",
      wine: "Cabernet Sauvignon",
      date: "3/4/16",
      lastActive: "10 min ago",
      avatar: "/nature-.png",
    },
    {
      id: 2,
      name: "Robert Fox",
      wine: "Riesling",
      date: "8/16/13",
      lastActive: "10 min ago",
      avatar: "/nature--1.png",
    },
    {
      id: 3,
      name: "Brooklyn Simmons",
      wine: "Pinot Noir",
      date: "6/21/19",
      lastActive: "10 min ago",
      avatar: "/nature--2.png",
    },
    {
      id: 4,
      name: "Jerome Bell",
      wine: "Champagne",
      date: "10/6/13",
      lastActive: "10 min ago",
      avatar: "/nature--3.png",
    },
    {
      id: 5,
      name: "Ronald Richards",
      wine: "Chambourcin",
      date: "3/4/16",
      lastActive: "10 min ago",
      avatar: "/nature--4.png",
    },
  ];

  const columns = [
    { label: "Name", className: "w-[100px]" },
    { label: "Date", className: "w-[100px]" },
    { label: "Last Active", className: "w-[100px]" },
    { label: "Active", className: "w-[100px]" },
  ];

  // Data for quick links cards

  const customerData = [
    { type: "Regular customers", value: 16, color: "#5B0017", width: 30 },
    { type: "New Customers", value: 45, color: "#FFE347", width: 70 },
    { type: "Old customers", value: 2113, color: "#A1F488", width: 150 },
  ];

  return (
    <div
      style={{ padding: "50px", paddingLeft: "30px", paddingRight: "30px" }}
      className="flex flex-col w-full items-center justify-center gap-6 pt-0 pb-[46px] px-0 bg-[#ffffff]"
    >
      <div className="shadow-shadow w-full">
        {/* Welcome and VIP Alert Section */}
        <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
          <Card
            style={{ flex: "1", marginRight: "24px" }}
            className="flex w-[685px] h-[211px] items-center justify-between px-5 py-8 relative bg-highlight rounded-lg overflow-hidden border border-solid border-[#2d2d2d]"
          >
            <CardContent className="flex flex-col w-[573px] items-start gap-6 relative p-0">
              <img
                className="absolute w-[800px] h-[250px]"
                alt="Goods for wine"
                src="/goods-for-wine-making-doodle-set-collection-of-hand-drawn-barrel.png"
              />

              <img
                className="absolute w-[800px] h-[250px] right-[0px]"
                alt="Group"
                src="/group.png"
              />

              <div className="flex flex-col items-start gap-4 relative self-stretch w-full flex-[0_0_auto] z-10">
                <h2 className="relative self-stretch mt-[-1.00px] font-semibold text-white text-2xl tracking-[-0.48px] leading-[normal]">
                  Welcome back, Redgate Winery!
                </h2>

                <p className="relative w-[476px] font-medium text-white text-base tracking-[-0.32px] leading-[normal]">
                  Here&#39;s a snapshot of how your wines are doing this week.
                </p>
              </div>
            </CardContent>

            <img
              style={{ borderRadius: "8px", border: "2px solid white" }}
              className="relative w-[160px] h-[160px] mr-[12px] object-cover z-10"
              alt="Corked main logo"
              src="/corked-main-logo--2--2-1.png"
            />
          </Card>

          <Card
            style={{ width: "600px" }}
            className="flex flex-col w-[411px] h-[211px] items-center justify-center relative rounded-lg overflow-hidden border border-solid border-[#52111e] [background:linear-gradient(180deg,rgba(186,47,75,1)_0%,rgba(105,34,49,1)_100%)]"
          >
            <CardContent className="flex flex-col w-[269px] items-center gap-[18px] relative flex-[0_0_auto] p-0">
              <h2 className="relative self-stretch mt-[-1.00px] font-semibold text-white text-2xl text-center tracking-[-0.48px] leading-[normal]">
                VIP Alert
              </h2>

              <p className="relative self-stretch font-semibold text-white text-2xl text-center tracking-[-0.48px] leading-[normal]">
                You have a top customer on-site now!
              </p>

              <Button className="h-10 px-4 py-2 bg-highlight rounded-lg border-[#ffffff] inline-flex items-center justify-center gap-2 relative overflow-hidden border border-solid text-primary-text">
                Welcome them in!
              </Button>
            </CardContent>

            <img
              style={{ transform: "scale(2)" }}
              className="absolute w-[1361px] h-[98px] bottom-[-50px] left-[0px]"
              alt="Vector"
              src="/vector.svg"
            />
          </Card>

          <img
            className="absolute w-[196px] h-[196px] top-[-80px] left-[940px] object-cover"
            alt="Unnamed removebg"
            src="/unnamed-removebg-preview-1.png"
          />
        </div>

        {/* Snapshot Stats Section */}
        <div style={{ padding: "0 24px", width: "100%" }}>
          <div
            style={{ paddingTop: "24px" }}
            className="flex flex-col w-full items-start gap-3.5 relative flex-[0_0_auto]"
          >
            <h3 className="relative self-stretch mt-[-1.00px] font-semibold text-app-primary text-xl tracking-[0] leading-8">
              Snapshorts Stats
            </h3>

            <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto] gap-4">
              <Card className="flex w-full h-[120px] items-center justify-between p-4 bg-white rounded-lg border border-[#e0e1e4] shadow-shadow">
                {/* Icon and Text */}
                <div className="flex items-center gap-3.5">
                  {/* Icon Circle */}
                  <div
                    style={{ borderRadius: "24px" }}
                    className="w-[60px] h-[60px] bg-[#e4e3ff] flex items-center justify-center"
                  >
                    <img
                      className="w-[24px] h-[24px]"
                      alt="Wine logged this week"
                      src="/i-1.png"
                    />
                  </div>

                  {/* Text Content */}
                  <div className="flex flex-col justify-center">
                    <div className="text-sm text-[#5f6368] font-medium">
                      Wine loged this week
                    </div>
                    <div className="text-[#131313] text-2xl font-semibold">
                      24
                    </div>
                  </div>
                </div>

                {/* Badge */}
                <Badge className="flex flex-col items-start gap-[11.04px] px-[11px] py-[2.21px] bg-[#ecffed] rounded-[17.67px] text-[#1fad21]">
                  <div className="inline-flex items-center gap-[2.21px]">
                    <span className="text-[14.6px]">{"+8.43"}</span>
                    &nbsp;&nbsp;
                    <img src="/arrow.png" className="w-[8.5px] h-[9.5dpx]" />
                  </div>
                </Badge>
              </Card>

              <Card className="flex w-full h-[120px] items-center justify-between p-4 bg-white rounded-lg border border-[#e0e1e4] shadow-shadow">
                {/* Icon and Text */}
                <div className="flex items-center gap-3.5">
                  {/* Icon Circle */}
                  <div
                    style={{ borderRadius: "24px" }}
                    className="w-[60px] h-[60px] bg-[#f6eddd] flex items-center justify-center"
                  >
                    <img
                      className="w-[24px] h-[24px]"
                      alt="Wine logged this week"
                      src="/i-2.png"
                    />
                  </div>

                  {/* Text Content */}
                  <div className="flex flex-col justify-center">
                    <div className="text-sm text-[#5f6368] font-medium">
                      Wine loged this week
                    </div>
                    <div className="text-[#131313] text-2xl font-semibold">
                      24
                    </div>
                  </div>
                </div>

                {/* Badge */}
                <Badge className="flex flex-col items-start gap-[11.04px] px-[11px] py-[2.21px] bg-[#ecffed] rounded-[17.67px] text-[#1fad21]">
                  <div className="inline-flex items-center gap-[2.21px]">
                    <span className="text-[14.6px]">{"+8.43"}</span>
                    &nbsp;&nbsp;
                    <img src="/arrow.png" className="w-[8.5px] h-[9.5dpx]" />
                  </div>
                </Badge>
              </Card>

              <Card className="flex w-full h-[120px] items-center justify-between p-4 bg-white rounded-lg border border-[#e0e1e4] shadow-shadow">
                {/* Icon and Text */}
                <div className="flex items-center gap-3.5">
                  {/* Icon Circle */}
                  <div
                    style={{ borderRadius: "24px" }}
                    className="w-[60px] h-[60px] bg-[#ffe3f7] flex items-center justify-center"
                  >
                    <img
                      className="w-[24px] h-[24px]"
                      alt="Wine logged this week"
                      src="/i-3.png"
                    />
                  </div>

                  {/* Text Content */}
                  <div className="flex flex-col justify-center">
                    <div className="text-sm text-[#5f6368] font-medium">
                      Wine loged this week
                    </div>
                    <div className="text-[#131313] text-2xl font-semibold">
                      24
                    </div>
                  </div>
                </div>

                {/* Badge */}
                <Badge className="flex flex-col items-start gap-[11.04px] px-[11px] py-[2.21px] bg-[#ecffed] rounded-[17.67px] text-[#1fad21]">
                  <div className="inline-flex items-center gap-[2.21px]">
                    <span className="text-[14.6px]">{"+8.43"}</span>
                    &nbsp;&nbsp;
                    <img src="/arrow.png" className="w-[8.5px] h-[9.5dpx]" />
                  </div>
                </Badge>
              </Card>
            </div>
          </div>

          {/* Quick Links Section */}
          <div
            style={{ paddingTop: "24px" }}
            className="flex flex-col w-full items-start gap-3.5 relative flex-[0_0_auto]"
          >
            <h3 className="relative self-stretch mt-[-1.00px] font-semibold text-app-primary text-xl tracking-[0] leading-8">
              Quick Links
            </h3>

            <div className="flex w-full items-start justify-between relative gap-4">
              {/* Respond to visitors card */}
              <Card className="w-1/3 h-[220px] p-4 flex flex-col gap-4 rounded-lg border border-[#e0e1e4] shadow-shadow">
                {/* Header */}
                <div className="flex justify-between items-start w-full">
                  {/* Title and Subtitle */}
                  <div className="flex flex-col">
                    <CardTitle className="text-sm font-semibold text-[#131313]">
                      Respond to visitors
                    </CardTitle>
                    <CardDescription className="text-xs text-gray-500 mt-1">
                      The level of people visited
                    </CardDescription>
                  </div>

                  {/* Dropdown */}
                  <Select defaultValue="Days">
                    <SelectTrigger className="w-[100px] h-[38px] bg-basewhite border border-solid border-[#dbdbdb] shadow-drop-shadow">
                      <SelectValue placeholder="Select period" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Days">Days</SelectItem>
                      <SelectItem value="Week">Week</SelectItem>
                      <SelectItem value="Month">Month</SelectItem>
                      <SelectItem value="Year">Year</SelectItem>
                      <SelectItem value="All Time">All Time</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Content */}
                <CardContent
                  style={{ display: "flex", justifyContent: "center" }}
                  className="gap-8 flex px-3 pt-0 items-center justify-between w-full flex-1"
                >
                  {/* Circular Chart */}
                  <div className="relative w-[140px] h-[128px]">
                    {/* Grey Arc (Pending) */}
                    <img
                      src="/ellipse-17.svg"
                      alt="Pending arc"
                      className="absolute top-[6px] left-[6px] w-[128px] h-[115px]"
                    />

                    {/* Orange Arc (Completed) */}
                    <img
                      src="/ellipse-18.svg"
                      alt="Completed arc"
                      className="absolute top-0 left-0 w-[140px] h-[128px]"
                    />

                    {/* Center Text */}
                    <div className="absolute top-[75px] left-[30px] font-semibold text-sm text-[#1f2937]">
                      Total 20 logs
                    </div>
                  </div>

                  {/* Legend */}
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-[#d6a85c] rounded-sm" />
                      <span className="text-xs font-medium text-[#1f2937]">
                        Completed
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-[#e9edf0] rounded-sm" />
                      <span className="text-xs font-medium text-[#1f2937]">
                        Pending
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* View Analytics card */}
              <Card className="w-1/3 h-[220px] rounded-lg border border-[#e0e1e4] shadow-shadow bg-white p-4 flex flex-col items-center">
                {/* Header */}
                <div className="flex justify-between items-start w-full">
                  {/* Title and Subtitle */}
                  <div className="flex flex-col">
                    <CardTitle className="text-sm font-semibold text-[#131313]">
                      View Analytics
                    </CardTitle>
                    <CardDescription className="text-xs text-gray-500 mt-1">
                      Total number of your wines logged
                    </CardDescription>
                  </div>

                  {/* Dropdown */}
                  <Select defaultValue="Days">
                    <SelectTrigger className="w-[100px] h-[38px] bg-basewhite border border-solid border-[#dbdbdb] shadow-drop-shadow">
                      <SelectValue placeholder="Select period" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Days">Days</SelectItem>
                      <SelectItem value="Week">Week</SelectItem>
                      <SelectItem value="Month">Month</SelectItem>
                      <SelectItem value="Year">Year</SelectItem>
                      <SelectItem value="All Time">All Time</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Content */}
                <CardContent className="relative w-full px-3 pt-2 pb-1 h-[149px]">
                  {/* Chart Line Image (placed above grid) */}
                  <img
                    src="/mask-group-1.png"
                    alt="Chart Line"
                    className="absolute top-[5px] left-[34px] w-[334px] h-[121px] z-10 pointer-events-none"
                  />

                  {/* Y-Axis Grid Lines & Labels */}
                  <div className="absolute top-[5px] left-[10px] flex flex-col justify-between h-[121px] z-0">
                    {yAxisLabels.map((val) => (
                      <div
                        key={val}
                        className="flex items-center gap-1 h-[24px]"
                      >
                        <span className="text-[5.6px] text-[#333] w-4 text-right">
                          {val}
                        </span>
                        <img
                          src="/line-3-1.svg"
                          alt="Y Line"
                          className="w-[309px] h-px"
                        />
                      </div>
                    ))}
                  </div>

                  {/* X-Axis Date Labels & Vertical Lines */}
                  <div className="absolute bottom-[5px] left-[34px] flex justify-between w-[325px] z-0">
                    {xAxisDates.map((date) => (
                      <div
                        key={date}
                        className="flex flex-col items-center gap-[6px]"
                      >
                        <img
                          src="/line-3.svg"
                          alt="X Line"
                          className="w-px h-[100px]"
                        />
                        <span className="text-[5.6px] text-center leading-[9px] text-[#333]">
                          {date}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Manage wine Listing card */}
              <Card className="w-1/3 h-[220px] p-4 flex flex-col gap-4 rounded-lg border border-[#e0e1e4] shadow-shadow">
                <div className="flex justify-between items-start w-full">
                  {/* Title and Subtitle */}
                  <div className="flex flex-col">
                    <CardTitle className="text-sm font-semibold text-[#131313]">
                      Manage wine Listing
                    </CardTitle>
                    <CardDescription className="text-xs text-gray-500 mt-1">
                      Customer sentiments
                    </CardDescription>
                  </div>

                  {/* Dropdown */}
                  <Select defaultValue="Days">
                    <SelectTrigger className="w-[100px] h-[38px] bg-basewhite border border-solid border-[#dbdbdb] shadow-drop-shadow">
                      <SelectValue placeholder="Select period" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Days">Days</SelectItem>
                      <SelectItem value="Week">Week</SelectItem>
                      <SelectItem value="Month">Month</SelectItem>
                      <SelectItem value="Year">Year</SelectItem>
                      <SelectItem value="All Time">All Time</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Colored Bars */}
                <div className="flex gap-3 mt-2">
                  {customerData.map((item, idx) => (
                    <div
                      key={idx}
                      className="h-[28px] rounded-md"
                      style={{
                        backgroundColor: item.color,
                        flex: `${item.width}`,
                      }}
                    />
                  ))}
                </div>

                {/* Labels and Values */}
                <div className="flex justify-between items-start text-xs font-medium text-black mt-2">
                  {customerData.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex flex-col items-center text-center min-w-[90px]"
                    >
                      <span>{item.type}</span>
                      <span className="font-bold">
                        {item.value.toLocaleString()}
                      </span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>

          {/* Recent Logs Section */}
          <div
            style={{ paddingTop: "24px", paddingBottom: "48px" }}
            className="flex flex-col w-full items-start gap-3.5 relative flex-[0_0_auto]"
          >
            <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
              <h3 className="relative w-fit font-semibold text-app-primary text-xl tracking-[0] leading-8 whitespace-nowrap">
                Recent Logs
              </h3>

              <Button className="h-[38px] px-3 py-1.5 bg-app-primary rounded-lg border-[#52111e] text-white">
                View All
              </Button>
            </div>
            <Card className="flex flex-col w-full items-start relative shadow-shadow border border-[#e8e8e8] rounded-lg overflow-hidden">
              <TableComponent
                columns={columns}
                data={recentLogs}
                withCheckbox
                renderRow={(item) => (
                  <>
                    <TableCell className="border-r border-[#e8e8e8] w-[150px] px-4 py-3">
                      <div className="flex items-center gap-3">
                        <Avatar className="w-10 h-10 overflow-hidden rounded-md">
                          <img
                            src={item.avatar}
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        </Avatar>
                        <div>
                          <div className="font-semibold text-[#101828] text-sm">
                            {item.name}
                          </div>
                          <div className="text-xs text-[#989797]">
                            {item.wine}
                          </div>
                        </div>
                      </div>
                    </TableCell>

                    <TableCell className="border-r border-[#e8e8e8] w-[200px] px-4 py-3 text-sm font-medium">
                      {item.date}
                    </TableCell>

                    <TableCell className="border-r border-[#e8e8e8] w-[145px] px-4 py-3 text-sm font-medium text-[#52111e]">
                      {item.lastActive}
                    </TableCell>

                    <TableCell className="w-[145px] px-4 py-3 text-sm font-medium text-[#52111e]">
                      <Button
                        variant="outline"
                        className="px-3 py-1 text-sm font-medium text-[#52111e] border border-[#52111e] rounded-md hover:bg-[#fdf2f4]"
                      >
                        Reply to Log
                      </Button>
                    </TableCell>
                  </>
                )}
              />
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
