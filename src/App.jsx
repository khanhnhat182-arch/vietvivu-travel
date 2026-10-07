import React, { useState, useMemo } from 'react';
import {
  MapPin,
  Calendar,
  Users,
  Search,
  Star,
  Heart,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Hotel,
  ArrowRight,
  X,
  CreditCard,
  QrCode,
  Tag,
  Download,
  Compass,
  Filter,
  Sparkles,
  PhoneCall,
  Mail,
  Shield,
  Award,
  Luggage,
  Ticket,
  AlertCircle,
  SlidersHorizontal,
  Flame,
  Check
} from 'lucide-react';

const INITIAL_TOURS = [
  {
    id: 'tour-1',
    title: 'Phú Quốc - Thiên Đường Nghỉ Dưỡng Sunset Sanato & 4 Đảo 5 Sao',
    destination: 'Phú Quốc',
    region: 'domestic',
    category: 'beach',
    duration: '4N3Đ',
    transport: 'Máy bay + Tàu cano',
    hotel: 'Resort 5 Sao Quốc Tế',
    departureLocation: 'Hà Nội / TP.HCM',
    departureDates: ['2026-10-15', '2026-10-22', '2026-11-05', '2026-11-19'],
    price: 6850000,
    originalPrice: 8500000,
    discountPercent: 19,
    rating: 4.9,
    reviewsCount: 142,
    badge: 'Bán chạy nhất',
    badgeType: 'hot',
    spotsLeft: 4,
    images: [
      'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80'
    ],
    highlights: [
      'Trải nghiệm cáp treo Hòn Thơm vượt biển dài nhất thế giới',
      'Lặn ngắm san hô tự nhiên tại công viên san hô Nam Đảo',
      'Tặng bữa tiệc BBQ hải sản tươi sống trên du thuyền cao cấp',
      'Check-in Thị trấn Hoàng Hôn và Cầu Hôn (Kiss Bridge)'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Đón sân bay - Sunset Town - Cầu Hôn',
        desc: 'Xe và HDV đón quý khách tại sân bay Phú Quốc. Nhận phòng resort 5 sao, thư giãn tại hồ bơi vô cực. Chiều tham quan Sunset Town, ngắm hoàng hôn rực rỡ.',
        meals: 'Trưa, Tối',
        stay: 'Novotel Phu Quoc Resort 5*'
      },
      {
        day: 2,
        title: 'Tour Cano 4 Đảo - Cáp treo Hòn Thơm Sun World',
        desc: 'Khởi hành ra cảng An Thới, lướt cano cao tốc tham quan Hòn Mây Rút, Hòn Gầm Ghì. Lặn ngắm rạn san hô tự nhiên và trải nghiệm cáp treo Hòn Thơm.',
        meals: 'Sáng, Trưa hải sản, Tối',
        stay: 'Novotel Phu Quoc Resort 5*'
      },
      {
        day: 3,
        title: 'VinWonders - Safari Phú Quốc - Grand World',
        desc: 'Khám phá vườn thú bán hoang dã Safari và công viên chủ đề VinWonders. Dạo thuyền gondola ngắm kênh đào phong cách Venice.',
        meals: 'Sáng, Trưa, Tối tự túc',
        stay: 'Novotel Phu Quoc Resort 5*'
      },
      {
        day: 4,
        title: 'Làng chài Hàm Ninh - Tiễn sân bay',
        desc: 'Thăm cơ sở nuôi cấy ngọc trai cao cấp và mua sắm đặc sản làm quà trước khi xe tiễn ra sân bay Phú Quốc.',
        meals: 'Sáng, Trưa nhẹ',
        stay: 'Kết thúc tour'
      }
    ],
    included: [
      'Vé máy bay khứ hồi gồm 20kg ký gửi + 7kg xách tay',
      '03 đêm nghỉ dưỡng tại Resort 5 sao chuẩn quốc tế (2 khách/phòng)',
      'Xe du lịch đời mới đưa đón suốt tuyến',
      'Toàn bộ các bữa ăn tiêu chuẩn trong lịch trình',
      'Vé cáp treo Hòn Thơm và cano 4 đảo',
      'Bảo hiểm du lịch mức trách nhiệm tối đa 100.000.000đ/vụ'
    ],
    excluded: [
      'Chi phí cá nhân: giặt ủi, điện thoại, minibar',
      'Vé tham quan phát sinh ngoài chương trình',
      'Tiền Tip bồi dưỡng cho HDV và tài xế'
    ]
  },
  {
    id: 'tour-2',
    title: 'Đà Nẵng - Bán Đảo Sơn Trà - Phố Cổ Hội An - Bà Nà Hills',
    destination: 'Đà Nẵng',
    region: 'domestic',
    category: 'culture',
    duration: '3N2Đ',
    transport: 'Máy bay + Xe du lịch',
    hotel: 'Khách sạn 4 Sao Biển Mỹ Khê',
    departureLocation: 'Hà Nội / Hải Phòng',
    departureDates: ['2026-10-18', '2026-10-25', '2026-11-08'],
    price: 4390000,
    originalPrice: 5600000,
    discountPercent: 22,
    rating: 4.8,
    reviewsCount: 98,
    badge: 'Flash Sale -22%',
    badgeType: 'sale',
    spotsLeft: 6,
    images: [
      'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=1000&q=80'
    ],
    highlights: [
      'Check-in Cầu Vàng Bà Nà Hills nổi tiếng thế giới',
      'Dạo bộ thả hoa đăng lung linh bên dòng sông Hoài Hội An',
      'Thưởng thức ẩm thực miền Trung: Mì Quảng, cao lầu, bánh tráng cuốn thịt heo',
      'Chiêm ngưỡng vẻ đẹp vịnh Đà Nẵng từ Bán đảo Sơn Trà'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Đà Nẵng - Bán Đảo Sơn Trà - Phố Cổ Hội An',
        desc: 'Đón đoàn tại sân bay Đà Nẵng, viếng Chùa Linh Ứng. Chiều khởi hành vào phố cổ Hội An, tham quan Chùa Cầu và dùng bữa tối đặc sản.',
        meals: 'Trưa, Tối Hội An',
        stay: 'Sala Danang Beach Hotel 4*'
      },
      {
        day: 2,
        title: 'Bà Nà Hills - Cầu Vàng - Fantasy Park - Cầu Rồng Phun Lửa',
        desc: 'Chinh phục Bà Nà Hills bằng cáp treo, dạo bước Cầu Vàng và Làng Pháp. Tối dạo mát ngắm Cầu Rồng trình diễn phun lửa.',
        meals: 'Sáng buffet, Trưa buffet Bà Nà, Tối',
        stay: 'Sala Danang Beach Hotel 4*'
      },
      {
        day: 3,
        title: 'Tắm biển Mỹ Khê - Chợ Hàn mua quà - Tiễn khách',
        desc: 'Tự do tắm biển Mỹ Khê buổi sáng sớm, mua sắm đặc sản tại Chợ Hàn trước khi ra sân bay.',
        meals: 'Sáng, Trưa Mì Quảng',
        stay: 'Kết thúc tour'
      }
    ],
    included: [
      'Vé máy bay khứ hồi theo lịch trình',
      'Khách sạn 4 sao sát biển Mỹ Khê',
      'Vé cáp treo Bà Nà Hills + Buffet trưa thượng hạng',
      'Hướng dẫn viên suốt tuyến chuyên nghiệp'
    ],
    excluded: [
      'Bảo tàng tượng sáp Bà Nà',
      'Chi tiêu cá nhân ngoài thực đơn',
      'Thuế VAT'
    ]
  },
  {
    id: 'tour-3',
    title: 'Sa Pa - Bản Cát Cát - Chinh Phục Đỉnh Fansipan Nóc Nhà Đông Dương',
    destination: 'Sa Pa',
    region: 'domestic',
    category: 'trekking',
    duration: '3N2Đ',
    transport: 'Xe Limousine Dcar VIP',
    hotel: 'Khách sạn 4-5 Sao view Thung Lũng Mường Hoa',
    departureLocation: 'Hà Nội',
    departureDates: ['2026-10-16', '2026-10-23', '2026-10-30', '2026-11-06'],
    price: 2950000,
    originalPrice: 3800000,
    discountPercent: 22,
    rating: 4.85,
    reviewsCount: 86,
    badge: 'Chỗ trống có hạn',
    badgeType: 'limited',
    spotsLeft: 2,
    images: [
      'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1000&q=80'
    ],
    highlights: [
      'Chạm tay vào cột mốc Fansipan 3.143m ngắm biển mây ngút ngàn',
      'Tham quan bản Cát Cát trải nghiệm nét văn hóa đồng bào H’Mông',
      'Thưởng thức đặc sản lẩu cá hồi, cá tầm và rượu ngô Tây Bắc',
      'Di chuyển bằng dòng xe Limousine giường nằm khoang VIP êm ái'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Hà Nội - Sa Pa - Bản Cát Cát',
        desc: 'Khởi hành từ Hà Nội theo cao tốc Nội Bài - Lào Cai. Đến thị xã Sa Pa ăn trưa, nhận phòng và đi bộ khám phá bản Cát Cát thơ mộng.',
        meals: 'Trưa, Tối lẩu Tây Bắc',
        stay: 'Pao’s Sapa Leisure Hotel 5*'
      },
      {
        day: 2,
        title: 'Chinh phục Đỉnh Fansipan - Check-in Moana',
        desc: 'Lên cáp treo Fansipan vượt thung lũng Mường Hoa chạm đỉnh cao 3.143m. Chiều ghé thăm điểm check-in Moana ngắm nhìn núi Hàm Rồng.',
        meals: 'Sáng buffet, Trưa, Tối',
        stay: 'Pao’s Sapa Leisure Hotel 5*'
      },
      {
        day: 3,
        title: 'Chợ Sa Pa - Đèo Ô Quy Hồ - Về Hà Nội',
        desc: 'Mua đặc sản thịt trâu gác bếp, nấm hương tại chợ thị xã. Ngắm toàn cảnh Hoàng Liên Sơn tại Đèo Ô Quy Hồ trước khi về thủ đô.',
        meals: 'Sáng, Trưa',
        stay: 'Kết thúc tour'
      }
    ],
    included: [
      'Xe Limousine VIP khứ hồi Hà Nội - Sa Pa',
      'Khách sạn view núi cao cấp tiêu chuẩn',
      'Vé cáp treo Fansipan Legend khứ hồi',
      'Các bữa ăn ẩm thực địa phương'
    ],
    excluded: [
      'Vé tàu hỏa leo núi Mường Hoa',
      'Chi phí chi tiêu cá nhân'
    ]
  },
  {
    id: 'tour-4',
    title: 'Tokyo - Núi Phú Sĩ - Kyoto - Osaka: Cung Đường Vàng Nhật Bản',
    destination: 'Nhật Bản',
    region: 'international',
    category: 'luxury',
    duration: '6N5Đ',
    transport: 'Hàng không quốc tế + Tàu Shinkansen',
    hotel: 'Khách sạn 4 Sao Trung Tâm',
    departureLocation: 'Hà Nội / TP.HCM',
    departureDates: ['2026-10-25', '2026-11-12', '2026-11-20'],
    price: 33900000,
    originalPrice: 38900000,
    discountPercent: 13,
    rating: 4.95,
    reviewsCount: 210,
    badge: 'Tour Cao Cấp Luxury',
    badgeType: 'luxury',
    spotsLeft: 5,
    images: [
      'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1000&q=80'
    ],
    highlights: [
      'Ngắm núi Phú Sĩ và trải nghiệm tắm khoáng Onsen thư giãn',
      'Trải nghiệm di chuyển bằng tàu siêu tốc Shinkansen 300km/h',
      'Viếng Chùa Vàng Kinkakuji và cổng trời Fushimi Inari Taisha tại Kyoto',
      'Thưởng thức bò nướng Wagyu/Kobe chuẩn vị Nhật Bản'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Việt Nam - Thủ Đô Tokyo',
        desc: 'Bay thẳng đến sân bay Narita/Haneda. Xe đưa về trung tâm thủ đô Tokyo nghỉ ngơi.',
        meals: 'Ăn nhẹ, Tối',
        stay: 'Tokyo Dome Hotel 4*'
      },
      {
        day: 2,
        title: 'Tokyo - Chùa Asakusa Kannon - Shibuya',
        desc: 'Viếng ngôi chùa cổ Asakusa, dạo phố Nakamise và check-in giao lộ Shibuya sầm uất.',
        meals: 'Sáng, Trưa Lẩu Shabu Shabu, Tối',
        stay: 'Tokyo Dome Hotel 4*'
      },
      {
        day: 3,
        title: 'Núi Phú Sĩ - Làng Cổ Oshino Hakkai - Tắm Onsen',
        desc: 'Lên trạm số 5 Núi Phú Sĩ, dạo làng cổ Oshino Hakkai và tối khoác áo Yukata ngâm mình trong suối khoáng nóng Onsen.',
        meals: 'Sáng, Trưa, Tối Kaiseki truyền thống',
        stay: 'Fuji Onsen Resort'
      },
      {
        day: 4,
        title: 'Tàu Shinkansen - Cố Đô Kyoto - Chùa Vàng',
        desc: 'Trải nghiệm tàu shinkansen tới Kyoto. Khám phá vẻ đẹp cổ kính của chùa Vàng Kinkakuji.',
        meals: 'Sáng, Trưa, Tối',
        stay: 'Kyoto Tokyu Hotel 4*'
      },
      {
        day: 5,
        title: 'Lâu Đài Osaka - Mua Sắm Dotonbori',
        desc: 'Thăm quan di tích Lâu đài Osaka, mua sắm hàng miễn thuế và ẩm thực đường phố tại Shinsaibashi.',
        meals: 'Sáng, Trưa bò Kobe, Tối',
        stay: 'Osaka Hotel Hankyu 4*'
      },
      {
        day: 6,
        title: 'Osaka Kansai - Bay Về Việt Nam',
        desc: 'Thủ tục ra sân bay quốc tế Kansai đáp chuyến bay về lại Việt Nam.',
        meals: 'Sáng, Ăn trên máy bay',
        stay: 'Về tới Việt Nam'
      }
    ],
    included: [
      'Vé máy bay quốc tế khứ hồi bao gồm hành lý',
      'Visa nhập cảnh diện du lịch trọn gói',
      'Khách sạn 4 sao chuẩn Nhật (2 khách/phòng)',
      'Trải nghiệm 1 chặng tàu cao tốc Shinkansen',
      'Bảo hiểm du lịch quốc tế hạn mức 1.000.000.000đ'
    ],
    excluded: [
      'Tiền bồi dưỡng HDV và tài xế: 7 USD/khách/ngày',
      'Phí nâng hạng phòng riêng'
    ]
  },
  {
    id: 'tour-5',
    title: 'Bali - Thiên Đường Biển Đảo Nusa Penida - Cổng Trời Lempuyang',
    destination: 'Bali',
    region: 'international',
    category: 'beach',
    duration: '4N3Đ',
    transport: 'Máy bay + Tàu cao tốc',
    hotel: 'Resort & Villa Biển',
    departureLocation: 'Hà Nội / TP.HCM',
    departureDates: ['2026-10-17', '2026-10-24', '2026-11-07'],
    price: 9990000,
    originalPrice: 12500000,
    discountPercent: 20,
    rating: 4.88,
    reviewsCount: 165,
    badge: 'Ưu đãi biển đảo',
    badgeType: 'sale',
    spotsLeft: 7,
    images: [
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=1000&q=80'
    ],
    highlights: [
      'Check-in bãi biển Sống Lưng Khủng Long Kelingking trên đảo Nusa Penida',
      'Chụp ảnh tại Cổng Trời Lempuyang phản chiếu mây ngàn',
      'Thử thách xích đu Bali Swing giữa thung lũng nhiệt đới',
      'Bữa tối hải sản lãng mạn bên bãi cát biển Jimbaran'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Việt Nam - Bali Denpasar - Đền Tanah Lot',
        desc: 'Bay thẳng đến Bali. Chiêm ngưỡng hoàng hôn bên ngôi đền cổ Tanah Lot trên mỏm đá biển.',
        meals: 'Tối hải sản Jimbaran',
        stay: 'Grand Mirage Resort Bali 5*'
      },
      {
        day: 2,
        title: 'Khám Phá Đảo Nusa Penida - Kelingking Beach',
        desc: 'Đi tàu cao tốc sang đảo Nusa Penida, thăm Kelingking Beach và hồ tự nhiên Angel’s Billabong.',
        meals: 'Sáng, Trưa trên đảo, Tối',
        stay: 'Grand Mirage Resort Bali 5*'
      },
      {
        day: 3,
        title: 'Cổng Trời Lempuyang - Đền Cá Koi Tirta Gangga - Bali Swing',
        desc: 'Đến cổng trời ngắm núi Agung, ghé thăm công viên nước Tirta Gangga và đu dây Bali Swing.',
        meals: 'Sáng, Trưa buffet, Tối',
        stay: 'Grand Mirage Resort Bali 5*'
      },
      {
        day: 4,
        title: 'Chợ Ubud - Sân Bay Bali - Về Việt Nam',
        desc: 'Mua sắm thủ công mỹ nghệ tinh xảo tại chợ Ubud trước khi ra sân bay đáp chuyến bay về.',
        meals: 'Sáng, Trưa nhẹ',
        stay: 'Kết thúc tour'
      }
    ],
    included: [
      'Vé máy bay thẳng khứ hồi',
      'Khách sạn resort 5 sao ven biển',
      'Tàu cano ra đảo Nusa Penida',
      'Tất cả vé thắng cảnh và chi phí trải nghiệm Swing'
    ],
    excluded: [
      'Tip bắt buộc cho hướng dẫn địa phương (5 USD/ngày)',
      'Đồ uống có cồn ngoài chương trình'
    ]
  },
  {
    id: 'tour-6',
    title: 'Hà Giang - Mùa Hoa Tam Giác Mạch - Đèo Mã Pí Lèng - Sông Nho Quế',
    destination: 'Hà Giang',
    region: 'domestic',
    category: 'trekking',
    duration: '3N2Đ',
    transport: 'Xe Limousine Cabin VIP',
    hotel: 'Khách sạn trung tâm & Homestay',
    departureLocation: 'Hà Nội',
    departureDates: ['2026-10-16', '2026-10-23', '2026-10-30', '2026-11-06'],
    price: 2650000,
    originalPrice: 3200000,
    discountPercent: 17,
    rating: 4.92,
    reviewsCount: 77,
    badge: 'Mùa đẹp nhất năm',
    badgeType: 'hot',
    spotsLeft: 8,
    images: [
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1000&q=80'
    ],
    highlights: [
      'Du thuyền trên Sông Nho Quế màu xanh ngọc bích lọt giữa hẻm vực Tu Sản',
      'Vượt Mã Pí Lèng - Một trong tứ đại đỉnh đèo hùng vĩ nhất phương Bắc',
      'Chụp ảnh giữa những cánh đồng hoa tam giác mạch bạt ngàn Đồng Văn',
      'Thưởng thức bánh tam giác mạch nướng, thắng dền, rượu ngô men lá'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Hà Nội - Cột Mốc Số 0 - Quản Bạ - Rừng Thông Yên Minh',
        desc: 'Khởi hành từ Hà Nội. Dừng chân check-in Km0, ngắm Núi Đôi Quản Bạ và dạo rừng thông Yên Minh.',
        meals: 'Trưa Quản Bạ, Tối Yên Minh',
        stay: 'Thảo Nguyên Hotel Yên Minh'
      },
      {
        day: 2,
        title: 'Nhà Của Pao - Dinh Vua Mèo - Cột Cờ Lũng Cú - Đồng Văn',
        desc: 'Thăm Làng Lũng Cẩm, Dinh Thự Họ Vương và Cột cờ Lũng Cú cực Bắc địa đầu. Tối dạo phố cổ Đồng Văn.',
        meals: 'Sáng, Trưa đặc sản, Tối',
        stay: 'Hoa Cương Hotel Đồng Văn'
      },
      {
        day: 3,
        title: 'Đèo Mã Pí Lèng - Sông Nho Quế - Hà Nội',
        desc: 'Chinh phục Mã Pí Lèng, đi thuyền ngắm vực Tu Sản trước khi lên xe về lại Hà Nội.',
        meals: 'Sáng, Trưa Mèo Vạc',
        stay: 'Kết thúc tour'
      }
    ],
    included: [
      'Xe Limousine giường phòng khứ hồi',
      'Khách sạn tiêu chuẩn tại các điểm lưu trú',
      'Vé thắng cảnh và thuyền sông Nho Quế',
      'Bảo hiểm du lịch trọn gói'
    ],
    excluded: [
      'Thuê trang phục dân tộc check-in',
      'Đồ uống gọi thêm'
    ]
  }
];

const AVAILABLE_COUPONS = {
  VIVU10: { code: 'VIVU10', discountPercent: 10, maxDiscount: 1000000, desc: 'Giảm 10% tối đa 1.000.000đ cho mọi đơn đặt tour' },
  HE2026: { code: 'HE2026', discountAmount: 500000, minOrder: 5000000, desc: 'Giảm 500.000đ cho đơn từ 5.000.000đ' },
  WELCOME: { code: 'WELCOME', discountAmount: 200000, minOrder: 2000000, desc: 'Ưu đãi 200.000đ cho khách hàng mới' }
};

const EXTRA_ADDONS = [
  { id: 'insurance', name: 'Bảo hiểm du lịch mở rộng (Mức đền bù 500tr VNĐ)', price: 180000, desc: 'Bảo vệ toàn diện cả chuyến bay hoãn hủy và y tế khẩn cấp' },
  { id: 'single_room', name: 'Phòng đơn riêng tư (Single Room Supplement)', price: 950000, desc: 'Dành cho khách đi một mình muốn không gian riêng biệt' },
  { id: 'airport_pickup', name: 'Đưa đón tận nhà ra sân bay bằng xe riêng 4-7 chỗ', price: 650000, desc: 'Tài xế chuyên nghiệp, đưa đón chuẩn giờ' }
];

const formatPriceVND = (num) => {
  return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(num);
};

const formatPriceUSD = (num) => {
  const usd = Math.round(num / 25000);
  return `$${usd.toLocaleString('en-US')}`;
};

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [currency, setCurrency] = useState('VND');

  const [searchDestination, setSearchDestination] = useState('');
  const [searchDate, setSearchDate] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState(40000000);
  const [sortBy, setSortBy] = useState('popular');

  const [selectedTour, setSelectedTour] = useState(null);
  const [bookingTour, setBookingTour] = useState(null);
  const [bookingStep, setBookingStep] = useState(1);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);

  const [bookingData, setBookingData] = useState({
    date: '',
    adults: 2,
    children: 0,
    infants: 0,
    fullName: '',
    phone: '',
    email: '',
    note: '',
    addons: [],
    couponInput: '',
    appliedCoupon: null,
    paymentMethod: 'vnpay',
    bookingCode: ''
  });

  const [wishlist, setWishlist] = useState(['tour-1']);
  const [myBookings, setMyBookings] = useState([
    {
      bookingCode: 'VVV-9281',
      createdAt: '2026-10-02',
      tour: INITIAL_TOURS[0],
      departureDate: '2026-10-22',
      adults: 2,
      children: 1,
      totalAmount: 17125000,
      paymentMethod: 'VNPAY QR',
      status: 'confirmed',
      customer: {
        fullName: 'Nguyễn Văn An',
        phone: '0912 345 678',
        email: 'an.nguyen@example.com'
      }
    }
  ]);

  const [toasts, setToasts] = useState([]);

  const addToast = (message, type = 'success') => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3800);
  };

  const toggleWishlist = (tourId, e) => {
    if (e) e.stopPropagation();
    if (wishlist.includes(tourId)) {
      setWishlist(wishlist.filter((id) => id !== tourId));
      addToast('Đã xóa tour khỏi danh sách yêu thích', 'info');
    } else {
      setWishlist([...wishlist, tourId]);
      addToast('Đã thêm tour vào danh sách yêu thích!', 'success');
    }
  };

  const filteredTours = useMemo(() => {
    return INITIAL_TOURS.filter((tour) => {
      if (searchDestination.trim()) {
        const term = searchDestination.toLowerCase().trim();
        const matchTitle = tour.title.toLowerCase().includes(term);
        const matchDest = tour.destination.toLowerCase().includes(term);
        if (!matchTitle && !matchDest) return false;
      }

      if (activeTab === 'domestic' && tour.region !== 'domestic') return false;
      if (activeTab === 'international' && tour.region !== 'international') return false;
      if (activeTab === 'promotions' && !tour.badgeType) return false;

      if (selectedCategory === 'flash-sale' && tour.badgeType !== 'sale') return false;
      if (selectedCategory === 'best-seller' && tour.badgeType !== 'hot') return false;
      if (selectedCategory === 'luxury' && tour.category !== 'luxury') return false;
      if (selectedCategory === 'beach' && tour.category !== 'beach') return false;
      if (selectedCategory === 'trekking' && tour.category !== 'trekking') return false;
      if (selectedCategory === 'culture' && tour.category !== 'culture') return false;

      if (tour.price > priceRange) return false;

      if (searchDate && !tour.departureDates.includes(searchDate)) {
        return false;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return b.reviewsCount - a.reviewsCount;
    });
  }, [searchDestination, searchDate, selectedCategory, priceRange, sortBy, activeTab]);

  const calculateTotal = () => {
    if (!bookingTour) return { subtotal: 0, discount: 0, finalTotal: 0, addonsCost: 0 };
    const adultCost = bookingTour.price * bookingData.adults;
    const childCost = bookingTour.price * 0.75 * bookingData.children;
    const infantCost = bookingTour.price * 0.1 * bookingData.infants;

    let addonsCost = 0;
    bookingData.addons.forEach((addonId) => {
      const found = EXTRA_ADDONS.find((a) => a.id === addonId);
      if (found) addonsCost += found.price;
    });

    const subtotal = adultCost + childCost + infantCost + addonsCost;
    let discount = 0;

    if (bookingData.appliedCoupon) {
      const c = bookingData.appliedCoupon;
      if (c.discountPercent) {
        discount = (subtotal * c.discountPercent) / 100;
        if (c.maxDiscount && discount > c.maxDiscount) discount = c.maxDiscount;
      } else if (c.discountAmount) {
        discount = c.discountAmount;
      }
    }

    const finalTotal = Math.max(0, subtotal - discount);
    return { subtotal, discount, finalTotal, addonsCost };
  };

  const startBooking = (tour) => {
    setBookingTour(tour);
    setBookingData({
      date: tour.departureDates[0] || '',
      adults: 2,
      children: 0,
      infants: 0,
      fullName: '',
      phone: '',
      email: '',
      note: '',
      addons: ['insurance'],
      couponInput: '',
      appliedCoupon: null,
      paymentMethod: 'vnpay',
      bookingCode: 'VVV-' + Math.floor(1000 + Math.random() * 9000)
    });
    setBookingStep(1);
    setSelectedTour(null);
  };

  const handleApplyCoupon = () => {
    const code = bookingData.couponInput.trim().toUpperCase();
    if (!code) return;
    const coupon = AVAILABLE_COUPONS[code];
    if (!coupon) {
      addToast('Mã giảm giá không hợp lệ hoặc đã hết hạn!', 'error');
      return;
    }
    const currentSubtotal = bookingTour.price * bookingData.adults;
    if (coupon.minOrder && currentSubtotal < coupon.minOrder) {
      addToast(`Mã áp dụng cho đơn từ ${formatPriceVND(coupon.minOrder)}!`, 'error');
      return;
    }
    setBookingData({ ...bookingData, appliedCoupon: coupon });
    addToast(`Áp dụng mã ${code} thành công!`, 'success');
  };

  const handleConfirmBooking = () => {
    const { finalTotal } = calculateTotal();
    const newBooking = {
      bookingCode: bookingData.bookingCode,
      createdAt: new Date().toISOString().split('T')[0],
      tour: bookingTour,
      departureDate: bookingData.date,
      adults: bookingData.adults,
      children: bookingData.children,
      infants: bookingData.infants,
      totalAmount: finalTotal,
      paymentMethod: bookingData.paymentMethod.toUpperCase(),
      status: 'confirmed',
      customer: {
        fullName: bookingData.fullName,
        phone: bookingData.phone,
        email: bookingData.email,
        note: bookingData.note
      }
    };

    setMyBookings([newBooking, ...myBookings]);
    setBookingStep(5);
    addToast('🎉 Đặt tour thành công! Vé điện tử đã sẵn sàng.', 'success');
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 antialiased selection:bg-teal-500 selection:text-white">
      {/* Toast Notification Container */}
      <div className="fixed top-5 right-5 z-50 flex flex-col gap-2 max-w-sm w-full pointer-events-none">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className={`pointer-events-auto flex items-center gap-3 p-4 rounded-xl shadow-xl text-white transform transition-all duration-300 ${
              toast.type === 'error'
                ? 'bg-rose-600'
                : toast.type === 'info'
                ? 'bg-sky-600'
                : 'bg-emerald-600'
            }`}
          >
            {toast.type === 'error' ? <AlertCircle className="w-5 h-5 flex-shrink-0" /> : <CheckCircle2 className="w-5 h-5 flex-shrink-0" />}
            <span className="text-sm font-medium">{toast.message}</span>
          </div>
        ))}
      </div>

      {/* Top Notification Bar */}
      <div className="bg-gradient-to-r from-teal-900 via-teal-800 to-emerald-900 text-teal-100 text-xs py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <span className="bg-amber-400 text-teal-950 font-bold px-2 py-0.5 rounded-full text-[10px] tracking-wide uppercase">
              Ưu đãi 2026
            </span>
            <span>Nhập mã <strong className="text-amber-300">VIVU10</strong> giảm ngay 10% cho mọi hành trình biển đảo!</span>
          </div>
          <div className="flex items-center gap-4 text-slate-200">
            <span className="flex items-center gap-1 hover:text-white cursor-pointer transition">
              <PhoneCall className="w-3.5 h-3.5 text-teal-300" /> Hotline 24/7: <strong>1900 6868</strong>
            </span>
            <span className="hidden md:inline">|</span>
            <div className="flex items-center gap-1 bg-teal-950/40 rounded px-2 py-0.5 border border-teal-700/50">
              <span>Tiền tệ:</span>
              <button
                onClick={() => setCurrency('VND')}
                className={`font-semibold px-1 rounded ${currency === 'VND' ? 'text-amber-300 bg-teal-800' : 'text-slate-300'}`}
              >
                VND
              </button>
              <span>/</span>
              <button
                onClick={() => setCurrency('USD')}
                className={`font-semibold px-1 rounded ${currency === 'USD' ? 'text-amber-300 bg-teal-800' : 'text-slate-300'}`}
              >
                USD
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header / Navigation */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-sm transition">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div
              onClick={() => { setActiveTab('home'); setSelectedCategory('all'); }}
              className="flex items-center gap-2.5 cursor-pointer group"
            >
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-teal-600 to-emerald-400 flex items-center justify-center text-white shadow-md shadow-teal-500/20 group-hover:scale-105 transition">
                <Compass className="w-6 h-6" />
              </div>
              <div>
                <span className="text-2xl font-black tracking-tight bg-gradient-to-r from-teal-700 to-emerald-600 bg-clip-text text-transparent">
                  VietVivu
                </span>
                <span className="text-xs block font-semibold text-slate-400 tracking-widest uppercase -mt-1">
                  Travel & Tours
                </span>
              </div>
            </div>

            {/* Navigation links */}
            <nav className="hidden lg:flex items-center gap-1 font-medium text-slate-600">
              <button
                onClick={() => setActiveTab('home')}
                className={`px-4 py-2 rounded-xl transition ${
                  activeTab === 'home' ? 'text-teal-700 font-semibold bg-teal-50' : 'hover:text-teal-600 hover:bg-slate-50'
                }`}
              >
                Trang chủ
              </button>
              <button
                onClick={() => setActiveTab('domestic')}
                className={`px-4 py-2 rounded-xl transition ${
                  activeTab === 'domestic' ? 'text-teal-700 font-semibold bg-teal-50' : 'hover:text-teal-600 hover:bg-slate-50'
                }`}
              >
                Tour Trong Nước
              </button>
              <button
                onClick={() => setActiveTab('international')}
                className={`px-4 py-2 rounded-xl transition ${
                  activeTab === 'international' ? 'text-teal-700 font-semibold bg-teal-50' : 'hover:text-teal-600 hover:bg-slate-50'
                }`}
              >
                Tour Quốc Tế
              </button>
              <button
                onClick={() => setActiveTab('promotions')}
                className={`px-4 py-2 rounded-xl transition flex items-center gap-1.5 ${
                  activeTab === 'promotions' ? 'text-teal-700 font-semibold bg-teal-50' : 'hover:text-teal-600 hover:bg-slate-50'
                }`}
              >
                <Flame className="w-4 h-4 text-orange-500" />
                Khuyến Mãi
              </button>
              <button
                onClick={() => setActiveTab('handbook')}
                className={`px-4 py-2 rounded-xl transition ${
                  activeTab === 'handbook' ? 'text-teal-700 font-semibold bg-teal-50' : 'hover:text-teal-600 hover:bg-slate-50'
                }`}
              >
                Cẩm Nang Du Lịch
              </button>
            </nav>

            {/* User Action Right Icons */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsWishlistOpen(true)}
                className="relative p-2.5 rounded-xl border border-slate-200 text-slate-600 hover:text-teal-600 hover:border-teal-300 hover:bg-teal-50/50 transition"
                title="Danh sách yêu thích"
              >
                <Heart className="w-5 h-5" />
                {wishlist.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-rose-500 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center shadow">
                    {wishlist.length}
                  </span>
                )}
              </button>

              <button
                onClick={() => setActiveTab('my-bookings')}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl font-medium text-sm transition border ${
                  activeTab === 'my-bookings'
                    ? 'bg-teal-700 text-white border-teal-700 shadow-md shadow-teal-700/20'
                    : 'bg-white text-slate-700 border-slate-200 hover:border-teal-400 hover:text-teal-700'
                }`}
              >
                <Ticket className="w-4 h-4 text-amber-400" />
                <span className="hidden sm:inline">Chuyến đi của tôi</span>
                {myBookings.length > 0 && (
                  <span className="px-1.5 py-0.2 bg-teal-100 text-teal-800 rounded-full text-xs font-bold">
                    {myBookings.length}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content View Switcher */}
      {activeTab === 'my-bookings' ? (
        <main className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
            <div>
              <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight flex items-center gap-3">
                <Ticket className="w-8 h-8 text-teal-600" /> Chuyến Đi Của Tôi
              </h1>
              <p className="text-slate-500 mt-1 text-sm">
                Quản lý lịch sử đặt tour, xem vé điện tử và theo dõi trạng thái khởi hành.
              </p>
            </div>
            <button
              onClick={() => setActiveTab('home')}
              className="px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white font-medium rounded-xl text-sm transition flex items-center gap-2"
            >
              <Compass className="w-4 h-4" /> Khám phá thêm tour khác
            </button>
          </div>

          {myBookings.length === 0 ? (
            <div className="bg-white rounded-3xl p-12 text-center border border-slate-200 shadow-sm">
              <Luggage className="w-16 h-16 text-slate-300 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-slate-700">Bạn chưa có đơn đặt tour nào</h3>
              <button
                onClick={() => setActiveTab('home')}
                className="mt-4 bg-teal-600 text-white px-6 py-2.5 rounded-xl font-medium hover:bg-teal-700 transition"
              >
                Tìm tour ngay
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {myBookings.map((b, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden hover:shadow-md transition"
                >
                  <div className="p-6 flex flex-col lg:flex-row gap-6 justify-between items-start lg:items-center border-b border-slate-100 bg-slate-50/50">
                    <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                      <div className="px-3.5 py-1.5 bg-teal-100 text-teal-800 font-bold rounded-lg text-xs tracking-wider uppercase flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4 text-teal-600" />
                        Mã vé: {b.bookingCode}
                      </div>
                      <span className="text-xs text-slate-400">
                        Ngày đặt: {b.createdAt}
                      </span>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800">
                        Đã xác nhận & Thanh toán
                      </span>
                    </div>
                    <div className="text-left lg:text-right">
                      <span className="text-xs text-slate-500 block">Tổng thanh toán:</span>
                      <span className="text-2xl font-black text-teal-700">
                        {currency === 'VND' ? formatPriceVND(b.totalAmount) : formatPriceUSD(b.totalAmount)}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 flex flex-col md:flex-row gap-6">
                    <img
                      src={b.tour.images[0]}
                      alt={b.tour.title}
                      className="w-full md:w-56 h-40 object-cover rounded-2xl"
                    />
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <span className="text-xs font-bold text-teal-600 tracking-wide uppercase">
                          {b.tour.duration} • {b.tour.transport}
                        </span>
                        <h3 className="text-lg font-bold text-slate-800 mt-1 mb-3">
                          {b.tour.title}
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-slate-600">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-teal-600" />
                            <span>Khởi hành: <strong>{b.departureDate}</strong></span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Users className="w-4 h-4 text-teal-600" />
                            <span>Số khách: {b.adults} người lớn {b.children > 0 && `, ${b.children} trẻ em`}</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-3 mt-6 pt-4 border-t border-slate-100">
                        <button
                          onClick={() => {
                            setBookingTour(b.tour);
                            setBookingData({
                              ...bookingData,
                              bookingCode: b.bookingCode,
                              date: b.departureDate,
                              adults: b.adults,
                              children: b.children || 0,
                              fullName: b.customer.fullName,
                              phone: b.customer.phone,
                              email: b.customer.email
                            });
                            setBookingStep(5);
                          }}
                          className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-xl flex items-center gap-2 transition"
                        >
                          <QrCode className="w-4 h-4 text-teal-400" /> Xem Vé Điện Tử & Mã QR
                        </button>
                        <button
                          onClick={() => setSelectedTour(b.tour)}
                          className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-xl transition"
                        >
                          Lịch trình chi tiết
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </main>
      ) : activeTab === 'handbook' ? (
        <main className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-teal-600 font-bold text-xs uppercase tracking-widest bg-teal-50 px-3 py-1 rounded-full">
              Kinh nghiệm du lịch
            </span>
            <h1 className="text-3xl font-black text-slate-900 mt-2 mb-3">
              Cẩm Nang Du Lịch VietVivu 2026
            </h1>
            <p className="text-slate-600 text-sm">
              Tổng hợp những bí kíp chọn tour, kinh nghiệm săn vé máy bay giá tốt và mẹo chuẩn bị hành trang hoàn hảo nhất.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80"
                alt="Phú quốc tips"
                className="w-full h-44 object-cover rounded-2xl mb-4"
              />
              <span className="text-xs font-bold text-teal-600 uppercase">Mẹo Biển Đảo</span>
              <h3 className="font-bold text-slate-900 text-base mt-1 mb-2">
                Nên đi Phú Quốc vào tháng mấy để ngắm hoàng hôn đẹp nhất?
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed mb-4">
                Thời điểm lý tưởng nhất là từ tháng 11 đến tháng 4 năm sau, khi thời tiết nắng ấm, biển lặng và sóng êm.
              </p>
            </div>
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=600&q=80"
                alt="Japan tips"
                className="w-full h-44 object-cover rounded-2xl mb-4"
              />
              <span className="text-xs font-bold text-indigo-600 uppercase">Hành Trang Quốc Tế</span>
              <h3 className="font-bold text-slate-900 text-base mt-1 mb-2">
                Hồ sơ xin visa du lịch Nhật Bản theo tour cần những gì?
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed mb-4">
                Hướng dẫn chi tiết từ sao kê tài chính, hộ chiếu còn hạn đến thủ tục bảo lãnh nhanh gọn cùng VietVivu.
              </p>
            </div>
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=600&q=80"
                alt="Sapa tips"
                className="w-full h-44 object-cover rounded-2xl mb-4"
              />
              <span className="text-xs font-bold text-emerald-600 uppercase">Trekking Vùng Cao</span>
              <h3 className="font-bold text-slate-900 text-base mt-1 mb-2">
                Kinh nghiệm săn mây đỉnh Fansipan và giữ ấm khi đi Sa Pa
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed mb-4">
                Chuẩn bị áo giữ nhiệt, giày chống trượt và những khung giờ vàng để bắt trọn biển mây bồng bềnh.
              </p>
            </div>
          </div>
        </main>
      ) : (
        <main>
          {/* Hero Section */}
          <section className="relative min-h-[520px] flex items-center justify-center bg-slate-900 text-white overflow-hidden py-16 px-4">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-40 scale-105"
              style={{
                backgroundImage:
                  'url("https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=80")'
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-900/60 to-slate-950/90" />

            <div className="relative z-10 max-w-5xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-500/20 backdrop-blur-md border border-teal-400/30 text-teal-300 text-xs sm:text-sm font-semibold mb-6">
                <Sparkles className="w-4 h-4 text-amber-300" />
                Hơn 50.000+ du khách đã hài lòng trong năm 2026
              </div>

              <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight leading-tight mb-5">
                Khám Phá Việt Nam & Thế Giới <br />
                <span className="bg-gradient-to-r from-teal-300 via-emerald-300 to-amber-300 bg-clip-text text-transparent">
                  Theo Cách Trọn Vẹn Nhất
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto mb-10 font-normal">
                Đặt tour dễ dàng, khởi hành đúng lịch, khách sạn chuẩn 4-5 sao với bảo hiểm trọn gói và hỗ trợ 24/7.
              </p>

              {/* Comprehensive Interactive Search Bar Card */}
              <div className="bg-white rounded-3xl p-4 sm:p-5 shadow-2xl text-slate-800 max-w-4xl mx-auto border border-slate-100">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-3 text-left">
                  <div className="p-3 bg-slate-50 hover:bg-teal-50/40 rounded-2xl border border-slate-200 transition">
                    <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5 mb-1">
                      <MapPin className="w-3.5 h-3.5 text-teal-600" /> Điểm đến
                    </label>
                    <input
                      type="text"
                      placeholder="Phú Quốc, Sa Pa, Tokyo..."
                      value={searchDestination}
                      onChange={(e) => setSearchDestination(e.target.value)}
                      className="w-full bg-transparent text-sm font-semibold text-slate-800 focus:outline-none placeholder-slate-400"
                    />
                  </div>

                  <div className="p-3 bg-slate-50 hover:bg-teal-50/40 rounded-2xl border border-slate-200 transition">
                    <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5 mb-1">
                      <Calendar className="w-3.5 h-3.5 text-teal-600" /> Ngày khởi hành
                    </label>
                    <input
                      type="date"
                      value={searchDate}
                      onChange={(e) => setSearchDate(e.target.value)}
                      className="w-full bg-transparent text-sm font-semibold text-slate-800 focus:outline-none"
                    />
                  </div>

                  <div className="p-3 bg-slate-50 hover:bg-teal-50/40 rounded-2xl border border-slate-200 transition">
                    <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5 mb-1">
                      <SlidersHorizontal className="w-3.5 h-3.5 text-teal-600" /> Thể loại tour
                    </label>
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="w-full bg-transparent text-sm font-semibold text-slate-800 focus:outline-none cursor-pointer"
                    >
                      <option value="all">Tất cả thể loại</option>
                      <option value="beach">Nghỉ dưỡng biển đảo</option>
                      <option value="trekking">Leo núi & Khám phá</option>
                      <option value="culture">Văn hóa & Di sản</option>
                      <option value="luxury">Tour Cao Cấp Luxury</option>
                    </select>
                  </div>

                  <div className="flex items-center">
                    <button
                      onClick={() => {
                        const target = document.getElementById('tour-catalog-section');
                        if (target) target.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="w-full h-full min-h-[52px] bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white font-bold text-sm rounded-2xl shadow-lg shadow-teal-600/30 flex items-center justify-center gap-2 transition active:scale-95"
                    >
                      <Search className="w-4 h-4" /> Tìm Kiếm Tour
                    </button>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2 mt-4 pt-3 border-t border-slate-100 text-xs text-slate-500">
                  <span className="font-semibold text-slate-600">Gợi ý nhanh:</span>
                  {['Phú Quốc', 'Đà Nẵng', 'Sa Pa', 'Nhật Bản', 'Bali', 'Hà Giang'].map((place) => (
                    <button
                      key={place}
                      onClick={() => setSearchDestination(place)}
                      className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-teal-100 hover:text-teal-800 transition"
                    >
                      {place}
                    </button>
                  ))}
                  {searchDestination && (
                    <button
                      onClick={() => { setSearchDestination(''); setSearchDate(''); }}
                      className="text-rose-500 hover:underline font-medium ml-auto"
                    >
                      Xóa tìm kiếm
                    </button>
                  )}
                </div>
              </div>
            </div>
          </section>

          {/* Catalog & Filter Section */}
          <section id="tour-catalog-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-8">
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  {activeTab === 'domestic'
                    ? 'Tour Du Lịch Trong Nước Hấp Dẫn'
                    : activeTab === 'international'
                    ? 'Tour Du Lịch Quốc Tế Nổi Bật'
                    : activeTab === 'promotions'
                    ? 'Chương Trình Khuyến Mãi Flash Sale'
                    : 'Các Hành Trình Được Yêu Thích Nhất'}
                </h2>
                <p className="text-slate-500 text-sm mt-1">
                  Tìm thấy <strong className="text-teal-700 font-bold">{filteredTours.length}</strong> hành trình phù hợp
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
                <div className="flex items-center gap-2 bg-white px-3.5 py-2 rounded-xl border border-slate-200 text-xs font-medium text-slate-700">
                  <span>Giá dưới:</span>
                  <span className="font-bold text-teal-700">
                    {currency === 'VND' ? formatPriceVND(priceRange) : formatPriceUSD(priceRange)}
                  </span>
                  <input
                    type="range"
                    min={2000000}
                    max={40000000}
                    step={1000000}
                    value={priceRange}
                    onChange={(e) => setPriceRange(Number(e.target.value))}
                    className="w-24 accent-teal-600 cursor-pointer"
                  />
                </div>

                <div className="flex items-center gap-2 bg-white px-3.5 py-2 rounded-xl border border-slate-200 text-xs font-medium text-slate-700">
                  <Filter className="w-3.5 h-3.5 text-slate-400" />
                  <span>Sắp xếp:</span>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="bg-transparent font-semibold text-slate-800 focus:outline-none cursor-pointer"
                  >
                    <option value="popular">Phổ biến nhất</option>
                    <option value="price-low">Giá: Thấp đến Cao</option>
                    <option value="price-high">Giá: Cao đến Thấp</option>
                    <option value="rating">Đánh giá cao nhất</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Quick Category Buttons */}
            <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8">
              {[
                { id: 'all', label: 'Tất cả tour' },
                { id: 'flash-sale', label: '⚡ Flash Sale' },
                { id: 'best-seller', label: '🔥 Bán Chạy' },
                { id: 'beach', label: '🏖️ Biển Đảo' },
                { id: 'trekking', label: '⛰️ Trekking & Núi' },
                { id: 'luxury', label: '💎 Luxury' }
              ].map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition ${
                    selectedCategory === cat.id
                      ? 'bg-teal-700 text-white shadow-md shadow-teal-700/20'
                      : 'bg-white text-slate-600 border border-slate-200 hover:border-teal-300 hover:text-teal-700'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Tour Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredTours.map((tour) => {
                const isWish = wishlist.includes(tour.id);
                return (
                  <div
                    key={tour.id}
                    className="group bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300 flex flex-col"
                  >
                    <div className="relative h-60 w-full overflow-hidden">
                      <img
                        src={tour.images[0]}
                        alt={tour.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-black/20" />

                      <div className="absolute top-4 left-4 flex flex-col gap-1.5 items-start">
                        {tour.badge && (
                          <span
                            className={`px-3 py-1 rounded-full text-[11px] font-bold shadow uppercase tracking-wider ${
                              tour.badgeType === 'hot'
                                ? 'bg-rose-500 text-white'
                                : tour.badgeType === 'sale'
                                ? 'bg-amber-400 text-slate-900'
                                : tour.badgeType === 'luxury'
                                ? 'bg-gradient-to-r from-amber-500 to-yellow-300 text-slate-900'
                                : 'bg-emerald-600 text-white'
                            }`}
                          >
                            {tour.badge}
                          </span>
                        )}
                      </div>

                      <button
                        onClick={(e) => toggleWishlist(tour.id, e)}
                        className="absolute top-4 right-4 p-2.5 rounded-full bg-white/80 hover:bg-white text-slate-700 hover:text-rose-500 shadow transition"
                      >
                        <Heart
                          className={`w-4 h-4 ${isWish ? 'fill-rose-500 text-rose-500' : ''}`}
                        />
                      </button>

                      <div className="absolute bottom-3 left-4 right-4 flex justify-between items-center text-white text-xs">
                        <span className="flex items-center gap-1 bg-black/40 px-2.5 py-1 rounded-lg">
                          <Clock className="w-3.5 h-3.5 text-teal-300" /> {tour.duration}
                        </span>
                        <span className="flex items-center gap-1 bg-black/40 px-2.5 py-1 rounded-lg">
                          <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                          {tour.rating} ({tour.reviewsCount})
                        </span>
                      </div>
                    </div>

                    <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between text-xs text-slate-500 mb-2 font-medium">
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3.5 h-3.5 text-teal-600" /> {tour.destination}
                          </span>
                          <span className="truncate max-w-[150px]">{tour.transport}</span>
                        </div>

                        <h3
                          onClick={() => setSelectedTour(tour)}
                          className="font-bold text-slate-800 text-base line-clamp-2 hover:text-teal-700 cursor-pointer transition mb-3"
                        >
                          {tour.title}
                        </h3>

                        <div className="space-y-1 mb-4 text-xs text-slate-600">
                          <div className="flex items-start gap-1.5">
                            <Check className="w-3.5 h-3.5 text-teal-600 mt-0.5 flex-shrink-0" />
                            <span className="line-clamp-1">{tour.highlights[0]}</span>
                          </div>
                          <div className="flex items-start gap-1.5">
                            <Hotel className="w-3.5 h-3.5 text-teal-600 mt-0.5 flex-shrink-0" />
                            <span className="line-clamp-1">{tour.hotel}</span>
                          </div>
                        </div>
                      </div>

                      <div className="pt-4 border-t border-slate-100 flex items-end justify-between">
                        <div>
                          {tour.originalPrice && (
                            <span className="text-xs text-slate-400 line-through block">
                              {currency === 'VND' ? formatPriceVND(tour.originalPrice) : formatPriceUSD(tour.originalPrice)}
                            </span>
                          )}
                          <div className="flex items-baseline gap-1">
                            <span className="text-xl font-black text-teal-700">
                              {currency === 'VND' ? formatPriceVND(tour.price) : formatPriceUSD(tour.price)}
                            </span>
                            <span className="text-[11px] text-slate-400">/khách</span>
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => setSelectedTour(tour)}
                            className="px-3 py-2 text-xs font-semibold text-slate-700 hover:text-teal-700 hover:bg-teal-50 rounded-xl transition"
                          >
                            Chi tiết
                          </button>
                          <button
                            onClick={() => startBooking(tour)}
                            className="px-3.5 py-2 text-xs font-bold bg-teal-600 hover:bg-teal-700 text-white rounded-xl shadow-md transition"
                          >
                            Đặt ngay
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Guarantee Badges Section */}
          <section className="bg-white border-y border-slate-200 py-12 px-4">
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-teal-50 flex items-center justify-center text-teal-600 flex-shrink-0">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-sm">Bảo Hiểm Toàn Diện</h4>
                  <p className="text-xs text-slate-500 mt-1">Mức bồi hoàn tối đa 100.000.000đ/vụ cho mọi chuyến đi an tâm.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-600 flex-shrink-0">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-sm">Cam Kết Đúng Lịch</h4>
                  <p className="text-xs text-slate-500 mt-1">Khởi hành đúng giờ, dịch vụ chuẩn xác như cam kết.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center text-amber-600 flex-shrink-0">
                  <Hotel className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-sm">Khách Sạn 4-5 Sao</h4>
                  <p className="text-xs text-slate-500 mt-1">Đối tác trực tiếp với các chuỗi resort & khách sạn uy tín.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-rose-50 flex items-center justify-center text-rose-600 flex-shrink-0">
                  <PhoneCall className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-sm">Hỗ Trợ 24/7</h4>
                  <p className="text-xs text-slate-500 mt-1">Đội ngũ tư vấn viên luôn đồng hành trước và trong tour.</p>
                </div>
              </div>
            </div>
          </section>
        </main>
      )}

      {/* Detail Modal */}
      {selectedTour && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6">
          <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[92vh] overflow-y-auto shadow-2xl relative border border-slate-100">
            <button
              onClick={() => setSelectedTour(null)}
              className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/50 hover:bg-black/70 text-white transition"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative h-72 sm:h-96 w-full">
              <img
                src={selectedTour.images[0]}
                alt={selectedTour.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-teal-500 text-slate-950">
                    {selectedTour.destination}
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/20">
                    {selectedTour.duration}
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-black leading-tight">
                  {selectedTour.title}
                </h2>
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-8">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs">
                <div>
                  <span className="text-slate-400 block mb-0.5">Xuất phát:</span>
                  <strong className="text-slate-800 text-sm">{selectedTour.departureLocation}</strong>
                </div>
                <div>
                  <span className="text-slate-400 block mb-0.5">Phương tiện:</span>
                  <strong className="text-slate-800 text-sm">{selectedTour.transport}</strong>
                </div>
                <div>
                  <span className="text-slate-400 block mb-0.5">Khách sạn:</span>
                  <strong className="text-slate-800 text-sm">{selectedTour.hotel}</strong>
                </div>
                <div>
                  <span className="text-slate-400 block mb-0.5">Đánh giá:</span>
                  <strong className="text-amber-600 text-sm flex items-center gap-1">
                    <Star className="w-4 h-4 fill-amber-400" /> {selectedTour.rating} ({selectedTour.reviewsCount})
                  </strong>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-amber-500" /> Điểm Nhấn Hành Trình
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedTour.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-sm text-slate-700 bg-teal-50/40 p-3 rounded-xl border border-teal-100">
                      <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-teal-600" /> Lịch Trình Chi Tiết
                </h3>
                <div className="space-y-4 border-l-2 border-teal-200 ml-4 pl-4">
                  {selectedTour.itinerary.map((it) => (
                    <div key={it.day} className="relative pb-2">
                      <div className="absolute -left-[25px] top-0 w-4 h-4 rounded-full bg-teal-600 border-2 border-white shadow" />
                      <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200">
                        <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                          <span className="text-xs font-black uppercase text-teal-700 bg-teal-100 px-2 py-0.5 rounded">
                            Ngày {it.day}
                          </span>
                          <span className="text-xs text-slate-500">
                            Bữa ăn: <strong>{it.meals}</strong>
                          </span>
                        </div>
                        <h4 className="font-bold text-slate-800 text-base mb-1">{it.title}</h4>
                        <p className="text-xs text-slate-600 leading-relaxed mb-3">{it.desc}</p>
                        <div className="text-[11px] text-slate-500 flex items-center gap-1.5">
                          <Hotel className="w-3.5 h-3.5 text-teal-600" /> Lưu trú: <strong>{it.stay}</strong>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <span className="text-xs text-slate-400 block">Giá trọn gói mỗi khách:</span>
                  <span className="text-2xl font-black text-teal-700">
                    {currency === 'VND' ? formatPriceVND(selectedTour.price) : formatPriceUSD(selectedTour.price)}
                  </span>
                </div>
                <div className="flex gap-3 w-full sm:w-auto">
                  <button
                    onClick={() => toggleWishlist(selectedTour.id)}
                    className="p-3 border border-slate-200 rounded-xl hover:text-rose-600 transition"
                  >
                    <Heart className={`w-5 h-5 ${wishlist.includes(selectedTour.id) ? 'fill-rose-500 text-rose-500' : ''}`} />
                  </button>
                  <button
                    onClick={() => startBooking(selectedTour)}
                    className="flex-1 sm:flex-initial px-8 py-3.5 bg-teal-600 hover:bg-teal-700 text-white font-bold rounded-2xl shadow-lg transition text-sm flex items-center justify-center gap-2"
                  >
                    Đặt Chỗ Ngay <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Booking Engine Modal */}
      {bookingTour && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6">
          <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[95vh] overflow-y-auto shadow-2xl relative border border-slate-100 flex flex-col">
            <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50/60 sticky top-0 z-20 backdrop-blur-md">
              <div>
                <span className="text-xs font-bold text-teal-600 uppercase tracking-widest">
                  Quy trình đặt tour
                </span>
                <h3 className="text-lg font-black text-slate-900 mt-0.5">
                  {bookingStep === 5 ? 'Vé Điện Tử' : `Bước ${bookingStep}/4`}
                </h3>
              </div>
              <button
                onClick={() => setBookingTour(null)}
                className="p-2 rounded-full hover:bg-slate-200 text-slate-500 transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 sm:p-8 flex-1">
              {/* Step 1 */}
              {bookingStep === 1 && (
                <div className="space-y-6">
                  <div>
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-2">
                      Chọn ngày khởi hành:
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                      {bookingTour.departureDates.map((d) => (
                        <button
                          key={d}
                          onClick={() => setBookingData({ ...bookingData, date: d })}
                          className={`p-3 rounded-xl text-xs font-bold border transition text-center ${
                            bookingData.date === d
                              ? 'bg-teal-700 text-white border-teal-700 shadow-md'
                              : 'bg-white text-slate-700 border-slate-200 hover:border-teal-300'
                          }`}
                        >
                          {d}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3 pt-2">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
                      Số lượng hành khách:
                    </label>

                    <div className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
                      <div>
                        <strong className="text-sm text-slate-800 block">Người lớn</strong>
                        <span className="text-xs text-slate-500">Từ 12 tuổi trở lên</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => setBookingData({ ...bookingData, adults: Math.max(1, bookingData.adults - 1) })}
                          className="w-8 h-8 rounded-lg bg-white border border-slate-200 font-bold"
                        >
                          -
                        </button>
                        <span className="font-bold text-base w-4 text-center">{bookingData.adults}</span>
                        <button
                          onClick={() => setBookingData({ ...bookingData, adults: bookingData.adults + 1 })}
                          className="w-8 h-8 rounded-lg bg-white border border-slate-200 font-bold"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
                      <div>
                        <strong className="text-sm text-slate-800 block">Trẻ em (5 - 11 tuổi)</strong>
                        <span className="text-xs text-slate-500">75% giá vé người lớn</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => setBookingData({ ...bookingData, children: Math.max(0, bookingData.children - 1) })}
                          className="w-8 h-8 rounded-lg bg-white border border-slate-200 font-bold"
                        >
                          -
                        </button>
                        <span className="font-bold text-base w-4 text-center">{bookingData.children}</span>
                        <button
                          onClick={() => setBookingData({ ...bookingData, children: bookingData.children + 1 })}
                          className="w-8 h-8 rounded-lg bg-white border border-slate-200 font-bold"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2 */}
              {bookingStep === 2 && (
                <div className="space-y-4">
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">
                      Họ và tên trưởng đoàn: <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="NGUYEN VAN A"
                      value={bookingData.fullName}
                      onChange={(e) => setBookingData({ ...bookingData, fullName: e.target.value })}
                      className="w-full p-3 text-sm rounded-xl border border-slate-200 focus:outline-none"
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1">
                        Số điện thoại: <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="tel"
                        placeholder="0912 345 678"
                        value={bookingData.phone}
                        onChange={(e) => setBookingData({ ...bookingData, phone: e.target.value })}
                        className="w-full p-3 text-sm rounded-xl border border-slate-200 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1">
                        Email: <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="email"
                        placeholder="email@example.com"
                        value={bookingData.email}
                        onChange={(e) => setBookingData({ ...bookingData, email: e.target.value })}
                        className="w-full p-3 text-sm rounded-xl border border-slate-200 focus:outline-none"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3 */}
              {bookingStep === 3 && (
                <div className="space-y-6">
                  <div>
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-3">
                      Dịch vụ thêm:
                    </label>
                    <div className="space-y-3">
                      {EXTRA_ADDONS.map((addon) => {
                        const checked = bookingData.addons.includes(addon.id);
                        return (
                          <div
                            key={addon.id}
                            onClick={() => {
                              if (checked) {
                                setBookingData({
                                  ...bookingData,
                                  addons: bookingData.addons.filter((id) => id !== addon.id)
                                });
                              } else {
                                setBookingData({
                                  ...bookingData,
                                  addons: [...bookingData.addons, addon.id]
                                });
                              }
                            }}
                            className={`p-4 rounded-2xl border cursor-pointer transition flex items-start gap-3 ${
                              checked ? 'bg-teal-50 border-teal-600' : 'bg-slate-50 border-slate-200'
                            }`}
                          >
                            <input
                              type="checkbox"
                              checked={checked}
                              readOnly
                              className="mt-1 w-4 h-4 text-teal-600 rounded"
                            />
                            <div className="flex-1">
                              <div className="flex justify-between items-center">
                                <h5 className="font-bold text-slate-800 text-sm">{addon.name}</h5>
                                <span className="font-bold text-teal-700 text-xs">
                                  +{currency === 'VND' ? formatPriceVND(addon.price) : formatPriceUSD(addon.price)}
                                </span>
                              </div>
                              <p className="text-xs text-slate-500 mt-0.5">{addon.desc}</p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200">
                    <label className="text-xs font-bold text-amber-900 block mb-2 flex items-center gap-1.5">
                      <Tag className="w-4 h-4 text-amber-600" /> Mã giảm giá:
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        placeholder="VIVU10, HE2026..."
                        value={bookingData.couponInput}
                        onChange={(e) => setBookingData({ ...bookingData, couponInput: e.target.value })}
                        className="flex-1 p-2 text-xs font-bold uppercase rounded-xl border border-amber-300 focus:outline-none"
                      />
                      <button
                        onClick={handleApplyCoupon}
                        className="px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs rounded-xl"
                      >
                        Áp dụng
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 4 */}
              {bookingStep === 4 && (
                <div className="space-y-4">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
                    Phương thức thanh toán:
                  </label>
                  {[
                    { id: 'vnpay', title: 'Quét mã QR VNPay / Momo (Khuyên dùng)' },
                    { id: 'card', title: 'Thẻ Quốc Tế Visa / MasterCard' },
                    { id: 'bank', title: 'Chuyển khoản trực tiếp ngân hàng (24/7)' }
                  ].map((m) => (
                    <div
                      key={m.id}
                      onClick={() => setBookingData({ ...bookingData, paymentMethod: m.id })}
                      className={`p-4 rounded-2xl border cursor-pointer flex items-center gap-3.5 ${
                        bookingData.paymentMethod === m.id ? 'bg-teal-50 border-teal-600' : 'bg-white border-slate-200'
                      }`}
                    >
                      <input
                        type="radio"
                        checked={bookingData.paymentMethod === m.id}
                        readOnly
                        className="w-4 h-4 text-teal-600"
                      />
                      <span className="font-bold text-slate-800 text-sm">{m.title}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Step 5 - Success / E-Ticket */}
              {bookingStep === 5 && (
                <div className="space-y-6 text-center">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-2">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-black text-slate-900">Đặt Tour Thành Công!</h3>

                  <div className="bg-gradient-to-br from-slate-900 via-teal-950 to-slate-900 text-white rounded-3xl p-6 text-left shadow-xl border border-teal-500/30">
                    <div className="flex justify-between items-start border-b border-white/10 pb-4 mb-4">
                      <div>
                        <span className="text-[10px] uppercase tracking-widest text-teal-400 font-bold block">
                          E-TICKET / VÉ DU LỊCH ĐIỆN TỬ
                        </span>
                        <h4 className="font-extrabold text-lg text-white mt-0.5">
                          {bookingTour.title}
                        </h4>
                      </div>
                      <div className="text-right">
                        <span className="text-[10px] text-slate-400 block">Mã Đặt Chỗ:</span>
                        <span className="text-xl font-mono font-black text-amber-300">
                          {bookingData.bookingCode}
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-xs mb-6">
                      <div>
                        <span className="text-slate-400 block">Khách hàng:</span>
                        <strong className="text-white">{bookingData.fullName || 'Khách Hàng VietVivu'}</strong>
                      </div>
                      <div>
                        <span className="text-slate-400 block">Ngày đi:</span>
                        <strong className="text-teal-300">{bookingData.date}</strong>
                      </div>
                    </div>

                    <div className="p-4 rounded-2xl bg-white/10 backdrop-blur flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-white rounded-xl p-1 flex items-center justify-center">
                          <QrCode className="w-10 h-10 text-slate-950" />
                        </div>
                        <span className="text-xs font-bold text-white">Quét mã check-in cùng HDV</span>
                      </div>
                      <span className="px-2.5 py-1 rounded bg-emerald-500/20 text-emerald-300 text-xs font-bold">
                        HỢP LỆ
                      </span>
                    </div>
                  </div>

                  <div className="flex justify-center gap-3 pt-2">
                    <button
                      onClick={() => addToast('Đã lưu vé thành công!', 'success')}
                      className="px-5 py-2.5 bg-slate-900 text-white rounded-xl text-xs font-bold flex items-center gap-2"
                    >
                      <Download className="w-4 h-4 text-teal-400" /> Tải Vé (PDF)
                    </button>
                    <button
                      onClick={() => {
                        setBookingTour(null);
                        setActiveTab('my-bookings');
                      }}
                      className="px-5 py-2.5 bg-teal-600 text-white rounded-xl text-xs font-bold flex items-center gap-2"
                    >
                      <Ticket className="w-4 h-4" /> Xem Trong Chuyến Đi Của Tôi
                    </button>
                  </div>
                </div>
              )}
            </div>

            {bookingStep < 5 && (
              <div className="p-6 border-t border-slate-100 bg-slate-50 flex items-center justify-between">
                <div>
                  <span className="text-xs text-slate-500 block">Tổng chi phí:</span>
                  <span className="text-2xl font-black text-teal-700">
                    {currency === 'VND' ? formatPriceVND(calculateTotal().finalTotal) : formatPriceUSD(calculateTotal().finalTotal)}
                  </span>
                </div>
                <div className="flex gap-2">
                  {bookingStep > 1 && (
                    <button
                      onClick={() => setBookingStep(bookingStep - 1)}
                      className="px-4 py-2 rounded-xl border border-slate-300 text-xs font-bold"
                    >
                      Quay lại
                    </button>
                  )}
                  {bookingStep < 4 ? (
                    <button
                      onClick={() => {
                        if (bookingStep === 1 && !bookingData.date) {
                          addToast('Vui lòng chọn ngày khởi hành!', 'error');
                          return;
                        }
                        if (bookingStep === 2 && (!bookingData.fullName || !bookingData.phone)) {
                          addToast('Vui lòng điền họ tên và số điện thoại!', 'error');
                          return;
                        }
                        setBookingStep(bookingStep + 1);
                      }}
                      className="px-6 py-2 bg-teal-600 text-white text-xs font-bold rounded-xl"
                    >
                      Tiếp tục
                    </button>
                  ) : (
                    <button
                      onClick={handleConfirmBooking}
                      className="px-6 py-2 bg-emerald-600 text-white text-xs font-black rounded-xl shadow-md"
                    >
                      Hoàn Tất Đặt Chỗ
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Wishlist Drawer */}
      {isWishlistOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden bg-black/50 flex justify-end">
          <div className="bg-white w-full max-w-md h-full shadow-2xl flex flex-col p-6 overflow-y-auto">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <h3 className="font-extrabold text-slate-900 text-lg flex items-center gap-2">
                <Heart className="w-5 h-5 text-rose-500 fill-rose-500" />
                Tour Yêu Thích ({wishlist.length})
              </h3>
              <button
                onClick={() => setIsWishlistOpen(false)}
                className="p-2 rounded-full hover:bg-slate-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 py-4 space-y-4">
              {wishlist.length === 0 ? (
                <p className="text-center py-16 text-slate-400 text-sm">Chưa có tour yêu thích nào.</p>
              ) : (
                wishlist.map((tourId) => {
                  const tour = INITIAL_TOURS.find((t) => t.id === tourId);
                  if (!tour) return null;
                  return (
                    <div
                      key={tour.id}
                      className="flex gap-3 p-3 rounded-2xl border border-slate-100 bg-slate-50/50"
                    >
                      <img
                        src={tour.images[0]}
                        alt=""
                        className="w-20 h-20 rounded-xl object-cover"
                      />
                      <div className="flex-1 flex flex-col justify-between">
                        <h4 className="font-bold text-slate-800 text-xs line-clamp-1">{tour.title}</h4>
                        <span className="text-[11px] text-teal-700 font-bold">
                          {currency === 'VND' ? formatPriceVND(tour.price) : formatPriceUSD(tour.price)}
                        </span>
                        <div className="flex justify-between mt-2">
                          <button
                            onClick={() => {
                              setSelectedTour(tour);
                              setIsWishlistOpen(false);
                            }}
                            className="text-[11px] font-bold text-teal-600 hover:underline"
                          >
                            Xem tour
                          </button>
                          <button
                            onClick={(e) => toggleWishlist(tour.id, e)}
                            className="text-[11px] font-medium text-rose-500 hover:underline"
                          >
                            Xóa
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-300 pt-16 pb-10 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-teal-500 to-emerald-400 flex items-center justify-center text-white">
                  <Compass className="w-6 h-6" />
                </div>
                <span className="text-2xl font-black text-white">VietVivu Travel</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed max-w-sm mb-4">
                Hệ thống đặt tour du lịch thông minh, tiện lợi và an toàn hàng đầu.
              </p>
            </div>

            <div>
              <h5 className="text-white font-bold text-sm mb-4">Hỗ Trợ</h5>
              <ul className="space-y-2 text-xs text-slate-400">
                <li>Điều khoản hoàn hủy tour</li>
                <li>Chính sách bảo mật</li>
                <li>Bảo hiểm du lịch</li>
                <li>Câu hỏi thường gặp</li>
              </ul>
            </div>

            <div>
              <h5 className="text-white font-bold text-sm mb-4">Liên Hệ</h5>
              <div className="space-y-2 text-xs text-slate-400">
                <p className="flex items-center gap-2">
                  <PhoneCall className="w-3.5 h-3.5 text-teal-400" /> Hotline: 1900 6868
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-teal-400" /> booking@vietvivutravel.vn
                </p>
              </div>
            </div>
          </div>

          <div className="pt-8 text-center text-xs text-slate-500">
            © 2026 VietVivu Travel & Tours. Toàn bộ bản quyền được bảo lưu.
          </div>
        </div>
      </footer>
    </div>
  );
}