"use client";

import * as React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { cn } from "@/lib/utils";

const CarouselContext = React.createContext(null);

function useCarousel() {
  const context = React.useContext(CarouselContext);
  if (!context) {
    throw new Error("useCarousel must be used within a Carousel");
  }
  return context;
}

const Carousel = React.forwardRef(
  (
    {
      className,
      plugins = [],
      opts,
      orientation = "horizontal",
      children,
      ...props
    },
    ref
  ) => {
    const [emblaRef, emblaApi] = useEmblaCarousel(
      {
        loop: true,
        align: "start",
        ...opts,
        axis: orientation === "horizontal" ? "x" : "y",
      },
      plugins
    );

    return (
      <CarouselContext.Provider value={{ emblaRef, emblaApi, orientation }}>
        <div ref={ref} className={cn("relative", className)} {...props}>
          {children}
        </div>
      </CarouselContext.Provider>
    );
  }
);
Carousel.displayName = "Carousel";

const CarouselContent = React.forwardRef(
  ({ className, children, ...props }, ref) => {
    const { emblaRef, orientation } = useCarousel();
    return (
      <div ref={emblaRef} className="overflow-hidden">
        <div
          ref={ref}
          className={cn(
            "flex",
            orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
            className
          )}
          {...props}
        >
          {children}
        </div>
      </div>
    );
  }
);
CarouselContent.displayName = "CarouselContent";

const CarouselItem = React.forwardRef(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("pl-4", className)}
        role="group"
        aria-roledescription="slide"
        {...props}
      >
        {children}
      </div>
    );
  }
);
CarouselItem.displayName = "CarouselItem";

function CarouselButton({ direction, className, ...props }) {
  const { emblaApi } = useCarousel();
  const isPrev = direction === "prev";

  return (
    <button
      type="button"
      onClick={() =>
        emblaApi && (isPrev ? emblaApi.scrollPrev() : emblaApi.scrollNext())
      }
      className={cn(
        "absolute top-1/2 -translate-y-1/2 rounded-full bg-white/85 text-[#d6601a] hover:bg-white shadow px-3 py-2 cursor-pointer",
        isPrev ? "left-4" : "right-4",
        className
      )}
      aria-label={isPrev ? "Previous slide" : "Next slide"}
      {...props}
    >
      {isPrev ? "‹" : "›"}
    </button>
  );
}

const CarouselPrevious = React.forwardRef((props, ref) => (
  <CarouselButton ref={ref} direction="prev" {...props} />
));
CarouselPrevious.displayName = "CarouselPrevious";

const CarouselNext = React.forwardRef((props, ref) => (
  <CarouselButton ref={ref} direction="next" {...props} />
));
CarouselNext.displayName = "CarouselNext";

export {
  Autoplay,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
};
