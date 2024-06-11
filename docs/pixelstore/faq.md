---
sidebar_position: 6
---

# FAQ Section Editing Guide

## This guide provides detailed instructions for editing the FAQ section of your website.

The relevant HTML section is located within your FAQ section of your HTML file. You can modify various parts of the section including the subtitle, questions, and answers.

### File Location

The HTML file where the FAQ section is located is:

`path/to/your/index.html`

### Sections to Update

#### 1. Subtitle

To update the subtitle, modify the text within the `div` tag with the class `subtitle`:

```
<div class="subtitle wow fadeInUp mb-3">Your New Subtitle Here</div>
```

#### 2. Main Heading
To update the main heading, edit the h2 tag content:

```
<h2 class="wow fadeInUp mb20" data-wow-delay=".2s">Your New Main Heading Here</h2>
```

#### 3. Questions and Answers
To change the questions and answers, modify the content within each accordion-section:


### First Row:

```
<!--first-row-->
<div class="col-lg-6">
    <div class="accordion s2 wow fadeInUp">
        <div class="accordion-section">
            <div class="accordion-section-title" data-tab="#accordion-a1">
                Your New Question 1?
            </div>
            <div class="accordion-section-content" id="accordion-a1">
                <p>Your new answer for question 1 goes here.</p>
            </div>
            <div class="accordion-section-title" data-tab="#accordion-a2">
                Your New Question 2?
            </div>
            <div class="accordion-section-content" id="accordion-a2">
                <p>Your new answer for question 2 goes here.</p>
            </div>
        </div>
    </div>
</div>
```

### Second Row:

```
<!--second-row-->
<div class="col-lg-6">
    <div class="accordion s2 wow fadeInUp">
        <div class="accordion-section">
            <div class="accordion-section-title" data-tab="#accordion-b1">
                Your New Question 3?
            </div>
            <div class="accordion-section-content" id="accordion-b1">
                <p>Your new answer for question 3 goes here.</p>
            </div>
            <div class="accordion-section-title" data-tab="#accordion-b2">
                Your New Question 4?
            </div>
            <div class="accordion-section-content" id="accordion-b2">
                <p>Your new answer for question 4 goes here.</p>
            </div>
        </div>
    </div>
</div>
```

### Example HTML
Here is an example of how the modified HTML might look:

```
<section class="no-top">
    <div class="container">
        <div class="row">
            <div class="col-lg-6 offset-lg-3 text-center">
                <div class="subtitle wow fadeInUp mb-3">Your New Subtitle Here</div>
                <h2 class="wow fadeInUp mb20" data-wow-delay=".2s">Your New Main Heading Here</h2>
            </div>
            <div class="clearfix"></div>
            <!--first-row-->
            <div class="col-lg-6">
                <div class="accordion s2 wow fadeInUp">
                    <div class="accordion-section">
                        <div class="accordion-section-title" data-tab="#accordion-a1">
                            Your New Question 1?
                        </div>
                        <div class="accordion-section-content" id="accordion-a1">
                            <p>Your new answer for question 1 goes here.</p>
                        </div>
                        <div class="accordion-section-title" data-tab="#accordion-a2">
                            Your New Question 2?
                        </div>
                        <div class="accordion-section-content" id="accordion-a2">
                            <p>Your new answer for question 2 goes here.</p>
                        </div>
                    </div>
                </div>
            </div>
            <!--second-row-->
            <div class="col-lg-6">
                <div class="accordion s2 wow fadeInUp">
                    <div class="accordion-section">
                        <div class="accordion-section-title" data-tab="#accordion-b1">
                            Your New Question 3?
                        </div>
                        <div class="accordion-section-content" id="accordion-b1">
                            <p>Your new answer for question 3 goes here.</p>
                        </div>
                        <div class="accordion-section-title" data-tab="#accordion-b2">
                            Your New Question 4?
                        </div>
                        <div class="accordion-section-content" id="accordion-b2">
                            <p>Your new answer for question 4 goes here.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
```
### Final Steps
Save Your Changes:

After updating the HTML, save your file.
Verify Updates:

Open your website and verify that the changes are displayed correctly in the FAQ section.
Test Responsiveness:

Ensure that the FAQ content is responsive and looks good on different devices and screen sizes.
