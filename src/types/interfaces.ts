export interface IHiglight {
  image: any;
  title: string;
  additionalInfo: string;
  curator: boolean;
  rate?: number;
}

export interface IStopPlace {
  image: any;
  title: string;
  rate?: number;
  additionalInfo: string;
  curator: boolean;
}

export interface IRegion {
  name: string;
  points: string[];
  description: string;
  higlights: IHiglight[];
  stopPlaces: IStopPlace[];
}

export interface IRegionInformations {
  name: string;
  points: string[];
  description: string;
}

export interface InformayionsRegionTittleWithCarouselProps {
  label: string;
  data: IHiglight[] | IStopPlace[];
  button?: any;
}
