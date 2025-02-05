import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { LoginDto, RegisterDto } from './dto/user.dto';

@Injectable()
export class UsersService {
  constructor(
    private readonly jwtService: JwtService,
    // private readonly prismaService: PrismaService,
    private readonly configService: ConfigService,
  ) {}

  // User Registration
  async register(registerDto: RegisterDto) {
    const { fname, lname, email, password, role } = registerDto;
    const user = {
      data: {
        fname,
        lname,
        email,
        password,
        role,
      },
    };
    return user;
  }

  // User Login
  async login(loginDto: LoginDto) {
    const { email, password } = loginDto;
    const user = {
      data: {
        email,
        password,
      },
    };
    return user;
  }

  // get all users service
  async getAllUsers() {
    const users = [];
    return users;
  }
}
