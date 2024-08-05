import { DiseaseOutbreaks as TDiseaseOutbreaks } from "../api/diseaseOutbreaks/DiseaseOutbreaks";

export const DISEASEOUTBREAKS_TITLE_FIELD = "dobDiseaseName";

export const DiseaseOutbreaksTitle = (record: TDiseaseOutbreaks): string => {
  return record.dobDiseaseName?.toString() || String(record.id);
};
