import { useEffect } from "react";

declare global {
	interface Window {
		Kakao: any;
	}
}

const { VITE_APP_KAKAO_JAVASCRIPT_KEY } = import.meta.env;

const KakaoShareButton = () => {
	useEffect(() => {
		createKakaoButton();
	}, []);

	const createKakaoButton = () => {
		if (window.Kakao) {
			const kakao = window.Kakao;
			if (!kakao.isInitialized()) {
				kakao.init(VITE_APP_KAKAO_JAVASCRIPT_KEY);
			}
			kakao.Link.createDefaultButton({
				container: "#kakao-link-btn",
				objectType: "feed",
				content: {
					title: "타이틀",
					description: "#리액트 #카카오 #공유버튼",
					imageUrl: "IMAGE_URL", // i.e. process.env.FETCH_URL + '/logo.png'
					link: {
						mobileWebUrl: window.location.href,
						webUrl: window.location.href,
					},
				},
			});
		}
	};

	return (
		<div className="kakao-share-button">
			<button id="kakao-link-btn">
				<img
					src="https://developers.kakao.com/assets/img/about/logos/kakaolink/kakaolink_btn_medium.png"
					alt="kakao-share-icon"
				/>
			</button>
		</div>
	);
};

export default KakaoShareButton;
