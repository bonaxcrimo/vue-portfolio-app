<template>
  <section>
    <h2 class="text-center raleway page-head">Get in Touch</h2>
    <div class="row">
      <div class="col-sm-12 text-center main-contact">
        <p>
          <a href="mailto:bonaxcrimo@gmail.com">
            <span class="roboto">bonaxcrimo@gmail.com</span>
          </a>
        </p>
        <p>
          <a href="tel:++6281283646374">
            <span class="roboto">+62812-8364-6374</span>
          </a>
        </p>
      </div>
    </div>
    <div class="row justify-content-md-center">
      <div class="col-sm-1 contact-seprator">
        <div/>
        <div/>
      </div>
    </div>
    <div class="row justify-content-md-center">
      <div class="col-sm-10 col-md-10 text-center social-contact">
        <div class="row">
          <div class="col-sm-12 col-lg-2 col-md-4 col-lg-offset-1">
            <p>
              <a
                href="https://github.com/bonaxcrimo"
                target="_blank"
                rel="noopener noreferrer"
              >/bonaxcrimo</a>
            </p>
          </div>
          <div class="col-sm-12 col-lg-4 col-md-4">
            <p>
              <a
                href="https://www.linkedin.com/in/bona-tua-1b8685130/"
                target="_blank"
                rel="noopener noreferrer"
              >/bona tua manihuruk</a>
            </p>
          </div>
          <div class="col-sm-12 col-lg-2 col-md-4">
            <p>
              <a
                href="https://www.facebook.com/bonadv"
                target="_blank"
                rel="noopener noreferrer"
              >/bona tua</a>
            </p>
          </div>
          <div class="col-sm-12 col-lg-2 col-md-4">
            <p>
              <a
                href="https://dribbble.com/RainMustbeDark"
                target="_blank"
                rel="noopener noreferrer"
              >/bonaxcrimo</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style>
h2 {
  font-weight: 500;
  font-size: 48px !important;
}
/*contact css*/
.social-contact img {
  width: 20px;
  margin-right: 1px;
  vertical-align: text-bottom;
}

.main-contact img {
  margin-right: 3px;
  vertical-align: text-bottom;
}

.social-contact a,
.main-contact a {
  color: black;
}
.social-contact a:hover,
.main-contact a:hover {
  color: black;
}
.fa-circle-inverse {
  color: white;
  background: black;
  border-radius: 100%;
  width: 18px;
  height: 18px;
  padding: 2.5px;
  font-size: 14px !important;
}

.page-head {
  margin-top: 100px;
  margin-bottom: 70px;
}

.contact-seprator div {
  width: 100%;
  height: 1px;
  background: #979797;
}

.contact-seprator div:last-child {
  width: 50%;
  margin: 8px 25%;
}

.contact-seprator {
  margin-bottom: 70px;
}
</style>
