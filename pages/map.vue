<template>
    <div class="map">
        <img src="~/assets/logo.svg" />
        <h1>Map</h1>
        <div id="map" style="width: 500px; height: 400px"></div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            map: null,
        };
    },
    mounted() {
        this.addScript();
    },
    methods: {
        initMap() {
            const container = document.getElementById("map");
            const options = {
                center: new kakao.maps.LatLng(37.49644445091002, 126.9201342484267),
                level: 3,
            };
            const map = new kakao.maps.Map(container, options);
            this.map = map;
            const content = '<div class ="label"><span class="left"></span><span class="center">농심 도연관</span><span class="right"></span></div>';

            const position = new kakao.maps.LatLng(37.49644445091002, 126.9201342484267);

            const customOverlay = new kakao.maps.CustomOverlay({
                position,
                content,
                yAnchor: 2.7,
            });
            customOverlay.setMap(map);

            const imageSrc = "../assets/mk.png";
            const imageSize = new kakao.maps.Size(40, 40);
            const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);
            const marker = new kakao.maps.Marker({
                map,
                image: markerImage,
                position: map.getCenter(),
            });
            marker.setMap(map);
        },

        addScript() {
            const script = document.createElement("script");
            script.onload = () => kakao.maps.load(this.initMap);
            script.src = "http://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=5176a3240f52a195714957bfc3e9a05d&libraries=services";
            document.head.appendChild(script);
        },
    },
};
</script>

<style>
div {
    margin: 0px auto;
    font-family: 'Jua', sans-serif;
}
.label {
    display: block;
    background: #148162;
    color: #fff;
    text-align: center;
    height: 24px;
    line-height: 22px;
    border-radius: 4px;
    padding: 0px 10px;
    font-family: 'Jua', serif;
}
img {
    height: 100px;
}
</style>
