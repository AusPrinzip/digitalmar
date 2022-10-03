class Chooseus extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback () {
    this.innerHTML = `
    <!-- ======= Why Choose Us Section ======= -->
    <section id="why-us" class="why-us">
      <div class="container" data-aos="fade-up">

        <div class="section-header">
          <h2>Why Choose Us</h2>

        </div>

        <div class="row g-0" data-aos="fade-up" data-aos-delay="200">

          <div class="col-xl-5 img-bg" style="background-image: url('assets/img/why-us-bg.jpg')"></div>
          <div class="col-xl-7 slides  position-relative">

            <div class="slides-1 swiper">
              <div class="swiper-wrapper">

                <div class="swiper-slide">
                  <div class="item">
                    <h3 class="mb-3">Let's grow your business together</h3>
                    <h4 class="mb-3">Delegating effectively saves time, helps you as a leader and your team develop as professionals, prepares you to manage larger teams, and inspires employees and team members to perform better.</p>
                  </div>
                </div><!-- End slide item -->

                <div class="swiper-slide">
                  <div class="item">
                    <h3 class="mb-3">Quality over Quantity</h3>
                    <h4 class="mb-3">Quality products help to maintain customer satisfaction and loyalty and reduce the risk and cost of replacing faulty goods. Companies can build a reputation for quality by gaining accreditation with a recognized quality standard.</p>
                  </div>
                </div><!-- End slide item -->

                <div class="swiper-slide">
                  <div class="item">
                    <h3 class="mb-3">On-time delivery</h3>
                    <h4 class="mb-3">On-time delivery is an important factor that makes our customers happy and contributes significantly to a consumer’s perception of a business.</p>
                  </div>
                </div><!-- End slide item -->

                <div class="swiper-slide">
                  <div class="item">
                    <h3 class="mb-3">Ask anytime for quotes!</h3>
                    <h4 class="mb-3">Non-binding quotes are not contracts.</h4>
                    <p> They are drawn up to provide a reference to customers during a job, but the moving company isn't obligated to stay at or below the estimate. This is because moving jobs vary dramatically depending on additional services, shipment weight and required labor.</p>
                  </div>
                </div><!-- End slide item -->

              </div>
              <div class="swiper-pagination"></div>
            </div>
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
          </div>

        </div>

      </div>
    </section><!-- End Why Choose Us Section -->
    `
  }
}

customElements.define('chooseus-component', Chooseus);
