declare module '*.scss' {

  declare const styles: {
    readonly [key: string]: string;
  };

  export type ClassName = string;

  export default styles;
}
