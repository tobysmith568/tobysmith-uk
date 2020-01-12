import { IPost } from "./posts/post";

export class PostConfig {
  public static posts: IPost[] = [
    {
      author: "Toby Smith",
      categories: [
        "projects/windows"
      ],
      contentPath: "this-is-a-post.md",
      date: "2020/01/09 15:30",
      preview: "Once apon a time, I wrote a post about some stuff. This is that post",
      slug: "something",
      title: "This post is about something"
    },
    {
      author: "Toby Smith",
      categories: [
        "projects/websites"
      ],
      contentPath: "this-is-a-post.md",
      date: "2020/01/09 15:30",
      preview: "Are you ready kids? Aye, aye, Captain! OHHHHHHHHHHHHHHHHHH",
      slug: "somethingAlso",
      title: "This post is not about windows"
    },
    {
      author: "Toby Smith",
      categories: [
        "projects/windows"
      ],
      contentPath: "this-is-also-a-post.md",
      date: "2020/01/09 15:30",
      preview: "In the criminal justice system, the people are represented by two separate, yet equally important, groups: the police, who investigate crime; and the district attorneys, who prosecute the offenders. These are their stories.",
      slug: "something2",
      title: "This post is about something else"
    },
    {
      author: "Toby Smith",
      categories: [
        "projects/windows"
      ],
      contentPath: "this-is-also-a-post.md",
      date: "2020/01/09 15:30",
      slug: "something3",
      title: "I am a post"
    }
  ] as IPost[];
}
