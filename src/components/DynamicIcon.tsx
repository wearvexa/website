import { icons, LucideProps } from "lucide-react";

interface DynamicIconProps extends LucideProps {
  name: string | undefined;
}

export default function DynamicIcon({ name, ...props }: DynamicIconProps) {
  if (!name) return null;

  const Icon = icons[name as keyof typeof icons];

  if (!Icon) {
    return null;
  }

  return <Icon {...props} />;
}
