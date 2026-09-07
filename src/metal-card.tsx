import { Icon, LucideProps } from "lucide-react";
import { ReactNode, useMemo } from "react";
import { cn } from "./lib/utils";

export interface MetalCardProps {
  icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
  title: string;
  description?: string;
  variant?: "silver" | "bronze";
  tag?: string | undefined;
}

export function MetalCard({
  icon: Icon,
  title,
  description,
  tag,
  variant = "silver",
}: MetalCardProps) {
  return (
    <div
      className={cn(
        "flex flex-col text-[#e7e7e9] items-center justify-center relative rounded-lg bg-linear-125 from-15  w-70.5 h-93 shadow-card-shadow",
        {
          "from-[#4d4f51] to-[#17191C]": variant === "silver",
          "from-[#544c47] to-[#17191c]": variant === "bronze",
        },
      )}
    >
      <div className="noise" />
      {tag && (
        <div
          className={cn(
            "absolute font-bold -top-2.5 text-sm bg-background px-3 py-0.5 rounded-md",
            {
              "text-[#66686b]": variant === "silver",
              "text-[#75706e]": variant === "bronze",
            },
          )}
        >
          {tag}
        </div>
      )}
      <div className="flex flex-col gap-2 text-center">
        <div className="flex items-center justify-center">
          <Icon
            fill={variant === "silver" ? "#323234" : "#312b29"}
            style={{
              filter: [
                // shadow on the top-left edge (the wall facing the light, tilted into the recess)
                "drop-shadow(-0.5px -0.5px 0.6px rgba(0,0,0,0.7))",
                // highlight on the bottom-right edge (catches light wrapping into the pit)
                "drop-shadow(0.5px 0.8px 0.6px rgba(255,255,255,0.28))",
              ].join(" "),
            }}
            className="stroke-none"
            size={70}
          ></Icon>
        </div>
        <div className="mt-4 font-semibold text-sm">{title}</div>
      </div>
      <div className="text-center absolute bottom-12">
        {/*<div className="flex flex-col gap-px mb-3">
          <div className="w-full h-px border-t border-dashed border-black/35" />
          <div className="w-full h-px border-t border-dashed border-white/10" />
        </div>*/}
        <span className="text-sm text-[#7b7b81]">{description}</span>
      </div>
    </div>
  );
}
