// Historical Events Data - Organized by Month
const historicalEvents = [
  // Tháng 1 - January
  {
    id: 1,
    month: 1,
    day: 1,
    year: 1959,
    title: "Cách mạng Cuba thành công",
    description:
      "Ngày 1/1/1959, quân đội cách mạng do Fidel Castro lãnh đạo tiến vào Havana, đánh dấu thành công của cuộc cách mạng Cuba. Đây là sự kiện quan trọng trong lịch sử phong trào cách mạng xã hội chủ nghĩa ở Mỹ Latinh, mở ra kỷ nguyên mới cho Cuba và ảnh hưởng sâu sắc đến phong trào giải phóng dân tộc trên thế giới.",
    image: "https://images.unsplash.com/photo-1519677100203-a0e668c92439?w=800",
    tags: ["Cuba", "Cách mạng", "Fidel Castro", "Mỹ Latinh"],
  },
  {
    id: 2,
    month: 1,
    day: 15,
    year: 1919,
    title: "Rosa Luxemburg và Karl Liebknecht bị ám sát",
    description:
      "Hai nhà lãnh đạo cộng sản nổi tiếng của Đức, Rosa Luxemburg và Karl Liebknecht, bị lực lượng phản động ám sát tại Berlin. Sự kiện này là tổn thất lớn cho phong trào công nhân quốc tế và phong trào cách mạng Đức.",
    image: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=800",
    tags: ["Đức", "Rosa Luxemburg", "Karl Liebknecht", "Phong trào công nhân"],
  },
  {
    id: 3,
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
    id: 4,
    month: 2,
    day: 3,
    year: 1930,
    title: "Thành lập Đảng Cộng sản Việt Nam",
    description:
      "Hội nghị hợp nhất các tổ chức cộng sản ở Việt Nam được tổ chức tại Cửu Long (Hương Cảng) do đồng chí Nguyễn Ái Quốc chủ trì, quyết định thành lập Đảng Cộng sản Việt Nam. Đây là sự kiện có ý nghĩa trọng đại đối với cách mạng Việt Nam.",
    image: "https://images.unsplash.com/photo-1583396379430-6e59a6e93b59?w=800",
    tags: ["Việt Nam", "Hồ Chí Minh", "Đảng Cộng sản", "Cách mạng Việt Nam"],
  },
  {
    id: 5,
    month: 2,
    day: 21,
    year: 1848,
    title: "Tuyên ngôn của Đảng Cộng sản được công bố",
    description:
      "Karl Marx và Friedrich Engels công bố 'Tuyên ngôn của Đảng Cộng sản' tại London. Đây là tác phẩm cương lĩnh lần đầu tiên trình bày một cách có hệ thống quan điểm của chủ nghĩa cộng sản khoa học, mở ra kỷ nguyên mới cho phong trào công nhân quốc tế.",
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800",
    tags: ["Marx", "Engels", "Tuyên ngôn", "Chủ nghĩa cộng sản"],
  },
  {
    id: 6,
    month: 2,
    day: 23,
    year: 1918,
    title: "Thành lập Hồng quân Công nông Liên Xô",
    description:
      "Hồng quân Công nông được thành lập theo sắc lệnh của V.I. Lenin, trở thành lực lượng vũ trang bảo vệ chính quyền Xô Viết và cách mạng xã hội chủ nghĩa. Đây là quân đội nhân dân đầu tiên trên thế giới.",
    image: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=800",
    tags: ["Liên Xô", "Hồng quân", "Lenin", "Quân đội nhân dân"],
  },

  // Tháng 3 - March
  {
    id: 7,
    month: 3,
    day: 8,
    year: 1917,
    title: "Cách mạng tháng Hai Nga bùng nổ",
    description:
      "Ngày 8/3/1917 (theo lịch cũ là 23/2), phụ nữ công nhân Petrograd xuống đường biểu tình kỷ niệm Ngày Quốc tế Phụ nữ, khởi đầu cho Cách mạng tháng Hai, lật đổ chế độ Nga hoàng, mở đường cho Cách mạng tháng Mười vĩ đại.",
    image: "https://images.unsplash.com/photo-1532375810709-75b1da00537c?w=800",
    tags: ["Nga", "Cách mạng tháng Hai", "Phụ nữ", "Petrograd"],
  },
  {
    id: 8,
    month: 3,
    day: 14,
    year: 1883,
    title: "Karl Marx qua đời",
    description:
      "Karl Marx, người thầy vĩ đại của giai cấp vô sản toàn thế giới, qua đời tại London. Tư tưởng của Marx đã và đang là ngọn cờ lý luận soi đường cho phong trào cách mạng của giai cấp công nhân và nhân dân lao động thế giới.",
    image: "https://images.unsplash.com/photo-1461360370896-922624d12aa1?w=800",
    tags: ["Marx", "London", "Chủ nghĩa Marxism", "Lý luận cách mạng"],
  },
  {
    id: 9,
    month: 3,
    day: 18,
    year: 1871,
    title: "Công xã Paris ra đời",
    description:
      "Công xã Paris được thành lập, đây là chính quyền công nhân đầu tiên trong lịch sử, mô hình của nhà nước kiểu mới. Mặc dù chỉ tồn tại 72 ngày, Công xã Paris đã để lại những bài học quý báu cho phong trào cộng sản quốc tế.",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800",
    tags: ["Pháp", "Công xã Paris", "Chính quyền công nhân", "Paris"],
  },

  // Tháng 4 - April
  {
    id: 10,
    month: 4,
    day: 3,
    year: 1968,
    title: "Martin Luther King Jr. bị ám sát",
    description:
      "Mục sư Martin Luther King Jr., nhà lãnh đạo phong trào dân quyền và đấu tranh chống phân biệt chủng tộc tại Mỹ, bị ám sát tại Memphis, Tennessee. Ông là biểu tượng của cuộc đấu tranh vì công bằng xã hội và bình đẳng.",
    image: "https://images.unsplash.com/photo-1485364028218-7e74bd46f83c?w=800",
    tags: ["Mỹ", "Martin Luther King", "Dân quyền", "Phân biệt chủng tộc"],
  },
  {
    id: 11,
    month: 4,
    day: 22,
    year: 1870,
    title: "Sinh nhật V.I. Lenin",
    description:
      "Vladimir Ilyich Lenin sinh tại Simbirsk (nay là Ulyanovsk), Nga. Lenin là người sáng lập Nhà nước Xô Viết đầu tiên, người đã phát triển chủ nghĩa Marxism trong điều kiện mới, đưa cách mạng xã hội chủ nghĩa từ lý luận thành hiện thực.",
    image: "https://images.unsplash.com/photo-1553603227-2358aabe821e?w=800",
    tags: ["Liên Xô", "Lenin", "Sinh nhật", "Simbirsk"],
  },
  {
    id: 12,
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
    id: 13,
    month: 5,
    day: 1,
    year: 1886,
    title: "Ngày Quốc tế Lao động",
    description:
      "Công nhân Chicago (Mỹ) đấu tranh đòi chế độ 8 giờ làm việc. Sự kiện này đã trở thành nguồn gốc của Ngày Quốc tế Lao động 1/5, biểu tượng đoàn kết và đấu tranh của giai cấp công nhân toàn thế giới.",
    image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800",
    tags: ["Mỹ", "Chicago", "Quốc tế Lao động", "Công nhân"],
  },
  {
    id: 14,
    month: 5,
    day: 5,
    year: 1818,
    title: "Sinh nhật Karl Marx",
    description:
      "Karl Marx sinh tại Trier, Phổ (nay thuộc Đức). Marx là người sáng lập chủ nghĩa Marxism, tư tưởng cách mạng vĩ đại của giai cấp công nhân, là cơ sở lý luận và phương pháp luận cho sự nghiệp giải phóng của nhân dân lao động.",
    image: "https://images.unsplash.com/photo-1461360370896-922624d12aa1?w=800",
    tags: ["Đức", "Marx", "Sinh nhật", "Trier"],
  },
  {
    id: 15,
    month: 5,
    day: 19,
    year: 1890,
    title: "Sinh nhật Hồ Chí Minh",
    description:
      "Chủ tịch Hồ Chí Minh sinh tại làng Kim Liên, Nghệ An. Người là anh hùng giải phóng dân tộc, danh nhân văn hóa thế giới, người sáng lập Đảng Cộng sản Việt Nam, lãnh tụ vĩ đại của dân tộc Việt Nam.",
    image: "https://images.unsplash.com/photo-1583396379430-6e59a6e93b59?w=800",
    tags: ["Việt Nam", "Hồ Chí Minh", "Sinh nhật", "Nghệ An"],
  },

  // Tháng 6 - June
  {
    id: 16,
    month: 6,
    day: 4,
    year: 1989,
    title: "Sự kiện Thiên An Môn",
    description:
      "Các cuộc biểu tình của sinh viên và người dân tại Quảng trường Thiên An Môn, Bắc Kinh, Trung Quốc. Sự kiện này phản ánh những mâu thuẫn và khát vọng dân chủ trong quá trình cải cách của Trung Quốc.",
    image: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=800",
    tags: ["Trung Quốc", "Thiên An Môn", "Biểu tình", "Bắc Kinh"],
  },
  {
    id: 17,
    month: 6,
    day: 28,
    year: 1919,
    title: "Hiệp ước Versailles được ký kết",
    description:
      "Hiệp ước Versailles được ký kết, chấm dứt Chiến tranh thế giới thứ nhất. Điều khoản khắc nghiệt của hiệp ước đã tạo ra những mâu thuẫn dẫn đến Chiến tranh thế giới thứ hai và ảnh hưởng đến tình hình thế giới.",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800",
    tags: ["Pháp", "Versailles", "WWI", "Hiệp ước"],
  },

  // Tháng 7 - July
  {
    id: 18,
    month: 7,
    day: 14,
    year: 1789,
    title: "Cách mạng Pháp nổ ra",
    description:
      "Nhân dân Paris công kích nhà tù Bastille, mở đầu cho Cách mạng tư sản Pháp. Cách mạng này đã lật đổ chế độ phong kiến, công bố Tuyên ngôn Nhân quyền và Dân quyền, có ảnh hưởng sâu rộng đến lịch sử thế giới.",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800",
    tags: ["Pháp", "Cách mạng", "Bastille", "Paris"],
  },
  {
    id: 19,
    month: 7,
    day: 26,
    year: 1953,
    title: "Khởi nghĩa Moncada",
    description:
      "Fidel Castro và các đồng chí tấn công doanh trại Moncada ở Cuba, mở đầu cho cuộc đấu tranh vũ trang chống chế độ độc tài Batista. Mặc dù thất bại, nhưng đây là khởi đầu cho cách mạng Cuba thành công năm 1959.",
    image: "https://images.unsplash.com/photo-1519677100203-a0e668c92439?w=800",
    tags: ["Cuba", "Fidel Castro", "Moncada", "Khởi nghĩa"],
  },

  // Tháng 8 - August
  {
    id: 20,
    month: 8,
    day: 5,
    year: 1895,
    title: "Sinh nhật Friedrich Engels",
    description:
      "Friedrich Engels sinh tại Barmen, Phổ (nay thuộc Đức). Engels là người bạn thân thiết và cộng sự suốt đời của Karl Marx, đồng sáng lập chủ nghĩa Marxism, có đóng góp to lớn cho sự nghiệp cách mạng của giai cấp công nhân.",
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800",
    tags: ["Đức", "Engels", "Sinh nhật", "Barmen"],
  },
  {
    id: 21,
    month: 8,
    day: 19,
    year: 1945,
    title: "Cách mạng tháng Tám thành công",
    description:
      "Cách mạng tháng Tám thành công, Chủ tịch Hồ Chí Minh đọc Tuyên ngôn Độc lập ngày 2/9/1945, khai sinh nước Việt Nam Dân chủ Cộng hòa. Đây là thắng lợi vĩ đại đầu tiên của dân tộc Việt Nam dưới sự lãnh đạo của Đảng Cộng sản.",
    image: "https://images.unsplash.com/photo-1583396379430-6e59a6e93b59?w=800",
    tags: ["Việt Nam", "Cách mạng tháng Tám", "Hồ Chí Minh", "Độc lập"],
  },
  {
    id: 22,
    month: 8,
    day: 6,
    year: 1945,
    title: "Mỹ thả bom nguyên tử xuống Hiroshima",
    description:
      "Mỹ thả bom nguyên tử đầu tiên xuống Hiroshima, Nhật Bản, sau đó là Nagasaki ngày 9/8. Sự kiện này đánh dấu sự kết thúc Chiến tranh thế giới thứ hai và mở ra kỷ nguyên vũ khí hạt nhân.",
    image: "https://images.unsplash.com/photo-1526725602171-fa1db02bc376?w=800",
    tags: ["Nhật Bản", "Hiroshima", "WWII", "Bom nguyên tử"],
  },

  // Tháng 9 - September
  {
    id: 23,
    month: 9,
    day: 2,
    year: 1945,
    title: "Tuyên ngôn Độc lập của Việt Nam",
    description:
      "Chủ tịch Hồ Chí Minh đọc Tuyên ngôn Độc lập tại Quảng trường Ba Đình, Hà Nội, khai sinh nước Việt Nam Dân chủ Cộng hòa - Nhà nước công nông đầu tiên ở Đông Nam Á.",
    image: "https://images.unsplash.com/photo-1583396379430-6e59a6e93b59?w=800",
    tags: ["Việt Nam", "Độc lập", "Hồ Chí Minh", "Ba Đình"],
  },
  {
    id: 24,
    month: 9,
    day: 2,
    year: 1969,
    title: "Hồ Chí Minh qua đời",
    description:
      "Chủ tịch Hồ Chí Minh, lãnh tụ kỳ vĩ của dân tộc Việt Nam, qua đời tại Hà Nội. Người để lại di sản tư tưởng và tấm gương đạo đức cao cả, tiếp tục soi đường cho sự nghiệp cách mạng của dân tộc.",
    image: "https://images.unsplash.com/photo-1583396379430-6e59a6e93b59?w=800",
    tags: ["Việt Nam", "Hồ Chí Minh", "Di sản", "Lãnh tụ"],
  },

  // Tháng 10 - October
  {
    id: 25,
    month: 10,
    day: 10,
    year: 1945,
    title: "Thành lập Đảng Lao động Triều Tiên",
    description:
      "Đảng Lao động Triều Tiên (tiền thân của Đảng Lao động Triều Tiên hiện nay) được thành lập, lãnh đạo nhân dân Triều Tiên trong sự nghiệp xây dựng chủ nghĩa xã hội.",
    image: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=800",
    tags: ["Triều Tiên", "Đảng Lao động", "Chủ nghĩa xã hội"],
  },
  {
    id: 26,
    month: 10,
    day: 16,
    year: 1949,
    title: "Kết thúc Nội chiến Hy Lạp",
    description:
      "Nội chiến Hy Lạp (1946-1949) giữa các lực lượng cộng sản và chính phủ được hỗ trợ bởi Anh và Mỹ kết thúc. Đây là một trong những cuộc xung đột đầu tiên của Chiến tranh Lạnh.",
    image: "https://images.unsplash.com/photo-1555993539-1732b0258235?w=800",
    tags: ["Hy Lạp", "Nội chiến", "Chiến tranh Lạnh"],
  },
  {
    id: 27,
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
    id: 28,
    month: 11,
    day: 7,
    year: 1917,
    title: "Cách mạng tháng Mười Nga thành công",
    description:
      "Cách mạng tháng Mười Nga do Đảng Bolshevik lãnh đạo thành công, lật đổ Chính phủ lâm thời tư sản, thiết lập chính quyền Xô Viết - nhà nước xã hội chủ nghĩa đầu tiên trên thế giới. Đây là bước ngoặt lịch sử của nhân loại.",
    image: "https://images.unsplash.com/photo-1553603227-2358aabe821e?w=800",
    tags: ["Liên Xô", "Cách mạng tháng Mười", "Lenin", "Bolshevik"],
  },
  {
    id: 29,
    month: 11,
    day: 9,
    year: 1989,
    title: "Bức tường Berlin sụp đổ",
    description:
      "Bức tường Berlin, biểu tượng của sự phân chia giữa Đông và Tây trong Chiến tranh Lạnh, bắt đầu được phá bỏ. Sự kiện này đánh dấu bước ngoặt quan trọng dẫn đến sự kết thúc của Chiến tranh Lạnh.",
    image: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=800",
    tags: ["Đức", "Berlin", "Chiến tranh Lạnh", "Thống nhất"],
  },
  {
    id: 30,
    month: 11,
    day: 20,
    year: 1945,
    title: "Khai mạc Tòa án Nuremberg",
    description:
      "Tòa án Quân sự Quốc tế tại Nuremberg, Đức, bắt đầu xét xử các tội phạm chiến tranh Đức Quốc xã. Đây là bước tiến quan trọng trong việc thiết lập luật pháp quốc tế về tội ác chống lại nhân loại.",
    image: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=800",
    tags: ["Đức", "Nuremberg", "WWII", "Tòa án"],
  },

  // Tháng 12 - December
  {
    id: 31,
    month: 12,
    day: 26,
    year: 1991,
    title: "Liên Xô chính thức tan rã",
    description:
      "Liên bang Cộng hòa Xã hội Chủ nghĩa Xô Viết chính thức ngừng tồn tại, đánh dấu sự kết thúc của mô hình xã hội chủ nghĩa Xô Viết. Sự kiện này có ảnh hưởng sâu rộng đến tình hình thế giới và phong trào cộng sản quốc tế.",
    image: "https://images.unsplash.com/photo-1553603227-2358aabe821e?w=800",
    tags: ["Liên Xô", "Tan rã", "Chiến tranh Lạnh", "Lịch sử"],
  },
  {
    id: 32,
    month: 12,
    day: 30,
    year: 1922,
    title: "Thành lập Liên Xô",
    description:
      "Hội nghị Xô Viết toàn Liên bang quyết định thành lập Liên bang Cộng hòa Xã hội Chủ nghĩa Xô Viết (Liên Xô), nhà nước xã hội chủ nghĩa đa dân tộc đầu tiên trên thế giới.",
    image: "https://images.unsplash.com/photo-1553603227-2358aabe821e?w=800",
    tags: ["Liên Xô", "Thành lập", "Xã hội chủ nghĩa", "Lenin"],
  },
  {
    id: 33,
    month: 12,
    day: 18,
    year: 1979,
    title: "Cải cách mở cửa của Trung Quốc",
    description:
      "Trung Quốc chính thức bắt đầu chính sách Cải cách và Mở cửa dưới sự lãnh đạo của Đặng Tiểu Bình. Chính sách này đã thay đổi căn bản nền kinh tế và xã hội Trung Quốc, đưa nước này trở thành cường quốc kinh tế thế giới.",
    image: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=800",
    tags: ["Trung Quốc", "Cải cách", "Đặng Tiểu Bình", "Kinh tế"],
  },

  // Thêm các sự kiện khác
  {
    id: 34,
    month: 3,
    day: 29,
    year: 1973,
    title: "Quân đội Mỹ rút khỏi Việt Nam",
    description:
      "Quân đội Mỹ hoàn tất việc rút quân khỏi miền Nam Việt Nam theo Hiệp định Paris. Đây là thắng lợi quan trọng của nhân dân Việt Nam trong cuộc kháng chiến chống Mỹ, cứu nước.",
    image: "https://images.unsplash.com/photo-1583396379430-6e59a6e93b59?w=800",
    tags: ["Việt Nam", "Chiến tranh", "Mỹ", "Hiệp định Paris"],
  },
  {
    id: 35,
    month: 5,
    day: 7,
    year: 1954,
    title: "Chiến thắng Điện Biên Phủ",
    description:
      "Quân đội nhân dân Việt Nam giành thắng lợi vang dội tại Điện Biên Phủ, đánh bại hoàn toàn Tập đoàn cứ điểm Điện Biên Phủ của thực dân Pháp. Chiến thắng 'lừng lẫy năm châu, chấn động địa cầu' này buộc Pháp phải ký Hiệp định Genève.",
    image: "https://images.unsplash.com/photo-1583396379430-6e59a6e93b59?w=800",
    tags: ["Việt Nam", "Điện Biên Phủ", "Pháp", "Chiến thắng"],
  },
  {
    id: 36,
    month: 6,
    day: 22,
    year: 1941,
    title: "Đức Quốc xã tấn công Liên Xô",
    description:
      "Phát xít Đức mở chiến dịch Barbarossa, tấn công Liên Xô, mở ra cuộc Đại Chiến Tranh Vệ quốc của nhân dân Xô Viết. Cuộc chiến này đã có ý nghĩa quyết định đối với kết cục của Chiến tranh thế giới thứ hai.",
    image: "https://images.unsplash.com/photo-1553603227-2358aabe821e?w=800",
    tags: ["Liên Xô", "Đức", "WWII", "Operation Barbarossa"],
  },
  {
    id: 37,
    month: 7,
    day: 28,
    year: 1976,
    title: "Động đất Đường Sơn - Trung Quốc",
    description:
      "Trận động đất kinh hoàng tại Đường Sơn, Trung Quốc, gây thiệt hại nặng nề về người và của. Sự kiện này cho thấy tinh thần đoàn kết và khả năng vượt qua khó khăn của nhân dân Trung Quốc.",
    image: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=800",
    tags: ["Trung Quốc", "Động đất", "Đường Sơn", "Thiên tai"],
  },
  {
    id: 38,
    month: 8,
    day: 13,
    year: 1961,
    title: "Xây dựng Bức tường Berlin",
    description:
      "Bắt đầu xây dựng Bức tường Berlin, ngăn cách Berlin Đông và Berlin Tây. Bức tường này trở thành biểu tượng của sự phân chia thế giới trong thời kỳ Chiến tranh Lạnh.",
    image: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=800",
    tags: ["Đức", "Berlin", "Chiến tranh Lạnh", "Bức tường"],
  },
  {
    id: 39,
    month: 9,
    day: 1,
    year: 1939,
    title: "Chiến tranh thế giới thứ hai bắt đầu",
    description:
      "Đức Quốc xã tấn công Ba Lan, đánh dấu sự khởi đầu của Chiến tranh thế giới thứ hai - cuộc chiến lớn nhất trong lịch sử nhân loại với hơn 60 triệu người thiệt mạng.",
    image: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=800",
    tags: ["Ba Lan", "Đức", "WWII", "Chiến tranh"],
  },
  {
    id: 40,
    month: 10,
    day: 24,
    year: 1945,
    title: "Thành lập Liên Hợp Quốc",
    description:
      "Hiến chương Liên Hợp Quốc có hiệu lực, đánh dấu sự ra đời của tổ chức quốc tế lớn nhất thế giới. Liên Hợp Quốc được thành lập với mục tiêu duy trì hòa bình và an ninh quốc tế.",
    image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800",
    tags: ["Liên Hợp Quốc", "Quốc tế", "Hòa bình", "Tổ chức"],
  },
  {
    id: 41,
    month: 11,
    day: 30,
    year: 1999,
    title: "Biểu tình chống WTO tại Seattle",
    description:
      "Hàng chục ngàn người biểu tình chống lại Tổ chức Thương mại Thế giới (WTO) tại Seattle, Mỹ. Sự kiện này đánh dấu sự trỗi dậy của phong trào chống toàn cầu hóa tư bản chủ nghĩa.",
    image: "https://images.unsplash.com/photo-1485364028218-7e74bd46f83c?w=800",
    tags: ["Mỹ", "WTO", "Biểu tình", "Toàn cầu hóa"],
  },
  {
    id: 42,
    month: 12,
    day: 25,
    year: 1991,
    title: "Gorbachev từ chức",
    description:
      "Mikhail Gorbachev từ chức Tổng thống Liên Xô, đánh dấu sự kết thúc chính thức của Liên bang Xô Viết. Sự kiện này mở ra kỷ nguyên mới trong lịch sử thế giới.",
    image: "https://images.unsplash.com/photo-1553603227-2358aabe821e?w=800",
    tags: ["Liên Xô", "Gorbachev", "Tan rã", "Lịch sử"],
  },

  // Bổ sung thêm sự kiện
  {
    id: 43,
    month: 1,
    day: 30,
    year: 1948,
    title: "Mahatma Gandhi bị ám sát",
    description:
      "Mahatma Gandhi, nhà lãnh đạo phong trào độc lập Ấn Độ và biểu tượng của phi bạo lực, bị ám sát tại New Delhi. Tư tưởng và phương pháp đấu tranh của Gandhi đã ảnh hưởng đến nhiều phong trào giải phóng dân tộc trên thế giới.",
    image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800",
    tags: ["Ấn Độ", "Gandhi", "Phi bạo lực", "Độc lập"],
  },
  {
    id: 44,
    month: 4,
    day: 17,
    year: 1975,
    title: "Giải phóng Phnom Penh",
    description:
      "Quân giải phóng Campuchia giải phóng thủ đô Phnom Penh, lật đổ chế độ Lon Nol. Sự kiện này đánh dấu thắng lợi của phong trào cách mạng ở Đông Dương.",
    image: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=800",
    tags: ["Campuchia", "Phnom Penh", "Giải phóng", "Đông Dương"],
  },
  {
    id: 45,
    month: 6,
    day: 16,
    year: 1976,
    title: "Bạo động Soweto - Nam Phi",
    description:
      "Học sinh da màu tại Soweto, Nam Phi, nổi dậy phản đối chính sách giáo dục của chế độ phân biệt chủng tộc apartheid. Sự kiện này đánh dấu bước ngoặt quan trọng trong cuộc đấu tranh chống apartheid.",
    image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800",
    tags: ["Nam Phi", "Apartheid", "Soweto", "Phân biệt chủng tộc"],
  },
  {
    id: 46,
    month: 7,
    year: 1921,
    day: 23,
    title: "Thành lập Đảng Cộng sản Trung Quốc",
    description:
      "Đại hội thành lập Đảng Cộng sản Trung Quốc khai mạc tại Thượng Hải với 13 đại biểu đại diện cho 50 đảng viên. Đây là sự kiện có ý nghĩa lịch sử quan trọng đối với cách mạng Trung Quốc và thế giới.",
    image: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=800",
    tags: ["Trung Quốc", "Đảng Cộng sản", "Thượng Hải", "Lịch sử"],
  },
  {
    id: 47,
    month: 9,
    day: 11,
    year: 1973,
    title: "Đảo chính Chile",
    description:
      "Cuộc đảo chính quân sự do Augusto Pinochet lãnh đạo lật đổ Tổng thống Salvador Allende, người theo chủ nghĩa xã hội được bầu một cách dân chủ. Sự kiện này phản ánh sự can thiệp của các thế lực phản động vào nội bộ các nước Mỹ Latinh.",
    image: "https://images.unsplash.com/photo-1591802805456-e1c44b7b2a4a?w=800",
    tags: ["Chile", "Allende", "Pinochet", "Đảo chính"],
  },
  {
    id: 48,
    month: 10,
    day: 6,
    year: 1973,
    title: "Chiến tranh Yom Kippur",
    description:
      "Chiến tranh Yom Kippur (còn gọi là Chiến tranh tháng Mười hay Chiến tranh Ramadan) nổ ra giữa Israel và các nước Ả Rập. Chiến tranh này là một phần của xung đột Ả Rập-Israel kéo dài.",
    image: "https://images.unsplash.com/photo-1552581234-26160f608093?w=800",
    tags: ["Trung Đông", "Israel", "Ả Rập", "Chiến tranh"],
  },
  {
    id: 49,
    month: 11,
    day: 15,
    year: 1988,
    title: "Tuyên bố độc lập của Palestine",
    description:
      "Hội đồng Quốc gia Palestine tuyên bố thành lập Nhà nước Palestine độc lập. Đây là bước quan trọng trong cuộc đấu tranh giải phóng dân tộc của nhân dân Palestine.",
    image: "https://images.unsplash.com/photo-1552581234-26160f608093?w=800",
    tags: ["Palestine", "Độc lập", "Trung Đông", "Giải phóng dân tộc"],
  },
  {
    id: 50,
    month: 12,
    day: 10,
    year: 1948,
    title: "Tuyên ngôn Quốc tế về Nhân quyền",
    description:
      "Đại hội đồng Liên Hợp Quốc thông qua Tuyên ngôn Quốc tế về Nhân quyền tại Paris. Đây là văn kiện quan trọng thiết lập các quyền cơ bản của con người được toàn thế giới công nhận.",
    image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800",
    tags: ["Liên Hợp Quốc", "Nhân quyền", "Paris", "Tuyên ngôn"],
  },
];

// Export data for use in main.js
if (typeof module !== "undefined" && module.exports) {
  module.exports = { historicalEvents };
}
