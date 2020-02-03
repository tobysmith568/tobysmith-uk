import { Injectable } from "@angular/core";
import { IPost } from "src/app/models/posts/post.interface";
import postData from "../../data/generated/posts.json";

@Injectable({
  providedIn: "root"
})
export class PostService {

  private readonly posts: IPost[];

  constructor() {

    this.posts = [];
    for (const post of postData) {
      this.posts.push({
        author: post.author,
        categories: post.categories,
        contentPath: post.contentPath,
        date: new Date(post.date),
        downloads: post.downloads,
        external: post.external,
        externalLink: undefined, // TODO post.externalLink,
        github: post.github,
        internalLink: post.internalLink,
        itch: post.itch,
        nuget: post.nuget,
        preview: post.preview,
        previewImage: post.previewImage,
        skill: post.skill,
        slug: post.slug,
        title: post.title
      });
    }
  }

  public getPostsInCategory(category: string, max?: number): IPost[] {
    const foundPosts: IPost[] = [];

    for (const post of this.posts) {
      for (const postCategory of post.categories) {
        if (("/" + postCategory).startsWith(category)) {
          foundPosts.push(post);

          if (foundPosts.length === max) {
            return foundPosts;
          }
          break;
        }
      }
    }

    return foundPosts;
  }

  public getPost(slug: string): IPost | undefined {
    for (const post of this.posts) {
      if (post.slug === slug) {
        return post;
      }
    }

    return undefined;
  }
}
