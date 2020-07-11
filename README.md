# My year in DEV

A tool that displays a summary of your DEV.to blog's stats!

Try it yourself! 👉 [My year in DEV](https://year-in-dev.cephhi.com/)

## Tools

This web app was built using Svelte with Sapper and Tailwind CSS. If you're interested in trying out this combo, check out this boilerplate [mauro-codes/sapper-tailwindcss-boilerplate
](https://github.com/mauro-codes/sapper-tailwindcss-boilerplate).

## Running the project locally
Install the dependencies, build it and run it.

```sh
npm install
npm run build
npm run dev
```

## Deploy (with PM2)
Generate the build running:
```sh
npm run build
```
Start the PM2 process like so:
```sh
pm2 start npm --name "My year in DEV" -- start
```
> This will run `npm run start` which will start the server.

## Maintainers
This project is maintained by:

- [@mauro-codes](https://github.com/mauro-codes)
- [@pawap90](https://github.com/pawap90)

## Collaborators
Big shout-out to our collaborators:

- [@realabbas](https://github.com/realabbas)  🐛💻
- [@saurabhdaware](https://github.com/saurabhdaware)  ✨
- [@dennislwm](https://github.com/dennislwm)  🐛

> Emoji reference: 💻-> Pull request merged | ✨-> Issue (enhancement) | 🐛-> Issue (bug) 

## Official docs
- Svelte docs: [svelte.dev/docs](https://svelte.dev/docs)
- Sapper docs: [sapper.svelte.dev/docs](https://sapper.svelte.dev/docs)
- Tailwind CSS docs: [tailwindcss.com/](https://tailwindcss.com/)
