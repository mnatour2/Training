import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
} from "typeorm";
import { Movie } from "./Movie";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  username!: string;

  @Column()
  password!: string;

  @Column()
  email!: string;

  @Column({
    length: 10,
  })
  mobile!: string;

  @Column()
  profile_picture!: string;

  @ManyToMany((type) => Movie)
  @JoinTable({
    name: "users_favorites",
  })
  movies!: Movie[];
}
