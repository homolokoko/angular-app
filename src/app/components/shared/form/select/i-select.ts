export interface ISelect {
  value: number
  text: string
}

export interface FuseResult<T> {
  item: T; // This is typically how fuse.js structures its results
  score: number; // Example additional property
}
