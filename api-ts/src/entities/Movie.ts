import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
} from "typeorm";
import { Actor } from "./Actor";
import { User } from "./User";

@Entity()
export class Movie {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column()
  year!: string;

  @Column()
  country!: string;

  @Column()
  poster!: string;

  @ManyToMany((type) => Actor, (actor) => actor.movies)
  @JoinTable()
  actors!: Actor[];
}
