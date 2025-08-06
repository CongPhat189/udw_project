// Dữ liệu món ăn 
const DISHES = {
  "mi-quang": {
    name: "Mì Quảng",
    image: "images/mi-quang.jpg",
    desc:
      "Mì Quảng – biểu tượng ẩm thực miền Trung, sợi mì vàng óng, nước dùng đậm đà; ăn kèm rau sống, đậu phộng, bánh tráng mè.",
    highlights: [
      "Sợi mì to, mềm vừa",
      "Topping đa dạng: tôm, thịt, gà, trứng cút…",
      "Ăn kèm rau sống và bánh tráng mè"
    ],
    places: [
      "Mì Quảng Bà Mua (nhiều cơ sở)",
      "Mì Quảng 1A – Hải Phòng",
      "Mì Quảng Bếp Trang – Lê Duẩn"
    ]
  },
  "banh-trang-thit-heo": {
    name: "Bánh tráng cuốn thịt heo",
    image: "images/banh-trang-thit-heo.jpg",
    desc:
      "Thịt heo hai đầu da thái mỏng, cuốn cùng bánh tráng dẻo, rau sống phong phú; chấm mắm nêm đậm đà.",
    highlights: [
      "Thịt heo luộc hai đầu da",
      "Bánh tráng dai, rau sống tươi",
      "Mắm nêm đặc trưng"
    ],
    places: [
      "Quán Mậu – Trần Bàn Cờ",
      "Đại Lộc – Huỳnh Thúc Kháng",
      "Bà Hường – Hải Phòng"
    ]
  },
  "bun-cha-ca": {
    name: "Bún chả cá",
    image: "images/bun-cha-ca.jpg",
    desc:
      "Nước dùng ngọt thanh từ xương cá và rau củ, chả cá dai ngon; ăn kèm rau sống và ớt xanh.",
    highlights: [
      "Chả cá thu/đà dai giòn",
      "Nước dùng thanh, ít béo",
      "Thơm mùi rau củ"
    ],
    places: [
      "Bún chả cá Bà Lữ – Trần Cao Vân",
      "Bún chả cá Hờn – Nguyễn Chí Thanh",
      "Bún chả cá Ông Tạ"
    ]
  },
  "banh-xeo": {
    name: "Bánh xèo",
    image: "images/banh-xeo.jpg",
    desc:
      "Vỏ bánh vàng giòn, nhân tôm thịt đầy đặn; ăn kèm rau sống và chấm mắm nêm hoặc nước mắm chua ngọt.",
    highlights: [
      "Vỏ giòn rụm, nóng hổi",
      "Nhân tôm thịt",
      "Chấm mắm nêm đúng điệu"
    ],
    places: [
      "Bánh xèo Bà Dưỡng – Hoàng Diệu",
      "Bánh xèo Cô Mười",
      "Bánh xèo Tôm Nhảy"
    ]
  },
  "banh-kho-me": {
    name: "Bánh khô mè",
    image: "images/banh-kho-me.jpg",
    desc:
      "Đặc sản Cẩm Lệ: thơm bùi mè rang, giòn tan, ít ngọt; rất hợp làm quà biếu.",
    highlights: [
      "Vị thơm bùi, ít ngọt",
      "Giòn tan, để được lâu",
      "Gói gọn – dễ mang đi"
    ],
    places: [
      "Làng nghề Cẩm Lệ",
      "Chợ Cồn / Chợ Hàn",
      "Các cửa hàng đặc sản Đà Nẵng"
    ]
  }
};

// Lấy tham số ?id= từ URL
function getQueryId() {
  const params = new URLSearchParams(window.location.search);
  return params.get("id");
}

// Render nội dung vào amthuc-detail.html
$(function () {
  const id = getQueryId();
  if (!id || !DISHES[id]) {
    $("#dish-name").text("Không tìm thấy món ăn");
    $("#dish-desc").text("Vui lòng quay lại trang danh sách và chọn món hợp lệ.");
    $("#dish-image").attr({ src: "images/placeholder.jpg", alt: "Not found" });
    return;
  }

  const d = DISHES[id];
  $("#dish-name").text(d.name);
  $("#dish-desc").text(d.desc);
  $("#dish-image").attr({ src: d.image, alt: d.name });

  const $high = $("#dish-highlights").empty();
  d.highlights.forEach((h) => $high.append(`<li>${h}</li>`));

  const $places = $("#dish-places").empty();
  d.places.forEach((p) => $places.append(`<li>${p}</li>`));
});
