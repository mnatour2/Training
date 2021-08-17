import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
} from "typeorm";
import { Actor } from "./Actor";
import { IsNotEmpty, Length } from "class-validator";

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
  country!: string;

  @Column()
  @IsNotEmpty()
  poster!: string;

  @ManyToMany((type) => Actor, (actor) => actor.movies)
  @JoinTable()
  actors!: Actor[];
}
