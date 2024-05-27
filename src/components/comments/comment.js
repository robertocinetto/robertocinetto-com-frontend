"use client"
import { useSearchParams } from "next/navigation"

import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import CommentDate from "./commentDate"
import { deleteComment } from "@/server/comment-actions"
import { useState } from "react"

export default function Comment({ comment, handleReply, postSlug }) {
	const [isReplyingToThisComment, setIsReplyingToThisComment] = useState(false)
	const searchParams = useSearchParams()

	function updateQueryParam(key, value) {
		const params = new URLSearchParams(searchParams);
		params.set(key, value);
		window.history.pushState(null, "", "?" + params.toString()); 
		setIsReplyingToThisComment(true)
	};

	async function handleDeleteComment(commentId, commentAuthorId) {
		await deleteComment(commentId , commentAuthorId, postSlug)
	}

	return(
		<div key={comment.id} className={`flex items-start gap-4 ${isReplyingToThisComment ? 'outline outline-offset-4 rounded-sm' : ''}`}>
			<Avatar className="h-10 w-10 border">
				<AvatarImage alt="@shadcn" src="/placeholder-user.jpg" />
				<AvatarFallback>{comment.author.name.split(" ").map((word) => word[0])}</AvatarFallback>
			</Avatar>
			<div className="grid gap-1.5">
				<div className="flex items-center gap-2">
					<div className="font-medium">{comment.author.name + comment.id}</div>
					<div className="text-xs text-gray-500 dark:text-gray-400">
						<CommentDate comment={comment} />
					</div>
				</div>
				<div>{comment.content}</div>
				<div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
					<Button className="hover:bg-transparent" size="icon" variant="ghost" onClick={ () => updateQueryParam( 'commentId', comment.id ) }>
						<ReplyIcon className="w-4 h-4" />
						<span className="sr-only">Reply</span>
					</Button>
					<Button className="hover:bg-transparent" size="icon" variant="ghost" onClick={ () => handleDeleteComment(comment.id, comment.author.id) }>
						<XIcon className="w-4 h-4" />
						<span className="sr-only">Delete</span>
					</Button>
					{/* <Button className="hover:bg-transparent" size="icon" variant="ghost">
						<ThumbsUpIcon className="w-4 h-4" />
						<span className="sr-only">Like</span>
					</Button>
					<Button className="hover:bg-transparent" size="icon" variant="ghost">
						<ThumbsDownIcon className="w-4 h-4" />
						<span className="sr-only">Dislike</span>
					</Button> */}
				</div>

				{/* Nested */}
				{comment.children.map((childComment) => {
					return(
						<div key={childComment.id} className="flex items-start gap-4 mt-4">
							<Avatar className="h-10 w-10 border">
								<AvatarImage alt="@shadcn" src="/placeholder-user.jpg" />
								<AvatarFallback>{childComment.author.name.split(" ").map((word) => word[0])}</AvatarFallback>
							</Avatar>
							<div className="grid gap-1.5">
								<div className="flex items-center gap-2">
									<div className="font-medium">{childComment.author.name + childComment.id}</div>
									<div className="text-xs text-gray-500 dark:text-gray-400">
										<CommentDate comment={childComment} />
									</div>
								</div>
								<div>{childComment.content}</div>
								<div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
									{/* <Button className="hover:bg-transparent" size="icon" variant="ghost">
										<ReplyIcon className="w-4 h-4" />
										<span className="sr-only">Reply</span>
									</Button> */}
									{/* <Button className="hover:bg-transparent" size="icon" variant="ghost">
										<ThumbsUpIcon className="w-4 h-4" />
										<span className="sr-only">Like</span>
									</Button>
									<Button className="hover:bg-transparent" size="icon" variant="ghost">
										<ThumbsDownIcon className="w-4 h-4" />
										<span className="sr-only">Dislike</span>
									</Button> */}
								</div>
							</div>
						</div>
					)
				})}
				
			</div>
		</div>
	)
}



function ReplyIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="9 17 4 12 9 7" />
      <path d="M20 18v-2a4 4 0 0 0-4-4H4" />
    </svg>
  )
}


function ThumbsDownIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17 14V2" />
      <path d="M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22h0a3.13 3.13 0 0 1-3-3.88Z" />
    </svg>
  )
}


function ThumbsUpIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 10v12" />
      <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" />
    </svg>
  )
}


function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}