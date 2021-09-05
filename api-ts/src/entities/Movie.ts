import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
} from "typeorm";
import { Actor } from "./Actor";
import { IsNotEmpty, Length } from "class-validator";
import { IsCountry } from "../Util/is-country";

@Entity()
export class Movie {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  @Length(2, 30)
  name!: string;

  @Column()
  @Length(4, 4)
  year!: string;

  @Column()
  @IsNotEmpty()
  @IsCountry()
  country!: string;

  @Column()
  @IsNotEmpty()
  poster!: string;

  @ManyToMany((type) => Actor, (actor) => actor.movies)
  @JoinTable()
  actors!: Actor[];
}
