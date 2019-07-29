import {NextPage, NextPageContext} from "next"
import {ParsedUrlQuery} from "querystring"
import * as React from "react"

interface PropsType {
  title: string
}

const IndexPage: NextPage<PropsType> = (props) => {

  return (
    <div>
      <h1>🐱Hello This is {props.title}'s web site🐱</h1>
    </div>
  )
}

IndexPage.getInitialProps = async (ctx: NextPageContext) => {

  return ctx.query as unknown as PropsType
}

export default IndexPage
