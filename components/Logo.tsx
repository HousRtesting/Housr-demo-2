import Image from "next/image";

export default function Logo({
  className = "",
  size = "medium",
}: {
  className?: string;
  size?: "small" | "medium" | "large" | "xlarge";
}) {
  const sizes = {
    small: 24,
    medium: 32,
    large: 48,
    xlarge: 80,
  } as const;

  const px = sizes[size];

  return (
    <div className={`inline-flex items-center ${className}`}>
      <Image
        src="/housr-logo.png"
        alt="HousR Logo"
        width={px}
        height={px}
        style={{ filter: "brightness(0) invert(1)" }}
        priority
      />
    </div>
  );
}