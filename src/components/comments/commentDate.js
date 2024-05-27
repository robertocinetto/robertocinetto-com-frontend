
import TimeAgo from 'javascript-time-ago'
import ReactTimeAgo from 'react-time-ago'
import en from 'javascript-time-ago/locale/en'
TimeAgo.addDefaultLocale(en)

export default function CommentDate({ comment }) {
	return(<ReactTimeAgo date={comment.createdAt} locale="en-US"/>)
}
	