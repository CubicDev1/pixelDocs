---
sidebar_position: 4
---

# Team Member Editing Guide

### This guide provides detailed instructions for updating team member details on your website.

The relevant JavaScript function for updating team member details is `updateMemberDetails`.

### Updating Team Member Details

To update a team member's information, use the `updateMemberDetails` function. You need to specify the member ID and an object containing the new details such as `imgSrc`, `name`, `facebook`, `instagram`, and `discord`.

### Example Code

```
javascript
// Update each team member's details

// Update details for member 1
updateMemberDetails('member1', {
    imgSrc: '/images/team/1.webp',                  // Path to the new image
    name: 'New Name 1',                             // New name of the team member
    facebook: 'https://www.facebook.com/newprofile1', // New Facebook profile URL
    instagram: 'https://www.instagram.com/newprofile1', // New Instagram profile URL
    discord: 'https://www.discord.com/newprofile1'  // New Discord profile URL
});

// Update details for member 2
updateMemberDetails('member2', {
    imgSrc: 'images/team/2.webp',                   // Path to the new image
    name: 'New Name 2',                             // New name of the team member
    facebook: 'https://www.facebook.com/newprofile2', // New Facebook profile URL
    instagram: 'https://www.instagram.com/newprofile2', // New Instagram profile URL
    discord: 'https://www.discord.com/newprofile2'  // New Discord profile URL
});

// Update details for member 3
updateMemberDetails('member3', {
    imgSrc: 'images/team/3.webp',                   // Path to the new image
    name: 'New Name 3',                             // New name of the team member
    facebook: 'https://www.facebook.com/newprofile3', // New Facebook profile URL
    instagram: 'https://www.instagram.com/newprofile3', // New Instagram profile URL
    discord: 'https://www.discord.com/newprofile3'  // New Discord profile URL
});
```

### File Location
The JavaScript file where the updateMemberDetails function should be used is located at:

`js/custom/team.js`

#### Steps to Update

##### Locate the File:

Navigate to js/custom/team.js where the team member details are updated.

##### Call the Function:

Use the updateMemberDetails function as shown in the example above. Replace the placeholder URLs and names with the actual details of your team members.

##### Save the File:

Save the changes to team.js.

###### Verify the Changes:

Open your website and check the team section to ensure the changes are reflected correctly.

**Note:** Ensure the image paths and URLs are accurate to prevent broken links or missing images on your website.