import React from 'react';
import * as AppIcons from './svg';

export type AppIconType = keyof typeof AppIcons;
export interface IAppIconProps {
  type: AppIconType;
  style?: React.CSSProperties;
  onClick?: () => void;
}

function AppIcon({ type, style, onClick }: IAppIconProps) {
  return React.createElement(AppIcons[type], { style, onClick });
}

export default AppIcon;
