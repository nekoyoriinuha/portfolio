// ヘッダースクロール制御
$(window).scroll(function() {
    var fvHeight = $('.fv').height(); // fv要素の高さを取得
    var scrollTop = $(window).scrollTop(); // 現在のスクロール位置を取得

    if (scrollTop >= fvHeight) {
        $('.header').addClass('change-color'); // スクロール位置がfvの高さを超えたらクラスを追加
    } else {
        $('.header').removeClass('change-color'); // そうでなければクラスを削除
    }
});


// スムーススクロール
$(document).ready(function() {
    // スムーススクロールの処理を関数にまとめる
    function smoothScroll(target) {
        var speed = 400;
        var position = target.offset().top;
        var headerHeight = $('.header').outerHeight();

        $('html, body').animate({scrollTop: position - headerHeight}, speed, 'swing');
    }

    // 全てのリンクに対してクリックイベントリスナーを追加
    $('a[href^="#"]').click(function(event) {
        event.preventDefault(); // デフォルトのリンク動作をキャンセル

        var href = $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);

        if (target.length > 0) {
            smoothScroll(target); // スムーススクロール関数を呼び出す

            // 768px以下で、header__navListItem内のリンクをクリックした場合のみメニューを閉じる
            if ($(window).width() <= 768 && $(this).closest('.header__navListItem').length) {
                document.getElementById('drawer-toggle').checked = false;
            }
        } else {
            console.error('要素が見つかりません:', href);
        }
    });
});

// ドロワーページリロード時制御
$(document).ready(function() {
  // ページが読み込まれたときにドロワーを閉じる
  $('#drawer-toggle').prop('checked', false);
});

// FVアニメーション
$(document).ready(function() {
  $('.anim-text__box').each(function(index) {
    var delayTime = $(this).data('delay'); // データ属性から遅延時間を取得
    $(this).delay(delayTime).animate({
      width: '100%'
    }, 500, function() {
      $(this).children('.anim-text__text').delay(500).queue(function(next) {
          $(this).addClass('show');
        next();
      });
    });
  });
});