import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreatePosts1625790257778 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table({
          name: "posts",
          columns: [
            {
              name: "id",
              type: "uuid",
              isPrimary: true
            },
            {
              name: "title",
              type: "varchar"
            },
            {
              name: "content",
              type: "varchar"
            }
          ]
        })
      )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable("posts");
    }

}
