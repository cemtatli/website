
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Skeleton } from "./ui/skeleton";

const AvatarComponent = () => {


  return (
    <Avatar>
      <Skeleton className="h-14 w-14 rounded-full" />
      <AvatarImage alt="cemtatli" src="https://github.com/cemtatli.png" />
    </Avatar>
  );
};

export default AvatarComponent;
