import type { PageSeoEntry } from './pageSeoTypes';
import { forumPosts } from '../data/forum';

function truncate(text: string, max: number): string {
  const trimmed = text.trim();
  if (trimmed.length <= max) return trimmed;
  return `${trimmed.slice(0, max - 1).trimEnd()}…`;
}

function forumTitle(question: string): string {
  const suffix = ' | Forum Q&A';
  const maxQuestion = 60 - suffix.length;
  return `${truncate(question, maxQuestion)}${suffix}`;
}

function forumDescription(excerpt: string): string {
  return truncate(excerpt, 155);
}

/** Unique meta for each forum thread (manual PAGE_SEO entries override on `/forum/choose-tier/` etc.). */
export const FORUM_PAGE_SEO: Record<string, PageSeoEntry> = Object.fromEntries(
  forumPosts.map((post) => [
    `/forum/${post.slug}/`,
    {
      title: forumTitle(post.title),
      description: forumDescription(post.excerpt),
      h1: post.title,
    },
  ]),
);
