const PLACES = {
  "banh-xeo-ba-duong": {
    name: "Bánh xèo Bà Dưỡng",
    image: "/images/banh-xeo-ba-duong.jpg",
    desc:
      "Quán bánh xèo lâu đời nổi tiếng, vỏ giòn rụm; ăn kèm rau sống và mắm nêm đúng điệu.",
    highlights: [
      "Vỏ bánh vàng giòn, nóng hổi",
      "Nem – ram cuốn kèm phong phú",
      "Giờ cao điểm khá đông"
    ],
    meta: [
      "Địa chỉ: 280/23 Hoàng Diệu, Hải Châu",
      "Giờ mở cửa: 09:30 – 21:00 (tham khảo)",
      "Giá: bình dân"
    ]
  },
  "mi-quang-ba-mua": {
    name: "Mì Quảng Bà Mua",
    image: "/images/mi-quang-ba-mua.jpg",
    desc:
      "Chuỗi quán mì Quảng nổi tiếng với nhiều topping, nước lèo đậm vị, phục vụ nhanh.",
    highlights: [
      "Đa dạng mì: gà, tôm thịt, sườn…",
      "Không gian sạch sẽ",
      "Phục vụ nhanh"
    ],
    meta: [
      "Địa chỉ: nhiều cơ sở tại Đà Nẵng",
      "Giờ mở cửa: 06:00 – 21:00 (tham khảo)",
      "Giá: bình dân – tầm trung"
    ]
  },
  "bun-cha-ca-hon": {
    name: "Bún chả cá Hờn",
    image: "/images/bun-cha-ca-hon.jpg",
    desc:
      "Nước dùng ngọt thanh từ xương cá và rau củ, chả cá dai ngon chuẩn vị miền Trung.",
    highlights: [
      "Chả cá thu/đà dai",
      "Nước dùng thanh, ít béo",
      "Rau sống tươi"
    ],
    meta: [
      "Địa chỉ: 113/3 Nguyễn Chí Thanh",
      "Giờ mở cửa: 06:00 – 21:00 (tham khảo)",
      "Giá: bình dân"
    ]
  },
  "banh-trang-thit-heo-mau": {
    name: "Bánh tráng thịt heo Mậu",
    image: "/images/banh-trang-thit-heo-mau.jpg",
    desc:
      "Thịt heo hai đầu da thái mỏng, bánh tráng dẻo dai; chấm mắm nêm đặc trưng Đà Nẵng.",
    highlights: [
      "Thịt heo mềm, cắt lát đều",
      "Mắm nêm đậm đà",
      "Rau sống phong phú"
    ],
    meta: [
      "Địa chỉ: 35 Đỗ Thúc Tịnh",
      "Giờ mở cửa: 09:00 – 21:00 (tham khảo)",
      "Giá: tầm trung"
    ]
  },
  "banh-xeo-76": {
    name: "Bánh Xèo 76 (Đà Nẵng)",
    image: "/images/banh-xeo-76.jpg",
    desc:
      "Bánh Xèo 76 có bếp nướng than ngay lối vào để nướng thịt heo. Phục vụ các món truyền thống như bánh xèo, chả giò bắp, bún thịt nướng.",
    highlights: [
      "Bếp than trực tiếp nướng thịt ngay cửa",
      "Bánh xèo vàng giòn, chả giò bắp thơm ngon",
      "Không gian dân dã, gần gũi"
    ],
    meta: [
      "Địa chỉ: 85A Lê Văn Hưu, Ngũ Hành Sơn, Đà Nẵng",
      "Giờ mở cửa: 10:00 – 21:00 mỗi ngày",
      "Giá: bình dân, phong cách truyền thống"
    ]
  },
  "madame-lan": {
    name: "Nhà hàng Madame Lân",
    image: "/images/madame-lan.jpg",
    desc:
      "Nhà hàng Madame Lân tái hiện không gian phố cổ với ẩm thực miền Trung đặc sắc. Thực đơn đa dạng từ mì Quảng, bánh bèo, nem lụi đến hải sản tươi.",
    highlights: [
      "Không gian rộng, mang phong cách phố cổ Hội An",
      "Phục vụ nhiều món ăn truyền thống miền Trung",
      "Phù hợp cho gia đình, đoàn du lịch"
    ],
    meta: [
      "Địa chỉ: 4 Bạch Đằng, Hải Châu, Đà Nẵng",
      "Giờ mở cửa: 10:00 – 22:00 mỗi ngày",
      "Giá: trung bình – phù hợp cho nhóm đông"
    ]
  },


};


// Lấy tham số ?id= từ URL
function getQueryId() {
  const params = new URLSearchParams(window.location.search);
  return params.get("id");
}

// Render nội dung vào diadiem-detail.html
$(function () {
  const id = getQueryId();
  if (!id || !PLACES[id]) {
    $("#place-name").text("Không tìm thấy địa điểm");
    $("#place-desc").text("Vui lòng quay lại danh sách và chọn địa điểm hợp lệ.");
    $("#place-image").attr({ src: "images/placeholder.jpg", alt: "Not found" });
    return;
  }

  const p = PLACES[id];
  $("#place-name").text(p.name);
  $("#place-desc").text(p.desc);
  $("#place-image").attr({ src: p.image, alt: p.name });

  const $high = $("#place-highlights").empty();
  p.highlights.forEach((h) => $high.append(`<li>${h}</li>`));

  const $meta = $("#place-meta").empty();
  p.meta.forEach((m) => $meta.append(`<li>${m}</li>`));
});
