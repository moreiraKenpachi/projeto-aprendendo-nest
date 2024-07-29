/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private readonly userRepository: Repository<User>) {}

  createUser(createUserDto: CreateUserDto): Promise<User> {

    const user: User = new User();

    user.nome = createUserDto.nome;
    user.idade = createUserDto.idade;

    return this.userRepository.save(user);
  }

  findAllUser(): Promise<User[]> {
    return this.userRepository.find();
  }
  
  findOneUser(id: number): Promise<User> {    
    const user = this.userRepository.findOneBy({id});
    
    return user;
  }  

  updateUser(id: number, updateUserDto: UpdateUserDto): Promise<User> {
    const user: User = new User();
    
    user.nome = updateUserDto.nome;
    user.idade = updateUserDto.idade;
    user.id = id; 

    return this.userRepository.save(user);
     
  }
  
  removeUser(id: number): Promise<{affected?: number}> {

    return this.userRepository.delete(id);
  }
}
