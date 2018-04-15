// @flow
import React from "react"

import type { Author, Tag } from "../../common.types"
import { graphql } from "react-apollo"
import gql from "graphql-tag"
import ArticleHeader from "./ArticleHeader"

import Loading from "../common/Loading"

type Props = {
  articles: Array<{
    id: string,
    permalink: string,
    title: string,
    teaser: string,
    releaseDate: string,
    authors: Array<Author>,
    tags: Array<Tag>,
  }>,
  loading: boolean,
}

const ArticleOverviewPage = (props: Props) => {
  const { loading, articles } = props

  if (loading) {
    return <Loading />
  } else {
    return (
      <div>
        {articles.map(article => (
          <article key={article.id}>
            <div style={{ marginBottom: "1em" }}>
              <ArticleHeader {...article} />
            </div>
            <section>{article.teaser}</section>
            <hr />
          </article>
        ))}
      </div>
    )
  }
}

const articlesQuery = gql`
  query articles {
    articles {
      id
      permalink
      title
      teaser
      releaseDate
      authors {
        id
        name
      }
      tags {
        id
        name
      }
    }
  }
`

export default graphql(articlesQuery, {
  props: ({ ownProps, data }) => ({
    loading: data.loading,
    articles: data.articles,
    ...ownProps,
  }),
})(ArticleOverviewPage)
