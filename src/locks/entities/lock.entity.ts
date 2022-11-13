import { Column, PrimaryGeneratedColumn } from "typeorm";

export class Lock {

    @PrimaryGeneratedColumn('increment')
    lock_id: number;

    @Column()
    account_id: number; // account_id para relacion entre tablas

    @Column()
    is_bg_lock: boolean; // bloqueo de bg

    @Column()
    start_date_bg_lock: Date; // desde

    @Column()
    end_date_bg_lock: Date; // hasta, null = para siempre

    @Column()
    is_woe_lock: boolean; // bloqueo de mapas de woe

    @Column()
    start_date_woe_lock: Date; // desde

    @Column()
    end_date_woe_lock: Date; // hasta, null = para siempre

    @Column()
    is_ban: boolean; // baneo

    @Column()
    start_date_ban: Date;  // desde
    
    @Column()
    end_date_ban: Date; // hasta, null = para siempre
    
    @Column()
    admin: string; // que admin realiza ultima operación
    
    @Column()
    created_at: Date; // fecha registro
    
    @Column()
    updated_at: Date; // fecha última actualización
}