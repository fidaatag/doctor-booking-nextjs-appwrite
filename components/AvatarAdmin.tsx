"use client"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useRouter } from "next/navigation"

const AvatarAdmin = () => {

	const router = useRouter();

  const Logout = () => {
    localStorage.removeItem("accessKey")
    router.push("/");
  };

	return (
		<DropdownMenu>
			<DropdownMenuTrigger className="text-sm">
				Admin
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end">
				<DropdownMenuItem onClick={Logout} className="cursor-pointer">⏻ Logout</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}

export default AvatarAdmin
