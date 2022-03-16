import { MessagesRepository } from './messages.repository';

export class MessagesService {
  messageRepository: MessagesRepository;
  constructor() {
    //   service is creating its own dependencies
    // dont do this in real apps
    this.messageRepository = new MessagesRepository();
  }

  findOne(id: string) {
    return this.messageRepository.findOne(id);
  }

  findAll() {
    return this.messageRepository.findAll();
  }

  create(content: string) {
    return this.messageRepository.create(content);
  }
}
