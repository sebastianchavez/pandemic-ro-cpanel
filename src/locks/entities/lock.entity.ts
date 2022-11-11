export class Lock {
    account_id: number; // account_id para relacion entre tablas
    isBgLock: boolean; // bloqueo de bg
    startDateBgLock: Date; // desde
    endDateBgLock: Date; // hasta, null = para siempre
    isWoeLock: boolean; // bloqueo de mapas de woe
    startDateWoeLock: Date; // desde
    endDateWoeLock: Date; // hasta, null = para siempre
    isBan: boolean; // baneo
    startDateBan: Date;  // desde
    endDateBan: Date; // hasta, null = para siempre
    admin: string; // que admin realiza ultima operación
    createdAt: Date; // fecha registro
    updatedAt: Date; // fecha última actualización
}