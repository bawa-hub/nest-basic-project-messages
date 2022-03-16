import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateMessgeDto } from './dtos/create-message.dto';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
  messageService: MessagesService;
  constructor() {
    //   service is creating its own dependencies
    // dont do this in real apps
    this.messageService = new MessagesService();
  }

  @Get()
  listMessages() {
    return this.messageService.findAll();
  }

  @Post()
  createMessage(@Body() body: CreateMessgeDto) {
    // console.log('body', body);

    return this.messageService.create(body.content);
  }

  @Get('/:id')
  getMessage(@Param('id') id: string) {
    console.log('id', id);

    return this.messageService.findOne(id);
  }
}
