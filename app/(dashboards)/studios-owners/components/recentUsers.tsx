import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const RecentUsers = () => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-[#234E49]/10">
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-sora text-xl font-semibold text-gray-900">
          Recent Users
        </h2>
        <button className=" cursor-pointer text-[#234E49] text-sm font-medium hover:underline font-fredoka">
          View All
        </button>
      </div>
      <div className="">
        <Table>
          <TableHeader>
            <TableRow className="font-sora text-sm text-[#234E49]">
              <TableHead>ID</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Registered On</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow className="font-fredoka text-sm text-gray-700">
              <TableCell>MFH001</TableCell>
              <TableCell>Olaiwon Abdullahi</TableCell>
              <TableCell>abdullahi@myfithub.life</TableCell>
              <TableCell>20-2-25</TableCell>
              <TableCell className=" text-green-600">Active</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default RecentUsers;
