/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Param, Delete, Patch } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.createUser(createUserDto);
  }

  @Get()
  findAll() {
    return this.usersService.findAllUser();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const user = await this.usersService.findOneUser(+id);
    // const usuario = await user;
    if(!user) {
      return {error: 'nao tem usuário'};
    }
     
    return { nome: user.nome, idade: user.idade};      
  }
  
  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    const existentUser = await this.usersService.findOneUser(+id);
    if(!existentUser) {
      return { error: 'nao tem usuário'}
    }

    const user = await this.usersService.updateUser(+id, updateUserDto);
    return user;
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const existentUser = await this.usersService.findOneUser(+id);
    if(!existentUser) {
      return { error: 'nao tem usuário'}
    }
    await this.usersService.removeUser(+id);
    
    return { message: 'Usuário excluído com sucesso'}
  }
}
