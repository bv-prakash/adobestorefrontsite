# Custom Slider Block

A lightweight, auto-playing carousel/slider block for testimonials, customer reviews, or any repeating image + text content. Built for the AEM Edge Delivery Services + Adobe Commerce boilerplate and authored via DA.live / Universal Editor.

## Folder structure

```
blocks/custom-slider/
├── _custom-slider.json
├── custom-slider.js
└── custom-slider.css
```

## Authoring (DA.live)

Insert a **Custom Slider** block from the block picker. Each row represents one slide, with 3 columns:

| Column | Field | Description                          |
|--------|-------|----------------------------------------|
| 1      | Image | Customer photo / slide image (reference picker) |
| 1      | Alt   | Alt text for the image                |
| 2      | Quote | Rich text quote/testimonial           |
| 3      | Name  | Customer / attribution name           |

Add multiple rows to create multiple slides.

### Expected authored markup

```html
<div class="custom-slider">
  <div>
    <div><picture><img src="/images/customer1.jpg" alt="Jane Doe"></picture></div>
    <div><p>"This product changed how we work!"</p></div>
    <div>Jane Doe</div>
  </div>
  <div>
    <div><picture><img src="/images/customer2.jpg" alt="John Smith"></picture></div>
    <div><p>"Excellent support and quality."</p></div>
    <div>John Smith</div>
  </div>
</div>
```

## Behavior

The decorator (`custom-slider.js`):

- Wraps all slide rows in a `.slider-track` container
- Adds `.slider-slide` class to each row
- Adds previous/next navigation buttons
- Auto-advances every 5 seconds (paused on hover)
- Auto-play is disabled automatically if there is only one slide

## Styling

- Slides are full-width, horizontally swiped via CSS transform
- Circular customer photo (80px), centered content
- Prev/Next buttons positioned at left/right edges, semi-transparent overlay

Edit `custom-slider.css` to adjust slide size, transition speed, button styles, or autoplay timing (`5000` ms in `custom-slider.js`).

## Registration

Registered via `models/_component-definition.json`:

```json
{
  "...": "../blocks/custom-slider/_*.json#/definitions"
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

After running `aem up`, create a test page in DA.live, insert the Custom Slider block, add 2+ slide rows, and preview at `http://localhost:3000` to verify navigation and autoplay.

## Accessibility notes

- Prev/Next buttons include `aria-label` attributes
- Consider adding `aria-live="polite"` to the track if slide content changes should be announced to screen readers
- Ensure all images include meaningful `alt` text via the Alt field