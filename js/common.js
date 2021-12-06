//ES5 ~ ES6
(function (window) {
    const body = document.body;
    const nav = document.querySelector(".nav");
    const navList = nav.querySelectorAll("li");
    const navDepth = nav.querySelectorAll("li.nav-depth");
    const cloud = document.querySelector(".cloud");
    const rocket = document.querySelector(".rocket");
    const logoAll = document.querySelectorAll(".visual-logo");
    const visualText = document.querySelectorAll(".visual");
    const pipe = document.querySelector(".pg-pips");
    const mainContents = document.querySelector(".main-contents");

    const splashWrap = document.querySelectorAll(".splash-container");
    const total = 1920 / 40;

    let createSpan = null;
    let spanedBar = null;

    let target = total / 2;
    let near = 0;
    let abs = 0;
    let min = total;

    let options = {
        //Navigation
        menu: ".pg-pips",
        licenseKey: "B52000B1-025845BC-A12F8052-779ED351", //저작권은 퍼블리셔에게 있습니다.
        lockAnchors: false,
        anchors: ["anchors1", "anchors2", "anchors3", "anchors4"],
        navigation: false,
        navigationPosition: "right",
        // navigationTooltips: ["firstSlide", "secondSlide"],
        showActiveTooltip: false,
        slidesNavigation: false,
        slidesNavPosition: "bottom",

        //Scrolling
        css3: true,
        scrollingSpeed: 1200,
        fitToSection: true,
        scrollBar: false,
        easing: "easeInOutCubic",
        easingcss3: "ease",
        loopBottom: false,
        loopTop: false,
        loopHorizontal: true,
        continuousVertical: false,
        continuousHorizontal: false,
        scrollHorizontally: false,
        interlockedSlides: false,
        dragAndMove: false,
        offsetSections: false,
        resetSliders: false,
        fadingEffect: false,
        scrollOverflow: false,
        scrollOverflowReset: false,
        scrollOverflowOptions: null,
        touchSensitivity: 15,
        bigSectionsDestination: null,

        //Accessibility
        keyboardScrolling: true,
        animateAnchor: true,
        recordHistory: true,

        //Design
        controlArrows: true,
        verticalCentered: true,
        // paddingTop: "3em",
        // paddingBottom: "10px",
        //fixedElements: "#header, .footer",
        // responsiveWidth: 1366,
        // responsiveHeight: 768,
        //Custom selectors
        sectionSelector: ".section",
        //slideSelector: ".slide",

        // lazyLoading: true,

        //events
        onLeave: function (origin, destination, direction) {
            //데이터
            const data = document.querySelector("[data-id='" + destination.index + "']");
            const allData = document.querySelectorAll("[data-id]");

            //로고
            const logoNumber = document.querySelector("[data-logo='" + destination.index + "']");
            const lastLogo = document.querySelector("[data-logo='2']");

            //비쥬얼 텍스트

            [].forEach.call(logoAll, function (l, index) {
                l.classList.add("on");
            });

            //전체 설정
            if (logoNumber) {
                logoNumber.classList.remove("on");
            }

            //개별 설정
            if (direction === "down") {
                //down
                if (destination.index === 1) {
                    cloud.classList.add("on");
                    //
                } else if (destination.index === 2) {
                    //
                } else if (destination.index === 3) {
                    if (lastLogo) {
                        lastLogo.classList.remove("on");
                    }

                    pipe.classList.add("hide");
                } else {
                    // index === 0
                }
            } else {
                //up
                if (destination.index === 1) {
                    // mainContents.classList.remove("on");
                } else if (destination.index === 2) {
                    pipe.classList.remove("hide");
                } else if (destination.index === 3) {
                    //
                } else {
                    //index === 0
                    cloud.classList.remove("on");
                    // rocket.classList.remove("on");
                }
            }

            //좌측메뉴

            [].forEach.call(allData, function (el, i) {
                el.classList.remove("active");
                el.style.height = "";
            });
            if (data) {
                data.classList.add("active");
                const _getHeight = data.querySelector(".nav-list");
                if (_getHeight === null) {
                    return;
                } else {
                    data.style.height = _getHeight.getBoundingClientRect().height + 48 + "px";
                }
            }
        },
        //load 및 이벤트가 완전히 끝난뒤 실행
        afterLoad: function (origin, destination, direction) {
            //로고

            //비쥬얼 텍스트
            const _visualText = document.querySelector("[data-text='" + destination.index + "']");
            const lastText = document.querySelector("[data-text='2']");

            [].forEach.call(visualText, function (x, index) {
                x.classList.add("on");
            });

            //전체 설정
            if (_visualText) {
                _visualText.classList.remove("on");
            }

            //개별 설정
            if (direction === "down") {
                //down
                if (destination.index === 1) {
                    rocket.classList.add("on");
                    //
                } else if (destination.index === 2) {
                    mainContents.classList.add("on");
                    rocket.classList.remove("on");
                    //
                } else if (destination.index === 3) {
                    if (lastText) {
                        lastText.classList.remove("on");
                    }
                    mainContents.classList.add("on");
                } else {
                    // index === 0
                }
            } else {
                //up
                if (destination.index === 1) {
                    mainContents.classList.remove("on");
                    rocket.classList.add("on");
                } else if (destination.index === 2) {
                } else if (destination.index === 3) {
                    //
                } else {
                    //index === 0
                    rocket.classList.remove("on");
                }
            }
        },

        //랜더링
        afterRender: function () {
            //초기화
            const _logoNumber = document.querySelector("[data-logo='" + this.index + "']");
            const _visualText = document.querySelector("[data-text='" + this.index + "']");

            [].forEach.call(logoAll, function (x, index) {
                x.classList.add("on");
                visualText[index].classList.add("on");
            });

            _logoNumber.classList.remove("on");
            _visualText.classList.remove("on");
        },
        afterResize: function (width, height) {},
        afterReBuild: function () {},
        afterResponsive: function (isResponsive) {},
        afterSlideLoad: function (section, origin, destination, direction) {},
        onSlideLeave: function (section, origin, destination, direction) {},
    };

    let mercuryFullpage = new fullpage("#fullpage", options);

    //default ui Interective
    const ui = {
        gnb: function () {
            if (nav && navList.length > 0) {
                [].forEach.call(navDepth, function (x, index) {
                    const getHeight = x.scrollHeight;
                    x.addEventListener("click", navBindingFunc(x, getHeight));
                });
            }

            function navBindingFunc(x, getHeight) {
                return function (e) {
                    if (e.currentTarget.style.height === "") {
                        e.currentTarget.style.height = getHeight + "px";
                    } else {
                        e.currentTarget.style.height = "";
                    }
                    this.classList.toggle("active");
                };
            }
        },
        //

        //애니메이션
        splashAnimate: function () {
            // for (let i = 0; i < total; i++) {
            //     createSpan = document.createElement("SPAN");
            //     spanedBar = createSpan.classList.add("splash-bar");
            //     if (i - target > -1) {
            //         if (i % 2 == 0) {
            //             splashWrap[0].appendChild(createSpan);
            //             createSpan.style.animation = "splsh-down 1s cubic-bezier(0.4, 0, 1, 1) forwards";
            //             createSpan.style.animationDelay = i * 0.03 + "s";
            //         } else {
            //             splashWrap[0].appendChild(createSpan);
            //             createSpan.style.animation = "splsh-up 1s cubic-bezier(0.4, 0, 1, 1) forwards";
            //             createSpan.style.animationDelay = i * 0.03 + "s";
            //         }
            //     }
            // }
            // for (let i = 0; i < total; i++) {
            //     createSpan = document.createElement("SPAN");
            //     spanedBar = createSpan.classList.add("splash-bar");
            //     if (i - target > -1) {
            //         if (i % 2 == 0) {
            //             splashWrap[1].appendChild(createSpan);
            //             createSpan.style.animation = "splsh-down 1s cubic-bezier(0.4, 0, 1, 1) forwards";
            //             createSpan.style.animationDelay = i * 0.03 + "s";
            //         } else {
            //             splashWrap[1].appendChild(createSpan);
            //             createSpan.style.animation = "splsh-up 1s cubic-bezier(0.4, 0, 1, 1) forwards";
            //             createSpan.style.animationDelay = i * 0.03 + "s";
            //         }
            //     }
            // }
        },

        //window resize
        resizeUpdate: function () {
            let winW = window.innerWidth;

            if (winW > 1365) {
                //윈도우 사이즈가 1365보다 클때
            } else {
                //윈도우 사이즈가 1365보다 작을때
            }
        },

        //메인 풀페이지
        fullpages: function () {
            this.resizeUpdate();
        },
    };

    //init
    function init() {
        ui.splashAnimate();
        ui.fullpages();
        ui.gnb();
    }

    //document load
    function loaded() {
        init();
    }

    //all event
    function eventBindingFunc() {
        document.addEventListener("DOMContentLoaded", loaded);
        window.addEventListener("resize", ui.resizeUpdate);
    }

    //first func
    eventBindingFunc();
})(window);
