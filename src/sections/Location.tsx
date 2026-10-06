import SectionTitle from "../components/SectionTitle";
import MapPin from "../assets/icon/MapPin.svg?react";
import Clock from "../assets/icon/Clock.svg?react";
import Phone from "../assets/icon/Phone.svg?react";

function Location() {
  return (
    <div>
      <SectionTitle className="mb-10">Encontranos en Hurlingham</SectionTitle>

      <div className="flex flex-col items-center gap-l lg:flex-row lg:gap-10">
        <div className="aspect-157/88 w-full rounded-full bg-neutral-disabled lg:max-w-190"></div>

        <div className="flex flex-wrap gap-m pl-l lg:flex-col">
          <div className="flex items-center gap-s">
            <MapPin className="size-6 text-(--salvia-green)" />
            <p className="text-base font-semibold text-neutral-secondary">Lorem ipsum</p>
          </div>
          <div className="flex items-center gap-s lg:pl-xs">
            <Clock className="size-6 text-(--salvia-green)" />
            <p className="text-base font-semibold text-neutral-secondary">Lorem ipsum</p>
          </div>
          <div className="flex items-center gap-s">
            <Phone className="size-6 text-(--salvia-green)" />
            <p className="text-base font-semibold text-neutral-secondary">Lorem ipsum</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Location;
