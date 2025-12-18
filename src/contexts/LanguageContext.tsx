import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'vi';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Header
    'nav.latestNews': 'Latest News',
    'nav.info': 'Info',
    'nav.eventSchedule': 'Event Schedule',
    'nav.floorplan': 'Floorplan',
    'nav.gallery': 'Gallery',
    'nav.activities': 'Activities',
    'nav.menu': 'Menu',
    'nav.rules': 'Rules',
    'nav.faq': 'FAQ',
    'nav.contactUs': 'Contact Us',
    'nav.eventName': 'JSC Maid Cafe',
    'nav.eventDate': 'January 16, 2026',
    'nav.eventLocation': 'FPT University HCM, Floor 4, Hall B',
    
    // Hero
    'hero.title': 'JSC Maid Cafe',
    'hero.headline': 'TBA (Headline for event)',
    'hero.date': 'January 16, 2026',
    'hero.location': 'FPT University HCM, Floor 4, Hall B',
    'hero.viewMenu': 'View Menu',
    'hero.days': 'Days',
    'hero.hours': 'Hours',
    'hero.minutes': 'Minutes',
    'hero.seconds': 'Seconds',
    
    // Latest News
    'news.title': 'Latest News',
    'news.followUs': 'Follow our Facebook page for the latest updates!',
    'news.post1': '🎉 Exciting announcement! JSC Maid Cafe is coming to FPT University HCM on January 16, 2026!',
    'news.post1Time': '2 days ago',
    'news.post2': '☕ Our menu is almost ready! Stay tuned for delicious treats and special drinks!',
    'news.post2Time': '1 week ago',
    'news.post3': '📸 Behind the scenes preparation is in full swing! We can\'t wait to welcome you all!',
    'news.post3Time': '2 weeks ago',
    'news.visitPage': 'Visit our Facebook Page →',
    
    // Activities
    'activities.title': 'Activities',
    'activities.card1Title': 'Placeholder-1',
    'activities.card1Desc': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut turpis suscipit, pharetra risus in, venenatis lectus. Phasellus eget egestas tortor. Cras pellentesque maximus sollicitudin.',
    'activities.card2Title': 'Placeholder-2',
    'activities.card2Desc': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut turpis suscipit, pharetra risus in, venenatis lectus. Phasellus eget egestas tortor. Cras pellentesque maximus sollicitudin.',
    'activities.card3Title': 'Placeholder-3',
    'activities.card3Desc': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut turpis suscipit, pharetra risus in, venenatis lectus. Phasellus eget egestas tortor. Cras pellentesque maximus sollicitudin.',
    
    // Menu
    'menu.title': 'Menu',
    'menu.tba': 'TBA',
    
    // Rules
    'rules.title': 'Rules & Guidelines',
    'rules.intro': 'Please read and follow these rules to ensure a pleasant experience for everyone!',
    'rules.rule1': 'Placeholder-1',
    'rules.rule2': 'Placeholder-2',
    'rules.rule3': 'Placeholder-3',
    'rules.rule4': 'Placeholder-4',
    'rules.rule5': 'Placeholder-5',
    'rules.rule6': 'Placeholder-6',
    'rules.rule7': 'Placeholder-7',
    'rules.rule8': 'Placeholder-8',
    'rules.note': 'These rules are subject to change. Additional guidelines may be announced before or during the event. Thank you for your cooperation!',
    
    // FAQ
    'faq.title': 'Frequently Asked Questions',
    'faq.q1': 'Do I need to purchase tickets in advance?',
    'faq.a1': 'Idk',
    'faq.q2': 'What time does the event start and end?',
    'faq.a2': 'The event will be held on January 16, 2026. Specific timings will be announced closer to the event date.',
    'faq.q3': 'Is there a dress code for the event?',
    'faq.a3': 'While there is no strict dress code, we encourage guests to dress comfortably and appropriately for the cafe atmosphere.',
    'faq.q4': 'Can I bring my own camera?',
    'faq.a4': 'Idk',
    'faq.q5': 'Are there vegetarian or special dietary options available?',
    'faq.a5': 'Idk',
    'faq.q6': 'How do I get to the venue?',
    'faq.a6': 'The event will be held at FPT University HCM Campus, Floor 4, Hall B. Detailed directions and parking information will be provided closer to the event date.',
    'faq.stillQuestions': 'Still have questions?',
    'faq.contactInfo': 'Feel free to contact us or check our Facebook page for more information!',
    
    // Footer
    'footer.eventName': 'JSC Maid Cafe',
    'footer.location': 'Event Location',
    'footer.address1': 'FPT University HCM Campus',
    'footer.address2': 'Floor 4, Hall B',
    'footer.address3': 'Lot E2a-7, Street D1, D. D1, Long Thanh My,',
    'footer.address4': 'Thu Duc City, Ho Chi Minh City',
    'footer.followFacebook': 'Follow us on Facebook',
    'footer.copyright': '© 2025 JSC Maid Cafe. All rights reserved.',
    'footer.organizer': 'Organized by Japan Style Club (JSC) - FPT University HCM',
    
    // Info Pages
    'schedule.title': 'Event Schedule',
    'schedule.comingSoon': 'Coming Soon',
    'schedule.description': 'Detailed event schedule will be announced soon. Stay tuned for updates!',
    'floorplan.title': 'Floorplan',
    'floorplan.comingSoon': 'Coming Soon',
    'floorplan.description': 'Event floorplan will be available soon. Check back later for venue layout details!',
    'gallery.title': 'Gallery',
    'gallery.comingSoon': 'Coming Soon',
    'gallery.description': 'Photo gallery will be updated as the event approaches. Stay tuned!',
  },
  vi: {
    // Header
    'nav.latestNews': 'Tin Tức Mới',
    'nav.info': 'Thông Tin',
    'nav.eventSchedule': 'Lịch Trình Sự Kiện',
    'nav.floorplan': 'Sơ Đồ Sự Kiện',
    'nav.gallery': 'Thư Viện Ảnh',
    'nav.activities': 'Hoạt Động',
    'nav.menu': 'Thực Đơn',
    'nav.rules': 'Nội Quy',
    'nav.faq': 'Câu Hỏi Thường Gặp',
    'nav.contactUs': 'Liên Hệ',
    'nav.eventName': 'JSC Maid Cafe',
    'nav.eventDate': '16 Tháng 1, 2026',
    'nav.eventLocation': 'ĐH FPT TP.HCM, Tầng 4, Hội Trường B',
    
    // Hero
    'hero.title': 'JSC Maid Cafe',
    'hero.headline': 'TBA (Tiêu đề sự kiện)',
    'hero.date': '16 Tháng 1, 2026',
    'hero.location': 'ĐH FPT TP.HCM, Tầng 4, Hội Trường B',
    'hero.viewMenu': 'Xem Thực Đơn',
    'hero.days': 'Ngày',
    'hero.hours': 'Giờ',
    'hero.minutes': 'Phút',
    'hero.seconds': 'Giây',
    
    // Latest News
    'news.title': 'Tin Tức Mới Nhất',
    'news.followUs': 'Theo dõi trang Facebook của chúng tôi để cập nhật thông tin mới nhất!',
    'news.post1': '🎉 Thông báo thú vị! JSC Maid Cafe sẽ đến ĐH FPT TP.HCM vào ngày 16 tháng 1 năm 2026!',
    'news.post1Time': '2 ngày trước',
    'news.post2': '☕ Thực đơn của chúng tôi gần hoàn thành! Hãy chờ đón các món ăn ngon và đồ uống đặc biệt!',
    'news.post2Time': '1 tuần trước',
    'news.post3': '📸 Công tác chuẩn bị hậu trường đang diễn ra sôi nổi! Chúng tôi rất mong được chào đón các bạn!',
    'news.post3Time': '2 tuần trước',
    'news.visitPage': 'Truy cập trang Facebook của chúng tôi →',
    
    // Activities
    'activities.title': 'Hoạt Động',
    'activities.card1Title': 'Hoạt động 1',
    'activities.card1Desc': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut turpis suscipit, pharetra risus in, venenatis lectus. Phasellus eget egestas tortor. Cras pellentesque maximus sollicitudin.',
    'activities.card2Title': 'Hoạt động 2',
    'activities.card2Desc': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut turpis suscipit, pharetra risus in, venenatis lectus. Phasellus eget egestas tortor. Cras pellentesque maximus sollicitudin.',
    'activities.card3Title': 'Hoạt động 3',
    'activities.card3Desc': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut turpis suscipit, pharetra risus in, venenatis lectus. Phasellus eget egestas tortor. Cras pellentesque maximus sollicitudin.',
    
    // Menu
    'menu.title': 'Thực Đơn',
    'menu.tba': 'Sẽ công bố sớm',
    
    // Rules
    'rules.title': 'Nội Quy & Hướng Dẫn',
    'rules.intro': 'Vui lòng đọc và tuân thủ các quy tắc này để đảm bảo trải nghiệm tuyệt vời cho mọi người!',
    'rules.rule1': 'Nội quy 1',
    'rules.rule2': 'Nội quy 2',
    'rules.rule3': 'Nội quy 3',
    'rules.rule4': 'Nội quy 4',
    'rules.rule5': 'Nội quy 5',
    'rules.rule6': 'Nội quy 6',
    'rules.rule7': 'Nội quy 7',
    'rules.rule8': 'Nội quy 8',
    'rules.note': 'Các quy tắc này có thể thay đổi. Hướng dẫn bổ sung có thể được thông báo trước hoặc trong sự kiện. Cảm ơn sự hợp tác của bạn!',
    
    // FAQ
    'faq.title': 'Câu Hỏi Thường Gặp',
    'faq.q1': 'Tôi có cần mua vé trước không?',
    'faq.a1': 'Chịu',
    'faq.q2': 'Sự kiện bắt đầu và kết thúc lúc mấy giờ?',
    'faq.a2': 'Sự kiện sẽ được tổ chức vào ngày 16 tháng 1 năm 2026. Thời gian cụ thể sẽ được công bố gần đến ngày sự kiện.',
    'faq.q3': 'Có yêu cầu về trang phục không?',
    'faq.a3': 'Mặc dù không có quy định nghiêm ngặt về trang phục, chúng tôi khuyến khích khách mặc thoải mái và phù hợp với không khí quán cafe.',
    'faq.q4': 'Tôi có thể mang máy ảnh riêng không?',
    'faq.a4': 'Chịu',
    'faq.q5': 'Có các lựa chọn ăn chay hoặc chế độ ăn đặc biệt không?',
    'faq.a5': 'Chịu',
    'faq.q6': 'Làm thế nào để đến địa điểm tổ chức?',
    'faq.a6': 'Sự kiện sẽ được tổ chức tại Cơ sở ĐH FPT TP.HCM, Tầng 4, Hội Trường B. Hướng dẫn chi tiết và thông tin đỗ xe sẽ được cung cấp gần đến ngày sự kiện.',
    'faq.stillQuestions': 'Vẫn còn thắc mắc?',
    'faq.contactInfo': 'Vui lòng liên hệ với chúng tôi hoặc kiểm tra trang Facebook để biết thêm thông tin!',
    
    // Footer
    'footer.eventName': 'JSC Maid Cafe',
    'footer.location': 'Địa Điểm Sự Kiện',
    'footer.address1': 'Cơ sở ĐH FPT TP.HCM',
    'footer.address2': 'Tầng 4, Hội Trường B',
    'footer.address3': 'Lô E2a-7, Đường D1, D. D1, Long Thạnh Mỹ,',
    'footer.address4': 'Thành phố Thủ Đức, TP. Hồ Chí Minh',
    'footer.followFacebook': 'Theo dõi chúng tôi trên Facebook',
    'footer.copyright': '© 2025 JSC Maid Cafe.',
    'footer.organizer': 'Tổ chức bởi Câu lạc bộ Japan Style (JSC) - ĐH FPT TP.HCM',
    
    // Info Pages
    'schedule.title': 'Lịch Trình Sự Kiện',
    'schedule.comingSoon': 'Coming Soon',
    'schedule.description': 'Lịch trình chi tiết sẽ sớm được công bố. Hãy theo dõi để cập nhật!',
    'floorplan.title': 'Sơ Đồ Sự Kiện',
    'floorplan.comingSoon': 'Coming Soon',
    'floorplan.description': 'Sơ đồ sự kiện sẽ sớm được cung cấp. Hãy quay lại sau để xem chi tiết bố trí địa điểm!',
    'gallery.title': 'Thư Viện Ảnh',
    'gallery.comingSoon': 'Coming Soon',
    'gallery.description': 'Thư viện ảnh sẽ được cập nhật khi sự kiện đến gần. Hãy theo dõi!',
  }
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
