export async function generateMetadata() {
	const WebsiteData = await fetchAPI('/website-setting', {
		populate: {
      Favicon: '*',
      DefaultSEO: {
        populate: '*',
      },
      SiteLogo: '*',
      SiteLogoDark: '*',
    },
	})

	return {
		title: {
			template: '%s | Roberto Cinetto',
			default: WebsiteData.data.attributes.DefaultSEO.MetaTitle,
		},
		description: WebsiteData.data.attributes.DefaultSEO.MetaDescription,
	}
}