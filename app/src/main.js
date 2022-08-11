const Vue = require("vue/dist/vue");
const axios = require("axios");

new Vue({
    el: "#app",
    data: {
        pageList: [],
        newPageName: ""
    },
    methods: {
        createPage() {
            axios
                .post("./api/createNewHtmlPage.php", {
                    "name": this.newPageName
                })
                .then(() => this.updatePageList())
        },
        updatePageList() {
            axios
                .get("./api/api.php")
                .then((response) => {
                    this.pageList = response.data
                })
        },
        deletePage(page) {
            axios
                .post("./api/deleteHtmlPage.php", {
                    "name": page
                })
                .then(() => this.updatePageList())
        }
    },
    created() {
        this.updatePageList();
    },
});
