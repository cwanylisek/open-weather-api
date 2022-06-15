export interface List {
  dt: number,
  main: {
    [key: string]: number
  }
  weather: [
    {
      id: 804,
      main: string,
      description: string,
      icon: string
    }
  ],
  clouds: {
    all: number
  },
  wind: {
    speed: number,
    deg: number,
    hust: number
  },
  visibility: number,
  pop: number,
  sys: {
    [key: string]: string
  },
  dt_txt: string
}


export interface WeatherData {
  cnt: number,
  cod: string,
  message: number,
  city: {
    id: number,
    name: string,
    coord: {
      lat: number,
      lon: number
    },
    country: string,
    population: number,
    timezone: number,
    sunrise: number,
    sunset: number,
  },
  list: List[],
}
