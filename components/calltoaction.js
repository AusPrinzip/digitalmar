class Calltoaction extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback () {
    this.innerHTML = `
    <!-- ======= Call To Action Section ======= -->
    <section id="call-to-action" class="call-to-action">
      <div class="container" data-aos="fade-up">
        <div class="row justify-content-center">
          <div class="col-lg-6 text-center">
            <h3>Don't be shy, ask for a non-binding quote!</h3>
            <p>We will gladly give you a quote for your needs in a timely manner. Do not hesitate!</p>
            <a class="cta-btn" href="#">Call To Action</a>
          </div>
        </div>

      </div>
    </section><!-- End Call To Action Section -->
    `
  }
}

customElements.define('calltoaction-component', Calltoaction);
