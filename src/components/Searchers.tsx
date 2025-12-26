import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
interface Iprops{
    brand:string,
    setBrand:string,
    nicotine:string,
    setNicotine:string,
}
const Searchers = () => {
  return (
    <div className="flex gap-4 justify-center ">
      <Select   >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Nicotine" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All</SelectItem>
          <SelectItem value="2%">2%</SelectItem>
          <SelectItem value="3%">3%</SelectItem>
          <SelectItem value="5%">5%</SelectItem>
        </SelectContent>
      </Select>
      <Select   >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="brand" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All</SelectItem>
          <SelectItem value="Nasty">Nasty</SelectItem>
          <SelectItem value="Elfbar">Elfbar</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default Searchers;
