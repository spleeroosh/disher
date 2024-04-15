import { Module } from '@nestjs/common';
import { RecipesService } from './recipes.service';
import { Recipes } from './recipes';
import { RecipesController } from './recipes.controller';

@Module({
  providers: [RecipesService, Recipes],
  controllers: [RecipesController],
})
export class RecipesModule {}
