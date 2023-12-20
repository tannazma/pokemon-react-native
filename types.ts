interface AbilityDetail {
  name: string;
  url: string;
}

interface Ability {
  ability: AbilityDetail;
  is_hidden: boolean;
  slot: number;
}

interface Form {
  name: string;
  url: string;
}

interface GameIndexVersion {
  name: string;
  url: string;
}

interface GameIndex {
  game_index: number;
  version: GameIndexVersion;
}

interface ItemDetail {
  name: string;
  url: string;
}

interface Version {
  name: string;
  url: string;
}

interface VersionDetails {
  rarity: number;
  version: Version;
}

interface HeldItems {
  item: ItemDetail;
  version_details: VersionDetails[];
}

interface MoveDetail {
  name: string;
  url: string;
}

interface MoveLearnMethod {
  name: string;
  url: string;
}

interface VersionGroup {
  name: string;
  url: string;
}

interface VersionGroupDetails {
  level_learned_at: number;
  move_learn_method: MoveLearnMethod;
  version_group: VersionGroup;
}

interface Moves {
  move: MoveDetail;
  version_group_details: VersionGroupDetails[];
}

interface Species {
  name: string;
  url: string;
}

interface Stat {
  name: string;
  url: string;
}

export interface Stats {
  base_stat: number;
  effort: number;
  stat: Stat;
}

export interface TypeDetails {
  name: string;
  url: string;
}

export interface Types {
  slot: number;
  type: TypeDetails;
}

export interface Pokemon {
  name: string;
  url: string;
  //   abilities: Ability[];
  //   base_experience: number;
  //   forms: Form[];
  //   game_indices: GameIndex[];
  //   height: number;
  //   held_items: HeldItems[];
  //   id: number;
  //   is_default: boolean;
  //   location_area_encounters: string;
  //   moves: Moves[];
  //   name: string;
  //   order: number;
  //   past_abilities: [];
  //   past_types: [];
  //   species: Species;
  //   sprites: any; // Keeping 'any' as the type due to complex nested structure
  //   stats: Stats[];
  types: Types[];
  //   weight: number;
}
