interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    className?: string;
}

export default function Card({ children, className, ...props}: CardProps) {
    return (
        <div className={`shadow-md rounded-lg p-6 ${className}`} {...props}>
            {children}
        </div>
    );
};

Card.Header = function CardHeader({ children, className, ...props }: CardProps) {
    return (
        <div className={`text-lg font-semibold mb-4 ${className}`} {...props}>
            {children}
        </div>
    );
};

Card.Content = function CardContent({ children, className, ...props }: CardProps) {
    return (
        <div className={`text-primary ${className}`} {...props}>
            {children}
        </div>
    );
};

Card.Footer = function CardFooter({ children, className }: CardProps) {
  return (
    <div className={`p-6 pt-0 ${className}`}>
      {children}
    </div>
  );
};