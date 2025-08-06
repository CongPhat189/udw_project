// Dữ liệu quà lưu niệm
const GIFTS = {
  "cha-bo": {
    name: "Chả bò Đà Nẵng",
    image: "images/cha-bo.jpg",
    desc:
      "Chả bò Đà Nẵng dai ngon, thơm mùi tiêu. Phù hợp làm quà cho gia đình và bạn bè.",
    highlights: [
      "Dai ngon, đậm vị bò",
      "Dễ bảo quản (ngăn mát/ngăn đông)",
      "Cắt lát ăn kèm bánh mì, cuốn, hoặc cơm"
    ],
    meta: [
      "Giá tham khảo: ~250.000đ/500g",
      "HSD: 5–7 ngày bảo quản lạnh",
      "Nơi mua: Chợ Hàn, Chợ Cồn, cửa hàng đặc sản"
    ]
  },
  "me-xung": {
    name: "Mè xửng",
    image: "images/me-xung.jpg",
    desc:
      "Kẹo mè xửng dẻo ngọt, phủ mè rang thơm bùi, đóng gói gọn gàng — món quà đậm chất miền Trung.",
    highlights: [
      "Dễ mang theo, nhẹ",
      "Vị ngọt bùi, phù hợp nhiều lứa tuổi",
      "Đóng hộp lịch sự để tặng"
    ],
    meta: [
      "Giá tham khảo: ~40.000–70.000đ/hộp",
      "HSD: 2–3 tháng",
      "Nơi mua: Siêu thị đặc sản, chợ địa phương"
    ]
  },
  "mut-khoai": {
    name: "Mứt khoai lang",
    image: "images/mut-khoai.jpg",
    desc:
      "Mứt khoai lang mềm dẻo, vị ngọt vừa, là món quà giản dị nhưng rất được ưa thích.",
    highlights: [
      "Mềm dẻo, ngọt thanh",
      "Thích hợp uống trà, đãi khách",
      "Đóng gói hút chân không tiện mang"
    ],
    meta: [
      "Giá tham khảo: ~80.000–120.000đ/kg",
      "HSD: 1–2 tháng",
      "Nơi mua: Chợ Hàn, Chợ Cồn"
    ]
  },
  "rong-bien": {
    name: "Rong biển khô",
    image: "images/rong-bien.jpg",
    desc:
      "Rong biển khô giàu dinh dưỡng, có thể nấu canh, làm salad, hoặc ăn vặt.",
    highlights: [
      "Giàu i-ốt, khoáng chất",
      "Nhẹ, dễ vận chuyển",
      "Chế biến đa dạng món"
    ],
    meta: [
      "Giá tham khảo: tuỳ loại & trọng lượng",
      "HSD: 6–12 tháng",
      "Nơi mua: Cửa hàng đặc sản biển"
    ]
  },
  "nuoc-mam": {
    name: "Nước mắm Nam Ô",
    image: "images/nuoc-mam.jpg",
    desc:
      "Nước mắm Nam Ô nổi tiếng với hương vị đậm đà, làm từ cá cơm tươi và muối hạt.",
    highlights: [
      "Hương vị mặn mòi, thơm nồng",
      "Phù hợp làm quà biếu",
      "Đa dạng độ đạm & dung tích"
    ],
    meta: [
      "Giá tham khảo: tuỳ độ đạm & thương hiệu",
      "Chú ý đóng gói chống tràn khi di chuyển",
      "Nơi mua: Làng Nam Ô, cửa hàng đặc sản"
    ]
  }
};

// Lấy ?id=từ URL
function getQueryId() {
  const params = new URLSearchParams(window.location.search);
  return params.get("id");
}

// Render nội dung vào qua-detail.html
$(function () {
  const id = getQueryId();
  if (!id || !GIFTS[id]) {
    $("#gift-name").text("Không tìm thấy món quà");
    $("#gift-desc").text("Vui lòng quay lại trang danh sách và chọn mục hợp lệ.");
    $("#gift-image").attr({ src: "images/placeholder.jpg", alt: "Not found" });
    return;
  }

  const g = GIFTS[id];
  $("#gift-name").text(g.name);
  $("#gift-desc").text(g.desc);
  $("#gift-image").attr({ src: g.image, alt: g.name });

  const $high = $("#gift-highlights").empty();
  g.highlights.forEach((h) => $high.append(`<li>${h}</li>`));

  const $meta = $("#gift-meta").empty();
  g.meta.forEach((m) => $meta.append(`<li>${m}</li>`));
});
