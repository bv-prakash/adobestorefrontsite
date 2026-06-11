# Complaint Form Block

## Overview

The Complaint Form block provides a simple customer complaint submission interface.

## Configuration

Currently the block supports:

* Heading
* Name field
* Complaint textarea
* Submit button

## Usage

Insert the block in DA.live:

| complaint-form |

## Authoring

The block appears in the DA.live Blocks panel as:

* Complaint Form

## Styling

Styles are defined in:

```text
blocks/complaint-form/complaint-form.css
```

## JavaScript

Rendering logic is implemented in:

```text
blocks/complaint-form/complaint-form.js
```

## Future Enhancements

* GraphQL integration
* Form validation
* Magento customer integration
* Complaint submission API

## Error Handling

* Displays default heading when no heading is configured.
* Gracefully handles missing content.
