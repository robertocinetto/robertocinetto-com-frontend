import { fetchAPI } from "@/lib/api"

import Comment from "./comment";
import CommentForm from "./commentForm";

export  default async function Comments( { postId, postSlug }) {
	const commentsData = await fetchAPI(`/comments/api::post.post:${postId}`, {}, {}, true);

  return (
    <div className="mx-auto space-y-8 py-12 ">

      <div className="space-y-2">
        <h3 className="text-2xl">Comments</h3>
        <p className="text-gray-500 dark:text-gray-400">Share your thoughts and feedback.</p>
      </div>

      <div className="space-y-6">
				{commentsData && commentsData.map((comment) => {
					return <Comment key={comment.id} comment={comment} postSlug={postSlug} postId={postId} />
				})}
      </div>

      <CommentForm postId={postId} postSlug={postSlug}  />
      
    </div>
  )
}
