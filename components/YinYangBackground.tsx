export function YinYangBackground() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="relative aspect-square h-[90%]">
        <div className="relative h-full w-full overflow-hidden rounded-full bg-neutral-200">
          <div className="absolute top-0 right-0 h-full w-1/2 bg-white" />
          <div className="absolute top-1/4 right-1/4 z-10 aspect-square w-[12.5%] rounded-full bg-neutral-200" />
          <div className="absolute bottom-1/4 left-1/4 z-10 aspect-square w-[12.5%] rounded-full bg-white" />
          <div className="absolute top-0 left-1/4 h-1/2 w-1/2 rounded-full bg-white" />
          <div className="absolute right-1/4 bottom-0 h-1/2 w-1/2 rounded-full bg-neutral-200" />
        </div>
      </div>
    </div>
  );
}
