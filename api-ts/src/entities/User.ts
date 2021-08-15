import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
  BeforeInsert,
  BeforeUpdate,
} from "typeorm";
import { Movie } from "./Movie";
import bcrypt from "bcrypt";

const SALT_ROUNDS = 10;

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  username!: string;

  @Column({ select: false })
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

  @BeforeInsert()
  @BeforeUpdate()
  async hashPassword() {
    if (this.password) {
      this.password = await bcrypt.hash(this.password, SALT_ROUNDS);
    }
  }
}
