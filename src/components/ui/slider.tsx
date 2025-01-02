'use client';

import * as React from 'react';
import * as SliderPrimitive from '@radix-ui/react-slider';

interface SliderProps extends React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root> {
  value?: number[];
  onValueChange?: (value: number[]) => void;
}

export const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  SliderProps
>(({ className, value, onValueChange, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    value={value}
    onValueChange={onValueChange}
    className={`relative flex w-full touch-none select-none items-center ${className}`}
    {...props}
  >
    <SliderPrimitive.Track className="relative h-1.5 w-full grow overflow-hidden rounded-full bg-gray-200">
      <SliderPrimitive.Range className="absolute h-full bg-gradient-to-r from-blue-500 to-purple-600" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className="block h-4 w-4 rounded-full border border-gray-300 bg-white shadow-lg transition-transform duration-200 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2" />
  </SliderPrimitive.Root>
));
Slider.displayName = SliderPrimitive.Root.displayName;
