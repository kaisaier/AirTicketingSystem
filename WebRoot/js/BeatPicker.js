function BeatPicker(a) {
    var b = {};
    $.extend(!0, b, this, a);
    $.extend(this, b);
    this.constructor()
}
BeatPicker.prototype = {
    dateInputNode: null,
    pickerNode: null,
    daysSimple: "Su Mo Tu We Th Fr Sa".split(" "),
    daysFull: [],
    monthsSimple: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
    monthsFull: "January February March April May June July August September October November December".split(" "),
    startDate: new Date,
    currentDate: new Date,
    dateFormat: {
        separator: "-",
        format: ["YYYY", "MM", "DD"]
    },
    modules: {
        header: !0,
        footer: !0,
        daysOfTheWeek: !0,
        navBar: !0,
        today: !0,
        gotoDate: !0,
        icon: !0,
        clear: !0
    },
    selectionRule: {
        single: !0,
        range: !1,
        rangeDisableSelect: !1
    },
    className: {
        beatPicker: "beatpicker",
        header: "header",
        footer: "footer",
        days: "days",
        inputParent: "input-parent",
        headerNavBarParent: "header-navbar-container",
        headerNavBarButton: "header-navbar-button",
        weekDaysAliasCell: "week-alias-cell",
        weekDaysAliasCellParent: "week-alias-cell-parent",
        input: "beatpicker-input",
        inputTo: "beatpicker-input-to",
        betweenRange: "between-range",
        inputFrom: "beatpicker-input-from",
        daysCell: "days-cell",
        monthsCell: "months-cell",
        yearsCell: "years-cell",
        yearsRangeCell: "years-range-cell",
        daysCellParent: "days-cell-parent",
        todayButton: "today",
        todayBox: "today-box",
        gotoDateParent: "goto-date-parent",
        gotoDateInput: "goto-date",
        gotoDateButton: "goto-date-button",
        selected: "selected",
        disabled: "disabled",
        clear: "beatpicker-clear",
        _inner: {
            beatPicker: "beatpicker",
            inputContainer: "input-container",
            cell: "cell",
            cellM: "cell-months",
            cellY: "cell-years",
            cellYR: "cell-years-range",
            cellParent: "cell-parent",
            headerNavBar: "main-nav",
            headerNavBarBtn: "nav-btn",
            headerNavBarBtnNext: "next",
            headerNavBarBtnPrev: "prev",
            inputNode: "beatpicker-inputnode",
            dateInputTo: "beatpicker-inputnode-to",
            betweenDateNode: "between-range",
            dateInputFrom: "beatpicker-inputnode-from",
            headerNavBarBtnMonthIndicator: "current-indicator",
            notNotable: "not-notable",
            todayButton: "today",
            gotoDateInput: "date-input",
            gotoDateButton: "date-input-button",
            gotoDateContainer: "goto-date-container",
            footer: "footer",
            todayInGrid: "notable-today",
            selectedDate: "selected-date",
            disableDate: "date-disabled",
            clearButton: "beatpicker-clearButton",
            defaultButton: "button"
        }
    },
    view: {
        display: "days",
        alwaysVisible: !1,
        position: ["bottom", "left"],
        showOn: "click",
        hideOn: "click",
        isInputIsReadonly: !0,
        iconImage: "null"
    },
    labels: {
        today: "Today",
        gotoDateInput: "YYYY/MM/DD",
        gotoDateButton: "GO",
        clearButton: "Clear"
    },
    events: {
        select: "select",
        change: "change",
        show: "show",
        hide: "hide",
        clear: "clear"
    },
    disablingRules: [],
    a: null,
    b: null,
    c: [],
    d: [],
    e: [],
    f: [],
    g: "MM",
    h: "YYYY",
    i: "DD",
    j: null,
    k: null,
    l: null,
    m: null,
    n: null,
    o: null,
    p: null,
    q: null,
    r: null,
    s: null,
    t: !1,
    u: !1,
    v: !0,
    w: [],
    x: {
        days: "days",
        months: "months",
        years: "years"
    },
    y: {
        briefDate: "BRIEFDATE",
        yearName: "YEARNAME",
        yearsRange: "YEARSRANGE"
    },
    z: {
        "<": "<",
        ">": ">",
        "*": "*"
    },
    aa: {},
    constructor: function () {
        !window.beatPickerList && (window.beatPickerList = []);
        window.beatPickerList.push(this);
        this.bv();
        this.ab(this.startDate);
        this.bk();
        this.ac();
        var a = this.k = this.pickerNode = this.ad();
        this.ar();
        if (this.modules.header) {
            var b = this.ah();
            a.prepend(b)
        }
        this.modules.navBar && b && a.append(this.ag(b));
        a.append(this.am());
        if (this.modules.footer) {
            var c = this.aj();
            a.append(c)
        }
        this.modules.footer && this.modules.today && this.ak(c);
        this.modules.footer && this.modules.gotoDate && this.al(c);
        this.modules.icon && this.af();
        this.modules.clear && this.ae();
        this.bz();
        this.view.alwaysVisible && this.show()
    },
    ab: function (a) {
        "string" === typeof a ? this.startDate = new Date(a) : a instanceof Array ? this.startDate = new Date(this.startDate[0], this.startDate[1] - 1, this.startDate[2]) : a instanceof Object && (this.startDate = a);
        this.currentDate = this.startDate
    },
    ac: function () {
        this.dateInputNode.after(this.a = this.bw("div", {
            "class": this.bx(this.className.inputParent, this.className._inner.inputContainer)
        }));
        this.dateInputNode.appendTo(this.a).addClass(this.bx(this.className.input, this.className._inner.inputNode));
        this.selectionRule.range && this.dateInputNode.addClass(this.bx(this.className.inputFrom, this.className._inner.dateInputFrom)).after(this.b = this.bw("input", {
            type: "text",
            "class": this.bx(this.className.inputTo, this.className._inner.dateInputTo, this.className.input, this.className._inner.inputNode)
        }, this.a));
        this.view.isInputIsReadonly && this.dateInputNode.add(this.selectionRule.range ? this.b : {}).attr("readonly", !0)
    },
    ad: function () {
        return this.bw("div", {
            "class": this.bx(this.className.beatPicker, this.className._inner.beatPicker)
        }, this.view.alwaysVisible ? this.a : $("body"))
    },
    ae: function () {
        var a = this,
            b = this.bw("button", {
                "class": this.bx(this.className.clear, this.className._inner.clearButton, this.className._inner.defaultButton),
                type: "button"
            }, null, this.labels.clearButton);
        b.on("click", function () {
                if (a.m || a.n || a.q) {
                    var b = {
                        timeStamp: (new Date).getTime()
                    };
                    a.selectionRule.range ? $.extend(b, {
                        startDate: a.n,
                        startDateString: a.n ? a.bf(a.n) : null,
                        endDate: a.q,
                        endDateString: a.q ? a.bf(a.q) : null
                    }) : a.selectionRule.single && $.extend(b, {
                        date: a.m,
                        string: a.bf(a.m)
                    });
                    a.cq(a.events.clear, b);
                    a.reset()
                }
            });
        this.a.append(b)
    },
    af: function () {
        this.dateInputNode.add(this.b).css("background-image", "url('" + this.view.iconImage + "')")
    },
    ag: function (a) {
        var b = this;
        a = this.bw("div", {
            "class": this.bx(this.className.headerNavBarParent, this.className._inner.headerNavBar)
        }, a, "", !0);
        this.bw("a", {
            "class": this.bx(this.className.headerNavBarButton, this.className._inner.headerNavBarBtn, this.className._inner.headerNavBarBtnNext, this.className._inner.defaultButton)
        }, a, ">").on("click", function () {
            b.cb(!1)
        });
        var c = this._currentIndicator = this.bw("a", {
            "class": this.bx(this.className.headerNavBarButton, this.className._inner.headerNavBarBtn, this.className._inner.headerNavBarBtnMonthIndicator, this.className._inner.defaultButton)
        }, a).on("click", function () {
            b.cf(!0)
        });
        this.av(c, this.y.briefDate);
        this.bw("a", {
            "class": this.bx(this.className.headerNavBarButton, this.className._inner.headerNavBarBtn, this.className._inner.headerNavBarBtnPrev, this.className._inner.defaultButton)
        }, a, "<").on("click", function (a) {
            b.cb(!0)
        })
    },
    ah: function () {
        var a = this.bw("div", {
            "class": this.className.header
        });
        this.modules.daysOfTheWeek && a.append(this.ai(this.daysSimple));
        return a
    },
    ai: function (a) {
        if (a instanceof Array) {
            var b = this._weekDayParent = this.bw("ul", {
                "class": this.className.weekDaysAliasCellParent + " " + this.className._inner.cellParent
            });
            this.forEach(a, function (a, d) {
                this.bw("li", {
                    "class": this.className.weekDaysAliasCell + " " + this.className._inner.cell
                }, b, d)
            }, this);
            return b
        }
    },
    aj: function () {
        return this._footerNode = this.bw("div", {
            "class": this.bx(this.className.footer, this.className._inner.footer)
        })
    },
    ak: function (a) {
        var b = this;
        this.bw("a", {
            "class": this.bx(this.className.todayButton, this.className._inner.todayButton, this.className._inner.defaultButton)
        }, a, this.labels.today).on("click", function (a) {
            b.currentDate = new Date;
            b.ax(b.currentDate)
        })
    },
    al: function (a) {
        var b = this;
        a = this.bw("div", {
            "class": this.bx(this.className.gotoDateParent, this.className._inner.gotoDateContainer)
        }, a);
        var c = this.bw("input", {
            type: "text",
            "class": this.bx(this.className.gotoDateInput, this.className._inner.gotoDateInput),
            placeholder: this.labels.gotoDateInput
        }, a).on("keydown", function (a) {
            13 === a.keyCode && b.cg(c)
        });
        this.bw("a", {
            type: "button",
            "class": this.bx(this.className.gotoDateButton, this.className._inner.gotoDateButton, this.className._inner.defaultButton)
        }, a, this.labels.gotoDateButton).on("click", function () {
            b.cg(c)
        })
    },
    am: function () {
        var a = this;
        this.cq(this.events.change, {
            date: this.currentDate,
            timeStamp: (new Date).getTime()
        });
        if (!this._daysBody) var b = this._daysBody = this.bw("div", {
            "class": this.className.days
        });
        this._daysCellParent && this._daysCellParent.empty();
        this.c.length = this.d.length = this.e.length = 0;
        if (!this._daysCellParent) var c = this._daysCellParent = this.bw("ul", {
            "class": this.className.daysCellParent + " " + this.className._inner.cellParent
        }, this._daysBody);
        if (this.view.display === this.x.days) {
            this._weekDayParent && this._weekDayParent.show();
            this._daysBody.find(c).empty();
            for (c = 0; 42 > c; c++) {
                var d = this.bw("li", {
                    "class": this.className.daysCell + " " + this.className._inner.cell
                }, this._daysCellParent);
                this.c.push(d);
                var e = this.bb(c, d);
                d.data("click-behaviour", e.isNextMonth);
                d.on("click", function (b) {
                    var c = $(this).data("click-behaviour");
                    !$(this).data("disabled") && a.au(b);
                    "not-avail" !== c && a.aw(c ? 1 : -1, a.g)
                });
                d.text(e.day);
                this.selectionRule.single && this.ba(this.c[c].data("date"), this.c[c])
            }
            this.az(new Date);
            this.selectionRule.range && this.co(this.n, this.q)
        } else this.view.display === this.x.months ? (this.an(), this.av(this._currentIndicator, this.y.yearName)) : this.view.display === this.x.years && (this.av(this._currentIndicator, this.y.yearsRange), this.ao());
        return b
    },
    an: function () {
        var a = this;
        this._weekDayParent && this._weekDayParent.hide();
        for (var b = 0; 11 >= b; b++) {
            var c = this.bw("li", {
                "class": this.bx(this.className.monthsCell, this.className._inner.cell, this.className._inner.cellM)
            }, this._daysCellParent, this.monthsSimple[b]).on("click", function () {
                a.view.display = a.x.months;
                a.cf(!1, $(this).data("date"))
            });
            this.d.push(c);
            c.data("date", this.cc(b, !0))
        }
    },
    ao: function () {
        var a = this;
        this._weekDayParent && this._weekDayParent.hide();
        for (var b = this.ce(this.currentDate.getFullYear()), c = 0; 11 >= c; c++) {
            var d = this.bw("li", {
                "class": this.bx(this.className.yearsCell, this.className._inner.cell, this.className._inner.cellY)
            }, this._daysCellParent, b[c]).on("click", function () {
                a.view.display = a.x.years;
                a.cf(!1, $(this).data("date"))
            });
            this.e.push(d);
            d.data("date", this.cc(b[c], !1))
        }
    },
    ap: function () {
        for (var a in this.d) this.d[a].data("date", this.cc(a, !0))
    },
    aq: function () {
        var a = this.ce(this.currentDate.getFullYear()),
            b;
        for (b in this.e) this.e[b].data("date", this.cc(a[b], !1)),
        this.e[b].text("").text(a[b])
    },
    ar: function () {
        var a = this;
        this.view.alwaysVisible || (a.k.css("display", "none"), $("html,body").on(this.view.hideOn, function (b) {
            !a.v && a.hide()
        }), this.k.on("click", function (a) {
            a.stopPropagation()
        }));
        var b = this.dateInputNode;
        this.selectionRule.range && (b = this.dateInputNode.add(this.b));
        b.on(this.view.showOn, function (b) {
            b.stopPropagation();
            if (a.v || a.selectionRule.range) {
                var d = $.grep(window.beatPickerList, function (b, c) {
                    return b !== a && !b.view.alwaysVisible
                });
                a.forEach(d, function (a, b) {
                    !b.isHide() && b.hide()
                }, a);
                a.show(b)
            }
        })
    },
    as: function (a, b) {
        var c = this.at(a, b);
        this.k.css({
            left: c.x,
            top: c.y
        })
    },
    at: function (a, b) {
        var c = this.by(a),
            d = b && b.x || this.view.position[0],
            e = b && b.y || this.view.position[1],
            f = this,
            g = {
                rightTop: function () {
                    d = this._rightCommon();
                    e = this._topCommon() - f.k.outerHeight()
                },
                rightMiddle: function () {
                    d = this._rightCommon();
                    e = this._topCommon() - f.k.outerHeight() / 2 + f.dateInputNode.outerHeight() / 2
                },
                rightBottom: function () {
                    d = this._rightCommon();
                    e = this._topCommon()
                },
                leftTop: function () {
                    d = this._leftCommon();
                    e = this._topCommon() - f.k.outerHeight()
                },
                leftMiddle: function () {
                    d = this._leftCommon();
                    e = this._topCommon() - f.k.outerHeight() / 2 + f.dateInputNode.outerHeight() / 2
                },
                leftBottom: function () {
                    d = this._leftCommon();
                    e = this._topCommon()
                },
                bottomRight: function () {
                    e = this._bottomCommon();
                    d = this._rightCommon() - f.k.outerWidth()
                },
                bottomMiddle: function () {
                    e = this._bottomCommon();
                    d = this._leftCommon() + c.width / 2 + f.k.width() / 2
                },
                bottomLeft: function () {
                    e = this._bottomCommon();
                    d = this._leftCommon() + f.k.outerWidth()
                },
                topRight: function () {
                    e = this._topCommon() - f.k.outerHeight();
                    d = this._rightCommon() - f.k.outerWidth()
                },
                topMiddle: function () {
                    e = this._topCommon() - f.k.outerHeight();
                    d = this._leftCommon() + c.width / 2 + f.k.width() / 2
                },
                topLeft: function () {
                    e = this._topCommon() - f.k.outerHeight();
                    d = this._leftCommon() + f.k.outerWidth()
                },
                left: function () {
                    d = this._leftCommon();
                    e = this._topAutoCommon()
                },
                top: function () {
                    e = this._topCommon() - f.k.outerHeight();
                    d = this._leftAutoCommon()
                },
                right: function () {
                    d = this._rightCommon();
                    e = this._topAutoCommon()
                },
                bottom: function () {
                    e = this._bottomCommon();
                    d = this._leftAutoCommon()
                },
                "**": function () {
                    e = this._topAutoCommon();
                    d = this._leftAutoCommon()
                },
                customAdjustment: function () {
                    e = c.y + +e;
                    d = c.x + +d
                },
                _rightCommon: function () {
                    return c.x + c.width
                },
                _bottomCommon: function () {
                    return c.y + c.height
                },
                _leftCommon: function () {
                    return c.x - f.k.outerWidth()
                },
                _topCommon: function () {
                    return c.y
                },
                _topAutoCommon: function () {
                    var a; + (this._topCommon() + f.k.outerHeight() - $(window).scrollTop()) > $(window).height() ? (a = $(window).height() + $(window).scrollTop() - f.k.outerHeight(), $(window).height() < f.k.outerHeight() && (a = $(window).scrollTop())) : a = this._topCommon();
                    return Math.floor(a)
                },
                _leftAutoCommon: function () {
                    var a;
                    a = this._leftCommon() + f.k.outerWidth();
                    a + f.k.outerWidth() > $(window).width() && (a = $(window).width() - f.k.outerWidth(), 0 >= a && (a = $(window).scrollLeft()));
                    return Math.floor(a)
                }
            };
        if (isNaN(d) && isNaN(e)) {
                var h = d,
                    k = e.substr(0, 1).toUpperCase() + this.view.position[1].substr(1),
                    h = "*" === d && "*" === e ? "**" : "*" == e ? h : h + k;
                "**" === h && this.view.alwaysVisible && (h = "bottomLeft");
                h in g && g[h]()
            } else isNaN(d) || isNaN(e) || g.customAdjustment();
        return {
                y: e,
                x: d
            }
    },
    au: function (a) {
        a = $(a.currentTarget || a.originalEvent.currentTarget);
        var b = a.data("date"),
            c = this.bf(b),
            d = {};
        this.selectionRule.single ? (this.l && this.cl(this.l), this.m = new Date(b.getTime()), this.dateInputNode.val(c), this.l = a, !this.view.alwaysVisible && this.hide(), this.ck(this.l), d = {
                dateObj: b,
                string: c,
                timeStamp: (new Date).getDate()
            }, this.cq(this.events.select, d)) : this.selectionRule.range && (this.t ? (this.o = b, this.bi(!0)) : this.u && (this.r = b, this.bi(!1)), this.selectionRule.rangeDisableSelect || !this.br(this.o, this.r, this.t) ? (d = {
                fromDate: this.n,
                toDate: this.q,
                timeStamp: (new Date).getTime()
            }, this.t ? (this.p && this.cl(this.p), this.p = a, this.n = this.o = b, $.extend(d, {
                fromDate: this.n
            }), this.cq(this.events.select, d), this.dateInputNode.val(c), this.show({
                currentTarget: this.b[0]
            })) : this.u && (this.s && this.cl(this.s), this.s = a, this.q = this.r = b, $.extend(d, {
                toDate: this.q
            }), this.cq(this.events.select, d), this.b.val(c), this.cd() && !this.n && this.show(this.dateInputNode)), this.ck(a), this.n && this.q && this.co(this.n, this.q)) : (this.r = this.q ? new Date(this.q.getTime()) : null, this.o = this.n ? new Date(this.n.getTime()) : null))
    },
    av: function (a, b) {
        if (a) if (b === this.y.briefDate)(a || this._currentIndicator).text(this.monthsFull[this.currentDate.getMonth()] + " " + this.currentDate.getFullYear());
        else if (b === this.y.yearName)(a || this._currentIndicator).text(this.currentDate.getFullYear());
        else if (b === this.y.yearsRange) {
            var c = this.ce(this.currentDate.getFullYear());
            (a || this._currentIndicator).text(c[0] + "-" + c[c.length - 1])
        }
    },
    aw: function (a, b, c) {
        var d = {
            YYYY: "FullYear",
            MM: "Month",
            DD: "Date"
        },
            e = this.currentDate["get" + d[b]](),
            f = new Date(this.currentDate.getTime());
        31 === this.currentDate.getDate() && b === this.g && this.currentDate.setDate(28);
        this.currentDate["set" + d[b]](e + a);
        0 <= this.currentDate.getFullYear() ? this.ay(c) : this.currentDate = new Date(f.getTime())
    },
    ax: function (a, b, c) {
        this.currentDate = new Date(a.getTime());
        this.ay(c)
    },
    ay: function (a) {
        !a && this.cq(this.events.change, {
            date: this.currentDate,
            string: this.bf(this.currentDate),
            timeStamp: (new Date).getTime()
        });
        if (this.view.display === this.x.days) {
            this.l && this.cl(this.l);
            this.selectionRule.range && (this.t ? this.q && this.bg(this.q, !1) : this.u && this.n && this.bg(this.n, !0));
            for (var b in this.c) a = this.bb(+b, this.c[b]),
            this.c[b].data("click-behaviour", a.isNextMonth),
            $(this.c[b]).text("").text(a.day),
            this.selectionRule.single && this.ba(this.c[b].data("date"), this.c[b]);
            this.selectionRule.range && this.co(this.n, this.q);
            this.az(new Date);
            this.av(this._currentIndicator, this.y.briefDate)
        } else this.view.display === this.x.months ? (this.ap(), this.av(this._currentIndicator, this.y.yearName)) : this.view.display === this.x.years && (this.aq(), this.av(this._currentIndicator, this.y.yearsRange))
    },
    az: function (a) {
        if (this.modules.today) {
            a = a || this.currentDate;
            this.j && this.j.removeClass(this.className._inner.todayInGrid).removeClass(this.className.todayBox);
            for (var b in this.c) this.ch(this.c[b].data("date"), a) && (this.j = this.c[b], $(this.c[b]).addClass(this.className._inner.todayInGrid).addClass(this.className.todayBox))
        }
    },
    ba: function (a, b) {
        this.m && this.ch(a, this.m) && (this.l = b, this.ck(b))
    },
    bb: function (a, b) {
        var c = new Date(this.currentDate.getTime());
        b.removeClass(this.className._inner.notNotable);
        var d = this.bd(c),
            e = this.bc(c),
            f = !1;
        a >= e.firstDay && a < d.nowMonthDays + e.firstDay ? (a = a - e.firstDay + 1, f = "not-avail", c.getDate() == a - 1 && 0 == c.getHours() && 2 == e.month ? c = new Date(e.year, e.month, e.date + 1, 2) : c.setDate(a)) : a < e.firstDay ? (d = d.prevMonthDays - (e.firstDay - a - 1), c.setMonth(c.getMonth() - 1), c.setDate(d), b.addClass(this.className._inner.notNotable), a = d) : a >= d.nowMonthDays + e.firstDay && (d = a + 1 - (e.firstDay + d.nowMonthDays), c.setMonth(c.getMonth() + 1), c.setDate(d), b.addClass(this.className._inner.notNotable), f = !0, a = d);
        b.data("date", c);
        this.bq(c, b);
        return {
                day: a,
                isNextMonth: f
            }
    },
    bc: function (a) {
        var b = new Date(a.getTime());
        b.setDate(1);
        return {
            firstDay: b.getDay(),
            date: a.getDate(),
            day: a.getDay(),
            month: a.getMonth(),
            year: a.getFullYear()
        }
    },
    bd: function (a) {
        var b = a.getMonth();
        a = a.getFullYear();
        return {
            prevMonthDays: this.be(0 > b - 1 ? 11 : b - 1, 0 > b - 1 ? a - 1 : a),
            nowMonthDays: this.be(b, a),
            nextMonthDays: this.be(11 < b + 1 ? 1 : b, 11 < b + 1 ? a + 1 : a)
        }
    },
    be: function (a, b) {
        return /8|3|5|10/.test(a) ? 30 : 1 != a ? 31 : 0 == b % 4 && 0 != b % 100 || 0 == b % 400 ? 29 : 28
    },
    bf: function (a) {
        var b = a.getDate(),
            c = a.getMonth() + 1;
        a = a.getFullYear();
        var d = "NM" == this.dateFormat.format[0] || "NM" == this.dateFormat.format[1] || "NM" == this.dateFormat.format[2],
            e = {
                DD: 10 <= +b || d ? +b : "0" + b,
                MM: 10 <= c ? c : "0" + c,
                YYYY: a,
                YY: String(a).substr(2),
                NM: this.monthsFull[+c - 1]
            },
            f = this.dateFormat.separator,
            g = "";
        this.forEach(this.dateFormat.format, function (a, b) {
                e[b] && (g += e[b] + (2 > a ? f : ""))
            }, this);
        return g
    },
    bg: function (a, b) {
        var c = this.bl(a, a),
            d;
        for (d in this.c) {
                var e = this.c[d],
                    f = e.data("date");
                this.cm(e);
                e.data("disabled", !1);
                f = this.bc(f);
                this[b ? "bt" : "bs"](f, c, !0) && (this.cn(e), e.data("disabled", !0))
            }
    },
    bh: function () {
        for (var a in this.c) {
            var b = this.c[a].data("date");
            this.bq(b, this.c[a])
        }
    },
    bi: function (a) {
        "BOTH" === a ? (delete this.w[this._lastIndexOfFromDate], delete this.w[this._lastIndexOfToDate]) : a ? delete this.w[this._lastIndexOfFromDate] : delete this.w[this._lastIndexOfToDate]
    },
    bj: function (a, b, c) {
        if (a = this.bl(a, b)) this.bi(c),
        this.w.unshift(a),
        c ? (0 === this._lastIndexOfToDate && (this._lastIndexOfToDate = 1), this._lastIndexOfFromDate = 0) : (0 === this._lastIndexOfFromDate && (this._lastIndexOfFromDate = 1), this._lastIndexOfToDate = 0)
    },
    bk: function () {
        for (var a in this.disablingRules) {
            var b = this.disablingRules[a],
                c = b.from,
                d = b.to;
            if (isNaN(Date.parse(b.from)) && !this.bn(c)) break;
            if (isNaN(Date.parse(b.to)) && !d instanceof Array && !d in this.z) break;
                (b = this.bl(b.from, b.to)) && this.w.push(b)
        }
    },
    bl: function (a, b) {
        var c = !isNaN(Date.parse(a)) || a instanceof Date,
            d = !isNaN(Date.parse(b)) || b instanceof Date;
        this.cs(a);
        this.cs(b);
        this.ct(a);
        this.ct(b);
        var e = {
                fromDate: null,
                toDate: null,
                fromMonth: null,
                toMonth: null,
                fromYear: null,
                toYear: null
            };
        c && d ? (c = this.bc(new Date(a)), d = this.bc(new Date(b))) : (c = c ? this.bc(new Date(a)) : this.bm(a), d = d ? this.bc(new Date(b)) : this.bm(b));
        e.fromDate = c.date;
        e.fromMonth = c.month;
        e.fromYear = c.year;
        e.toDate = d.date;
        e.toMonth = d.month;
        e.toYear = d.year;
        return e
    },
    bm: function (a) {
        var b = {};
        a instanceof Array && (b.date = a[2], b.month =
        isNaN(+a[1]) ? a[1] : +a[1] - 1, b.year = a[0]);
        "string" === typeof a && (b.date = b.month = b.year = a);
        return b
    },
    bn: function (a) {
        if (!a instanceof Array) return !1;
        var b = !1,
            c;
        for (c in a) a[c] in this.z && (b = !0);
        return b
    },
    bo: function (a, b) {
        var c = this,
            d = {
                ">": this.bs,
                "<": this.bt,
                "*": function (d, e) {
                    if (c.bs(a, b, !0) || "*" === b.fromYear) return "*" === e.toYear ? "*" === e.toMonth ? "*" === e.toDate ? !0 : d.date == e.toDate : "*" === e.toDate ? d.month == e.toMonth : d.month == e.toMonth && d.date == e.toDate : "*" === e.toMonth ? "*" === e.toDate ? d.year == e.toYear : d.year == e.toYear && d.date == e.toDate : "*" === e.toDate ? d.year == e.toYear && d.month == e.toMonth : d.year == e.toYear && d.month == e.toMonth && d.date == e.toDate
                }
            },
            e;
        for (e in b) {
                if (">" === b[e] || "<" === b[e]) return d[b.toDate](a, b, !0);
                if ("*" === b[e]) return d[b[e]](a, b)
            }
    },
    bp: function (a) {
        a = this.bc(a);
        var b = !1,
            c;
        for (c in this.w) {
                var d = this.w[c];
                d && (b = this.bn(d) ? this.bo(a, d) : this.bs(a, d, !0) && this.bt(a, d, !1));
                if (b) break
            }
        return b
    },
    bq: function (a, b) {
        this.bp(a) ? (b.data("disabled", !0), this.cn(b)) : (b.data("disabled", !1), this.cm(b))
    },
    br: function (a, b, c) {
        if (a && b) {
            b = new Date(b.getTime());
            a = new Date(a.getTime());
            c ? b.setDate(b.getDate() - 1) : a.setDate(a.getDate() + 1);
            c = this.ci(a, b);
            for (var d in c) if (this.bp(c[d])) return !0
        }
        return !1
    },
    bs: function (a, b, c) {
        c = c ? "from" : "to";
        return a.year > b[c + "Year"] || a.year == b[c + "Year"] && a.month > b[c + "Month"] ? !0 : a.date >= b[c + "Date"] && b[c + "Year"] == a.year && b[c + "Month"] == a.month
    },
    bt: function (a, b, c) {
        c = c ? "from" : "to";
        return a.year < b[c + "Year"] || a.year == b[c + "Year"] && a.month < b[c + "Month"] ? !0 : a.date <= b[c + "Date"] && b[c + "Year"] == a.year && b[c + "Month"] == a.month
    },
    bu: function (a, b, c) {
        c = c ? "from" : "to";
        return a.date == b[c + "Date"] && b[c + "Year"] == a.year && b[c + "Month"] == a.month
    },
    bv: function () {
        this.forEach = function (a, b, c) {
            $.each(a, function (a, e) {
                b.call(c ? c : this, a, e)
            })
        }
    },
    bw: function (a, b, c, d, e) {
        a = $(-1 === a.indexOf("<") ? "<" + a + ">" : a);
        return a.attr(b)[a[0].value ? "val" : "text"](d)[c ? e ? "prependTo" : "appendTo" : "andSelf"](c ? c : void 0)
    },
    bx: function () {
        var a = "",
            b = arguments;
        this.forEach(arguments, function (c, d) {
                a += d + (c !== b.length - 1 && 1 !== b.length ? " " : "")
            }, this);
        return a
    },
    by: function (a) {
        var b = $(window).outerHeight(),
            c = $(window).outerWidth(),
            d = $(a)[this.view.alwaysVisible ? "position" : "offset"]().top,
            e = $(a)[this.view.alwaysVisible ? "position" : "offset"]().left,
            f = $(a).outerHeight();
        a = $(a).outerWidth();
        return {
                height: f,
                width: a,
                x: e,
                y: d,
                winHeight: b,
                winWidth: c
            }
    },
    bz: function () {
        var a = this;
        this.on(this.events.hide, function (b) {
            (a.m || a.n) && a.ax(a.m || a.n, !0);
            a.az(new Date)
        })
    },
    ca: function (a) {
        this.u = !1;
        this.t = !0;
        a && a.currentTarget === this.b[0] ? (this.u = !0, this.t = !1, this.bi(!1), this.n && this.bj(this.n, "<", !0)) : (delete this.w[this._lastIndexOfFromDate], this.q && this.bj(this.q, ">", !1));
        this.bh();
        this.as(a && this.selectionRule.range && a.currentTarget === this.b[0] ? this.b[0] : this.dateInputNode)
    },
    cb: function (a) {
        this.view.display === this.x.days ? this.aw(a ? -1 : 1, this.g) : this.view.display === this.x.months ? this.aw(a ? -1 : 1, this.h) : this.view.display === this.x.years && this.aw(a ? -12 : 12, this.h)
    },
    cc: function (a, b) {
        var c = new Date;
        c.setMonth(b);
        b ? (c.setFullYear(this.currentDate.getFullYear()), c.setMonth(a)) : (c.setFullYear(a), c.setMonth(1));
        c.setDate(1);
        return c
    },
    cd: function () {
        return this.b.val() && this.dateInputNode.val() ? (!this.view.alwaysVisible && this.hide(), this.view.alwaysVisible) : !0
    },
    ce: function (a) {
        a = 12 * Math.floor(a / 12) + 1;
        var b = [];
        b.push(a);
        for (var c = 1; 11 >= c; c++) b.push(a + c);
        return b
    },
    cf: function (a, b) {
        var c = this,
            d = {
                1: function () {
                    c.av(c._currentIndicator, c.y.briefDate);
                    c.view.display = c.x.days
                },
                2: function () {
                    c.av(c._currentIndicator, c.y.yearName);
                    c.view.display = c.x.months
                },
                3: function () {
                    c.av(c._currentIndicator, c.y.yearsRange);
                    c.view.display = c.x.years
                }
            },
            e = {
                days: 1,
                months: 2,
                years: 3,
                yearsRange: 4
            };
        if (d = a ? d[e[this.view.display] + 1] : d[e[this.view.display] - 1]) this.currentDate = b ? new Date(b.getTime()) : this.currentDate,
        d(),
        this.am()
    },
    cg: function (a) {
        if (a.val()) {
            a = a.val().split("/");
            var b = new Date;
            1 === a.length ? (this.view.display = this.x.years, b.setFullYear(a[0])) : 2 === a.length ? (this.view.display = this.x.months, b.setFullYear(a[0]), b.setMonth(a[1])) : 3 === a.length && (this.view.display = this.x.days, b.setFullYear(a[0]), b.setMonth(a[1]), b.setDate(a[2]));
            this.currentDate = new Date(b.getTime());
            this.am(b)
        }
    },
    ch: function (a, b) {
        return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate()
    },
    ci: function (a, b) {
        for (var c = [], d = a; d <= b;) c.push(new Date(d)),
        d = this.cj(d, 1);
        return c
    },
    cj: function (a, b) {
        var c = new Date(a.valueOf());
        c.setDate(c.getDate() + b);
        return c
    },
    ck: function (a) {
        a.addClass(this.className.selected + " " + this.className._inner.selectedDate)
    },
    cl: function (a) {
        a.removeClass(this.className.selected + " " + this.className._inner.selectedDate)
    },
    cm: function (a) {
        a.removeClass(this.className.disabled + " " + this.className._inner.disableDate)
    },
    cn: function (a) {
        a.addClass(this.className.disabled + " " + this.className._inner.disableDate)
    },
    co: function (a, b) {
        if (a && b) var c = this.bl(a, b);
        for (var d in this.c) {
            var e = $(this.c[d]),
                f = e.data("date");
            this.cl(e);
            a && b ? (e.removeClass(this.className.betweenRange + " " + this.className._inner.betweenDateNode), f = this.bc(f), this.bu(f, c, !0) || this.bu(f, c, !1) ? this.ck(e) : this.bs(f, c, !0) && this.bt(f, c, !1) && e.addClass(this.className.betweenRange + " " + this.className._inner.betweenDateNode)) : a ? this.ch(this.n, f) && this.ck(e) : b && this.ch(this.q, f) && this.ck(e)
        }
    },
    cp: function () {
        for (var a in this.c) this.c[a].removeClass(this.className.betweenRange + " " + this.className._inner.betweenDateNode)
    },
    cq: function (a, b) {
        var c = this.aa[a];
        c && this.forEach(c, function (a, c) {
            c.func.call(c.scope, b)
        }, this)
    },
    cr: function (a) {
        return a instanceof Date
    },
    cs: function (a) {
        return a instanceof Array
    },
    ct: function (a) {
        return "string" === typeof a
    },
    on: function (a, b, c) {
        a && "string" === typeof a && b && (!this.aa[a] && (this.aa[a] = []), this.aa[a].push({
            func: b,
            scope: c ? c : this.k
        }))
    },
    show: function (a) {
        this.k.css("display", "");
        this.v = !1;
        !this.view.alwaysVisible && this.cq(this.events.show);
        this.selectionRule.range ? this.ca(a) : this.as(this.dateInputNode)
    },
    hide: function () {
        this.k.css("display", "none");
        this.v = !0;
        this.cq(this.events.hide)
    },
    today: function () {
        this.currentDate = new Date;
        this.ax(self.currentDate)
    },
    reset: function () {
        this.selectionRule.range ? ((this.p || this.s) && this.cl(this[this.p ? "p" : "s"].add(this.s)), this.bi("BOTH"), delete this.w[this._lastIndexOfFromDate], delete this.w[this._lastIndexOfToDate], this.q = this.s = this.n = this.p = this._lastIndexOfFromDate = this._lastIndexOfToDate = this.r = this.o = null, this.ay(), this.cp()) : (this.cl(this.l), this.l = this.m = null);
        this.dateInputNode.add(this.b).val("")
    },
    setDate: function (a) {
        isNaN(Date.parse(a)) || this.ax(this.cr(a) ? a : new Date(Date.parse(a)))
    },
    selectDate: function (a) {
        if (!isNaN(Date.parse(a)) && (a = this.cr(a) ? a : new Date(Date.parse(a)), this.ax(a, null, !0), this.c && this.c.length)) for (var b in this.c) if (this.ch(this.c[b].data("date"), a)) return this.c[b].click()
    },
    selectRangeOfDate: function (a, b) {
        this.reset();
        var c = this.bl(a, b);
        this.bs(this.bc(b), c, !0) && (this.t = !0, this.u = !1, this.selectDate(a), this.t = !1, this.u = !0, this.selectDate(b), this.hide())
    },
    setPos: function (a, b) {
        this.as(a, b)
    },
    isHide: function () {
        return this.v
    },
    isDisable: function (a) {
        return isNaN(Date.parse(a)) ? a : this.bp(new Date(Date.parse(a)))
    },
    getPickerNodes: function () {
        return this.dateInputNode.add(this.b)
    },
    getSelectedStartDate: function () {
        return this.n
    },
    getSelectedEndDate: function () {
        return this.q
    },
    getSelectedDate: function () {
        return this.m
    },
    getCurrentDate: function () {
        return this.currentDate
    }
};
var beatPickerIncrementalId = 0;
initializeBitCal = function () {
    var a = $("*").filter(function () {
        return $(this).data("beatpicker")
    });
    $(a).each(function () {
        var a = $(this),
            c = {
                dateInputNode: a
            };
        $.extend(!0, c, _interpretExtraOptions(a), _interpretPosition(a), _interpretDisableRules(a), _interpretRange(a), _interpretDateFormat(a), _interpretDisablingModule(a));
        _initialization(a, c)
    })
};
_initialization = function (a, b) {
    var c = a.data("beatpicker-id");
    c ? window[c] = new BeatPicker(b) : (c = "beatpicker-" + beatPickerIncrementalId++, window[c] = new BeatPicker(b), a.attr("data-beatpicker-id", c))
};
_interpretDisableRules = function (a) {
    var b = a.data("beatpicker-disable");
    if (!b) return {};
    a = [];
    var b = b.replace(/\s+/g, ""),
        b = b.split("}"),
        b = b.filter(function (a) {
            return "" !== a
        }),
        c;
    for (c in b) {
            var d = b[c] += "}";
            0 === d.indexOf(",") && (d = d.substr(1));
            a.push(_parseJsonEngine(d, ["from", "to"]))
        }
    return {
            disablingRules: a
        }
};
_interpretPosition = function (a) {
    return (a = a.data("beatpicker-position")) ? {
        view: {
            position: _parseJsonEngine(a, [])
        }
    } : {}
};
_interpretRange = function (a) {
    a = a.data("beatpicker-range");
    if (void 0 === a) return {};
    a = String(a);
    a = a.replace(/\s+/g, "");
    var b = a.split(",");
    a = "true" === b[0];
    return {
        selectionRule: {
            range: a,
            rangeDisableSelect: "true" === b[1],
            single: !a
        }
    }
};
_interpretDateFormat = function (a) {
    var b = a.data("beatpicker-format");
    if (!b) return {};
    var b = b.replace(/\s+/g, ""),
        c = b.indexOf("]");
    a = b.substr(0, c + 1);
    b = b.substr(c + 2, b.length);
    return {
            dateFormat: $.extend({
                format: _parseJsonEngine(a, [])
            }, b ? _parseJsonEngine("{" + b + "}", ["separator"]) : {
                separator: "-"
            })
        }
};
_interpretExtraOptions = function (a) {
    return (a = a.data("beatpicker-extra")) && window[a] ? window[a] : null
};
_interpretDisablingModule = function (a) {
    if (a = a.data("beatpicker-module")) {
        a = a.replace(/\s+/g, "");
        a = a.split(",");
        var b = {
            modules: {}
        },
            c;
        for (c in a) b.modules[a[c]] = !1;
        return b
    }
};
_parseJsonEngine = function (a, b) {
    for (var c in b) a = a.replace(b[c], '"' + b[c] + '"');
    return "string" === typeof a ? JSON.parse(a.replace(/'/g, '"')) : a
};
try {
    $(document).ready(function () {
        initializeBitCal()
    })
} catch (e$$22) {
    module && (module.exports = BeatPicker.prototype)
};