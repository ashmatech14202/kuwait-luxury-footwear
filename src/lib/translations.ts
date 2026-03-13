export type Language = 'en' | 'ar';

export const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navbar
    'nav.home': 'Home',
    'nav.shop': 'Shop',

    // Hero
    'hero.fuel': 'FUEL YOUR',
    'hero.game': 'GAME',
    'hero.subtitle': 'Authentic Nike, Adidas, Puma & more. Delivered to your door in Kuwait.',
    'hero.shop_now': 'Shop Now',

    // Categories
    'categories.browse': 'Browse',
    'categories.title': 'Shop by Sport',
    'categories.all': 'All Categories',
    'categories.products': 'Products',

    // Trending
    'trending.label': 'Hot Right Now',
    'trending.title': 'Trending',
    'trending.view_all': 'View All',

    // New Arrivals
    'new.label': 'Just Dropped',
    'new.title': 'New Arrivals',

    // Why Choose Us
    'why.label': 'The SRK Collection Difference',
    'why.title': 'Why Athletes Choose Us',
    'why.authentic': '100% Authentic',
    'why.authentic_desc': 'Every pair verified genuine. We source directly from brands.',
    'why.performance': 'Performance Gear',
    'why.performance_desc': 'Latest tech from Nike, Adidas, Puma & top sport brands.',
    'why.delivery': 'Fast Delivery',
    'why.delivery_desc': 'Express delivery across Kuwait. Same-day in Kuwait City.',
    'why.returns': 'Easy Returns',
    'why.returns_desc': '30-day hassle-free returns. No questions asked.',

    // Reviews
    'reviews.label': 'Reviews',
    'reviews.title': 'What Athletes Say',

    // Newsletter
    'newsletter.label': 'Stay In The Game',
    'newsletter.title': 'Get Exclusive Drops',
    'newsletter.subtitle': 'Early access to new releases, exclusive deals, and athlete updates.',
    'newsletter.placeholder': 'Enter your email',
    'newsletter.subscribe': 'Subscribe',

    // Shop Page
    'shop.collection': 'Collection',
    'shop.all_products': 'All Products',
    'shop.search': 'Search shoes, brands...',
    'shop.filters': 'Filters',
    'shop.categories': 'Categories',
    'shop.brands': 'Brands',
    'shop.all_brands': 'All Brands',
    'shop.price': 'Price (KWD)',
    'shop.products_found': 'products found',
    'shop.loading': 'Loading products...',
    'shop.no_results': 'No Results',
    'shop.adjust_filters': 'Try adjusting your filters',

    // Product Page
    'product.reviews': 'reviews',
    'product.in_stock': 'in stock',
    'product.out_of_stock': 'Out of stock',
    'product.select_size': 'Select Size',
    'product.color': 'Color',
    'product.add_to_cart': 'Add to Cart',
    'product.buy_now': 'Buy Now',
    'product.authentic': '100% Authentic - Verified by SRK Collection',
    'product.free_delivery': 'Free delivery across Kuwait on orders over 30 KWD',
    'product.return_policy': '30-day easy return policy',
    'product.cod': 'Cash on Delivery available',
    'product.related': 'You May Also Like',
    'product.not_found': 'Product Not Found',
    'product.back_to_shop': 'Back to Shop',
    'product.select_size_error': 'Please select a size',
    'product.select_color_error': 'Please select a color',
    'product.out_of_stock_error': 'This variation is out of stock',
    'product.added_to_cart': 'added to cart!',

    // Cart Page
    'cart.title': 'Your Cart',
    'cart.empty': 'Cart is Empty',
    'cart.empty_subtitle': 'Time to gear up',
    'cart.order_summary': 'Order Summary',
    'cart.subtotal': 'Subtotal',
    'cart.shipping': 'Shipping',
    'cart.free': 'Free',
    'cart.total': 'Total',
    'cart.checkout': 'Proceed to Checkout',
    'cart.cod_available': 'Cash on Delivery available 🇰🇼',

    // Checkout Page
    'checkout.title': 'Checkout',
    'checkout.back_to_cart': 'Back to Cart',
    'checkout.contact_info': 'Contact Information',
    'checkout.full_name': 'Full Name',
    'checkout.phone': 'Phone',
    'checkout.email': 'Email',
    'checkout.shipping_address': 'Shipping Address',
    'checkout.area': 'Area',
    'checkout.block': 'Block',
    'checkout.street': 'Street & Building',
    'checkout.notes': 'Notes',
    'checkout.delivery_instructions': 'Delivery instructions...',
    'checkout.shipping_method': 'Shipping Method',
    'checkout.no_shipping': 'No shipping methods available',
    'checkout.payment_method': 'Payment Method',
    'checkout.cod': 'Cash on Delivery (COD)',
    'checkout.cod_desc': 'Pay when you receive your order 🇰🇼',
    'checkout.place_order': 'Place Order',
    'checkout.placing': 'Placing Order...',
    'checkout.order_confirmed': 'Order Confirmed! 🎉',
    'checkout.order_placed': 'has been placed',
    'checkout.payment_cod': 'Payment: Cash on Delivery 🇰🇼',
    'checkout.continue_shopping': 'Continue Shopping',
    'checkout.go_home': 'Go Home',
    'checkout.fill_required': 'Please fill in all required fields',
    'checkout.order_success': 'Order placed successfully!',
    'checkout.order_failed': 'Failed to place order. Please try again.',

    // Wishlist
    'wishlist.title': 'Wishlist',
    'wishlist.empty': 'No Saved Items',
    'wishlist.empty_subtitle': 'Save your favorite kicks here',
    'wishlist.browse': 'Browse Collection',

    // Footer
    'footer.shop': 'Shop',
    'footer.company': 'Company',
    'footer.about': 'About Us',
    'footer.contact': 'Contact Us',
    'footer.contact_title': 'Contact',
    'footer.whatsapp': 'WhatsApp',
    'footer.all_products': 'All Products',

    // Product Card
    'card.new': 'New',
    'card.sale': 'Sale',

    // General
    'loading': 'Loading...',
    'size': 'Size',
  },
  ar: {
    // Navbar
    'nav.home': 'الرئيسية',
    'nav.shop': 'المتجر',

    // Hero
    'hero.fuel': 'زوّد',
    'hero.game': 'لعبتك',
    'hero.subtitle': 'نايكي، أديداس، بوما وأكثر. توصيل لباب بيتك في الكويت.',
    'hero.shop_now': 'تسوق الآن',

    // Categories
    'categories.browse': 'تصفح',
    'categories.title': 'تسوق حسب الرياضة',
    'categories.all': 'جميع الفئات',
    'categories.products': 'منتجات',

    // Trending
    'trending.label': 'الأكثر رواجاً',
    'trending.title': 'الأكثر مبيعاً',
    'trending.view_all': 'عرض الكل',

    // New Arrivals
    'new.label': 'وصل حديثاً',
    'new.title': 'وصل جديد',

    // Why Choose Us
    'why.label': 'ميزة SRK Collection',
    'why.title': 'لماذا يختارنا الرياضيون',
    'why.authentic': 'أصلي 100%',
    'why.authentic_desc': 'كل زوج أصلي ومعتمد. نستورد مباشرة من العلامات التجارية.',
    'why.performance': 'معدات رياضية',
    'why.performance_desc': 'أحدث التقنيات من نايكي وأديداس وبوما وأفضل العلامات.',
    'why.delivery': 'توصيل سريع',
    'why.delivery_desc': 'توصيل سريع في جميع أنحاء الكويت. نفس اليوم في مدينة الكويت.',
    'why.returns': 'إرجاع سهل',
    'why.returns_desc': 'سياسة إرجاع سهلة لمدة 30 يوم. بدون أسئلة.',

    // Reviews
    'reviews.label': 'التقييمات',
    'reviews.title': 'ماذا يقول الرياضيون',

    // Newsletter
    'newsletter.label': 'ابقَ في اللعبة',
    'newsletter.title': 'احصل على عروض حصرية',
    'newsletter.subtitle': 'وصول مبكر للإصدارات الجديدة والعروض الحصرية.',
    'newsletter.placeholder': 'أدخل بريدك الإلكتروني',
    'newsletter.subscribe': 'اشترك',

    // Shop Page
    'shop.collection': 'المجموعة',
    'shop.all_products': 'جميع المنتجات',
    'shop.search': 'ابحث عن أحذية، ماركات...',
    'shop.filters': 'فلتر',
    'shop.categories': 'الفئات',
    'shop.brands': 'العلامات التجارية',
    'shop.all_brands': 'جميع العلامات',
    'shop.price': 'السعر (د.ك)',
    'shop.products_found': 'منتج',
    'shop.loading': 'جاري تحميل المنتجات...',
    'shop.no_results': 'لا توجد نتائج',
    'shop.adjust_filters': 'حاول تعديل الفلاتر',

    // Product Page
    'product.reviews': 'تقييم',
    'product.in_stock': 'متوفر',
    'product.out_of_stock': 'غير متوفر',
    'product.select_size': 'اختر المقاس',
    'product.color': 'اللون',
    'product.add_to_cart': 'أضف للسلة',
    'product.buy_now': 'اشتر الآن',
    'product.authentic': 'أصلي 100% - معتمد من SRK Collection',
    'product.free_delivery': 'توصيل مجاني في الكويت للطلبات فوق 30 د.ك',
    'product.return_policy': 'سياسة إرجاع سهلة لمدة 30 يوم',
    'product.cod': 'الدفع عند الاستلام متاح',
    'product.related': 'قد يعجبك أيضاً',
    'product.not_found': 'المنتج غير موجود',
    'product.back_to_shop': 'العودة للمتجر',
    'product.select_size_error': 'الرجاء اختيار المقاس',
    'product.select_color_error': 'الرجاء اختيار اللون',
    'product.out_of_stock_error': 'هذا الخيار غير متوفر',
    'product.added_to_cart': 'تمت الإضافة للسلة!',

    // Cart Page
    'cart.title': 'سلة التسوق',
    'cart.empty': 'السلة فارغة',
    'cart.empty_subtitle': 'حان وقت التسوق',
    'cart.order_summary': 'ملخص الطلب',
    'cart.subtotal': 'المجموع الفرعي',
    'cart.shipping': 'الشحن',
    'cart.free': 'مجاني',
    'cart.total': 'الإجمالي',
    'cart.checkout': 'إتمام الشراء',
    'cart.cod_available': 'الدفع عند الاستلام متاح 🇰🇼',

    // Checkout Page
    'checkout.title': 'إتمام الشراء',
    'checkout.back_to_cart': 'العودة للسلة',
    'checkout.contact_info': 'معلومات الاتصال',
    'checkout.full_name': 'الاسم الكامل',
    'checkout.phone': 'الهاتف',
    'checkout.email': 'البريد الإلكتروني',
    'checkout.shipping_address': 'عنوان الشحن',
    'checkout.area': 'المنطقة',
    'checkout.block': 'القطعة',
    'checkout.street': 'الشارع والمبنى',
    'checkout.notes': 'ملاحظات',
    'checkout.delivery_instructions': 'تعليمات التوصيل...',
    'checkout.shipping_method': 'طريقة الشحن',
    'checkout.no_shipping': 'لا توجد طرق شحن متاحة',
    'checkout.payment_method': 'طريقة الدفع',
    'checkout.cod': 'الدفع عند الاستلام',
    'checkout.cod_desc': 'ادفع عند استلام طلبك 🇰🇼',
    'checkout.place_order': 'تأكيد الطلب',
    'checkout.placing': 'جاري تقديم الطلب...',
    'checkout.order_confirmed': 'تم تأكيد الطلب! 🎉',
    'checkout.order_placed': 'تم تقديمه',
    'checkout.payment_cod': 'الدفع: عند الاستلام 🇰🇼',
    'checkout.continue_shopping': 'متابعة التسوق',
    'checkout.go_home': 'الرئيسية',
    'checkout.fill_required': 'الرجاء ملء جميع الحقول المطلوبة',
    'checkout.order_success': 'تم تقديم الطلب بنجاح!',
    'checkout.order_failed': 'فشل تقديم الطلب. حاول مرة أخرى.',

    // Wishlist
    'wishlist.title': 'المفضلة',
    'wishlist.empty': 'لا توجد عناصر محفوظة',
    'wishlist.empty_subtitle': 'احفظ أحذيتك المفضلة هنا',
    'wishlist.browse': 'تصفح المجموعة',

    // Footer
    'footer.shop': 'المتجر',
    'footer.company': 'الشركة',
    'footer.about': 'من نحن',
    'footer.contact': 'اتصل بنا',
    'footer.contact_title': 'التواصل',
    'footer.whatsapp': 'واتساب',
    'footer.all_products': 'جميع المنتجات',

    // Product Card
    'card.new': 'جديد',
    'card.sale': 'تخفيض',

    // General
    'loading': 'جاري التحميل...',
    'size': 'المقاس',
  },
};
