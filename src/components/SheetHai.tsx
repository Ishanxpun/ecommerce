import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useCounter } from "@/hooks/IncDec";
import { Textarea } from "@/components/ui/textarea"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function SheetDemo() {
    const {IncEvent,DecEvent,count}=useCounter();
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="default" size="sm">Purchase</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Payment Method</SheetTitle>
          <SheetDescription>
            All transaction are safe and encrypted.
          </SheetDescription>
        </SheetHeader>
        <div className="grid flex-1 auto-rows-min gap-6 px-4">
          <div className="grid gap-3">
            <Label htmlFor="sheet-demo-name">Name on card</Label>
            <Input
              id="sheet-demo-name"
              defaultValue="Ishan Pun"
              placeholder="Ishan Pun"
            />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="sheet-demo-username">Card Number</Label>
            <Input
              id="sheet-demo-username"
              defaultValue="123 456 789"
              placeholder="123 456 789"
            />
          </div>
          <div className="flex gap-8 ">
            <div className="flex flex-col gap-4 justify-center">
              <Label htmlFor="sheet-demo-name">Month</Label>
              <Select>
                <SelectTrigger className="w-[120px]">
                  <SelectValue placeholder="MM" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="01">01</SelectItem>
                  <SelectItem value="02">02</SelectItem>
                  <SelectItem value="03">03</SelectItem>
                  <SelectItem value="04">04</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col gap-4 justify-center">
                <Label htmlFor="sheet-demo-name">Year</Label>
              <Select>
                <SelectTrigger className="w-[120px]">
                  <SelectValue placeholder="YYYY" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="01">2024</SelectItem>
                  <SelectItem value="02">2025</SelectItem>
                  <SelectItem value="03">2026</SelectItem>
                  <SelectItem value="04">2027</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
        <div className="flex gap-16 items-center justify-center pb-12">
        <div>
            <div><h1 className="font-semibold">Number of Items</h1></div>
            <div><h1>You can add more later</h1></div>
        </div>
        <div className="flex"> 
             <Button variant={"outline"}>{count}</Button> 
        <Button variant={"outline"} onClick={DecEvent}>-</Button>
        <Button variant={"outline"} onClick={IncEvent}>+</Button>
        </div>
        </div>

        <h1 className="font-semibold px-4">Comments</h1>
        <Textarea placeholder="Type your message here." className="w-90 mx-4"/>


        <SheetFooter>
     
          <Button type="submit">Confirm Purchase</Button>
          <SheetClose asChild>
            <Button variant="outline">Close</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
