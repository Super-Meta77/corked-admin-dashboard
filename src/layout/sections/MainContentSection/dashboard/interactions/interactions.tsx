import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { TableCell } from "@/components/ui/table";
import TableComponent from "@/components/custom/CustomTableComponent";

// User data for the logs table
const userLogsData = [
  {
    id: 1,
    name: "Rachel Chu",
    jobTitle: "Contract work",
    avatar: "/nature-.png",
    wine: "Cabernet Sauvignon",
    date: "3/4/16",
    lastActive: "10 min ago",
  },
  {
    id: 2,
    name: "Robert Fox",
    jobTitle: "Contract work",
    avatar: "/nature--1.png",
    wine: "Cabernet Sauvignon",
    date: "8/16/13",
    lastActive: "10 min ago",
  },
  {
    id: 3,
    name: "Brooklyn Simmons",
    jobTitle: "Contract work",
    avatar: "/nature--2.png",
    wine: "Cabernet Sauvignon",
    date: "6/21/19",
    lastActive: "10 min ago",
  },
  {
    id: 4,
    name: "Jerome Bell",
    jobTitle: "Contract work",
    avatar: "/nature--3.png",
    wine: "Cabernet Sauvignon",
    date: "10/6/13",
    lastActive: "10 min ago",
  },
  {
    id: 5,
    name: "Ronald Richards",
    jobTitle: "Contract work",
    avatar: "/nature--4.png",
    wine: "Cabernet Sauvignon",
    date: "3/4/16",
    lastActive: "10 min ago",
  },
];

// Review rating data
const ratingData = [
  { stars: 5, count: 488 },
  { stars: 4, count: 74 },
  { stars: 3, count: 14 },
  { stars: 2, count: 0 },
  { stars: 1, count: 0 },
];

const columns = [
  { label: "Name", className: "w-[100px]" },
  { label: "Wine", className: "w-[100px]" },
  { label: "Date", className: "w-[100px]" },
  { label: "Last Active", className: "w-[100px]" },
  { label: "Active", className: "w-[100px]" },
];

export const Interactions = (): JSX.Element => {
  return (
    <div className="flex flex-col w-full items-start justify-center gap-9 p-5 bg-white rounded-lg shadow-shadow">
      <div className="flex flex-col items-start gap-3.5 w-full">
        <div className="flex items-start gap-4">
          <h2 className="font-['Outfit',Helvetica] font-semibold text-app-primary text-xl leading-8">
            Users Logs
          </h2>
        </div>

        <Card className="flex flex-col w-full items-start relative shadow-shadow border border-[#e8e8e8] rounded-lg overflow-hidden">
          <TableComponent
            columns={columns}
            data={userLogsData}
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
                      <div className="text-xs text-[#989797]">{item.wine}</div>
                    </div>
                  </div>
                </TableCell>

                <TableCell className="border-r border-[#e8e8e8] w-[200px] px-4 py-3 text-sm font-medium">
                  {item.wine}
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

      <Card className="w-full max-w-[700px] bg-primarywhite border-[#e0e1e4] shadow-shadow">
        <CardContent className="px-[25px] py-[18px] gap-2.5">
          <div className="flex items-center justify-between w-full">
            <div className="inline-flex items-center justify-center gap-2.5 pt-0 pb-[3px] border-b border-black">
              <span className="font-['Outfit',Helvetica] font-medium text-app-primary text-sm">
                Customer Reviews
              </span>
            </div>

            <div className="flex items-center gap-4">
              <Select>
                <SelectTrigger className="w-[140px] px-3 py-2 border border-gray-300 bg-white text-sm font-medium rounded-md shadow-sm hover:bg-gray-50 focus:ring-1 focus:ring-gray-200">
                  <div className="flex items-center gap-2">
                    <img className="w-5 h-5" alt="Icon" src="/icon-3.svg" />
                    <SelectValue placeholder="Filter by" />
                  </div>
                </SelectTrigger>

                <SelectContent className="w-[140px]">
                  <SelectItem value="date">By Date</SelectItem>
                  <SelectItem value="rating">By Rating</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-[140px] px-3 py-2 border border-gray-300 bg-white text-sm font-medium rounded-md shadow-sm hover:bg-gray-50 focus:ring-1 focus:ring-gray-200">
                  <div className="flex items-center gap-2">
                    <img className="w-5 h-5" alt="Icon" src="/icon-3.svg" />
                    <SelectValue placeholder="Sort by" />
                  </div>
                </SelectTrigger>

                <SelectContent className="w-[240px]">
                  <SelectItem value="date">All wines (total)</SelectItem>
                  <SelectItem value="rating">
                    Individual wines (selectable)
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* <div className="flex items-center gap-4">
              <Button
                variant="outline"
                className="h-[38px] gap-2 px-3 py-1.5 bg-hitbox rounded-lg border-[#dbdbdb]"
              >
                <img className="w-5 h-5" alt="Icon" src="/icon-3.svg" />
                <span className="font-['Lato',Helvetica] font-bold text-primary-text text-sm">
                  Filter by
                </span>
                <img className="w-5 h-5" alt="Icon" src="/icon-2.svg" />
              </Button>

              <Button
                variant="outline"
                className="h-[38px] gap-2 px-3 py-1.5 bg-hitbox rounded-lg border-[#dbdbdb]"
              >
                <img className="w-5 h-5" alt="Icon" src="/icon-3.svg" />
                <span className="font-['Lato',Helvetica] font-bold text-primary-text text-sm">
                  Sort by
                </span>
                <img className="w-5 h-5" alt="Icon" src="/icon-2.svg" />
              </Button>
            </div> */}
          </div>

          <div className="flex items-center gap-[81px] mt-2">
            <div className="flex flex-col w-[148px] h-[134px] items-start gap-4">
              <div className="font-['Outfit',Helvetica] font-semibold text-primary-text text-[32px] leading-5">
                4.7
              </div>

              <div className="relative w-[148px] h-[19.07px]">
                <div className="relative w-[150px] h-[21px] -top-px -left-px bg-[url(/group-1321317046.png)] bg-[100%_100%]">
                  <img
                    className="absolute w-2 h-[13px] top-[7px] left-[141px]"
                    alt="Icon"
                    src="/icon-1.svg"
                  />
                </div>
              </div>

              <div className="font-['Outfit',Helvetica] font-normal text-[#858585] text-xs">
                (578 Reviews)
              </div>
            </div>

            <div className="flex w-[413.5px] items-center justify-between">
              <div className="flex flex-col w-[30px] h-[93px] items-end gap-[7px]">
                {ratingData.map((rating) => (
                  <div
                    key={rating.stars}
                    className="font-['Outfit',Helvetica] font-medium text-primary-text text-[10px]"
                  >
                    {rating.stars} {rating.stars === 1 ? "star" : "stars"}
                  </div>
                ))}
              </div>

              <div className="relative w-[351px] h-[94px]">
                <div className="flex flex-col w-[351px] h-[94px] items-start gap-4 absolute top-0 left-0">
                  {ratingData.map((_, index) => (
                    <div
                      key={index}
                      className="w-[351px] h-1.5 bg-[#f2f6fb] rounded-lg"
                    />
                  ))}
                </div>

                <div className="absolute w-[299px] h-[50px] top-0 left-0">
                  <div className="absolute w-[299px] h-1.5 top-0 left-0 bg-highlight rounded-lg" />
                  <div className="absolute w-[100px] h-1.5 top-[22px] left-0 bg-highlight rounded-lg" />
                  <div className="absolute w-3.5 h-1.5 top-11 left-0 bg-highlight rounded-lg" />
                </div>
              </div>

              <div className="flex flex-col w-[17px] h-[106px] items-start justify-center gap-1">
                {ratingData.map((rating, index) => (
                  <div
                    key={rating.stars}
                    className={`font-['Outfit',Helvetica] font-medium ${
                      rating.count === 0
                        ? "text-[#858585]"
                        : "text-primary-text"
                    } text-[10px] text-center leading-[18px] whitespace-nowrap`}
                  >
                    {rating.count}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="w-full bg-white border-[#e0e1e4] shadow-shadow">
        <CardContent className="flex flex-col px-[25px] py-5 gap-3">
          <div className="flex items-center gap-3">
            <Avatar className="w-9 h-9 bg-[#dcdfff] text-[#5465ff]">
              <AvatarFallback className="font-text-sm-semibold">
                AK
              </AvatarFallback>
            </Avatar>
            <span className="font-['Outfit',Helvetica] font-medium text-gsfdark-blue text-sm text-center leading-[18px] whitespace-nowrap">
              Alex K.
            </span>
          </div>

          <div className="font-['Outfit',Helvetica] font-semibold text-primarydark-grey text-xs leading-5 whitespace-nowrap">
            Jan 20, 2024
          </div>

          <div className="flex items-start gap-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <img key={star} className="w-4 h-4" alt="Star" src="/star.svg" />
            ))}
          </div>

          <div className="font-['Outfit',Helvetica] font-semibold text-primarydark-grey text-sm leading-5 whitespace-nowrap">
            Senior Analyst
          </div>

          <p className="font-['Outfit',Helvetica] font-normal text-gsfdark-blue text-sm leading-[18px]">
            Working at Sam.AI has been an incredible journey so far. The
            technology we're building is truly cutting-edge, and being a part of
            a team that's revolutionizing how people achieve their goals is
            immensely fulfilling.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};
