export class Lock {
    account_id: number; // account_id para relacion entre tablas
    is_bg_lock: boolean; // bloqueo de bg
    start_date_bg_lock: Date; // desde
    end_date_bg_lock: Date; // hasta, null = para siempre
    is_woe_lock: boolean; // bloqueo de mapas de woe
    start_date_woe_lock: Date; // desde
    end_date_woe_lock: Date; // hasta, null = para siempre
    is_ban: boolean; // baneo
    start_date_ban: Date;  // desde
    end_date_ban: Date; // hasta, null = para siempre
    admin: string; // que admin realiza ultima operación
    created_at: Date; // fecha registro
    updated_at: Date; // fecha última actualización
}