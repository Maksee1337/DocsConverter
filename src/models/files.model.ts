import { Table, Model, Column, DataType } from "sequelize-typescript";

@Table({
    timestamps: true,
    tableName: "files",
})
export class FilesModel extends Model {
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    originalname!: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    filename!: string;

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    size!: number;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    type!: string;
}
