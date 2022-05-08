export type IconProps = {
  isActive?: boolean;
  style?: React.CSSProperties;
} & React.SVGProps<SVGSVGElement>;

export type IconComponent = React.FC<IconProps>;
