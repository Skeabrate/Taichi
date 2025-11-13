interface ChineseBorderProps {
  className?: string;
}

export function ChineseBorder({ className = "" }: ChineseBorderProps) {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      {/* Main horizontal line */}
      <div className="h-2 w-1/3 bg-red-800" />

      {/* Left upward curve (like roof eave) - more pronounced */}
      <svg
        className="absolute left-0 h-8 w-16 -translate-x-1/2"
        viewBox="0 0 64 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 16 Q16 0, 32 16"
          stroke="#9f0712"
          strokeWidth="8"
          strokeLinecap="round"
          fill="none"
        />
      </svg>

      {/* Right upward curve (like roof eave) - more pronounced */}
      <svg
        className="absolute right-0 h-8 w-16 translate-x-1/2"
        viewBox="0 0 64 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M32 16 Q48 0, 64 16"
          stroke="#9f0712"
          strokeWidth="8"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
    </div>
  );
}
