import {
  Body,
  Controller,
  Put,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { BisnisOwnerService } from './bisnis-owner.service';
import { BisnisOwner } from './bisnis-owner.entity';
import { CreateBisnisOwnerDto } from './create-bisnis-owner.dto';
import { UpdateBisnisOwnerDto } from './update-bisnis-owner.dto';
import { JwtAuthGuard } from 'src/access-console/guards/jwt-auth.guard';

@Controller('bisnis_owners') // Rute API
export class BisnisOwnerController {
  constructor(private readonly bisnisOwnerService: BisnisOwnerService) {}

  // Endpoint GET untuk mengambil seluruh data bisnis_owners
  @Get()
  @UseGuards(JwtAuthGuard)
  async getAllBisnisOwners(): Promise<BisnisOwner[]> {
    return this.bisnisOwnerService.findAll();
  }

  //  membuat api post
  @Post()
  @UseGuards(JwtAuthGuard)
  async create(@Body() createDto: CreateBisnisOwnerDto): Promise<BisnisOwner> {
    return this.bisnisOwnerService.create(createDto);
  }

  // fungsi DELETE
  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  async delete(@Param('id') id: number): Promise<{ massage: string }> {
    const result = await this.bisnisOwnerService.delete(Number(id));

    if (!result) {
      throw new HttpException('Bisnis owner not found', HttpStatus.NOT_FOUND);
    }

    return { massage: 'Bisnis owner deleted successfully' };
  }

  // fungsi PUT@Put(':id')
  @Put(':id')
  @UseGuards(JwtAuthGuard)
  async update(
    @Param('id') id: number,
    @Body() updateDto: UpdateBisnisOwnerDto,
  ): Promise<BisnisOwner> {
    const updatedOwner = await this.bisnisOwnerService.update(id, updateDto);
    if (!updatedOwner) {
      throw new HttpException('Bisnis owner not found', HttpStatus.NOT_FOUND);
    }
    return updatedOwner;
  }
}
