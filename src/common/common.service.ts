import {BadRequestException, Injectable, InternalServerErrorException, Logger} from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
 
@Injectable()
export class CommonService {
    private readonly logger = new Logger('ErrorHandleService');
    constructor(
        @InjectDataSource()
        private readonly dataSource: DataSource,
    ) {}

    public find(table: string, options?: Object) {
        let query = `SELECT * FROM ${table}`;
      
        if (options && Object.keys(options).length > 0) {
          query += ' WHERE ';
      
          const conditions = [];
      
          for (const [key, value] of Object.entries(options)) {
            conditions.push(`${key} = '${value}'`);
          }
      
          query += conditions.join(' AND ');
        }
      
        return this.dataSource.query(query);
    }

    public findById(table: string, id: number) {
        let query = `SELECT * FROM ${table} WHERE id = '${id}'`;
        return this.dataSource.query(query);
    }

    public delete(table: string, options: Object) {
        let query = `DELETE FROM ${table}`;

        if (options && Object.keys(options).length > 0) {
            query += ' WHERE ';

            const conditions = [];

            for (const [key, value] of Object.entries(options)) {
            conditions.push(`${key} = ${value}`);
            }

            query += conditions.join(' AND ');
        }
    
        return this.dataSource.query(query);
      }
    
    public errorHandle(error: any){
        if(error.code === '23505')
            throw new BadRequestException(error.detail);
        this.logger.error(error);
        throw new InternalServerErrorException('Unexpected Error');
    }
}