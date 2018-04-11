// @flow

export type Author = {
  id: string,
  name: string,
}

export type Article = {
  id: string,
  permalink: string,
  title: string,
  teaser: string,
  text: string,
  releaseDate: Date | string,
  authors: Array<Author>,
}
