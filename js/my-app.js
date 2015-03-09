// Initialize your app
var myApp = new Framework7();

// Export selectors engine
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true
});

$$(document).on('pageInit', function (e) {
   var page = e.detail.page;
   console.log("page.name: " + page.name);
   if (page.name == 'topic1') {
        var topicSwiper = new Swiper('.topic-swiper', {
            pagination:'.topic-swiper-pagination',
            direction: 'vertical'
        });

        var opinionSwiper1 = new Swiper('#opinion-swiper-1', {
            pagination:'#opinion-swiper-1-pagination',
            spaceBetween: 50
        });

        var opinionSwiper2 = new Swiper('#opinion-swiper-2', {
            pagination:'#opinion-swiper-2-pagination',
            spaceBetween: 50
        });

        var opinionSwiper3 = new Swiper('#opinion-swiper-3', {
            pagination:'#opinion-swiper-3-pagination',
            spaceBetween: 50
        });

        var opinionSwiper4 = new Swiper('#opinion-swiper-4', {
            pagination:'#opinion-swiper-4-pagination',
            spaceBetween: 50
        });

        var opinionSwiper5 = new Swiper('#opinion-swiper-5', {
            pagination:'#opinion-swiper-5-pagination',
            spaceBetween: 50
        });
   }
})

// Init slider and store its instance in mySwiper variable
var mySwiperAllTopics = myApp.swiper('#all-topics', {
    pagination:'.swiper-pagination',
    effect: 'fade'
});

$$('.t1-q1-o1').on('opened', function () {
  console.log('t1-q1-o1 opened')
});
$$('.t1-q1-o1').on('close', function () {
  console.log('t1-q1-o1 is closing')
});

$$('.t1-q1-o2').on('opened', function () {
  console.log('t1-q1-o2 opened')
});
$$('.t1-q1-o2').on('close', function () {
  console.log('t1-q1-o2 is closing')
});

$$('.t1-q1-o3').on('opened', function () {
  console.log('t1-q1-o3 opened')
});
$$('.t1-q1-o3').on('close', function () {
  console.log('t1-q1-o3 is closing')
});

// Generate dynamic page
var dynamicPageIndex = 0;
function createContentPage() {
	mainView.router.loadContent(
        '<!-- Top Navbar-->' +
        '<div class="navbar">' +
        '  <div class="navbar-inner">' +
        '    <div class="left"><a href="#" class="back link"><i class="icon icon-back"></i><span>Back</span></a></div>' +
        '    <div class="center sliding">Dynamic Page ' + (++dynamicPageIndex) + '</div>' +
        '  </div>' +
        '</div>' +
        '<div class="pages">' +
        '  <!-- Page, data-page contains page name-->' +
        '  <div data-page="dynamic-pages" class="page">' +
        '    <!-- Scrollable page content-->' +
        '    <div class="page-content">' +
        '      <div class="content-block">' +
        '        <div class="content-block-inner">' +
        '          <p>Here is a dynamic page created on ' + new Date() + ' !</p>' +
        '          <p>Go <a href="#" class="back">back</a> or go to <a href="services.html">Services</a>.</p>' +
        '        </div>' +
        '      </div>' +
        '    </div>' +
        '  </div>' +
        '</div>'
    );
	return;
}