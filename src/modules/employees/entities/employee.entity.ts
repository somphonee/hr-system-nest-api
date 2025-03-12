import { Position } from "../../positions/entities/position.entity";
import { Department } from "../../departments/entities/department.entity";
import { Column, Entity, PrimaryGeneratedColumn ,ManyToOne,JoinColumn,CreateDateColumn,UpdateDateColumn} from 'typeorm';

@Entity('employees')
export class Employee {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 100 })
  firstName: string;

  @Column({ length: 100 })
  lastName: string;

  @Column({ unique: true, length: 50 })
  email: string;

  @Column({ select: false })
  password: string;

  @Column({ nullable: true })
  phoneNumber: string;

  @Column({ type: 'date' })
  dateOfBirth: Date;

  @Column({ type: 'date' })
  hireDate: Date;

  @Column({ nullable: true })
  departmentId: string;

  @Column({ nullable: true })
  positionId: string;

  @ManyToOne(() => Department, department => department.employees)
  @JoinColumn({ name: 'departmentId' })
  department: Department;

  @ManyToOne(() => Position, position => position.employees)
  @JoinColumn({ name: 'positionId' })
  position: Position;

  @Column({ default: true })
  isActive: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
