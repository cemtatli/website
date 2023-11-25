import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/skeleton";

const AvatarComponent = () => {
  return (
    <Avatar>
      <AvatarImage alt="cemtatli" src="https://github.com/cemtatli.png" />
      <Skeleton className="h-14 w-14 rounded-full" />
    </Avatar>
  );
};

export default AvatarComponent;
