# Sorting of Assets — V1

## Overview
PowerPoint-like prototype with a right-side task pane (Content Library) for browsing and sorting slide assets, and a left slide panel for the presentation deck.

## Features

### Sorting
- **Location**: Sort button in the browse header toolbar (top-right of task pane)
- **Options**: Name A–Z, Name Z–A, Last modified: Newest, Last modified: Oldest
- **Dynamic icon**: The sort button icon updates to reflect the current sort mode
- **Dropdown**: Clicking the sort button opens a dropdown. The active option shows a checkmark icon; inactive options show their sort-type icon. Active option has gray background (#f1f1f1)
- **Date grouping**: When sorting by date, items are grouped under headers (Last 24 hours, Last 7 days, etc.)

### Folder Navigation
- Folders displayed as cards with gray background (#f1f1f1), rounded corners, 64px height
- Clicking a folder navigates into it, showing a back breadcrumb link
- Folders contain slides; the Product folder has 18 slides
- Search and sorting work inside folders

### Drag & Drop
- Slide cards in the right pane are draggable
- **Drop on left slide panel**: Blue indicator line shows insert position between slides
- **Drop on center canvas**: Inserts after the currently selected slide, with dashed blue outline feedback
- Dropped slides are added to the deck, thumbnails re-render, and the status bar updates

### Asset Display
- Grid layout (2 columns) for slide cards with color-coded thumbnails
- Tooltip on hover showing full slide name
- Folder rows displayed as flat list with folder icon + name

---

## Tech Stack
- Vanilla HTML/CSS/JS
- HTML5 Drag and Drop API
- No external dependencies
