import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateMessgeDto } from './dtos/create-message.dto';

@Controller('messages')
export class MessagesController {
  @Get()
  listMessages() {
    return 'all messges';
  }

  @Post()
  createMessage(@Body() body: CreateMessgeDto) {
    console.log('body', body);

    return 'messgse added';
  }

  @Get('/:id')
  getMessage(@Param('id') id: string) {
    console.log('id', id);

    return 'single msg';
  }
}
