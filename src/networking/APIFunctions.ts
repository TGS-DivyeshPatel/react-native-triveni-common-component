import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { Alert } from "react-native";
import type { AppLogger } from "../utils/LogConfig";

interface APIUtilsConfig {
    baseURL: string;
    accessToken?: string;
    refreshToken?: () => Promise<string>;
    handleLogout?: () => void;
    logger: AppLogger;
    i18n?: I18nAdapter;
    isShowAlertOnError?: boolean;
}

interface I18nAdapter {
    t: (key: string) => string;
}

export class APIUtils {
    private axiosInstance = axios.create({});
    private config: APIUtilsConfig;
    private isAlertShown = false;
    private isShowAlertOnError: boolean = true;

    constructor(config: APIUtilsConfig) {
        this.config = config;
        this.isShowAlertOnError = config.isShowAlertOnError ?? true; // default true
        this.axiosInstance.interceptors.request.use(
            this.handleRequest.bind(this),
            (error) => Promise.reject(error),
        );
        this.axiosInstance.interceptors.response.use(
            this.onResponse.bind(this),
            this.onResponseError.bind(this)
        );
    }

    private t(key: string, fallback: string) {
        return this.config.i18n?.t(key) ?? fallback;
    }

    private async handleRequest(config: any) {
        config.baseURL = this.config.baseURL;
        let accessToken = this.config.accessToken;
        if (accessToken) {
            const expired = await this.isTokenExpired(accessToken);
            if (expired) {
                accessToken = await this.config.refreshToken?.();
            }
        }

        if (accessToken) {
            config.headers["Authorization"] = `Bearer ${accessToken}`;
            this.config.logger.debug("Authorization Token:", "Bearer " + accessToken);
        } else {
            delete config.headers["Authorization"];
        }
        return config;
    }

    private onResponse(response: any) {
        const status = response?.data?.status;
        const isFailure =
            (typeof status === "boolean" && status === false) ||
            (typeof status === "string" && status.toLowerCase() === "failure");

        if (response?.status === 200 && isFailure && (!this.isAlertShown && this.isShowAlertOnError === true)) {
            this.isAlertShown = true;
            Alert.alert(
                this.t("fail", "Fail"),
                response.data?.message ?? "",
                [{
                    text: this.t("ok", "OK"),
                    onPress: () => (this.isAlertShown = false)
                }]
            );
        }
        return response;
    }

    private onResponseError(error: any) {
        this.config.logger.error("API Catch Error : ", JSON.stringify(error));
        // 401 – Session Expired
        if (error?.response?.status === 401 && (!this.isAlertShown && this.isShowAlertOnError === true)) {
            this.isAlertShown = true;
            this.config.handleLogout?.();

            Alert.alert(
                this.t("sessionTimeout", "Session Timeout"),
                this.t("sessionTimeoutMsg", "Please login again"),
                [{
                    text: this.t("ok", "OK"),
                    onPress: () => (this.isAlertShown = false)
                }]
            );
            return Promise.reject(error);
        }

        // 422 – Validation Error
        if (error?.response?.status === 422 && (!this.isAlertShown && this.isShowAlertOnError === true)) {
            this.isAlertShown = true;

            Alert.alert(
                this.t("warning", "Warning"),
                error?.response?.data?.message ??
                this.t("somethingWentWrong", "Something went wrong"),
                [{
                    text: this.t("ok", "OK"),
                    onPress: () => (this.isAlertShown = false)
                }]
            );
            return Promise.reject(error.response.data);
        }

        // Network Error
        if (
            (error?.code === "ERR_NETWORK" || error?.message?.includes("Network request failed")) &&
            (!this.isAlertShown && this.isShowAlertOnError === true)
        ) {
            this.isAlertShown = true;

            Alert.alert(
                this.t("noInternet", "No Internet"),
                this.t("noInternetTxt", "Please check your connection"),
                [{
                    text: this.t("ok", "OK"),
                    onPress: () => (this.isAlertShown = false)
                }]
            );
            return Promise.reject(error);
        }

        if (!this.isAlertShown && this.isShowAlertOnError === true) {
            this.isAlertShown = true;
            Alert.alert(
                this.t("warning", "Warning"),
                this.t("somethingWentWrong", "Something went wrong"),
                [{
                    text: this.t("ok", "OK"),
                    onPress: () => (this.isAlertShown = false)
                }]
            );
        }
        return Promise.reject(error);
    }

    isTokenExpired = async (accessToken: string) => {
        const decodedToken = jwtDecode(accessToken);
        const currentTime = Math.floor(Date.now() / 1000);
        if (decodedToken && decodedToken.exp) {
            return decodedToken.exp < currentTime;
        }
        return false;
    }

    // Generic API methods
    async GET(url: string) {
        try {
            const response = await this.axiosInstance.get(url);
            this.config.logger.debug("API RESPONSE =>", {
                method: "GET",
                apiURL: this.config.baseURL + url,
                statusCode: response.status,
                response: JSON.stringify(response.data),
                error: null
            });
            return response.data;
        } catch (error: any) {
            this.config.logger.error("API ERROR =>", {
                method: "GET",
                apiURL: this.config.baseURL + url,
                statusCode: error?.response?.status,
                response: null,
                error
            });
            throw error;
        }
    }

    async POST(url: string, params?: any) {
        try {
            const response = await this.axiosInstance.post(url, params || {});
            this.config.logger.debug("API RESPONSE =>", {
                method: "POST",
                apiURL: this.config.baseURL + url,
                statusCode: response.status,
                requestParams: JSON.stringify(params),
                response: JSON.stringify(response.data),
                error: null
            });
            return response.data;
        } catch (error: any) {
            this.config.logger.error("API ERROR =>", {
                method: "POST",
                apiURL: this.config.baseURL + url,
                statusCode: error?.response?.status,
                requestParams: JSON.stringify(params),
                response: null,
                error
            });
            throw error;
        }
    }

    async FORM_POST(url: string, params: any) {
        try {
            const response = await this.axiosInstance.post(url, params, {
                headers: { "Content-Type": "multipart/form-data" }
            });
            this.config.logger.debug("API RESPONSE =>", {
                method: "FORM_POST",
                apiURL: this.config.baseURL + url,
                statusCode: response.status,
                requestParams: JSON.stringify(params),
                response: JSON.stringify(response.data),
                error: null
            });
            return response.data;
        } catch (error: any) {
            this.config.logger.error("API ERROR =>", {
                method: "FORM_POST",
                apiURL: this.config.baseURL + url,
                statusCode: error?.response?.status,
                requestParams: JSON.stringify(params),
                response: null,
                error
            });
            throw error;
        }
    }

    async PUT(url: string, params: any) {
        try {
            const response = await this.axiosInstance.put(url, params);
            this.config.logger.debug("API RESPONSE =>", {
                method: "PUT",
                apiURL: this.config.baseURL + url,
                statusCode: response.status,
                requestParams: JSON.stringify(params),
                response: JSON.stringify(response.data),
                error: null
            });
            return response.data;
        } catch (error: any) {
            this.config.logger.error("API ERROR =>", {
                method: "PUT",
                apiURL: this.config.baseURL + url,
                statusCode: error?.response?.status,
                requestParams: JSON.stringify(params),
                response: null,
                error
            });
            throw error;
        }
    }

    async DELETE(url: string, params?: any) {
        try {
            const response = await this.axiosInstance.delete(url, { data: params });
            this.config.logger.debug("API RESPONSE =>", {
                method: "DELETE",
                apiURL: this.config.baseURL + url,
                statusCode: response.status,
                requestParams: JSON.stringify(params),
                response: JSON.stringify(response.data),
                error: null
            });
            return response.data;
        } catch (error: any) {
            this.config.logger.error("API ERROR =>", {
                method: "DELETE",
                apiURL: this.config.baseURL + url,
                statusCode: error?.response?.status,
                requestParams: JSON.stringify(params),
                response: null,
                error
            });
            throw error;
        }
    }
}
