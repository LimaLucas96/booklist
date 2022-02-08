
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from './user.entity';
import { UserService } from './user.service';

@Resolver('User')
export class UserResolver {
    constructor(
        private usrService: UserService
    ) { }

    @Query(() => [User])
    async users(): Promise<User[]> {
        const users = await this.usrService.findAllUsers();
        return users;
    }

    @Query(() => User)
    async user(@Args('id') id: string): Promise<User> {
        const user = await this.usrService.findUserById(id);
        return user;
    }

    @Mutation(() => User)
    async updateUser(@Args('id') id: string, @Args('data') data: UpdateUserInput): Promise<User> {
        const user = await this.usrService.updateUser(id, data);

        return user;
    }

    @Mutation(() => Boolean)
    async deleteUser(@Args('id') id: string): Promise<Boolean> {
        const deleted = await this.usrService.deleteUser(id);
        return deleted;
    }
    @Mutation(() => User)
    async createUser(
        @Args('data') data: CreateUserInput
    ): Promise<User> {
        const user = await this.usrService.createUser(data);
        return user;
    }
}
