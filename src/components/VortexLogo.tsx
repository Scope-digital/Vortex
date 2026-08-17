import React from 'react';

interface VortexLogoProps {
  variant?: 'dark' | 'light';
  className?: string;
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const VortexLogo: React.FC<VortexLogoProps> = ({
  variant = 'light',
  className = '',
  showText = true,
  size = 'md'
}) => {
  const isDark = variant === 'dark';

  const darkColor = isDark ? '#FFFFFF' : '#0F172A';
  const blueColor = isDark ? '#38BDF8' : '#0B4BBE';
  const paneBg = isDark ? '#1E293B' : '#FFFFFF';

  // Height mappings for convenience
  const heightClass = {
    sm: 'h-8',
    md: 'h-11 sm:h-12',
    lg: 'h-14 sm:h-16',
    xl: 'h-20 sm:h-24'
  }[size];

  return (
    <div className={`inline-flex items-center gap-2 select-none ${className}`}>
      <svg
        viewBox="0 0 320 86"
        className={`${heightClass} w-auto max-w-full drop-shadow-xs transition-transform duration-200`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* === 3D HOUSE & WINDOW ICON (Left) === */}
        <g id="vortex-icon">
          {/* Roof Peak / Eaves (Dark) */}
          <path
            d="M 42 4 L 84 28 L 78 31 L 42 11 L 6 31 L 0 28 Z"
            fill={darkColor}
          />

          {/* Left Window Structure (4-Pane in perspective - Dark) */}
          <g id="left-window-pane">
            {/* Outer thick frame */}
            <path
              d="M 6 33 L 40 18 L 40 76 L 6 88 Z"
              fill={darkColor}
            />
            {/* Top-Left Pane Glass */}
            <path
              d="M 10 37 L 21 32 L 21 51 L 10 54 Z"
              fill={paneBg}
            />
            {/* Top-Right Pane Glass */}
            <path
              d="M 25 30 L 36 25 L 36 47 L 25 49 Z"
              fill={paneBg}
            />
            {/* Bottom-Left Pane Glass */}
            <path
              d="M 10 58 L 21 55 L 21 75 L 10 82 Z"
              fill={paneBg}
            />
            {/* Bottom-Right Pane Glass */}
            <path
              d="M 25 53 L 36 51 L 36 71 L 25 73 Z"
              fill={paneBg}
            />
          </g>

          {/* Right Window / Patio Structure (2-Pane in perspective - Royal Blue) */}
          <g id="right-window-pane">
            {/* Outer thick frame */}
            <path
              d="M 44 18 L 78 33 L 78 88 L 44 76 Z"
              fill={blueColor}
            />
            {/* Left Glass Pane */}
            <path
              d="M 48 24 L 59 29 L 59 73 L 48 69 Z"
              fill={paneBg}
            />
            {/* Right Glass Pane */}
            <path
              d="M 63 31 L 74 36 L 74 81 L 63 75 Z"
              fill={paneBg}
            />
          </g>
        </g>

        {/* === BRAND TYPOGRAPHY (Right) === */}
        {showText && (
          <g id="vortex-typography">
            {/* "Vortex" Headline */}
            <text
              x="92"
              y="52"
              fill={darkColor}
              fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif"
              fontWeight="900"
              fontSize="48"
              letterSpacing="-1.2px"
            >
              Vortex
            </text>

            {/* "windows and doors" Subtitle */}
            <text
              x="94"
              y="77"
              fill={blueColor}
              fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif"
              fontWeight="600"
              fontSize="19.5"
              letterSpacing="0.4px"
            >
              windows and doors
            </text>
          </g>
        )}
      </svg>
    </div>
  );
};
