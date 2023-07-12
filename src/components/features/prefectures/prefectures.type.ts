export type PrefectureResponse = {
  statusCode?: string;
  message: string | null;
  description?: string;
  result?: { prefCode: number; prefName: string }[];
};
