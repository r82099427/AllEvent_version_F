const ITEMS_PER_PAGE = 11;
const SCROLL_DELAY = 1000;
const TRANSITION = 1000;
let enableScroll = true;
let touchStartY;
let touchEndY;

window.addEventListener(
	"wheel",
	function (event) {
		event.preventDefault();
		if (!enableScroll) return;
		if (event.deltaY > 0) app.nextItem();
		else app.prevItem();
		enableScroll = false;
		setTimeout(() => (enableScroll = true), SCROLL_DELAY);
	},
	{ passive: false }
);

document.addEventListener("touchstart", function (e) {
	touchStartY = e.touches[0].pageY;
});

document.addEventListener("touchmove", function (e) {
	if (!enableScroll) return;
	touchEndY = e.touches[0].pageY;
	if (touchStartY < touchEndY) {
		app.prevItem();
		enableScroll = false;
		setTimeout(() => (enableScroll = true), SCROLL_DELAY);
	} else if (touchStartY > touchEndY) {
		app.nextItem();
		enableScroll = false;
		setTimeout(() => (enableScroll = true), SCROLL_DELAY);
	}
});

document.addEventListener("touchend", function (e) {
	touchStartY = null;
	touchEndY = null;
});

// function handleResize() {
// 	const currentHeight = window.innerHeight;
// 	console.log(`Inner Height changed to: ${currentHeight}px`);
// 	app.setItem(app.activeIndex);
// }

// window.addEventListener("resize", handleResize);

class Subject {
	constructor(year, title, img, description) {
		this.year = year;
		this.title = title;
		this.img = img;
		this.description = description;
	}
}

let app = Vue.createApp({
	data() {
		return {
			list: [
				new Subject(1974, "創立永龍建材行", "001.jpg", "1974年\n\n永龍建材行創立，位於台南市永康區。"),
				new Subject(1990, "創立永龍建設", "002.jpg", "永龍建設公司創立，位於台南市永康區。以品質優良、施工精細而聞名"),
				new Subject(
					2009,
					"獨家研發專利「一指按壓節能開關」",
					"003.jpg",
					"獨家研發專利「一指按壓節能開關」，可節省能源消耗，並提升居住品質。\n該開關採用特殊的設計，只需輕輕一按即可開關電源，使用起來非常方便。\n該開關目前已在永龍建設所建造的房屋中使用，並受到了客戶的好評。"
				),

				new Subject(
					2009,
					"率先採用全棟「無鉛不鏽鋼水龍頭」",
					"004.jpg",
					"我們率先採用全棟「無鉛不鏽鋼水龍頭」，為客戶提供更安全、更健康的居住環境。\n無鉛不鏽鋼水龍頭不會釋放鉛到水中，因此可以確保飲用水安全。此外，無鉛不鏽鋼水龍頭也更耐用，可以使用更長時間。"
				),
				new Subject(
					2009,
					"使用隔熱保溫的電動捲簾",
					"005.jpg",
					"我們開始在新建房屋中使用隔熱保溫的電動捲簾，以節省能源成本、提高舒適度和提供隱私和安全保護。\n我們相信，這項新措施將為我們的客戶提供更舒適、更節能和更安全的居住環境。"
				),
				new Subject(
					2010,
					"捐贈家扶助學金",
					"006.jpg",
					"捐贈家扶助學金，幫助弱勢家庭的孩子完成學業。\n我們相信，教育是改變命運的關鍵，因此我們希望透過這項捐贈，幫助家扶兒童獲得更好的教育機會，並為未來發展奠定基礎。"
				),
				new Subject(
					2010,
					"業界首創提出「無明火建築」理念",
					"007.jpg",
					"業界首創提出「無明火建築」理念，以打造安全、健康、舒適的居住環境為目標。\n無明火建築是指在建築中不使用明火的烹飪方式，\n無明火建築具有安全、健康、環保等優點，可降低火災、一氧化碳中毒等意外發生的風險，並減少空氣污染。"
				),
				new Subject(
					2010,
					"專利設計「鐵捲門手動切換」",
					"008.jpg",
					"獨家研發「鐵捲門手動切換」專利，可在停電時手動開關鐵捲門，保障住戶的安全。\n該專利採用特殊的設計，可在停電時輕鬆開關鐵捲門，使用起來非常方便。\n該專利目前已在我們所建造的房屋中使用，並受到了客戶的好評。"
				),
				new Subject(
					2010,
					"善化「永龍極光」為全台南首批全案裝設太陽能板建築",
					"009.jpg",
					"我們推出的「永龍極光」建案，為全台南首批全案裝設太陽能板建築。\n該建案採用高效太陽能板，\n這項措施不僅可節省電費，還可響應環保，\n我們將持續推動綠色建築，為環境永續盡一份心力。"
				),
				new Subject(
					2014,
					"首棟大樓建案VA1完全使用IH爐及熱泵設備",
					"010.jpg",
					"永龍建設公司於2016年推出的首棟大樓建案V&A_1，採用IH爐及熱泵設備，是全台首個採用此種設備的建案。\nIH爐是一種利用電磁感應加熱的爐具，比傳統的瓦斯爐更安全、更節能。熱泵設備是一種利用空氣中的熱能或冷能來供暖或製冷的設備，比傳統的空調更節能。"
				),
				new Subject(
					2014,
					"贊助在地「汽車慢速壘球隊」",
					"011.jpg",
					"贊助在地汽車慢速壘球隊，支持社區運動發展。\n我們認為，運動是健康和活力的來源，因此希望透過贊助在地汽車慢速壘球隊，鼓勵社區居民積極參與運動，並為社區運動發展貢獻一份力量。"
				),
				new Subject(2014, "節慶送禮活動", "012.jpg", "希望透過節慶送禮活動，讓客戶感受到節日的喜慶，並感謝客戶對永龍建設公司的支持。"),
				new Subject(
					2015,
					"贊助台南唯一庇護工場展翼烘焙坊場地和攤車",
					"013.jpg",
					"很高興能贊助台南唯一的庇護工場「展翼烘焙坊」。我們相信，這項贊助將幫助身心障礙者自立自強，並融入社會。我們將持續支持庇護工場，為身心障礙者創造就業機會。"
				),
				new Subject(
					2015,
					"捐血守護台南活動",
					"014.jpg",
					"我們舉辦了「捐血守護台南」活動，呼籲民眾踴躍捐血，以保障台南地區的血液安全。\n我們相信，捐血是一種愛心和奉獻的行為，希望透過這項活動，鼓勵更多人加入捐血的行列。"
				),
				new Subject(
					2015,
					"『送愛心到偏鄉，一份薑餅兩份愛』贈予22所偏鄉小學，心智障礙者所製作的薑餅人",
					"015.jpg",
					"我們很高興能送愛心到偏鄉，並贈予 22 所偏鄉小學心智障礙者所製作的薑餅人。我們相信，這項活動將讓偏鄉孩子們感受到節日的溫暖，並體驗手作薑餅的樂趣。"
				),
				new Subject(
					2017,
					"第一屆中小型學校弱勢學生免費配鏡活動",
					"016.jpg",
					"這項活動將讓弱勢學生獲得更好的視力，並幫助他們在學習和生活中更有自信。我們將持續支持弱勢教育，並為弱勢學生創造更多機會。\n我們相信，所有人都有接受教育的權利，無論他們的背景如何。希望透過這項活動，能幫助弱勢學生獲得更好的教育，並為他們的未來創造更多可能。"
				),
				new Subject(
					2017,
					"舉辦永龍暖心捐血活動",
					"017.jpg",
					"我們很高興能舉辦「永龍暖心捐血活動」，並邀請民眾一同響應。我們相信，這項活動將為需要血液的患者提供幫助，並讓社會變得更美好。我們將持續支持公益活動，並為社會做出貢獻。"
				),
				new Subject(
					2018,
					"第二屆中小型學校弱勢學生免費配鏡活動",
					"018.jpg",
					"我們很高興能擴大舉辦中小型學校弱勢學生免費配鏡活動。相信這項活動將讓更多弱勢學生獲得更好的視力，並幫助他們在學習和生活中更有自信。我們將持續支持弱勢教育，並為弱勢學生創造更多機會。"
				),
				new Subject(
					2019,
					"第三屆中小型學校弱勢學生免費配鏡活動",
					"019.jpg",
					"相信所有人都有接受教育的權利，無論他們的背景如何。我們希望透過這項活動，能幫助弱勢學生獲得更好的教育，並為他們的未來創造更多可能。\n很榮幸能與持續文雄眼鏡合作。"
				),

				new Subject(
					2020,
					"設置「客服滿意度電話調查」服務",
					"020.jpg",
					"我們很高興推出「客服滿意度電話調查」服務，以提升售後服務品質。我們相信，這項服務將讓客戶更滿意我們的服務，並幫助我們持續改善。\n\n提供優質的售後服務是我們重要的責任，將繼續努力提升服務品質，讓客戶有更好的體驗。"
				),
				new Subject(
					2020,
					"協助永康國小圖書館翻修",
					"021.jpg",
					"翻修後的圖書館煥然一新，成為學生喜愛的閱讀空間。學生們可以在這裡借閱書籍、閱讀、查資料、和同學們一起討論書籍。"
				),
				new Subject(
					2020,
					"幫助認養並移植逾30顆雞蛋花",
					"022.jpg",
					"翻修後的圖書館煥然一新，成為學生喜愛的閱讀空間。學生們可以在這裡借閱書籍、閱讀、查資料、和同學們一起討論書籍。"
				),

				new Subject(
					2020,
					"第四屆中小型學校弱勢學生免費配鏡活動",
					"023.jpg",
					"舉辦第四屆「龍『EYE』永恆，『睛』彩人生」中小型學校弱勢學生免費配鏡活動，幫助弱勢學生獲得免費配鏡。\n參與活動的學生們都非常開心，並親手寫下感謝卡片，表達對此活動的感謝之情。"
				),
				new Subject(
					2021,
					"贈予龍潭國小太陽能光電設備",
					"024.jpg",
					"捐贈 99.9 千瓦的太陽能光電設備給龍潭國小，讓發電躉售回饋金全額納入學校教育發展基金。希望透過這項捐贈，為龍潭國小的孩子們提供一個更優質的學習環境，並為環境保護盡一份心力。"
				),
				new Subject(
					2021,
					"VA1榮獲南市優良公寓大廈三項大獎",
					"025.jpg",
					"V&A_1 建案榮獲「台南市政府舉辦的優良公寓大廈」三項大獎─最佳節能減碳獎、最佳健康社區獎、大型新生組第三名。\n這項榮譽是對永龍建設公司在建築品質、節能減碳、健康社區等方面的努力和成就的肯定。"
				),
				new Subject(
					2021,
					"VA2榮獲嘉鼎工程JAD金牌認證",
					"026.jpg",
					"這項認證是對永龍建設公司在建築品質、工程管理、安全施工等方面的努力和成就的肯定。\n永龍建設公司將繼續努力，打造更優質、更安全、更舒適的居住環境，為客戶提供更好的服務"
				),
				new Subject(
					2021,
					"捐贈子龍國小太陽能光電風雨球場",
					"027.jpg",
					"捐贈子龍國小太陽能光電風雨球場，讓學生無論晴雨都能安心運動。\n這項捐贈將為子龍國小提供一個更安全、更舒適的運動環境，並鼓勵學生多運動，健康成長。"
				),
				new Subject(
					2022,
					"對於『弱勢家庭 』與 『 獨居老人』進行送暖活動",
					"028.jpg",
					"與台南市博愛菁莪愛心會、埔園里里辦公處合作，分別為弱勢家庭和獨居老人進行送暖活動。\n由台南市博愛菁莪愛心會和埔園里里辦公處協助分發給弱勢家庭和獨居老人。"
				),
				new Subject(
					2022,
					"特贈台南市警二分局破案獎金與防割手套",
					"029.jpg",
					"希望透過這項捐贈，表達對台南市警二分局的支持，並鼓勵警察同仁們繼續努力打擊犯罪，維護治安。\n台南市警二分局表示，感謝該善舉，這項捐贈將為警察同仁們在執勤時提供保障，並提升打擊犯罪的士氣。"
				),
				new Subject(
					2022,
					"特贈「三份子靶溝公園」景石",
					"030.jpg",
					"希望透過這項捐贈，表達對三份子靶溝公園的支持，並鼓勵大家一起來認識這座具有歷史文化意義的公園。\n台南市長黃偉哲表示，感謝此善舉，這項捐贈將為三份子靶溝公園增添美景，並讓更多人了解這座公園的歷史文化價值"
				),
				new Subject(
					2022,
					"第五屆中小型學校弱勢學生免費配鏡活動",
					"031.jpg",
					"連續五年舉辦台南市國中小學生「免費配眼鏡活動」，獲贈教育局長鄭新輝代表市長黃偉哲之感謝狀。\n這項活動已幫助超過百餘名弱勢學生獲得免費配鏡，讓他們在學習和生活中更有自信。"
				),
				new Subject(
					2022,
					"幫助沿山百合課輔班孩子驗光配眼鏡",
					"032.jpg",
					"與「文雄眼鏡公司」攜手屏東縣「瑪家鄉涼山部落文化關懷協會」，幫助沿山百合課輔班孩子驗光配眼鏡。將繼續舉辦這項活動，幫助更多需要幫助的弱勢學生"
				),
				new Subject(
					2022,
					"捐永龍「汽車慢速壘球隊」於總統盃中獲得第一名",
					"033.jpg",
					"汽車慢速壘球隊在總統盃中獲得第一名！這是一項了不起的成就，相信這要歸功於團隊的辛勤練習和奉獻精神。"
				),
			],
			activeIndex: 0,
			prevIndex: 0,
			title: "",
			subtitle: "",
			description: "",
			animation: false,
			animationDelay: false,
		};
	},
	methods: {
		init() {
			this.activeIndex = this.list.length - 1;
			this.title = this.list[this.activeIndex].title;
			this.subtitle = this.list[this.activeIndex].subtitle;
			this.doAnimate();
		},
		setItem(index) {
			this.prevIndex = this.activeIndex;
			this.activeIndex = index;
			if (this.prevIndex != this.activeIndex) this.doAnimate(this.prevIndex, this.activeIndex);
		},
		prevItem() {
			this.prevIndex = this.activeIndex;
			this.activeIndex = Math.max(0, this.activeIndex - 1);
			if (this.prevIndex != this.activeIndex) this.doAnimate(this.prevIndex, this.activeIndex);
		},
		nextItem() {
			this.prevIndex = this.activeIndex;
			this.activeIndex = Math.min(this.list.length - 1, this.activeIndex + 1);
			if (this.prevIndex != this.activeIndex) this.doAnimate(this.prevIndex, this.activeIndex);
		},
		doAnimate() {
			this.animation = true;
			this.changeYear(this.list[this.activeIndex].year.toString(), "title-year", "#scrollbar .number");
			setTimeout(() => {
				this.title = this.list[this.activeIndex].title;
				this.subtitle = this.list[this.activeIndex].subtitle;
				this.description = this.list[this.activeIndex].description;
			}, TRANSITION / 2);
			setTimeout(() => {
				this.animation = false;
				this.animationDelay = true;
				setTimeout(() => (this.animationDelay = false), TRANSITION);
			}, TRANSITION);
		},
		changeYear(newYear, ref, numSelector) {
			const yearEl = this.$refs[ref];
			const oldYear = yearEl.textContent;
			const newYearEls = newYear.split("").map((number, index) => {
				const oldNumber = oldYear[index];
				if (number === oldNumber && index != 3) return `<span>${number}</span>`;
				else return `<span class="number"><span>${oldNumber}</span>${number}</span>`;
			});
			yearEl.innerHTML = newYearEls.join("");
			const newNumberEls = document.querySelectorAll(numSelector);
			newNumberEls.forEach(numberEl => {
				const oldNumberEl = numberEl.querySelector("span:first-child");
				const newNumberEl = numberEl.querySelector("span:last-child");
				oldNumberEl.addEventListener("animationend", () => {
					oldNumberEl.remove();
					newNumberEl.style.opacity = 1;
					newNumberEl.style.animation = "none";
				});
			});
		},
	},
	computed: {
		scrollPos() {
			const actualHeight = window.innerHeight;
			const elementHeight = document.querySelector("#control-height").clientHeight;

			const barHeight = elementHeight - actualHeight;
			if (window.innerWidth < 576) {
				return { bottom: `calc(${(100 / 13) * (this.activeIndex - 6)}% - 8px)` };
				// return { bottom: (window.innerHeight / 13) * (this.activeIndex - 4.5) - window.innerHeight / 9 + 8 + "px" };
			} else {
				return { right: ((window.innerWidth * 8) / 9 / 18) * (this.activeIndex - 9.5) + window.innerWidth / 9 / 2 / 2 - 4 + "px" };
			}
		},
	},
}).mount("#app");
app.init();
