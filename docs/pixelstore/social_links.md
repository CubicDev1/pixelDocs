---
sidebar_position: 2
---


# Social Link Editing Guide

## This guide provides detailed instructions for editing social links on your website. 

The relevant JavaScript file is located at:

`js/custom/link.js`


### Adding Social Media Links

To add social media links, you will need to use specific functions designed to update each social link. The functions are as follows:

`addTwitter`(url)
`addDiscordlink`(url)
`addYoutube`(url)


#### Adding a Twitter Link
To add a Twitter link, use the `addTwitter` function. Replace "https://example.com" with your desired Twitter URL.


```
addTwitter("https://your-twitter-url.com");
```

#### Adding a Discord Link
To add a Discord link, use the `addDiscordlink` function. Replace "https://example.com" with your desired Discord URL.


```
addDiscordlink("https://your-discord-url.com");
```


#### Adding a YouTube Link
To add a YouTube link, use the addYoutube function. Replace "https://example.com" with your desired YouTube URL.


```
addYoutube("https://your-youtube-url.com");
```

#### File Location
The JavaScript file where these functions should be called is located at:

`js/custom/link.js`

Example Code
Below is an example of how to call these functions within your JavaScript file:

```
addTwitter("https://twitter.com/yourprofile");
addDiscordlink("https://discord.gg/yourinvite");
addYoutube("https://youtube.com/yourchannel");
```

**Note**
Make sure to replace the placeholder URLs with your actual social media URLs to ensure the links direct users to the correct destinations.
