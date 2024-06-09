import { IRegionInformations } from "../../types/interfaces";

const RegionInformations = ({
  name,
  description,
  points,
}: IRegionInformations) => {
  return (
    <>
      <div>
        <h1 className="font-semibold text-2xl">{name}</h1>
        <div className="flex gap-4 text-sm text-gray-400">
          {points.map((point, idx) => (
            <div>
              <span key={idx}>{point}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 h-[130px]">
        <span className="text-sm text-gray-500">{description}</span>
      </div>
    </>
  );
};

export default RegionInformations;
