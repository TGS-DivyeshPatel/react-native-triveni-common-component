import { APIUtils, createAppLogger, type LogMessage } from "react-native-triveni-common-component";

const networkTransport = async (msg: LogMessage) => {
    if (msg.level.text == 'debug') return
    // Handle API call failures or other error logs
}

export var LOG = createAppLogger({
    fileName: "app_logs.txt",
    networkTransport,
    severity: "debug"
});

export const apiUtils = new APIUtils({
    baseURL: "https://jsonplaceholder.typicode.com",
    getAccessToken: undefined,
    getRefreshToken: undefined,
    logger: LOG,
    handleLogout: () => {
        // Handle user logout
    },
    i18n: undefined,
    isShowAlertOnError: false,
});

