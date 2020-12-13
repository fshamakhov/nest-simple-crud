import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { Cat } from './entities/cat.entity';

@Injectable()
export class CatsService {
  private lastCatId = 0;
  private cats: Cat[] = [];

  create(createCatDto: CreateCatDto) {
    const id = this.lastCatId + 1;
    const cat = { id, ...createCatDto };
    this.cats.push(cat);
    this.lastCatId = id;
    return cat;
  }

  findAll() {
    return this.cats;
  }

  findOne(id: number) {
    const cat = this.cats.find((c) => c.id === id);
    if (!cat) throw new NotFoundException('Cat not found');
    return cat;
  }

  update(id: number, updateCatDto: UpdateCatDto) {
    this.cats = this.cats.map((c) =>
      c.id === id ? { ...c, ...updateCatDto } : c,
    );
    const cat = this.cats.find((c) => c.id === id);
    if (!cat) throw new NotFoundException('Cat not found');
    return cat;
  }

  remove(id: number) {
    const cat = this.cats.find((c) => c.id === id);
    this.cats = this.cats.filter((c) => c.id !== id);
    return cat;
  }
}
