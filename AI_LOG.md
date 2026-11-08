# AI Log

All AI use for the CSS Frameworks course assignment. I used one AI tool, Claude (Anthropic), mostly for explaining concepts, planning layout, debugging and reviewing my code. Where the AI wrote code for me, it says so in the entry.

---

**Tool used:** Claude
**Date:** 19 October 2026
**Purpose:** Choosing between the assignment options and between Bootstrap and Tailwind. Going through the AI rules in the brief.
**Outcome:** I chose Option 2 with Tailwind and a new repo. Decision made by me.

---

**Tool used:** Claude
**Date:** 20 October 2026
**Purpose:** Explanation of the most important things to know about Tailwind v4 before starting (utility classes, mobile-first, spacing, `hover:`/`focus:`, `@theme`). The AI also made an example page about a webshop (not part of my project) so I could see how the classes work together.
**Outcome:** Better understanding of Tailwind. The example was only for learning and none of it is used in my project.

---

**Tool used:** Claude
**Date:** 22 October 2026
**Purpose:** Help with setup problems. OneDrive removed my local files when I excluded the folder from syncing, and PowerShell blocked npm scripts.
**Outcome:** Moved the project out of OneDrive and fixed PowerShell with `Set-ExecutionPolicy -Scope CurrentUser RemoteSigned`. The AI's Tailwind install command was missing `-D` and `@^4`, so I used the command from the Module 2 lesson instead.

---

**Tool used:** Claude
**Date:** 23 October 2026
**Purpose:** Explanation of what the brief wanted for the login/register page, and how the form `action` attribute works. Explanation of Tailwind spacing classes.
**Outcome:** Combined login and register into one `index.html`. Code written by me.

---

**Tool used:** Claude
**Date:** 2 November 2026
**Purpose:** Styling the login page. Explanation of spacing with grouped fields and side-by-side cards with `md:flex-row` and `md:flex-1`. Debugging help: a class on the wrong element, an unclosed `<div>`, a missing `md:flex-1` and a missing focus ring size. Planning the header, footer and feed page.
**Outcome:** Login page finished. The AI showed example code for the footer and for keeping it at the bottom of the page (`min-h-screen flex flex-col` on body, `flex-1` on main). I did not ask for the code, but used it when given to me as it was a very straight forward footer. The rest of the code was written by me.

---

**Tool used:** Claude
**Date:** 4–6 November 2026
**Purpose:** Review of my feed page code. Advice on placing the search bar in the sticky header, sort options and the create-post form. Explanation of heading order, alt text and why the Font Awesome CDN link breaks the "no CDN" rule. Debugging the `menu.js` path and the sticky header.
**Outcome:** Feed page finished. The AI wrote the post template with Heroicons icons (inline SVG), `aria-label`s and section comments. I used it for all the posts and changed the content myself.

---

**Tool used:** Claude
**Date:** 6 November 2026
**Purpose:** Planning and review of the profile page, final review of the login page, and idea for a Log out link. Draft of the README.
**Outcome:** Profile page built by me, reusing my feed code. The AI drafted the README with notes on what to fill in. I checked and edited it.

---

**Tool used:** Claude
**Date:** 7 November 2026
**Purpose:** Suggestions for the structure of the reflection document and reminders of things from earlier chats I could write about. Proofreading for typos. Help writing the paragraph about the PowerShell problem. Draft of this AI log.
**Outcome:** Reflection written by me, except the PowerShell paragraph which is based on the AI's suggestion. I checked and edited the AI log.

---

**Tool used:** Claude
**Date:** 8 November 2026
**Purpose:** Clicking Log in did not take the user to the profile, but gave a 404 error. Discussed with AI, as I needed the site to work live as well as follow the assignment requirements. Requirements stated /profile, and making the site work would require a change to ./profile. Delivering a broken site was out of the question. Discussed pros and cons.
**Outcome:** Despite AI wanting me to stick to /profile, I changed it and added a note about it in README and a new entry in AI log.
