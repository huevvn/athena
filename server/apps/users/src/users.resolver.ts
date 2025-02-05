import { Args, Context, Mutation, Resolver } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { RegisterResponse } from './types/user.type';
import { RegisterDto } from './dto/user.dto';
import { BadRequestException, Query } from '@nestjs/common';

@Resolver('User')
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Mutation(() => RegisterResponse)
  async register(
    @Args('registerInput') registerDto: RegisterDto,
  ): Promise<RegisterResponse> {
    if (
      !registerDto.fname ||
      !registerDto.lname ||
      !registerDto.email ||
      !registerDto.password ||
      !registerDto.role
    ) {
      throw new BadRequestException('All fields are required');
    }

    const user = await this.usersService.register(registerDto);
    return { user };
  }
}
