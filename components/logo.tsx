type Variant = "horizontal" | "stacked" | "mark";
type Color   = "dark" | "light" | "gold";
type Size    = "xs" | "sm" | "md" | "lg" | "xl";

const filters: Record<Color, string> = {
  dark:  "brightness(0)",                                                    // pure black
  light: "brightness(0) invert(1)",                                         // pure white
  gold:  "brightness(0) invert(1) sepia(1) saturate(3) hue-rotate(5deg)",   // champagne gold
};

const wordmarkColor: Record<Color, string> = {
  dark:  "text-navy",
  light: "text-ivory",
  gold:  "text-champagne",
};

const subColor: Record<Color, string> = {
  dark:  "text-champagne",
  light: "text-white/50",
  gold:  "text-white/40",
};

// Rendered height of the crest mark (SVG is ~944×1022, ~0.92 aspect)
const markCls: Record<Size, string> = {
  xs: "h-8",
  sm: "h-11",
  md: "h-14",
  lg: "h-18",
  xl: "h-24",
};

const wordmarkSize: Record<Size, string> = {
  xs: "text-[9px]",
  sm: "text-xs",
  md: "text-sm",
  lg: "text-base",
  xl: "text-lg",
};

const subSize: Record<Size, string> = {
  xs: "text-[7px]",
  sm: "text-[8px]",
  md: "text-[9px]",
  lg: "text-[10px]",
  xl: "text-xs",
};

function Mark({ size, color }: { size: Size; color: Color }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/images/logo/mark.svg"
      alt="Altai Ventures crest"
      className={`shrink-0 w-auto object-contain ${markCls[size]}`}
      style={{ filter: filters[color] }}
    />
  );
}

export function Logo({
  variant = "horizontal",
  color   = "dark",
  size    = "sm",
}: {
  variant?: Variant;
  color?:   Color;
  size?:    Size;
}) {
  if (variant === "mark") {
    return <Mark size={size} color={color} />;
  }

  const wordmark = (
    <div className={variant === "stacked" ? "text-center" : ""}>
      <p
        className={`display ${wordmarkSize[size]} tracking-[0.12em] ${wordmarkColor[color]} uppercase leading-none`}
      >
        Altai Ventures
      </p>
      <p
        className={`${subSize[size]} tracking-[0.22em] ${subColor[color]} uppercase mt-[0.35em]`}
      >
        East Bay · California
      </p>
    </div>
  );

  if (variant === "stacked") {
    return (
      <div className="flex flex-col items-center gap-3">
        <Mark size={size} color={color} />
        {wordmark}
      </div>
    );
  }

  // horizontal (default — crest left, wordmark right, like Ritz-Carlton)
  return (
    <div className="flex items-center gap-3">
      <Mark size={size} color={color} />
      {wordmark}
    </div>
  );
}
