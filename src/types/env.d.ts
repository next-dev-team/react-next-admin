// check in .env .env.dev etc

export {}

declare global {
  const UMI_ENV: 'dev'
  const BASE_API: string
  const NEXT_PUBLIC_GRAPHQL_API_ENDPOINT: string
}
