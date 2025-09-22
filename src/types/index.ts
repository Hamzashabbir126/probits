export interface PageProps {
  className?: string;
}

export interface ComponentProps {
  children?: React.ReactNode;
  className?: string;
}

export interface ButtonProps extends ComponentProps {
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
}

export interface HeroSectionProps extends ComponentProps {
  title: string;
  subtitle?: string;
  backgroundImage: string;
  overlayColor?: string;
}

export interface InfoBannerProps extends ComponentProps {
  items: string[];
  backgroundColor?: string;
  textColor?: string;
  iconSrc?: string;
}