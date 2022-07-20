import { Module } from '@nestjs/common';
import { StoryService } from './story.service';
import { StoryResolver } from './story.resolver';

@Module({
  providers: [StoryResolver, StoryService]
})
export class StoryModule {}
