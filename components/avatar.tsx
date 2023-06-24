import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const AvatarComponent = () => {
  return (
    <Avatar>
      <AvatarImage src="https://github.com/cemtatli.png" />
      <AvatarFallback>CT</AvatarFallback>
    </Avatar>
  );
};

export default AvatarComponent;
