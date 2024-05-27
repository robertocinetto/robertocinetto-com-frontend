'use server'

import { getStrapiURL, fetchAPI } from "@/lib/api"
import { revalidatePath } from "next/cache";
import { v4 as uuidv4 } from 'uuid';

export const createComment = async (formData) => {
	console.log('formData', formData)
	const newComment = await fetchAPI(`/comments/api::post.post:${formData.get('postId')}`, {},
		{
			method: 'POST',
			body: JSON.stringify(
				{
					"author": {
						"id": uuidv4(),
						"name": formData.get('name'),
						"email": formData.get('email'),
					},
					"content": formData.get('content'),
					"threadOf": formData.get('commentId')
				}
			)
		}
	)

	revalidatePath(`/blog/${formData.get('postSlug')}`)
}

export const deleteComment = async (commentId, commentAuthorId, postSlug) => {
	console.log('commentId', commentId, 'commentAuthorId', commentAuthorId)
	const deleteComment = await fetchAPI(`/comments/api::post.post:1/comment/${commentId}?authorId=${commentAuthorId}`, {},
		{
			method: 'DELETE'
		}
	)

	revalidatePath(`/blog/${postSlug}`)
}

