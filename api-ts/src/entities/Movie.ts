import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
} from "typeorm";
import { Actor } from "./Actor";
import { User } from "./User";
import { validate, validateOrReject, Length, IsFQDN } from "class-validator";

@Entity()
export class Movie {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  @Length(6, 30)
  name!: string;

  @Column()
  year!: string;

  @Column()
  @IsFQDN()
  country!: string;

  @Column()
  poster!: string;

  @ManyToMany((type) => Actor, (actor) => actor.movies)
  @JoinTable()
  actors!: Actor[];
}
