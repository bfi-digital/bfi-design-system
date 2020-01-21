// Typescript doesn't complain when images are imported
declare module '*.svg' {
    const content: string;
    export default content;
}