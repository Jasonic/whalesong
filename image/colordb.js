// Color database
var ColorDb = function() {
    this.colors = {};
};

var types = plt.types;


ColorDb.prototype.put = function(name, color) {
    this.colors[name] = color;
};

ColorDb.prototype.get = function(name) {
    return this.colors[name.toString().toUpperCase()];
};


// FIXME: update toString to handle the primitive field values.

var colorDb = new ColorDb();
colorDb.put("ORANGE", types.color(255, 165, 0));
colorDb.put("RED", types.color(255, 0, 0));
colorDb.put("ORANGERED", types.color(255, 69, 0));
colorDb.put("TOMATO", types.color(255, 99, 71));
colorDb.put("DARKRED", types.color(139, 0, 0));
colorDb.put("RED", types.color(255, 0, 0));
colorDb.put("FIREBRICK", types.color(178, 34, 34));
colorDb.put("CRIMSON", types.color(220, 20, 60));
colorDb.put("DEEPPINK", types.color(255, 20, 147));
colorDb.put("MAROON", types.color(176, 48, 96));
colorDb.put("INDIAN RED", types.color(205, 92, 92));
colorDb.put("INDIANRED", types.color(205, 92, 92));
colorDb.put("MEDIUM VIOLET RED", types.color(199, 21, 133));
colorDb.put("MEDIUMVIOLETRED", types.color(199, 21, 133));
colorDb.put("VIOLET RED", types.color(208, 32, 144));
colorDb.put("VIOLETRED", types.color(208, 32, 144));
colorDb.put("LIGHTCORAL", types.color(240, 128, 128));
colorDb.put("HOTPINK", types.color(255, 105, 180));
colorDb.put("PALEVIOLETRED", types.color(219, 112, 147));
colorDb.put("LIGHTPINK", types.color(255, 182, 193));
colorDb.put("ROSYBROWN", types.color(188, 143, 143));
colorDb.put("PINK", types.color(255, 192, 203));
colorDb.put("ORCHID", types.color(218, 112, 214));
colorDb.put("LAVENDERBLUSH", types.color(255, 240, 245));
colorDb.put("SNOW", types.color(255, 250, 250));
colorDb.put("CHOCOLATE", types.color(210, 105, 30));
colorDb.put("SADDLEBROWN", types.color(139, 69, 19));
colorDb.put("BROWN", types.color(132, 60, 36));
colorDb.put("DARKORANGE", types.color(255, 140, 0));
colorDb.put("CORAL", types.color(255, 127, 80));
colorDb.put("SIENNA", types.color(160, 82, 45));
colorDb.put("ORANGE", types.color(255, 165, 0));
colorDb.put("SALMON", types.color(250, 128, 114));
colorDb.put("PERU", types.color(205, 133, 63));
colorDb.put("DARKGOLDENROD", types.color(184, 134, 11));
colorDb.put("GOLDENROD", types.color(218, 165, 32));
colorDb.put("SANDYBROWN", types.color(244, 164, 96));
colorDb.put("LIGHTSALMON", types.color(255, 160, 122));
colorDb.put("DARKSALMON", types.color(233, 150, 122));
colorDb.put("GOLD", types.color(255, 215, 0));
colorDb.put("YELLOW", types.color(255, 255, 0));
colorDb.put("OLIVE", types.color(128, 128, 0));
colorDb.put("BURLYWOOD", types.color(222, 184, 135));
colorDb.put("TAN", types.color(210, 180, 140));
colorDb.put("NAVAJOWHITE", types.color(255, 222, 173));
colorDb.put("PEACHPUFF", types.color(255, 218, 185));
colorDb.put("KHAKI", types.color(240, 230, 140));
colorDb.put("DARKKHAKI", types.color(189, 183, 107));
colorDb.put("MOCCASIN", types.color(255, 228, 181));
colorDb.put("WHEAT", types.color(245, 222, 179));
colorDb.put("BISQUE", types.color(255, 228, 196));
colorDb.put("PALEGOLDENROD", types.color(238, 232, 170));
colorDb.put("BLANCHEDALMOND", types.color(255, 235, 205));
colorDb.put("MEDIUM GOLDENROD", types.color(234, 234, 173));
colorDb.put("MEDIUMGOLDENROD", types.color(234, 234, 173));
colorDb.put("PAPAYAWHIP", types.color(255, 239, 213));
colorDb.put("MISTYROSE", types.color(255, 228, 225));
colorDb.put("LEMONCHIFFON", types.color(255, 250, 205));
colorDb.put("ANTIQUEWHITE", types.color(250, 235, 215));
colorDb.put("CORNSILK", types.color(255, 248, 220));
colorDb.put("LIGHTGOLDENRODYELLOW", types.color(250, 250, 210));
colorDb.put("OLDLACE", types.color(253, 245, 230));
colorDb.put("LINEN", types.color(250, 240, 230));
colorDb.put("LIGHTYELLOW", types.color(255, 255, 224));
colorDb.put("SEASHELL", types.color(255, 245, 238));
colorDb.put("BEIGE", types.color(245, 245, 220));
colorDb.put("FLORALWHITE", types.color(255, 250, 240));
colorDb.put("IVORY", types.color(255, 255, 240));
colorDb.put("GREEN", types.color(0, 255, 0));
colorDb.put("LAWNGREEN", types.color(124, 252, 0));
colorDb.put("CHARTREUSE", types.color(127, 255, 0));
colorDb.put("GREEN YELLOW", types.color(173, 255, 47));
colorDb.put("GREENYELLOW", types.color(173, 255, 47));
colorDb.put("YELLOW GREEN", types.color(154, 205, 50));
colorDb.put("YELLOWGREEN", types.color(154, 205, 50));
colorDb.put("MEDIUM FOREST GREEN", types.color(107, 142, 35));
colorDb.put("OLIVEDRAB", types.color(107, 142, 35));
colorDb.put("MEDIUMFORESTGREEN", types.color(107, 142, 35));
colorDb.put("DARK OLIVE GREEN", types.color(85, 107, 47));
colorDb.put("DARKOLIVEGREEN", types.color(85, 107, 47));
colorDb.put("DARKSEAGREEN", types.color(143, 188, 139));
colorDb.put("LIME", types.color(0, 255, 0));
colorDb.put("DARK GREEN", types.color(0, 100, 0));
colorDb.put("DARKGREEN", types.color(0, 100, 0));
colorDb.put("LIME GREEN", types.color(50, 205, 50));
colorDb.put("LIMEGREEN", types.color(50, 205, 50));
colorDb.put("FOREST GREEN", types.color(34, 139, 34));
colorDb.put("FORESTGREEN", types.color(34, 139, 34));
colorDb.put("SPRING GREEN", types.color(0, 255, 127));
colorDb.put("SPRINGGREEN", types.color(0, 255, 127));
colorDb.put("MEDIUM SPRING GREEN", types.color(0, 250, 154));
colorDb.put("MEDIUMSPRINGGREEN", types.color(0, 250, 154));
colorDb.put("SEA GREEN", types.color(46, 139, 87));
colorDb.put("SEAGREEN", types.color(46, 139, 87));
colorDb.put("MEDIUM SEA GREEN", types.color(60, 179, 113));
colorDb.put("MEDIUMSEAGREEN", types.color(60, 179, 113));
colorDb.put("AQUAMARINE", types.color(112, 216, 144));
colorDb.put("LIGHTGREEN", types.color(144, 238, 144));
colorDb.put("PALE GREEN", types.color(152, 251, 152));
colorDb.put("PALEGREEN", types.color(152, 251, 152));
colorDb.put("MEDIUM AQUAMARINE", types.color(102, 205, 170));
colorDb.put("MEDIUMAQUAMARINE", types.color(102, 205, 170));
colorDb.put("TURQUOISE", types.color(64, 224, 208));
colorDb.put("LIGHTSEAGREEN", types.color(32, 178, 170));
colorDb.put("MEDIUM TURQUOISE", types.color(72, 209, 204));
colorDb.put("MEDIUMTURQUOISE", types.color(72, 209, 204));
colorDb.put("HONEYDEW", types.color(240, 255, 240));
colorDb.put("MINTCREAM", types.color(245, 255, 250));
colorDb.put("ROYALBLUE", types.color(65, 105, 225));
colorDb.put("DODGERBLUE", types.color(30, 144, 255));
colorDb.put("DEEPSKYBLUE", types.color(0, 191, 255));
colorDb.put("CORNFLOWERBLUE", types.color(100, 149, 237));
colorDb.put("STEEL BLUE", types.color(70, 130, 180));
colorDb.put("STEELBLUE", types.color(70, 130, 180));
colorDb.put("LIGHTSKYBLUE", types.color(135, 206, 250));
colorDb.put("DARK TURQUOISE", types.color(0, 206, 209));
colorDb.put("DARKTURQUOISE", types.color(0, 206, 209));
colorDb.put("CYAN", types.color(0, 255, 255));
colorDb.put("AQUA", types.color(0, 255, 255));
colorDb.put("DARKCYAN", types.color(0, 139, 139));
colorDb.put("TEAL", types.color(0, 128, 128));
colorDb.put("SKY BLUE", types.color(135, 206, 235));
colorDb.put("SKYBLUE", types.color(135, 206, 235));
colorDb.put("CADET BLUE", types.color(96, 160, 160));
colorDb.put("CADETBLUE", types.color(95, 158, 160));
colorDb.put("DARK SLATE GRAY", types.color(47, 79, 79));
colorDb.put("DARKSLATEGRAY", types.color(47, 79, 79));
colorDb.put("LIGHTSLATEGRAY", types.color(119, 136, 153));
colorDb.put("SLATEGRAY", types.color(112, 128, 144));
colorDb.put("LIGHT STEEL BLUE", types.color(176, 196, 222));
colorDb.put("LIGHTSTEELBLUE", types.color(176, 196, 222));
colorDb.put("LIGHT BLUE", types.color(173, 216, 230));
colorDb.put("LIGHTBLUE", types.color(173, 216, 230));
colorDb.put("POWDERBLUE", types.color(176, 224, 230));
colorDb.put("PALETURQUOISE", types.color(175, 238, 238));
colorDb.put("LIGHTCYAN", types.color(224, 255, 255));
colorDb.put("ALICEBLUE", types.color(240, 248, 255));
colorDb.put("AZURE", types.color(240, 255, 255));
colorDb.put("MEDIUM BLUE", types.color(0, 0, 205));
colorDb.put("MEDIUMBLUE", types.color(0, 0, 205));
colorDb.put("DARKBLUE", types.color(0, 0, 139));
colorDb.put("MIDNIGHT BLUE", types.color(25, 25, 112));
colorDb.put("MIDNIGHTBLUE", types.color(25, 25, 112));
colorDb.put("NAVY", types.color(36, 36, 140));
colorDb.put("BLUE", types.color(0, 0, 255));
colorDb.put("INDIGO", types.color(75, 0, 130));
colorDb.put("BLUE VIOLET", types.color(138, 43, 226));
colorDb.put("BLUEVIOLET", types.color(138, 43, 226));
colorDb.put("MEDIUM SLATE BLUE", types.color(123, 104, 238));
colorDb.put("MEDIUMSLATEBLUE", types.color(123, 104, 238));
colorDb.put("SLATE BLUE", types.color(106, 90, 205));
colorDb.put("SLATEBLUE", types.color(106, 90, 205));
colorDb.put("PURPLE", types.color(160, 32, 240));
colorDb.put("DARK SLATE BLUE", types.color(72, 61, 139));
colorDb.put("DARKSLATEBLUE", types.color(72, 61, 139));
colorDb.put("DARKVIOLET", types.color(148, 0, 211));
colorDb.put("DARK ORCHID", types.color(153, 50, 204));
colorDb.put("DARKORCHID", types.color(153, 50, 204));
colorDb.put("MEDIUMPURPLE", types.color(147, 112, 219));
colorDb.put("CORNFLOWER BLUE", types.color(68, 64, 108));
colorDb.put("MEDIUM ORCHID", types.color(186, 85, 211));
colorDb.put("MEDIUMORCHID", types.color(186, 85, 211));
colorDb.put("MAGENTA", types.color(255, 0, 255));
colorDb.put("FUCHSIA", types.color(255, 0, 255));
colorDb.put("DARKMAGENTA", types.color(139, 0, 139));
colorDb.put("VIOLET", types.color(238, 130, 238));
colorDb.put("PLUM", types.color(221, 160, 221));
colorDb.put("LAVENDER", types.color(230, 230, 250));
colorDb.put("THISTLE", types.color(216, 191, 216));
colorDb.put("GHOSTWHITE", types.color(248, 248, 255));
colorDb.put("WHITE", types.color(255, 255, 255));
colorDb.put("WHITESMOKE", types.color(245, 245, 245));
colorDb.put("GAINSBORO", types.color(220, 220, 220));
colorDb.put("LIGHT GRAY", types.color(211, 211, 211));
colorDb.put("LIGHTGRAY", types.color(211, 211, 211));
colorDb.put("SILVER", types.color(192, 192, 192));
colorDb.put("GRAY", types.color(190, 190, 190));
colorDb.put("DARK GRAY", types.color(169, 169, 169));
colorDb.put("DARKGRAY", types.color(169, 169, 169));
colorDb.put("DIM GRAY", types.color(105, 105, 105));
colorDb.put("DIMGRAY", types.color(105, 105, 105));
colorDb.put("BLACK", types.color(0, 0, 0));


EXPORTS['_colorDb'] = colorDb;
