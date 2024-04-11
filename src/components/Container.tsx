import { cn } from "@/lib/utils";

interface ContainerProps {
  children?: React.ReactNode;
  className?: string;
}

const Container = (props: ContainerProps) => {
  return <div className={cn("px-8", props.className)}>{props.children}</div>;
};

export default Container;
