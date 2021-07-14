


require("../scss/style.scss");
require("../index.html");

// import { MDCTabBar } from '@material/tab-bar';

// const tabBar = new MDCTabBar(document.querySelector('.mdc-tab'));

// import { MDCRipple } from '@material/ripple';

// const selector = '.mdc-button, .mdc-icon-button, .mdc-card__primary-action';
// const ripples = [].map.call(document.querySelectorAll(selector), function (el) {
//   return new MDCRipple(el);
// });

// import {MDCTextField} from '@material/textfield';

// const textField = new MDCTextField(document.querySelector('.mdc-text-field'));

//const buttonRipple = new MDCRipple(document.querySelector('.mdc-button'));

// import {MDCTopAppBar} from '@material/top-app-bar';

// // Instantiation
// const topAppBarElement = document.querySelector('.mdc-top-app-bar');
// const topAppBar = new MDCTopAppBar(topAppBarElement);

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

var buttons = document.querySelectorAll('.mdc-button, .mdc-fab');
for (var i = 0, button; button = buttons[i]; i++) {
  mdc.ripple.MDCRipple.attachTo(button);
}

var nodes = document.querySelectorAll('.mdc-icon-toggle');
for (var i = 0, node; node = nodes[i]; i++) {
  mdc.iconToggle.MDCIconToggle.attachTo(node);
}

var checkboxes = document.querySelectorAll('.mdc-checkbox');
for (var i = 0, checkbox; checkbox = checkboxes[i]; i++) {
  new mdc.checkbox.MDCCheckbox(checkbox);
}

var radios = document.querySelectorAll('.mdc-radio');
for (var i = 0, radio; radio = radios[i]; i++) {
  new mdc.radio.MDCRadio(radio);
}

var interactiveListItems = document.querySelectorAll('.mdc-list-item');
for (var i = 0, li; li = interactiveListItems[i]; i++) {
  mdc.ripple.MDCRipple.attachTo(li);
  // Prevent link clicks from jumping demo to the top of the page
  li.addEventListener('click', function(evt) {
    evt.preventDefault();
  });
}


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
                <li><a href="#typography" id="js-typo-btn" style="color:#5303c2; font-weight:bold">Typography</a></button></li>
                <li><a href="#color"><h5>Color</h5></a></li>
                <li><a href="#elements">Elements</a></li>
            </ul>
        </nav>
    </div>
    <div>
    <h2 style="text-align: left; margin: 20px 0; font-size: 24px; color: black;"id="typography">TYPOGRAPHY</h2>
      <table style="width:100%">
        ${typoObjToHTML()}
      </table>
    </div>
    <div>
    <h2 style="text-align: left; margin: 20px 0; font-size: 24px; color: black;" id="color">COLOR</h2>
    ${clrObjtoHTML()}
    <h2 style="text-align: left; margin: 20px 0; font-size: 24px; color: black;" id="elements">ELEMENTS</h2>
    <div class="mdc-components">
  <div class="mdc-components__section">
    <div class="mdc-components__column">
      <div>
        <div class="mdc-component mdc-component__buttons">
          <p>Buttons</p>
          <div class="mdc-component__section">
            <div class="mdc-component__containers">
              <div class="mdc-component__containers__primary">
                <p>Primary</p><button class="mdc-fab material-icons" aria-label="Add"><span class="mdc-fab__icon">add</span></button> <button class="mdc-fab material-icons mdc-fab--plain" aria-label="Add"><span class="mdc-fab__icon">add</span></button>
                <button
                  type="button" class="mdc-button mdc-button--plain">Normal</button> <button type="button" class="mdc-button mdc-button--raised">Normal</button></div>
              <div class="mdc-component__containers__secondary">
                <p>Secondary</p><button class="mdc-fab material-icons" aria-label="Add"><span class="mdc-fab__icon">add</span></button> <button class="mdc-fab material-icons mdc-fab--plain" aria-label="Add"><span class="mdc-fab__icon">add</span></button>                <button type="button" class="mdc-button mdc-button--plain">Normal</button> <button type="button" class="mdc-button mdc-button--raised">Normal</button></div>
            </div>
          </div>
        </div>
      </div>
      <span class="flex"></span>
      <div>
        <div class="mdc-component mdc-component__selection">
          <p>Selection</p>
          <div class="mdc-component__section mdc-component__section--size-narrow">
            <div dir-horizontal="" class="mdc-component__containers">
              <div class="mdc-component__containers__primary">
                <p style="position: absolute; left: 16px; padding-bottom: 40px;">Primary</p>
                <div class="mdc-snackbar" aria-live="assertive" aria-atomic="true" aria-hidden="true">
                  <div class="mdc-snackbar__text">Single-line snackbar</div>
                  <div class="mdc-snackbar__action-wrapper"><button type="button" class="mdc-button mdc-snackbar__action-button" style="color: rgb(83, 3, 194);">Action</button></div>
                </div>
              </div>
              <div class="mdc-component__containers__secondary">
                <p style="position: absolute; left: 16px; padding-top: 52px;">Secondary</p>
                <div class="mdc-snackbar mdc-snackbar__secondary" aria-live="assertive" aria-atomic="true" aria-hidden="true">
                  <div class="mdc-snackbar__text">Single-line snackbar</div>
                  <div class="mdc-snackbar__action-wrapper"><button type="button" class="mdc-button mdc-snackbar__action-button" style="color: rgb(0, 0, 0);">Action</button></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mdc-components__column">
      <div>
        <div class="mdc-component mdc-component__switches">
          <p>Switches and sliders</p>
          <div class="mdc-component__section mdc-component__section--size-narrow">
            <div dir-horizontal="" class="mdc-component__containers">
              <div class="mdc-component__containers__primary">
                <p>Primary</p>
                <div class="mdc-checkbox mdc-ripple-upgraded--unbounded"><input type="checkbox" checked="" class="mdc-checkbox__native-control">
                  <div class="mdc-checkbox__background"><svg version="1.1" class="mdc-checkbox__checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" xml:space="preserve"><path class="mdc-checkbox__checkmark__path" fill="none" stroke="white" d="M1.73,12.91 8.1,19.28 22.79,4.59"></path></svg>
                    <div
                      class="mdc-checkbox__mixedmark"></div>
                </div>
              </div>
              <div class="mdc-radio"><input class="mdc-radio__native-control" type="radio" checked="">
                <div class="mdc-radio__background">
                  <div class="mdc-radio__outer-circle"></div>
                  <div class="mdc-radio__inner-circle"></div>
                </div>
              </div>
              <div class="mdc-switch"><input type="checkbox" class="mdc-switch__native-control" checked="">
                <div class="mdc-switch__background">
                  <div class="mdc-switch__knob"></div>
                </div>
              </div>
            </div>
            <div class="mdc-component__containers__secondary">
              <p>Secondary</p>
              <div class="mdc-checkbox"><input type="checkbox" checked="" class="mdc-checkbox__native-control">
                <div class="mdc-checkbox__background"><svg version="1.1" class="mdc-checkbox__checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" xml:space="preserve"><path class="mdc-checkbox__checkmark__path" fill="none" stroke="white" d="M1.73,12.91 8.1,19.28 22.79,4.59"></path></svg>
                  <div
                    class="mdc-checkbox__mixedmark"></div>
              </div>
            </div>
            <div class="mdc-radio"><input class="mdc-radio__native-control" type="radio" checked="">
              <div class="mdc-radio__background">
                <div class="mdc-radio__outer-circle"></div>
                <div class="mdc-radio__inner-circle"></div>
              </div>
            </div>
            <div class="mdc-switch"><input type="checkbox" class="mdc-switch__native-control" checked="">
              <div class="mdc-switch__background">
                <div class="mdc-switch__knob"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <span class="flex"></span>
  <div>
    <div class="mdc-component mdc-component__cards">
      <p>Cards</p>
      <div class="mdc-component__section">
        <div class="mdc-component__containers__primary">
          <div class="mdc-card">
            <section class="mdc-card__header">
              <div class="demo-card__avatar"></div>
              <div>
                <p class="mdc-card__title">Title</p>
                <p class="mdc-card__subtitle">Subhead</p>
              </div>
            </section>
            <section class="mdc-card__media">
              <div class="material-image" width="262" height="262"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 300 300" style="enable-background:new 0 0 300 300;" xml:space="preserve"><g><rect x="0.3" y="0.5" width="300" height="300" class="material-image__background"></rect><g><path class="material-image--shape-circle" d="M124.5,171l26.3-45.5c-7.7-4.6-16.7-7.2-26.3-7.2c-28.6,0-51.7,23.2-51.7,51.7c0,28.6,23.2,51.7,51.7,51.7 c28.3,0,51.2-22.6,51.7-50.8H124.5z"></path><path class="material-image--shape-triangle" d="M176.2,170.1c0,0.3,0,0.6,0,1H228l-51.7-89.6l-25.5,44.1C166,134.5,176.2,151.1,176.2,170.1z"></path><path class="material-image--shape-intersection" d="M176.2,171c0-0.3,0-0.6,0-1c0-19-10.2-35.6-25.5-44.6L124.5,171H176.2z"></path></g></g></svg></div>
            </section>
            <section class="mdc-card__supporting-text">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</section>
            <section class="mdc-card__actions"><button type="button" class="mdc-button mdc-button--raised mdc--theme-secondary">Button</button></section>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
<div class="mdc-components__section">
  <div class="mdc-components__column">
    <div>
      <div class="mdc-component mdc-component__menu">
        <p>Menu</p>
        <div class="mdc-component__section">
          <div class="mdc-component__section__content">
            <div class="mdc-component__section__content__frame">
              <header class="mdc-toolbar">
                <section class="mdc-toolbar__section mdc-toolbar__section--align-start"><a class="material-icons">menu</a> <span class="mdc-toolbar__title">Title</span></section>
              </header>
              <nav class="mdc-permanent-drawer">
                <div class="mdc-list-group">
                  <nav class="nav-header">
                    <div class="material-image" width="240" height="240"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 300 300" style="enable-background:new 0 0 300 300;" xml:space="preserve"><g><rect x="0.3" y="0.5" width="300" height="300" class="material-image__background"></rect><g><path class="material-image--shape-circle" d="M124.5,171l26.3-45.5c-7.7-4.6-16.7-7.2-26.3-7.2c-28.6,0-51.7,23.2-51.7,51.7c0,28.6,23.2,51.7,51.7,51.7 c28.3,0,51.2-22.6,51.7-50.8H124.5z"></path><path class="material-image--shape-triangle" d="M176.2,170.1c0,0.3,0,0.6,0,1H228l-51.7-89.6l-25.5,44.1C166,134.5,176.2,151.1,176.2,170.1z"></path><path class="material-image--shape-intersection" d="M176.2,171c0-0.3,0-0.6,0-1c0-19-10.2-35.6-25.5-44.6L124.5,171H176.2z"></path></g></g></svg></div>
                  </nav>
                  <nav class="mdc-list"><a class="mdc-list-item" href="#"><i class="material-icons mdc-list-item__start-detail" aria-hidden="true">share</i>Share</a>
                    <div class="mdc-list-item mdc-permanent-drawer--selected" href="#"><i class="material-icons mdc-list-item__start-detail" aria-hidden="true">cloud_upload</i>Upload</div><a class="mdc-list-item" href="#"><i class="material-icons mdc-list-item__start-detail" aria-hidden="true">content_copy</i>Copy</a>                    <a class="mdc-list-item" href="#"><i class="material-icons mdc-list-item__start-detail" aria-hidden="true">print</i>Print this page</a></nav>
                </div>
              </nav>
              <div class="mdc-backdrop"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <span class="flex"></span>
    <div>
      <div class="mdc-component mdc-component__textfield">
        <p>Text Field</p>
        <div class="mdc-component__section mdc-component__section--size-narrow">
          <div dir-horizontal="" class="mdc-component__containers">
            <div class="mdc-component__containers__primary mdc-textfield--theme-primary">
              <p>Primary</p>
              <div class="mdc-textfield"><input type="text" id="textfield-primary" class="mdc-textfield__input" placeholder="Single-line input label" value="Input text for a single line"> <label for="textfield-primary" class="mdc-textfield__label mdc-textfield__label--float-above">Single-line input label</label></div>
            </div>
            <div class="mdc-component__containers__secondary mdc-textfield--theme-secondary">
              <p>Secondary</p>
              <div class="mdc-textfield"><input type="text" id="textfield-primary" class="mdc-textfield__input" placeholder="Single-line input label" value="Input text for a single line"> <label for="textfield-primary" class="mdc-textfield__label mdc-textfield__label--float-above">Single-line input label</label></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="mdc-components__column">
    <div>
      <div class="mdc-component mdc-component__toolbar">
        <p>Tool Bar</p>
        <div class="mdc-component__section mdc-component__section--size-full">
          <div class="mdc-component__section__content">
            <div class="mdc-component__section__content__frame">
              <section class="app-bar"></section>
              <header class="mdc-toolbar mdc--theme-primary">
                <section class="mdc-toolbar__section mdc-toolbar__section--align-start"><i class="mdc-icon-toggle material-icons" role="button" aria-label="Search">menu</i> <span class="mdc-toolbar__title">Title</span></section>
                <section class="mdc-toolbar__section mdc-toolbar__section--align-end" role="toolbar"><i class="mdc-icon-toggle material-icons" role="button" aria-label="Search">search</i> <i class="mdc-icon-toggle material-icons" role="button" aria-label="Menu">more_vert</i></section>
              </header>
              <main>
                <div class="cover-image__frame">
                  <section class="cover-image">
                    <div class="material-image" width="340" height="340"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 300 300" style="enable-background:new 0 0 300 300;" xml:space="preserve"><g><rect x="0.3" y="0.5" width="300" height="300" class="material-image__background"></rect><g><path class="material-image--shape-circle" d="M124.5,171l26.3-45.5c-7.7-4.6-16.7-7.2-26.3-7.2c-28.6,0-51.7,23.2-51.7,51.7c0,28.6,23.2,51.7,51.7,51.7 c28.3,0,51.2-22.6,51.7-50.8H124.5z"></path><path class="material-image--shape-triangle" d="M176.2,170.1c0,0.3,0,0.6,0,1H228l-51.7-89.6l-25.5,44.1C166,134.5,176.2,151.1,176.2,170.1z"></path><path class="material-image--shape-intersection" d="M176.2,171c0-0.3,0-0.6,0-1c0-19-10.2-35.6-25.5-44.6L124.5,171H176.2z"></path></g></g></svg></div>
                  </section><button class="mdc-fab material-icons mdc--theme-secondary" aria-label="Add"><span class="mdc-fab__icon">add</span></button></div>
                <section class="content">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies
                  mi vitae est. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante</section>
              </main>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>

        `;

      const topbutton = `<button style="background-color: #5303C2; position: fixed; bottom: 10px; left: 5%;" class="mdc-fab inline-demo-fab mdc-ripple-upgraded mdc-fab--mini" style="--mdc-ripple-fg-size:33px; --mdc-ripple-fg-scale:2.70291; --mdc-ripple-fg-translate-start:15.1667px, 20.5px; --mdc-ripple-fg-translate-end:11.5px, 11.5px;">
      <div class="mdc-fab__ripple"></div>
    <i aria-hidden="true" class="material-icons mdc-fab__icon"><!---->arrow_upward<!----></i>
    </button>`
      

document.getElementById("js-branding-tab").addEventListener("click", function () {
  console.log("Boo")
  document.getElementById("js-top-button").innerHTML = topbutton;
  document.getElementById("js-content").innerHTML = typoHTML;
  document.getElementById("js-overview-tab").classList.remove("mdc-tab--active");
  document.getElementById("js-overview-line").classList.remove("mdc-tab-indicator__content--underline");
  document.getElementById("js-branding-line").classList.add("mdc-tab-indicator__content--underline");
  document.getElementById("js-branding-tab").classList.add("mdc-tab--active");
});





