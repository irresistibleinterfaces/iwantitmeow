document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("header-placeholder").innerHTML = `

  <header class="sticky top-0 z-40 shadow-sm" style="max-width: 100%;">

      <!-- nav start -->
      <div class="container">
        <nav class="navbar">
          <div class="hamburger">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
          </div>
          <a href="index.html" class="text-2xl font-bold tracking-tight" style="font-family: 'Montserrat', sans-serif; padding: 0 30px;">iwantit<span style="color: #febfd1">meow</span></a>
          <ul class="nav-menu" style="padding: 20px 0;">
            <li class="cat-list-item active"><a href="index.html" style="color: #febfd1">Home</a></li>
            <li class="cat-list-item"><a href="#blog" title="Blog">Blog</a></li>
            <li class="cat-list-item"><a href="#featured" title="Featured">Featured</a></li>
            <li class="cat-list-item"><a href="cosplay-classics.html" title="Cosplay Classics">Cosplay Classics</a></li>
            <li class="cat-list-item"><a href="pop-culture.html" title="Pop Culture">Pop Culture</a></li>
            <li class="cat-list-item"><a href="accessories.html" title="Accessories">Accessories</a></li>
            <li class="cat-list-item"><a href="#" title="All Costumes">All Costumes</a></li>
            <li class="cat-list-item"><a href="xmas-sale.html" title="Christmas Sale">Christmas Sale</a></li>
          </ul>

          <!-- Nav / Mega -->
          <div class="align-right hidden-sometimes nav-underline">

        <a class="text-sm font-medium text-white active" href="#" style="color: #febfd1">Home</a>
            <div class="navlink group">
              <button class="text-sm font-medium text-white"><a href="#shop-by-category">Shop</a></button>

              <!-- example mega content -->
              <div class="absolute hidden group-hover:block mt-1 mega">
                <div class="grid grid-cols-2 gap-6 align-left sticky">
                  <div>
                    <h4 class="text-sm font-semibold mb-2">Collections</h4>
                    <ul class="space-y-1 text-sm text-gray-600">
                      <li><a href="#featured">Featured</a></li>
                      <li><a href="cosplay-classics.html">Cosplay Classics</a></li>
                      <li><a href="pop-culture.html">Pop Culture</a></li>
                      <li><a href="accessories.html">Accessories</a></li>
                      <li><a href="all-costumes.html">Browse All</a></li>
                    </ul>
                  </div>
                  <div>
                    <img src="images/boi-mia-lrg1.jpg" alt="dog and cat in dress-up wings" class="w-full rounded">
                  </div>
                </div>
              </div>
            </div>
        <a class="text-sm font-medium text-white nav-underline" href="#">Blog</a>
        <a class="text-sm font-medium text-white nav-underline" href="#">About</a>
        <a class="text-sm font-medium text-white nav-underline" href="#">Contact Us</a>
          </div>
        </nav>
      </div>
    </header>
  `;

  document.getElementById("footer-placeholder").innerHTML = `

    <footer id="footer">
      <div class="container">
        <div class="footer-menu-list">
          <div class="row d-flex flex-wrap justify-content-between">
            <div class="col-lg-3 col-md-6 col-sm-6">
              <div class="footer-menu">
                <h5 class="widget-title">I Want It Meow</h5>
                <ul class="menu-list list-unstyled">
                  <li class="menu-item"><a href="about.html">About us</a></li>
                  <li class="menu-item"><a href="faqs.html">FAQ</a></li>
                  <li class="menu-item"><a href="terms.html">Terms & Conditions</a></li>
                  <li class="menu-item"><a href="privacy-policy.html">Privacy Policy</a></li>
                  <li class="menu-item"><a href="return-and-refund-policy.html">Returns & Refunds</a></li>
                  <li class="menu-item"><a href="cookies.html">Cookie Guidelines</a></li>
                  <li class="menu-item"><a href="shipping.html">Delivery Information</a></li>
                </ul>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6">
              <div class="footer-menu">
                <h5 class="widget-title">Contact Us</h5>
                <p>Do you have any questions? <a href="#" class="email">irresistibleinterfaces@gmail.com</a></p>
                <p>Prefer to speak to a human? Send us an email with your contact details and a brief description of the purpose of the call and a representative will contact you by phone within two business days.</p>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6">
              <div class="footer-menu">
                <h5 class="widget-title"><a href="irresistibleinterfaces.com.au">Irresistible Interfaces</a></h5>
                <p>Irresistible Interfaces is an Australia-based design & development studio creating fast, accessible ecommerce experiences and conversions that actually convert. Need a site like this? <a href="https://irresistibleinterfaces.com.au/">Let’s talk</a>.</p>
                <div class="social-links">
                  <ul class="d-flex list-unstyled">
                    <li><a href="#"><i class="icon icon-facebook"></i></a></li>
                    <li><a href="#"><i class="icon icon-github"></i></a></li>
                    <li><a href="#"><i class="icon icon-youtube-play"></i></a></li>
                    <li><a href="#"><i class="icon icon-google"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr>
  <p>© <span id="year"></span> My Pet Costume Shop</p>
</footer>

  `;
});
