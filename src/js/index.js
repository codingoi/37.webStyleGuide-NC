


require("../scss/style.scss");
require("../index.html");

import { MDCTabBar } from '@material/tab-bar';

const tabBar = new MDCTabBar(document.querySelector('.mdc-tab'));

import {MDCRipple} from '@material/ripple';

const selector = '.mdc-button, .mdc-icon-button, .mdc-card__primary-action';
const ripples = [].map.call(document.querySelectorAll(selector), function(el) {
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

const tableToHTML = () => {
  let html = "";
  let mock = ""
  for(let i = 0; i < tableofContents.length; i++) {
    let image = tableofContents[i].image;
    let title = tableofContents[i].title;
    let description = tableofContents[i].description;
    mock += `<div class="mdc-card my-card my-card-content" style='display:inline-block; width:48%'><img src=${image} alt='branding icon' style='width: 100px;'/><h3>${title}</h3><p>${description}</p></div>`
    
    html += `<div class="mdc-card my-card my-card-content" style="display: inline-block;">
      
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
<h3> This guide serves as a resource to bring together your various brands and help define their visual and
stylistic elements.</h3>
<hr />
<h3 style="padding-bottom:20px">Table of Contents</h3>
<div class="card-holder">
${tableToHTML()}
</div>
`

//window.addEventListener("load", function () {
//  document.getElementById("js-content").innerHTML = overviewHTML;
//});

document.getElementById("js-overview-tab").addEventListener("click", function () {
  document.getElementById("js-content").innerHTML = overviewHTML;
  document.getElementById("js-overview-tab").classList.toggle("mdc-tab--active")
});


