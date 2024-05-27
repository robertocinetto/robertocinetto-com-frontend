import { fetchAPI } from "@/lib/api"

import Comment from "./comment";
import CommentForm from "./commentForm";

let commentToReplyTo = null;

async function handleReply(commentId) {
	'use server'
	commentToReplyTo = commentId
}
export  default async function Comments( { postId, postSlug }) {
	const commentsData = await fetchAPI(`/comments/api::post.post:${postId}`);

  return (
    <div className="mx-auto space-y-8 py-12 ">

      <div className="space-y-2">
        <h2 className="text-3xl font-bold">Comments</h2>
        <p className="text-gray-500 dark:text-gray-400">Share your thoughts and feedback.</p>
      </div>

      <div className="space-y-6">
				{commentsData.map((comment) => {
					return <Comment key={comment.id} comment={comment} handleReply={handleReply} postSlug={postSlug} />
				})}
      </div>

      <CommentForm postId={postId} postSlug={postSlug}  />
      
    </div>
  )
}
