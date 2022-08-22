import { Table, Model, Column, DataType } from "sequelize-typescript";

@Table({
    timestamps: true,
    tableName: "queue",
})
export class QueueModel extends Model {
    @Column({
        type: DataType.STRING
    })
    operation_id: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    filename!: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    convert_to!: string;

    @Column({
        type: DataType.STRING
    })
    status: string;
}
