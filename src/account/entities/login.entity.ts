import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity('login')
export class Login {
    @PrimaryGeneratedColumn('increment')
    account_id: number;

    @Column({ unique: true })
    userid: string;

    @Column()
    user_pass: string;

    @Column()
    sex: string;

    @Column()
    email: string;

    @Column()
    group_id: number;

    @Column()
    state: number;

    @Column()
    unban_time: number;

    @Column()
    expiration_time: number;

    @Column()
    logincount: number;

    @Column({ type: 'time' })
    lastlogin: Date;

    @Column()
    last_ip: string;

    @Column({ type: 'time' })
    birthdate: Date;

    @Column()
    character_slots: number;

    @Column()
    pincode: string;

    @Column()
    pincode_change: number;

    @Column()
    vip_time: number;

    @Column()
    old_group: number;

    @Column()
    web_auth_token: string;

    @Column()
    web_auth_token_enabled: number;
}
