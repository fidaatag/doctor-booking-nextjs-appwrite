import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip"
import Image from "next/image"

type TooltipInfoProps = {
	icon: string;
	label: string;
	message: string
}

const TooltipInfo = ({ icon, label, message }: TooltipInfoProps) => {
	return (
		<TooltipProvider>
			<Tooltip>
				<TooltipTrigger>
					<Image
						src={icon}
						height={32}
						width={32}
						alt={label}
						className="size-4 w-fit"
					/>
				</TooltipTrigger>
				<TooltipContent 
					side="right"
					className="px-2 py-0 text-[10px]"
				>
					<p>{message}</p>
				</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	)
}

export default TooltipInfo
