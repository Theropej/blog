import type { ProfileConfig } from "../types/config";

export const profileConfig: ProfileConfig = {
	avatar: "assets/images/avatar.gif",
	name: "Changed",
	bio: "Hello, I'm Changed.",

	links: [
		{
			name: "GitHub",
			icon: "fa7-brands:github",
			url: "https://github.com/Theropej/",
			showName: false,
		},
		{
			name: "Gitee",
			icon: "fa7-brands:gitee",
			url: "https://gitee.com/theropej",
			showName: false,
		},
		{
			name: "Email",
			icon: "fa7-solid:envelope",
			url: "mailto:theropej@gmail.com",
			showName: false,
		},
		{
			name: "RSS",
			icon: "fa7-solid:rss",
			url: "/rss/",
			showName: false,
		},
	],
};
