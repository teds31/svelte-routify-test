import StoryblokClient from 'storyblok-js-client'

const client = new StoryblokClient({
    accessToken: 'BNPaQNmQ6yNAqbyXv8NuDwtt' // replace with your accessToken
})

export const defaultRequestConfig = {
    version: 'draft'
}

export default client