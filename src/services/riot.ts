import { BASE_DRAGON_URL } from "../config/riot";

export interface Data<T> {
    type:    Type;
    format:  string;
    version: Version;
    data:    T;
}

export interface Info {
  attack:     number;
  defense:    number;
  magic:      number;
  difficulty: number;
}

export interface Champion {
  id:          string;
  key:         string;
  name:        string;
  title:       string;
  image:       Image;
  skins:       Skin[];
  lore:        string;
  blurb:       string;
  allytips:    string[];
  enemytips:   string[];
  tags:        string[];
  partype:     string;
  info:        Info;
  stats:       { [key: string]: number };
  spells:      Spell[];
  passive:     Passive;
  recommended: any[];
}

export interface Passive {
  name:        string;
  description: string;
  image:       Image;
}

export interface Skin {
  id:      string;
  num:     number;
  name:    string;
  chromas: boolean;
}

export interface Datavalues {
}

export interface Leveltip {
    label:  string[];
    effect: string[];
}

export interface ChampionReduced {
    version: Version;
    id:      string;
    key:     string;
    name:    string;
    title:   string;
    blurb:   string;
    info:    Info;
    image:   Image;
    tags:    Tag[];
    partype: string;
    stats:   { [key: string]: number };
}

export interface Image {
    full:   string;
    sprite: Sprite;
    group:  Type;
    x:      number;
    y:      number;
    w:      number;
    h:      number;
}

export enum Type {
    Champion = "champion",
}

export enum Sprite {
    Champion0PNG = "champion0.png",
    Champion1PNG = "champion1.png",
    Champion2PNG = "champion2.png",
    Champion3PNG = "champion3.png",
    Champion4PNG = "champion4.png",
    Champion5PNG = "champion5.png",
}

export enum Tag {
    Assassin = "Assassin",
    Fighter = "Fighter",
    Mage = "Mage",
    Marksman = "Marksman",
    Support = "Support",
    Tank = "Tank",
}

export interface Spell {
  id:           string;
  name:         string;
  description:  string;
  tooltip:      string;
  leveltip:     Leveltip;
  maxrank:      number;
  cooldown:     number[];
  cooldownBurn: string;
  cost:         number[];
  costBurn:     string;
  datavalues:   Datavalues;
  effect:       Array<number[] | null>;
  effectBurn:   Array<null | string>;
  vars:         any[];
  costType:     string;
  maxammo:      string;
  range:        number[];
  rangeBurn:    string;
  image:        Image;
  resource:     string;
}

export enum Version {
    The1311 = "13.1.1",
}

const baseURL = `${BASE_DRAGON_URL}/13.1.1/data/en_US`

function fetchRiot(path: string) {
    return fetch(`${baseURL}/${path}`)
}

export async function getChampions(): Promise<Data<{ [key: string]: ChampionReduced }>['data']> {
    const championsRes = await fetchRiot(`champion.json`)
    const { data } = (await championsRes.json());

    return data;
}

export async function getChampion(name: string): Promise<Data<Champion>['data']> {
  const championsRes = await fetchRiot(`champion/${name}.json`)
  const { data } = (await championsRes.json());
  return data[name];
}