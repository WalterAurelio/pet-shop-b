type ClientCardProps = {
  image?: string;
  name?: string;
};

function ClientCard({ image, name = "Nombre" }: ClientCardProps) {
  return (
    <div>
      {image ? (
        <img src={image} alt={`Foto de ${name}`} className="aspect-3/4 h-[266.667px] rounded-border-l object-cover object-center lg:h-100" />
      ) : (
        <div className="flex aspect-3/4 h-[266.667px] items-center justify-center rounded-border-l bg-neutral-disabled lg:h-100">No hay imagen</div>
      )}

      <p className="pl-s font-serif text-h5 text-(--deep-green)">{name}</p>
    </div>
  );
}
export default ClientCard;
