'use client'
import { useSearchParams, useRouter } from 'next/navigation';

import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { createComment } from "@/server/comment-actions"
import { useEffect } from 'react';

export default function CommentForm({ postId, postSlug }) {
	const searchParams = useSearchParams()

	useEffect(() => {
	}, [searchParams])

	return (
		<div className="space-y-4">
			<h3 className="text-xl font-bold">Leave a comment</h3>
			<form action={createComment} className="grid gap-4">
				<div className="grid grid-cols-2 gap-4">
					<div className="space-y-2">
						<Label htmlFor="name">Name</Label>
						<Input id="name" name="name" placeholder="Enter your name" />
					</div>
					<div className="space-y-2">
						<Label htmlFor="email">Email</Label>
						<Input id="email" name="email" placeholder="Enter your email" type="email" />
					</div>
				</div>
				<div className="space-y-2">
					<Label htmlFor="content">Comment</Label>
					<Textarea id="content" name="content" placeholder="Write your comment..." rows={4} />
				</div>
				<input type="hidden" name="postId" value={postId} />
				<input type="hidden" name="postSlug" value={postSlug} />
				{searchParams.has('commentId') && <input type="hidden" name="commentId" value={searchParams.get('commentId')} />}
				<Button type="submit">Submit</Button>
			</form>
		</div> 
	)
}