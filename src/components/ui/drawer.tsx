import * as React from "react";

import { cn } from "@/lib/utils";

interface DrawerProps {
	open: boolean;
	onClose: () => void;
	children: React.ReactNode;
	side?: "left" | "right";
	className?: string;
}

function Drawer({
	open,
	onClose,
	children,
	side = "right",
	className,
}: DrawerProps) {
	React.useEffect(() => {
		if (!open) return;

		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.key === "Escape") onClose();
		};

		document.addEventListener("keydown", handleKeyDown);
		document.body.style.overflow = "hidden";

		return () => {
			document.removeEventListener("keydown", handleKeyDown);
			document.body.style.overflow = "";
		};
	}, [open, onClose]);

	return (
		<div
			className={cn(
				"fixed inset-0 z-50 transition-opacity duration-300 h-screen",
				open ? "opacity-100" : "pointer-events-none opacity-0",
			)}
			aria-hidden={!open}
		>
			<div className="absolute inset-0 bg-black/60" onClick={onClose} />
			<div
				className={cn(
					"absolute top-0 bottom-0 w-72 max-w-[80vw] nav-blur transition-transform duration-300 ease-out",
					side === "right" ? "right-0" : "left-0",
					open
						? "translate-x-0"
						: side === "right"
							? "translate-x-full"
							: "-translate-x-full",
					className,
				)}
				role="dialog"
				aria-modal="true"
			>
				{children}
			</div>
		</div>
	);
}

export { Drawer };
