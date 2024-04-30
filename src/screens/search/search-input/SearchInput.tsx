import { FC } from 'react'
import styles from './SearchInput.module.scss'

const SearchInput: FC = () => {
	return (
		<div className={styles.group}>
			<input className={styles.input} />
			<svg
			className={styles.search}
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="25"
				viewBox="0 0 24 25"
				fill="none"
			>
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M14.3854 15.9457C11.7351 18.0684 7.85569 17.9013 5.3989 15.4445C2.76287 12.8085 2.76287 8.53464 5.3989 5.8986C8.03494 3.26256 12.3088 3.26256 14.9448 5.8986C17.4016 8.35538 17.5687 12.2348 15.446 14.8851L20.6017 20.0407C20.8946 20.3336 20.8946 20.8085 20.6017 21.1014C20.3088 21.3943 19.8339 21.3943 19.541 21.1014L14.3854 15.9457ZM6.45956 14.3839C4.40931 12.3336 4.40931 9.00951 6.45956 6.95926C8.50982 4.90901 11.8339 4.90901 13.8842 6.95926C15.9329 9.00801 15.9344 12.3287 13.8887 14.3794C13.8872 14.3809 13.8857 14.3823 13.8842 14.3839C13.8827 14.3854 13.8812 14.3869 13.8797 14.3884C11.8291 16.4341 8.50831 16.4326 6.45956 14.3839Z"
					fill="#A3AFB8"
				/>
			</svg>
		</div>
	)
}
export default SearchInput
