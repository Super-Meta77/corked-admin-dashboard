"use client";
import {
  BarChart3,
  Users,
  Wine,
  MessageSquare,
  ShoppingBag,
  ChevronDown,
  TrendingUp,
  Crown,
  Filter,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const sidebarItems = [
  { icon: BarChart3, label: "Dashboard", active: true },
  { icon: BarChart3, label: "Analytic & Benchmark", active: false },
  { icon: Wine, label: "Winery Page Manager", active: false },
  { icon: Users, label: "User Interaction Hub", active: false },
  { icon: ShoppingBag, label: "Marketplace Sales Hub", active: false },
];

const statsData = [
  {
    title: "Wine logged this week",
    value: "24",
    change: "+8.43",
    icon: Filter,
    color: "text-purple-600",
    bgColor: "bg-purple-100",
  },
  {
    title: "Repeat visitors",
    value: "24",
    change: "+8.43",
    icon: MessageSquare,
    color: "text-orange-600",
    bgColor: "bg-orange-100",
  },
  {
    title: "Most popular wine",
    value: "24",
    change: "+8.43",
    icon: Wine,
    color: "text-pink-600",
    bgColor: "bg-pink-100",
  },
];

const recentLogs = [
  {
    name: "Rachel Chu",
    wine: "Cabernet Sauvignon",
    date: "3/4/16",
    lastActive: "10 min ago",
    avatar: "/1.png?height=36&width=36",
  },
  {
    name: "Robert Fox",
    wine: "Riesling",
    date: "8/16/13",
    lastActive: "10 min ago",
    avatar: "/2.png?height=36&width=36",
  },
  {
    name: "Brooklyn Simmons",
    wine: "Pinot Noir",
    date: "6/21/19",
    lastActive: "10 min ago",
    avatar: "/3.png?height=36&width=36",
  },
  {
    name: "Jerome Bell",
    wine: "Champagne",
    date: "10/6/13",
    lastActive: "10 min ago",
    avatar: "/4.png?height=36&width=36",
  },
  {
    name: "Ronald Richards",
    wine: "Chardonnay",
    date: "3/4/16",
    lastActive: "10 min ago",
    avatar: "/5.png?height=36&width=36",
  },
];

export function Dashboard() {
  return (
    <div className="flex h-screen bg-[#f8f5f1]">
      {/* Sidebar */}
      <div className="w-64 bg-[#52111e] text-white p-6">
        <div className="flex items-center gap-3 mb-8">
          <img
            src="/logo.png"
            alt="Redgate Winery Logo"
            className="w-180 h-180"
          />
        </div>

        <nav className="space-y-2">
          {sidebarItems.map((item, index) => (
            <div
              key={index}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer transition-colors ${
                item.active
                  ? "bg-[#d6a85c] text-[#52111e]"
                  : "text-white hover:bg-[#6b1a2a]"
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span className="text-sm">{item.label}</span>
            </div>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Header */}
        <div className="bg-white border-b border-[#e0e1e4] px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-semibold text-[#52111e]">
                Hello, Connor Dixon
              </h1>
              <span className="text-2xl">👋</span>
            </div>
            <div className="flex items-center gap-3">
              <Avatar className="w-8 h-8">
                <AvatarImage src="/3.png" />
                <AvatarFallback>JC</AvatarFallback>
              </Avatar>
              <div className="text-right">
                <div className="font-medium text-sm">Connor Dixon</div>
                <div className="text-xs text-[#64748b]">jane@gmail.com</div>
              </div>
              <ChevronDown className="w-4 h-4 text-[#64748b]" />
            </div>
          </div>
        </div>

        <div className="p-8">
          {/* Welcome Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            <Card className="lg:col-span-2 bg-[#d6a85c] border-none text-white">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-xl font-semibold mb-2">
                      Welcome back, Redgate Winery!
                    </h2>
                    <p className="text-sm opacity-90">
                      Here's a snapshot of how your wines are doing this week.
                    </p>
                  </div>
                  <div className="w-40 h-40 bg-[#52111e] rounded-lg flex items-center justify-center">
                    <img
                      src="/logo.png"
                      alt="Redgate Winery Logo"
                      className="w-180 h-180"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#52111e] border-none text-white relative overflow-hidden">
              <CardContent className="p-6">
                <div className="absolute top-4 right-4">
                  <Crown className="w-8 h-8 text-[#d6a85c]" />
                </div>
                <div className="mb-4">
                  <Badge className="bg-[#d6a85c] text-[#52111e] hover:bg-[#d6a85c]">
                    VIP Alert
                  </Badge>
                </div>
                <h3 className="font-semibold mb-2">
                  You have a top customer on-site now!
                </h3>
                <Button className="bg-[#d6a85c] text-[#52111e] hover:bg-[#c49a52] mt-4">
                  Welcome them in!
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Stats */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-[#2d2d2d] mb-4">
              Snapshorts Stats
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {statsData.map((stat, index) => (
                <Card key={index} className="border-[#e0e1e4]">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className={`w-10 h-10 rounded-lg ${stat.bgColor} flex items-center justify-center`}
                      >
                        <stat.icon className={`w-5 h-5 ${stat.color}`} />
                      </div>
                      <div className="flex items-center gap-1 text-[#20ad22] text-sm">
                        <TrendingUp className="w-4 h-4" />
                        <span>{stat.change}</span>
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-[#2d2d2d] mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-[#64748b]">{stat.title}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-[#2d2d2d] mb-4">
              Quick Links
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card className="border-[#e0e1e4]">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-sm font-medium">
                      Respond to visitors
                    </CardTitle>
                    <Select defaultValue="days">
                      <SelectTrigger className="w-20 h-8 text-xs">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="days">Days</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <p className="text-xs text-[#64748b]">
                    The level of people visited
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4">
                    <div className="relative w-16 h-16">
                      <svg
                        className="w-16 h-16 transform -rotate-90"
                        viewBox="0 0 36 36"
                      >
                        <path
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="#e0e1e4"
                          strokeWidth="2"
                        />
                        <path
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="#d6a85c"
                          strokeWidth="2"
                          strokeDasharray="75, 100"
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-xs font-medium">
                          Total 20 logs
                        </span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-[#d6a85c] rounded"></div>
                        <span className="text-xs">Completed</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-[#e0e1e4] rounded"></div>
                        <span className="text-xs">Pending</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-[#e0e1e4]">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-sm font-medium">
                      View Analytics
                    </CardTitle>
                    <Select defaultValue="days">
                      <SelectTrigger className="w-20 h-8 text-xs">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="days">Days</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <p className="text-xs text-[#64748b]">
                    Total number of your wines logged
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="h-20 flex items-end justify-between">
                    {[20, 35, 25, 45, 30, 40, 35].map((height, index) => (
                      <div key={index} className="flex flex-col items-center">
                        <div
                          className="w-1 bg-[#2d2d2d] rounded-full mb-1"
                          style={{ height: `${height}px` }}
                        ></div>
                        <span className="text-[8px] text-[#64748b]">
                          {
                            [
                              "Jan 1",
                              "Jan 8",
                              "Jan 15",
                              "Jan 22",
                              "Jan 29",
                              "Feb 5",
                              "Feb 12",
                            ][index]
                          }
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-[#e0e1e4]">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-sm font-medium">
                      Manage wine Listing
                    </CardTitle>
                    <Select defaultValue="days">
                      <SelectTrigger className="w-20 h-8 text-xs">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="days">Days</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <p className="text-xs text-[#64748b]">Customer sentiments</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-[#52111e] rounded"></div>
                        <span className="text-xs">Regular customers</span>
                      </div>
                      <span className="text-sm font-medium">16</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-[#fee653] rounded"></div>
                        <span className="text-xs">New Customers</span>
                      </div>
                      <span className="text-sm font-medium">45</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-[#87db7d] rounded"></div>
                        <span className="text-xs">Old customers</span>
                      </div>
                      <span className="text-sm font-medium">2,113</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Recent Logs */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-[#2d2d2d]">
                Recent Logs
              </h3>
              <Button
                variant="outline"
                className="bg-[#52111e] text-white border-[#52111e] hover:bg-[#6b1a2a]"
              >
                View All
              </Button>
            </div>
            <Card className="border-[#e0e1e4]">
              <Table>
                <TableHeader>
                  <TableRow className="border-[#e0e1e4]">
                    <TableHead className="w-12">
                      <Checkbox />
                    </TableHead>
                    <TableHead className="text-[#64748b]">Name</TableHead>
                    <TableHead className="text-[#64748b]">Date</TableHead>
                    <TableHead className="text-[#64748b]">
                      Last Active
                    </TableHead>
                    <TableHead className="text-[#64748b]">Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {recentLogs.map((log, index) => (
                    <TableRow key={index} className="border-[#e0e1e4]">
                      <TableCell>
                        <Checkbox />
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <Avatar className="w-8 h-8">
                            <AvatarImage
                              src={log.avatar || "/placeholder.svg"}
                            />
                            <AvatarFallback>
                              {log.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-medium text-sm">
                              {log.name}
                            </div>
                            <div className="text-xs text-[#64748b]">
                              {log.wine}
                            </div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className="text-sm">{log.date}</TableCell>
                      <TableCell className="text-sm text-[#64748b]">
                        {log.lastActive}
                      </TableCell>
                      <TableCell>
                        <Button variant="outline" size="sm" className="text-xs">
                          Reply to Log
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
