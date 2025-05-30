# Zero To Sixty Creative Portfolio Website

*Made with Hugo and NPM*

This repo stores the files required to build the Zero To Sixty Creative portfolio website using Hugo and NPM.

## Issues

- On homepage blog titles do not underline on hover
- On blog listing pages titles type out. However, first title will hide then type, afterwards second title will hide and then type. All titles should hide then be typed one after another
- I've resized images down to 900px but this might be too small for some displays. What is optimum size?

## Ideas

- Create page for all posts
- Update all images to use MacBook mockup template
- Change image shortcodes to srcset shortcode: `{{< imgc src="img-name.jpg" alt="Place alt text here." >}}`
- Create some sort of lightbox effect for images in posts
- Create contact page using similar styling to home page

## Posts/Pages

- Contact page
- All posts page
- Whoopsadaisy, fixing a website
- Whoopsadaisy, brand update
- Verenigma website
- Verenigma research on machine learning
- Verenigma survey library
- Cleveland renewables portfolio post
- Ideal Cars Sussex logo update

## Orignal `readme.md` from Nusser Studios

**Install to VS Code with:**  
`git clone git@github.com:nusserstudios/tailbliss your-name`

##### Install with NPM 
`npm install`
##### Install with Yarn
`yarn`

**To start developing:**
##### Develop with NPM 
`npm run start`
##### Develop with Yarn
`yarn start`

**To generate the site HTML:**
##### Build with NPM 
`npm run build`
##### Build with Yarn
`yarn build`

**npm run start** will run two commands parallel:  
`npx tailwindcss -i ./assets/css/main.css -o ./assets/css/style.css --watch`

Has paginated Categories and Tags. Markdown files will automatically convert images put into `/assets` folder to .webp images. 

## Image shortcodes for webp as well.
{{< imgc src="img-name.jpg" alt="Place alt text here." >}}

## Form
To use the form, visit [FormSubmit.Co](https://formsubmit.co/). Locate the contact form in "content/contact.md", and update the form action with the email address you want on this line: **action="https://formsubmit.co/your@email.com" method="POST"**


## Credits
4044ever - Original Theme
https://github.com/4044ever/Hugo-Tailwind-3.0.git

Jan Heise - Alpine.js Navbar
https://github.com/jan-heise/responsive-navbar-with-dropdown

Made for Hacktoberfest, with ❤️ by NusserStudios.