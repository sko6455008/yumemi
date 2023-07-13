export type PopulationResponse = {
  statusCode?: string;
  message: string | null;
  result?: {
    boundaryYear: number;
    data: { label: string; data: { year: number; value: number }[] }[];
  };
};
