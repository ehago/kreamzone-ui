import React from 'react';
import * as AppIcons from './svg';

export type AppIconType = keyof typeof AppIcons;
export interface IAppIconProps {
  type: AppIconType;
  style?: React.CSSProperties;
  className?: string;
  onClick?: () => void;
}

function AppIcon({ type, style, className, onClick }: IAppIconProps) {
  return React.createElement(AppIcons[type], { style, className, onClick });
}

export default AppIcon;
