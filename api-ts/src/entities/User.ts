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
import {
  validate,
  validateOrReject,
  Contains,
  IsInt,
  Length,
  IsEmail,
  IsFQDN,
  IsDate,
  Min,
  Max,
} from "class-validator";

const SALT_ROUNDS = 10;

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  @Length(6, 30)
  username!: string;

  @Column({ select: false })
  @Min(8)
  password!: string;

  @Column()
  @IsEmail()
  email!: string;

  @Column()
  @Length(10, 10)
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
