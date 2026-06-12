# Promo Banner Block

A simple promotional banner block with an image on one side and a title + description on the other. Built for the AEM Edge Delivery Services + Adobe Commerce boilerplate and authored via DA.live / Universal Editor.

## Folder structure

```
blocks/promo-banner/
├── _promo-banner.json
├── promo-banner.js
└── promo-banner.css
```

## Authoring (DA.live)

Insert a **Promo Banner** block from the block picker. The block has 1 row with 2 columns:

| Column | Field   | Description                        |
|--------|---------|-------------------------------------|
| 1      | Image   | Banner image (reference picker)     |
| 1      | Alt     | Alt text for the image              |
| 2      | Title   | Heading text (`<h2>`)               |
| 2      | Description | Rich text body content          |

### Expected authored markup

```html
<div class="promo-banner">
  <div>
    <picture><img src="/path/to/image.jpg" alt="Promo image"></picture>
  </div>
  <div>
    <h2>Promo Title</h2>
    <p>Promo description goes here.</p>
  </div>
</div>
```

## Behavior

The decorator (`promo-banner.js`) adds layout classes:

- `.promo-banner-image` — wraps the image column
- `.promo-banner-content` — wraps the title/description column

## Styling

- Mobile: stacked, image on top, content below
- Desktop (≥768px): side-by-side, image and content each take 50% width

Edit `promo-banner.css` to adjust colors, spacing, or breakpoints.

## Registration

Registered via `models/_component-definition.json`:

```json
{
  "...": "../blocks/promo-banner/_*.json#/definitions"
}
```

`models` and `filters` are picked up automatically via the wildcard entries in `_component-models.json` and `_component-filters.json`.

## Build & test

```bash
npm run build:json:definitions
npm run build:json:models
npm run build:json:filters
npx aem up
```

## Local preview

After running `aem up`, create a test page in DA.live, insert the Promo Banner block, fill in the fields, and preview at `http://localhost:3000`.