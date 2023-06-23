import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const AvatarComponent = () => {
  return (
    <Avatar>
      <AvatarImage className="h-10 w-10" src="https://github.com/cemtatli.png" />
      <AvatarFallback>CT</AvatarFallback>
    </Avatar>
  );
};

export default AvatarComponent;
