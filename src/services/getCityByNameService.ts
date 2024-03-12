import { api } from "./api";

export interface CityProps {
  id: string,
  name: string,
  longitude: number,
  latitude: number,
}

export interface CityAPIResponse {
  id: string,
  name: string,
  sys: {
    country?: string
  },
  coord: {
    lon: number,
    lat: number
  }
}

// a promise é definida de forma explicita 
export async function getCityByNameService(name: string): Promise<CityProps[]> { // definir no final da função ira indicar o retorno desta
  try {
    const { data } = await api.get<CityAPIResponse>(`/weather?q=${name}`);

    const city = {
      id: data.id,
      name: data.sys.country ? `${data.name}, ${data.sys.country}` : data.name,
      longitude: data.coord.lon,
      latitude: data.coord.lat,
    };

    return [city];
  } catch (error) {
    return [];
  }
}