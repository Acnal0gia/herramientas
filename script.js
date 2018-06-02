(function () {
    let font = document.getElementById(`font`);
    let color = document.getElementById(`color`);
    let meta = document.getElementById(`meta`);
    let visual = document.getElementById(`visual`);
    let other = document.getElementById(`other`);
    let container = document.getElementById(`container`);

    font.addEventListener('click', (e) => {
        container.innerHTML =
            `<span>
                    <a href="https://es.lipsum.com" target="_blank">
                     <img src="https://i2.wp.com/access2learn.com/wp-content/uploads/2013/10/lorem-ipsum.png?resize=385%2C276" alt="">Lorem ipsum</a>
                </span>
             <span>
                    <a href="https://www.fontsquirrel.com" target="_blank">
                        <img src="https://www.topbestalternatives.com/wp-content/uploads/2015/11/Font-Squirrel-810x514.jpg" alt="">fontsquirrel</a>
                </span>
                <span>
                    <a href="https://fonts.google.com" target="_blank">
                        <img src="https://www.gstatic.com/images/icons/material/apps/fonts/1x/opengraph_color_1200dp.png" alt="">fonts.google</a>
                </span>
                <span>
                    <a href="https://fontawesome.com/icons?d=gallery" target="_blank">
                        <img src="https://store.pyrocms.com/media/catalog/product/cache/image/700x560/e9c3970ab036de70892d86c6d221abfe/f/o/font-awesome.png"
                        alt="">fontawesome</a>
                </span>
                <span>
                    <a href="http://www.iconspedia.com" target="_blank">
                     <img src="https://pbs.twimg.com/profile_images/542418526/av-twit_400x400.png" alt="">iconspedia</a>
                </span>`
    });
    color.addEventListener('click', (e) => {
        container.innerHTML =
            `<span>
                <a href="https://flatuicolors.com" target="_blank">
                    <img src="http://market.designmodo.com/wp-content/uploads/2015/06/flat-ui-colors1.png" alt=""> palettes</a>
            </span>
            <span>
                <a href="http://www.colorzilla.com/gradient-editor/" target="_blank">
                    <img src="http://www.colorzilla.com/images/color-swatch.png" alt=""> colorzilla</a>
            </span>`
    });
    meta.addEventListener('click', (e) => {
        container.innerHTML =
            `<span>
                <a href="http://schema.org" target="_blank">
                    <img src="data:image/png;base64,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"
                        alt="">schema</a>
            </span>
            <span>
                <a href="http://ogp.me" target="_blank">
                    <img src="http://ogp.me/logo.png" alt="">ogp</a>
            </span>`
    });
    visual.addEventListener('click', (e) => {
        container.innerHTML =
            `<span>
                <a href="https://videos.pexels.com/popular-videos" target="_blank">
                    <img src="data:image/png;base64,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"
                        alt="">videos.pexels</a>
            </span>
            <span>
                <a href="https://flowplayer.com" target="_blank">
                    <img src="https://i1.wp.com/zoknowsgaming.com/wp-content/uploads/2011/04/flowplayer-logo-icon.png?fit=192%2C192" alt="">flowplayer</a>
            </span>
            <span>
                <a href="https://www.pexels.com" target="_blank">
                    <img src="https://res-5.cloudinary.com/toolmuse/image/upload/production_Logo_ve6qtv" alt="">pexels</a>
            </span>
            <span>
                <a href="https://videojs.com" target="_blank">
                    <img src="data:image/png;base64,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"
                        alt="">videojs</a>
            </span>`
    });
    other.addEventListener('click', (e) => {
        container.innerHTML =
            `<span>
                <a href="https://search.google.com/structured-data/testing-tool?hl=es" target="_blank">
                    <img src="http://www.digitalmarketing.limited/wp-content/uploads/2018/04/Google-Structured-Data.jpg" alt="">ogp</a>
            </span>
            <span>
                <a href="http://jshint.com" target="_blank">
                    <img src="https://dexxo.files.wordpress.com/2017/11/jshint-dark.png?w=640" alt="">jshint</a>
            </span>
            <span>
                <a href="https://codepen.io" target="_blank">
                    <img src="http://blog.codepen.io/wp-content/uploads/2012/06/Button-Fill-Black-Large.png" alt="">codepen</a>
            </span>
            <span>
                <a href="https://www.wufoo.com" target="_blank">
                    <img src="https://seeklogo.com/images/W/wufoo-logo-4D638B3558-seeklogo.com.png" alt="">wufoo</a>
            </span>
            <span>
                <a href="https://disqus.com" target="_blank">
                    <img src="https://www1-lw.xda-cdn.com/files/2012/09/disqus.jpg" alt="">disqus</a>
            </span>
            <span>
                <a href="https://necolas.github.io/normalize.css/" target="_blank">
                    <img src="data:image/png;base64,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"
                        alt="">normalize</a>
            </span>
            <span>
                <a href="https://trends.google.es/trends/" target="_blank">
                    <img src="https://i1.wp.com/pablobarrios.es/wp-content/uploads/2017/09/como-usar-google-trends.png?fit=1600%2C499" alt="">google trends</a>
            </span>`
    });
}());
