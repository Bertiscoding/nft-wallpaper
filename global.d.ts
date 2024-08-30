declare module 'tailwindcss' {
  export interface Config {
    content: string[];
    theme?: {
      extend?: object;
    };
    plugins?: any[];
  }
}