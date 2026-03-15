// ─── Blog Posts ──────────────────────────────────────────────────────────────
// This is the single source of truth for all blog posts.
// Used by both blog.html and index.html (homepage preview).
//
// To add a post: add an entry to the TOP of this array.
// To remove a post: delete its entry.
// To hide a post without deleting: set  draft: true
//
// Fields:
//   href  — path to the post file
//   title — post title
//   desc  — one-line description shown in listings
//   date  — display date string e.g. "Mar 2024"
//   draft — (optional) set true to hide from listings
// ─────────────────────────────────────────────────────────────────────────────

const BLOG_POSTS = [
  {
    href:  "./assets/blogposts/npc-ai-pt1.html",
    title: "Voice of the Ocean — NPC AI — Part 1",
    desc:  "An overview of UE5's AI tools and how I implemented underwater creature behaviour.",
    date:  "2024",
  },
  {
    href:  "./assets/blogposts/makingof.html",
    title: "Why did I make semihteke.com",
    desc:  "Why I decided to build a portfolio website from scratch instead of a website builder.",
    date:  "2024",
  },
  {
    href:  "./assets/blogposts/welcome_post.html",
    title: "Welcome to my blog!",
    desc:  "The first post — a quick intro and thoughts on what I'd like to write about.",
    date:  "2024",
  },
];
