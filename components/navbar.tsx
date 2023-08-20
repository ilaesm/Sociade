import { MobileSidebar } from "./mobile-sidebar";
import { Input } from "./ui/input";
import { Search } from 'lucide-react';
import { Button } from "./ui/button";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex items-center p-4">
      <MobileSidebar />
      <div className="relative w-full flex-grow">
        <Input
          type="search"
          placeholder="Search Campaigns"
          className="pl-10" // Add some padding to make room for the icon
        />
        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
          <Search size={18} color="#020617" />
        </div>
      </div>
      <div className="flex w-full justify-end"></div>
      <div className="flex mx-4">
        <Link href="/CreateCampaign">
        <Button className="px-12 text-lg py-2 bg-blue-500 text-white">Create</Button> {/* Add content and styling */}
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
