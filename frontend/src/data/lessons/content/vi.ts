// Vietnamese lesson content — real vocabulary/phrases, fully offline.
import { LessonContent } from "../meta";

const VI: Record<string, LessonContent> = {
  greetings: {
    intro: "Learn the essential words for greeting people and saying goodbye in Vietnamese.",
    examples: [
      { target: "Xin chào", meaning: "A friendly greeting" },
      { target: "Chào buổi sáng", meaning: "Greeting used before noon" },
      { target: "Cảm ơn", meaning: "Expressing gratitude" },
      { target: "Tạm biệt", meaning: "Said when leaving" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Xin chào' mean?", options: ["A friendly greeting", "Said when leaving", "Expressing gratitude", "Greeting before noon"], a: 0 },
      { type: "fill", q: "How do you say 'Expressing gratitude' in Vietnamese?", a: "Cảm ơn" },
      { type: "mc", q: "Which word means 'Said when leaving'?", options: ["Xin chào", "Chào buổi sáng", "Tạm biệt", "Cảm ơn"], a: 2 },
    ],
  },
  numbers: {
    intro: "Practice counting from one to twenty in Vietnamese.",
    examples: [
      { target: "Một", meaning: "The number 1" },
      { target: "Năm", meaning: "The number 5" },
      { target: "Mười", meaning: "The number 10" },
      { target: "Hai mươi", meaning: "The number 20" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Mười' mean?", options: ["The number 1", "The number 5", "The number 10", "The number 20"], a: 2 },
      { type: "fill", q: "How do you say 'The number 20' in Vietnamese?", a: "Hai mươi" },
      { type: "mc", q: "Which word means 'The number 1'?", options: ["Năm", "Một", "Mười", "Hai mươi"], a: 1 },
    ],
  },
  family: {
    intro: "Learn words for close family members in Vietnamese.",
    examples: [
      { target: "Mẹ", meaning: "Female parent" },
      { target: "Bố", meaning: "Male parent" },
      { target: "Em gái", meaning: "Younger female sibling" },
      { target: "Em trai", meaning: "Younger male sibling" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Mẹ' mean?", options: ["Male parent", "Female parent", "Younger male sibling", "Younger female sibling"], a: 1 },
      { type: "fill", q: "How do you say 'Younger male sibling' in Vietnamese?", a: "Em trai" },
      { type: "mc", q: "Which word means 'Younger female sibling'?", options: ["Mẹ", "Bố", "Em gái", "Em trai"], a: 2 },
    ],
  },
  colors: {
    intro: "Learn the four most common colors in Vietnamese.",
    examples: [
      { target: "Đỏ", meaning: "The color of fire" },
      { target: "Xanh dương", meaning: "The color of the sky" },
      { target: "Xanh lá", meaning: "The color of grass" },
      { target: "Vàng", meaning: "The color of the sun" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Xanh dương' mean?", options: ["The color of fire", "The color of the sky", "The color of grass", "The color of the sun"], a: 1 },
      { type: "fill", q: "How do you say 'The color of grass' in Vietnamese?", a: "Xanh lá" },
      { type: "mc", q: "Which word means 'The color of fire'?", options: ["Đỏ", "Xanh dương", "Xanh lá", "Vàng"], a: 0 },
    ],
  },
  days: {
    intro: "Learn a few days of the week in Vietnamese.",
    examples: [
      { target: "Thứ Hai", meaning: "First workday" },
      { target: "Thứ Sáu", meaning: "Last workday" },
      { target: "Thứ Bảy", meaning: "First weekend day" },
      { target: "Chủ Nhật", meaning: "Second weekend day" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Thứ Sáu' mean?", options: ["First workday", "Last workday", "First weekend day", "Second weekend day"], a: 1 },
      { type: "fill", q: "How do you say 'Second weekend day' in Vietnamese?", a: "Chủ Nhật" },
      { type: "mc", q: "Which word means 'First workday'?", options: ["Thứ Hai", "Thứ Sáu", "Thứ Bảy", "Chủ Nhật"], a: 0 },
    ],
  },
  food_basics: {
    intro: "Learn basic food and drink words in Vietnamese.",
    examples: [
      { target: "Nước", meaning: "A clear drink" },
      { target: "Bánh mì", meaning: "Baked food staple" },
      { target: "Cơm", meaning: "A grain staple food" },
      { target: "Cà phê", meaning: "A hot caffeinated drink" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Cơm' mean?", options: ["A clear drink", "Baked food staple", "A grain staple food", "A hot caffeinated drink"], a: 2 },
      { type: "fill", q: "How do you say 'A hot caffeinated drink' in Vietnamese?", a: "Cà phê" },
      { type: "mc", q: "Which word means 'A clear drink'?", options: ["Nước", "Bánh mì", "Cơm", "Cà phê"], a: 0 },
    ],
  },
  shopping: {
    intro: "Useful phrases for shopping and paying in Vietnamese.",
    examples: [
      { target: "Cái này giá bao nhiêu?", meaning: "Asking for a price" },
      { target: "Tôi muốn cái này", meaning: "Choosing an item" },
      { target: "Giảm giá", meaning: "A price reduction" },
      { target: "Tiền mặt", meaning: "Paper money" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Giảm giá' mean?", options: ["Asking for a price", "Choosing an item", "A price reduction", "Paper money"], a: 2 },
      { type: "fill", q: "How do you say 'Paper money' in Vietnamese?", a: "Tiền mặt" },
      { type: "mc", q: "Which phrase means 'Asking for a price'?", options: ["Tôi muốn cái này", "Cái này giá bao nhiêu?", "Giảm giá", "Tiền mặt"], a: 1 },
    ],
  },
  directions: {
    intro: "Learn to ask for and follow directions in Vietnamese.",
    examples: [
      { target: "Bên trái", meaning: "Opposite of right" },
      { target: "Bên phải", meaning: "Opposite of left" },
      { target: "Đi thẳng", meaning: "Go forward" },
      { target: "Nhà vệ sinh ở đâu?", meaning: "Asking for a location" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Đi thẳng' mean?", options: ["Opposite of right", "Opposite of left", "Go forward", "Asking for a location"], a: 2 },
      { type: "fill", q: "How do you say 'Opposite of right' in Vietnamese?", a: "Bên trái" },
      { type: "mc", q: "Which phrase means 'Asking for a location'?", options: ["Bên trái", "Bên phải", "Đi thẳng", "Nhà vệ sinh ở đâu?"], a: 3 },
    ],
  },
  time: {
    intro: "Learn to talk about time of day in Vietnamese.",
    examples: [
      { target: "Mấy giờ rồi?", meaning: "Asking the current time" },
      { target: "Buổi sáng", meaning: "Early part of the day" },
      { target: "Buổi chiều", meaning: "Midday part of the day" },
      { target: "Nửa đêm", meaning: "12 AM" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Nửa đêm' mean?", options: ["Asking the current time", "Early part of the day", "Midday part of the day", "12 AM"], a: 3 },
      { type: "fill", q: "How do you say 'Early part of the day' in Vietnamese?", a: "Buổi sáng" },
      { type: "mc", q: "Which phrase means 'Asking the current time'?", options: ["Mấy giờ rồi?", "Buổi sáng", "Buổi chiều", "Nửa đêm"], a: 0 },
    ],
  },
  weather: {
    intro: "Describe common weather conditions in Vietnamese.",
    examples: [
      { target: "Trời đang mưa", meaning: "Rain is falling" },
      { target: "Nắng", meaning: "Bright with sunshine" },
      { target: "Lạnh", meaning: "Low temperature" },
      { target: "Nóng", meaning: "High temperature" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Nắng' mean?", options: ["Rain is falling", "Bright with sunshine", "Low temperature", "High temperature"], a: 1 },
      { type: "fill", q: "How do you say 'High temperature' in Vietnamese?", a: "Nóng" },
      { type: "mc", q: "Which phrase means 'Rain is falling'?", options: ["Trời đang mưa", "Nắng", "Lạnh", "Nóng"], a: 0 },
    ],
  },
  hobbies: {
    intro: "Talk about free-time activities in Vietnamese.",
    examples: [
      { target: "Đọc sách", meaning: "Enjoying books" },
      { target: "Âm nhạc", meaning: "Listening to songs" },
      { target: "Thể thao", meaning: "Physical games" },
      { target: "Nấu ăn", meaning: "Preparing food" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Nấu ăn' mean?", options: ["Enjoying books", "Listening to songs", "Physical games", "Preparing food"], a: 3 },
      { type: "fill", q: "How do you say 'Enjoying books' in Vietnamese?", a: "Đọc sách" },
      { type: "mc", q: "Which word means 'Physical games'?", options: ["Đọc sách", "Âm nhạc", "Thể thao", "Nấu ăn"], a: 2 },
    ],
  },
  body_health: {
    intro: "Learn body parts and how to describe feeling unwell in Vietnamese.",
    examples: [
      { target: "Đầu", meaning: "Top part of the body" },
      { target: "Bụng", meaning: "Belly area" },
      { target: "Tôi thấy không khỏe", meaning: "Not feeling well" },
      { target: "Bác sĩ", meaning: "Medical professional" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Bụng' mean?", options: ["Top part of the body", "Belly area", "Not feeling well", "Medical professional"], a: 1 },
      { type: "fill", q: "How do you say 'Medical professional' in Vietnamese?", a: "Bác sĩ" },
      { type: "mc", q: "Which phrase means 'Not feeling well'?", options: ["Đầu", "Bụng", "Tôi thấy không khỏe", "Bác sĩ"], a: 2 },
    ],
  },
  restaurant: {
    intro: "Order food and ask for the bill in Vietnamese.",
    examples: [
      { target: "Thực đơn", meaning: "List of dishes" },
      { target: "Tôi sẽ dùng cái này", meaning: "Ordering a dish" },
      { target: "Xin tính tiền", meaning: "Asking to pay" },
      { target: "Ngon", meaning: "Tastes great" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Xin tính tiền' mean?", options: ["List of dishes", "Ordering a dish", "Asking to pay", "Tastes great"], a: 2 },
      { type: "fill", q: "How do you say 'Tastes great' in Vietnamese?", a: "Ngon" },
      { type: "mc", q: "Which phrase means 'List of dishes'?", options: ["Thực đơn", "Tôi sẽ dùng cái này", "Xin tính tiền", "Ngon"], a: 0 },
    ],
  },
  travel: {
    intro: "Key words for airports and train stations in Vietnamese.",
    examples: [
      { target: "Sân bay", meaning: "Place planes depart from" },
      { target: "Vé", meaning: "Pass to travel" },
      { target: "Hộ chiếu", meaning: "Travel ID document" },
      { target: "Nhà ga", meaning: "Place trains depart from" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Hộ chiếu' mean?", options: ["Place planes depart from", "Pass to travel", "Travel ID document", "Place trains depart from"], a: 2 },
      { type: "fill", q: "How do you say 'Pass to travel' in Vietnamese?", a: "Vé" },
      { type: "mc", q: "Which word means 'Place trains depart from'?", options: ["Sân bay", "Vé", "Hộ chiếu", "Nhà ga"], a: 3 },
    ],
  },
  work: {
    intro: "Talk about your job and workplace in Vietnamese.",
    examples: [
      { target: "Cuộc họp", meaning: "A work gathering" },
      { target: "Hạn cuối", meaning: "Due date" },
      { target: "Đồng nghiệp", meaning: "Co-worker" },
      { target: "Văn phòng", meaning: "Workplace" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Hạn cuối' mean?", options: ["A work gathering", "Due date", "Co-worker", "Workplace"], a: 1 },
      { type: "fill", q: "How do you say 'Co-worker' in Vietnamese?", a: "Đồng nghiệp" },
      { type: "mc", q: "Which word means 'A work gathering'?", options: ["Cuộc họp", "Hạn cuối", "Đồng nghiệp", "Văn phòng"], a: 0 },
    ],
  },
  emotions: {
    intro: "Describe how you feel in Vietnamese.",
    examples: [
      { target: "Vui", meaning: "Feeling joy" },
      { target: "Buồn", meaning: "Feeling down" },
      { target: "Mệt", meaning: "Needing rest" },
      { target: "Hào hứng", meaning: "Feeling enthusiastic" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Mệt' mean?", options: ["Feeling joy", "Feeling down", "Needing rest", "Feeling enthusiastic"], a: 2 },
      { type: "fill", q: "How do you say 'Feeling enthusiastic' in Vietnamese?", a: "Hào hứng" },
      { type: "mc", q: "Which word means 'Feeling joy'?", options: ["Vui", "Buồn", "Mệt", "Hào hứng"], a: 0 },
    ],
  },
  technology: {
    intro: "Learn common phone and internet vocabulary in Vietnamese.",
    examples: [
      { target: "Điện thoại", meaning: "Device for calls" },
      { target: "Internet", meaning: "Global network" },
      { target: "Mật khẩu", meaning: "Secret access code" },
      { target: "Pin", meaning: "Stores power" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Mật khẩu' mean?", options: ["Device for calls", "Global network", "Secret access code", "Stores power"], a: 2 },
      { type: "fill", q: "How do you say 'Stores power' in Vietnamese?", a: "Pin" },
      { type: "mc", q: "Which word means 'Global network'?", options: ["Điện thoại", "Internet", "Mật khẩu", "Pin"], a: 1 },
    ],
  },
  home: {
    intro: "Learn common room and furniture words in Vietnamese.",
    examples: [
      { target: "Nhà bếp", meaning: "Room for cooking" },
      { target: "Phòng ngủ", meaning: "Room for sleeping" },
      { target: "Cái bàn", meaning: "Furniture to eat/work on" },
      { target: "Cái ghế", meaning: "Furniture for sitting" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Phòng ngủ' mean?", options: ["Room for cooking", "Room for sleeping", "Furniture to eat/work on", "Furniture for sitting"], a: 1 },
      { type: "fill", q: "How do you say 'Furniture for sitting' in Vietnamese?", a: "Cái ghế" },
      { type: "mc", q: "Which word means 'Room for cooking'?", options: ["Nhà bếp", "Phòng ngủ", "Cái bàn", "Cái ghế"], a: 0 },
    ],
  },
  opinions: {
    intro: "Learn phrases for sharing your point of view in Vietnamese.",
    examples: [
      { target: "Tôi nghĩ rằng", meaning: "Introducing an opinion" },
      { target: "Tôi đồng ý", meaning: "Sharing the same view" },
      { target: "Tôi không đồng ý", meaning: "Having a different view" },
      { target: "Theo ý kiến của tôi", meaning: "Introducing a personal view" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Tôi không đồng ý' mean?", options: ["Introducing an opinion", "Sharing the same view", "Having a different view", "Introducing a personal view"], a: 2 },
      { type: "fill", q: "How do you say 'Sharing the same view' in Vietnamese?", a: "Tôi đồng ý" },
      { type: "mc", q: "Which phrase means 'Introducing an opinion'?", options: ["Tôi nghĩ rằng", "Tôi đồng ý", "Tôi không đồng ý", "Theo ý kiến của tôi"], a: 0 },
    ],
  },
  past_tense: {
    intro: "Talk about things that already happened in Vietnamese.",
    examples: [
      { target: "Hôm qua", meaning: "The day before today" },
      { target: "Tôi đã đi", meaning: "Past of 'I go'" },
      { target: "Tôi đã ăn", meaning: "Past of 'I eat'" },
      { target: "Tuần trước", meaning: "The week before this one" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Tôi đã đi' mean?", options: ["The day before today", "Past of 'I go'", "Past of 'I eat'", "The week before this one"], a: 1 },
      { type: "fill", q: "How do you say 'Past of I eat' in Vietnamese?", a: "Tôi đã ăn" },
      { type: "mc", q: "Which phrase means 'The day before today'?", options: ["Hôm qua", "Tôi đã đi", "Tôi đã ăn", "Tuần trước"], a: 0 },
    ],
  },
  future_plans: {
    intro: "Talk about plans and future events in Vietnamese.",
    examples: [
      { target: "Ngày mai", meaning: "The day after today" },
      { target: "Tôi sẽ đi", meaning: "Future of 'I go'" },
      { target: "Năm sau", meaning: "The year after this one" },
      { target: "Tôi đang lên kế hoạch", meaning: "Expressing intent" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Tôi sẽ đi' mean?", options: ["The day after today", "Future of 'I go'", "The year after this one", "Expressing intent"], a: 1 },
      { type: "fill", q: "How do you say 'Expressing intent' in Vietnamese?", a: "Tôi đang lên kế hoạch" },
      { type: "mc", q: "Which phrase means 'The day after today'?", options: ["Ngày mai", "Tôi sẽ đi", "Năm sau", "Tôi đang lên kế hoạch"], a: 0 },
    ],
  },
  socializing: {
    intro: "Casual phrases for small talk with friends in Vietnamese.",
    examples: [
      { target: "Bạn thế nào?", meaning: "Casual greeting" },
      { target: "Lâu rồi không gặp", meaning: "Said after a while apart" },
      { target: "Hãy gặp nhau", meaning: "Suggesting to meet" },
      { target: "Vui được gặp bạn", meaning: "Friendly greeting" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Lâu rồi không gặp' mean?", options: ["Casual greeting", "Said after a while apart", "Suggesting to meet", "Friendly greeting"], a: 1 },
      { type: "fill", q: "How do you say 'Suggesting to meet' in Vietnamese?", a: "Hãy gặp nhau" },
      { type: "mc", q: "Which phrase is a casual greeting?", options: ["Bạn thế nào?", "Lâu rồi không gặp", "Hãy gặp nhau", "Vui được gặp bạn"], a: 0 },
    ],
  },
  negotiating: {
    intro: "Bargain and negotiate prices politely in Vietnamese.",
    examples: [
      { target: "Bạn có thể giảm giá không?", meaning: "Asking for a discount" },
      { target: "Cái này quá đắt", meaning: "Complaining about price" },
      { target: "Đề nghị cuối cùng", meaning: "Last price offered" },
      { target: "Đồng ý", meaning: "Agreement reached" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Đề nghị cuối cùng' mean?", options: ["Asking for a discount", "Complaining about price", "Last price offered", "Agreement reached"], a: 2 },
      { type: "fill", q: "How do you say 'Agreement reached' in Vietnamese?", a: "Đồng ý" },
      { type: "mc", q: "Which phrase means 'Asking for a discount'?", options: ["Bạn có thể giảm giá không?", "Cái này quá đắt", "Đề nghị cuối cùng", "Đồng ý"], a: 0 },
    ],
  },
  news_media: {
    intro: "Vocabulary for reading and discussing the news in Vietnamese.",
    examples: [
      { target: "Tin tức", meaning: "Recent information" },
      { target: "Báo", meaning: "Printed news publication" },
      { target: "Theo", meaning: "Citing a source" },
      { target: "Tin nóng", meaning: "Urgent new report" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Tin nóng' mean?", options: ["Recent information", "Printed news publication", "Citing a source", "Urgent new report"], a: 3 },
      { type: "fill", q: "How do you say 'Citing a source' in Vietnamese?", a: "Theo" },
      { type: "mc", q: "Which word means 'Printed news publication'?", options: ["Tin tức", "Báo", "Theo", "Tin nóng"], a: 1 },
    ],
  },
  business: {
    intro: "Formal vocabulary for business settings in Vietnamese.",
    examples: [
      { target: "Hợp đồng", meaning: "A legal agreement" },
      { target: "Cuộc họp", meaning: "A business gathering" },
      { target: "Hạn cuối", meaning: "Due date" },
      { target: "Hóa đơn", meaning: "A bill for payment" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Hóa đơn' mean?", options: ["A legal agreement", "A business gathering", "Due date", "A bill for payment"], a: 3 },
      { type: "fill", q: "How do you say 'A legal agreement' in Vietnamese?", a: "Hợp đồng" },
      { type: "mc", q: "Which word means 'Due date'?", options: ["Hợp đồng", "Cuộc họp", "Hạn cuối", "Hóa đơn"], a: 2 },
    ],
  },
  idioms: {
    intro: "Learn common idiomatic expressions in Vietnamese.",
    examples: [
      { target: "Phá vỡ sự im lặng", meaning: "Start a conversation easily" },
      { target: "Dễ như ăn kẹo", meaning: "Something very easy" },
      { target: "Thời gian trôi nhanh", meaning: "Time passes quickly" },
      { target: "Đôi khi", meaning: "Occasionally" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Dễ như ăn kẹo' mean?", options: ["Start a conversation easily", "Something very easy", "Time passes quickly", "Occasionally"], a: 1 },
      { type: "fill", q: "How do you say 'Occasionally' in Vietnamese?", a: "Đôi khi" },
      { type: "mc", q: "Which idiom means 'Time passes quickly'?", options: ["Phá vỡ sự im lặng", "Dễ như ăn kẹo", "Thời gian trôi nhanh", "Đôi khi"], a: 2 },
    ],
  },
  debate: {
    intro: "Phrases for debating and persuading others in Vietnamese.",
    examples: [
      { target: "Tôi tin chắc rằng", meaning: "Stating a firm opinion" },
      { target: "Mặt khác", meaning: "Presenting a contrast" },
      { target: "Bằng chứng cho thấy", meaning: "Citing proof" },
      { target: "Để kết luận", meaning: "Summarizing an argument" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Mặt khác' mean?", options: ["Stating a firm opinion", "Presenting a contrast", "Citing proof", "Summarizing an argument"], a: 1 },
      { type: "fill", q: "How do you say 'Summarizing an argument' in Vietnamese?", a: "Để kết luận" },
      { type: "mc", q: "Which phrase means 'Citing proof'?", options: ["Tôi tin chắc rằng", "Mặt khác", "Bằng chứng cho thấy", "Để kết luận"], a: 2 },
    ],
  },
  culture: {
    intro: "Vocabulary about traditions and heritage in Vietnamese.",
    examples: [
      { target: "Truyền thống", meaning: "A long-held custom" },
      { target: "Lễ hội", meaning: "A celebration event" },
      { target: "Phong tục", meaning: "A usual practice" },
      { target: "Di sản", meaning: "Inherited culture" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Lễ hội' mean?", options: ["A long-held custom", "A celebration event", "A usual practice", "Inherited culture"], a: 1 },
      { type: "fill", q: "How do you say 'Inherited culture' in Vietnamese?", a: "Di sản" },
      { type: "mc", q: "Which word means 'A usual practice'?", options: ["Truyền thống", "Lễ hội", "Phong tục", "Di sản"], a: 2 },
    ],
  },
  formal_writing: {
    intro: "Phrases for writing formal letters and emails in Vietnamese.",
    examples: [
      { target: "Kính gửi Ông/Bà", meaning: "Formal letter opening" },
      { target: "Trân trọng", meaning: "Formal letter closing" },
      { target: "Tôi viết thư này để", meaning: "Stating the letter's purpose" },
      { target: "Vui lòng xem tệp đính kèm", meaning: "Referring to an attachment" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Trân trọng' mean?", options: ["Formal letter opening", "Formal letter closing", "Stating the letter's purpose", "Referring to an attachment"], a: 1 },
      { type: "fill", q: "How do you say 'Formal letter opening' in Vietnamese?", a: "Kính gửi Ông/Bà" },
      { type: "mc", q: "Which phrase refers to an attachment?", options: ["Kính gửi Ông/Bà", "Trân trọng", "Tôi viết thư này để", "Vui lòng xem tệp đính kèm"], a: 3 },
    ],
  },
  advanced_conversation: {
    intro: "Nuanced phrases for advanced, fluent conversation in Vietnamese.",
    examples: [
      { target: "Sự khác biệt tinh tế", meaning: "A subtle difference" },
      { target: "Nói cách khác", meaning: "Rephrasing something" },
      { target: "Dù vậy", meaning: "Adding a contrasting point" },
      { target: "Giải thích chi tiết", meaning: "Explaining in more detail" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Sự khác biệt tinh tế' mean?", options: ["A subtle difference", "Rephrasing something", "Adding a contrasting point", "Explaining in more detail"], a: 0 },
      { type: "fill", q: "How do you say 'Explaining in more detail' in Vietnamese?", a: "Giải thích chi tiết" },
      { type: "mc", q: "Which phrase means 'Adding a contrasting point'?", options: ["Sự khác biệt tinh tế", "Nói cách khác", "Dù vậy", "Giải thích chi tiết"], a: 2 },
    ],
  },
};

export default VI;
