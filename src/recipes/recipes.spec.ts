import { Test, TestingModule } from '@nestjs/testing';
import { Recipes } from './recipes';

describe('Recipes', () => {
  let provider: Recipes;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Recipes],
    }).compile();

    provider = module.get<Recipes>(Recipes);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
