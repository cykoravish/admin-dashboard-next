import Link from "next/link";
import Image from "next/image";
import logo from "../../img/logo.png";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Navbar = () => {
  return (
    <div className="bg-primary dark:bg-slate-700 py-2 px-3 flex justify-between text-white">
      <Link href="/">
        <Image src={logo} height={40} alt="TraversyPress" />
      </Link>
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback className="text-black">CN</AvatarFallback>
      </Avatar>
    </div>
  );
};

export default Navbar;
