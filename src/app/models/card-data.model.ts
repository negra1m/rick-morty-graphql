import { CharacterStatus } from "./status.model";

export interface CardData {
  image : string,
  status: CharacterStatus,
  name: string,
  origin: string,
  episode: any
}
