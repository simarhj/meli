This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/items](http://localhost:3000/api/items). This endpoint have the rest consume to the apis of MELI

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Architecture

The architecture of this app, is a modular service oriented front-end

In a folder of components has been builded the modular components displayed in the page
In a folder views is displayed the only one pahe MeliView.
and in the pages folder are displayed all the routes included the api routes.

The componentes builded are:
- Items
    -Desciption
- Resultados
    -Item
    -Resultados
- SearchBox
    -SearchBox
- Categories