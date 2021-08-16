import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from "typeorm";
import { Movie } from "./Movie";
import { validate, validateOrReject, Length, IsDate } from "class-validator";

@Entity()
export class Actor {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  @Length(6, 30)
  full_name!: string;

  @Column()
  @IsDate()
  date_of_birth!: Date;

  @Column()
  image!: string;

  @ManyToMany((type) => Movie, (movie) => movie.actors)
  movies!: Movie[];
}
