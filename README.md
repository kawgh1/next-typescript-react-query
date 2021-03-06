## React Query Notes

Hooks error: Invalid Hook Call using NextJS or ReactJS on Windows
use **npm run dev**

**npm install react-query**

-   ### 3 main use cases

    -   Queries

        -   A way to fetch data from an asynchronous source of data (API, server backend)

            -   tie this queried data to a unique key that can be cached, and recalled instead of doing a new query

                     const { status, error, data }: UseQueryResult<IPerson, Error> = useQuery<
                            IPerson,
                            Error
                        >("person", async () => { // here "person" is our cache key for the query

                            const res = await fetch("/api/person");
                            return res.json();
                        });

    -   Mutations
    -   Caching

-   ## React Query is a data fetching library
    -   manages:
        -   fetching
        -   caching
        -   synchronizing
        -   updating server state on your client side
    -   of course you can use fetch, axios, graphql query, but React Query
        tries to act like a Wrapper around those libraries to make things
        simpler
    -   Benefits out of the box
        -   Caching
        -   Deduping (de-duplicating) multiple requests
        -   avoids prop drilling by using cached queries and observers
        -   know when data is stale and make another refetch request
        -   pagination queries
        -   background queries
        -   infinite queries
        -   mutations
        -   manage cache directly
        -   way less bloated than Apollo Client
        -   comes with dev tools
        -   great documentation

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

-   [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
-   [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
