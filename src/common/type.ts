export type ApiResponse = {
  statusCode?: string;
  message: string | null;
  description?: string;
  result?: Prefectures[];
};

export type Prefectures = {
  prefCode: number;
  prefName: string;
};

export type PopulationResponse = {
  statusCode?: string;
  message: string | null;
  result?: {
    boundaryYear: number;
    data: { label: string; data: { year: number; value: number }[] }[];
  };
};
