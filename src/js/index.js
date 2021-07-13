


require("../scss/style.scss");
require("../index.html");

import { MDCTabBar } from '@material/tab-bar';

const tabBar = new MDCTabBar(document.querySelector('.mdc-tab'));

import { MDCRipple } from '@material/ripple';

const selector = '.mdc-button, .mdc-icon-button, .mdc-card__primary-action';
const ripples = [].map.call(document.querySelectorAll(selector), function (el) {
  return new MDCRipple(el);
});

//OVERVIEW
const tableofContents = [
  {
    image: 'https://marketingmbs.com/wp-content/uploads/2021/03/design.png',
    title: 'Branding',
    description: 'Features and characteristics that identifies distinct appearances of the organization(s). Branding includes logo, color, typography, iconography and more.',
  },
  {
    image: 'https://jirasupport.files.wordpress.com/2019/06/canva-single-web-layout-icon-mab7kyq7w7k.png',
    title: 'Layout',
    description: 'Structural compositions that the system can use to build out web pages. These compositions will be explained further as they relate to various devices and resolutions.',
  },
]

const tableObjToHTML = () => {
  let html = "";
  for (let i = 0; i < tableofContents.length; i++) {
    let image = tableofContents[i].image;
    let title = tableofContents[i].title;
    let description = tableofContents[i].description;
    html += `<div class="mdc-card my-card my-card-content ${title}" style="display: inline-block;"  id=card-${i}'>
      
    <div class='mdc-card__media mdc-card__media--16-9' style='background-image:url(${image})'></div>
  
      <div class="mdc-card-wrapper__text-section"><!---->
      <div class="my-card__title"><h3>${title}</h3></div>
      <div class="my-card__subhead"></div>
      <hr>
    <!----></div>
      <div class="mdc-card-wrapper__text-section"><!----><div class="my-card__supporting-text">
          <p>${description}</p>
        </div><!----></div>
    </div>`

  }

  return html
}

const overviewHTML = `
<div class="js-brand-btn" style="padding:15px;">
<h5 style="text-align:center"> This guide serves as a resource to bring together your various brands and help define their visual and
stylistic elements.</h5>
<hr />
<div class="center" style="vertical-align: middle;">
<h2 style="display:inline-block; vertical-align: middle; color: black; text-decoration: none">media</h2> <img
    style="width: 25px; display:inline-block;vertical-align: middle;"
    src="../images/240px-Eo_circle_purple_number-7.svg (1).png"
    alt="logo">
<h2 style="display:inline-block;vertical-align: middle; color: black;text-decoration: none">seven</h2>
</div>
<h3 class="center" style="padding-bottom:20px">Table of Contents</h3>
<div class="card-holder">
${tableObjToHTML()}
</div>
`

window.addEventListener("load", function () {
  document.getElementById("js-content").innerHTML = overviewHTML;
  document.getElementById('js-overview-line').classList.add('mdc-tab-indicator__content--underline')
});


document.getElementById("js-overview-tab").addEventListener("click", function () {
  document.getElementById("js-content").innerHTML = overviewHTML;
  document.getElementById("js-overview-tab").classList.add("mdc-tab--active");
  document.getElementById('js-overview-line').classList.add('mdc-tab-indicator__content--underline');
  document.getElementById("js-branding-line").classList.remove("mdc-tab-indicator__content--underline");
  document.getElementById("js-branding-tab").classList.remove("mdc-tab--active");
});




// BRANDING 

const typography = [
  {
    name: 'Fira Sans Condensed Medium',
    size: '45px',
    weight: 500,
    subheading: '',
  },
  {
    name: 'Fira Sans Condensed Bold',
    size: '38px',
    weight: 700,
    subheading: '',
  },
  {
    name: 'Fira Sans Condensed Medium',
    size: '32px',
    weight: 500,
    subheading: '',
  },
  {
    name: 'Fira Sans Condensed Medium',
    size: '26px',
    weight: 500,
    subheading: '',
  },
  {
    name: 'Fira Sans Condensed Regular',
    size: '20px',
    weight: 400,
    subheading: 'Body',
  },
  {
    name: 'Fira Sans Condensed Regular',
    size: '16px',
    weight: 400,
    subheading: 'Body 2',
  },
]

const typoObjToHTML = () => {
  let html = "";
  for (let i = 0; i < typography.length; i++) {
    let name = typography[i].name;
    let size = typography[i].size;
    let weight = typography[i].weight;
    let subheading = typography[i].subheading;
    html += `<tr>
    <td>
        <h5>${name}</h5>
        <p>Font Size: ${size}</p>
    </td>
    <td></td>
    <td>
        <p style="font-weight: bold;">${subheading}</p>
        <p style="font-weight: ${weight}; font-size: ${size};">The quick brown fox jumps over the lazy dog</p>
    </td>
</tr>`
  }
  return html
}

//-------------------------------

const palette = [
  {
    name: 'Deep Purple',
    textclr: 'white',
    subheading: 'hex: 5303c2',
    color: '#5303c2',

  },
  {
    name: 'Prime Blue',
    textclr: 'white',
    subheading: 'hex: 1515ad',
    color: '#1515ad',
  },
  {
    name: 'Prime White',
    textclr: 'black',
    subheading: 'hex: ffffff',
    color: '#ffffff',
  },
  {
    name: 'Prime Gray',
    textclr: 'black',
    subheading: 'hex: f1f1f1',
    color: '#f1f1f1'
  },
  {
    name: 'Prime Black',
    textclr: 'white',
    subheading: 'hex: 000000',
    color: '#000000',
  },
  {
    name: 'Prime Pink',
    textclr: 'white',
    subheading: 'hex: ad15ad',
    color: '#ad15ad'
  },
  {
    name: '50% Opacity Gray',
    textclr: 'black',
    subheading: 'hex: f1f1f180',
    color: '#f1f1f180'
  },
  {
    name: 'Dark Gray',
    textclr: 'white',
    subheading: 'hex: 5a585c',
    color: '#5a585c'
  },
  {
    name: 'Prime Gradient',
    textclr:'white ',
    subheading: 'Purple x Black',
    color: 'linear-gradient(90deg, rgba(83,3,194,1) 0%, rgba(52,7,97,1) 100%)'
  },
]


const clrObjtoHTML = () => {
  let html = ``;
  for (let i = 0; i < palette.length; i++) {
    let name = palette[i].name;
    let color = palette[i].color;
    let textclr = palette[i].textclr;
    let subheading = palette[i].subheading;

    html += `
    
    <div style="display: inline-block; width: 20%; margin: 10px; vertical-align: top">
      <p style="font-weight: bold;;">${name}</p>
      <div style=" color: ${textclr}; background: ${color}; height: 125px; border: 1px solid lightgray"><p class="center" style="font-size: 12px;">${subheading.toUpperCase()}</p></div>
    </div>
    `
  }

  return html
}

// const colorHTML = `
//        `

const typoHTML = `
    <div>
        <nav>
            <ul style="margin: 0 auto">
                <li><a href="#" id="js-typo-btn" style="color:#5303c2; font-weight:bold">Typography</a></button></li>
                <li><a href="#"><h5 id='color'>Color</h5></a></li>
                <li><a>Elements</a></li>
            </ul>
        </nav>
    </div>
    <div>
    <h2 style="text-align: left; margin: 20px 0; font-size: 24px; color: black;">Typography</h2>
      <table style="width:100%">
        ${typoObjToHTML()}
      </table>
    </div>
    <div>
    <h2 style="text-align: left; margin: 20px 0; font-size: 24px; color: black;">COLOR</h2>
    ${clrObjtoHTML()}
  </div>
        `

        const clrHTML = `
        <div>
            <nav>
                <ul style="margin: 0 auto">
                    <li><a href="#" id="js-typo-btn" style="color:#5303c2; font-weight:bold">Typography</a></button></li>
                    <li><a href="#"><h5 id='color'>Color</h5></a></li>
                    <li><a>Elements</a></li>
                </ul>
            </nav>
        </div>
        <div>
        <h2 style="text-align: left; margin: 20px 0; font-size: 24px; color: black;">Typography</h2>
          <table style="width:100%">
            ${typoObjToHTML()}
          </table>
        </div>
        <div>
        <h2 style="text-align: left; margin: 20px 0; font-size: 24px; color: black;">COLOR</h2>
        ${clrObjtoHTML()}
      </div>
            `

document.getElementById("js-branding-tab").addEventListener("click", function () {
  console.log("Boo")
  document.getElementById("js-content").innerHTML = typoHTML;
  document.getElementById("js-overview-tab").classList.remove("mdc-tab--active");
  document.getElementById("js-overview-line").classList.remove("mdc-tab-indicator__content--underline");
  document.getElementById("js-branding-line").classList.add("mdc-tab-indicator__content--underline");
  document.getElementById("js-branding-tab").classList.add("mdc-tab--active");
})



document.getElementById("color").addEventListener("click", function () {
  console.log("Boo")
  document.getElementById("js-content").innerHTML = brandingHTML;
  document.getElementById("js-overview-tab").classList.remove("mdc-tab--active");
  document.getElementById("js-overview-line").classList.remove("mdc-tab-indicator__content--underline");
  document.getElementById("js-branding-line").classList.add("mdc-tab-indicator__content--underline");
  document.getElementById("js-branding-tab").classList.add("mdc-tab--active");
})

