export interface CardData {
  image : string,
  status: statusChar,
  name: string,
  origin: any,
  episode: any
}

export enum statusChar {
  'Alive' = 'Vivo',
  'Dead' = 'Morto',
  'Unknown' = 'Desconhecido'
}
