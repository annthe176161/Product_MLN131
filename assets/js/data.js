// Historical Events Data - Organized by Month (1 event per month)
const historicalEvents = [
  // Tháng 1 - January
  {
    id: 1,
    month: 1,
    day: 21,
    year: 1924,
    title: "V.I. Lenin qua đời",
    description:
      "Vladimir Ilyich Lenin, nhà lãnh đạo vĩ đại của Cách mạng tháng Mười Nga và người sáng lập Nhà nước Xô Viết đầu tiên trên thế giới, qua đời tại Gorki, Liên Xô. Tư tưởng của Lenin tiếp tục soi đường cho phong trào cộng sản và công nhân quốc tế.",
    image: "https://images.unsplash.com/photo-1553603227-2358aabe821e?w=800",
    tags: [
      "Liên Xô",
      "Lenin",
      "Cách mạng tháng Mười",
      "Chủ nghĩa Marxism-Leninism",
    ],
  },

  // Tháng 2 - February
  {
    id: 2,
    month: 2,
    day: 3,
    year: 1930,
    title: "Thành lập Đảng Cộng sản Việt Nam",
    description:
      "Hội nghị hợp nhất các tổ chức cộng sản ở Việt Nam được tổ chức tại Cửu Long (Hương Cảng) do đồng chí Nguyễn Ái Quốc chủ trì, quyết định thành lập Đảng Cộng sản Việt Nam. Đây là sự kiện có ý nghĩa trọng đại đối với cách mạng Việt Nam.",
    image: "https://images.unsplash.com/photo-1583396379430-6e59a6e93b59?w=800",
    tags: ["Việt Nam", "Hồ Chí Minh", "Đảng Cộng sản", "Cách mạng Việt Nam"],
  },

  // Tháng 3 - March
  {
    id: 3,
    month: 3,
    day: 8,
    year: 1917,
    title: "Cách mạng tháng Hai Nga bùng nổ",
    description:
      "Ngày 8/3/1917 (theo lịch cũ là 23/2), phụ nữ công nhân Petrograd xuống đường biểu tình kỷ niệm Ngày Quốc tế Phụ nữ, khởi đầu cho Cách mạng tháng Hai, lật đổ chế độ Nga hoàng, mở đường cho Cách mạng tháng Mười vĩ đại.",
    image: "https://images.unsplash.com/photo-1532375810709-75b1da00537c?w=800",
    tags: ["Nga", "Cách mạng tháng Hai", "Phụ nữ", "Petrograd"],
  },

  // Tháng 4 - April
  {
    id: 4,
    month: 4,
    day: 30,
    year: 1975,
    title: "Giải phóng miền Nam, thống nhất đất nước",
    description:
      "Quân giải phóng tiến vào Sài Gòn, chấm dứt hoàn toàn ách thống trị của đế quốc Mỹ và tay sai, giải phóng miền Nam, thống nhất đất nước. Đây là thắng lợi vĩ đại của nhân dân Việt Nam, góp phần vào phong trào giải phóng dân tộc trên thế giới.",
    image: "https://images.unsplash.com/photo-1583396379430-6e59a6e93b59?w=800",
    tags: ["Việt Nam", "Giải phóng miền Nam", "Thống nhất", "Chiến thắng"],
  },

  // Tháng 5 - May
  {
    id: 5,
    month: 5,
    day: 1,
    year: 1886,
    title: "Ngày Quốc tế Lao động",
    description:
      "Công nhân Chicago (Mỹ) đấu tranh đòi chế độ 8 giờ làm việc. Sự kiện này đã trở thành nguồn gốc của Ngày Quốc tế Lao động 1/5, biểu tượng đoàn kết và đấu tranh của giai cấp công nhân toàn thế giới.",
    image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800",
    tags: ["Mỹ", "Chicago", "Quốc tế Lao động", "Công nhân"],
  },

  // Tháng 6 - June
  {
    id: 6,
    month: 6,
    day: 4,
    year: 1989,
    title: "Sự kiện Thiên An Môn",
    description:
      "Các cuộc biểu tình của sinh viên và người dân tại Quảng trường Thiên An Môn, Bắc Kinh, Trung Quốc. Sự kiện này phản ánh những mâu thuẫn và khát vọng dân chủ trong quá trình cải cách của Trung Quốc.",
    image: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=800",
    tags: ["Trung Quốc", "Thiên An Môn", "Biểu tình", "Bắc Kinh"],
  },

  // Tháng 7 - July
  {
    id: 7,
    month: 7,
    day: 14,
    year: 1789,
    title: "Cách mạng Pháp nổ ra",
    description:
      "Nhân dân Paris công kích nhà tù Bastille, mở đầu cho Cách mạng tư sản Pháp. Cách mạng này đã lật đổ chế độ phong kiến, công bố Tuyên ngôn Nhân quyền và Dân quyền, có ảnh hưởng sâu rộng đến lịch sử thế giới.",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800",
    tags: ["Pháp", "Cách mạng", "Bastille", "Paris"],
  },

  // Tháng 8 - August
  {
    id: 8,
    month: 8,
    day: 19,
    year: 1945,
    title: "Cách mạng tháng Tám thành công",
    description:
      "Cách mạng tháng Tám thành công, Chủ tịch Hồ Chí Minh đọc Tuyên ngôn Độc lập ngày 2/9/1945, khai sinh nước Việt Nam Dân chủ Cộng hòa. Đây là thắng lợi vĩ đại đầu tiên của dân tộc Việt Nam dưới sự lãnh đạo của Đảng Cộng sản.",
    image: "https://images.unsplash.com/photo-1583396379430-6e59a6e93b59?w=800",
    tags: ["Việt Nam", "Cách mạng tháng Tám", "Hồ Chí Minh", "Độc lập"],
  },

  // Tháng 9 - September
  {
    id: 9,
    month: 9,
    day: 2,
    year: 1945,
    title: "Tuyên ngôn Độc lập của Việt Nam",
    description:
      "Chủ tịch Hồ Chí Minh đọc Tuyên ngôn Độc lập tại Quảng trường Ba Đình, Hà Nội, khai sinh nước Việt Nam Dân chủ Cộng hòa - Nhà nước công nông đầu tiên ở Đông Nam Á.",
    image: "https://images.unsplash.com/photo-1583396379430-6e59a6e93b59?w=800",
    tags: ["Việt Nam", "Độc lập", "Hồ Chí Minh", "Ba Đình"],
  },

  // Tháng 10 - October
  {
    id: 10,
    month: 10,
    day: 1,
    year: 1949,
    title: "Thành lập nước Cộng hòa Nhân dân Trung Hoa",
    description:
      "Chủ tịch Mao Trạch Đông tuyên bố thành lập nước Cộng hòa Nhân dân Trung Hoa tại Thiên An Môn, Bắc Kinh. Đây là thắng lợi vĩ đại của cách mạng Trung Quốc, có ảnh hưởng sâu rộng đến cán cân lực lượng thế giới.",
    image: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=800",
    tags: ["Trung Quốc", "Mao Trạch Đông", "Cộng hòa Nhân dân", "Bắc Kinh"],
  },

  // Tháng 11 - November
  {
    id: 11,
    month: 11,
    day: 7,
    year: 1917,
    title: "Cách mạng tháng Mười Nga thành công",
    description:
      "Cách mạng tháng Mười Nga do Đảng Bolshevik lãnh đạo thành công, lật đổ Chính phủ lâm thời tư sản, thiết lập chính quyền Xô Viết - nhà nước xã hội chủ nghĩa đầu tiên trên thế giới. Đây là bước ngoặt lịch sử của nhân loại.",
    image: "https://images.unsplash.com/photo-1553603227-2358aabe821e?w=800",
    tags: ["Liên Xô", "Cách mạng tháng Mười", "Lenin", "Bolshevik"],
  },

  // Tháng 12 - December
  {
    id: 12,
    month: 12,
    day: 30,
    year: 1922,
    title: "Thành lập Liên Xô",
    description:
      "Hội nghị Xô Viết toàn Liên bang quyết định thành lập Liên bang Cộng hòa Xã hội Chủ nghĩa Xô Viết (Liên Xô), nhà nước xã hội chủ nghĩa đa dân tộc đầu tiên trên thế giới.",
    image: "https://images.unsplash.com/photo-1553603227-2358aabe821e?w=800",
    tags: ["Liên Xô", "Thành lập", "Xã hội chủ nghĩa", "Lenin"],
  },
];

// Export data for use in main.js
if (typeof module !== "undefined" && module.exports) {
  module.exports = { historicalEvents };
}
