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
import { Length, IsEmail, IsNotEmpty } from "class-validator";

const SALT_ROUNDS = 10;

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  @Length(6, 30)
  username!: string;

  @Column({ select: false })
  @Length(8, 32)
  password!: string;

  @Column()
  @IsEmail()
  email!: string;

  @Column()
  @Length(10, 10)
  mobile!: string;

  @Column()
  @IsNotEmpty()
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
