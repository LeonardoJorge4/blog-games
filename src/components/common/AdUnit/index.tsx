interface AdUnitProps {
  className?: string;
  variant?: 'horizontal' | 'vertical' | 'square';
}

const AdUnit = ({ className, variant = 'horizontal' }: AdUnitProps) => {
  const dimensions = {
    horizontal: 'h-[90px] md:h-[250px] w-full', // 728x90 ou 970x250
    vertical: 'h-[600px] w-[160px] md:w-[300px]', // 160x600 ou 300x600
    square: 'h-[250px] w-[300px]', // 300x250
  };

  return (
    <div
      className={`flex items-center justify-center bg-muted/50 ${dimensions[variant]} ${className}`}
      role="complementary"
      aria-label="Anúncio"
    >
      <p className="text-sm text-muted-foreground">Espaço Publicitário</p>
    </div>
  );
};

export default AdUnit; 