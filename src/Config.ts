type ThemeConfig = {
  fontSizes: {
    xxs: number;
    xs: number;
    base: number;
    sm: number;
    md: number;
    xl: number;
    xl2: number;
    xl3: number;
    xl4: number;
  };
  fontFamily: {
    Bold: string;
    SemiBold: string;
    Medium: string;
    Regular: string;
  };
  colors: {
    black: string;
    white: string;
    gray: string;
    primary: string;
    secondPrimary: string;
    disable: string;
    error: string;
    transparent: string;
  };
};

// CustomTextConfig.ts
const defaultConfig: ThemeConfig = {
  fontSizes: {
    xxs: 10,
    xs: 12,
    base: 14,
    sm: 16,
    md: 18,
    xl: 20,
    xl2: 24,
    xl3: 40,
    xl4: 48,
  },
  fontFamily: {
    Bold: 'Inter-Bold',
    SemiBold: 'Inter-SemiBold',
    Medium: 'Inter-Medium',
    Regular: 'Inter-Regular',
  },
  colors: {
    black: '#000000',
    white: '#FFFFFF',
    gray: '#808080',
    primary: '',
    secondPrimary: '',
    disable: '',
    error: '#FF0000',
    transparent: 'rgba(0, 0, 0, 0.1)',
  },
};

let CustomTextConfig = { ...defaultConfig };

// Allow users to update the configuration
export const configureTheme = (config: Partial<ThemeConfig>) => {
  CustomTextConfig = {
    ...CustomTextConfig,
    colors: { ...CustomTextConfig.colors, ...config.colors },
    fontSizes: { ...CustomTextConfig.fontSizes, ...config.fontSizes },
    fontFamily: { ...CustomTextConfig.fontFamily, ...config.fontFamily },
  };
};

// Export the configuration for use in components
export const getCustomThemeConfig = (): ThemeConfig => CustomTextConfig;

export type Colors = keyof typeof defaultConfig.colors; // Export color keys for reuse
