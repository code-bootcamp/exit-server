import { Injectable } from "@nestjs/common";

@Injectable()
export class KeywordsService {
  create({createKeywordInput}) {
    return "This action adds a new keyword";
  }

  findAll() {
    return `This action returns all keywords`;
  }

  findOne(id: string) {
    return `This action returns a #${id} keyword`;
  }

  update({keywordId, updateKeywordInput}) {
    return 
  }

  remove(id: string) {
    return `This action removes a #${id} keyword`;
  }
}
