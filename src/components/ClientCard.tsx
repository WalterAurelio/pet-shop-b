type ClientCardProps = {
  image?: string;
  name?: string;
  className?: string;
};

function ClientCard({ image, name = "Nombre", className }: ClientCardProps) {
  return (
    <div className={`min-w-50 lg:min-w-75 ${className}`}>
      {image ? (
        <img src={image} alt={`Foto de ${name}`} className="aspect-3/4 rounded-border-l object-cover object-center" />
      ) : (
        <div className="flex aspect-3/4 items-center justify-center rounded-border-l bg-neutral-disabled">No hay imagen</div>
      )}

      <p className="pl-s font-serif text-h5 text-(--deep-green)">{name}</p>
    </div>
  );
}
export default ClientCard;
