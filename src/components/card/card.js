import Image from 'next/image'
import styles from './card.module.scss'
const Card = ( props ) => {
	const {slug, category, title, summary, featuredImage} = props;
	console.log('props',props)
	return (
		<div className={`${styles.card} mb-12`}>
			<div className={styles.card__imageWrap}>
				<div className={styles.card__image}>
					<Image src='/cat.jpg' alt='thumbnail' fill={true} />
				</div>
			</div>
			<div className={styles.card__content}>
				<div className={styles.card__label}>{category}</div>
				<h2 className={styles.card__title}>{title}</h2>
				<p className={styles.card__summary}>{summary}</p>
			</div>
		</div>
	)
}

export default Card
