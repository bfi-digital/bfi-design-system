// // Typescript doesn't complain when images are imported
declare module "*.svg" {
    const value: any;
    export = value;
 }