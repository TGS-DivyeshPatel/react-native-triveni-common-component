import { logger, consoleTransport, fileAsyncTransport } from "react-native-logs";
import RNFS from "react-native-fs";
import moment from "moment";

export type LogMessage = {
    level: {
        text: string;
    };
    msg: string;
};

export interface AppLogger {
    debug: (...args: any[]) => void;
    info: (...args: any[]) => void;
    warn: (...args: any[]) => void;
    error: (...args: any[]) => void;
}

type CreateLoggerParams = {
    fileName?: string; // "app_logs.txt" OR "logs/app_logs.txt"
    enableConsole?: boolean;
    enableFile?: boolean;
    networkTransport?: (msg: LogMessage) => void | Promise<void>;
    severity?: "debug" | "info" | "warn" | "error";
};

const LOG_FOLDER = `${RNFS.DocumentDirectoryPath}/logs/`;

let internalLogger: AppLogger | null = null;
let currentLogFilePath: string | null = null;

export const createAppLogger = ({
    fileName,
    enableConsole = true,
    enableFile = true,
    networkTransport,
    severity = "debug",
}: CreateLoggerParams): AppLogger => {
    const transports: any[] = [];

    if (enableConsole) transports.push(consoleTransport);
    if (enableFile) transports.push(fileAsyncTransport);
    if (networkTransport) transports.push(networkTransport);

    // Normalize file name
    const normalizedFileName =
        fileName?.replace(/^logs\//, "") ??
        `app_logs_${moment().format("YYYY-MM-DD")}.txt`;

    currentLogFilePath = `${LOG_FOLDER}${normalizedFileName}`;

    const loggerInstance = logger.createLogger({
        severity,
        transport: transports,
        transportOptions: {
            FS: RNFS,
            fileName: "logs/" + normalizedFileName,
            colors: {
                debug: "blue",
                info: "green",
                warn: "yellow",
                error: "redBright",
            },
        },
    });

    // Hide private members from TypeScript (.d.ts safe)
    internalLogger = loggerInstance as unknown as AppLogger;
    return internalLogger;
};

export const getCurrentLogFilePath = (): string => currentLogFilePath ?? "";

export const makeLogFolder = async () => {
    const exists = await RNFS.exists(LOG_FOLDER);
    if (!exists) {
        await RNFS.mkdir(LOG_FOLDER);
    }
};

export const deleteLogFile = async () => {
    try {
        const exists = await RNFS.exists(LOG_FOLDER);
        if (!exists) return;
        const files = await RNFS.readDir(LOG_FOLDER);
        for (const file of files) {
            if (file.isFile()) {
                await RNFS.unlink(file.path);
                __DEV__ && console.log("Deleted log file:", file.name);
            }
        }
        // reset current log reference
        currentLogFilePath = null;
    } catch (err: any) {
        __DEV__ && console.log("Delete all logs error:", err.message);
    }
}
