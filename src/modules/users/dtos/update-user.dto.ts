import { IsEmail,  IsNotEmpty, IsString , IsOptional} from "class-validator";
// import { IsEmail, IsEmpty, IsEnum, IsInt, IsNotEmpty, IsString, Length, MaxLength, Min, MinLength } from "class-validator";

export class UpdateUserDto{

    @IsEmail()
    @IsOptional()
    email: string


    @IsString()
    @IsOptional()
    password: string
}