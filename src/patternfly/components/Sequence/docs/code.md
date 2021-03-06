## Overview

A sequence acts as navigation within a wizard or a page. A sequence should have a finite number of steps with each step behaving as a link and comprising of a step number, title and status. Start and end buttons help to navigate the sequence when there is a large number of steps. 

## Accessibility

| Attribute | Applied To | Outcome |
| -- | -- | -- |
| `aria-label="[landmark description]"` | `.pf-c-sequence` | Describes <sequence> landmark |
| `aria-hidden="true"` | `.pf-c-sequence__control-icon` | Hides the icon from assistive technologies |
| `aria-label="actions"` | `.pf-c-sequence__control-icon` | Provides an accessible name for the action when an icon is used instead of text. Required when an icon is used with no supporting text |
| `role="list"` | `.pf-c-sequence__list` | Indicates that the list is a list |

## Usage

| Class | Applied To | Outcome |
| -- | -- | -- |
| `.pf-c-sequence` | `<nav>` |  Initiates a primary sequence element. |
| `.pf-c-sequence__list` | `<ul>` | Initiates a default sequence list. |
| `.pf-c-sequence__item` | `<li>` | Initiates a default sequence list item. |
| `.pf-c-sequence__link` | `<a>` | Initiates a default sequence list link. |
| `.pf-c-sequence__control` | `<button>` | Initiates a control button. |
| `.pf-c-sequence__control-icon` | `<i>` | Initiates an icon for the control button. |
| `.pf-c-sequence__content` | `<span>` | Initiates a sequence content element. |
| `.pf-c-sequence__content-title` | `<span>` | Initiates a sequence content title. |
| `.pf-c-sequence__content-status` | `<p>` | Initiates a sequence content status. |
| `.pf-m-hover` | `.pf-c-sequence__link` | Modifies to display the link as hovered. |
| `.pf-m-active` | `.pf-c-sequence__link` | Modifies to display the link as active. |
| `.pf-m-focus` | `.pf-c-sequence__link` | Modifies to display the link as focused. |
| `.pf-m-current` | `.pf-c-sequence__link` | Modifies for the current state. |
| `.pf-m-start` | `.pf-c-sequence__control` | Modifies the control button to be positioned at the start. |
| `.pf-m-end` | `.pf-c-sequence__control` | Modifies the control button to be positioned at the end. |