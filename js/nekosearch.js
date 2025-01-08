// ネコサーチ
fetch('https://api.neko-search.com/v1/?type=search&area=%E6%9D%B1%E4%BA%AC%E9%83%BD')
  .then(response => response.text())
  .then(data => {
    // api提供元phpエラー対策json部分のみ抽出
    const regex = /\{(.*?)\]\}/;
    const match = data.match(regex);
    if (match) {
      const jsonString = '{'+match[1]+']}';
      try {
        const jsonData = JSON.parse(jsonString);
        //console.log(jsonData);

        // HTML要素を取得 (例: idが'cat_slider'のdiv要素)
        const resultElement = document.getElementById('cat_slider');
        // 取得したデータをHTMLに表示 (例: 各オブジェクトのnameとareaを表示)
        jsonData.units.forEach(unit => {
          const catItem = document.createElement('div');
          catItem.classList.add('search__sliderItem');

          // thumbnail要素を作成
          const thumb = document.createElement('div');
          thumb.classList.add('search__sliderItemThumb');

          const photo = document.createElement('div');
          photo.classList.add('photo');
          const photoImg = document.createElement('img');
          photoImg.src = unit.pict_url;
          photo.style.backgroundImage = `url(${unit.pict_url})`;
          photo.appendChild(photoImg);

          // body要素を作成
          const body = document.createElement('div');
          body.classList.add('search__sliderItemBody');

          const name = document.createElement('div');
          name.classList.add('search__sliderItemBodyCol','name');
          name.textContent = unit.name;

          const area = document.createElement('div');
          area.classList.add('search__sliderItemBodyCol','area');
          area.textContent = unit.area;

          const best_feature = document.createElement('div');
          best_feature.classList.add('search__sliderItemBodyCol','best_feature');
          best_feature.textContent = unit.best_feature;

          const eye_color = document.createElement('div');
          eye_color.classList.add('search__sliderItemBodyCol','eye_color');
          eye_color.textContent = unit.eye_color;

          const body_color = document.createElement('div');
          body_color.classList.add('search__sliderItemBodyCol','body_color');
          body_color.textContent = unit.body_color;

          const date = document.createElement('div');
          date.classList.add('search__sliderItemBodyCol','date');
          // 日付オブジェクトに変換
          const c_date = new Date(unit.date);
          const formattedDate = c_date.getFullYear() + '/' + 
                                (c_date.getMonth() + 1).toString().padStart(2, '0') + '/' +
                                c_date.getDate().toString().padStart(2, '0');
          date.textContent = formattedDate;

          const link = document.createElement('div');
          link.classList.add('search__sliderItemBodyCol','link');
          const linkAnchor = document.createElement('a');
          linkAnchor.href = unit.site_url;
          linkAnchor.target = "_blank";
          linkAnchor.rel = "noopener noreferrer";
          linkAnchor.textContent = "read more";
          link.appendChild(linkAnchor);

          // 作成した要素をcatItemにappendChild
          thumb.appendChild(photo);
          body.appendChild(name);
          body.appendChild(area);
          body.appendChild(best_feature);
          body.appendChild(eye_color);
          body.appendChild(body_color);
          body.appendChild(date);
          body.appendChild(link);
          catItem.appendChild(thumb);
          catItem.appendChild(body);
          resultElement.appendChild(catItem);

        });

        // jsonを出力した後slickを起動
        $('#cat_slider').slick({
          // Slickの設定
          centerMode: true,
          centerPadding: "",
          variableWidth: true,
          slidesToShow: 1,
          autoplay: true,
          autoplaySpeed: 10000,
          arrows: false,
          dots: true,
          loop: true,
          swipe: true,
          speed: 500,
          touchMove: true,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                variableWidth: true,
              },
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                variableWidth: true,
                centerMode: true,
                centerPadding: "",
              },
            },
          ],
        });

      } catch (error) {
        console.error('JSONパースエラー:', error);
      }
    } else {
      console.error('JSONが見つかりません');
    }
  })
  .catch(error => {
    console.error('API呼び出しエラー:', error);
  });


fetch('https://api.neko-search.com/v1/?type=protect&area=%E6%9D%B1%E4%BA%AC%E9%83%BD')
  .then(response => response.text())
  .then(data => {
    // api提供元phpエラー対策json部分のみ抽出
    const regex = /\{(.*?)\]\}/;
    const match = data.match(regex);
    if (match) {
      const jsonString = '{'+match[1]+']}';
      try {
        const jsonData = JSON.parse(jsonString);
        //console.log(jsonData);

        // HTML要素を取得 (例: idが'cat_slider'のdiv要素)
        const resultElement = document.getElementById('cat_slider2');
        // 取得したデータをHTMLに表示 (例: 各オブジェクトのnameとareaを表示)
        jsonData.units.forEach(unit => {
          const catItem = document.createElement('div');
          catItem.classList.add('search__sliderItem');

          // thumbnail要素を作成
          const thumb = document.createElement('div');
          thumb.classList.add('search__sliderItemThumb');

          const photo = document.createElement('div');
          photo.classList.add('photo');
          const photoImg = document.createElement('img');
          photoImg.src = unit.pict_url;
          photo.style.backgroundImage = `url(${unit.pict_url})`;
          photo.appendChild(photoImg);

          // body要素を作成
          const body = document.createElement('div');
          body.classList.add('search__sliderItemBody');

          // const name = document.createElement('div');
          // name.classList.add('search__sliderItemBodyCol','name');
          // name.textContent = unit.name;

          const area = document.createElement('div');
          area.classList.add('search__sliderItemBodyCol','area');
          area.textContent = unit.area;

          const best_feature = document.createElement('div');
          best_feature.classList.add('search__sliderItemBodyCol','best_feature');
          best_feature.textContent = unit.best_feature;

          const eye_color = document.createElement('div');
          eye_color.classList.add('search__sliderItemBodyCol','eye_color');
          eye_color.textContent = unit.eye_color;

          const body_color = document.createElement('div');
          body_color.classList.add('search__sliderItemBodyCol','body_color');
          body_color.textContent = unit.body_color;

          const date = document.createElement('div');
          date.classList.add('search__sliderItemBodyCol','date','date--protect');
          // 日付オブジェクトに変換
          const c_date = new Date(unit.date);
          const formattedDate = c_date.getFullYear() + '/' + 
                                (c_date.getMonth() + 1).toString().padStart(2, '0') + '/' +
                                c_date.getDate().toString().padStart(2, '0');
          date.textContent = formattedDate;



          const link = document.createElement('div');
          link.classList.add('search__sliderItemBodyCol','link');
          const linkAnchor = document.createElement('a');
          linkAnchor.href = unit.site_url;
          linkAnchor.target = "_blank";
          linkAnchor.rel = "noopener noreferrer";
          linkAnchor.textContent = "read more";
          link.appendChild(linkAnchor);

          // 作成した要素をcatItemにappendChild
          thumb.appendChild(photo);
          //body.appendChild(name);
          body.appendChild(area);
          body.appendChild(best_feature);
          body.appendChild(eye_color);
          body.appendChild(body_color);
          body.appendChild(date);
          body.appendChild(link);
          catItem.appendChild(thumb);
          catItem.appendChild(body);
          resultElement.appendChild(catItem);

        });

        // jsonを出力した後slickを起動
        $('#cat_slider2').slick({
          // Slickの設定
          centerMode: true,
          centerPadding: "",
          variableWidth: true,
          slidesToShow: 1,
          autoplay: true,
          autoplaySpeed: 10000,
          arrows: false,
          dots: true,
          loop: true,
          swipe: true,
          speed: 500,
          touchMove: true,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                variableWidth: true,
              },
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                variableWidth: true,
                centerMode: true,
                centerPadding: "",
              },
            },
          ],
        });

      } catch (error) {
        console.error('JSONパースエラー:', error);
      }
    } else {
      console.error('JSONが見つかりません');
    }
  })
  .catch(error => {
    console.error('API呼び出しエラー:', error);
  });