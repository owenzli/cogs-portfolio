# Portfolio Workshop
> _Created by Mesbah Mowlavi_

## 🎨 Design

We'll be using this simple portfolio design during the today's workshop. It's a single-page portfolio with a dynamic project overlay:

**[Link to Figma Project](https://www.figma.com/design/mb9xT4Ox636qRfHkcCRhOa/COGs-Workshop-Portfolio?node-id=0-1&t=B9HTTAigyGKZnDp9-1)**

> Hint: If you'd like to modify the design, you can duplicate the Figma project to your own account and make changes there.

## 🚀 Project Structure

Inside of this project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── assets/           # Images and icons
│   └── components/       # Shared code blocks
│   └── pages/
│       └── index.astro   # Home page
│   └── projects/         # Dynamic project overlay
│   └── styles/           # Global styles
└── readme.md              # This file!
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any shared components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [Astro documentation](https://docs.astro.build), and consider following their tutorial on how to [Build a Blog](https://docs.astro.build/en/tutorial/0-introduction/).

## Credits
Project images thanks to these Dribbble artists:
- https://dribbble.com/shots/24915249-Zolve-Smart-Assistant-Branding
- https://dribbble.com/shots/24918143-Meditation-App
- https://dribbble.com/shots/24920224-Cery-Photography-Landing-Page

Stock images from Unsplash:
- https://unsplash.com/photos/back-photo-of-woman-wearing-brown-parka-hoodie-and-green-backpack-on-snow-LspK43UdFo4
