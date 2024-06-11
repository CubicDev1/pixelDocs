---
sidebar_position: 5
---

# Header Content Editing Guide

### This guide provides detailed instructions for editing the header content of your website.

The relevant HTML section is located within your header section of your HTML file. You can modify various parts of the header including the text, background video, buttons, and the rating section.

### File Location

The HTML file where the header section is located is:

`path/to/your/index.html`

### Editing the Header Content

To update the header content, locate the following HTML section in your `index.html` file:

```
html
<section class="full-height no-top no-bottom jarallax" data-video-src="https://youtu.be/Jox6R5-rIH0?si=7kasP8OPXPD7wwqq">
    <div class="de-gradient-edge-top"></div>
    <div class="de-gradient-edge-bottom"></div>
    <div class="overlay-bg t50 no-top no-bottom">
        <div class="v-center">
            <div class="container z-1000">
                <div class="row align-items-center">
                    <div class="col-lg-10 offset-lg-1 text-center">
                        <div class="subtitle blink mb-4">High Quality Products</div>
                        <h1 class="mb-0 wow fadeInUp">
                            The Ultimate One Stop & Shop<br>Your <span class="ultimate-store">Ultimate
                                Store</span></h1>
                    </div>
                    <div class="col-lg-6 offset-lg-3 text-center text-white">
                        <p class="wow fadeInUp">ALorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Neque vitae tempus quam
                            pellentesque nec nam aliquam sem et.
                            .</p>

                        <a class="main-btn btn-main wow fadeInUp discordlink" href=""><span><i class="fa-brands fa-discord"></i>Join Us</span></a>

                        <div class="spacer-single"></div>

                        <div class="de-rating-ext wow fadeInUp" data-wow-delay=".4s">
                            <span class="d-stars">
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                            </span>
                            <span class="d-val">4.85</span>
                            based on <strong>14086</strong> reviews.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
```

### Sections to Update
#### 1. Background Video
To change the background video, update the data-video-src attribute with your new video URL:

```
<section class="full-height no-top no-bottom jarallax" data-video-src="https://youtu.be/new-video-url">
```

#### 2. Subtitle
To update the subtitle, modify the text within the div tag with the class subtitle:

```
<div class="subtitle blink mb-4">Your New Subtitle Here</div>
```


#### 3. Main Heading
To update the main heading, edit the h1 tag content. You can also update the text within the span tag:

html
Copy code
```
<h1 class="mb-0 wow fadeInUp">
    Your New Main Heading Here<br>Your <span class="ultimate-store">New Store Name</span></h1>
```

#### 4. Description Paragraph
To change the description text, modify the p tag content:

```
<p class="wow fadeInUp">Your new description text goes here. Provide a brief and engaging summary of your services or products.</p>
```

#### 5. Join Us Button
To update the "Join Us" button link and text, modify the a tag and span content:

```
<a class="main-btn btn-main wow fadeInUp discordlink" href="https://your-new-link.com"><span><i class="fa-brands fa-discord"></i>Join Our Community</span></a>
```

#### 6. Rating Section
To change the rating or the number of reviews, update the span and strong tags within the de-rating-ext div:

```
<div class="de-rating-ext wow fadeInUp" data-wow-delay=".4s">
    <span class="d-stars">
        <i class="fa fa-star"></i>
        <i class="fa fa-star"></i>
        <i class="fa fa-star"></i>
        <i class="fa fa-star"></i>
        <i class="fa fa-star"></i>
    </span>
    <span class="d-val">4.95</span> <!-- Update the rating value -->
    based on <strong>15000</strong> reviews. <!-- Update the number of reviews -->
</div>
```

#### Final Steps
Save Your Changes:

After updating the HTML, save your file.
Verify Updates:

Open your website and verify that the changes are displayed correctly on the header section.
Test Responsiveness:

Ensure that the header content is responsive and looks good on different devices and screen sizes.