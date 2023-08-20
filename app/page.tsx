import Image from 'next/image'
import CampaignDetails from './(routes)/CampaignDetails/page';
import HomePage from './(routes)/HomePage/page';
import Profile from './(routes)/Profile/page';
import CreateCampaign from './(routes)/CreateCampaign/page';
import { Sidebar } from '@/components/sidebar';
import Navbar from '@/components/navbar';

export default function Home() {
  return (
    <div className="h-full relative">
      {/* <div className="hidden h-full md:flex md:w-75 md:flex-col md:fixed md:inset-y-0 z-80">
        <Sidebar />
      </div>
      <main className="md:pl-72 pb-10">
        <Navbar />
      </main> */}
    </div>
  )
}
