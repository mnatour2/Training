import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from "typeorm";
import { Movie } from "./Movie";

@Entity()
export class Actor {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  full_name!: string;

  @Column()
  date_of_birth!: Date;

  @Column()
  image!: string;

  @ManyToMany((type) => Movie, (movie) => movie.actors)
  movies!: Movie[];
}
