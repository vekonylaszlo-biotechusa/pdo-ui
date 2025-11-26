export interface CircularProgressProps {
  value: number;
  size?: "sm" | "md" | "lg" | number;
}

const SIZE_MAP = {
  sm: 12,
  md: 14,
  lg: 18,
};

function getColor(value: number) {
  if (value === 0) {
    return "var(--muted-foreground)";
  }
  if (value > 0 && value <= 25) {
    return "var(--chart-1)";
  }
  if (value > 25 && value <= 50) {
    return "var(--warning)";
  } else if (value > 50 && value < 100) {
    return "var(--info)";
  } else if (value > 99) {
    return "var(--success)";
  }
}
export function CircularProgress({
  value,
  size = "md",
}: CircularProgressProps) {
  const pct = Math.min(100, Math.max(0, value));
  const sizePx = typeof size === "number" ? size : SIZE_MAP[size];

  const r = 2;
  const dash = 11.3097335529;
  const gap = 22.6194671058;
  const strokeDashoffset = dash - (pct / 100) * dash;

  const color = getColor(value);

  if (pct === 100) {
    return (
      <svg
        width={sizePx}
        height={sizePx}
        viewBox="0 0 14 14"
        fill={color}
        aria-hidden="true"
        className="checkmark-animated"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7 0C3.13401 0 0 3.13401 0 7C0 10.866 3.13401 14 7 14C10.866 14 14 10.866 14 7C14 3.13401 10.866 0 7 0ZM11.101 5.10104C11.433 4.76909 11.433 4.23091 11.101 3.89896C10.7691 3.56701 10.2309 3.56701 9.89896 3.89896L5.5 8.29792L4.10104 6.89896C3.7691 6.56701 3.2309 6.56701 2.89896 6.89896C2.56701 7.2309 2.56701 7.7691 2.89896 8.10104L4.89896 10.101C5.2309 10.433 5.7691 10.433 6.10104 10.101L11.101 5.10104Z"
        />
      </svg>
    );
  }

  return (
    <svg width={sizePx} height={sizePx} viewBox="0 0 14 14" fill="none">
      <circle
        cx="7"
        cy="7"
        r="6"
        fill="none"
        stroke={color}
        strokeWidth="1.5"
        strokeDasharray="3.14 0"
        strokeDashoffset="-0.7"
      />

      <circle
        className="transition-colors duration-300"
        cx="7"
        cy="7"
        r={r}
        fill="none"
        stroke={color}
        strokeWidth="4"
        strokeDasharray={`${dash} ${gap}`}
        strokeDashoffset={strokeDashoffset}
        transform="rotate(-90 7 7)"
      />
    </svg>
  );
}
