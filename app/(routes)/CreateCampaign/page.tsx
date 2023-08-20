
import * as React from "react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
 import { Textarea } from "@/components/ui/textarea"
import { DatePicker } from "@/components/datebutton"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
const CreateCampaign = () => {

  // const [form, setForm] = useState({
  //   name: '',
  //   title: '',
  //   description: '',
  //   target: '', 
  //   deadline: '',
  //   image: ''
  // });

  return (
<div className="flex justify-center items-center min-h-screen">
  <Card className="w-[700px]">
        <CardHeader>
          <CardTitle className="text-3xl">Create a Campaign</CardTitle>
          <CardDescription>Simply fill out the form below</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-12">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Personal or Organization Name" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="framework">Title</Label>
                <Input id="name" placeholder="Campaign Title" />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="description">Description</Label>
                <Textarea className="h-[150px]" placeholder="Type your campaign description here"/>
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="end-date">End Date</Label>
                <DatePicker />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="goal">Goal</Label>
                <Input id="goal" type="number" placeholder="How much money do you want to raise?" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="picture">Image</Label>
                <Input id="picture" type="file" placeholder="Upload your campaign image" />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button className="w-[150px]">Create</Button>
        </CardFooter>
      </Card>
</div>
  )
}

export default CreateCampaign

{/* <div className="bg-[#1c1c23] flex justify-center items-center flex-col sm:-10 rounded-[5px] p-8">
<div className="p-8 flex justify-center items-center p-[16px] sm:min-w-[380px]">
  <h1 className="font-bold sm:text-[25px] text-[18px] leading-[38px]">Start a Campaign</h1>
</div>
</div> */}