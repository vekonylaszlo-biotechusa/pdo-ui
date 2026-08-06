import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export function BasePlate({ children }: Props) {
  return (
    <div className="p-4 rounded-sm shadow-(--shadow-base-plate) bg-linear-to-b from-[#5f5f61] to-[#383838]">
      <div className="bg-linear-to-b from-[#727272] to-[#333333]">
        {children}
      </div>
    </div>
  );
}
