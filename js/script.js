// *************************
// モーダルウィンドウ
// *************************
jQuery(".js-modal-open").on("click", function (e) {
  e.preventDefault();

  jQuery("#js-privacy-modal")[0].showModal();
});

jQuery(".js-modal-close").on("click", function (e) {
  e.preventDefault();

  jQuery("#js-privacy-modal")[0].close();
});

// *************************
// formの入力確認
// *************************
$(function () {
  let $submit = $("#js-submit");
  $("#js-form input").on("change", function () {
    if (
      $('#js-form input[name="your-name"]').val() !== "" &&
      $('#js-form input[name="your-mail"]').val() !== "" &&
      $('#js-form textarea[name="your-message"]').val() !== ""
    ) {
      // 全て入力された時
      $submit.prop("disabled", false);
      $submit.addClass("-active");
    } else {
      // 全て入力されていない時
      $submit.prop("disabled", true);
      $submit.removeClass("-active");
    }
  });
});

// *************************
// スムーススクロール
// *************************
jQuery('a[href^="#"]').on("click", function (e) {
  e.preventDefault();
  const speed = 500;
  const id = jQuery(this).attr("href");
  const target = jQuery("#" == id ? "html" : id);
  const position = jQuery(target).offset().top;
  jQuery("html, body").animate(
    {
      scrollTop: position,
    },
    speed,
    "swing" // swing or linear
  );
});

// *************************
// ページトップボタン
// *************************
jQuery(window).on("scroll", function () {
  if (100 < jQuery(window).scrollTop()) {
    jQuery("#js-pagetop").addClass("is-show");
  } else {
    jQuery("#js-pagetop").removeClass("is-show");
  }
});

// *************************
// ScrollTrigger(.p-about__footer-image)
// *************************
// セレクタ ".js-trigger" で要素を取得
const items = gsap.utils.toArray(".js-trigger-scrub");

// 各要素に対してアニメーションを設定
items.forEach((item) => {
  gsap.fromTo(
    item.querySelector("img"), // アニメーションを適用する画像要素を取得
    {
      yPercent: 0, // パララックス前の要素の位置
    },
    {
      yPercent: -20, // 上に要素の幅の1/5分移動
      ease: "none", // イージングなし
      scrollTrigger: {
        trigger: item, // アニメーションのトリガー要素
        start: "top bottom", // アニメーション開始位置
        end: "bottom top", // アニメーション終了位置
        scrub: 1, // 動作を遅らせる
      },
    }
  );
});

// *************************
// ScrollTrigger(.p-shop__header-image)
// *************************
gsap.to(".js-animation-section", {
  //アニメーションしたい要素を指定
  scale: 1.2,
  scrollTrigger: {
    trigger: ".js-trigger-zoom", //アニメーションが始まるトリガーとなる要素
    start: "top center", //アニメーションが始まる位置
    markers: false,
  },
});
