import { FC } from 'react'
import styles from './Footer.module.scss'
import Wrapper from '../wrapper/Wrapper'
import img from '@/assets/Vector.png'
const Footer: FC = () => {
	return (
		<div className={styles.wrapper}>
			<Wrapper>
				<div className={styles.content}>
					<div className={styles.logo}>
						<img src={img.src} />
						<div className={styles.title}>
							<svg
								width="18"
								height="23"
								viewBox="0 0 18 23"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M15.308 16.6508C15.3217 16.4787 15.3217 16.3058 15.308 16.1337V0.5672H9.90227V17.8572C9.7258 17.9026 9.49359 17.957 9.22424 18.0024C8.85905 18.0638 8.48949 18.0972 8.11895 18.1022C6.78146 18.1022 6.26133 17.1497 6.26133 15.3808V0.5672H0.902076V15.3445C0.843194 16.314 1.125 17.2741 1.70086 18.0659C2.62967 19.2089 4.48729 19.6987 7.78458 19.6987C9.3078 19.6994 10.829 19.5903 12.3358 19.3722C12.4472 19.3722 12.5587 19.3722 12.6701 19.3177L17.1006 22.8102V18.8007C17.1192 18.291 16.9477 17.7921 16.618 17.3967C16.2883 17.0012 15.8228 16.7362 15.308 16.6508Z"
									fill="#fff"
								/>
							</svg>
							<svg
								width="15"
								height="15"
								viewBox="0 0 15 15"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M14.9307 0.175461V11.1428C14.9294 11.9002 14.6608 12.6341 14.1702 13.2207C13.6795 13.8073 12.9968 14.2108 12.2371 14.3631C12.1267 14.3871 12.0151 14.4053 11.9027 14.4175C10.396 14.6356 8.87477 14.7448 7.35155 14.7441C4.09142 14.7441 2.20593 14.2542 1.26783 13.1112C0.691972 12.3194 0.410168 11.3593 0.469051 10.3898V0.175461H5.84688V10.3445C5.84688 12.1588 6.34844 13.0659 7.70451 13.0659C8.07504 13.0609 8.4446 13.0275 8.80979 12.9661C9.07914 12.9207 9.32064 12.8663 9.48783 12.821V0.121033L14.9307 0.175461Z"
									fill="#fff"
								/>
							</svg>
							<svg
								width="19"
								height="23"
								viewBox="0 0 19 23"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M14.801 5.41132C13.8559 5.22998 12.8941 5.14486 11.931 5.15732V0.5672L6.55318 1.79184V5.14825H6.50674C5.54287 5.12748 4.57979 5.21576 3.63671 5.41132C1.00817 5.96467 0.153658 7.34352 0.153658 9.55694V16.1428C0.152768 16.9018 0.420374 17.6378 0.911203 18.2263C1.40203 18.8147 2.08594 19.2195 2.84721 19.3722L3.18158 19.4175C4.35752 19.586 5.54195 19.692 6.72965 19.735V22.3113H11.931V19.7078C13.0568 19.6671 14.1794 19.5642 15.2933 19.3994L15.6277 19.354C16.3882 19.1998 17.0711 18.7946 17.5616 18.2064C18.0521 17.6183 18.3204 16.8832 18.3212 16.1246V9.55694C18.2841 7.34352 17.4203 5.96467 14.801 5.41132ZM6.51603 18.0205H6.34884H6.25596C5.94255 17.9607 5.63253 17.885 5.32715 17.7937V9.85629C5.28755 9.39227 5.37303 8.92621 5.57509 8.50447C5.77715 8.08273 6.08874 7.72001 6.47887 7.45238C6.47887 7.45238 6.47887 7.45238 6.52531 7.45238L6.51603 18.0205ZM13.092 17.7756C12.9155 17.83 12.414 17.948 12.1632 17.9933H12.0703H11.9124V7.42516C12.3002 7.69548 12.6106 8.05841 12.8139 8.47927C13.0171 8.90013 13.1065 9.36487 13.0734 9.82908L13.092 17.7756Z"
									fill="#fff"
								/>
							</svg>
							<svg
								width="15"
								height="21"
								viewBox="0 0 15 21"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M11.0119 1.25711C9.96573 1.05837 8.90107 0.967162 7.8354 0.984971C6.9809 0.984971 6.16354 0.984971 5.4112 1.1029C4.65886 1.22083 4.22232 1.2299 3.70218 1.31154C3.33919 1.37232 2.97959 1.45104 2.62476 1.5474H2.55046L2.31825 1.6109C1.65976 1.83827 1.08983 2.25976 0.687181 2.81713C0.284537 3.37451 0.0690635 4.04025 0.0705259 4.72238V20.6245L5.4112 19.3999V15.4992H5.54123H5.92205H6.90659C8.42967 15.496 9.95058 15.3869 11.4578 15.1726L11.7921 15.1182C12.5527 14.9674 13.2364 14.5644 13.7273 13.9774C14.2183 13.3905 14.4862 12.6557 14.4857 11.8978V5.36645C14.5321 3.15303 13.6033 1.77418 11.0119 1.25711ZM9.03357 13.6849C8.81206 13.7515 8.58527 13.8001 8.35554 13.83H8.25337L7.19452 13.9208L5.48551 14.0024H5.4112V2.75389H5.48551C8.50415 2.75389 9.03357 3.66103 9.03357 5.6658V13.6849Z"
									fill="#fff"
								/>
							</svg>
							<svg
								width="15"
								height="15"
								viewBox="0 0 15 15"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M8.34042 0.148254C6.21982 0.163264 4.1076 0.409721 2.04306 0.883036L2.21954 2.53403C3.44324 2.21262 4.69755 2.01504 5.96266 1.94439C8.97201 1.94439 9.50143 2.85152 9.50143 4.8563V6.16258H7.71811C2.26598 6.16258 0.510529 7.89521 0.510529 10.3445C0.510529 13.5013 2.21025 14.735 7.38374 14.735C8.9072 14.7329 10.4284 14.6208 11.9349 14.3994L12.2693 14.354C13.0306 14.2014 13.7145 13.7966 14.2053 13.2081C14.6961 12.6196 14.9637 11.8836 14.9629 11.1246V4.55694C15 1.61782 13.4953 0.148254 8.34042 0.148254ZM9.53859 12.8482C9.31619 12.9114 9.08965 12.9599 8.86055 12.9933C8.49604 13.0597 8.12604 13.0931 7.75526 13.0931C6.42706 13.0931 5.89763 12.186 5.89763 10.3717C5.89763 8.71163 6.49207 7.65028 8.68407 7.65028H9.54788L9.53859 12.8482Z"
									fill="#fff"
								/>
							</svg>
						</div>
					</div>
					<div className={styles.post}>
						<p>10 000+</p>
						<span>статей</span>
					</div>
					<div className={styles.links}>
						<a>Политика конфиденциальности</a>
						<a>Договор оферты</a>
						<a>
							Вконтакте{' '}
							<svg
								width="16"
								height="17"
								viewBox="0 0 16 17"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M4.6665 5.16663H11.3332V11.8333"
									stroke="white"
									stroke-width="1.5"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M4.6665 11.8333L11.3332 5.16663"
									stroke="white"
									stroke-width="1.5"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
							</svg>
						</a>
						<a>
							Telegram{' '}
							<svg
								width="16"
								height="17"
								viewBox="0 0 16 17"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M4.6665 5.16663H11.3332V11.8333"
									stroke="white"
									stroke-width="1.5"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M4.6665 11.8333L11.3332 5.16663"
									stroke="white"
									stroke-width="1.5"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
							</svg>
						</a>
					</div>
				</div>
			</Wrapper>
		</div>
	)
}
export default Footer
